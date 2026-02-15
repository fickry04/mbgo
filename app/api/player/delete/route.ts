import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/app/lib/prisma";
import { requireApiSession } from "@/app/api/_lib/auth-guard";

const BodySchema = z.object({
  playerId: z.string().uuid(),
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

  const { playerId, gameId } = parsed.data;

  const player = await prisma.player.findFirst({
    where: {
      id: playerId,
      ...(gameId ? { gameId } : {}),
      game: {
        is: {
          ownerUserId: session.user.id,
        },
      },
    },
    select: {
      id: true,
      game: {
        select: {
          id: true,
          status: true,
        },
      },
    },
  });

  if (!player) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (player.game.status !== "ACTIVE") {
    return NextResponse.json({ error: "Game already ended" }, { status: 400 });
  }

  await prisma.player.delete({ where: { id: player.id } });

  return NextResponse.json({ ok: true });
}
