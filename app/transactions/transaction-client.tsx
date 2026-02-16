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
import type {
  PropertyTemplate,
  TransactionDirection,
  TransactionTemplate,
  TransactionType,
} from "@/app/generated/prisma/client";
import { NfcScanModal } from "@/app/components/NfcScanModal";
import { PropertyTemplateCard } from "@/app/components/PropertyTemplateCard";
import { fetchJson } from "@/app/lib/http";
import type { PropertyTemplateCardData } from "@/app/lib/property-template";
import { notifyError, notifySuccess, notifyWarning } from "@/app/lib/notify";

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

  const GENERAL_VALUE = "__general";

  const templateById = useMemo(() => new Map(templates.map((t) => [t.id, t] as const)), [templates]);

  const propertyList = useMemo(() => {
    const map = new Map<string, PropertyTemplate>();
    for (const t of templates) {
      const p = t.propertyTemplate;
      if (p) map.set(p.id, p);
    }
    return [...map.values()].sort((a, b) => {
      const aIdx = a.boardIndex ?? 0;
      const bIdx = b.boardIndex ?? 0;
      if (aIdx !== bIdx) return aIdx - bIdx;
      return a.name.localeCompare(b.name);
    });
  }, [templates]);

  const propertyOptions = useMemo(
    () => [
      { value: GENERAL_VALUE, label: "Umum (tanpa properti)" },
      ...propertyList.map((p) => ({ value: p.id, label: p.name })),
    ],
    [propertyList]
  );

  function colorForTypeCode(typeCode: string) {
    switch (typeCode) {
      case "BUY_PROPERTY":
        return "blue";
      case "PAY_RENT":
        return "orange";
      case "MORTGAGE_PROPERTY":
        return "grape";
      case "TRANSFER":
        return "green";
      default:
        return undefined;
    }
  }

  const initialTemplateIdFromUrl = searchParams.get("templateId");
  const initialTemplateFromUrl =
    initialTemplateIdFromUrl && templateById.has(initialTemplateIdFromUrl)
      ? (templateById.get(initialTemplateIdFromUrl) ?? null)
      : null;

  const initialPropertyId = initialTemplateFromUrl?.propertyTemplateId ?? GENERAL_VALUE;
  const [propertyId, setPropertyId] = useState<string>(initialPropertyId);

  const [templateId, setTemplateId] = useState<string | null>(initialTemplateFromUrl?.id ?? null);
  const selected = useMemo(() => (templateId ? templateById.get(templateId) ?? null : null), [templateId, templateById]);

  const selectedProperty = useMemo(() => {
    if (propertyId === GENERAL_VALUE) return null;
    return propertyList.find((p) => p.id === propertyId) ?? null;
  }, [propertyId, propertyList]);

  const txTemplatesForSelection = useMemo(() => {
    if (propertyId === GENERAL_VALUE) return templates.filter((t) => !t.propertyTemplateId);
    return templates.filter((t) => t.propertyTemplateId === propertyId);
  }, [propertyId, templates]);

  function templateByExactName(list: TemplateWithType[], name: string) {
    return list.find((t) => t.name === name) ?? null;
  }

  const [amount, setAmount] = useState<number | undefined>(selected?.defaultAmount ?? undefined);
  const [note, setNote] = useState("");

  const [fromUid, setFromUid] = useState<string | null>(null);
  const [toUid, setToUid] = useState<string | null>(null);
  const [scanFromOpen, setScanFromOpen] = useState(false);
  const [scanToOpen, setScanToOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [success, setSuccess] = useState(false);
  const direction: TransactionDirection | null = selected?.direction ?? null;

  async function submit() {
    if (!templateId) {
      notifyWarning("Template kosong", "Pilih transaksi.");
      return;
    }
    if (!fromUid) {
      notifyWarning("Belum scan", "Scan kartu pemain sumber.");
      return;
    }
    if (direction === "TRANSFER" && !toUid) {
      notifyWarning("Belum scan", "Scan kartu pemain tujuan.");
      return;
    }
    if (amount == null || Number(amount) <= 0) {
      notifyWarning("Nominal invalid", "Isi nominal.");
      return;
    }

    try {
      setSubmitting(true);
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
      notifySuccess("Sukses", "Transaksi tersimpan.");

      setFromUid(null);
      setToUid(null);
      setNote("");
    } catch (e) {
      notifyError("Gagal", e, "Gagal membuat transaksi");
    } finally {
      setSubmitting(false);
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
          <Stack gap="xs">
            <Select
                label="Properti"
                data={propertyOptions}
                value={propertyId}
                onChange={(v) => {
                  const nextPropertyId = v ?? GENERAL_VALUE;
                  setPropertyId(nextPropertyId);
                  setTemplateId(null);
                  setAmount(undefined);
                }}
                searchable
                nothingFoundMessage="Tidak ada"
              />

              <Text size="xs" c="dimmed">
                Pilih cepat transaksi lewat kartu.
              </Text>

            {selectedProperty ? (
              <PropertyTemplateCard
                tpl={toCardData(selectedProperty)}
                actions={
                  (() => {
                    const name = selectedProperty.name;

                    const buyTpl = templateByExactName(txTemplatesForSelection, `Beli Properti — ${name}`);

                    const rentBaseTpl =
                      selectedProperty.kind === "UTILITY"
                        ? templateByExactName(txTemplatesForSelection, `Bayar Utilitas (1 util) — ${name}`)
                        : selectedProperty.kind === "TRANSPORT"
                          ? templateByExactName(txTemplatesForSelection, `Bayar Sewa (1 transport) — ${name}`)
                          : templateByExactName(txTemplatesForSelection, `Bayar Sewa (dasar) — ${name}`);

                    const rent1Tpl =
                      selectedProperty.kind === "UTILITY"
                        ? templateByExactName(txTemplatesForSelection, `Bayar Utilitas (2 util) — ${name}`)
                        : selectedProperty.kind === "TRANSPORT"
                          ? templateByExactName(txTemplatesForSelection, `Bayar Sewa (2 transport) — ${name}`)
                          : templateByExactName(txTemplatesForSelection, `Bayar Sewa (1 rumah) — ${name}`);

                    const rent2Tpl =
                      selectedProperty.kind === "TRANSPORT"
                        ? templateByExactName(txTemplatesForSelection, `Bayar Sewa (3 transport) — ${name}`)
                        : templateByExactName(txTemplatesForSelection, `Bayar Sewa (2 rumah) — ${name}`);

                    const rent3Tpl =
                      selectedProperty.kind === "TRANSPORT"
                        ? templateByExactName(txTemplatesForSelection, `Bayar Sewa (4 transport) — ${name}`)
                        : templateByExactName(txTemplatesForSelection, `Bayar Sewa (3 rumah) — ${name}`);

                    const rent4Tpl = templateByExactName(txTemplatesForSelection, `Bayar Sewa (4 rumah) — ${name}`);
                    const rentHotelTpl = templateByExactName(txTemplatesForSelection, `Bayar Sewa (hotel) — ${name}`);

                    const mortgageTpl = templateByExactName(txTemplatesForSelection, `Hipotik — ${name}`);
                    const redeemTpl = templateByExactName(txTemplatesForSelection, `Tebus Hipotik — ${name}`);

                    const Action = ({
                      tpl,
                      label,
                      color,
                    }: {
                      tpl: TemplateWithType | null;
                      label: string;
                      color?: string;
                    }) => (
                      <Button
                        className="mbg-click"
                        size="xs"
                        variant="light"
                        color={color}
                        disabled={!tpl}
                        onClick={() => {
                          if (!tpl) return;
                          setTemplateId(tpl.id);
                          if (tpl.defaultAmount) setAmount(tpl.defaultAmount);
                        }}
                      >
                        {label}
                      </Button>
                    );

                    return (
                      <Stack gap={8}>
                        <Text size="xs" c="dimmed">
                          Mulai transaksi Cepat:
                        </Text>
                        <Group gap={6} wrap="wrap">
                          <Action tpl={buyTpl} label="Beli" color="blue" />
                          {selectedProperty.kind === "RESIDENTIAL" ? (
                            <>
                              <Action tpl={rentBaseTpl} label="Sewa tanah" color="orange" />
                              <Action tpl={rent1Tpl} label="Sewa 1 rumah" color="orange" />
                              <Action tpl={rent2Tpl} label="Sewa 2 rumah" color="orange" />
                              <Action tpl={rent3Tpl} label="Sewa 3 rumah" color="orange" />
                              <Action tpl={rent4Tpl} label="Sewa 4 rumah" color="orange" />
                              <Action tpl={rentHotelTpl} label="Sewa hotel" color="orange" />
                            </>
                          ) : selectedProperty.kind === "TRANSPORT" ? (
                            <>
                              <Action tpl={rentBaseTpl} label="Sewa 1 transport" color="orange" />
                              <Action tpl={rent1Tpl} label="Sewa 2 transport" color="orange" />
                              <Action tpl={rent2Tpl} label="Sewa 3 transport" color="orange" />
                              <Action tpl={rent3Tpl} label="Sewa 4 transport" color="orange" />
                            </>
                          ) : (
                            <>
                              <Action tpl={rentBaseTpl} label="Utilitas 1" color="orange" />
                              <Action tpl={rent1Tpl} label="Utilitas 2" color="orange" />
                            </>
                          )}
                          <Action tpl={mortgageTpl} label="Hipotik" color="grape" />
                          <Action tpl={redeemTpl} label="Tebus hipotik" color="grape" />
                        </Group>
                      </Stack>
                    );
                  })()
                }
              />
            ) : (
              <Card withBorder radius="md" className="mbg-card">
                <Stack gap="sm">
                  <Text fw={600}>Umum</Text>
                  <Text size="xs" c="dimmed">
                    Mulai transaksi:
                  </Text>
                  <Group gap={6} wrap="wrap">
                    {txTemplatesForSelection.map((t) => (
                      <Button
                        key={t.id}
                        className="mbg-click"
                        size="xs"
                        variant="light"
                        color={colorForTypeCode(t.transactionType.code)}
                        onClick={() => {
                          setTemplateId(t.id);
                          if (t.defaultAmount) setAmount(t.defaultAmount);
                        }}
                      >
                        {t.name}
                      </Button>
                    ))}
                  </Group>
                </Stack>
              </Card>
            )}
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card withBorder radius="md" className="mbg-card">
            <Stack gap="sm">
              <Stack gap={2}>
              <Text size="sm" c="dimmed">
                {selected
                  ? `${selected.transactionType.label} • ${selected.direction}`
                  : "Klik tombol untuk pilih transaksi"}
              </Text> 
              <Text size="sm">{selected?.description ?? "-"}</Text>
            </Stack>

              <NumberInput
                label="Nominal"
                value={amount}
                onChange={(v) => setAmount(typeof v === "number" ? v : v ? Number(v) : undefined)}
                min={1}
                thousandSeparator="," 
              />

              <TextInput label="Catatan (opsional)" value={note} onChange={(e) => setNote(e.currentTarget.value)} />

              <Group justify="space-between" mt="xs">
                <Button className="mbg-click" variant="light" onClick={() => setScanFromOpen(true)}>
                  Scan Sumber
                </Button>
                <Text size="sm" c="dimmed">
                  {fromUid ? `UID: ${fromUid}` : "Belum scan"}
                </Text>
              </Group>

              {direction === "TRANSFER" ? (
                <Group justify="space-between">
                  <Button
                    className="mbg-click"
                    variant="light"
                    color="green"
                    onClick={() => setScanToOpen(true)}
                  >
                    Scan Tujuan
                  </Button>
                  <Text size="sm" c="dimmed">
                    {toUid ? `UID: ${toUid}` : "Belum scan"}
                  </Text>
                </Group>
              ) : null}

              <Group justify="flex-end" mt="sm">
                <Button className="mbg-click" onClick={submit} loading={submitting}>
                  Submit
                </Button>
              </Group>

              <Text size="xs" c="dimmed">
                Tip: Web NFC bekerja di Chrome Android.
              </Text>
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
