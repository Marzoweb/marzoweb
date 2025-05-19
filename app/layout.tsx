import type React from "react"
import type { Metadata } from "next"
import { Inter, League_Spartan, Kalam } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })
const leagueSpartan = League_Spartan({ subsets: ["latin"], weight: ["400", "700"] })
const kalam = Kalam({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "MARZOWEB - Modern Web Solutions",
  description: "Custom websites & web solutions tailored to your business goals",
    generator: 'MARZOWEB',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
