import { HttpError } from "./http";

const CODE_MESSAGES: Record<string, string> = {
  Unauthorized: "Kamu belum login atau sesi sudah habis. Silakan login ulang.",
  "No active game": "Belum ada game aktif. Buat game dulu di Dashboard.",
  "Game already ended": "Game sudah berakhir.",
  "Active game exists": "Masih ada game aktif. Akhiri dulu sebelum membuat game baru.",
  "Missing amount": "Nominal transaksi belum diisi.",
  SEAT_TAKEN: "Seat sudah dipakai. Pilih seat lain.",
  UID_TAKEN: "Kartu NFC ini sudah terdaftar pada game ini.",
  FROM_PLAYER_INVALID: "Kartu sumber tidak terdaftar pada game aktif.",
  TO_UID_REQUIRED: "Kartu tujuan wajib untuk transaksi transfer.",
  TO_PLAYER_INVALID: "Kartu tujuan tidak terdaftar pada game aktif.",
  SAME_PLAYER: "Pemain sumber dan tujuan tidak boleh sama.",
};

export function getErrorMessage(error: unknown, fallback = "Terjadi kesalahan."): string {
  if (!error) return fallback;

  if (typeof error === "string") {
    return CODE_MESSAGES[error] ?? error;
  }

  if (error instanceof HttpError) {
    const raw = error.message?.trim();
    if (raw && CODE_MESSAGES[raw]) return CODE_MESSAGES[raw];

    if (error.status === 401) return "Sesi kamu tidak valid / sudah habis. Silakan login ulang.";
    if (raw) return raw;

    return fallback;
  }

  if (error instanceof Error) {
    const raw = error.message?.trim();
    if (raw && CODE_MESSAGES[raw]) return CODE_MESSAGES[raw];
    return raw || fallback;
  }

  return fallback;
}
