import { BankShellSkeleton } from "@/app/components/BankShellSkeleton";
import { Center, Loader, Stack, Text } from "@mantine/core";

export default function Loading() {
  return (
    <BankShellSkeleton>
      <Center style={{ minHeight: "50vh" }}>
        <Stack gap="sm" align="center">
          <Loader size="lg" />
          <Text c="dimmed" size="sm">
            Loading...
          </Text>
        </Stack>
      </Center>
    </BankShellSkeleton>
  );
}
