import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/app/lib/prisma";
import { requireApiSession } from "@/app/api/_lib/auth-guard";
import { TransactionDirection, TransactionKind } from "@/app/generated/prisma/client";

const BodySchema = z.object({
  gameId: z.string().uuid().optional(),
  templateId: z.string().uuid().optional(),
  typeCode: z.nativeEnum(TransactionKind).optional(),
  amount: z.number().int().positive().optional(),
  note: z.string().max(120).optional(),
  fromUid: z.string().min(1),
  toUid: z.string().min(1).optional(),
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

  const { gameId, templateId, typeCode, note, fromUid, toUid } = parsed.data;

  const game = gameId
    ? await prisma.game.findFirst({ where: { id: gameId, ownerUserId: session.user.id } })
    : await prisma.game.findFirst({
        where: { status: "ACTIVE", ownerUserId: session.user.id },
        orderBy: { createdAt: "desc" },
      });

  if (!game) return NextResponse.json({ error: "No active game" }, { status: 404 });
  if (game.status !== "ACTIVE") return NextResponse.json({ error: "Game already ended" }, { status: 400 });

  const template = templateId
    ? await prisma.transactionTemplate.findUnique({
        where: { id: templateId },
        include: { transactionType: true },
      })
    : null;

  const resolvedTypeCode = template?.transactionType.code ?? typeCode;
  if (!resolvedTypeCode) {
    return NextResponse.json({ error: "Missing templateId or typeCode" }, { status: 400 });
  }

  const transactionType = template?.transactionType ??
    (await prisma.transactionType.findUnique({ where: { code: resolvedTypeCode } }));

  if (!transactionType) return NextResponse.json({ error: "Unknown transaction type" }, { status: 400 });

  const direction = template?.direction ??
    (resolvedTypeCode === "TRANSFER" || resolvedTypeCode === "PAY_RENT"
      ? TransactionDirection.TRANSFER
      : TransactionDirection.DEBIT);

  const amount = parsed.data.amount ?? template?.defaultAmount;
  if (!amount || amount <= 0) {
    return NextResponse.json({ error: "Missing amount" }, { status: 400 });
  }

  try {
    const txResult = await prisma.$transaction(async (tx) => {
      const fromPlayer = await tx.player.findFirst({
        where: { nfcCardUid: fromUid, gameId: game.id },
      });
      if (!fromPlayer) throw new Error("FROM_PLAYER_INVALID");

      let toPlayer: { id: string; balance: number } | null = null;
      if (direction === "TRANSFER") {
        if (!toUid) throw new Error("TO_UID_REQUIRED");
        const p = await tx.player.findFirst({ where: { nfcCardUid: toUid, gameId: game.id } });
        if (!p) throw new Error("TO_PLAYER_INVALID");
        if (p.id === fromPlayer.id) throw new Error("SAME_PLAYER");
        toPlayer = { id: p.id, balance: p.balance };
      }

      const fromBefore = fromPlayer.balance;
      const toBefore = toPlayer?.balance ?? null;

      let fromAfter = fromBefore;
      let toAfter = toBefore;

      if (direction === "CREDIT") {
        fromAfter = fromBefore + amount;
        await tx.player.update({ where: { id: fromPlayer.id }, data: { balance: fromAfter } });
      } else if (direction === "DEBIT") {
        fromAfter = fromBefore - amount;
        await tx.player.update({ where: { id: fromPlayer.id }, data: { balance: fromAfter } });
      } else {
        if (!toPlayer || toBefore === null) throw new Error("TO_UID_REQUIRED");
        fromAfter = fromBefore - amount;
        toAfter = toBefore + amount;
        await tx.player.update({ where: { id: fromPlayer.id }, data: { balance: fromAfter } });
        await tx.player.update({ where: { id: toPlayer.id }, data: { balance: toAfter } });
      }

      const ledger = await tx.transaction.create({
        data: {
          gameId: game.id,
          transactionTypeId: transactionType.id,
          direction,
          amount,
          note,
          fromPlayerId: fromPlayer.id,
          toPlayerId: toPlayer?.id ?? null,
          fromBalanceBefore: fromBefore,
          fromBalanceAfter: fromAfter,
          toBalanceBefore: toBefore,
          toBalanceAfter: toAfter,
        },
      });

      return {
        transaction: ledger,
        from: { id: fromPlayer.id, balanceBefore: fromBefore, balanceAfter: fromAfter },
        to: toPlayer
          ? { id: toPlayer.id, balanceBefore: toBefore, balanceAfter: toAfter }
          : null,
      };
    });

    return NextResponse.json({
      game,
      transactionType,
      direction,
      amount,
      result: txResult,
    });
  } catch (e) {
    const code = e instanceof Error ? e.message : "";
    if (
      code === "FROM_PLAYER_INVALID" ||
      code === "TO_UID_REQUIRED" ||
      code === "TO_PLAYER_INVALID" ||
      code === "SAME_PLAYER"
    ) {
      return NextResponse.json({ error: code }, { status: 400 });
    }

    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
