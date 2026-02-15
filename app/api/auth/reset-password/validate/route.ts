import { NextResponse } from "next/server";

import { prisma } from "@/app/lib/prisma";
import { sha256 } from "@/app/lib/tokens";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token") ?? "";

  if (!token || token.trim().length < 10) {
    return NextResponse.json({ error: "Invalid token" }, { status: 400 });
  }

  const tokenHash = sha256(token);

  const rows = await prisma.$queryRaw<{ expiresAt: Date }[]>`
    SELECT "expiresAt"
    FROM "PasswordResetToken"
    WHERE "tokenHash" = ${tokenHash}
    LIMIT 1
  `;

  const record = rows[0];
  if (!record) {
    return NextResponse.json({ error: "Token not found" }, { status: 404 });
  }

  if (record.expiresAt.getTime() < Date.now()) {
    return NextResponse.json({ error: "Token expired" }, { status: 410 });
  }

  return NextResponse.json({ ok: true });
}
