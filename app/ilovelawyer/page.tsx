import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRight,
  ChevronDown,
  FileText,
  FolderKanban,
  Library,
  MessageSquareText,
  ScanSearch,
  SquareTerminal,
  Users,
} from "lucide-react"

export const metadata: Metadata = {
  title: "ilovelawyer: AI Legal Intelligence by Forhu AI",
  description:
    "ilovelawyer (I Love Lawyer) is an AI case workspace for lawyers, with a multi-pane Legal Terminal. Developed by Forhu AI for the Philippines and the UK.",
  alternates: { canonical: "https://forhu.ai/ilovelawyer" },
  openGraph: {
    title: "ilovelawyer | Developed by Forhu AI",
    description:
      "ilovelawyer (I Love Lawyer) is an AI case workspace built for lawyers: organize a client's matter, interrogate the documents, and see the strategy on one screen. Developed by Forhu AI.",
    url: "https://forhu.ai/ilovelawyer",
    siteName: "Forhu",
    type: "website",
    images: [
      {
        url: "/forhu.ico.png",
        width: 1200,
        height: 630,
        alt: "ilovelawyer, developed by Forhu AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ilovelawyer | Developed by Forhu AI",
    description:
      "ilovelawyer (I Love Lawyer) is an AI case workspace for lawyers, with a multi-pane Legal Terminal. Developed by Forhu AI.",
    images: ["/forhu.ico.png"],
  },
}

const sites = [
  {
    name: "ilovelawyer Philippines",
    host: "ph.ilovelawyer.com",
    href: "https://ph.ilovelawyer.com",
    detail:
      "Cited Philippine jurisprudence, a Philippine statutory code library, and full deadline tracking.",
  },
  {
    name: "ilovelawyer United Kingdom",
    host: "uk.ilovelawyer.com",
    href: "https://uk.ilovelawyer.com",
    detail:
      "Cited UK precedent (England and Wales, Scotland, Northern Ireland), live case law and legislation search (TNA Find Case Law, legislation.gov.uk), and provisional CPR deadline tracking.",
  },
]

const legalTerminal = {
  title: "Legal Terminal",
  description:
    "A freeform, multi-pane workspace for power users. Drag, resize and arrange panes, start from presets of 1, 2, 4 or 6 panes, and save, load and reset named layouts per case. After each analysis run, a plain \"What changed\" summary shows what moved.",
  panes: [
    { name: "Legal Issues" },
    { name: "Strengths" },
    { name: "Weaknesses" },
    { name: "Attack Strategies" },
    { name: "Defense Strategies" },
    { name: "Witnesses" },
    { name: "Damages & Remedies" },
    { name: "Contradictions" },
    {
      name: "Case Reconstruction",
      detail:
        "A written narrative in three registers (General, For the Court, From the Other Side), with an honest list of what it does not cover.",
    },
    {
      name: "Red Team",
      detail: "Surfaces the argument the opposing side will likely make against a given position.",
    },
    { name: "And more" },
  ],
}

const capabilities = [
  {
    title: "Case-aware AI consultation",
    description:
      "Each case holds multiple consultations, and the case details (type of action, jurisdiction, parties, notes) go with every message, so the lawyer never has to re-explain the matter. Answers are cited, with related case law listed alongside: title, case number, source link, snippet and relevance.",
    icon: MessageSquareText,
    wide: true,
  },
  {
    title: "Case Workspace",
    description:
      "A per-case screen with Sources, Chat and Studio. Studio generates a Mind Map of the case strategy (Legal Basis, Key Facts, Remedies, Risks, Next Steps), a Timeline of key dates, and a Data Table.",
    icon: FolderKanban,
  },
  {
    title: "Research library",
    description:
      "Search case law and statutory and legislative sources with citation checking, so every quoted authority is verified against a real source document. Query AI returns a generated article, and case law documents are searchable read-only.",
    icon: Library,
    wide: true,
  },
  {
    title: "Analysis refresh",
    description:
      "Re-derives a case's analysis from its documents: contradictions, strategy, key dates, findings, outlook and the mind map. It runs on demand, or automatically after documents are uploaded, deleted or archived.",
    icon: ScanSearch,
  },
  {
    title: "Case portfolio, files and calendar",
    description:
      "Create a case with its parties, upload PDF or DOCX documents, and find every case in the portfolio. Transcription, appointments and deadline tracking are tied to each case.",
    icon: FileText,
  },
  {
    title: "Firms and teams",
    description:
      "Multi-user firm accounts on Solo, Professional and Enterprise plans, with role-based invites for Owner, Admin and Member.",
    icon: Users,
    wide: true,
  },
]

const faqs = [
  {
    q: "What is ilovelawyer (I Love Lawyer)?",
    a: "ilovelawyer, also written I Love Lawyer, is an AI case workspace built for lawyers: organize a client's matter, interrogate the documents, and see the strategy on one screen. It is a software application for attorneys, paralegals and firm partners, developed by Forhu AI.",
  },
  {
    q: "What is the Legal Terminal in ilovelawyer?",
    a: "The Legal Terminal is a freeform, multi-pane workspace for power users. Lawyers drag, resize and arrange panes such as Legal Issues, Strengths, Weaknesses, Attack Strategies, Defense Strategies, Witnesses, Damages & Remedies, Contradictions, Case Reconstruction and Red Team, start from presets of 1, 2, 4 or 6 panes, and save, load and reset named layouts per case.",
  },
  {
    q: "Is ilovelawyer a law firm?",
    a: "No. ilovelawyer is a software application, not a law firm or legal service provider. It supports the lawyer's own judgment and is not a legal-help app for the public.",
  },
  {
    q: "Who develops ilovelawyer?",
    a: "ilovelawyer is developed by Forhu AI (FOR HUMAN), a technology company founded by CEO Jungkwan Shin and based in New York.",
  },
  {
    q: "Which countries does ilovelawyer support?",
    a: "ilovelawyer currently serves the Philippines (ph.ilovelawyer.com) and the United Kingdom (uk.ilovelawyer.com) as separate jurisdiction-specific sites.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://forhu.ai/ilovelawyer#faq",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

const description =
  "An AI case workspace built for lawyers: organize a client's matter, interrogate the documents, and see the strategy on one screen. Serving the Philippines and the United Kingdom as separate jurisdiction-specific sites."

const ilovelawyerJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://forhu.ai/ilovelawyer",
  name: "ilovelawyer",
  url: "https://forhu.ai/ilovelawyer",
  description,
  about: {
    "@type": "ItemList",
    name: "ilovelawyer",
    itemListElement: sites.map((site, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SoftwareApplication",
        name: site.name,
        alternateName: "I Love Lawyer",
        description: `${description} ${site.detail}`,
        applicationCategory: "Legal Technology",
        url: site.href,
        featureList: [legalTerminal.title, ...capabilities.map((c) => c.title)],
        brand: { "@type": "Brand", name: "ilovelawyer" },
        creator: { "@id": "https://forhu.ai/#organization" },
      },
    })),
  },
  publisher: { "@id": "https://forhu.ai/#organization" },
}

export default function IlovelawyerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ilovelawyerJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="bg-background text-foreground min-h-screen pt-24">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-6">
              ilovelawyer
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light">
              An AI case workspace built for lawyers: organize a client's matter, interrogate the documents, and see the strategy on one screen. Developed by Forhu AI.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href={sites[0].href} className="px-6 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition-colors">
                {sites[0].name}
              </a>
              <a href={sites[1].href} className="px-6 py-3 rounded-md border border-border text-foreground hover:bg-card/50 transition-colors">
                {sites[1].name}
              </a>
            </div>
          </div>
        </section>

        {/* What it is and where */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="group p-6 sm:p-8 md:p-10 rounded-2xl border border-white/8 bg-white/[0.09] backdrop-blur-sm shadow-lg shadow-black/30">
                <div className="h-1 w-12 bg-accent/50 mb-6 sm:mb-8 rounded-full group-hover:w-20 transition-all duration-500" />
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-6">What it is</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  ilovelawyer, also written I Love Lawyer, is a software application for attorneys, paralegals and firm partners to manage cases, research case law, and consult an AI assistant grounded in verified, citation-checked sources.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  It supports the lawyer's own judgment. It is not a law firm or legal service provider, and it is not a legal-help app for the public.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  ilovelawyer is developed by Forhu AI.
                </p>
              </div>

              <div className="group p-6 sm:p-8 md:p-10 rounded-2xl border border-white/8 bg-white/[0.09] backdrop-blur-sm shadow-lg shadow-black/30">
                <div className="h-1 w-12 bg-accent/50 mb-6 sm:mb-8 rounded-full group-hover:w-20 transition-all duration-500" />
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-6">Choose your jurisdiction</h2>
                <ul className="divide-y divide-white/[0.06]">
                  {sites.map((site) => (
                    <li key={site.href}>
                      <a
                        href={site.href}
                        className="flex items-start justify-between gap-4 py-5 hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:text-accent"
                      >
                        <span className="flex flex-col gap-1">
                          <span className="text-lg font-semibold text-foreground">{site.name}</span>
                          <span className="text-sm text-muted-foreground">{site.host}</span>
                          <span className="text-sm text-muted-foreground leading-relaxed mt-2">{site.detail}</span>
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-accent shrink-0 mt-1" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Terminal */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/10 border-t border-border/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-12">{legalTerminal.title} in ilovelawyer</h2>
            <div className="group p-6 sm:p-8 md:p-10 rounded-2xl border border-white/8 bg-white/[0.09] backdrop-blur-sm shadow-lg shadow-black/30">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                <div className="lg:col-span-2">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                    <SquareTerminal className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{legalTerminal.description}</p>
                </div>
                <div className="lg:col-span-3">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {legalTerminal.panes
                      .filter((pane) => pane.detail)
                      .map((pane) => (
                        <li key={pane.name} className="rounded-lg border border-white/8 bg-black/30 p-5">
                          <p className="text-base font-semibold text-foreground">{pane.name}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed mt-2">{pane.detail}</p>
                        </li>
                      ))}
                  </ul>
                  <p className="text-xs text-muted-foreground mt-6 mb-3">Also includes</p>
                  <ul className="flex flex-wrap gap-2">
                    {legalTerminal.panes
                      .filter((pane) => !pane.detail)
                      .map((pane) => (
                        <li
                          key={pane.name}
                          className="rounded-full border border-white/8 bg-black/30 px-4 py-1.5 text-sm text-foreground/90"
                        >
                          {pane.name}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-4">What it can do</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                What lawyers can do in ilovelawyer.
              </p>
            </div>
            {/* Other capabilities */}
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {capabilities.map((item) => (
                <li
                  key={item.title}
                  className={`group p-6 sm:p-8 rounded-2xl border border-white/8 bg-white/[0.09] backdrop-blur-sm shadow-lg shadow-black/30 hover:border-accent/30 transition-colors duration-500 ${item.wide ? "lg:col-span-2" : ""}`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-8">
              The interface is available in English, Korean and Tagalog. Legal content and AI replies are not translated.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-4">Frequently asked questions</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Common questions about ilovelawyer and the Legal Terminal.
            </p>
            <div className="rounded-2xl border border-white/8 bg-white/[0.09] backdrop-blur-sm shadow-lg shadow-black/30 divide-y divide-white/[0.06] overflow-hidden">
              {faqs.map(({ q, a }, i) => (
                <details key={q} open={i === 0} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 sm:px-8 py-5 text-left hover:bg-white/[0.04] transition-colors duration-200 focus:outline-none focus-visible:bg-white/[0.06] [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground">{q}</h3>
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="px-6 sm:px-8 pb-6 text-muted-foreground text-sm sm:text-base leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Developer */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/30">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Developed by Forhu AI</h2>
              <p className="text-muted-foreground mt-2">
                ilovelawyer is developed by Forhu AI. Learn more about the company and its research.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link href="/about" className="px-6 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition-colors">
                About Forhu
              </Link>
              <Link href="/research" className="px-6 py-3 rounded-md border border-border text-foreground hover:bg-card/50 transition-colors">
                Research
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
