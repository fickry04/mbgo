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

function isSecureContext() {
  return typeof window !== "undefined" && window.isSecureContext;
}

function isUserActivationActive() {
  if (typeof navigator === "undefined") return false;
  const ua = (navigator as unknown as { userActivation?: { isActive?: boolean } }).userActivation;
  return Boolean(ua?.isActive);
}

async function queryNfcPermissionState(): Promise<"granted" | "denied" | "prompt" | "unknown"> {
  if (typeof navigator === "undefined") return "unknown";
  const permissions = (navigator as unknown as { permissions?: Permissions }).permissions;
  if (!permissions?.query) return "unknown";

  // Web NFC permission name in spec is "nfc"; some browsers may throw if unsupported.
  try {
    const status = await permissions.query({ name: "nfc" as unknown as PermissionName });
    if (status.state === "granted" || status.state === "denied" || status.state === "prompt") {
      return status.state;
    }
  } catch {
    // ignore
  }

  return "unknown";
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

    if (!isSecureContext()) {
      setState({
        status: "error",
        message: "Web NFC butuh HTTPS (atau localhost). Buka aplikasi via HTTPS lalu coba lagi.",
      });
      return null;
    }

    // In Chromium, the NFC permission prompt will only appear during a user gesture.
    // If this is called from an async effect/timer, the browser may reject without prompting.
    if (!isUserActivationActive()) {
      setState({
        status: "error",
        message: "Klik tombol 'Mulai Scan' lalu tap kartu NFC (izin NFC hanya muncul saat aksi pengguna).",
      });
      return null;
    }

    // If Permissions API is available, preflight to detect denied state early.
    const permState = await queryNfcPermissionState();
    if (permState === "denied") {
      setState({
        status: "error",
        message: "Izin NFC diblokir untuk website ini. Izinkan NFC di Site Settings lalu coba lagi.",
      });
      return null;
    }

    try {
      // Cancel any in-flight scan before starting a new one.
      abortRef.current?.abort();

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
      if (e instanceof DOMException && e.name === "AbortError") {
        abortRef.current = null;
        setState({ status: "idle" });
        return null;
      }

      let message = e instanceof Error ? e.message : "NFC scan gagal";
      if (e instanceof DOMException) {
        if (e.name === "NotAllowedError") {
          message = "Izin NFC ditolak/diblokir. Izinkan NFC untuk website ini lalu coba lagi.";
        } else if (e.name === "NotSupportedError") {
          message = "Web NFC tidak didukung di device/browser ini.";
        } else if (e.name === "SecurityError") {
          message = "Web NFC diblokir karena context tidak aman (harus HTTPS).";
        }
      }

      setState({ status: "error", message });
      abortRef.current = null;
      return null;
    }
  }, [supported]);

  return { supported, state, scanOnce, stop };
}
