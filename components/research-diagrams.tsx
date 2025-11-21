"use client"

export const NetworkGraphDiagram = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" style={{ filter: "drop-shadow(0 0 1px rgba(0,0,0,0.1))" }}>
    {/* Central node */}
    <circle cx="100" cy="80" r="8" fill="currentColor" className="text-muted-foreground" opacity="0.8" />

    {/* Peripheral nodes */}
    {[0, 1, 2, 3, 4].map((i) => {
      const angle = (i * 72 * Math.PI) / 180
      const x = 100 + Math.cos(angle) * 50
      const y = 80 + Math.sin(angle) * 50
      return (
        <g key={i}>
          <line
            x1="100"
            y1="80"
            x2={x}
            y2={y}
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-muted-foreground"
            opacity="0.4"
            suppressHydrationWarning
          />
          <circle cx={x} cy={y} r="4" fill="currentColor" className="text-muted-foreground" opacity="0.6" suppressHydrationWarning />
        </g>
      )
    })}
  </svg>
)

export const LayeredModelDiagram = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" style={{ filter: "drop-shadow(0 0 1px rgba(0,0,0,0.1))" }}>
    {/* Three layers */}
    {[0, 1, 2].map((i) => (
      <g key={i} opacity={0.6 + i * 0.2}>
        <rect
          x="40"
          y={40 + i * 35}
          width="120"
          height="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          className="text-muted-foreground"
        />
        <line
          x1="50"
          y1={54 + i * 35}
          x2="150"
          y2={54 + i * 35}
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-muted-foreground"
          opacity="0.5"
        />
      </g>
    ))}
  </svg>
)

export const SchemaDiagram = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" style={{ filter: "drop-shadow(0 0 1px rgba(0,0,0,0.1))" }}>
    {/* Input box */}
    <rect
      x="20"
      y="60"
      width="40"
      height="40"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      className="text-muted-foreground"
      opacity="0.7"
    />
    {/* Process box */}
    <rect
      x="80"
      y="60"
      width="40"
      height="40"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      className="text-muted-foreground"
      opacity="0.8"
    />
    {/* Output box */}
    <rect
      x="140"
      y="60"
      width="40"
      height="40"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      className="text-muted-foreground"
      opacity="0.7"
    />

    {/* Arrows */}
    <line x1="60" y1="80" x2="80" y2="80" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground" />
    <polygon points="82,80 76,77 76,83" fill="currentColor" className="text-muted-foreground" opacity="0.6" />

    <line x1="120" y1="80" x2="140" y2="80" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground" />
    <polygon points="142,80 136,77 136,83" fill="currentColor" className="text-muted-foreground" opacity="0.6" />
  </svg>
)

export const NeuralDiagram = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" style={{ filter: "drop-shadow(0 0 1px rgba(0,0,0,0.1))" }}>
    {/* Three layers with neurons */}
    {[0, 1, 2].map((layer) => {
      const x = 40 + layer * 60
      return (
        <g key={layer} opacity={0.6 + layer * 0.15}>
          {[0, 1, 2].map((neuron) => {
            const y = 40 + neuron * 40
            return (
              <circle
                key={`${layer}-${neuron}`}
                cx={x}
                cy={y}
                r="3"
                fill="currentColor"
                className="text-muted-foreground"
                opacity="0.7"
              />
            )
          })}
          {/* Connections to next layer */}
          {layer < 2 &&
            [0, 1, 2].map((n1) =>
              [0, 1, 2].map((n2) => (
                <line
                  key={`conn-${layer}-${n1}-${n2}`}
                  x1={x}
                  y1={40 + n1 * 40}
                  x2={x + 60}
                  y2={40 + n2 * 40}
                  stroke="currentColor"
                  strokeWidth="0.3"
                  className="text-muted-foreground"
                  opacity="0.2"
                />
              )),
            )}
        </g>
      )
    })}
  </svg>
)
