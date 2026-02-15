"use client";

import Link from "next/link";
import Image from "next/image";
import {
  AppShell,
  Box,
  Flex,
  Group,
  NavLink,
  ScrollArea,
  Skeleton,
  Text,
  Title,
} from "@mantine/core";
import {
  IconCards,
  IconDashboard,
  IconHome2,
  IconSwords,
  IconTransfer,
} from "@tabler/icons-react";
import logo from "../../public/logo.png";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: IconDashboard },
  { href: "/games", label: "Games", icon: IconSwords },
  { href: "/players", label: "Players", icon: IconCards },
  { href: "/transactions", label: "Transactions", icon: IconTransfer },
  { href: "/property-templates", label: "Property Templates", icon: IconHome2 },
] as const;

export function BankShellSkeleton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell header={{ height: 56 }} navbar={{ width: 280, breakpoint: "sm" }} padding="md">
      <AppShell.Header>
        <Flex
          h="100%"
          px="md"
          align="center"
          justify="space-between"
          gap="md"
        >
          <Group gap="sm">
            <Image
              src={logo}
              alt="logo"
              width={50}
              height={50}
              style={{ display: "block", margin: "0", maxWidth: "100%", height: "auto" }}
              priority
            />
            <Title order={4}>Monopoly Bank Go</Title>
          </Group>

          <Group gap="sm" justify="flex-end" wrap="wrap">
            <Text component="div" size="sm" c="dimmed" style={{ width: "100px", overflowX: "hidden" }}>
              <Skeleton height={12} width={80} />
            </Text>
            <Skeleton height={34} width={92} radius="sm" />
          </Group>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <ScrollArea>
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.href}
                component={Link}
                href={item.href}
                label={item.label}
                leftSection={<Icon size={18} />}
                mb={6}
              />
            );
          })}
        </ScrollArea>
      </AppShell.Navbar>

      <AppShell.Main>
        <Box className="mbg-page">{children}</Box>
      </AppShell.Main>
    </AppShell>
  );
}
