import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";

import { prisma } from "@/app/lib/prisma";
import { generateEmailVerificationToken } from "@/app/lib/tokens";
import { getAppBaseUrl, sendVerificationEmail } from "@/app/lib/email";

const BodySchema = z.object({
  username: z.string().min(1).max(200),
  email: z.string().email(),
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

  const username = parsed.data.username.trim();
  const email = parsed.data.email.trim();
  const password = parsed.data.password;

  let existing = await prisma.user.findUnique({ where: { username } });
  if (existing) {
    return NextResponse.json({ error: "Username already registered" }, { status: 409 });
  }

  existing = await prisma.user.findUnique({ where: { email } });
  if (existing?.emailVerified) {
    return NextResponse.json({ error: "Email already registered" }, { status: 409 });
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const user =
    existing ??
    (await prisma.user.create({
      data: {
        username,
        email,
        passwordHash,
      },
    }));

  if (existing) {
    await prisma.user.update({ where: { id: existing.id }, data: { passwordHash } });
  }

  // Create & store token (hash only)
  const { token, tokenHash } = generateEmailVerificationToken();
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24); // 24h

  // Remove older tokens for this user to keep it simple
  await prisma.emailVerificationToken.deleteMany({ where: { userId: user.id } });

  await prisma.emailVerificationToken.create({
    data: {
      tokenHash,
      email,
      userId: user.id,
      expiresAt,
    },
  });

  const baseUrl = getAppBaseUrl();
  const verifyUrl = `${baseUrl}/api/auth/verify-email?token=${encodeURIComponent(token)}`;

  await sendVerificationEmail({ to: email, verifyUrl });

  return NextResponse.json({ ok: true });
}
