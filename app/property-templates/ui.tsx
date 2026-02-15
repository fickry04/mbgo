"use client";

import Link from "next/link";
import { Button, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { PropertyTemplateCard } from "@/app/components/PropertyTemplateCard";
import type { PropertyTemplateCardData } from "@/app/lib/property-template";

export function PropertyTemplatesGrid({
  templates,
}: {
  templates: (PropertyTemplateCardData & {
    txTemplates: Array<{
      id: string;
      name: string;
      direction: string;
      defaultAmount: number | null;
      typeCode: string;
      typeLabel: string;
    }>;
  })[];
}) {
  function idByExactName(list: { name: string; id: string }[], name: string) {
    return list.find((t) => t.name === name)?.id ?? null;
  }

  return (
    <Stack gap="md">
      <Stack gap={2}>
        <Title order={2}>Property Templates</Title>
        <Text c="dimmed" size="sm">
          Template kartu properti Monopoly digital (global theme) untuk dipakai sebagai referensi transaksi.
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
        {templates.map((tpl) => {
          const buyId = idByExactName(tpl.txTemplates, `Beli Properti — ${tpl.name}`);
          const rentBaseId =
            tpl.kind === "UTILITY"
              ? idByExactName(tpl.txTemplates, `Bayar Utilitas (1 util) — ${tpl.name}`)
              : tpl.kind === "TRANSPORT"
                ? idByExactName(tpl.txTemplates, `Bayar Sewa (1 transport) — ${tpl.name}`)
                : idByExactName(tpl.txTemplates, `Bayar Sewa (dasar) — ${tpl.name}`);

          const rent1Id =
            tpl.kind === "UTILITY"
              ? idByExactName(tpl.txTemplates, `Bayar Utilitas (2 util) — ${tpl.name}`)
              : tpl.kind === "TRANSPORT"
                ? idByExactName(tpl.txTemplates, `Bayar Sewa (2 transport) — ${tpl.name}`)
                : idByExactName(tpl.txTemplates, `Bayar Sewa (1 rumah) — ${tpl.name}`);

          const rent2Id =
            tpl.kind === "TRANSPORT"
              ? idByExactName(tpl.txTemplates, `Bayar Sewa (3 transport) — ${tpl.name}`)
              : idByExactName(tpl.txTemplates, `Bayar Sewa (2 rumah) — ${tpl.name}`);

          const rent3Id =
            tpl.kind === "TRANSPORT"
              ? idByExactName(tpl.txTemplates, `Bayar Sewa (4 transport) — ${tpl.name}`)
              : idByExactName(tpl.txTemplates, `Bayar Sewa (3 rumah) — ${tpl.name}`);

          const rent4Id = idByExactName(tpl.txTemplates, `Bayar Sewa (4 rumah) — ${tpl.name}`);
          const rentHotelId = idByExactName(tpl.txTemplates, `Bayar Sewa (hotel) — ${tpl.name}`);
          const mortgageId = idByExactName(tpl.txTemplates, `Hipotik — ${tpl.name}`);
          const redeemId = idByExactName(tpl.txTemplates, `Tebus Hipotik — ${tpl.name}`);

          const Action = ({
            id,
            label,
            color,
          }: {
            id: string | null;
            label: string;
            color?: string;
          }) => (
            <Button
              className="mbg-click"
              component={Link}
              href={id ? `/transactions?templateId=${id}` : "/transactions"}
              size="xs"
              variant="light"
              color={color}
              disabled={!id}
            >
              {label}
            </Button>
          );

          return (
            <PropertyTemplateCard
              key={tpl.id}
              tpl={tpl}
              actions={
                <Stack gap={8}>
                  <Text size="xs" c="dimmed">
                    Mulai transaksi dari template:
                  </Text>
                  <Group gap={6} wrap="wrap">
                    <Action id={buyId} label="Beli" color="blue" />
                    {tpl.kind === "RESIDENTIAL" ? (
                      <>
                        <Action id={rentBaseId} label="Sewa tanah" color="orange" />
                        <Action id={rent1Id} label="Sewa 1 rumah" color="orange" />
                        <Action id={rent2Id} label="Sewa 2 rumah" color="orange" />
                        <Action id={rent3Id} label="Sewa 3 rumah" color="orange" />
                        <Action id={rent4Id} label="Sewa 4 rumah" color="orange" />
                        <Action id={rentHotelId} label="Sewa hotel" color="orange" />
                      </>
                    ) : tpl.kind === "TRANSPORT" ? (
                      <>
                        <Action id={rentBaseId} label="Sewa 1 transport" color="orange" />
                        <Action id={rent1Id} label="Sewa 2 transport" color="orange" />
                        <Action id={rent2Id} label="Sewa 3 transport" color="orange" />
                        <Action id={rent3Id} label="Sewa 4 transport" color="orange" />
                      </>
                    ) : (
                      <>
                        <Action id={rentBaseId} label="Utilitas 1" color="orange" />
                        <Action id={rent1Id} label="Utilitas 2" color="orange" />
                      </>
                    )}
                    <Action id={mortgageId} label="Hipotik" color="grape" />
                    <Action id={redeemId} label="Tebus hipotik" color="grape" />
                  </Group>
                </Stack>
              }
            />
          );
        })}
      </SimpleGrid>
    </Stack>
  );
}
