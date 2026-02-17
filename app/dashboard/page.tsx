"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Badge,
  Button,
  Card,
  Grid,
  Group,
  Pagination,
  Skeleton,
  Select,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchJson } from "@/app/lib/http";
import { formatMoney } from "@/app/lib/money";
import { notifyError, notifySuccess } from "@/app/lib/notify";
import { DiceRollFab } from "../components/DiceRollFab";

type SummaryResponse = {
  game: { id: string; status: "ACTIVE" | "ENDED"; playersCount: number; initialBalance: number } | null;
  players: Array<{ id: string; name: string; seat: number; balance: number; nfcCard?: { uid: string } | null }>;
  totalCirculation: number;
  transactions: Array<{
    id: string;
    createdAt: string;
    direction: "CREDIT" | "DEBIT" | "TRANSFER";
    amount: number;
    note: string | null;
    transactionType: { label: string };
    fromPlayer: { name: string; seat: number } | null;
    toPlayer: { name: string; seat: number } | null;
  }>;
  transactionsTotal: number;
  page: number;
  pageSize: number;
};

export default function DashboardPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const qc = useQueryClient();
  const [playerFilter, setPlayerFilter] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [creating, setCreating] = useState(false);
  const [ending, setEnding] = useState(false);

  useEffect(() => {
    const tx = searchParams.get("tx");
    if (tx === "success") {
      notifySuccess("Sukses", "Transaksi tersimpan.");
      router.replace("/dashboard");
    }
  }, [router, searchParams]);

  useEffect(() => {
    setPage(1);
  }, [playerFilter]);

  const { data, isLoading } = useQuery({
    queryKey: ["summary", playerFilter, page],
    queryFn: () =>
      fetchJson<SummaryResponse>(
        `/api/dashboard/summary?${new URLSearchParams({
          ...(playerFilter ? { playerId: playerFilter } : {}),
          page: String(page),
        }).toString()}`
      ),
    refetchInterval: 1500,
  });

  const players = data?.players ?? [];
  const pageSize = data?.pageSize ?? 10;
  const totalPages = Math.max(1, Math.ceil((data?.transactionsTotal ?? 0) / pageSize));

  const playerOptions = useMemo(
    () => players.map((p) => ({ value: p.id, label: `P${p.seat} - ${p.name}` })),
    [players]
  );

  async function createGame() {
    try {
      setCreating(true);
      const body = { playersCount: 4, initialBalance: 150000 };
      await fetchJson<{ game: { id: string } }>("/api/game/create", {
        method: "POST",
        body: JSON.stringify(body),
      });
      notifySuccess("Game dibuat", "Game baru berhasil dibuat.");
      router.push("/players");
    } catch (e) {
      notifyError("Gagal", e, "Gagal create game");
    } finally {
      setCreating(false);
    }
  }

  async function endGame() {
    if (!data?.game?.id) return;
    try {
      setEnding(true);
      await fetchJson("/api/game/end", {
        method: "POST",
        body: JSON.stringify({ gameId: data.game.id }),
      });
      notifySuccess(
        "Game diakhiri",
        "Game aktif berhasil diakhiri. Kamu bisa membuat game baru."
      );
      await qc.invalidateQueries({ queryKey: ["summary"] });
    } catch (e) {
      notifyError("Gagal", e, "Gagal end game");
    } finally {
      setEnding(false);
    }
  }

  return (
    <>
    <Stack gap="md">
      <Group justify="space-between" align="flex-end">
        <Stack gap={2}>
          <Title order={2}>Dashboard Bank</Title>
          <Text c="dimmed" size="sm">
            {data?.game
              ? `Game aktif: ${data.game.id.slice(0, 8)} (${data.game.status})`
              : "Belum ada game aktif."}
          </Text>
        </Stack>
        <Group>
          <Button
            className="mbg-click"
            variant="light"
            onClick={() => router.push("/transactions")}
            disabled={!data?.game}
          >
            Tambah Transaksi
          </Button>
          {data?.game ? (
            <Button
              className="mbg-click"
              color="orange"
              variant="light"
              onClick={endGame}
              loading={ending}
            >
              End Game
            </Button>
          ) : null}
          <Button
            className="mbg-click"
            onClick={createGame}
            disabled={!!data?.game}
            loading={creating}
          >
            Create New Game
          </Button>
        </Group>
      </Group>

      <Grid>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Card withBorder radius="md" className="mbg-card">
            <Group justify="space-between" mb="sm">
              <Text fw={600}>Players</Text>
              <Badge color="green">Total: {players.length}</Badge>
            </Group>
            <Table withTableBorder withColumnBorders highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Seat</Table.Th>
                  <Table.Th>Nama</Table.Th>
                  <Table.Th>Saldo</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {isLoading
                  ? Array.from({ length: 4 }).map((_, i) => (
                      <Table.Tr key={`sk-${i}`}>
                        <Table.Td>
                          <Skeleton h={10} w={36} />
                        </Table.Td>
                        <Table.Td>
                          <Skeleton h={10} w="70%" />
                        </Table.Td>
                        <Table.Td>
                          <Skeleton h={10} w={90} />
                        </Table.Td>
                      </Table.Tr>
                    ))
                  : players.map((p) => (
                      <Table.Tr key={p.id}>
                        <Table.Td>P{p.seat}</Table.Td>
                        <Table.Td>{p.name}</Table.Td>
                        <Table.Td>{formatMoney(p.balance)}</Table.Td>
                      </Table.Tr>
                    ))}
              </Table.Tbody>
            </Table>
            <Group justify="space-between" mt="sm">
              <Text size="sm" c="dimmed">
                Total uang beredar
              </Text>
              <Text fw={700}>{formatMoney(data?.totalCirculation ?? 0)}</Text>
            </Group>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 7 }}>
          <Card withBorder radius="md" className="mbg-card">
            <Group justify="space-between" mb="sm">
              <Text fw={600}>Riwayat Transaksi</Text>
              <Select
                placeholder="Filter pemain"
                clearable
                data={playerOptions}
                value={playerFilter}
                onChange={setPlayerFilter}
                w={260}
              />
            </Group>

            <Table withTableBorder highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Jenis</Table.Th>
                  <Table.Th>Dari</Table.Th>
                  <Table.Th>Ke</Table.Th>
                  <Table.Th>Nominal</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {isLoading
                  ? Array.from({ length: 6 }).map((_, i) => (
                      <Table.Tr key={`tx-sk-${i}`}>
                        <Table.Td>
                          <Skeleton h={10} w="80%" />
                        </Table.Td>
                        <Table.Td>
                          <Skeleton h={10} w="70%" />
                        </Table.Td>
                        <Table.Td>
                          <Skeleton h={10} w="70%" />
                        </Table.Td>
                        <Table.Td>
                          <Skeleton h={10} w={90} />
                        </Table.Td>
                      </Table.Tr>
                    ))
                  : (data?.transactions ?? []).map((t) => (
                      <Table.Tr key={t.id}>
                        <Table.Td>{t.transactionType.label}</Table.Td>
                        <Table.Td>
                          {t.fromPlayer ? `P${t.fromPlayer.seat} ${t.fromPlayer.name}` : "-"}
                        </Table.Td>
                        <Table.Td>
                          {t.toPlayer ? `P${t.toPlayer.seat} ${t.toPlayer.name}` : "-"}
                        </Table.Td>
                        <Table.Td>{formatMoney(t.amount)}</Table.Td>
                      </Table.Tr>
                    ))}
                {!isLoading && (data?.transactions?.length ?? 0) === 0 ? (
                  <Table.Tr>
                    <Table.Td colSpan={4}>
                      <Text c="dimmed" size="sm">
                        Belum ada transaksi.
                      </Text>
                    </Table.Td>
                  </Table.Tr>
                ) : null}
              </Table.Tbody>
            </Table>

            {!isLoading && (data?.transactionsTotal ?? 0) > 0 ? (
              <Group justify="flex-end" mt="sm">
                <Pagination value={page} onChange={setPage} total={totalPages} size="sm" />
              </Group>
            ) : null}
          </Card>
        </Grid.Col>
      </Grid>
    </Stack>
    <DiceRollFab />
    </>
  );
}

