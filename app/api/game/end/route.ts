import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/app/lib/prisma";
import { requireApiSession } from "@/app/api/_lib/auth-guard";

const BodySchema = z.object({
  gameId: z.string().uuid().optional(),
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

  const game = gameId
    ? await prisma.game.findFirst({
        where: { id: gameId, ownerUserId: session.user.id },
        select: { id: true, status: true },
      })
    : await prisma.game.findFirst({
        where: { ownerUserId: session.user.id, status: "ACTIVE" },
        orderBy: { createdAt: "desc" },
        select: { id: true, status: true },
      });

  if (!game) {
    return NextResponse.json(
      { error: gameId ? "Not found" : "No active game" },
      { status: 404 }
    );
  }

  if (game.status !== "ACTIVE") {
    return NextResponse.json({ error: "Game already ended" }, { status: 400 });
  }

  const updated = await prisma.game.update({
    where: { id: game.id },
    data: {
      status: "ENDED",
      endedAt: new Date(),
    },
  });

  return NextResponse.json({ ok: true, game: updated });
}
