import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/app/lib/prisma";
import { requireApiSession } from "@/app/api/_lib/auth-guard";

const BodySchema = z.object({
  playersCount: z.number().int().min(2).max(4),
  initialBalance: z.number().int().min(0).default(150000),
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

  const { playersCount, initialBalance } = parsed.data;

  const existingActive = await prisma.game.findFirst({
    where: { ownerUserId: session.user.id, status: "ACTIVE" },
    orderBy: { createdAt: "desc" },
    select: { id: true },
  });

  if (existingActive) {
    return NextResponse.json(
      { error: "Active game exists", gameId: existingActive.id },
      { status: 409 }
    );
  }

  const game = await prisma.game.create({
    data: {
      ownerUserId: session.user.id,
      playersCount,
      initialBalance,
    },
  });

  return NextResponse.json({ game });
}
