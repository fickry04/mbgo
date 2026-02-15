"use client";

import { Button, Center, Container, Stack, Text, Title } from "@mantine/core";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container size="sm" py="xl">
      <Center>
        <Stack gap="sm" align="center">
          <Title order={2}>Terjadi kesalahan</Title>
          <Text c="dimmed" ta="center" size="sm">
            {error?.message?.trim() ? error.message : "Aplikasi gagal memuat. Coba ulangi."}
          </Text>
          <Button onClick={reset}>Coba lagi</Button>
        </Stack>
      </Center>
    </Container>
  );
}
