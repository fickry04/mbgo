"use client";

import { useMemo, useState } from "react";
import {
  Button,
  Card,
  Grid,
  Group,
  NumberInput,
  Skeleton,
  Stack,
  Table,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { NfcScanModal } from "@/app/components/NfcScanModal";
import { fetchJson } from "@/app/lib/http";
import { formatMoney } from "@/app/lib/money";
import { notifyError, notifySuccess, notifyWarning } from "@/app/lib/notify";

type SummaryResponse = {
  game: { id: string; status: "ACTIVE" | "ENDED"; playersCount: number; initialBalance: number } | null;
  players: Array<{ id: string; name: string; seat: number; balance: number; nfcCard?: { uid: string } | null }>;
  totalCirculation: number;
  transactions: unknown[];
};

export default function PlayersPage() {
  const qc = useQueryClient();
  const { data, isLoading } = useQuery({
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
  const [deletingPlayerId, setDeletingPlayerId] = useState<string | null>(null);
  const [registering, setRegistering] = useState(false);

  const seatMax = game?.playersCount ?? 4;

  const seatOptionsHelp = useMemo(() => {
    const taken = new Set(players.map((p) => p.seat));
    const available = Array.from({ length: seatMax }, (_, i) => i + 1).filter((s) => !taken.has(s));
    return available.length > 0 ? `Seat tersedia: ${available.join(", ")}` : "Semua seat terisi.";
  }, [players, seatMax]);

  async function registerPlayer(uid: string) {
    if (!game) {
      notifyWarning("Tidak ada game", "Buat game dulu di Dashboard.");
      return;
    }
    if (!name.trim()) {
      notifyWarning("Nama kosong", "Isi nama pemain.");
      return;
    }
    if (seat == null) {
      notifyWarning("Seat kosong", "Pilih seat.");
      return;
    }

    try {
      setRegistering(true);
      await fetchJson("/api/player/register", {
        method: "POST",
        body: JSON.stringify({ gameId: game.id, name, seat, nfcUid: uid }),
      });
      notifySuccess("Berhasil", "Pemain terdaftar.");
      setName("");
      setSeat(1);
      await qc.invalidateQueries({ queryKey: ["summary"] });
    } catch (e) {
      notifyError("Gagal", e, "Gagal register player");
    } finally {
      setRegistering(false);
    }
  }

  async function deletePlayer(playerId: string, playerName: string) {
    if (!game) {
      notifyWarning("Tidak ada game", "Tidak ada game aktif.");
      return;
    }
    if (game.status !== "ACTIVE") {
      notifyWarning("Game selesai", "Tidak bisa hapus player.");
      return;
    }

    const ok = window.confirm(`Hapus pemain "${playerName}"?`);
    if (!ok) return;

    try {
      setDeletingPlayerId(playerId);
      await fetchJson("/api/player/delete", {
        method: "POST",
        body: JSON.stringify({ playerId }),
      });
      notifySuccess("Berhasil", "Pemain terhapus.");
      await qc.invalidateQueries({ queryKey: ["summary"] });
    } catch (e) {
      notifyError("Gagal", e, "Gagal hapus player");
    } finally {
      setDeletingPlayerId(null);
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
          <Card withBorder radius="md" className="mbg-card">
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
                  className="mbg-click"
                  onClick={() => {
                    setPendingUid(null);
                    setScanOpened(true);
                  }}
                  disabled={!game}
                  loading={registering}
                >
                  Scan NFC & Register
                </Button>
              </Group>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 7 }}>
          <Card withBorder radius="md" className="mbg-card">
            <Text fw={600} mb="sm">
              Daftar pemain
            </Text>
            <div style={{ overflowX: 'auto'}}>
            <Table withTableBorder highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Seat</Table.Th>
                  <Table.Th>Nama</Table.Th>
                  <Table.Th>UID</Table.Th>
                  <Table.Th>Saldo</Table.Th>
                  <Table.Th>Aksi</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {isLoading
                  ? Array.from({ length: 4 }).map((_, i) => (
                      <Table.Tr key={`p-sk-${i}`}>
                        <Table.Td>
                          <Skeleton h={10} w={36} />
                        </Table.Td>
                        <Table.Td>
                          <Skeleton h={10} w="60%" />
                        </Table.Td>
                        <Table.Td>
                          <Skeleton h={10} w={120} />
                        </Table.Td>
                        <Table.Td>
                          <Skeleton h={10} w={90} />
                        </Table.Td>
                        <Table.Td>
                          <Skeleton h={28} w={70} />
                        </Table.Td>
                      </Table.Tr>
                    ))
                  : players.map((p) => (
                      <Table.Tr key={p.id}>
                        <Table.Td>P{p.seat}</Table.Td>
                        <Table.Td>{p.name}</Table.Td>
                        <Table.Td>{p.nfcCard?.uid ?? "-"}</Table.Td>
                        <Table.Td>{formatMoney(p.balance)}</Table.Td>
                        <Table.Td>
                          <Button
                            className="mbg-click"
                            size="xs"
                            color="red"
                            variant="light"
                            loading={deletingPlayerId === p.id}
                            disabled={!game || game.status !== "ACTIVE"}
                            onClick={() => {
                              void deletePlayer(p.id, p.name);
                            }}
                          >
                            Hapus
                          </Button>
                        </Table.Td>
                      </Table.Tr>
                    ))}
              </Table.Tbody>
            </Table>
            </div>
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
