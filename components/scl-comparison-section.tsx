"use client"
import { useEffect, useRef, useState } from "react"

interface ComparisonRow {
  category: string
  traditional: string
  scl: string
}

const comparisonData: ComparisonRow[] = [
  {
    category: "Thinking Process",
    traditional: "Handles everything at once",
    scl: "Divided into 5 steps, cyclical",
  },
  {
    category: "Error Handling",
    traditional: "Unknown cause, repeats errors",
    scl: "Records, verifies, corrects instantly",
  },
  {
    category: "Explainability",
    traditional: "Black box (inexplicable)",
    scl: "Full transparency at every step",
  },
  {
    category: "Learning Method",
    traditional: "Fixed model",
    scl: "Evolves from experience",
  },
  {
    category: "Reliability",
    traditional: "Uncertain",
    scl: "Structurally guaranteed",
  },
]

export default function SCLComparisonSection() {
  const [visibleRows, setVisibleRows] = useState<boolean[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleRows(new Array(comparisonData.length).fill(true))
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={containerRef} className="relative py-24 px-6 bg-gradient-to-b from-background to-background/50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-mono uppercase tracking-widest">COMPARISON</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground mb-4">SCL vs Traditional AI</h2>
          <p className="text-xl text-foreground/70">What's the Difference?</p>
        </div>

        {/* Comparison table */}
        <div className="space-y-3 mb-12">
          {/* Header row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="font-semibold text-foreground/70 text-sm uppercase tracking-wider">Category</div>
            <div className="font-semibold text-foreground/70 text-sm uppercase tracking-wider">Traditional AI</div>
            <div className="font-semibold text-accent text-sm uppercase tracking-wider">SCL</div>
          </div>

          {/* Data rows */}
          {comparisonData.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-lg border transition-all duration-700 transform ${
                visibleRows[idx] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              } ${
                idx % 2 === 0
                  ? "bg-foreground/5 border-foreground/10"
                  : "bg-gradient-to-r from-accent/5 to-transparent border-accent/20"
              } hover:border-accent/50 group`}
              style={{
                transitionDelay: visibleRows[idx] ? `${idx * 100}ms` : "0ms",
              }}
            >
              <div className="font-semibold text-foreground">{row.category}</div>
              <div className="text-foreground/60 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500/40 mr-3"></span>
                {row.traditional}
              </div>
              <div className="text-accent font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                <span className="inline-block w-2 h-2 rounded-full bg-accent mr-3"></span>
                {row.scl}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center bg-gradient-to-r from-accent/10 via-accent/5 to-transparent border border-accent/30 rounded-xl p-10 backdrop-blur-sm">
          <p className="text-3xl font-bold text-foreground mb-4">"SCL is not AI.</p>
          <p className="text-3xl font-bold text-accent">It's the next evolution of AI."</p>
        </div>
      </div>
    </section>
  )
}
