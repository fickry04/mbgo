import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/app/lib/prisma";
import { requireApiSession } from "@/app/api/_lib/auth-guard";

const BodySchema = z.object({
  gameId: z.string().uuid().optional(),
  name: z.string().min(1).max(40),
  seat: z.number().int().min(1).max(4),
  nfcUid: z.string().min(1),
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

  const { gameId, name, seat, nfcUid } = parsed.data;

  const game = gameId
    ? await prisma.game.findFirst({ where: { id: gameId, ownerUserId: session.user.id } })
    : await prisma.game.findFirst({
        where: { status: "ACTIVE", ownerUserId: session.user.id },
        orderBy: { createdAt: "desc" },
      });

  if (!game) return NextResponse.json({ error: "No active game" }, { status: 404 });
  if (game.status !== "ACTIVE") return NextResponse.json({ error: "Game already ended" }, { status: 400 });
  if (seat > game.playersCount) {
    return NextResponse.json({ error: "Seat exceeds playersCount" }, { status: 400 });
  }

  const result = await prisma.$transaction(async (tx) => {
    const existingSeat = await tx.player.findUnique({
      where: { gameId_seat: { gameId: game.id, seat } },
      select: { id: true },
    });
    if (existingSeat) throw new Error("SEAT_TAKEN");

    const existingUid = await tx.player.findUnique({
      where: { 
        id: game.id,
        nfcCardUid: nfcUid
      },
      select: { id: true },
    });
    if (existingUid) throw new Error("UID_TAKEN");

    const player = await tx.player.create({
      data: {
        gameId: game.id,
        name,
        seat,
        balance: game.initialBalance,
        nfcCardUid: nfcUid
      }
    });

    return player;
  });

  return NextResponse.json({ player: result, game });
}
