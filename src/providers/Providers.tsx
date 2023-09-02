"use client"

import { SessionProvider } from "next-auth/react"

// Provider principal para validar la sesión del usuario
export function ProviderAuth({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}
