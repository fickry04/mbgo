"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Card,
  Container,
  Group,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

import { fetchJson } from "@/app/lib/http";
import { notifyError, notifySuccess } from "@/app/lib/notify";
import Image from "next/image";
import logo from "@/public/logo.png";

export function ForgotPasswordClient() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetchJson("/api/auth/reset-password/request", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      notifySuccess(
        "Cek email kamu",
        "Jika email terdaftar, link reset password sudah dikirim."
      );

      // Optional: move user back to login
      router.push("/login");
    } catch (err) {
      notifyError("Gagal mengirim email", err, "Terjadi kesalahan.");
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
          Lupa Password
        </Text>

        <Card withBorder radius="md" p="lg" className="mbg-card">
          <form onSubmit={onSubmit}>
            <Stack gap="sm">
              <TextInput
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                autoComplete="email"
                required
              />
              <Group justify="space-between" mt="xs">
                <Button className="mbg-click" type="submit" loading={loading}>
                  Kirim link reset
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
