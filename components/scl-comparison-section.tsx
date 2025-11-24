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
    label: "Control",
    definition: "Reflective Layer / B-Brain (Cognitive Regulator)",
    roleInCognition:
      "A supervisory layer composed of agents that monitor ongoing thought processes. This layer evaluates whether strategies are effective, detects errors, adjusts focus, and modulates cognitive flow—acting as the system's real-time regulator and critic.",
  },
  {
    id: "meta-control",
    label: "Meta-Control",
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
  const [selectedMinskyId, setSelectedMinskyId] = useState<string | null>("reasoning")
  const [selectedSclId, setSelectedSclId] = useState<string | null>("judgment-module")
  const [selectionSource, setSelectionSource] = useState<"minsky" | "scl" | null>("minsky")
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

  // Custom label positioning for Minsky circles (brown)
  const getMinskyLabelOffset = (index: number) => {
    // index 0: Reasoning (top) - below
    // index 1: Memory (right) - below
    // index 2: Control (bottom-right) - above
    // index 3: Meta-control (bottom-left) - below
    // index 4: Runtime (left) - below
    const offsets = [
      { x: 0, y: 11 },   // 0: Reasoning - below
      { x: 0, y: 10 },   // 1: Memory - below
      { x: -3, y: -8 },  // 2: Control - above
      { x: 5, y: -8 },   // 3: Meta-control - below
      { x: 0, y: 10 },   // 4: Runtime - below
    ]
    return offsets[index] || { x: 0, y: 12 }
  }

  // Custom label positioning for SCL circles (orange)
  const getSCLLabelOffset = (sclId: string) => {
    // judgment-module: above
    // memory-module: right side
    // control-module: below-right
    // metaprompt-regulatory-system: above-left
    // runtime-module: left side
    const offsets: Record<string, { x: number; y: number }> = {
      "judgment-module": { x: 0, y: -8 },
      "memory-module": { x: 0, y: -8 },
      "control-module": { x: 6, y: 10 },
      "metaprompt-regulatory-system": { x: -7, y: 9 },
      "runtime-module": { x: 0, y: -8 },
    }
    return offsets[sclId] || { x: 0, y: 10 }
  }

  const getNodeFocusState = (nodeId: string, type: "minsky" | "scl") => {
    // If nothing is selected or hovered, default state
    if (!selectedMinskyId && !selectedSclId && !hoveredId) return "default"

    // Check if this specific node is selected
    if (type === "minsky" && selectedMinskyId === nodeId) return "active"
    if (type === "scl" && selectedSclId === nodeId) return "active"

    // Check if hovered
    if (hoveredId === nodeId) return "active"

    // Check relationships
    const minskyNode = minskyLayers.find((n) => n.id === nodeId)
    const sclNode = sclComponents.find((n) => n.id === nodeId)

    // If a Minsky node is selected, highlight its related SCL node
    if (selectedMinskyId) {
      const relatedSCL = sclComponents.filter(s => s.minkskyLayerId === selectedMinskyId)
      if (type === "scl" && relatedSCL.some(s => s.id === nodeId)) return "related"
    }

    // If an SCL node is selected, highlight its parent Minsky node
    if (selectedSclId) {
      const selectedSCL = sclComponents.find(s => s.id === selectedSclId)
      if (selectedSCL && type === "minsky" && selectedSCL.minkskyLayerId === nodeId) return "related"
    }

    return "faded"
  }

  const getRelatedSCLComponents = (minskyId: string) => {
    return sclComponents.filter((c) => c.minkskyLayerId === minskyId)
  }

  return (
    <section ref={containerRef} className="relative py-12 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Details Panel - Left (Top on mobile) */}
        <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
          {/* Minsky Details Panel (Orange Selection) */}
          {selectedMinskyId && (() => {
            const minskyNode = minskyLayers.find((n) => n.id === selectedMinskyId)
            if (!minskyNode) return null

            // Glow logic: Glow only if explicitly clicked (selectionSource === 'minsky')
            const isGlowActive = selectionSource === "minsky"
            const containerClasses = isGlowActive
              ? "bg-accent/20 border-accent text-accent shadow-[0_0_20px_rgba(200,90,58,0.3)] transform scale-105"
              : "bg-accent/5 border-accent/30 text-foreground/80"

            return (
              <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
                <div className={`border rounded-lg p-6 sm:p-8 transition-all duration-300 ${containerClasses}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className={`text-sm sm:text-base font-mono uppercase tracking-wide mb-2 ${isGlowActive ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" : "text-accent/60"}`}>
                        Marvin Minsky's Model
                      </p>
                      <h3 className={`text-2xl sm:text-3xl font-bold ${isGlowActive ? "text-accent drop-shadow-[0_0_10px_rgba(255,106,45,0.3)]" : "text-accent"}`}>
                        {minskyNode.label}
                      </h3>
                    </div>
                  </div>

                  <div className={`space-y-4 sm:space-y-6 ${isGlowActive ? "text-accent" : ""}`}>
                    <div>
                      <p className={`text-xs sm:text-sm font-mono uppercase tracking-wide mb-2 ${isGlowActive ? "text-accent/80" : "text-accent/60"}`}>Definition</p>
                      <p className="text-sm sm:text-base">{minskyNode.definition}</p>
                    </div>

                    <div>
                      <p className={`text-xs sm:text-sm font-mono uppercase tracking-wide mb-2 ${isGlowActive ? "text-accent/80" : "text-accent/60"}`}>
                        Role in Cognition
                      </p>
                      <p className="text-sm sm:text-base">{minskyNode.roleInCognition}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })()}

          {/* SCL Details Panel (Brown Selection) */}
          {selectedSclId && (() => {
            const sclNode = sclComponents.find((n) => n.id === selectedSclId)
            if (!sclNode) return null

            // Glow logic: Glow only if explicitly clicked (selectionSource === 'scl')
            const isGlowActive = selectionSource === "scl"
            const containerClasses = isGlowActive
              ? "bg-primary/20 border-primary text-primary shadow-[0_0_20px_rgba(139,90,60,0.3)] transform scale-105"
              : "bg-primary/5 border-primary/30 text-foreground/80"

            return (
              <div className="space-y-6 sm:space-y-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className={`border rounded-lg p-6 sm:p-8 transition-all duration-300 ${containerClasses}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className={`text-sm sm:text-base font-mono uppercase tracking-wide mb-2 ${isGlowActive ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" : "text-primary/60"}`}>
                        SCL Component Model
                      </p>
                      <h3 className={`text-2xl sm:text-3xl font-bold ${isGlowActive ? "text-primary drop-shadow-[0_0_10px_rgba(139,90,60,0.3)]" : "text-primary"}`}>
                        {sclNode.label}
                      </h3>
                    </div>
                  </div>

                  <p className={`text-sm sm:text-base ${isGlowActive ? "text-primary/90" : "text-foreground/70"}`}>{sclNode.description}</p>
                </div>
              </div>
            )
          })()}

          {!selectedMinskyId && !selectedSclId && (
            <p className="text-foreground/50 text-center lg:text-left">Click a node on the map to see details here.</p>
          )}
        </div>

        {/* Interactive Map - Right (Bottom on mobile) */}
        <div className="relative order-1 lg:order-2 bg-gradient-to-br from-background to-secondary/5 rounded-2xl border border-accent/20 p-4 sm:p-8 min-h-[400px] sm:min-h-[500px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
          <div className="w-full h-full overflow-x-auto overflow-y-hidden">
            <svg
              className="w-full h-full min-w-[300px] sm:min-w-[400px]"
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

                  // Line is active if either end is selected or hovered
                  const isActive =
                    selectedMinskyId === minskyNode.id ||
                    selectedSclId === sclNode.id ||
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
                      opacity={(selectedMinskyId || selectedSclId || hoveredId) && !isActive ? 0.2 : 1}
                      markerEnd="url(#arrowhead)"
                      className="transition-all duration-300"
                      style={isActive ? { animation: "line-glow 2s ease-in-out infinite" } : {}}
                    />
                  )
                })
              })}

              {/* Minsky nodes (Inner Circle) */}
              {minskyLayers.map((node, idx) => {
                const pos = getMinskyPosition(idx)
                const focusState = getNodeFocusState(node.id, "minsky")
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
                      onClick={() => {
                        // Paired selection: Select Minsky, show SCL pair, highlight Minsky
                        setSelectedMinskyId(node.id)
                        const relatedSCL = getRelatedSCLComponents(node.id)[0]
                        if (relatedSCL) setSelectedSclId(relatedSCL.id)
                        setSelectionSource("minsky")
                      }}
                      onMouseEnter={() => setHoveredId(node.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      style={{
                        transition: "all 0.3s ease",
                        animation: isActive ? "node-pulse 2s ease-in-out infinite" : "none",
                      }}
                    />
                    {(() => {
                      const offset = getMinskyLabelOffset(idx)
                      const isMultiLine = node.label === "Meta-Control Module"

                      if (isMultiLine) {
                        return (
                          <text
                            x={pos.x + offset.x}
                            y={pos.y + offset.y}
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
                            <tspan x={pos.x + offset.x} dy="0">Meta-Control</tspan>
                            <tspan x={pos.x + offset.x} dy="3">Module</tspan>
                          </text>
                        )
                      }

                      return (
                        <text
                          x={pos.x + offset.x}
                          y={pos.y + offset.y}
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
                      )
                    })()}
                  </g>
                )
              })}

              {/* SCL nodes (Outer Circle) */}
              {minskyLayers.map((minskyNode, minskyIdx) => {
                const relatedSCL = getRelatedSCLComponents(minskyNode.id)
                return relatedSCL.map((sclNode) => {
                  const pos = getSCLPosition(minskyIdx)
                  const focusState = getNodeFocusState(sclNode.id, "scl")
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
                        onClick={() => {
                          // Paired selection: Select SCL, force parent Minsky context, highlight SCL
                          setSelectedSclId(sclNode.id)
                          setSelectedMinskyId(minskyNode.id)
                          setSelectionSource("scl")
                        }}
                        onMouseEnter={() => setHoveredId(sclNode.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        style={{
                          transition: "all 0.3s ease",
                          animation: isActive ? "node-pulse 2s ease-in-out infinite" : "none",
                        }}
                      />
                      {(() => {
                        const offset = getSCLLabelOffset(sclNode.id)
                        const isMultiLine = sclNode.label === "Metaprompt Regulatory System"

                        if (isMultiLine) {
                          return (
                            <text
                              x={pos.x + offset.x}
                              y={pos.y + offset.y}
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
                              <tspan x={pos.x + offset.x} dy="0">Metaprompt</tspan>
                              <tspan x={pos.x + offset.x} dy="2.5">Regulatory System</tspan>
                            </text>
                          )
                        }

                        return (
                          <text
                            x={pos.x + offset.x}
                            y={pos.y + offset.y}
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
                        )
                      })()}
                    </g>
                  )
                })
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
