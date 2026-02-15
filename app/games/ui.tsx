"use client";

import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Group,
  NumberInput,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { useQueryClient } from "@tanstack/react-query";
import { fetchJson } from "@/app/lib/http";

type Game = {
  id: string;
  status: "ACTIVE" | "ENDED";
  createdAt: string;
  playersCount: number;
  initialBalance: number;
  endedAt: string | null;
  players: Array<{ id: string }>;
};

export function GameActions({ games }: { games: Game[] }) {
  const qc = useQueryClient();
  const [playersCount, setPlayersCount] = useState<number | undefined>(2);
  const [initialBalance, setInitialBalance] = useState<number | undefined>(150000);

  const active = games.find((g) => g.status === "ACTIVE") ?? null;

  async function createGame() {
    if (playersCount == null || initialBalance == null) return;
    try {
      await fetchJson("/api/game/create", {
        method: "POST",
        body: JSON.stringify({
          playersCount,
          initialBalance,
        }),
      });
      notifications.show({ color: "green", title: "OK", message: "Game dibuat." });
      await qc.invalidateQueries();
      location.reload();
    } catch (e) {
      notifications.show({ color: "red", title: "Gagal", message: e instanceof Error ? e.message : "Gagal" });
    }
  }

  async function deleteGame(gameId: string) {
    modals.openConfirmModal({
      title: "Delete game?",
      children: (
        <Text size="sm">
          Semua player, kartu NFC terhubung, dan transaksi pada game ini akan ikut terhapus.
        </Text>
      ),
      labels: { confirm: "Delete", cancel: "Cancel" },
      confirmProps: { color: "red" },
      onConfirm: async () => {
        try {
          await fetchJson("/api/game/delete", {
            method: "POST",
            body: JSON.stringify({ gameId }),
          });
          notifications.show({ color: "green", title: "OK", message: "Game dihapus." });
          await qc.invalidateQueries();
          location.reload();
        } catch (e) {
          notifications.show({
            color: "red",
            title: "Gagal",
            message: e instanceof Error ? e.message : "Gagal delete game",
          });
        }
      },
    });
  }

  async function endGame(gameId: string) {
    modals.openConfirmModal({
      title: "End game?",
      children: (
        <Text size="sm">
          Game akan ditandai sebagai ENDED. Setelah itu kamu bisa membuat game baru.
        </Text>
      ),
      labels: { confirm: "End", cancel: "Cancel" },
      confirmProps: { color: "orange" },
      onConfirm: async () => {
        try {
          await fetchJson("/api/game/end", {
            method: "POST",
            body: JSON.stringify({ gameId }),
          });
          notifications.show({ color: "green", title: "OK", message: "Game diakhiri." });
          await qc.invalidateQueries();
          location.reload();
        } catch (e) {
          notifications.show({
            color: "red",
            title: "Gagal",
            message: e instanceof Error ? e.message : "Gagal end game",
          });
        }
      },
    });
  }

  return (
    <Stack gap="md">
      <Group justify="space-between">
        <Title order={2}>Games</Title>
        {active ? <Badge color="green">Active</Badge> : <Badge color="yellow">No active</Badge>}
      </Group>

      <Card withBorder radius="md">
        <Group align="flex-end" justify="space-between">
          <Stack gap={0}>
            <Text fw={600}>Create New Game</Text>
            <Text size="sm" c="dimmed">
              Tentukan jumlah pemain (2–4) & saldo awal.
            </Text>
          </Stack>
          <Group>
            <NumberInput
              label="Players"
              value={playersCount}
              onChange={(v) =>
                setPlayersCount(typeof v === "number" ? v : v ? Number(v) : undefined)
              }
              min={2}
              max={4}
            />
            <NumberInput
              label="Saldo awal"
              value={initialBalance}
              onChange={(v) =>
                setInitialBalance(typeof v === "number" ? v : v ? Number(v) : undefined)
              }
              min={0}
            />
            <Button onClick={createGame} disabled={!!active}>
              Create
            </Button>
          </Group>
        </Group>
      </Card>

      <Card withBorder radius="md">
        <Text fw={600} mb="sm">
          History
        </Text>
        <div style={{ overflowX: 'auto' }}>
          <Table withTableBorder highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>GameID</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Players</Table.Th>
              <Table.Th>Saldo awal</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {games.map((g) => (
              <Table.Tr key={g.id}>
                <Table.Td>{g.id.slice(0, 8)}</Table.Td>
                <Table.Td>{g.status}</Table.Td>
                <Table.Td>{g.players.length}/{g.playersCount}</Table.Td>
                <Table.Td>{g.initialBalance}</Table.Td>
                <Table.Td>
                  <Group justify="flex-end">
                    {g.status === "ACTIVE" ? (
                      <Button
                        size="xs"
                        color="orange"
                        variant="light"
                        onClick={() => endGame(g.id)}
                      >
                        End
                      </Button>
                    ) : null}
                    <Button
                      size="xs"
                      color="red"
                      variant="light"
                      onClick={() => deleteGame(g.id)}
                    >
                      Delete
                    </Button>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
          </Table>
        </div>
      </Card>
    </Stack>
  );
}
