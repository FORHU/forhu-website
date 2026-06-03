import type { Metadata } from "next"
import Link from "next/link"
import SclBrainVisualization from "@/components/scl-brain-visualization"
import SclComparisonSection from "@/components/scl-comparison-section"
import SclLoopSection from "@/components/scl-loop-section"

export const metadata: Metadata = {
  title: "Structured Cognitive Loop (SCL)",
  description:
    "The Structured Cognitive Loop (SCL) is a recursive, hierarchical cognitive architecture for AI agents — integrating perception, judgment, memory, and action through continuous feedback loops.",
  alternates: { canonical: "https://forhu.ai/scl" },
  openGraph: {
    title: "Structured Cognitive Loop (SCL) | Forhu",
    description:
      "A recursive, human-centric cognitive architecture for AI agents that separates reasoning into auditable, correctable steps.",
    url: "https://forhu.ai/scl",
  },
}

const sclJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Structured Cognitive Loop (SCL)",
  description:
    "The Structured Cognitive Loop (SCL) is a hierarchical control architecture for LLM agents that integrates perception, cognition, and action through recursive feedback mechanisms.",
  url: "https://forhu.ai/scl",
  author: { "@type": "Organization", name: "Forhu", url: "https://forhu.ai" },
  about: [
    { "@type": "Thing", name: "Structured Cognitive Loop" },
    { "@type": "Thing", name: "Cognitive Architecture" },
    { "@type": "Thing", name: "Large Language Model Agents" },
  ],
  keywords: "SCL, Structured Cognitive Loop, cognitive architecture, AI agents, LLM, behavioral intelligence",
}

const components = [
  {
    name: "Metaprompt",
    role: "The Compass",
    description:
      "The Metaprompt defines the agent's identity, values, and operating boundaries before any task begins. It is the constitutional layer — setting what the agent is allowed to do, how it reasons, and what it must never do. Unlike a simple system prompt, the SCL Metaprompt is structured, versioned, and auditable.",
  },
  {
    name: "Judgment",
    role: "The Decision Maker",
    description:
      "Judgment is where the SCL evaluates incoming information, weighs it against the Metaprompt's constraints, and decides on a course of action. This layer prevents impulsive or hallucinated responses by requiring explicit reasoning traces before any output is produced.",
  },
  {
    name: "Runtime",
    role: "The Executor",
    description:
      "Runtime is responsible for executing the plan approved by Judgment. It interacts with tools, APIs, and external systems. Every action taken at the Runtime layer is logged and traceable, enabling post-hoc audit of exactly what the agent did and why.",
  },
  {
    name: "Memory",
    role: "The Experience Vault",
    description:
      "Memory stores the agent's accumulated experience — past decisions, their outcomes, errors made, and corrections applied. The SCL Memory layer is what enables the system to learn from mistakes across sessions, preventing hallucinations from recurring.",
  },
  {
    name: "Control",
    role: "The Self-Checker",
    description:
      "Control is the meta-cognitive layer that monitors the loop itself. It detects when Judgment is drifting from the Metaprompt, when Runtime is producing unexpected outputs, or when Memory has conflicting records. Control closes the loop — feeding corrections back into Judgment before they surface as errors.",
  },
]

const faqs = [
  {
    q: "What is the Structured Cognitive Loop (SCL)?",
    a: "SCL is a hierarchical control architecture for AI agents developed by Forhu. It structures AI reasoning into five auditable layers — Metaprompt, Judgment, Runtime, Memory, and Control — creating a recursive feedback loop that makes AI behavior transparent, correctable, and trustworthy.",
  },
  {
    q: "How does SCL differ from standard Chain-of-Thought prompting?",
    a: "Chain-of-Thought (CoT) is a prompting technique that encourages step-by-step reasoning within a single generation. SCL is an architectural framework — it separates reasoning into distinct, persistent layers that operate across multiple interactions, store memory, self-monitor for errors, and apply corrections recursively.",
  },
  {
    q: "Can SCL be applied to any LLM?",
    a: "Yes. SCL is model-agnostic. It operates as a control layer around any LLM — GPT, Claude, Gemini, or open-source models — orchestrating how those models reason, act, and learn from experience.",
  },
  {
    q: "How does SCL handle AI hallucinations?",
    a: "SCL does not claim to eliminate hallucinations — Forhu's research shows they are an inevitable property of intelligence under lossy abstraction. Instead, SCL's Memory and Control layers detect hallucinations when they occur, log them, and prevent the same error from appearing twice. The system learns from every mistake.",
  },
  {
    q: "Where is SCL used in practice?",
    a: "SCL currently powers two live applications: Chumme (a human-centered social platform for artists) and I Love Lawyer (an AI legal research platform for Philippine jurisprudence). Both are case studies in applying recursive cognitive architecture to complex, high-stakes domains.",
  },
]

export default function SclPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sclJsonLd) }}
      />

      <main className="bg-background text-foreground min-h-screen">
        {/* Breadcrumb */}
        <div className="pt-24 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">SCL</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Architecture</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mt-4 mb-6">
              Structured<br />Cognitive Loop
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light">
              A recursive, human-centric cognitive architecture that makes AI reasoning transparent, auditable, and self-correcting — by design.
            </p>
          </div>
        </section>

        {/* Existing section components */}
        <SclLoopSection />
        <SclBrainVisualization />
        <SclComparisonSection />

        {/* Expanded: Component deep-dive */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Deep Dive</span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mt-4 mb-4">The Five Layers of SCL</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Each layer of the Structured Cognitive Loop has a distinct role. Together they create a self-monitoring, self-correcting system that no single-layer LLM can replicate.
              </p>
            </div>
            <div className="space-y-8">
              {components.map((c, i) => (
                <div key={c.name} className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 p-8 rounded-2xl border border-border/50 bg-card/20">
                  <div>
                    <span className="text-accent text-xs font-bold uppercase tracking-widest">Layer {i + 1}</span>
                    <h3 className="text-2xl font-bold text-foreground mt-2">{c.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{c.role}</p>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expanded: Why SCL */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background/50 border-t border-border/30">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Comparison</span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mt-4 mb-6">Why SCL Over Standard LLM Prompting?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Standard LLM prompting treats the model as a black box — you send a prompt, you receive an answer, and you have no insight into how that answer was formed or whether it can be trusted.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SCL wraps the model in a structured reasoning environment where every decision is logged, every error is recorded, and every output is validated against explicit constraints before it surfaces to the user.
              </p>
            </div>
            <div className="space-y-4">
              {[
                ["Standard LLM", "SCL"],
                ["Single-shot generation", "Multi-layer reasoning"],
                ["No memory across sessions", "Persistent, structured memory"],
                ["Errors silently repeated", "Errors logged and prevented"],
                ["Black-box outputs", "Fully auditable reasoning traces"],
                ["Prompt-only constraints", "Constitutional Metaprompt layer"],
              ].map(([left, right], i) =>
                i === 0 ? (
                  <div key={i} className="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground px-4">
                    <span>{left}</span><span className="text-accent">{right}</span>
                  </div>
                ) : (
                  <div key={i} className="grid grid-cols-2 gap-4 p-4 rounded-xl border border-border/40 bg-card/20 text-sm">
                    <span className="text-muted-foreground">{left}</span>
                    <span className="text-foreground font-medium">{right}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/30">
          <div className="max-w-3xl mx-auto">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">FAQ</span>
            <h2 className="text-4xl font-bold tracking-tighter mt-4 mb-12">Common Questions</h2>
            <div className="space-y-8">
              {faqs.map((f) => (
                <div key={f.q} className="border-b border-border/30 pb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/30 bg-card/10">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Explore the research behind SCL</h2>
              <p className="text-muted-foreground mt-2">Read our peer-reviewed papers on cognitive architecture and LLM behavior.</p>
            </div>
            <div className="flex gap-4 shrink-0">
              <Link href="/research" className="px-6 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition-colors">
                Read Research
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
