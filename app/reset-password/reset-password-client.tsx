"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Alert,
  Button,
  Card,
  Container,
  Group,
  PasswordInput,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import { fetchJson } from "@/app/lib/http";
import { notifyError, notifySuccess } from "@/app/lib/notify";
import Image from "next/image";
import logo from "@/public/logo.png";

export function ResetPasswordClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = useMemo(() => searchParams.get("token") ?? "", [searchParams]);

  const [validating, setValidating] = useState(true);
  const [tokenValid, setTokenValid] = useState<boolean>(false);

  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      if (!token || token.trim().length < 10) {
        setTokenValid(false);
        setValidating(false);
        return;
      }

      setValidating(true);
      try {
        await fetchJson(`/api/auth/reset-password/validate?token=${encodeURIComponent(token)}`);
        if (!cancelled) setTokenValid(true);
      } catch {
        if (!cancelled) setTokenValid(false);
      } finally {
        if (!cancelled) setValidating(false);
      }
    }

    run();

    return () => {
      cancelled = true;
    };
  }, [token]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!tokenValid) {
      notifyError("Token tidak valid", "Token tidak valid atau sudah expired.");
      return;
    }

    if (password !== password2) {
      notifyError("Password tidak sama", "Pastikan password dan konfirmasi sama.");
      return;
    }

    setLoading(true);
    try {
      await fetchJson("/api/auth/reset-password/confirm", {
        method: "POST",
        body: JSON.stringify({ token, password }),
      });

      notifySuccess("Berhasil", "Password berhasil direset. Silakan login.");
      window.location.assign("/login?reset=1");
    } catch (err) {
      notifyError("Reset password gagal", err, "Token tidak valid atau sudah expired.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container size={420} py="xl">
      <Stack gap="md">
        <Title order={2} ta="center" className="mbg-enter">
          Monopoly Bank Go
        </Title>
        <Image
          src={logo}
          alt="logo"
          width={160}
          height={160}
          className="mbg-enter-1"
          style={{ display: "block", margin: "0 auto", maxWidth: "100%", height: "auto" }}
        />
        <Text c="dimmed" ta="center" size="sm" className="mbg-enter-2">
          Reset Password
        </Text>

        {!validating && !tokenValid ? (
          <Alert color="red" title="Token tidak valid" className="mbg-enter-3">
            Link reset password tidak valid atau sudah kedaluwarsa.
          </Alert>
        ) : null}

        <Card withBorder radius="md" p="lg" className="mbg-card mbg-enter-3">
          <form onSubmit={onSubmit}>
            <Stack gap="sm">
              <PasswordInput
                label="Password baru"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                autoComplete="new-password"
                required
                disabled={!tokenValid}
              />
              <PasswordInput
                label="Konfirmasi password"
                value={password2}
                onChange={(e) => setPassword2(e.currentTarget.value)}
                autoComplete="new-password"
                required
                disabled={!tokenValid}
              />
              <Group justify="space-between" mt="xs">
                <Button
                  className="mbg-click"
                  type="submit"
                  loading={loading}
                  disabled={!tokenValid}
                >
                  Simpan
                </Button>
                <Button
                  className="mbg-click"
                  type="button"
                  variant="subtle"
                  onClick={() => router.push("/login")}
                >
                  Back to Login
                </Button>
              </Group>
            </Stack>
          </form>
        </Card>
      </Stack>
    </Container>
  );
}
