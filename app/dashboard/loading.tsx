import { Card, Group, Skeleton, Stack, Title } from "@mantine/core";

export default function Loading() {
  return (
    <Stack gap="md">
      <Group justify="space-between">
        <Title order={2}>Dashboard</Title>
      </Group>

      <Card withBorder radius="md" className="mbg-card">
        <Stack gap="sm">
          <Skeleton height={14} width="45%" />
          <Skeleton height={80} />
          <Skeleton height={80} />
        </Stack>
      </Card>
    </Stack>
  );
}
