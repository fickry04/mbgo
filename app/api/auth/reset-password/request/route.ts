import { NextResponse } from "next/server";
import { z } from "zod";
import crypto from "crypto";

import { prisma } from "@/app/lib/prisma";
import { generatePasswordResetToken } from "@/app/lib/tokens";
import { getAppBaseUrl, sendPasswordResetEmail } from "@/app/lib/email";

const BodySchema = z.object({
  email: z.string().email(),
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

  const emailInput = parsed.data.email.trim();

  // Avoid account enumeration: always return ok.
  const user = await prisma.user.findFirst({
    where: {
      email: { equals: emailInput, mode: "insensitive" },
    },
  });

  if (!user?.email || !user.emailVerified) {
    return NextResponse.json({ ok: true });
  }

  const email = user.email;

  const { token, tokenHash } = generatePasswordResetToken();
  const expiresAt = new Date(Date.now() + 1000 * 60 * 30); // 30 minutes
  const id = crypto.randomUUID();

  // Keep it simple: only 1 active token per user
  await prisma.passwordResetToken.deleteMany({where: {userId: user.id}});

  await prisma.passwordResetToken.create({
    data: {
      id: id,
      expiresAt: expiresAt,
      tokenHash: tokenHash,
      email: email,
      userId: user.id
    }
  });

  const baseUrl = getAppBaseUrl();
  const resetUrl = `${baseUrl}/reset-password?token=${encodeURIComponent(token)}`;

  await sendPasswordResetEmail({ to: email, resetUrl });

  return NextResponse.json({ ok: true });
}
