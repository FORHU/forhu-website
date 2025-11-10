import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "FORHU - If you can't trust AI, then redesign it.",
  description:
    "FORHU has given AI the structure of thought. SCL (Structured Cognitive Loop) makes AI that thinks, remembers, and corrects itself. The next evolution of artificial intelligence.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  )
}
