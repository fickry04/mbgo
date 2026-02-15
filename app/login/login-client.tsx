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
import { notifications } from "@mantine/notifications";
import Image from "next/image";
import logo from '../../public/logo.png';

export function LoginClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/dashboard";
  const verified = searchParams.get("verified");
  const registered = searchParams.get("registered");

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
          notifications.show({
            color: "yellow",
            title: "Email belum diverifikasi",
            message: "Silakan cek email untuk link verifikasi sebelum login.",
          });
          return;
        }
        notifications.show({
          color: "red",
          title: "Login gagal",
          message: "Email atau password salah.",
        });
        return;
      }

      // In production, a hard navigation is more reliable than client-side routing
      // to ensure auth cookies are committed before hitting server-protected routes.
      window.location.assign(result.url ?? callbackUrl);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container size={420} py="xl">
      <Stack gap="md">
        <Title order={2} ta="center">
          Monopoly Bank Go
        </Title>
        <Image
          src={logo}
          alt="logo"
          width={160}
          height={160}
          style={{ display: "block", margin: "0 auto", maxWidth: "100%", height: "auto" }}
        />
        <Text c="dimmed" ta="center" size="sm">
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

        <Card withBorder radius="md" p="lg">
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
                <Button type="submit" loading={loading}>
                  Login
                </Button>
                <Button type="button" variant="subtle" onClick={() => router.push("/register")}
                >
                  Register
                </Button>
              </Group>
            </Stack>
          </form>
        </Card>
      </Stack>
    </Container>
  );
}
