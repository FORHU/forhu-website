"use client"

const ACCENT  = "#ff6a2d"
const GOLD    = "#c89860"
const BLUE    = "#60a5fa"
const GREEN   = "#34d399"
const PURPLE  = "#9b7cc7"
const RED     = "#f87171"
const W       = "rgba(255,255,255,0.18)"
const DIM     = "rgba(255,255,255,0.08)"

// ── 1. "Emergent Cognitive Convergence: Implementation and Four Theories of Mind" ─
// Shows how 4 computational implementations map to 4 classical theories of mind
export const NetworkGraphDiagram = () => {
  const implementations = [
    { y: 28,  label: "Recursive",   sub: "Reasoning"   },
    { y: 62,  label: "Associative", sub: "Memory"       },
    { y: 96,  label: "Predictive",  sub: "Inference"    },
    { y: 130, label: "Reactive",    sub: "Execution"    },
  ]
  const theories = [
    { y: 28,  label: "Global Workspace", color: BLUE   },
    { y: 62,  label: "Society of Mind",  color: ACCENT },
    { y: 96,  label: "Predictive Mind",  color: GREEN  },
    { y: 130, label: "Dual Process",     color: GOLD   },
  ]
  const mapping = [0,1,2,3]  // 1-to-1 mapping

  return (
    <svg viewBox="0 0 230 168" className="w-full h-full">
      <defs>
        <style>{`@keyframes ng-dash{to{stroke-dashoffset:-12}} .ng{animation:ng-dash 2s linear infinite}`}</style>
      </defs>

      {/* Column headers */}
      <text x="48" y="10" textAnchor="middle" style={{ fontSize:"4.5px", fill:"rgba(255,255,255,0.35)", letterSpacing:"0.1em" }}>IMPLEMENTATION</text>
      <text x="182" y="10" textAnchor="middle" style={{ fontSize:"4.5px", fill:"rgba(255,255,255,0.35)", letterSpacing:"0.1em" }}>THEORY OF MIND</text>

      {/* Convergence center label */}
      <text x="115" y="10" textAnchor="middle" style={{ fontSize:"4px", fill:ACCENT, opacity:0.7, letterSpacing:"0.08em" }}>SCL MAPPING</text>

      {/* Mapping lines */}
      {mapping.map(i => (
        <line key={i} x1="78" y1={implementations[i].y} x2="148" y2={theories[i].y}
          stroke={theories[i].color} strokeWidth="0.7" strokeDasharray="4,3"
          className="ng" opacity="0.55" />
      ))}

      {/* Implementation nodes (left) */}
      {implementations.map((impl, i) => (
        <g key={i}>
          <rect x="18" y={impl.y - 13} width="60" height="26" rx="4"
            fill={DIM} stroke={W} strokeWidth="0.6" />
          <text x="48" y={impl.y - 3} textAnchor="middle"
            style={{ fontSize:"5.5px", fontWeight:700, fill:"rgba(255,255,255,0.82)" }}>
            {impl.label}
          </text>
          <text x="48" y={impl.y + 6} textAnchor="middle"
            style={{ fontSize:"4px", fill:"rgba(255,255,255,0.4)" }}>
            {impl.sub}
          </text>
        </g>
      ))}

      {/* Theory nodes (right) */}
      {theories.map((theory, i) => (
        <g key={i}>
          <rect x="148" y={theory.y - 13} width="64" height="26" rx="4"
            fill={theory.color} fillOpacity="0.1"
            stroke={theory.color} strokeWidth="0.7" strokeOpacity="0.7" />
          <text x="180" y={theory.y + 2} textAnchor="middle"
            style={{ fontSize:"5px", fontWeight:700, fill:theory.color }}>
            {theory.label}
          </text>
        </g>
      ))}

      {/* Center convergence marker */}
      <circle cx="115" cy="79" r="8" fill={ACCENT} fillOpacity="0.15" stroke={ACCENT} strokeWidth="0.8" strokeOpacity="0.6" />
      <text x="115" y="82" textAnchor="middle" style={{ fontSize:"5px", fontWeight:800, fill:ACCENT }}>≡</text>

      <text x="115" y="162" textAnchor="middle"
        style={{ fontSize:"4px", fill:"rgba(255,255,255,0.2)", letterSpacing:"0.1em" }}>
        4 FRAMEWORKS → 4 THEORIES → UNIFIED PRINCIPLES
      </text>
    </svg>
  )
}

// ── 2. "Structured Cognitive Loop: Behavioral Intelligence in LLM Agents" ──────
// Shows the 5-layer recursive control architecture with feedback loop
const SCL_LAYERS = [
  { label:"Metaprompt", role:"Goals & Constraints", color:PURPLE },
  { label:"Judgment",   role:"Decision & Planning",  color:ACCENT },
  { label:"Runtime",    role:"Action Execution",      color:BLUE  },
  { label:"Memory",     role:"Experience Storage",    color:GREEN },
  { label:"Control",    role:"Self-Monitoring",       color:RED   },
]

export const LayeredModelDiagram = () => (
  <svg viewBox="0 0 220 170" className="w-full h-full">
    <defs>
      <style>{`@keyframes lm{from{stroke-dashoffset:16}to{stroke-dashoffset:0}} .lf{animation:lm 1.8s linear infinite}`}</style>
    </defs>

    {/* Title */}
    <text x="110" y="11" textAnchor="middle" style={{ fontSize:"4.5px", fill:"rgba(255,255,255,0.3)", letterSpacing:"0.1em" }}>
      SCL HIERARCHICAL CONTROL ARCHITECTURE
    </text>

    {SCL_LAYERS.map((layer, i) => (
      <g key={i}>
        <rect x="22" y={20 + i * 27} width="4" height="22" fill={layer.color} rx="1" opacity="0.9" />
        <rect x="30" y={20 + i * 27} width="150" height="22" rx="3"
          fill={layer.color} fillOpacity="0.07"
          stroke={layer.color} strokeWidth="0.7" strokeOpacity="0.55" />
        <text x="40" y={20 + i * 27 + 9} dominantBaseline="middle"
          style={{ fontSize:"7px", fontWeight:700, fill:layer.color }}>
          {layer.label}
        </text>
        <text x="40" y={20 + i * 27 + 17} dominantBaseline="middle"
          style={{ fontSize:"4px", fill:"rgba(255,255,255,0.38)", letterSpacing:"0.05em" }}>
          {layer.role.toUpperCase()}
        </text>
        {/* Downward flow */}
        {i < 4 && (
          <line x1="186" y1={42 + i * 27} x2="186" y2={47 + i * 27}
            stroke={layer.color} strokeWidth="1" className="lf" strokeDasharray="3,2" opacity="0.6" />
        )}
      </g>
    ))}

    {/* Recursive feedback arc */}
    <path d="M 22,20 Q 4,89 22,155" fill="none" stroke={ACCENT} strokeWidth="0.8" strokeDasharray="3,4" opacity="0.45" />
    <polygon points="22,155 16,148 23,149" fill={ACCENT} opacity="0.5" />
    <text x="2" y="90" textAnchor="middle" style={{ fontSize:"4px", fill:ACCENT, opacity:0.5 }}
      transform="rotate(-90 2 90)">RECURSIVE LOOP</text>

    {/* Input/Output labels */}
    <text x="185" y="17" textAnchor="middle" style={{ fontSize:"3.8px", fill:"rgba(255,255,255,0.3)", letterSpacing:"0.08em" }}>FLOW ↓</text>
    <text x="110" y="164" textAnchor="middle" style={{ fontSize:"4px", fill:"rgba(255,255,255,0.2)", letterSpacing:"0.1em" }}>
      BEHAVIORAL INTELLIGENCE THROUGH STRUCTURED RECURSION
    </text>
  </svg>
)

// ── 3. "Executable Epistemology: SCL as Architecture of Intentional Understanding" ─
// Shows how philosophical epistemology maps to computational implementation via SCL
export const SchemaDiagram = () => {
  const philosophical = [
    { label:"Belief",        y:38  },
    { label:"Knowledge",     y:72  },
    { label:"Justification", y:106 },
    { label:"Truth",         y:140 },
  ]
  const computational = [
    { label:"Model State",   y:38,  color:BLUE   },
    { label:"Inference",     y:72,  color:ACCENT },
    { label:"Verification",  y:106, color:GREEN  },
    { label:"Ground Truth",  y:140, color:PURPLE },
  ]

  return (
    <svg viewBox="0 0 230 168" className="w-full h-full">
      <defs>
        <style>{`@keyframes sd{from{stroke-dashoffset:12}to{stroke-dashoffset:0}} .sb{animation:sd 2.2s linear infinite}`}</style>
      </defs>

      <text x="44" y="11" textAnchor="middle" style={{ fontSize:"4.5px", fill:"rgba(255,255,255,0.3)", letterSpacing:"0.08em" }}>PHILOSOPHY</text>
      <text x="185" y="11" textAnchor="middle" style={{ fontSize:"4.5px", fill:ACCENT, opacity:0.7, letterSpacing:"0.08em" }}>COMPUTATION</text>
      <text x="115" y="11" textAnchor="middle" style={{ fontSize:"5px", fill:"rgba(255,255,255,0.5)" }}>→</text>

      {/* Mapping lines */}
      {philosophical.map((p, i) => (
        <line key={i} x1="76" y1={p.y} x2="148" y2={computational[i].y}
          stroke={computational[i].color} strokeWidth="0.7"
          strokeDasharray="4,3" className="sb" opacity="0.5" />
      ))}

      {/* Philosophical concepts */}
      {philosophical.map((p, i) => (
        <g key={i}>
          <rect x="14" y={p.y - 13} width="62" height="26" rx="4"
            fill={DIM} stroke={W} strokeWidth="0.6" />
          <text x="45" y={p.y + 2} textAnchor="middle"
            style={{ fontSize:"6px", fontWeight:600, fill:"rgba(255,255,255,0.7)" }}>
            {p.label}
          </text>
        </g>
      ))}

      {/* Computational equivalents */}
      {computational.map((c, i) => (
        <g key={i}>
          <rect x="148" y={c.y - 13} width="66" height="26" rx="4"
            fill={c.color} fillOpacity="0.1"
            stroke={c.color} strokeWidth="0.7" strokeOpacity="0.7" />
          <text x="181" y={c.y + 2} textAnchor="middle"
            style={{ fontSize:"5.5px", fontWeight:700, fill:c.color }}>
            {c.label}
          </text>
        </g>
      ))}

      {/* SCL bridge label */}
      <rect x="102" y="78" width="26" height="14" rx="3"
        fill={ACCENT} fillOpacity="0.15" stroke={ACCENT} strokeWidth="0.8" strokeOpacity="0.6" />
      <text x="115" y="86" textAnchor="middle"
        style={{ fontSize:"5.5px", fontWeight:800, fill:ACCENT }}>SCL</text>

      <text x="115" y="163" textAnchor="middle"
        style={{ fontSize:"4px", fill:"rgba(255,255,255,0.2)", letterSpacing:"0.08em" }}>
        PHILOSOPHY → EXECUTABLE COMPUTATIONAL PROCESS
      </text>
    </svg>
  )
}

// ── 4. "Hallucination-Informed Intelligence: Limits of Lossless Abstraction" ──
// Shows lossy compression causing hallucinations — information theory perspective
export const NeuralDiagram = () => {
  const getY = (count: number, i: number) => 18 + (118 / (count + 1)) * (i + 1)
  const layers = [
    { x:24,  n:7, label:"World",    sublabel:"Full Info",  color:BLUE  },
    { x:82,  n:4, label:"Encode",   sublabel:"Compressed", color:GOLD  },
    { x:134, n:3, label:"Latent",   sublabel:"Abstract",   color:ACCENT},
    { x:186, n:6, label:"Decode",   sublabel:"Generated",  color:RED   },
  ]
  return (
    <svg viewBox="0 0 220 190" className="w-full h-full">
      <defs>
        <style>{`@keyframes nd{0%,100%{opacity:0.12}50%{opacity:0.6}} .nh{animation:nd 1.8s ease-in-out infinite} .nh2{animation:nd 1.8s ease-in-out infinite 0.9s}`}</style>
      </defs>

      {/* Connections */}
      {layers.slice(0,-1).map((la, li) => {
        const lb = layers[li+1]
        return Array.from({length:la.n}).map((_,i) =>
          Array.from({length:lb.n}).map((_,j) => {
            const isLoss = li===1 && j===lb.n-1
            const isHall = li===2 && j>=lb.n-2
            return (
              <line key={`${li}-${i}-${j}`}
                x1={la.x} y1={getY(la.n,i)} x2={lb.x} y2={getY(lb.n,j)}
                stroke={isHall ? RED : isLoss ? GOLD : la.color}
                strokeWidth={isHall ? 0.7 : 0.3}
                opacity={isHall ? 0.4 : isLoss ? 0.3 : 0.1} />
            )
          })
        )
      })}

      {/* Nodes */}
      {layers.map((layer,li) =>
        Array.from({length:layer.n}).map((_,i) => {
          const y = getY(layer.n,i)
          const isHall = li===3 && i>=layer.n-2
          const isLost = li===1 && i===layer.n-1
          return (
            <g key={`${li}-${i}`}>
              {isHall && <circle cx={layer.x} cy={y} r="8" fill={RED} fillOpacity="0.1" className="nh" />}
              <circle cx={layer.x} cy={y}
                r={isHall ? 5.5 : isLost ? 3 : li===0 ? 4.5 : 4.5}
                fill={isHall ? RED : isLost ? "rgba(255,255,255,0.05)" : layer.color}
                fillOpacity={isLost ? 0.2 : 0.75}
                stroke={isHall ? RED : layer.color}
                strokeWidth={isHall ? 1.2 : 0.7}
                strokeOpacity={isLost ? 0.2 : 0.85} />
            </g>
          )
        })
      )}

      {/* Layer labels — pushed down into the extra viewBox space */}
      {layers.map((l,i) => (
        <g key={i}>
          <text x={l.x} y="148" textAnchor="middle"
            style={{ fontSize:"4.5px", fontWeight:700, fill:l.color, opacity:0.85 }}>
            {l.label}
          </text>
          <text x={l.x} y="155" textAnchor="middle"
            style={{ fontSize:"3.5px", fill:l.color, opacity:0.45 }}>
            {l.sublabel}
          </text>
        </g>
      ))}

      {/* Hallucination annotation — clearly below all labels */}
      <line x1="186" y1="157" x2="186" y2="165" stroke={RED} strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5" />
      <rect x="155" y="165" width="62" height="13" rx="3"
        fill={RED} fillOpacity="0.12" stroke={RED} strokeWidth="0.7" strokeOpacity="0.6" />
      <text x="186" y="173" textAnchor="middle"
        style={{ fontSize:"4.5px", fontWeight:700, fill:RED }}>⚠ HALLUCINATED</text>

      {/* Loss annotation */}
      <text x="85" y="13" textAnchor="middle"
        style={{ fontSize:"4px", fill:GOLD, opacity:0.7 }}>LOSSY COMPRESSION</text>
    </svg>
  )
}

// ── 5. "Hallucination as Byproduct: An Inevitable Property of Intelligence" ──
// Shows the fundamental trade-off: compression enables intelligence, creates hallucination
export const TradeoffDiagram = () => (
  <svg viewBox="0 0 220 170" className="w-full h-full">
    <defs>
      <style>{`@keyframes td{0%,100%{opacity:0.4}50%{opacity:1}} .tpulse{animation:td 2.5s ease-in-out infinite}`}</style>
      <linearGradient id="tdZone" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={ACCENT} stopOpacity="0.3" />
        <stop offset="100%" stopColor={RED} stopOpacity="0.15" />
      </linearGradient>
    </defs>

    {/* Axes */}
    <line x1="30" y1="140" x2="200" y2="140" stroke={W} strokeWidth="0.8" />
    <line x1="30" y1="140" x2="30"  y2="16"  stroke={W} strokeWidth="0.8" />
    <polygon points="200,140 193,137 193,143" fill={W} />
    <polygon points="30,16 27,23 33,23" fill={W} />

    {/* Axis labels */}
    <text x="115" y="155" textAnchor="middle" style={{ fontSize:"5px", fill:"rgba(255,255,255,0.45)" }}>
      Compression Ratio →
    </text>
    <text x="12" y="78" textAnchor="middle" style={{ fontSize:"5px", fill:"rgba(255,255,255,0.45)" }}
      transform="rotate(-90 12 78)">
      Hallucination Rate →
    </text>

    {/* Inevitability curve: low compression → low hallucination; high → high */}
    <path d="M 30,135 Q 80,130 110,110 Q 145,82 170,48 L 195,24"
      fill="none" stroke={ACCENT} strokeWidth="1.5" opacity="0.85" />

    {/* Impossible zone label */}
    <path d="M 30,135 Q 80,130 110,110 Q 145,82 170,48 L 195,24 L 195,140 Z"
      fill="url(#tdZone)" opacity="0.35" />
    <text x="148" y="120" textAnchor="middle"
      style={{ fontSize:"4.5px", fill:ACCENT, opacity:0.7 }}>Hallucination</text>
    <text x="148" y="128" textAnchor="middle"
      style={{ fontSize:"4.5px", fill:ACCENT, opacity:0.7 }}>Zone</text>

    {/* "Useful LLM" marker */}
    <circle cx="155" cy="68" r="6" fill={ACCENT} fillOpacity="0.25"
      stroke={ACCENT} strokeWidth="1" className="tpulse" />
    <text x="155" y="71" textAnchor="middle" style={{ fontSize:"4px", fontWeight:700, fill:ACCENT }}>LLM</text>

    {/* Annotation lines */}
    <line x1="30" y1="135" x2="68" y2="135" stroke={GREEN} strokeWidth="0.6" strokeDasharray="3,3" />
    <text x="50" y="133" textAnchor="middle" style={{ fontSize:"3.5px", fill:GREEN, opacity:0.8 }}>Low Compress</text>
    <text x="50" y="139" textAnchor="middle" style={{ fontSize:"3.5px", fill:GREEN, opacity:0.6 }}>= Low Halluci.</text>

    <line x1="175" y1="140" x2="175" y2="108" stroke={RED} strokeWidth="0.6" strokeDasharray="3,3" />
    <text x="175" y="106" textAnchor="middle" style={{ fontSize:"3.5px", fill:RED, opacity:0.8 }}>High Compress</text>
    <text x="175" y="112" textAnchor="middle" style={{ fontSize:"3.5px", fill:RED, opacity:0.6 }}>= Intelligent</text>

    {/* Theorem label */}
    <rect x="35" y="20" width="88" height="22" rx="3"
      fill={DIM} stroke={W} strokeWidth="0.5" />
    <text x="79" y="30" textAnchor="middle"
      style={{ fontSize:"5px", fontWeight:700, fill:"rgba(255,255,255,0.8)" }}>∀ Intelligence</text>
    <text x="79" y="38" textAnchor="middle"
      style={{ fontSize:"4.5px", fill:"rgba(255,255,255,0.5)" }}>∃ Hallucination (inevitable)</text>
  </svg>
)

// ── 6b. "Pool-Gated Retrieval: Beyond RAG Toward Accountable Evidential Admission" ──
// Simplified 3-stage read of the pipeline: Horizon (recall) → Warrant (LLM gate) →
// Commitment (audited answer), with the Knowledge Gap branch as the key contribution.
const PGR_STAGES = [
  { label:"Horizon",    sub:"High-recall pool search",   color:BLUE   },
  { label:"Warrant",    sub:"LLM relevance gate",         color:ACCENT },
  { label:"Commitment", sub:"Auditable grounded answer",  color:GREEN  },
]

export const GatedPipelineDiagram = () => (
  <svg viewBox="0 0 220 170" className="w-full h-full">
    <defs>
      <style>{`@keyframes gp{from{stroke-dashoffset:16}to{stroke-dashoffset:0}} .gf{animation:gp 1.8s linear infinite}`}</style>
    </defs>

    <text x="110" y="11" textAnchor="middle" style={{ fontSize:"4.5px", fill:"rgba(255,255,255,0.3)", letterSpacing:"0.1em" }}>
      POOL-GATED RETRIEVAL
    </text>

    {PGR_STAGES.map((stage, i) => (
      <g key={i}>
        <rect x="22" y={24 + i * 40} width="4" height="28" fill={stage.color} rx="1" opacity="0.9" />
        <rect x="30" y={24 + i * 40} width="150" height="28" rx="3"
          fill={stage.color} fillOpacity="0.08"
          stroke={stage.color} strokeWidth="0.7" strokeOpacity="0.6" />
        <text x="40" y={24 + i * 40 + 12} dominantBaseline="middle"
          style={{ fontSize:"7px", fontWeight:700, fill:stage.color }}>
          {stage.label}
        </text>
        <text x="40" y={24 + i * 40 + 21} dominantBaseline="middle"
          style={{ fontSize:"4.2px", fill:"rgba(255,255,255,0.4)", letterSpacing:"0.03em" }}>
          {stage.sub}
        </text>
        {i < 2 && (
          <line x1="186" y1={52 + i * 40} x2="186" y2={64 + i * 40}
            stroke={stage.color} strokeWidth="1" className="gf" strokeDasharray="3,2" opacity="0.6" />
        )}
      </g>
    ))}

    {/* Knowledge Gap branch off the Warrant stage — the paper's central contribution */}
    <path d="M 174,68 Q 200,80 200,96" fill="none" stroke={RED} strokeWidth="0.8" strokeDasharray="3,3" opacity="0.6" />
    <path d="M 200,96 Q 200,112 174,124" fill="none" stroke={RED} strokeWidth="0.8" strokeDasharray="3,3" opacity="0.6" />
    <text x="200" y="99" textAnchor="middle" style={{ fontSize:"4px", fontWeight:700, fill:RED }}>Knowledge</text>
    <text x="200" y="105" textAnchor="middle" style={{ fontSize:"4px", fontWeight:700, fill:RED }}>Gap</text>

    <text x="110" y="163" textAnchor="middle"
      style={{ fontSize:"4px", fill:"rgba(255,255,255,0.2)", letterSpacing:"0.08em" }}>
      ABSENCE AS A FIRST-CLASS EPISTEMIC FACT
    </text>
  </svg>
)

// ── 6c. "Thermo Pulse: Entropy-Feedback Temperature Control for Autoregressive Decoding" ──
// Illustrative trace over decoding steps: next-token entropy H (blue) drives a clipped PD
// temperature T (orange) that pulses when entropy changes, versus a fixed-temperature baseline.
const TP_H = [0.30,0.28,0.34,0.30,0.62,0.90,0.74,0.46,0.34,0.30,0.32,0.58,0.84,0.95,0.70,0.44,0.32,0.28,0.30,0.52,0.78,0.60,0.40,0.30]
const TP_T = TP_H.map((h, i) => {
  const dh = i === 0 ? 0 : h - TP_H[i - 1]
  return Math.min(1.0, Math.max(0.25, 0.3 + 0.55 * h + 0.9 * dh))
})
const TP_X0 = 22, TP_X1 = 206, TP_Y0 = 120, TP_Y1 = 32
const tpX = (i: number) => TP_X0 + (i / (TP_H.length - 1)) * (TP_X1 - TP_X0)
const tpY = (v: number) => TP_Y0 - v * (TP_Y0 - TP_Y1)
const tpPath = (arr: number[]) => arr.map((v, i) => `${i === 0 ? "M" : "L"} ${tpX(i).toFixed(1)},${tpY(v).toFixed(1)}`).join(" ")

export const ThermoPulseDiagram = () => (
  <svg viewBox="0 0 220 170" className="w-full h-full">
    <defs>
      <style>{`@keyframes tpd{from{stroke-dashoffset:1}to{stroke-dashoffset:0}} .tpl{stroke-dasharray:1;animation:tpd 3.2s ease-out infinite}`}</style>
    </defs>

    <text x="110" y="11" textAnchor="middle" style={{ fontSize:"4.5px", fill:"rgba(255,255,255,0.3)", letterSpacing:"0.1em" }}>
      THERMO PULSE
    </text>

    {/* Legend */}
    <line x1="22" y1="22" x2="30" y2="22" stroke={BLUE} strokeWidth="1.4" />
    <text x="33" y="23.5" style={{ fontSize:"4.2px", fill:BLUE, fontWeight:700 }}>Entropy H</text>
    <line x1="72" y1="22" x2="80" y2="22" stroke={ACCENT} strokeWidth="1.4" />
    <text x="83" y="23.5" style={{ fontSize:"4.2px", fill:ACCENT, fontWeight:700 }}>PD temperature</text>
    <line x1="136" y1="22" x2="144" y2="22" stroke={W} strokeWidth="1" strokeDasharray="2,2" />
    <text x="147" y="23.5" style={{ fontSize:"4.2px", fill:"rgba(255,255,255,0.45)" }}>Fixed T = 0.7</text>

    {/* Grid + clip bounds */}
    {[0, 0.5, 1].map((v) => (
      <line key={v} x1={TP_X0} y1={tpY(v)} x2={TP_X1} y2={tpY(v)} stroke={DIM} strokeWidth="0.5" />
    ))}
    <line x1={TP_X0} y1={tpY(1.0)} x2={TP_X1} y2={tpY(1.0)} stroke={GOLD} strokeWidth="0.5" strokeDasharray="1.5,2" opacity="0.5" />
    <line x1={TP_X0} y1={tpY(0.25)} x2={TP_X1} y2={tpY(0.25)} stroke={GOLD} strokeWidth="0.5" strokeDasharray="1.5,2" opacity="0.5" />
    <text x={TP_X1} y={tpY(1.0) - 1.5} textAnchor="end" style={{ fontSize:"3.6px", fill:GOLD, opacity:0.7 }}>T max</text>
    <text x={TP_X1} y={tpY(0.25) + 5} textAnchor="end" style={{ fontSize:"3.6px", fill:GOLD, opacity:0.7 }}>T min</text>

    {/* Fixed-temperature baseline */}
    <line x1={TP_X0} y1={tpY(0.7)} x2={TP_X1} y2={tpY(0.7)} stroke={W} strokeWidth="0.8" strokeDasharray="3,3" />

    {/* Axes */}
    <line x1={TP_X0} y1={TP_Y0} x2={TP_X1} y2={TP_Y0} stroke={W} strokeWidth="0.6" />
    <line x1={TP_X0} y1={TP_Y1 - 4} x2={TP_X0} y2={TP_Y0} stroke={W} strokeWidth="0.6" />

    {/* Entropy and temperature traces */}
    <path d={tpPath(TP_H)} pathLength={1} className="tpl" fill="none" stroke={BLUE} strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round" opacity="0.9" />
    <path d={tpPath(TP_T)} pathLength={1} className="tpl" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" style={{ animationDelay:"0.25s" }} />

    {/* Pulse markers at entropy spikes */}
    {[5, 13, 20].map((i) => (
      <circle key={i} cx={tpX(i)} cy={tpY(TP_T[i])} r="2" fill={ACCENT} fillOpacity="0.25" stroke={ACCENT} strokeWidth="0.6" />
    ))}

    <text x={TP_X0} y={TP_Y0 + 8} style={{ fontSize:"3.8px", fill:"rgba(255,255,255,0.35)" }}>Step 1</text>
    <text x={TP_X1} y={TP_Y0 + 8} textAnchor="end" style={{ fontSize:"3.8px", fill:"rgba(255,255,255,0.35)" }}>Decoding step →</text>

    <text x="110" y="143" textAnchor="middle" style={{ fontSize:"4.2px", fill:"rgba(255,255,255,0.45)", letterSpacing:"0.03em" }}>
      Temperature pulses as next-token uncertainty changes
    </text>
    <text x="110" y="163" textAnchor="middle"
      style={{ fontSize:"4px", fill:"rgba(255,255,255,0.2)", letterSpacing:"0.08em" }}>
      ILLUSTRATIVE ENTROPY-FEEDBACK TRACE
    </text>
  </svg>
)

// ── 6. "Understanding Architecture: Fundamental Principles of Cognitive & AI Design" ─
// Shows unified principles bridging biological cognition and AI systems
export const CrossDomainDiagram = () => {
  const biological = [
    { label:"Perception",    color:BLUE   },
    { label:"Working Memory",color:GREEN  },
    { label:"Executive Ctrl",color:PURPLE },
    { label:"Long-term Mem", color:GOLD   },
  ]
  const ai = [
    { label:"Input Layer",   color:BLUE   },
    { label:"Context Window",color:GREEN  },
    { label:"Attention Head",color:PURPLE },
    { label:"Vector Store",  color:GOLD   },
  ]
  const principles = [
    { label:"Encoding",   color:BLUE   },
    { label:"Retention",  color:GREEN  },
    { label:"Regulation", color:PURPLE },
    { label:"Retrieval",  color:GOLD   },
  ]

  return (
    <svg viewBox="0 0 230 168" className="w-full h-full">
      <defs>
        <style>{`@keyframes cd{from{stroke-dashoffset:10}to{stroke-dashoffset:0}} .cl{animation:cd 2s linear infinite}`}</style>
      </defs>

      {/* Column headers */}
      <text x="36" y="10" textAnchor="middle" style={{ fontSize:"4px", fill:BLUE, opacity:0.8, letterSpacing:"0.06em" }}>BIOLOGICAL</text>
      <text x="115" y="10" textAnchor="middle" style={{ fontSize:"4px", fill:ACCENT, opacity:0.9, letterSpacing:"0.06em" }}>PRINCIPLES</text>
      <text x="194" y="10" textAnchor="middle" style={{ fontSize:"4px", fill:GREEN, opacity:0.8, letterSpacing:"0.06em" }}>AI SYSTEM</text>

      {biological.map((b, i) => {
        const y = 28 + i * 32
        const pyc = principles[i].color
        return (
          <g key={i}>
            {/* Left → center connection */}
            <line x1="68" y1={y} x2="90" y2={y}
              stroke={pyc} strokeWidth="0.6" strokeDasharray="3,2" className="cl" opacity="0.55" />
            {/* Center → right connection */}
            <line x1="140" y1={y} x2="162" y2={y}
              stroke={pyc} strokeWidth="0.6" strokeDasharray="3,2" className="cl" opacity="0.55" />

            {/* Biological node */}
            <rect x="8" y={y-12} width="60" height="24" rx="3"
              fill={DIM} stroke={b.color} strokeWidth="0.6" strokeOpacity="0.5" />
            <text x="38" y={y+2} textAnchor="middle"
              style={{ fontSize:"5px", fontWeight:600, fill:"rgba(255,255,255,0.75)" }}>
              {b.label}
            </text>

            {/* Principle (center) */}
            <rect x="90" y={y-12} width="50" height="24" rx="3"
              fill={pyc} fillOpacity="0.15"
              stroke={pyc} strokeWidth="0.8" strokeOpacity="0.8" />
            <text x="115" y={y+2} textAnchor="middle"
              style={{ fontSize:"5.5px", fontWeight:700, fill:pyc }}>
              {principles[i].label}
            </text>

            {/* AI node */}
            <rect x="162" y={y-12} width="60" height="24" rx="3"
              fill={DIM} stroke={ai[i].color} strokeWidth="0.6" strokeOpacity="0.5" />
            <text x="192" y={y+2} textAnchor="middle"
              style={{ fontSize:"5px", fontWeight:600, fill:"rgba(255,255,255,0.75)" }}>
              {ai[i].label}
            </text>
          </g>
        )
      })}

      <text x="115" y="162" textAnchor="middle"
        style={{ fontSize:"4px", fill:"rgba(255,255,255,0.2)", letterSpacing:"0.08em" }}>
        UNIFIED ARCHITECTURAL PRINCIPLES ACROSS DOMAINS
      </text>
    </svg>
  )
}
