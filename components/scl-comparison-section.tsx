"use client"
import { useRef, useState } from "react"

interface MinskyLayer {
  id: string
  label: string
  definition: string
  roleInCognition: string
  examples: string[]
}

interface SCLComponent {
  id: string
  label: string
  minkskyLayerId: string // Links to parent Minsky layer
  description: string
  operationalization: string // How SCL implements this
}

const minskyLayers: MinskyLayer[] = [
  {
    id: "problem-solver",
    label: "Problem Solver",
    definition: "The cognitive mechanism for evaluating situations, analyzing problems, and making decisions",
    roleInCognition: "Evaluates context and determines appropriate responses through reasoning",
    examples: ["Identifying conflicts", "Weighing alternatives", "Making judgments about priorities"],
  },
  {
    id: "memory-systems",
    label: "Memory Systems",
    definition: "The architecture for storing, organizing, and retrieving experiential knowledge",
    roleInCognition: "Maintains historical context and learned patterns that inform future decisions",
    examples: ["Recall of past solutions", "Pattern recognition", "Knowledge consolidation"],
  },
  {
    id: "executive-control",
    label: "Executive Control",
    definition: "The meta-level mechanism that orchestrates cognitive resources and manages focus",
    roleInCognition: "Directs attention and coordinates lower-level cognitive processes",
    examples: ["Allocating processing resources", "Managing task switching", "Setting priorities"],
  },
  {
    id: "execution-layer",
    label: "Execution Layer",
    definition: "The output mechanism that translates cognitive decisions into observable behavior",
    roleInCognition: "Produces actions and interactions that manifest internal reasoning",
    examples: ["Generating responses", "Executing planned actions", "Producing outputs"],
  },
  {
    id: "self-reflection",
    label: "Self-Reflection",
    definition: "The meta-cognitive layer that monitors, evaluates, and adjusts its own processes",
    roleInCognition: "Governs higher-level goals, constraints, and strategic direction",
    examples: ["Monitoring performance", "Adjusting strategies", "Learning from outcomes"],
  },
]

const sclComponents: SCLComponent[] = [
  {
    id: "judgment",
    label: "Judgment",
    minkskyLayerId: "problem-solver",
    description: "Core reasoning and decision-making engine",
    operationalization:
      "Implements Problem Solver by encoding domain knowledge, reasoning patterns, and decision heuristics into a structured prompt-based system that evaluates context and generates justified decisions",
  },
  {
    id: "memory",
    label: "Memory",
    minkskyLayerId: "memory-systems",
    description: "Maintains historical context and knowledge",
    operationalization:
      "Implements Memory Systems by recording interactions, outcomes, and learned patterns in queryable form, enabling retrieval of relevant context for informed decision-making",
  },
  {
    id: "control",
    label: "Control",
    minkskyLayerId: "executive-control",
    description: "Orchestrates processes and resource allocation",
    operationalization:
      "Implements Executive Control by managing the flow between components, determining which subsystem should be active, and allocating computational attention based on task requirements",
  },
  {
    id: "runtime",
    label: "Runtime",
    minkskyLayerId: "execution-layer",
    description: "Produces observable behavior and interactions",
    operationalization:
      "Implements Execution Layer by translating internal reasoning into structured outputs, API calls, and user-facing responses that manifest the system's cognitive decisions",
  },
  {
    id: "metaprompt",
    label: "Metaprompt",
    minkskyLayerId: "self-reflection",
    description: "Provides direction, constraints, and strategies",
    operationalization:
      "Implements Self-Reflection by defining system goals, safety constraints, ethical guidelines, and strategic priorities that govern all lower-level cognitive processes",
  },
]

export default function SCLComparisonSection() {
  const [expandedLayer, setExpandedLayer] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const getMinskyPosition = (index: number) => {
    const centerX = 50
    const centerY = 50
    const radius = 20 // Inner circle for Minsky
    const angle = (index / minskyLayers.length) * Math.PI * 2 - Math.PI / 2
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    }
  }

  const getSCLPosition = (minskyIndex: number) => {
    const centerX = 50
    const centerY = 50
    const minskyPos = getMinskyPosition(minskyIndex)
    const outerRadius = 35 // Outer circle for SCL
    const minskyAngle = Math.atan2(minskyPos.y - centerY, minskyPos.x - centerX)

    return {
      x: centerX + outerRadius * Math.cos(minskyAngle),
      y: centerY + outerRadius * Math.sin(minskyAngle),
    }
  }

  const getNodeFocusState = (nodeId: string) => {
    if (!expandedLayer && !hoveredId) return "default"

    const expandedLayer_ = expandedLayer || hoveredId
    if (nodeId === expandedLayer_) return "active"

    const minskyNode = minskyLayers.find((n) => n.id === nodeId)
    const sclNode = sclComponents.find((n) => n.id === nodeId)
    const expandedMinsky = minskyLayers.find((n) => n.id === expandedLayer_)
    const expandedSCL = sclComponents.find((n) => n.id === expandedLayer_)

    if (expandedMinsky && sclNode && sclNode.minkskyLayerId === expandedMinsky.id) return "related"
    if (expandedSCL && minskyNode && expandedSCL.minkskyLayerId === minskyNode.id) return "related"

    return "faded"
  }

  const getRelatedSCLComponents = (minskyId: string) => {
    return sclComponents.filter((c) => c.minkskyLayerId === minskyId)
  }

  const getParentMinskyLayer = (sclId: string) => {
    const sclNode = sclComponents.find((c) => c.id === sclId)
    if (!sclNode) return null
    return minskyLayers.find((m) => m.id === sclNode.minkskyLayerId)
  }

  return (
    <section ref={containerRef} className="relative py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Details Panel - Left */}
        <div className="space-y-8">
          {expandedLayer ? (
            (() => {
              const minskyNode = minskyLayers.find((n) => n.id === expandedLayer)
              const sclNode = sclComponents.find((n) => n.id === expandedLayer)

              if (minskyNode) {
                const relatedSCL = getRelatedSCLComponents(minskyNode.id)

                return (
                  <div className="space-y-8">
                    {/* Minsky theory section */}
                    <div className="bg-accent/5 border border-accent/30 rounded-lg p-8 hover:border-accent/50 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-sm font-mono text-accent/60 uppercase tracking-wide mb-2">
                            Minsky's Framework
                          </p>
                          <h3 className="text-3xl font-bold text-accent">{minskyNode.label}</h3>
                        </div>
                        <button
                          onClick={() => setExpandedLayer(null)}
                          className="text-foreground/40 hover:text-foreground transition-colors text-xl"
                          aria-label="Close details"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <p className="text-sm font-mono text-accent/60 uppercase tracking-wide mb-2">Definition</p>
                          <p className="text-base text-foreground">{minskyNode.definition}</p>
                        </div>

                        <div>
                          <p className="text-sm font-mono text-accent/60 uppercase tracking-wide mb-2">
                            Role in Cognition
                          </p>
                          <p className="text-base text-foreground">{minskyNode.roleInCognition}</p>
                        </div>

                        <div>
                          <p className="text-sm font-mono text-accent/60 uppercase tracking-wide mb-3">
                            Academic Examples
                          </p>
                          <ul className="space-y-2">
                            {minskyNode.examples.map((example, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-foreground/70">
                                <span className="text-accent mt-1">•</span>
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* SCL operationalization section */}
                    {relatedSCL.length > 0 && (
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
                        <p className="text-sm font-mono text-primary/60 uppercase tracking-wider mb-6">
                          How SCL Operationalizes This
                        </p>
                        <div className="space-y-4">
                          {relatedSCL.map((scl, idx) => (
                            <div
                              key={idx}
                              className="p-4 rounded-lg bg-foreground/2 hover:bg-foreground/5 transition-colors cursor-pointer group"
                              onClick={() => setExpandedLayer(scl.id)}
                            >
                              <p className="text-sm font-semibold text-primary group-hover:text-accent transition-colors mb-2">
                                {scl.label}
                              </p>
                              <p className="text-xs text-foreground/60">{scl.operationalization}</p>
                              <p className="text-xs text-primary/60 mt-2 group-hover:text-primary transition-colors">
                                Click to explore →
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              if (sclNode) {
                const parentMinsky = getParentMinskyLayer(sclNode.id)

                return (
                  <div className="space-y-8">
                    {/* SCL component section */}
                    <div className="bg-primary/5 border border-primary/30 rounded-lg p-8 hover:border-primary/50 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-sm font-mono text-primary/60 uppercase tracking-wide mb-2">
                            SCL Component (Applied Engineering)
                          </p>
                          <h3 className="text-3xl font-bold text-primary">{sclNode.label}</h3>
                        </div>
                        <button
                          onClick={() => setExpandedLayer(null)}
                          className="text-foreground/40 hover:text-foreground transition-colors text-xl"
                          aria-label="Close details"
                        >
                          ✕
                        </button>
                      </div>

                      <p className="text-base text-foreground/70 mb-6">{sclNode.description}</p>

                      <div>
                        <p className="text-sm font-mono text-primary/60 uppercase tracking-wide mb-2">
                          Implementation Details
                        </p>
                        <p className="text-base text-foreground">{sclNode.operationalization}</p>
                      </div>
                    </div>

                    {/* Parent Minsky layer context */}
                    {parentMinsky && (
                      <div className="bg-accent/5 border border-accent/20 rounded-lg p-8">
                        <p className="text-sm font-mono text-accent/60 uppercase tracking-wider mb-4">
                          Built on Minsky Theory
                        </p>
                        <div
                          className="p-4 rounded-lg bg-foreground/2 hover:bg-foreground/5 transition-colors cursor-pointer group"
                          onClick={() => setExpandedLayer(parentMinsky.id)}
                        >
                          <p className="text-sm font-semibold text-accent group-hover:text-accent transition-colors mb-2">
                            {parentMinsky.label}
                          </p>
                          <p className="text-xs text-foreground/60">{parentMinsky.definition}</p>
                          <p className="text-xs text-accent/60 mt-2 group-hover:text-accent transition-colors">
                            Click to explore theory →
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              return null
            })()
          ) : (
            <p className="text-foreground/50">Click a node on the map to see details here.</p>
          )}
        </div>

        {/* Interactive Map - Right */}
        <div className="relative bg-gradient-to-br from-background to-secondary/5 rounded-2xl border border-accent/20 p-8 min-h-[700px] flex items-center justify-center overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            style={{ pointerEvents: "auto" }}
          >
            <defs>
              <style>{`
                @keyframes node-pulse {
                  0%, 100% { r: 5.5px; }
                  50% { r: 7px; }
                }
                @keyframes line-glow {
                  0%, 100% { filter: drop-shadow(0 0 0px rgba(255, 106, 45, 0.5)); }
                  50% { filter: drop-shadow(0 0 6px rgba(255, 106, 45, 0.8)); }
                }
              `}</style>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="rgba(255, 106, 45, 0.5)" />
              </marker>
            </defs>

            {/* Connection lines from Minsky to SCL */}
            {minskyLayers.map((minskyNode, minskyIdx) => {
              const minskyPos = getMinskyPosition(minskyIdx)
              const relatedSCL = getRelatedSCLComponents(minskyNode.id)

              return relatedSCL.map((sclNode) => {
                const sclPos = getSCLPosition(minskyIdx)
                const isActive =
                  expandedLayer === minskyNode.id ||
                  expandedLayer === sclNode.id ||
                  hoveredId === minskyNode.id ||
                  hoveredId === sclNode.id

                return (
                  <line
                    key={`conn-${minskyNode.id}-${sclNode.id}`}
                    x1={minskyPos.x}
                    y1={minskyPos.y}
                    x2={sclPos.x}
                    y2={sclPos.y}
                    stroke={isActive ? "rgba(255, 106, 45, 0.6)" : "rgba(255, 106, 45, 0.1)"}
                    strokeWidth={isActive ? "1.5" : "0.8"}
                    opacity={(expandedLayer || hoveredId) && !isActive ? 0.2 : 1}
                    markerEnd="url(#arrowhead)"
                    className="transition-all duration-300"
                    style={isActive ? { animation: "line-glow 2s ease-in-out infinite" } : {}}
                  />
                )
              })
            })}

            {/* Minsky and SCL nodes */}
            {minskyLayers.map((node, idx) => {
              const pos = getMinskyPosition(idx)
              const focusState = getNodeFocusState(node.id)
              const isActive = focusState === "active"
              const isRelated = focusState === "related"
              const isFaded = focusState === "faded"

              let circleRadius = 5.5
              let fillOpacity = 0.3
              let strokeOpacity = 0.6

              if (isActive) {
                circleRadius = 7.5
                fillOpacity = 1
                strokeOpacity = 1
              } else if (isRelated) {
                circleRadius = 6.5
                fillOpacity = 0.7
                strokeOpacity = 0.8
              } else if (isFaded) {
                fillOpacity = 0.1
                strokeOpacity = 0.2
              }

              return (
                <g key={`minsky-${node.id}`}>
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={circleRadius}
                    fill="var(--accent)"
                    fillOpacity={fillOpacity}
                    stroke="var(--accent)"
                    strokeOpacity={strokeOpacity}
                    strokeWidth="1.2"
                    className="cursor-pointer transition-all duration-300"
                    onClick={() => setExpandedLayer(expandedLayer === node.id ? null : node.id)}
                    onMouseEnter={() => {
                      if (!expandedLayer) setHoveredId(node.id)
                    }}
                    onMouseLeave={() => setHoveredId(null)}
                    style={{
                      transition: "all 0.3s ease",
                      animation: isActive ? "node-pulse 2s ease-in-out infinite" : "none",
                    }}
                  />
                  <text
                    x={pos.x}
                    y={pos.y + 12}
                    textAnchor="middle"
                    className="pointer-events-none select-none"
                    style={{
                      fontSize: isActive ? "2.8px" : "2.2px",
                      fontWeight: isActive ? "700" : "600",
                      fill: "var(--foreground)",
                      opacity: isFaded ? 0.3 : 1,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {node.label}
                  </text>
                </g>
              )
            })}

            {minskyLayers.map((minskyNode, minskyIdx) => {
              const relatedSCL = getRelatedSCLComponents(minskyNode.id)
              return relatedSCL.map((sclNode) => {
                const pos = getSCLPosition(minskyIdx)
                const focusState = getNodeFocusState(sclNode.id)
                const isActive = focusState === "active"
                const isRelated = focusState === "related"
                const isFaded = focusState === "faded"

                let circleRadius = 4.5
                let fillOpacity = 0.2
                let strokeOpacity = 0.4

                if (isActive) {
                  circleRadius = 6
                  fillOpacity = 0.9
                  strokeOpacity = 0.9
                } else if (isRelated) {
                  circleRadius = 5.2
                  fillOpacity = 0.5
                  strokeOpacity = 0.6
                } else if (isFaded) {
                  fillOpacity = 0.08
                  strokeOpacity = 0.15
                }

                return (
                  <g key={`scl-${sclNode.id}`}>
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={circleRadius}
                      fill="var(--primary)"
                      fillOpacity={fillOpacity}
                      stroke="var(--primary)"
                      strokeOpacity={strokeOpacity}
                      strokeWidth="1"
                      className="cursor-pointer transition-all duration-300"
                      onClick={() => setExpandedLayer(expandedLayer === sclNode.id ? null : sclNode.id)}
                      onMouseEnter={() => {
                        if (!expandedLayer) setHoveredId(sclNode.id)
                      }}
                      onMouseLeave={() => setHoveredId(null)}
                      style={{
                        transition: "all 0.3s ease",
                        animation: isActive ? "node-pulse 2s ease-in-out infinite" : "none",
                      }}
                    />
                    <text
                      x={pos.x}
                      y={pos.y + 10}
                      textAnchor="middle"
                      className="pointer-events-none select-none"
                      style={{
                        fontSize: isActive ? "2.4px" : "2px",
                        fontWeight: isActive ? "700" : "500",
                        fill: "var(--primary)",
                        opacity: isFaded ? 0.3 : 1,
                        transition: "all 0.3s ease",
                      }}
                    >
                      {sclNode.label}
                    </text>
                  </g>
                )
              })
            })}
          </svg>
        </div>
      </div>
    </section>
  )
}
