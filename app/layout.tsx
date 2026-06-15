import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Poppins } from "next/font/google"
import Script from "next/script"
import ShaderBackgroundWrapper from "@/components/shader-background-wrapper"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import GlowSpheres from "@/components/glow-spheres"
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
    default: "Forhu — Trustworthy, Auditable AI | EU AI Act Ready",
    template: "%s | Forhu",
  },
  description:
    "Forhu builds explainable AI powered by SCL — trustworthy, auditable AI for finance, healthcare & legal. Every decision traceable. EU AI Act ready.",
  keywords: [
    "explainable AI",
    "auditable AI",
    "EU AI Act compliance",
    "trustworthy AI",
    "Structured Cognitive Loop",
    "SCL",
    "AI transparency",
    "AI hallucination governance",
    "cognitive architecture",
    "Forhu",
  ],
  authors: [{ name: "Forhu", url: "https://forhu.ai" }],
  openGraph: {
    type: "website",
    url: "https://forhu.ai",
    title: "Forhu — Trustworthy, Auditable AI | EU AI Act Ready",
    description:
      "Forhu builds explainable AI powered by SCL — trustworthy, auditable AI for finance, healthcare & legal. Every decision traceable. EU AI Act ready.",
    siteName: "Forhu",
    images: [
      {
        url: "/forhu.ico.png",
        width: 1200,
        height: 630,
        alt: "Forhu — Trustworthy, Auditable AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forhu — Trustworthy, Auditable AI | EU AI Act Ready",
    description:
      "Forhu builds explainable AI powered by SCL — trustworthy, auditable AI for finance, healthcare & legal. Every decision traceable. EU AI Act ready.",
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
        sizes: "any",
      },
    ],
    shortcut: "/forhu.ico.png",
    apple: "/forhu.ico.png",
  },
}

const ceoLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://forhu.ai/#ceo",
  name: "Jungkwan Shin",
  jobTitle: "Chief Executive Officer",
  description:
    "Jungkwan Shin is the CEO and founder of Forhu AI, the company behind the Structured Cognitive Loop (SCL) architecture for transparent, auditable AI.",
  worksFor: {
    "@type": "Organization",
    name: "Forhu AI",
    url: "https://forhu.ai",
  },
}

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://forhu.ai/#organization",
  name: "Forhu AI",
  alternateName: "Forhu",
  url: "https://forhu.ai",
  logo: "https://forhu.ai/forhu.ico.png",
  description:
    "Forhu AI (FOR HUMAN) is an AI technology company founded by CEO Jungkwan Shin. Forhu builds transparent, auditable AI systems using the Structured Cognitive Loop (SCL) — the Architecture of Trust for EU AI Act compliance.",
  founder: { "@id": "https://forhu.ai/#ceo" },
  ceo: { "@id": "https://forhu.ai/#ceo" },
  employee: [{ "@id": "https://forhu.ai/#ceo" }],
  knowsAbout: [
    "Structured Cognitive Loop",
    "GlassboxAI",
    "EU AI Act",
    "AI transparency",
    "cognitive architecture",
    "AI hallucination governance",
  ],
  sameAs: [
    "https://www.linkedin.com/in/forhu-ai-42484a3a3/",
    "https://x.com/forhuai",
    "https://www.instagram.com/forhu_ai/",
    "https://www.youtube.com/@ForhuAI2025",
  ],
}

const siteFaqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://forhu.ai/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is the CEO of Forhu AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jungkwan Shin is the CEO and founder of Forhu AI. He leads the development of the Structured Cognitive Loop (SCL), Forhu's transparent AI architecture designed for EU AI Act compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Who founded Forhu AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Forhu AI was founded by Jungkwan Shin, who serves as the company's CEO. FORHU stands for FOR HUMAN — reflecting the company's mission to build AI that extends human capability while safeguarding human dignity.",
      },
    },
    {
      "@type": "Question",
      name: "What is Forhu AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Forhu AI is a technology company that builds transparent, auditable AI systems using the Structured Cognitive Loop (SCL) architecture. Founded by CEO Jungkwan Shin, Forhu — which stands for FOR HUMAN — provides the Architecture of Trust for AI deployment in high-stakes industries.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Structured Cognitive Loop (SCL)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Structured Cognitive Loop (SCL) is Forhu AI's core architecture that records and displays the entire AI reasoning path in real time. Unlike blackbox AI, SCL makes every judgment traceable and auditable — a critical requirement for EU AI Act compliance.",
      },
    },
  ],
}

const webPageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Forhu — Structured Cognitive Loop",
  url: "https://forhu.ai",
  description:
    "Advancing AI research and education through the Structured Cognitive Loop (SCL) — a recursive, human-centric cognitive architecture.",
  hasPart: [
    {
      "@type": "WebPageElement",
      name: "Philosophy",
      url: "https://forhu.ai/#philosophy",
      description:
        "Forhu's foundational philosophy behind human-centric AI development and the principles driving the Structured Cognitive Loop.",
    },
    {
      "@type": "WebPageElement",
      name: "Structured Cognitive Loop (SCL)",
      url: "https://forhu.ai/#scl",
      description:
        "The Structured Cognitive Loop (SCL) — a recursive, hierarchical cognitive architecture for AI agents that integrates perception, cognition, and action through feedback mechanisms.",
    },
    {
      "@type": "WebPageElement",
      name: "Research & Publications",
      url: "https://forhu.ai/#research",
      description:
        "Peer-reviewed research and preprints on cognitive architecture, AI hallucination, and the Structured Cognitive Loop published by Forhu.",
    },
    {
      "@type": "WebPageElement",
      name: "Projects",
      url: "https://forhu.ai/#projects",
      description:
        "Real-world applications of the Structured Cognitive Loop including Chumme and I Love Lawyer.",
    },
    {
      "@type": "WebPageElement",
      name: "About Forhu",
      url: "https://forhu.ai/#about",
      description:
        "About Forhu — the team advancing AI research and education through the Structured Cognitive Loop.",
    },
    {
      "@type": "WebPageElement",
      name: "Contact",
      url: "https://forhu.ai/#contact",
      description: "Get in touch with the Forhu team.",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" style={{ background: "#0d0d0d" }} suppressHydrationWarning>
      <body
        className={`font-sans antialiased text-foreground ${poppins.variable}`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ceoLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteFaqLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
        />
        {/* Fixed shader background — shows through all pages as you scroll */}
        {/* <div className="fixed inset-0 -z-10">
          <ShaderBackgroundWrapper />
        </div> */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EPWZ4WMGPS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EPWZ4WMGPS');
          `}
        </Script>

        <GlowSpheres />

        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
