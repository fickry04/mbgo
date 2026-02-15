import { NextResponse } from "next/server";

import { prisma } from "@/app/lib/prisma";
import { sha256 } from "@/app/lib/tokens";
import { getAppBaseUrl } from "@/app/lib/email";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token") ?? "";

  if (!token || token.trim().length < 10) {
    return NextResponse.json({ error: "Invalid token" }, { status: 400 });
  }

  const tokenHash = sha256(token);

  const record = await prisma.emailVerificationToken.findUnique({ where: { tokenHash } });
  if (!record) {
    return NextResponse.json({ error: "Token not found" }, { status: 404 });
  }

  if (record.expiresAt.getTime() < Date.now()) {
    await prisma.emailVerificationToken.delete({ where: { tokenHash } }).catch(() => null);
    return NextResponse.json({ error: "Token expired" }, { status: 410 });
  }

  await prisma.user.update({
    where: { id: record.userId },
    data: { emailVerified: new Date(), email: record.email },
  });

  await prisma.emailVerificationToken.delete({ where: { tokenHash } }).catch(() => null);

  const baseUrl = getAppBaseUrl();
  return NextResponse.redirect(`${baseUrl}/login?verified=1`);
}
