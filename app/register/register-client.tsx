"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
import { fetchJson } from "@/app/lib/http";
import { notifyError } from "@/app/lib/notify";
import Image from "next/image";
import logo from '@/public/logo.png';

export function RegisterClient() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetchJson("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
      });

      // Hard navigation is more reliable in production to ensure the route changes
      // even if client-side routing/hydration is in a bad state.
      window.location.assign("/login?registered=1");
    } catch (e) {
      notifyError("Register gagal", e, "Terjadi kesalahan.");
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
          className="mbg-enter-1"
          style={{ display: "block", margin: "0 auto", maxWidth: "100%", height: "auto" }}
        />
        <Text c="dimmed" ta="center" size="sm" className="mbg-enter-2">
          Register User
        </Text>

        <Card withBorder radius="md" p="lg" className="mbg-card mbg-enter-3">
          <form onSubmit={onSubmit}>
            <Stack gap="sm">
              <TextInput
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
                autoComplete="username"
                required
              />
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
                autoComplete="new-password"
                required
              />
              <Group justify="space-between" mt="xs">
                <Button className="mbg-click" type="submit" loading={loading}>
                  Register
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
