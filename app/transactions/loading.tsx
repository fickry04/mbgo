import { Card, Group, Skeleton, Stack, Title } from "@mantine/core";

export default function Loading() {
  return (
    <Stack gap="md">
      <Group justify="space-between">
        <Title order={2}>Transaksi</Title>
      </Group>

          <Card withBorder radius="md" className="mbg-card">
            <Stack gap="sm">
              <Skeleton height={16} width="40%" />
              <Skeleton height={36} />
              <Group grow>
                <Skeleton height={62} />
                <Skeleton height={62} />
              </Group>
              <Skeleton height={14} width="60%" />
              <Skeleton height={62} />
              <Skeleton height={62} />
              <Skeleton height={62} />
              <Group justify="flex-end">
                <Skeleton height={36} width={120} />
              </Group>
            </Stack>
          </Card>

          <Card withBorder radius="md" className="mbg-card">
            <Stack gap="xs">
              <Skeleton height={16} width="35%" />
              <Skeleton height={14} width="70%" />
              <Skeleton height={14} width="90%" />
              <Skeleton height={220} />
            </Stack>
          </Card>
    </Stack>
  );
}
