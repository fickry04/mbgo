"use client";

import { useCallback, useMemo, useRef, useState } from "react";

export type NfcScanState =
  | { status: "idle" }
  | { status: "scanning" }
  | { status: "success"; uid: string }
  | { status: "error"; message: string };

type NdefReadingEventLike = { serialNumber?: string };

type NdefReaderLike = {
  scan: (options: { signal: AbortSignal }) => Promise<void>;
  onreading: ((event: NdefReadingEventLike) => void) | null;
  onreadingerror: (() => void) | null;
};

function isSupported() {
  return typeof window !== "undefined" && "NDEFReader" in window;
}

export function useNfcScan() {
  const [state, setState] = useState<NfcScanState>({ status: "idle" });
  const abortRef = useRef<AbortController | null>(null);

  const supported = useMemo(() => isSupported(), []);

  const stop = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    setState({ status: "idle" });
  }, []);

  const scanOnce = useCallback(async () => {
    if (!supported) {
      setState({ status: "error", message: "Web NFC tidak didukung di device ini." });
      return null;
    }

    try {
      setState({ status: "scanning" });
      const controller = new AbortController();
      abortRef.current = controller;

      const NDEFReaderCtor = (window as unknown as { NDEFReader?: new () => NdefReaderLike }).
        NDEFReader;
      if (!NDEFReaderCtor) {
        setState({ status: "error", message: "Web NFC tidak didukung di device ini." });
        abortRef.current = null;
        return null;
      }

      const reader = new NDEFReaderCtor();
      await reader.scan({ signal: controller.signal });

      const uid = await new Promise<string>((resolve, reject) => {
        const onReading = (event: NdefReadingEventLike) => {
          const serial = event?.serialNumber;
          if (typeof serial === "string" && serial.length > 0) resolve(serial);
          else reject(new Error("UID tidak terbaca"));
        };

        const onError = () => reject(new Error("Gagal membaca NFC"));

        reader.onreading = onReading;
        reader.onreadingerror = onError;
      });

      setState({ status: "success", uid });
      abortRef.current?.abort();
      abortRef.current = null;
      return uid;
    } catch (e) {
      const message = e instanceof Error ? e.message : "NFC scan gagal";
      setState({ status: "error", message });
      abortRef.current = null;
      return null;
    }
  }, [supported]);

  return { supported, state, scanOnce, stop };
}
