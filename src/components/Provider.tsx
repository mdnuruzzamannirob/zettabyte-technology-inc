"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { newQueryClient } from "@/lib/queryClient";
import { SessionProvider } from "next-auth/react";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <QueryClientProvider client={newQueryClient()}>
        {children}
      </QueryClientProvider>
    </SessionProvider>
  );
}
