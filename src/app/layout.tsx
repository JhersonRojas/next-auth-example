import NavBar from "@/components/NavBar"
import { ProviderAuth } from "@/providers/Providers"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next-auth ejemplo",
  description: "Project next-auth ejemplo",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
