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
        {/* Main visualization */}
        <div className="flex items-center justify-center mb-12 sm:mb-16">
          {/* The Loop Visualization */}
          <div className="relative h-64 sm:h-96 flex items-center justify-center">
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
        </div>
      </div>
    </section>
  )
}
