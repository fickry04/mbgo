import { Card, Group, Skeleton, Stack, Title } from "@mantine/core";

export default function Loading() {
  return (
    <Stack gap="md">
      <Group justify="space-between">
        <Title order={2}>Property Templates</Title>
      </Group>

      <Card withBorder radius="md" className="mbg-card">
        <Stack gap="sm">
          <Skeleton height={36} width={320} />
          <Skeleton height={180} />
          <Skeleton height={180} />
        </Stack>
      </Card>
    </Stack>
  );
}
