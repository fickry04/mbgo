import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/app/lib/prisma";
import { requireApiSession } from "@/app/api/_lib/auth-guard";

const BodySchema = z.object({
  gameId: z.string().uuid(),
});

export async function POST(req: Request) {
  const session = await requireApiSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!session.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const json = await req.json().catch(() => null);
  const parsed = BodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { gameId } = parsed.data;

  const game = await prisma.game.findFirst({
    where: { id: gameId, ownerUserId: session.user.id },
    select: { id: true },
  });

  if (!game) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await prisma.game.delete({ where: { id: gameId } });

  return NextResponse.json({ ok: true });
}
