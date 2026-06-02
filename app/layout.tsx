import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Poppins } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://forhu.ai"),
  title: {
    default: "Forhu — Structured Cognitive Loop",
    template: "%s | Forhu",
  },
  description:
    "Advancing AI research and education through the Structured Cognitive Loop (SCL) — a recursive, human-centric cognitive architecture.",
  keywords: [
    "AI research",
    "Structured Cognitive Loop",
    "SCL",
    "cognitive architecture",
    "AI education",
    "Forhu",
  ],
  authors: [{ name: "Forhu", url: "https://forhu.ai" }],
  openGraph: {
    type: "website",
    url: "https://forhu.ai",
    title: "Forhu — Structured Cognitive Loop",
    description:
      "Advancing AI research and education through the Structured Cognitive Loop (SCL).",
    siteName: "Forhu",
    images: [
      {
        url: "/forhu.ico.png",
        width: 1200,
        height: 630,
        alt: "Forhu — Structured Cognitive Loop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forhu — Structured Cognitive Loop",
    description:
      "Advancing AI research and education through the Structured Cognitive Loop (SCL).",
    images: ["/forhu.ico.png"],
  },
  alternates: {
    canonical: "https://forhu.ai",
  },
  icons: {
    icon: [
      {
        url: "/forhu.ico.png",
        type: "image/png",
      },
    ],
    apple: "/forhu.ico.png",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Forhu",
  url: "https://forhu.ai",
  logo: "https://forhu.ai/forhu.ico.png",
  description:
    "Advancing AI research and education through the Structured Cognitive Loop (SCL) — a recursive, human-centric cognitive architecture.",
  sameAs: [],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`font-sans antialiased bg-background text-foreground ${poppins.variable}`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
