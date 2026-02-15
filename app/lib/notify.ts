"use client";

import { notifications } from "@mantine/notifications";
import { getErrorMessage } from "./errors";

export function notifySuccess(title: string, message: string) {
  notifications.show({ color: "green", title, message });
}

export function notifyWarning(title: string, message: string) {
  notifications.show({ color: "yellow", title, message });
}

export function notifyError(title: string, error: unknown, fallbackMessage?: string) {
  notifications.show({
    color: "red",
    title,
    message: getErrorMessage(error, fallbackMessage ?? "Terjadi kesalahan."),
  });
}
