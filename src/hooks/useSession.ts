"use client";

import { useSession as nextAuthUseSession } from "next-auth/react";

export const useSession = () => {
  const { data: session, status } = nextAuthUseSession();
  const loading = status === "loading";
  const authenticated = status === "authenticated";
  return { session, loading, authenticated };
};
