"use client"
import { useEffect, useRef, useState } from "react"

interface PhilosophyCard {
  title: string
  quote: string
  content: string[]
  icon: string
}

const philosophyCards: PhilosophyCard[] = [
  {
    title: "FOR HUMAN",
    quote: "AI is not a tool, but a partner",
    icon: "👥",
    content: [
      "AI should expand human potential",
      "and serve as a safety net against mistakes.",
      "Untrustworthy intelligence is not intelligence.",
      "FORHU sets the standard for human-centered AI.",
    ],
  },
  {
    title: "Honest Engineering",
    quote: "If even AI doesn't know why it gave that answer?",
    icon: "🔍",
    content: [
      "Traditional black-box AI cannot explain itself.",
      "SCL separates and records every step of reasoning.",
      "Transparent thinking.",
      "That's where trust begins.",
    ],
  },
  {
    title: "Hallucination Governance",
    quote: "The right to err, the duty not to repeat",
    icon: "🧠",
    content: [
      "Hallucinations can't be eliminated.",
      "But they can be prevented from happening twice.",
      "SCL records mistakes, and immediately verifies and corrects them.",
      "AI has the right to make mistakes. But never the right to repeat them.",
    ],
  },
]

export default function PhilosophySection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
            observer.unobserve(entry.target)
          }
        },
        { threshold: 0.1 },
      )

      if (ref) observer.observe(ref)
      return observer
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-background to-background/50">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-mono uppercase tracking-widest">PHILOSOPHY</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">How AI for Humans Is Different</h2>
        </div>

        {/* Philosophy cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophyCards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group relative bg-gradient-to-br from-foreground/5 to-foreground/[0.02] border border-accent/20 rounded-xl p-8 backdrop-blur-sm transition-all duration-700 ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)]`}
              style={{
                transitionDelay: visibleCards[index] ? `${index * 150}ms` : "0ms",
              }}
            >
              {/* Card accent line */}
              <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-accent via-accent to-transparent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>

              {/* Quote */}
              <p className="text-accent font-semibold text-sm mb-6 italic border-l-2 border-accent pl-4">
                "{card.quote}"
              </p>

              {/* Content */}
              <div className="space-y-3 text-foreground/70 text-sm">
                {card.content.map((line, idx) => (
                  <p key={idx} className="group/line hover:text-accent transition-colors duration-300">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
