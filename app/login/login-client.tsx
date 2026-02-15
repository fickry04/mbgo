"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import {
  Button,
  Card,
  Container,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { notifyError, notifyWarning } from "@/app/lib/notify";
import Image from "next/image";
import logo from '../../public/logo.png';

export function LoginClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/dashboard";
  const verified = searchParams.get("verified");
  const registered = searchParams.get("registered");
  const reset = searchParams.get("reset");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl,
      });

      if (!result?.ok) {
        if (result?.error === "EmailNotVerified") {
          notifyWarning(
            "Email belum diverifikasi",
            "Silakan cek email untuk link verifikasi sebelum login."
          );
          return;
        }
        notifyError("Login gagal", "Email atau password salah.");
        return;
      }

      router.push(result.url ?? callbackUrl);
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
        <Text className="mbg-enter-1" ta="center" size="sm">
          Digital bank untuk permainan Monopoly dengan kartu pemain NFC (NTAG215)
          menggunakan Web NFC.
        </Text>
        <Image
          src={logo}
          alt="logo"
          width={160}
          height={160}
          className="mbg-enter-2"
          style={{ display: "block", margin: "0 auto", maxWidth: "100%", height: "auto" }}
        />
        <Text c="dimmed" ta="center" size="sm" className="mbg-enter-3">
          Login User
        </Text>

        {registered === "1" ? (
          <Text c="green" ta="center" size="sm">
            Registrasi berhasil. Silakan cek email untuk verifikasi.
          </Text>
        ) : null}

        {verified === "1" ? (
          <Text c="green" ta="center" size="sm">
            Email berhasil diverifikasi. Silakan login.
          </Text>
        ) : null}

        {reset === "1" ? (
          <Text c="green" ta="center" size="sm">
            Password berhasil direset. Silakan login.
          </Text>
        ) : null}

        <Card withBorder radius="md" p="lg" className="mbg-card mbg-enter-3">
          <form onSubmit={onSubmit}>
            <Stack gap="sm">
              <TextInput
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                autoComplete="email"
                required
              />
              <PasswordInput
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                autoComplete="current-password"
                required
              />
              <Group justify="space-between" mt="xs">
                <Button className="mbg-click" type="submit" loading={loading}>
                  Login
                </Button>
                <Button
                  className="mbg-click"
                  type="button"
                  variant="subtle"
                  onClick={() => router.push("/register")}
                >
                  Register
                </Button>
              </Group>

              <Button
                className="mbg-click"
                type="button"
                variant="subtle"
                onClick={() => router.push("/forgot-password")}
              >
                Lupa password?
              </Button>
            </Stack>
          </form>
        </Card>
      </Stack>
    </Container>
  );
}
