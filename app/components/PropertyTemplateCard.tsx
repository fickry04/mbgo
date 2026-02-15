"use client";

import type { ReactNode } from "react";

import {
  Badge,
  Card,
  Divider,
  Group,
  SimpleGrid,
  Stack,
  Table,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  IconBuildingEstate,
  IconBuildingMonument,
  IconBuildingSkyscraper,
  IconMapPin,
  IconShoppingBag,
  IconTower,
  IconWaveSine,
} from "@tabler/icons-react";
import {
  headerBgVar,
  headerTextVar,
  propertyGroupMeta,
  type PropertyTemplateCardData,
} from "@/app/lib/property-template";

function IconForKey({ icon }: { icon: string | null }) {
  const size = 18;
  switch (icon) {
    case "city":
      return <IconBuildingSkyscraper size={size} />;
    case "tower":
      return <IconTower size={size} />;
    case "market":
      return <IconShoppingBag size={size} />;
    case "waterfront":
      return <IconWaveSine size={size} />;
    case "monument":
    case "temple":
    case "landmark":
      return <IconBuildingMonument size={size} />;
    default:
      return <IconBuildingEstate size={size} />;
  }
}

export function PropertyTemplateCard({
  tpl,
  actions,
}: {
  tpl: PropertyTemplateCardData;
  actions?: ReactNode;
}) {
  const meta = propertyGroupMeta[tpl.propertyGroup];

  const rentRows =
    tpl.kind === "RESIDENTIAL"
      ? [
          { label: "Dasar", value: tpl.rentBase },
          { label: "1 rumah", value: tpl.rent1House },
          { label: "2 rumah", value: tpl.rent2Houses },
          { label: "3 rumah", value: tpl.rent3Houses },
          { label: "4 rumah", value: tpl.rent4Houses },
          { label: "Hotel", value: tpl.rentHotel },
        ]
      : tpl.kind === "TRANSPORT"
        ? [
            { label: "1 transport", value: tpl.rentBase },
            { label: "2 transport", value: tpl.rent1House },
            { label: "3 transport", value: tpl.rent2Houses },
            { label: "4 transport", value: tpl.rent3Houses },
          ]
        : [
            { label: "1 util", value: tpl.rentBase },
            { label: "2 util", value: tpl.rent1House },
          ];

  return (
    <Card withBorder radius="md" padding={0}>
      <Card.Section
        px="md"
        py="sm"
        style={{
          background: headerBgVar(tpl.propertyGroup),
          color: headerTextVar(tpl.propertyGroup),
        }}
      >
        <Group justify="space-between" wrap="nowrap">
          <Group gap="sm" wrap="nowrap">
            <ThemeIcon variant="white" color={meta.mantineColor} radius="xl">
              <IconForKey icon={tpl.icon} />
            </ThemeIcon>
            <Stack gap={0}>
              <Text fw={800} size="sm" style={{ color: "inherit" }} lineClamp={1}>
                {tpl.country}
              </Text>
              <Text size="xs" style={{ color: "inherit", opacity: 0.9 }} lineClamp={1}>
                {tpl.landmark}
              </Text>
            </Stack>
          </Group>
          <Badge variant="white" color={meta.mantineColor}>
            {tpl.propertySet} • {meta.label}
          </Badge>
        </Group>
      </Card.Section>

      <Stack gap="sm" p="md">
        <SimpleGrid cols={{ base: 2, sm: 3 }} spacing="xs">
          <Stack gap={2}>
            <Text size="xs" c="dimmed">
              Harga beli
            </Text>
            <Text fw={700}>{tpl.price}</Text>
          </Stack>
          <Stack gap={2}>
            <Text size="xs" c="dimmed">
              Nilai hipotik
            </Text>
            <Text fw={700}>{tpl.mortgageValue}</Text>
          </Stack>
          <Stack gap={2}>
            <Text size="xs" c="dimmed">
              Harga rumah
            </Text>
            <Text fw={700}>{tpl.housePrice}</Text>
          </Stack>
          <Stack gap={2}>
            <Text size="xs" c="dimmed">
              Harga hotel
            </Text>
            <Text fw={700}>{tpl.hotelPrice}</Text>
          </Stack>
          <Stack gap={2}>
            <Text size="xs" c="dimmed">
              Sewa dasar
            </Text>
            <Text fw={700}>{tpl.rentBase}</Text>
          </Stack>
          <Stack gap={2}>
            <Text size="xs" c="dimmed">
              Nama
            </Text>
            <Text fw={600} size="sm" lineClamp={1}>
              {tpl.name}
            </Text>
          </Stack>
        </SimpleGrid>

        <Divider />

        <Stack gap={4}>
          <Group gap="xs" c="dimmed">
            <IconMapPin size={16} />
            <Text size="xs">Harga sewa</Text>
          </Group>
          <Table withTableBorder withColumnBorders striped highlightOnHover>
            <Table.Tbody>
              {rentRows
                .filter((r) => Number(r.value) > 0)
                .map((r) => (
                  <Table.Tr key={r.label}>
                    <Table.Td>{r.label}</Table.Td>
                    <Table.Td ta="right">{r.value}</Table.Td>
                  </Table.Tr>
                ))}
            </Table.Tbody>
          </Table>
        </Stack>
      </Stack>

      {actions ? (
        <Card.Section p="md" pt={0}>
          {actions}
        </Card.Section>
      ) : null}
    </Card>
  );
}
