import { Card, Group, Skeleton, Stack, Title } from "@mantine/core";

export default function Loading() {
  return (
    <Stack gap="md">
      <Group justify="space-between">
        <Title order={2}>Players</Title>
      </Group>

      <Card withBorder radius="md" className="mbg-card">
        <Stack gap="sm">
          <Skeleton height={36} width={260} />
          <Skeleton height={56} />
          <Skeleton height={56} />
          <Skeleton height={56} />
        </Stack>
      </Card>
    </Stack>
  );
}
