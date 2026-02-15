import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";

import { prisma } from "@/app/lib/prisma";
import { sha256 } from "@/app/lib/tokens";

const BodySchema = z.object({
  token: z.string().min(10).max(500),
  password: z.string().min(8).max(200),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = BodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const token = parsed.data.token.trim();
  const tokenHash = sha256(token);

  const rows = await prisma.$queryRaw<{ userId: string; expiresAt: Date }[]>`
    SELECT "userId", "expiresAt"
    FROM "PasswordResetToken"
    WHERE "tokenHash" = ${tokenHash}
    LIMIT 1
  `;

  const record = rows[0];
  if (!record) {
    return NextResponse.json({ error: "Token not found" }, { status: 404 });
  }

  if (record.expiresAt.getTime() < Date.now()) {
    await prisma.$executeRaw`
      DELETE FROM "PasswordResetToken" WHERE "tokenHash" = ${tokenHash}
    `;
    return NextResponse.json({ error: "Token expired" }, { status: 410 });
  }

  const passwordHash = await bcrypt.hash(parsed.data.password, 12);

  await prisma.user.update({
    where: { id: record.userId },
    data: { passwordHash },
  });

  // Invalidate all reset tokens for this user
  await prisma.$executeRaw`
    DELETE FROM "PasswordResetToken" WHERE "userId" = ${record.userId}::uuid
  `;

  return NextResponse.json({ ok: true });
}
