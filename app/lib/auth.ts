import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";

export const authOptions: NextAuthOptions = {
  // In production, you should always set NEXTAUTH_SECRET to a stable value.
  // Without it, JWT sessions can fail across restarts/instances.
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email?.trim().toLowerCase();
        const password = credentials?.password;
        if (!email || !password) return null;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return null;

        if (!user.emailVerified) {
          throw new Error("EmailNotVerified");
        }

        const ok = await bcrypt.compare(password, user.passwordHash);
        if (!ok) return null;

        return {
          id: user.id,
          name: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) token.sub = user.id;
      if (user?.name) token.name = user.name;
      // We store email in `name` for now; keep a dedicated field too.
      if (typeof user?.name === "string") token.email = user.name;
      return token;
    },
    async session({ session, token }) {
      if (token?.sub) {
        session.user = {
          ...(session.user ?? {}),
          id: token.sub,
          name: token.name ?? session.user?.name ?? null,
          email: token.email ?? session.user?.email ?? null,
        };
      }
      return session;
    },
  },
};
