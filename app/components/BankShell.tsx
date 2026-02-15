"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  AppShell,
  Burger,
  Button,
  Group,
  NavLink,
  ScrollArea,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconCards,
  IconDashboard,
  IconHome2,
  IconLogout,
  IconSwords,
  IconTransfer,
} from "@tabler/icons-react";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: IconDashboard },
  { href: "/games", label: "Games", icon: IconSwords },
  { href: "/players", label: "Players", icon: IconCards },
  { href: "/transactions", label: "Transactions", icon: IconTransfer },
  { href: "/property-templates", label: "Property Templates", icon: IconHome2 },
] as const;

export function BankShell({
  children,
  username,
}: {
  children: React.ReactNode;
  username?: string | null;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 56 }}
      navbar={{ width: 280, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group gap="sm">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Title order={4}>Monopoly Bank</Title>
          </Group>
          <Group gap="sm">
            <Text size="sm" c="dimmed">
              {username ? `Admin: ${username}` : ""}
            </Text>
            <Button
              variant="light"
              color="red"
              leftSection={<IconLogout size={16} />}
              onClick={async () => {
                await signOut({ redirect: false });
                router.push("/login");
                router.refresh();
              }}
            >
              Logout
            </Button>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <ScrollArea>
          {nav.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <NavLink
                key={item.href}
                component={Link}
                href={item.href}
                label={item.label}
                active={active}
                leftSection={<Icon size={18} />}
                mb={6}
              />
            );
          })}
        </ScrollArea>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
