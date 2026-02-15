"use client";

import { useEffect, useMemo } from "react";
import { Button, Group, Modal, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconNfc, IconX } from "@tabler/icons-react";
import { useNfcScan } from "@/app/hooks/useNfcScan";

export function NfcScanModal({
  opened,
  onClose,
  title,
  onScanned,
}: {
  opened: boolean;
  onClose: () => void;
  title: string;
  onScanned: (uid: string) => void;
}) {
  const { supported, state, scanOnce, stop } = useNfcScan();

  const secureContext = useMemo(() => {
    return typeof window !== "undefined" && window.isSecureContext;
  }, []);

  useEffect(() => {
    if (!opened) stop();
  }, [opened, stop]);

  async function handleScan() {
    const uid = await scanOnce();
    if (uid) onScanned(uid);
  }

  const statusText =
    state.status === "idle"
      ? "Tap kartu NFC NTAG215 ke belakang HP."
      : state.status === "scanning"
        ? "Scanning..."
        : state.status === "success"
          ? `UID: ${state.uid}`
          : `Error: ${state.message}`;

  const helperText = !supported
    ? "Web NFC hanya tersedia di Chrome Android."
    : !secureContext
      ? "Web NFC butuh HTTPS. Buka aplikasi via HTTPS lalu coba lagi."
      : statusText;

  return (
    <Modal opened={opened} onClose={onClose} title={title} centered>
      <Stack gap="sm">
        <Group gap="sm">
          <ThemeIcon variant="light" color={state.status === "error" ? "red" : "green"}>
            {state.status === "error" ? <IconX size={18} /> : <IconNfc size={18} />}
          </ThemeIcon>
          <Text>{helperText}</Text>
        </Group>

        <Group justify="flex-end">
          <Button variant="default" onClick={onClose}>
            Tutup
          </Button>
          <Button
            onClick={handleScan}
            disabled={!supported || !secureContext}
            loading={state.status === "scanning"}
          >
            Mulai Scan
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
