"use client";

import { useMemo, useState } from "react";
import {
  Button,
  Card,
  Grid,
  Group,
  NumberInput,
  Stack,
  Table,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import { NfcScanModal } from "@/app/components/NfcScanModal";
import { fetchJson } from "@/app/lib/http";
import { formatMoney } from "@/app/lib/money";

type SummaryResponse = {
  game: { id: string; status: "ACTIVE" | "ENDED"; playersCount: number; initialBalance: number } | null;
  players: Array<{ id: string; name: string; seat: number; balance: number; nfcCard?: { uid: string } | null }>;
  totalCirculation: number;
  transactions: unknown[];
};

export default function PlayersPage() {
  const qc = useQueryClient();
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: () => fetchJson<SummaryResponse>("/api/dashboard/summary"),
    refetchInterval: 1500,
  });

  const game = data?.game;
  const players = data?.players ?? [];

  const [name, setName] = useState("");
  const [seat, setSeat] = useState<number | undefined>(1);
  const [scanOpened, setScanOpened] = useState(false);
  const [pendingUid, setPendingUid] = useState<string | null>(null);

  const seatMax = game?.playersCount ?? 4;

  const seatOptionsHelp = useMemo(() => {
    const taken = new Set(players.map((p) => p.seat));
    const available = Array.from({ length: seatMax }, (_, i) => i + 1).filter((s) => !taken.has(s));
    return available.length > 0 ? `Seat tersedia: ${available.join(", ")}` : "Semua seat terisi.";
  }, [players, seatMax]);

  async function registerPlayer(uid: string) {
    if (!game) {
      notifications.show({ color: "red", title: "Tidak ada game", message: "Buat game dulu di Dashboard." });
      return;
    }
    if (!name.trim()) {
      notifications.show({ color: "red", title: "Nama kosong", message: "Isi nama pemain." });
      return;
    }
    if (seat == null) {
      notifications.show({ color: "red", title: "Seat kosong", message: "Pilih seat." });
      return;
    }

    try {
      await fetchJson("/api/player/register", {
        method: "POST",
        body: JSON.stringify({ gameId: game.id, name, seat, nfcUid: uid }),
      });
      notifications.show({ color: "green", title: "Berhasil", message: "Pemain terdaftar." });
      setName("");
      setSeat(1);
      await qc.invalidateQueries({ queryKey: ["summary"] });
    } catch (e) {
      notifications.show({
        color: "red",
        title: "Gagal",
        message: e instanceof Error ? e.message : "Gagal register player",
      });
    }
  }

  return (
    <Stack gap="md">
      <Group justify="space-between">
        <Stack gap={2}>
          <Title order={2}>Registrasi Player & NFC</Title>
          <Text c="dimmed" size="sm">
            {game ? `Game aktif: ${game.id.slice(0, 8)}` : "Belum ada game aktif."}
          </Text>
        </Stack>
      </Group>

      <Grid>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Card withBorder radius="md">
            <Stack gap="sm">
              <Text fw={600}>Tambah pemain</Text>
              <TextInput label="Nama" value={name} onChange={(e) => setName(e.currentTarget.value)} />
              <NumberInput
                label="Seat"
                value={seat}
                onChange={(v) => setSeat(typeof v === "number" ? v : v ? Number(v) : undefined)}
                min={1}
                max={seatMax}
              />
              <Text size="xs" c="dimmed">
                {seatOptionsHelp}
              </Text>
              <Group justify="flex-end">
                <Button
                  onClick={() => {
                    setPendingUid(null);
                    setScanOpened(true);
                  }}
                  disabled={!game}
                >
                  Scan NFC & Register
                </Button>
              </Group>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 7 }}>
          <Card withBorder radius="md">
            <Text fw={600} mb="sm">
              Daftar pemain
            </Text>
            <Table withTableBorder highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Seat</Table.Th>
                  <Table.Th>Nama</Table.Th>
                  <Table.Th>UID</Table.Th>
                  <Table.Th>Saldo</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {players.map((p) => (
                  <Table.Tr key={p.id}>
                    <Table.Td>P{p.seat}</Table.Td>
                    <Table.Td>{p.name}</Table.Td>
                    <Table.Td>{p.nfcCard?.uid ?? "-"}</Table.Td>
                    <Table.Td>{formatMoney(p.balance)}</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Card>
        </Grid.Col>
      </Grid>

      <NfcScanModal
        opened={scanOpened}
        onClose={() => setScanOpened(false)}
        title="Scan kartu pemain"
        onScanned={(uid) => {
          setPendingUid(uid);
          setScanOpened(false);
          void registerPlayer(uid);
        }}
      />
    </Stack>
  );
}
