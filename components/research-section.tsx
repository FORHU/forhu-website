"use client"

import { useState } from "react"
import { ChevronDown, ExternalLink } from "lucide-react"
import { NetworkGraphDiagram, LayeredModelDiagram, SchemaDiagram, NeuralDiagram, TradeoffDiagram, CrossDomainDiagram, GatedPipelineDiagram } from "./research-diagrams"

export default function ResearchSection() {
  const [expandedPaper, setExpandedPaper] = useState<string | null>(null)
  const [clickedId, setClickedId] = useState<string | null>(null)

  const publications = [
    {
      id: "pool-gated-retrieval",
      title: "Pool-Gated Retrieval",
      subtitle: "Beyond Retrieval-Augmented Generation Toward Accountable Evidential Admission",
      year: 2026,
      // authors: "Myung Ho Kim",
      domains: ["RAG Architecture", "LLM Agents"],
      // doi: "10.20944/preprints202606.0414.v1",
      abstract:
        "We introduce Pool-Gated Retrieval (PGR), an architecture that reconceives retrieval-augmented generation as a three-stage epistemic process — Horizon, Warrant, and Commitment. By treating absence as a first-class fact, PGR registers confirmed absences as structural facts and propagates them to the answer, addressing absence hallucination by structural design, and every answer carries an auditable provenance record. Demonstrated on a single synthetic partial-coverage scenario against a naive RAG baseline.",
      keyContributions: [
        "Three-stage Horizon-Warrant-Commitment retrieval architecture",
        "Structural registration of Knowledge Gaps to prevent absence hallucination",
        "Auditable provenance record for every committed fact",
        "Taxonomy of eight RAG failure modes, with an open Python reference implementation",
      ],
      diagram: "gated",
      link: "https://www.preprints.org/manuscript/202606.0414",
    },
    {
      id: "executable-epistemology-1",
      title: "Executable Epistemology",
      subtitle: "The Structured Cognitive Loop as an Architecture of Intentional Understanding",
      year: 2025,
      // authors: "Forhu et al.",
      domains: ["Philosophy", "Cognitive Science"],
      // archiveId: "26865",
      // doi: "10.31234/osf.io/preprints/psyarxiv",
      abstract:
        "Large language models exhibit intelligence without genuine epistemic understanding, revealing a missing epistemic architecture. This paper introduces the Structured Cognitive Loop (SCL) as an executable epistemological framework, asking under what conditions cognition emerges rather than what intelligence is. Intelligence is reframed as a performed process — a continuous loop of judgment, memory, control, action, and regulation.",
      keyContributions: [
        "\"Executable epistemology\": philosophy operationalized as structural experiment",
        "Five structural conditions for understanding: evidential grounding, memorial persistence, normative control, environmental coupling, recursive self-reference",
        "Intelligence redefined as the capacity to reconstruct one's own epistemic state",
      ],
      diagram: "schema",
      link: "https://philsci-archive.pitt.edu/26865/",
    },
    {
      id: "structured-cognitive",
      title: "Structured Cognitive Loop",
      subtitle: "Behavioral Intelligence in Large Language Model Agents — Extended Revision: From Behavioral Architecture to Epistemic Accountability",
      year: 2025,
      revised: 2026,
      // authors: "Forhu, Smith, Johnson",
      domains: ["AI Architecture", "LLMs"],
      // archiveId: "2510.05107",
      // doi: "arXiv:2510.05107",
      abstract:
        "We introduce the Structured Cognitive Loop (SCL), an agent architecture that separates cognition, control, action, and memory. The language model only proposes actions, a lightweight controller validates every proposal before execution, and memory is kept externally as a structured store of verified facts. Across 360 episodes in three controlled scenarios, SCL reached 86.3% task success versus 70.5–76.8% for prompt-based baselines using the same model and tools.",
      keyContributions: [
        "Modular loop: Cognition → Control → Action → Memory, with Retrieval at turn onset",
        "Controller-mediated execution with an auditable trace of proposals and approvals",
        "Controlled evaluation against ReAct and LangChain agents, with ablations of memory and control",
        "Extended revision: human-in-the-loop, Pool-Gated Retrieval, and the Horizon-Warrant-Commitment framework",
      ],
      diagram: "layered",
      link: "https://arxiv.org/abs/2510.05107",
    },
    {
      id: "emergent-convergence",
      title: "Emergent Cognitive Convergence via Implementation",
      subtitle: "Structured Cognitive Loop Reflecting Four Theories of Mind",
      year: 2025,
      revised: 2026,
      // authors: "Forhu, Lee, Patel",
      domains: ["Cognitive Science", "AI Theory"],
      // archiveId: "2507.16184",
      // doi: "arXiv:2507.16184",
      abstract:
        "A position paper reporting that a practical LLM agent architecture, Agentic Flow, structurally echoes four theories of mind — Kahneman's dual-system theory, Friston's predictive processing, Minsky's society of mind, and Clark's extended mind. The convergence emerged from implementation demands rather than deliberate synthesis, and is described as a partial reflection, not a unification of the theories.",
      keyContributions: [
        "Structural mapping of one five-module architecture onto four theories of mind",
        "PEACE: a descriptive meta-architecture of recurring design patterns, later formalized as SCL",
        "Controlled comparison with LLM-only agents: 95.8% vs 62.3% task success",
      ],
      diagram: "network",
      link: "https://arxiv.org/abs/2507.16184",
    },
    {
      id: "hallucination-informed",
      title: "Hallucination-Informed Intelligence",
      subtitle: "The Limits of Lossless Abstraction in Large Language Models",
      year: 2025,
      // authors: "Forhu, Chen, Martinez",
      domains: ["LLM Analysis", "Epistemology"],
      // archiveId: "x2c8p_v1",
      // doi: "osf.io/preprints/psyarxiv/x2c8p_v1",
      abstract:
        "A theoretical follow-up asking whether hallucination could be eliminated if lossless abstraction were possible. Drawing on Kolmogorov complexity, Chaitin's incompleteness theorem, and Shannon's entropy limit, it argues that any sufficiently intelligent system must rely on lossy compression, so hallucination is a structural feature rather than a flaw to engineer away.",
      keyContributions: [
        "Extends the compression–generalization–hallucination triad with a lossless-abstraction counter-hypothesis",
        "Information-theoretic argument from Kolmogorov, Chaitin, and Shannon",
        "Proposes hallucination-aware architectures and epistemically humble interfaces",
      ],
      diagram: "neural",
      link: "https://osf.io/preprints/psyarxiv/x2c8p_v1",
    },
    {
      id: "hallucination-byproduct",
      title: "Hallucination as Byproduct",
      subtitle: "An Inevitable Property of Intelligence in Large Language Models",
      year: 2025,
      // authors: "Forhu, Davis, Gupta",
      domains: ["LLM Theory", "AI Design"],
      // archiveId: "q2c94_v1",
      // doi: "osf.io/preprints/psyarxiv/q2c94_v1",
      abstract:
        "We argue that hallucination is not an incidental flaw but an unavoidable structural property of generative intelligence: generalization rests on lossy compression, and reconstructive inference fills the gaps. Combining theoretical modeling with a synthesis of recent empirical work and parallels to human reconstructive memory, the paper concludes that attempts to eliminate hallucination may dismantle the mechanisms behind generalization.",
      keyContributions: [
        "Three hypotheses: inseparability, memorization–generalization trade-off, creativity–error duality",
        "Logical-theoretical argument grounded in information theory and cognitive science",
        "Implications for AI safety, sovereign AI policy, and high-stakes domains such as law, medicine, and national security",
      ],
      diagram: "tradeoff",
      link: "https://osf.io/preprints/psyarxiv/q2c94_v1",
    },
  ]

  const getDiagram = (diagramType: string) => {
    switch (diagramType) {
      case "network":     return <NetworkGraphDiagram />
      case "layered":     return <LayeredModelDiagram />
      case "schema":      return <SchemaDiagram />
      case "neural":      return <NeuralDiagram />
      case "tradeoff":    return <TradeoffDiagram />
      case "crossdomain": return <CrossDomainDiagram />
      case "gated":       return <GatedPipelineDiagram />
      default:            return <NetworkGraphDiagram />
    }
  }

  return (
    <section id="research" className="relative py-16 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-12 sm:mb-24 text-left">
          <div className="mb-4 sm:mb-6 inline-block">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-accent">
              Featured Research
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 sm:mb-8 tracking-tighter leading-tight max-w-5xl">
            Recent Publications in <br className="hidden md:block" />
            <span className="text-muted-foreground">Cognitive Architecture</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Preprints and open-access research by Myung Ho Kim exploring cognitive systems, artificial intelligence architecture, and
            the intersection of philosophy and computational theory.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {publications.map((pub) => (
            <div
              key={pub.id}
              onClick={() => {
                setClickedId(pub.id)
                setTimeout(() => setClickedId(null), 600)
              }}
              className={`group relative border rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer shadow-lg ${clickedId === pub.id
                ? "border-accent shadow-accent/25 scale-[1.015] shadow-xl"
                : "border-white/8 bg-white/[0.07] shadow-black/40 hover:bg-white/[0.12] hover:border-accent/35 hover:shadow-accent/15 hover:shadow-xl hover:-translate-y-1"
                }`}
            >
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 p-6 sm:p-8 md:p-10">
                {/* Diagram Section */}
                <div className="flex-shrink-0 w-full lg:w-1/3 min-h-[240px] sm:min-h-[280px] lg:h-auto bg-white/[0.09] border border-white/8 rounded-xl p-4 sm:p-6 flex items-center justify-center group-hover:border-accent/20 transition-colors duration-500">
                  <div className="w-full h-full text-muted-foreground/80 group-hover:text-accent/80 transition-colors duration-500">
                    {getDiagram(pub.diagram)}
                  </div>
                </div>

                {/* Content section */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="mb-3 sm:mb-4 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                      <span className="font-bold text-accent">
                        {pub.year}
                        {"revised" in pub && pub.revised ? ` · rev. ${pub.revised}` : ""}
                      </span>
                      <span className="text-muted-foreground/40">•</span>
                      {/* <span className="text-muted-foreground font-medium">{pub.authors}</span> */}
                    </div>

                    {/* Title and subtitle */}
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3 leading-tight group-hover:text-accent transition-colors duration-300 tracking-tight">
                        {pub.title}
                      </h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{pub.subtitle}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8">
                      {pub.domains.map((domain) => (
                        <span
                          key={domain}
                          className="inline-block text-[10px] sm:text-xs font-medium px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-border/50 bg-muted/10 text-muted-foreground group-hover:border-accent/20 group-hover:text-foreground transition-colors"
                        >
                          {domain}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-auto pt-6 border-t border-border/30">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background font-semibold hover:bg-accent hover:text-white transition-all duration-300 text-sm sm:text-base"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Publication
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setExpandedPaper(expandedPaper === pub.id ? null : pub.id)
                      }}
                      className="inline-flex justify-center items-center gap-2 px-5 py-2.5 rounded-lg border border-border/50 text-foreground font-medium hover:bg-muted/20 transition-colors text-sm sm:text-base"
                    >
                      <span>{expandedPaper === pub.id ? "Hide Details" : "View Abstract"}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${expandedPaper === pub.id ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedPaper === pub.id ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
                aria-hidden={expandedPaper !== pub.id}
              >
                <div className="border-t border-border/50 bg-muted/5 px-6 sm:px-8 md:px-10 py-6 sm:py-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <p className="font-bold text-foreground mb-3 text-xs sm:text-sm uppercase tracking-wider">Abstract</p>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{pub.abstract}</p>
                    </div>
                    <div>
                      <p className="font-bold text-foreground mb-3 text-xs sm:text-sm uppercase tracking-wider">
                        Key Contributions
                      </p>
                      <ul className="space-y-3">
                        {pub.keyContributions.map((contrib, idx) => (
                          <li key={idx} className="text-sm sm:text-base text-muted-foreground leading-relaxed flex gap-3">
                            <span className="text-accent flex-shrink-0 mt-1.5">•</span>
                            <span>{contrib}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
