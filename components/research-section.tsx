"use client"

import { useState } from "react"
import { ChevronDown, ExternalLink } from "lucide-react"
import { publications } from "@/lib/publications"
import { NetworkGraphDiagram, LayeredModelDiagram, SchemaDiagram, NeuralDiagram, TradeoffDiagram, CrossDomainDiagram, GatedPipelineDiagram, ThermoPulseDiagram } from "./research-diagrams"

export default function ResearchSection() {
  const [expandedPaper, setExpandedPaper] = useState<string | null>(null)
  const [clickedId, setClickedId] = useState<string | null>(null)

  const getDiagram = (diagramType: string) => {
    switch (diagramType) {
      case "network":     return <NetworkGraphDiagram />
      case "layered":     return <LayeredModelDiagram />
      case "schema":      return <SchemaDiagram />
      case "neural":      return <NeuralDiagram />
      case "tradeoff":    return <TradeoffDiagram />
      case "crossdomain": return <CrossDomainDiagram />
      case "gated":       return <GatedPipelineDiagram />
      case "thermo":      return <ThermoPulseDiagram />
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
                        {"revised" in pub && pub.revised ? ` · Revised ${pub.revised}` : ""}
                      </span>
                      {"isNew" in pub && pub.isNew && (
                        <span className="px-2 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-[10px] font-bold uppercase tracking-widest">
                          Latest
                        </span>
                      )}
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
