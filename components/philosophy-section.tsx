"use client"
import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

// ── Custom brand icons — built around the SCL visual language ────────────────

// FOR HUMAN: person at the centre of an orbital cognitive loop
const IconForHuman = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-accent">
    {/* Outer dashed orbit */}
    <circle cx="16" cy="16" r="13" strokeDasharray="2.5 2" opacity="0.35" />
    {/* Human head */}
    <circle cx="16" cy="11.5" r="3" />
    {/* Human body */}
    <path d="M9.5 27c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
    {/* Small orbit node — the AI partner */}
    <circle cx="28" cy="14" r="1.5" fill="currentColor" fillOpacity="0.6" stroke="none" />
    <circle cx="5"  cy="20" r="1.5" fill="currentColor" fillOpacity="0.4" stroke="none" />
  </svg>
)

// HONEST ENGINEERING: stacked transparent layers with a vertical light ray passing through
const IconHonestEngineering = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-accent">
    {/* Three horizontal layers (like SCL's stacked architecture) */}
    <path d="M4 9 L16 4 L28 9 L16 14 Z" opacity="1" />
    <path d="M4 15.5 L16 10.5 L28 15.5 L16 20.5 Z" opacity="0.55" />
    <path d="M4 22 L16 17 L28 22 L16 27 Z" opacity="0.25" />
    {/* Vertical ray of light piercing all layers — transparency */}
    <line x1="16" y1="1" x2="16" y2="30" strokeDasharray="2 2" opacity="0.5" />
    <circle cx="16" cy="1.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)

// HALLUCINATION GOVERNANCE: recursive loop with an error caught and corrected
const IconHallucinationGovernance = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-accent">
    {/* Circular loop arrow */}
    <path d="M25 16A9 9 0 1 1 20.5 8" />
    {/* Arrow head on the loop */}
    <path d="M20 4.5 L20.5 8 L17 8.5" />
    {/* Check — the correction applied inside the loop */}
    <path d="M11 16.5 l3 3 l6.5 -6.5" strokeWidth="1.6" />
  </svg>
)

interface PhilosophyCard {
  title: string
  quote: string
  content: string[]
  icon: ReactNode
}

const philosophyCards: PhilosophyCard[] = [
  {
    title: "FOR HUMAN",
    quote: "AI is not a tool, but a partner",
    icon: <IconForHuman />,
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
    icon: <IconHonestEngineering />,
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
    icon: <IconHallucinationGovernance />,
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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const next = [...prev]
              next[index] = true
              return next
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
    <section id="philosophy" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-background to-background/50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-accent text-xs sm:text-sm font-mono uppercase tracking-widest">PHILOSOPHY</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 text-foreground">How AI for Humans Is Different</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {philosophyCards.map((card, index) => (
            <div
              key={index}
              ref={(el) => { if (el) cardRefs.current[index] = el }}
              className={`group relative overflow-hidden bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-lg shadow-black/30 transition-all duration-500 ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } hover:border-accent/40 hover:shadow-accent/20 hover:shadow-xl hover:-translate-y-1`}
              style={{ transitionDelay: visibleCards[index] ? `${index * 150}ms` : "0ms" }}
            >
              {/* Icon */}
              <div className="mb-5 sm:mb-7 w-fit p-3 rounded-xl bg-accent/8 border border-accent/15 group-hover:bg-accent/12 group-hover:border-accent/30 transition-all duration-500 group-hover:scale-105">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{card.title}</h3>

              {/* Quote */}
              <p className="text-accent font-semibold text-xs sm:text-sm mb-4 sm:mb-6 italic border-l-2 border-accent pl-3 sm:pl-4">
                "{card.quote}"
              </p>

              {/* Content */}
              <div className="space-y-2 sm:space-y-3 text-foreground/70 text-xs sm:text-sm">
                {card.content.map((line, idx) => (
                  <p key={idx} className="hover:text-accent transition-colors duration-300">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
