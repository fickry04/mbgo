import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/app/lib/prisma";
import { requireApiSession } from "@/app/api/_lib/auth-guard";

const BodySchema = z.object({
  uid: z.string().min(1),
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

  const { uid, gameId } = parsed.data;

  const card = await prisma.nfcCard.findUnique({
    where: { uid },
    include: {
      player: {
        include: {
          game: true,
        },
      },
    },
  });

  if (!card) return NextResponse.json({ error: "Card not registered" }, { status: 404 });
  if (card.player.game?.ownerUserId !== session.user.id) {
    return NextResponse.json({ error: "Card not registered" }, { status: 404 });
  }
  if (gameId && card.player.gameId !== gameId) {
    return NextResponse.json({ error: "Card belongs to different game" }, { status: 400 });
  }

  return NextResponse.json({
    uid: card.uid,
    player: {
      id: card.player.id,
      name: card.player.name,
      seat: card.player.seat,
      balance: card.player.balance,
      gameId: card.player.gameId,
    },
  });
}
