import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { requireApiSession } from "@/app/api/_lib/auth-guard";

export async function GET(req: Request) {
  const session = await requireApiSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!session.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const gameId = searchParams.get("gameId") ?? undefined;
  const playerId = searchParams.get("playerId") ?? undefined;

  const game = gameId
    ? await prisma.game.findFirst({
        where: { id: gameId, ownerUserId: session.user.id },
      })
    : await prisma.game.findFirst({
        where: { status: "ACTIVE", ownerUserId: session.user.id },
        orderBy: { createdAt: "desc" },
      });

  if (!game) {
    return NextResponse.json({
      game: null,
      players: [],
      totalCirculation: 0,
      transactions: [],
    });
  }

  const players = await prisma.player.findMany({
    where: { gameId: game.id },
    orderBy: { seat: "asc" }
  });

  const totalCirculation = players.reduce(
    (sum: number, p: { balance: number }) => sum + p.balance,
    0
  );

  const transactions = await prisma.transaction.findMany({
    where: {
      gameId: game.id,
      ...(playerId
        ? {
            OR: [{ fromPlayerId: playerId }, { toPlayerId: playerId }],
          }
        : {}),
    },
    orderBy: { createdAt: "desc" },
    take: 50,
    include: {
      transactionType: true,
      fromPlayer: true,
      toPlayer: true,
    },
  });

  return NextResponse.json({
    game,
    players,
    totalCirculation,
    transactions,
  });
}
