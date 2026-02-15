"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  AppShell,
  Burger,
  Button,
  Box,
  Flex,
  Group,
  NavLink,
  ScrollArea,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  IconCards,
  IconDashboard,
  IconHome2,
  IconLogout,
  IconSwords,
  IconTransfer,
} from "@tabler/icons-react";
import Image from "next/image";
import logo from '../../public/logo.png';
import { notifyError } from "@/app/lib/notify";

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
  const smUp = useMediaQuery("(min-width: 48em)");

  return (
    <AppShell
      header={{ height: smUp ? 56 : 96 }}
      navbar={{ width: 280, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Flex
          h="100%"
          px="md"
          py={smUp ? 0 : "xs"}
          direction={smUp ? "row" : "column"}
          align={smUp ? "center" : "stretch"}
          justify={smUp ? "space-between" : "center"}
          gap={smUp ? "md" : "xs"}
        >
          <Group gap="sm">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Image
              src={logo}
              alt="logo"
              width={50}
              height={50}
              style={{ display: "block", margin: "0", maxWidth: "100%", height: "auto" }}
            />
            <Title order={4}>Monopoly Bank Go</Title>
          </Group>
          <Group
            gap="sm"
            justify={smUp ? "flex-end" : "space-between"}
            w={smUp ? "auto" : "100%"}
            wrap="wrap"
          >
            <Text size="sm" c="dimmed" style={{width:"100px" ,overflowX: "hidden"}}>
              {username ? `Admin: ${username}` : ""}
            </Text>
            <Button
              className="mbg-click"
              variant="light"
              color="red"
              leftSection={<IconLogout size={16} />}
              onClick={async () => {
                try {
                  await signOut({ redirect: false });
                  router.push("/login");
                  router.refresh();
                } catch (e) {
                  notifyError("Logout gagal", e, "Tidak bisa logout. Coba lagi.");
                }
              }}
            >
              Logout
            </Button>
          </Group>
        </Flex>
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

      <AppShell.Main>
        <Box key={pathname} className="mbg-page">
          {children}
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
