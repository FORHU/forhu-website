import type { Metadata } from "next"
import Link from "next/link"
import ResearchSection from "@/components/research-section"

export const metadata: Metadata = {
  title: "Research & Publications — Explainable AI Preprints",
  description:
    "Open-access preprints on the Structured Cognitive Loop and explainable AI by Myung Ho Kim — research on auditable AI architecture and hallucination governance.",
  alternates: { canonical: "https://forhu.ai/research" },
  openGraph: {
    title: "Research & Publications — Explainable AI Preprints | Forhu",
    description:
      "Papers by Myung Ho Kim on explainable AI, auditable agent architecture, and hallucination theory — available on arXiv, OSF PsyArXiv, PhilSci Archive, and Preprints.org.",
    url: "https://forhu.ai/research",
  },
}

const publications = [
  {
    title: "Pool-Gated Retrieval",
    subtitle: "Beyond Retrieval-Augmented Generation Toward Accountable Evidential Admission",
    year: 2026,
    domains: ["RAG Architecture", "LLM Agents"],
    abstract:
      "We introduce Pool-Gated Retrieval (PGR), an architecture that reconceives retrieval-augmented generation as a three-stage epistemic process — Horizon, Warrant, and Commitment. By treating absence as a first-class fact, PGR registers confirmed absences as structural facts and propagates them to the answer, addressing absence hallucination by structural design, and every answer carries an auditable provenance record. Demonstrated on a single synthetic partial-coverage scenario against a naive RAG baseline.",
    contributions: [
      "Three-stage Horizon-Warrant-Commitment retrieval architecture",
      "Structural registration of Knowledge Gaps to prevent absence hallucination",
      "Auditable provenance record for every committed fact",
      "Taxonomy of eight RAG failure modes, with an open Python reference implementation",
    ],
    link: "https://www.preprints.org/manuscript/202606.0414",
  },
  {
    title: "Executable Epistemology",
    subtitle: "The Structured Cognitive Loop as an Architecture of Intentional Understanding",
    year: 2025,
    domains: ["Philosophy", "Cognitive Science"],
    abstract:
      "Large language models exhibit intelligence without genuine epistemic understanding, revealing a missing epistemic architecture. This paper introduces the Structured Cognitive Loop (SCL) as an executable epistemological framework, asking under what conditions cognition emerges rather than what intelligence is. Intelligence is reframed as a performed process — a continuous loop of judgment, memory, control, action, and regulation.",
    contributions: [
      "\"Executable epistemology\": philosophy operationalized as structural experiment",
      "Five structural conditions for understanding: evidential grounding, memorial persistence, normative control, environmental coupling, recursive self-reference",
      "Intelligence redefined as the capacity to reconstruct one's own epistemic state",
    ],
    link: "https://philsci-archive.pitt.edu/26865/",
  },
  {
    title: "Structured Cognitive Loop",
    subtitle: "Behavioral Intelligence in Large Language Model Agents — Extended Revision: From Behavioral Architecture to Epistemic Accountability",
    year: 2025,
    revised: 2026,
    domains: ["AI Architecture", "LLMs"],
    abstract:
      "We introduce the Structured Cognitive Loop (SCL), an agent architecture that separates cognition, control, action, and memory. The language model only proposes actions, a lightweight controller validates every proposal before execution, and memory is kept externally as a structured store of verified facts. Across 360 episodes in three controlled scenarios, SCL reached 86.3% task success versus 70.5–76.8% for prompt-based baselines using the same model and tools.",
    contributions: [
      "Modular loop: Cognition → Control → Action → Memory, with Retrieval at turn onset",
      "Controller-mediated execution with an auditable trace of proposals and approvals",
      "Controlled evaluation against ReAct and LangChain agents, with ablations of memory and control",
      "Extended revision: human-in-the-loop, Pool-Gated Retrieval, and the Horizon-Warrant-Commitment framework",
    ],
    link: "https://arxiv.org/abs/2510.05107",
  },
  {
    title: "Emergent Cognitive Convergence via Implementation",
    subtitle: "Structured Cognitive Loop Reflecting Four Theories of Mind",
    year: 2025,
    revised: 2026,
    domains: ["Cognitive Science", "AI Theory"],
    abstract:
      "A position paper reporting that a practical LLM agent architecture, Agentic Flow, structurally echoes four theories of mind — Kahneman's dual-system theory, Friston's predictive processing, Minsky's society of mind, and Clark's extended mind. The convergence emerged from implementation demands rather than deliberate synthesis, and is described as a partial reflection, not a unification of the theories.",
    contributions: [
      "Structural mapping of one five-module architecture onto four theories of mind",
      "PEACE: a descriptive meta-architecture of recurring design patterns, later formalized as SCL",
      "Controlled comparison with LLM-only agents: 95.8% vs 62.3% task success",
    ],
    link: "https://arxiv.org/abs/2507.16184",
  },
  {
    title: "Hallucination-Informed Intelligence",
    subtitle: "The Limits of Lossless Abstraction in Large Language Models",
    year: 2025,
    domains: ["LLM Analysis", "Epistemology"],
    abstract:
      "A theoretical follow-up asking whether hallucination could be eliminated if lossless abstraction were possible. Drawing on Kolmogorov complexity, Chaitin's incompleteness theorem, and Shannon's entropy limit, it argues that any sufficiently intelligent system must rely on lossy compression, so hallucination is a structural feature rather than a flaw to engineer away.",
    contributions: [
      "Extends the compression–generalization–hallucination triad with a lossless-abstraction counter-hypothesis",
      "Information-theoretic argument from Kolmogorov, Chaitin, and Shannon",
      "Proposes hallucination-aware architectures and epistemically humble interfaces",
    ],
    link: "https://osf.io/preprints/psyarxiv/x2c8p_v1",
  },
  {
    title: "Hallucination as Byproduct",
    subtitle: "An Inevitable Property of Intelligence in Large Language Models",
    year: 2025,
    domains: ["LLM Theory", "AI Design"],
    abstract:
      "We argue that hallucination is not an incidental flaw but an unavoidable structural property of generative intelligence: generalization rests on lossy compression, and reconstructive inference fills the gaps. Combining theoretical modeling with a synthesis of recent empirical work and parallels to human reconstructive memory, the paper concludes that attempts to eliminate hallucination may dismantle the mechanisms behind generalization.",
    contributions: [
      "Three hypotheses: inseparability, memorization–generalization trade-off, creativity–error duality",
      "Logical-theoretical argument grounded in information theory and cognitive science",
      "Implications for AI safety, sovereign AI policy, and high-stakes domains such as law, medicine, and national security",
    ],
    link: "https://osf.io/preprints/psyarxiv/q2c94_v1",
  },
]

const AUTHOR = "Myung Ho Kim"

const researchJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Research & Publications by Myung Ho Kim",
  description:
    "Preprints and open-access research on cognitive architecture, LLM hallucination, and the Structured Cognitive Loop.",
  url: "https://forhu.ai/research",
  author: { "@type": "Person", name: AUTHOR, affiliation: { "@type": "Organization", name: "JEI University" } },
  hasPart: publications.map((p) => ({
    "@type": "ScholarlyArticle",
    headline: p.title,
    name: `${p.title}: ${p.subtitle}`,
    abstract: p.abstract,
    datePublished: `${p.year}`,
    ...(p.revised ? { dateModified: `${p.revised}` } : {}),
    url: p.link,
    author: { "@type": "Person", name: AUTHOR, affiliation: { "@type": "Organization", name: "JEI University" } },
    keywords: p.domains.join(", "),
  })),
}

export default function ResearchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(researchJsonLd) }}
      />

      <main className="bg-background text-foreground min-h-screen pt-24">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Publications</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mt-4 mb-6">
              Research &<br />Publications
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light">
              Open-access preprints exploring cognitive architecture, AI epistemology, LLM hallucination theory, and the Structured Cognitive Loop.
            </p>
          </div>
        </section>

        {/* Research mission statement */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-7xl mx-auto border-b border-border/30">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { label: "About the Research", text: "These papers, authored by Myung Ho Kim of JEI University, sit at the intersection of cognitive science, philosophy of mind, and AI systems engineering. They are published openly as preprints." },
              { label: "Focus Areas", text: "The papers center on three problems: how LLM agents can be made accountable through structured architecture, why hallucination is argued to be a structural consequence of lossy compression, and how retrieval can register what is absent rather than paper over it." },
              { label: "Open Access", text: "All papers are published as open-access preprints — PhilSci Archive, arXiv, OSF PsyArXiv, and Preprints.org — to ensure findings are freely available to researchers, engineers, and policymakers worldwide." },
            ].map((item) => (
              <div key={item.label} className="group p-6 sm:p-8 rounded-2xl border border-white/8 bg-white/[0.09] backdrop-blur-sm shadow-lg shadow-black/30 hover:border-accent/30 transition-all duration-300">
                <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-3">{item.label}</h2>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Existing research section component */}
        <ResearchSection />

        {/* Full paper list with citations */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Citation Guide</span>
              <h2 className="text-4xl font-bold tracking-tighter mt-4 mb-4">How to Cite These Papers</h2>
              <p className="text-muted-foreground max-w-2xl">All publications are available through open-access repositories. Use the links below to access the official records for citation purposes.</p>
            </div>
            <div className="space-y-6">
              {publications.map((p) => (
                <div key={p.title} className="p-6 rounded-2xl border border-white/8 bg-white/[0.09] backdrop-blur-sm shadow-md shadow-black/30 flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {p.domains.map((d) => (
                        <span key={d} className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-border/50 text-muted-foreground">{d}</span>
                      ))}
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">{p.year}</span>
                    </div>
                    <p className="font-semibold text-foreground">{p.title}: {p.subtitle}</p>
                    <p className="text-sm text-muted-foreground mt-1">{AUTHOR}, {p.year}{p.revised ? ` (revised ${p.revised})` : ""}. Open-access preprint.</p>
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-4 py-2 rounded-lg border border-border text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
                  >
                    View Paper →
                  </a>
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
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Understand the architecture behind the research</h2>
                <p className="text-muted-foreground mt-2 text-sm">Learn how SCL puts these cognitive principles into practice.</p>
              </div>
              <div className="flex gap-4 shrink-0">
                <Link href="/scl" className="px-6 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition-colors">
                  Explore SCL
                </Link>
                <Link href="/" className="px-6 py-3 rounded-md border border-white/15 text-foreground hover:bg-white/[0.08] transition-colors">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
