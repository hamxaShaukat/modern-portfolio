
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hamza Shaukat - Full Stack Developer",
  description: "Full-stack developer crafting powerful web applications with modern technologies and clean code.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" >
      <body suppressHydrationWarning className={inter.className}>{children}</body>
    </html>
  )
}
