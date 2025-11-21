"use client"
import { useRef, useState } from "react"

interface MinskyLayer {
  id: string
  label: string
  definition: string
  roleInCognition: string
}

interface SCLComponent {
  id: string
  label: string
  minkskyLayerId: string // Links to parent Minsky layer
  description: string
}

const minskyLayers: MinskyLayer[] = [
  {
    id: "reasoning",
    label: "Reasoning",
    definition: "Deliberative Layer / Problem-Solving Agents",
    roleInCognition:
      "A set of higher-level reasoning agents responsible for planning, analyzing situations, and generating solutions. These agents combine knowledge, strategies, and heuristics to perform deliberate, structured, step-by-step thinking.",
  },
  {
    id: "memory",
    label: "Memory",
    definition: "K-Lines / Remembering Agents",
    roleInCognition:
      "A network of memory-activation agents that re-activate past successful mental states. When triggered, these structures light up previously used patterns, enabling the system to recall context, reuse effective strategies, and learn from experience.",
  },
  {
    id: "control",
    label: "Control Module",
    definition: "Reflective Layer / B-Brain (Cognitive Regulator)",
    roleInCognition:
      "A supervisory layer composed of agents that monitor ongoing thought processes. This layer evaluates whether strategies are effective, detects errors, adjusts focus, and modulates cognitive flow—acting as the system's real-time regulator and critic.",
  },
  {
    id: "meta-control",
    label: "Meta-Control Module",
    definition: "Self-Reflective / Self-Conscious Layers",
    roleInCognition:
      "A higher tier of agents dedicated to modeling the system's own cognition. These layers track goals, assumptions, intentions, and reasoning paths. They support self-evaluation, explanation, and long-term coherence across tasks and contexts.",
  },
  {
    id: "runtime",
    label: "Runtime",
    definition: "Instinctive / Action Execution Agents",
    roleInCognition:
      "A fast-acting layer of low-level agents responsible for automatic responses and built-in action routines. Operating beneath conscious thought, these agents handle sensorimotor execution and provide the real-time operational base for higher layers.",
  },
]

const sclComponents: SCLComponent[] = [
  {
    id: "judgment-module",
    label: "Judgment Module (LLM)",
    minkskyLayerId: "reasoning",
    description:
      "Acts as the primary reasoning engine that defines problems, runs internal simulations, evaluates possibilities, and generates structured solutions.",
  },
  {
    id: "memory-module",
    label: "Memory Module",
    minkskyLayerId: "memory",
    description:
      "Retrieves past successful mental states (K-lines) and relevant knowledge. It reactivates patterns that help the system apply previous experience to current problems.",
  },
  {
    id: "control-module",
    label: "Control Module",
    minkskyLayerId: "control",
    description:
      "Monitors and regulates the thought processes of the Judgment Module. It detects errors, checks consistency, and redirects reasoning when necessary.",
  },
  {
    id: "metaprompt-regulatory-system",
    label: "Metaprompt Regulatory System",
    minkskyLayerId: "meta-control",
    description:
      "Oversees high-level goals, constraints, and the overall direction of decision-making. It ensures that actions and outputs align with identity, context, and long-term intentions.",
  },
  {
    id: "runtime-module",
    label: "Runtime Module",
    minkskyLayerId: "runtime",
    description:
      "Executes decisions, actions, or outputs in real time. It handles immediate responses to simple stimuli and manages low-level execution without requiring complex reasoning.",
  },
]

export default function SCLComparisonSection() {
  const [expandedLayer, setExpandedLayer] = useState<string | null>("judgment-module")
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
                            Marvin Minsky's Model
                          </p>
                          <h3 className="text-3xl font-bold text-accent">{minskyNode.label}</h3>
                        </div>
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
                      </div>
                    </div>

                    {/* Related SCL Components section */}
                    {relatedSCL.length > 0 && (
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
                        <p className="text-sm font-mono text-primary/60 uppercase tracking-wider mb-6">
                          Related SCL Components
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
                            SCL Component
                          </p>
                          <h3 className="text-3xl font-bold text-primary">{sclNode.label}</h3>
                        </div>
                      </div>

                      <p className="text-base text-foreground/70">{sclNode.description}</p>
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
                    y={pos.y - 10}
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
                      y={pos.y - 8}
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
