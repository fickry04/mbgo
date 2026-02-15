"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Badge,
  Button,
  Card,
  Grid,
  Group,
  NumberInput,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
  Transition,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import type {
  PropertyTemplate,
  TransactionDirection,
  TransactionTemplate,
  TransactionType,
} from "@prisma/client";
import { NfcScanModal } from "@/app/components/NfcScanModal";
import { PropertyTemplateCard } from "@/app/components/PropertyTemplateCard";
import { fetchJson } from "@/app/lib/http";
import type { PropertyTemplateCardData } from "@/app/lib/property-template";

type TemplateWithType = TransactionTemplate & {
  transactionType: TransactionType;
  propertyTemplate?: PropertyTemplate | null;
};

function toCardData(p: PropertyTemplate): PropertyTemplateCardData {
  return {
    id: p.id,
    name: p.name,
    propertyGroup: p.propertyGroup,
    kind: p.kind,
    propertySet: p.propertySet,
    country: p.country,
    landmark: p.landmark,
    icon: p.icon,
    price: p.price,
    rentBase: p.rentBase,
    rent1House: p.rent1House,
    rent2Houses: p.rent2Houses,
    rent3Houses: p.rent3Houses,
    rent4Houses: p.rent4Houses,
    rentHotel: p.rentHotel,
    housePrice: p.housePrice,
    hotelPrice: p.hotelPrice,
    mortgageValue: p.mortgageValue,
  };
}

export function TransactionClient({ templates }: { templates: TemplateWithType[] }) {
  const searchParams = useSearchParams();

  const templateOptions = useMemo(
    () =>
      templates.map((t) => ({
        value: t.id,
        label: `${t.name}`,
      })),
    [templates]
  );

  const initialTemplateIdFromUrl = searchParams.get("templateId");
  const initialTemplateId =
    initialTemplateIdFromUrl && templates.some((t) => t.id === initialTemplateIdFromUrl)
      ? initialTemplateIdFromUrl
      : templateOptions[0]?.value ?? null;

  const [templateId, setTemplateId] = useState<string | null>(initialTemplateId);
  const selected = useMemo(
    () => templates.find((t) => t.id === templateId) ?? null,
    [templates, templateId]
  );

  const [amount, setAmount] = useState<number | undefined>(selected?.defaultAmount ?? 50);
  const [note, setNote] = useState("");

  const [fromUid, setFromUid] = useState<string | null>(null);
  const [toUid, setToUid] = useState<string | null>(null);
  const [scanFromOpen, setScanFromOpen] = useState(false);
  const [scanToOpen, setScanToOpen] = useState(false);

  const [success, setSuccess] = useState(false);
  const direction: TransactionDirection | null = selected?.direction ?? null;

  async function submit() {
    if (!templateId) {
      notifications.show({ color: "red", title: "Template kosong", message: "Pilih template." });
      return;
    }
    if (!fromUid) {
      notifications.show({ color: "red", title: "Belum scan", message: "Scan kartu pemain sumber." });
      return;
    }
    if (direction === "TRANSFER" && !toUid) {
      notifications.show({ color: "red", title: "Belum scan", message: "Scan kartu pemain tujuan." });
      return;
    }
    if (amount == null || Number(amount) <= 0) {
      notifications.show({ color: "red", title: "Nominal invalid", message: "Isi nominal." });
      return;
    }

    try {
      await fetchJson("/api/transaction/create", {
        method: "POST",
        body: JSON.stringify({
          templateId,
          fromUid,
          toUid: direction === "TRANSFER" ? toUid : undefined,
          amount: Number(amount),
          note: note.trim().length ? note.trim() : undefined,
        }),
      });

      setSuccess(true);
      setTimeout(() => setSuccess(false), 1200);
      notifications.show({ color: "green", title: "Sukses", message: "Transaksi tersimpan." });

      setFromUid(null);
      setToUid(null);
      setNote("");
    } catch (e) {
      notifications.show({
        color: "red",
        title: "Gagal",
        message: e instanceof Error ? e.message : "Gagal membuat transaksi",
      });
    }
  }

  return (
    <Stack gap="md">
      <Group justify="space-between">
        <Title order={2}>Transaksi</Title>
        <Transition mounted={success} transition="fade" duration={200} timingFunction="ease">
          {(styles) => (
            <Badge style={styles} color="green" size="lg">
              Transaksi berhasil
            </Badge>
          )}
        </Transition>
      </Group>

      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card withBorder radius="md">
            <Stack gap="sm">
              <Select
                label="Template transaksi"
                data={templateOptions}
                value={templateId}
                onChange={(v) => {
                  setTemplateId(v);
                  const next = templates.find((t) => t.id === v);
                  if (next?.defaultAmount) setAmount(next.defaultAmount);
                }}
                searchable
                nothingFoundMessage="Tidak ada"
              />

              <NumberInput
                label="Nominal"
                value={amount}
                onChange={(v) => setAmount(typeof v === "number" ? v : v ? Number(v) : undefined)}
                min={1}
                thousandSeparator="," 
              />

              <TextInput label="Catatan (opsional)" value={note} onChange={(e) => setNote(e.currentTarget.value)} />

              <Group justify="space-between" mt="xs">
                <Button variant="light" onClick={() => setScanFromOpen(true)}>
                  Scan Sumber
                </Button>
                <Text size="sm" c="dimmed">
                  {fromUid ? `UID: ${fromUid}` : "Belum scan"}
                </Text>
              </Group>

              {direction === "TRANSFER" ? (
                <Group justify="space-between">
                  <Button variant="light" color="green" onClick={() => setScanToOpen(true)}>
                    Scan Tujuan
                  </Button>
                  <Text size="sm" c="dimmed">
                    {toUid ? `UID: ${toUid}` : "Belum scan"}
                  </Text>
                </Group>
              ) : null}

              <Group justify="flex-end" mt="sm">
                <Button onClick={submit}>Submit</Button>
              </Group>

              <Text size="xs" c="dimmed">
                Tip: Web NFC bekerja di Chrome Android.
              </Text>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card withBorder radius="md">
            <Stack gap="xs">
              <Text fw={600}>Info template</Text>
              <Text size="sm" c="dimmed">
                {selected
                  ? `${selected.transactionType.label} • ${selected.direction}`
                  : "Pilih template"}
              </Text>
              <Text size="sm">{selected?.description ?? "-"}</Text>

              {selected?.propertyTemplate ? (
                <PropertyTemplateCard tpl={toCardData(selected.propertyTemplate)} />
              ) : null}
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>

      <NfcScanModal
        opened={scanFromOpen}
        onClose={() => setScanFromOpen(false)}
        title="Scan kartu pemain sumber"
        onScanned={(uid) => {
          setFromUid(uid);
          setScanFromOpen(false);
        }}
      />

      <NfcScanModal
        opened={scanToOpen}
        onClose={() => setScanToOpen(false)}
        title="Scan kartu pemain tujuan"
        onScanned={(uid) => {
          setToUid(uid);
          setScanToOpen(false);
        }}
      />
    </Stack>
  );
}
