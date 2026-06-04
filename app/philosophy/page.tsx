import type { Metadata } from "next"
import Link from "next/link"
import PhilosophySection from "@/components/philosophy-section"

export const metadata: Metadata = {
  title: "Our Philosophy",
  description:
    "Forhu's philosophy: AI must be human-centered, honest, and self-correcting. We believe untrustworthy intelligence is not intelligence — and that transparency is the foundation of trust.",
  alternates: { canonical: "https://forhu.ai/philosophy" },
  openGraph: {
    title: "Our Philosophy | Forhu",
    description:
      "Human-centered AI, honest engineering, and hallucination governance — the three principles behind everything Forhu builds.",
    url: "https://forhu.ai/philosophy",
  },
}

const philosophyJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Forhu's Philosophy: Human-Centered AI",
  description:
    "Forhu's philosophy: AI must be human-centered, honest, and self-correcting. Untrustworthy intelligence is not intelligence.",
  url: "https://forhu.ai/philosophy",
  author: { "@type": "Organization", name: "Forhu", url: "https://forhu.ai" },
  about: [
    { "@type": "Thing", name: "Human-Centered AI" },
    { "@type": "Thing", name: "Explainable AI" },
    { "@type": "Thing", name: "AI Ethics" },
    { "@type": "Thing", name: "Hallucination Governance" },
  ],
  keywords: "human-centered AI, explainable AI, trustworthy AI, AI ethics, hallucination governance, transparent AI",
}

const pillars = [
  {
    title: "FOR HUMAN",
    icon: "👥",
    tagline: "AI is not a tool, but a partner",
    short: "Technology must expand what humans can do — not replace them or act beyond their oversight.",
    expanded: `The name FORHU is not a brand exercise. It is a commitment: every system we build, every architecture we publish, and every product we deploy must demonstrably serve human wellbeing.

We reject the framing that AI is simply a productivity multiplier. AI that increases output at the cost of human agency, dignity, or accountability is not progress — it is a design failure. The Structured Cognitive Loop was conceived specifically to ensure that AI systems remain within human-defined boundaries at every step of their reasoning.

FOR HUMAN means AI that explains itself. AI that can be corrected. AI that remembers its mistakes. AI that never acts as if human oversight is optional.`,
  },
  {
    title: "Honest Engineering",
    icon: "🔍",
    tagline: "If even AI doesn't know why it gave that answer, how can you?",
    short: "Black-box AI cannot be trusted. SCL separates and records every reasoning step.",
    expanded: `Traditional LLMs generate outputs in a single forward pass. There is no persistent reasoning trace, no record of which facts were weighted against which, and no mechanism to audit why a specific answer was produced. When the model is wrong, you cannot know at which step the reasoning failed.

Honest Engineering means designing systems where the reasoning process is as auditable as the output. SCL achieves this by separating cognition into discrete layers — Metaprompt, Judgment, Runtime, Memory, Control — each of which operates independently and logs its state. When an error occurs, it is traceable to a specific layer. When a correction is needed, it can be applied precisely.

Transparency is not a feature you add to an AI system. It is a structural property you build in from the start.`,
  },
  {
    title: "Hallucination Governance",
    icon: "🧠",
    tagline: "The right to err, the duty not to repeat",
    short: "Hallucinations cannot be eliminated — but they can be prevented from happening twice.",
    expanded: `Forhu's research has established that hallucinations are not bugs in LLMs — they are inevitable consequences of lossy information compression at scale. A model that never hallucinated would be a model that never generalized. Demanding zero hallucination is demanding zero intelligence.

What we can demand is that hallucinations do not compound. SCL's Memory layer records every error the system makes. SCL's Control layer cross-references every new output against that error record before it is delivered. If a hallucination pattern is detected, it is flagged, corrected, and logged — permanently.

This is Hallucination Governance: not the elimination of error, but the systematic prevention of repeated error. It is the difference between an AI that occasionally makes mistakes and one that makes the same mistake twice.`,
  },
]

export default function PhilosophyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(philosophyJsonLd) }}
      />

      <main className="bg-background text-foreground min-h-screen">
        {/* Breadcrumb */}
        <div className="pt-24 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <nav className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm text-xs font-medium">
            <Link href="/" className="text-muted-foreground hover:text-accent transition-colors duration-200">Home</Link>
            <span className="text-accent/50 mx-1">›</span>
            <span className="text-foreground/90">Philosophy</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Principles</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mt-4 mb-6">
              Our<br />Philosophy
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light">
              Untrustworthy intelligence is not intelligence. Every principle we hold follows from this single conviction.
            </p>
          </div>
        </section>

        {/* Manifesto block */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-7xl mx-auto border-b border-border/30">
          <blockquote className="border-l-4 border-accent pl-8 py-4 max-w-3xl">
            <p className="text-2xl sm:text-3xl font-light text-foreground leading-relaxed italic">
              "We are in an age of distrust. Not because AI is powerful — but because AI is opaque. The antidote is not less AI. It is AI that shows its work."
            </p>
            <cite className="block mt-4 text-sm text-muted-foreground not-italic">— Forhu Research Team</cite>
          </blockquote>
        </section>

        {/* Existing section component */}
        <PhilosophySection />

        {/* Expanded pillars */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">In Depth</span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mt-4 mb-4">The Three Pillars, Expanded</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Each principle is a constraint we impose on ourselves — and a promise we make to the people who use what we build.
              </p>
            </div>
            <div className="space-y-16">
              {pillars.map((p, i) => (
                <div key={p.title} className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 pb-16 border-b border-border/20 last:border-0">
                  <div>
                    <span className="text-4xl">{p.icon}</span>
                    <h3 className="text-3xl font-bold text-foreground mt-4 mb-2">{p.title}</h3>
                    <p className="text-accent font-medium italic text-sm">"{p.tagline}"</p>
                    <p className="text-muted-foreground mt-4 leading-relaxed">{p.short}</p>
                  </div>
                  <div className="space-y-4">
                    {p.expanded.split("\n\n").map((para, j) => (
                      <p key={j} className="text-muted-foreground leading-relaxed">{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/10 border-t border-border/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Contrast</span>
              <h2 className="text-4xl font-bold tracking-tighter mt-4 mb-4">Forhu vs. Standard AI Development</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "On transparency", standard: "Outputs are produced without explanation. Users accept or reject without understanding why.", forhu: "Every reasoning step is logged in a named layer. Errors are traceable to their origin." },
                { label: "On hallucination", standard: "Hallucinations are treated as bugs to be patched through prompting or fine-tuning.", forhu: "Hallucinations are structurally inevitable. SCL governs them through memory and correction loops." },
                { label: "On human control", standard: "Human oversight is a post-deployment consideration, not an architectural requirement.", forhu: "Human control is embedded in the Metaprompt layer — the system cannot act outside defined boundaries." },
                { label: "On trust", standard: "Trust is built through marketing, accuracy benchmarks, and user testimonials.", forhu: "Trust is built through auditability. If you cannot inspect the reasoning, you cannot trust the output." },
              ].map((row) => (
                <div key={row.label} className="rounded-xl border border-border/40 overflow-hidden">
                  <div className="px-5 py-3 border-b border-border/30 bg-card/30">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">{row.label}</span>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-border/30">
                    <div className="p-5">
                      <p className="text-xs font-bold text-muted-foreground uppercase mb-2">Standard AI</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{row.standard}</p>
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-bold text-accent uppercase mb-2">Forhu</p>
                      <p className="text-sm text-foreground leading-relaxed">{row.forhu}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/30">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">See these principles in action</h2>
              <p className="text-muted-foreground mt-2">The SCL architecture is how Forhu's philosophy becomes working software.</p>
            </div>
            <div className="flex gap-4 shrink-0">
              <Link href="/scl" className="px-6 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition-colors">
                Explore SCL
              </Link>
              <Link href="/" className="px-6 py-3 rounded-md border border-border text-foreground hover:bg-card/50 transition-colors">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
