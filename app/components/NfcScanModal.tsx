"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
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

  const audioCtxRef = useRef<AudioContext | null>(null);

  const primeAudio = useCallback(async () => {
    if (typeof window === "undefined") return;
    const AudioCtx = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;

    if (!audioCtxRef.current) audioCtxRef.current = new AudioCtx();
    if (audioCtxRef.current.state === "suspended") {
      try {
        await audioCtxRef.current.resume();
      } catch {
        // ignore
      }
    }
  }, []);

  const playSuccessChime = useCallback(() => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const gain = ctx.createGain();

      // Subtle, short envelope (not too loud, not too long)
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.035, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
      gain.connect(ctx.destination);

      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.setValueAtTime(988, now + 0.09);
      osc.connect(gain);

      osc.onended = () => {
        try {
          osc.disconnect();
          gain.disconnect();
        } catch {
          // ignore
        }
      };

      osc.start(now);
      osc.stop(now + 0.22);
    } catch {
      // ignore
    }
  }, []);

  const secureContext = useMemo(() => {
    return typeof window !== "undefined" && window.isSecureContext;
  }, []);

  useEffect(() => {
    if (!opened) stop();
  }, [opened, stop]);

  const handleScan = useCallback(async () => {
    // Prime audio context within the user gesture (click) so it can play on success.
    await primeAudio();
    const uid = await scanOnce();
    if (uid) {
      playSuccessChime();
      onScanned(uid);
    }
  }, [onScanned, playSuccessChime, primeAudio, scanOnce]);

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
          <Button className="mbg-click" variant="default" onClick={onClose}>
            Tutup
          </Button>
          <Button
            className="mbg-click"
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
