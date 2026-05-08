'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface BrainRegion {
  id: string
  label: string
  role: string
  function: string
}

interface GlowEffect {
  regionId: string
  x: number
  y: number
}

const brainRegions: BrainRegion[] = [
  {
    id: 'judgment',
    label: 'Judgment',
    role: 'Thinking & Problem Solving',
    function: 'Core reasoning, evaluation, and decision-making. Conducts inference, logical processing, and multi-step problem solving.'
  },
  {
    id: 'memory',
    label: 'Memory',
    role: 'Human Memory',
    function: 'Stores structured information and past states. Provides stability, historical context, and factual grounding.'
  },
  {
    id: 'control',
    label: 'Control',
    role: 'Attention',
    function: 'Directs focus and regulates the cognitive flow. Selects tasks, manages priorities, and prevents duplication or error.'
  },
  {
    id: 'runtime',
    label: 'Runtime',
    role: 'Perception',
    function: 'Executes actions and interacts with the external world. Gathers information, triggers tools or APIs, and updates internal states.'
  },
  {
    id: 'metaprompt',
    label: 'Metaprompt',
    role: 'Human Intelligence',
    function: 'Governs goals, rules, strategies, and high-level planning. Provides direction, constraints, ethics, and behavioral coherence.'
  }
]

// Approximate coordinates for clickable regions on the brain image
const regionCoordinates: Record<string, { x: number; y: number; radius: number }> = {
  judgment: { x: 42, y: 28, radius: 12 },
  control: { x: 68, y: 30, radius: 12 },
  memory: { x: 38, y: 48, radius: 11 },
  runtime: { x: 62, y: 52, radius: 12 },
  metaprompt: { x: 50, y: 65, radius: 13 }
}

// Approximate coordinates for the words in the brain image (as percentages)
const wordLocations: Record<string, { x: number; y: number; radius: number }> = {
  judgment: { x: 42, y: 28, radius: 12 },
  control: { x: 68, y: 30, radius: 12 },
  memory: { x: 38, y: 48, radius: 11 },
  runtime: { x: 62, y: 52, radius: 12 },
  metaprompt: { x: 50, y: 65, radius: 13 }
}

// Text label positions and styling configuration
const textLabels: Record<string, { x: number; y: number; label: string }> = {
  judgment: { x: 42, y: 28, label: 'Judgment' },
  memory: { x: 38, y: 48, label: 'Memory' },
  control: { x: 68, y: 30, label: 'Control' },
  runtime: { x: 62, y: 52, label: 'Runtime' },
  metaprompt: { x: 50, y: 65, label: 'Metaprompt' }
}

const brainImageUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BRAIN1-QhdBYgaBYxYloew4GF20YmVKRLyUJp.png"

export default function SCLBrainVisualization() {
  const [selectedRegion, setSelectedRegion] = useState<string>('judgment')
  const [isAnimating, setIsAnimating] = useState(false)
  const [glowEffects, setGlowEffects] = useState<GlowEffect[]>([])
  const [activeButton, setActiveButton] = useState<string>('judgment')
  const [animationKey, setAnimationKey] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // 3D Tilt Logic
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 20 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const selected = brainRegions.find(r => r.id === selectedRegion)

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), 300)
    return () => clearTimeout(timer)
  }, [selectedRegion])

  const handleRegionClick = (regionId: string, event: React.MouseEvent) => {
    event.preventDefault()
    setSelectedRegion(regionId)
    setActiveButton(regionId)
    setAnimationKey(prev => prev + 1)
  }

  const handleHotspotClick = (regionId: string, x: number, y: number) => {
    setActiveButton(regionId)
    setSelectedRegion(regionId)
    setAnimationKey(prev => prev + 1)
  }

  const handleLabelClick = (labelId: string) => {
    console.log("[v0] Label clicked:", labelId)
    setActiveButton(labelId)
    setSelectedRegion(labelId)
    setAnimationKey(prev => prev + 1)
  }

  return (
    <section id="scl" className="relative py-12 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-background via-card to-background overflow-hidden">
      {/* Background glow animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] sm:w-[900px] sm:h-[900px] bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[700px] sm:h-[700px] bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-accent mb-4 tracking-tighter">
            Structured Cognitive Loop
          </h2>
          <p className="text-xl sm:text-2xl text-foreground font-medium">The Brain Behind SCL</p>
          <p className="text-base sm:text-lg text-muted-foreground mt-4 px-4">
            Click on each brain region to explore its role in intelligent reasoning
          </p>
        </div>

        {/* Main interactive section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 items-center">
          {/* Brain image with interactive overlay */}
          <div className="lg:col-span-2 flex justify-center order-1">
            <motion.div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ 
                rotateX, 
                rotateY, 
                perspective: 1000,
                transformStyle: "preserve-3d" 
              }}
              className="relative w-full max-w-[300px] sm:max-w-sm transition-shadow duration-500"
            >
              {/* Outer Bloom Effect */}
              <div
                className="absolute inset-0 bg-accent/10 rounded-full blur-[80px] z-0"
                style={{ transform: "translateZ(-50px)" }}
              />

              <img
                src={brainImageUrl || "/placeholder.svg"}
                alt="Interactive brain diagram"
                loading="lazy"
                decoding="async"
                className={`w-full h-auto relative z-10 drop-shadow-[0_0_30px_rgba(255,106,45,0.2)]`}
                style={{ transform: "translateZ(20px)" }}
              />

              <div className="absolute inset-0 w-full h-full" style={{ transform: "translateZ(40px)" }}>
                {Object.entries(textLabels).map(([regionId, labelData]) => (
                  <button
                    key={regionId}
                    onClick={() => handleLabelClick(regionId)}
                    className={`absolute px-4 py-2 sm:px-3 sm:py-1 font-sans text-base sm:text-base md:text-lg font-bold transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg ${activeButton === regionId
                      ? 'text-yellow-300'
                      : 'text-accent hover:text-yellow-200'
                      }`}
                    style={{
                      left: `${labelData.x}%`,
                      top: `${labelData.y}%`,
                      transform: 'translate(-50%, -50%)',
                      background: 'transparent',
                      border: 'none',
                      textShadow: activeButton === regionId
                        ? '0 0 8px rgba(255, 235, 59, 1), 0 0 16px rgba(255, 235, 59, 0.8), 0 0 24px rgba(255, 235, 59, 0.6)'
                        : 'none',
                      filter: activeButton === regionId
                        ? 'drop-shadow(0 0 12px rgba(255, 235, 59, 0.9)) drop-shadow(0 0 20px rgba(255, 235, 59, 0.7))'
                        : 'none',
                      whiteSpace: 'nowrap',
                      zIndex: 20,
                    }}
                    aria-pressed={activeButton === regionId}
                    aria-label={`${labelData.label} brain region`}
                    type="button"
                  >
                    {labelData.label}
                  </button>
                ))}
              </div>

              <svg
                className="absolute inset-0 w-full h-full cursor-pointer"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                aria-label="Interactive hotspots for brain regions"
                style={{ transform: "translateZ(41px)" }}
              >
                {Object.entries(wordLocations).map(([regionId, coords]) => (
                  <circle
                    key={regionId}
                    cx={coords.x}
                    cy={coords.y}
                    r={coords.radius}
                    fill="transparent"
                    className="hover:fill-[rgba(255,235,59,0.05)] transition-all duration-200"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleHotspotClick(regionId, coords.x, coords.y)}
                  />
                ))}
              </svg>

              <svg
                className="absolute inset-0 w-full h-full cursor-pointer"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                style={{ transform: "translateZ(42px)" }}
              >
                <defs>
                  <style>
                    {`
                      .brain-region {
                        fill: transparent;
                        transition: all 0.3s ease;
                      }
                      .brain-region:hover {
                        fill: var(--accent);
                        opacity: 0.1;
                      }
                      .brain-region.active {
                        fill: var(--accent);
                        opacity: 0.15;
                        filter: drop-shadow(0 0 8px var(--accent));
                      }
                    `}
                  </style>
                </defs>

                {brainRegions.map((region) => {
                  const coords = regionCoordinates[region.id]
                  return (
                    <circle
                      key={region.id}
                      cx={coords.x}
                      cy={coords.y}
                      r={coords.radius}
                      className="brain-region"
                      onClick={(e) => handleRegionClick(region.id, e)}
                    />
                  )
                })}
              </svg>
            </motion.div>
          </div>

          {/* Info panel */}
          <div className="lg:col-span-3 order-2">
            {selected && (
              <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <div className="space-y-6">
                  {/* Title and label */}
                  <div>
                    <p className="text-accent text-xs sm:text-sm font-mono uppercase tracking-widest mb-2">
                      SCL Component
                    </p>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">{selected.label}</h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:gap-6">
                    {/* Role Container */}
                    <div className="group bg-accent/5 border border-accent/15 rounded-xl p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:bg-accent/8 hover:border-accent/25">
                      <p className="text-accent text-xs uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent rounded-full"></span>
                        Role
                      </p>
                      <p className="text-xl sm:text-3xl font-bold text-foreground leading-tight tracking-tight">
                        {selected.role}
                      </p>
                    </div>

                    {/* Function Container */}
                    <div className="group bg-accent/10 border border-accent/30 rounded-xl p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:bg-accent/15 hover:border-accent/40">
                      <p className="text-accent text-xs uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent rounded-full"></span>
                        Function
                      </p>
                      <p className="text-foreground/90 text-sm sm:text-lg leading-relaxed font-medium">
                        {selected.function}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer caption */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed px-4">
            Explore the Cognitive Roles of the Structured Cognitive Loop.
          </p>
        </div>
      </div>
    </section>
  )
}
