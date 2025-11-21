"use client"
import { useEffect, useRef, useState } from "react"

interface SCLStep {
  number: number
  role: string
  title: string
  copy: string
  color: string
}

const sclSteps: SCLStep[] = [
  {
    number: 1,
    role: "Compass",
    title: "Metaprompt",
    copy: "What should be pursued?",
    color: "from-blue-500/30 to-transparent",
  },
  {
    number: 2,
    role: "Decision Maker",
    title: "Judgment",
    copy: "What should be done next?",
    color: "from-purple-500/30 to-transparent",
  },
  {
    number: 3,
    role: "Executor",
    title: "Runtime",
    copy: "Turn decisions into reality",
    color: "from-accent/30 to-transparent",
  },
  {
    number: 4,
    role: "Experience Vault",
    title: "Memory",
    copy: "Remember lessons learned",
    color: "from-green-500/30 to-transparent",
  },
  {
    number: 5,
    role: "Self-Checker",
    title: "Control",
    copy: "Never repeat mistakes",
    color: "from-red-500/30 to-transparent",
  },
]

export default function SCLLoopSection() {
  const [activeStep, setActiveStep] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % sclSteps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section
      id="scl-loop"
      ref={containerRef}
      className="relative py-16 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-background/80 via-background to-background"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="text-accent text-xs sm:text-sm font-mono uppercase tracking-widest">SCL</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-foreground mb-4 sm:mb-6">The Birth of Thinking AI</h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
            Through a 5-step cognitive loop, it reasons, verifies, remembers, and self-corrects.
          </p>
        </div>

        {/* Main visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          {/* Left: The Loop Visualization */}
          <div className="relative h-64 sm:h-96 flex items-center justify-center order-1 lg:order-1">
            <svg className="w-full h-full max-w-[300px] sm:max-w-sm" viewBox="0 0 400 400" style={{ overflow: "visible" }}>
              {/* Circle path */}
              <circle
                cx="200"
                cy="200"
                r="160"
                fill="none"
                stroke="url(#gradientAccent)"
                strokeWidth="1"
                opacity="0.3"
                strokeDasharray="5,5"
              />

              {/* Step circles */}
              {sclSteps.map((step, idx) => {
                const angle = (idx * 72 - 90) * (Math.PI / 180)
                const x = 200 + 160 * Math.cos(angle)
                const y = 200 + 160 * Math.sin(angle)
                const isActive = idx === activeStep

                return (
                  <g key={idx}>
                    {/* Connection line to center */}
                    <line
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke="url(#gradientAccent)"
                      strokeWidth={isActive ? "3" : "1"}
                      opacity={isActive ? 0.8 : 0.2}
                      className="transition-all duration-500"
                    />

                    {/* Step circle */}
                    <circle
                      cx={x}
                      cy={y}
                      r={isActive ? "30" : "20"}
                      fill="url(#gradientAccent)"
                      opacity={isActive ? 0.9 : 0.3}
                      className="transition-all duration-500 cursor-pointer"
                      onClick={() => setActiveStep(idx)}
                      style={{ filter: isActive ? "drop-shadow(0 0 20px rgba(200,90,58,0.6))" : "none" }}
                    />

                    {/* Step number */}
                    <text
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={isActive ? "16" : "12"}
                      fontWeight="bold"
                      fill={isActive ? "#0a0a0a" : "rgb(255,255,255)"}
                      className="transition-all duration-500 pointer-events-none"
                    >
                      {step.number}
                    </text>
                  </g>
                )
              })}

              {/* Center pulse */}
              <circle
                cx="200"
                cy="200"
                r="40"
                fill="none"
                stroke="url(#gradientAccent)"
                strokeWidth="2"
                opacity="0.4"
              />
              <text
                x="200"
                y="200"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="14"
                fontWeight="bold"
                fill="rgb(200,90,58)"
                className="pointer-events-none"
              >
                SCL
              </text>

              {/* Gradients */}
              <defs>
                <linearGradient id="gradientAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff6a2d" />
                  <stop offset="100%" stopColor="rgba(255, 106, 45, 0.6)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Right: Active Step Details */}
          <div className="space-y-6 order-2 lg:order-2">
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl sm:text-4xl font-bold text-accent">{String(activeStep + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{sclSteps[activeStep].title}</h3>
                  <p className="text-accent font-semibold text-xs sm:text-sm">{sclSteps[activeStep].role}</p>
                </div>
              </div>
              <p className="text-xl sm:text-2xl text-foreground/80 font-semibold">"{sclSteps[activeStep].copy}"</p>
            </div>

            {/* Step indicators */}
            <div className="space-y-3 hidden sm:block">
              {sclSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 transform hover:scale-105 ${idx === activeStep
                    ? "bg-accent/20 border-accent text-accent shadow-[0_0_20px_rgba(200,90,58,0.3)]"
                    : "bg-foreground/5 border-foreground/10 text-foreground/60 hover:border-accent/50"
                    }`}
                >
                  <div className="font-semibold">
                    Step {step.number}: {step.title}
                  </div>
                  <div className="text-sm opacity-70">{step.role}</div>
                </button>
              ))}
            </div>

            {/* Mobile Step Indicator (Dots) */}
            <div className="flex justify-center gap-2 sm:hidden">
              {sclSteps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeStep ? "bg-accent w-6" : "bg-accent/30"
                    }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="text-center bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 rounded-xl p-6 sm:p-8 backdrop-blur-sm">
          <p className="text-lg sm:text-xl text-foreground font-semibold mb-2">This cycle never stops.</p>
          <p className="text-sm sm:text-base text-foreground/70">
            Not just giving answers, but through continuous reasoning, memory, and self-correction, it ensures accuracy,
            consistency, and trust.
          </p>
        </div>
      </div>
    </section>
  )
}
