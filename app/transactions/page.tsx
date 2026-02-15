import { prisma } from "@/app/lib/prisma";
import { requireSession } from "@/app/lib/require-session";
import { TransactionClient } from "./transaction-client";

export default async function TransactionsPage() {
  await requireSession();

  const templates = await prisma.transactionTemplate.findMany({
    orderBy: { name: "asc" },
    include: { transactionType: true, propertyTemplate: true },
  });

  return <TransactionClient templates={templates} />;
}
