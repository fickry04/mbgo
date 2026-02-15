export class HttpError extends Error {
  status: number;
  data?: unknown;
  constructor(status: number, message: string, data?: unknown) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

function messageFromErrorPayload(payload: unknown): string | null {
  if (!payload || typeof payload !== "object") return null;
  const obj = payload as Record<string, unknown>;

  if (typeof obj.error === "string" && obj.error.trim().length) return obj.error.trim();

  const details = obj.details as
    | {
        formErrors?: unknown;
        fieldErrors?: unknown;
      }
    | undefined;

  if (details && typeof details === "object") {
    const fieldErrors =
      details.fieldErrors && typeof details.fieldErrors === "object"
        ? (details.fieldErrors as Record<string, unknown>)
        : null;

    if (fieldErrors) {
      const first = Object.entries(fieldErrors)
        .flatMap(([field, errors]) => {
          const list = Array.isArray(errors)
            ? errors.filter((x): x is string => typeof x === "string")
            : [];
          return list.map((msg) => `${field}: ${msg}`);
        })
        .find(Boolean);
      if (first) return first;
    }

    const formErrors = Array.isArray(details.formErrors)
      ? (details.formErrors as unknown[]).filter((x): x is string => typeof x === "string")
      : [];
    if (formErrors.length) return formErrors[0] ?? null;
  }

  return null;
}

export async function fetchJson<T>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(input, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  if (!res.ok) {
    const contentType = res.headers.get("content-type") ?? "";
    let message = res.statusText || "Request failed";
    let data: unknown = undefined;

    if (contentType.includes("application/json")) {
      data = await res.json().catch(() => null);
      message = messageFromErrorPayload(data) ?? message;
    } else {
      const text = await res.text().catch(() => "");
      const trimmed = text.trim();
      if (trimmed) {
        message = trimmed;
        if ((trimmed.startsWith("{") && trimmed.endsWith("}")) || (trimmed.startsWith("[") && trimmed.endsWith("]"))) {
          try {
            data = JSON.parse(trimmed);
            message = messageFromErrorPayload(data) ?? message;
          } catch {
            // ignore JSON parse errors; keep text message
          }
        }
      }
    }

    throw new HttpError(res.status, message, data);
  }

  return (await res.json()) as T;
}
