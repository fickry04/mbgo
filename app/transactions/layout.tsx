import { requireSession } from "@/app/lib/require-session";
import { BankShell } from "@/app/components/BankShell";

export default async function TransactionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await requireSession();
  return <BankShell username={session.user?.name}>{children}</BankShell>;
}
