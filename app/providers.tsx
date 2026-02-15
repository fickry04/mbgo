"use client";

import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: true,
            retry: 1,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        defaultColorScheme="light"
        theme={{
          primaryColor: "teal",
          defaultRadius: "md",
          components: {
            Button: {
              styles: {
                root: {
                  transition: "transform 120ms ease, filter 120ms ease",
                },
              },
            },
            Card: {
              styles: {
                root: {
                  transition: "transform 160ms ease",
                },
              },
            },
            NavLink: {
              styles: {
                root: {
                  transition: "transform 140ms ease",
                },
              },
            },
          },
        }}
      >
        <ModalsProvider>
          <Notifications position="top-right" />
          {children}
        </ModalsProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
