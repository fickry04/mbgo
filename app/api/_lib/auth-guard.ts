import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

export async function requireApiSession() {
  const session = await getServerSession(authOptions);
  if (!session) return null;
  return session;
}
