// Paquetes de Next y React
import { ProviderAuth } from "@/providers/Providers"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

// Componentes y/o estilos
import NavBar from "@/components/NavBar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

// metadata general para el proyecto
export const metadata: Metadata = {
  title: "Next-auth ejemplo",
  description: "Project next-auth ejemplo",
}

// Layout general para los componentes del proyecto
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ProviderAuth>
          <NavBar />
          <main className="bg-zinc-400 w-full h-[90vh] grid justify-center items-center">
            {children}
          </main>
        </ProviderAuth>
      </body>
    </html>
  )
}
