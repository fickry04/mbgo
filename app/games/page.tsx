import { prisma } from "@/app/lib/prisma";
import { requireSession } from "@/app/lib/require-session";
import { GameActions } from "./ui";

export default async function GamesPage() {
  const session = await requireSession();
  const userId = session.user?.id;
  if (!userId) {
    return <GameActions games={[]} />;
  }

  const games = await prisma.game.findMany({
    where: { ownerUserId: userId },
    orderBy: { createdAt: "desc" },
    take: 20,
    include: {
      players: true,
    },
  });

  const gamesForUi = games.map((g) => ({
    id: g.id,
    status: g.status,
    createdAt: g.createdAt.toISOString(),
    playersCount: g.playersCount,
    initialBalance: g.initialBalance,
    endedAt: g.endedAt ? g.endedAt.toISOString() : null,
    players: g.players.map((p) => ({ id: p.id })),
  }));

  return <GameActions games={gamesForUi} />;
}
