import type { Metadata } from "next"
import Link from "next/link"
import ProjectsSection from "@/components/projects-section"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Real-world applications of the Structured Cognitive Loop — Chumme, an AI-powered social platform for artists, and I Love Lawyer, an intelligent legal research platform for Philippine jurisprudence.",
  alternates: { canonical: "https://forhu.ai/projects" },
  openGraph: {
    title: "Projects | Forhu",
    description:
      "See the Structured Cognitive Loop in action — Chumme and I Love Lawyer are proof that SCL works in complex, high-stakes domains.",
    url: "https://forhu.ai/projects",
  },
}

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Forhu Projects",
  description: "Real-world applications of the Structured Cognitive Loop architecture.",
  url: "https://forhu.ai/projects",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareApplication",
        name: "Chumme",
        description:
          "A revolutionary social ecosystem for artists and creators, utilizing SCL architecture to foster authentic community engagement and creative autonomy.",
        applicationCategory: "Social Platform",
        author: { "@type": "Organization", name: "Forhu" },
        keywords: "artist platform, social tech, SCL integration, creative community",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "I Love Lawyer",
        description:
          "An intelligent legal research platform that applies recursive cognitive loops to analyze Philippine jurisprudence.",
        applicationCategory: "Legal Technology",
        url: "https://ilovelawyer.com",
        author: { "@type": "Organization", name: "Forhu" },
        keywords: "legal tech, Philippine jurisprudence, AI legal research, SCL",
      },
    },
  ],
}

const caseStudies = [
  {
    id: "chumme",
    name: "Chumme",
    category: "Social Technology / Artist Platform",
    problem:
      "Traditional social platforms optimize for engagement metrics at the expense of creator wellbeing. Algorithmic feeds amplify content that provokes reaction, not content that reflects authentic creative expression. Artists on these platforms are caught between the platform's incentive structure and their own creative integrity.",
    sclSolution:
      "Chumme uses SCL to build a community engagement engine that evaluates creative content against a Metaprompt encoding artistic values — not virality metrics. The Judgment layer weighs each piece of content against community standards defined by artists, not ad-tech teams. The Memory layer tracks creator trajectories over time, ensuring the platform serves long-term creative growth rather than short-term engagement spikes.",
    outcomes: [
      "Recommendation system driven by creative intent, not reaction metrics",
      "Content moderation governed by community-defined values in the Metaprompt",
      "Creator memory: the platform remembers what a creator is building toward, not just what performed well",
      "Hallucination governance applied to AI-generated creative suggestions — preventing repetitive, homogenized output",
    ],
    scl_layers: ["Metaprompt (community values)", "Judgment (content evaluation)", "Memory (creator trajectory)", "Control (quality self-check)"],
  },
  {
    id: "ilovelawyer",
    name: "I Love Lawyer",
    category: "Legal Technology / Philippine Jurisprudence",
    link: "https://ilovelawyer.com",
    problem:
      "Legal research in the Philippines requires navigating decades of jurisprudence, often inconsistently indexed and difficult to cross-reference. Legal professionals spend hours finding relevant precedents, and AI tools that hallucinate legal citations cause serious professional risk. Trust is non-negotiable in a legal context.",
    sclSolution:
      "I Love Lawyer applies the full SCL stack to legal reasoning. The Metaprompt encodes the constraints of Philippine law — jurisdiction, citation standards, and professional ethical requirements. The Judgment layer evaluates every case reference against the Memory layer's database of verified jurisprudence before any citation is surfaced. The Control layer cross-checks outputs against known hallucination patterns, flagging any citation that cannot be verified before it reaches the lawyer.",
    outcomes: [
      "Zero unverified citations — every result is cross-referenced against a structured jurisprudence database",
      "Reasoning traces for every recommendation — lawyers can audit the AI's logic before relying on it",
      "Persistent memory of case context across sessions — the platform builds understanding of a case over time",
      "Hallucination governance purpose-built for high-stakes legal use: errors are logged and prevented from recurring",
    ],
    scl_layers: ["Metaprompt (legal constraints + ethics)", "Judgment (citation evaluation)", "Runtime (jurisprudence search)", "Memory (case history)", "Control (hallucination prevention)"],
  },
]

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />

      <main className="bg-background text-foreground min-h-screen">
        {/* Breadcrumb */}
        <div className="pt-24 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <nav className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.09] backdrop-blur-sm text-xs font-medium">
            <Link href="/" className="text-muted-foreground hover:text-accent transition-colors duration-200">Home</Link>
            <span className="text-accent/50 mx-1">›</span>
            <span className="text-foreground/90">Projects</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Proof of Concept</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mt-4 mb-6">
              SCL in<br />Action
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light">
              The Structured Cognitive Loop is not theoretical. These are live applications where SCL governs real decisions affecting real people.
            </p>
          </div>
        </section>

        {/* Existing projects section */}
        <ProjectsSection />

        {/* Case studies */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Case Studies</span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mt-4 mb-4">How SCL Powers Each Project</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A technical breakdown of how each SCL layer contributes to real product decisions.
              </p>
            </div>
            <div className="space-y-8">
              {caseStudies.map((cs) => (
                <div key={cs.id} className="group p-6 sm:p-8 md:p-10 rounded-2xl border border-white/8 bg-white/[0.09] backdrop-blur-sm shadow-lg shadow-black/30 hover:border-accent/30 transition-all duration-300">
                  {/* Accent bar */}
                  <div className="h-1 w-12 bg-accent/50 mb-6 rounded-full group-hover:w-20 transition-all duration-500" />

                  {/* Header row */}
                  <div className="mb-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">{cs.category}</span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mt-2">
                      {cs.link ? (
                        <a href={cs.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                          {cs.name} →
                        </a>
                      ) : cs.name}
                    </h3>
                  </div>

                  {/* Two-column content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">The Problem</p>
                        <p className="text-muted-foreground leading-relaxed text-sm">{cs.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">SCL Layers Used</p>
                        <div className="flex flex-wrap gap-2">
                          {cs.scl_layers.map((l) => (
                            <span key={l} className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/[0.09] text-muted-foreground">{l}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">The SCL Solution</p>
                        <p className="text-muted-foreground leading-relaxed text-sm">{cs.sclSolution}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Outcomes</p>
                        <ul className="space-y-2">
                          {cs.outcomes.map((o) => (
                            <li key={o} className="flex gap-3 text-sm text-muted-foreground">
                              <span className="text-accent shrink-0 mt-0.5">•</span>
                              <span>{o}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/30">
          <div className="max-w-4xl mx-auto">
            <div className="group p-6 sm:p-8 md:p-10 rounded-2xl border border-white/8 bg-white/[0.09] backdrop-blur-sm shadow-lg shadow-black/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <div className="h-1 w-12 bg-accent/50 mb-4 rounded-full group-hover:w-20 transition-all duration-500" />
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Want to build with SCL?</h2>
                <p className="text-muted-foreground mt-2 text-sm">Read the research or get in touch to explore how SCL can apply to your domain.</p>
              </div>
              <div className="flex gap-4 shrink-0">
                <Link href="/research" className="px-6 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition-colors">Read Research</Link>
                <Link href="/#contact" className="px-6 py-3 rounded-md border border-white/15 text-foreground hover:bg-white/[0.08] transition-colors">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
