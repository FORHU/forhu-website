'use client'

import { useState, useEffect } from 'react'

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
  judgment: { x: 32, y: 26, label: 'Judgment' },
  memory: { x: 48, y: 52, label: 'Memory' },
  control: { x: 64, y: 28, label: 'Control' },
  runtime: { x: 68, y: 58, label: 'Runtime' },
  metaprompt: { x: 35, y: 72, label: 'Metaprompt' }
}

const brainImageUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BRAIN1-QhdBYgaBYxYloew4GF20YmVKRLyUJp.png"

export default function SCLBrainVisualization() {
  const [selectedRegion, setSelectedRegion] = useState<string>('judgment')
  const [isAnimating, setIsAnimating] = useState(false)
  const [glowEffects, setGlowEffects] = useState<GlowEffect[]>([])
  const [activeButton, setActiveButton] = useState<string>('judgment')
  const [animationKey, setAnimationKey] = useState(0)

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
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#0f0d0a] via-[#1a1612] to-[#0f0d0a] overflow-hidden">
      {/* Background glow animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#ff6a2d]/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-[#ff6a2d]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#ff6a2d] text-sm font-mono uppercase tracking-widest">Structured Cognitive Loop</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[#f5ede6]">The Brain Behind SCL</h2>
          <p className="text-lg text-[#f5ede6]/70 mt-4">Click on each brain region to explore its role in intelligent reasoning</p>
        </div>

        {/* Main interactive section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Brain image with interactive overlay */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <img
                src={brainImageUrl || "/placeholder.svg"}
                alt="Interactive brain diagram"
                className={`w-full h-auto drop-shadow-[0_0_50px_rgba(255,106,45,0.3)] transition-all duration-700`}
              />

              <div className="absolute inset-0 w-full h-full">
                {Object.entries(textLabels).map(([regionId, labelData]) => (
                  <button
                    key={regionId}
                    onClick={() => handleLabelClick(regionId)}
                    className={`absolute px-3 py-1 font-sans text-base md:text-lg font-bold transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95 ${
                      activeButton === regionId 
                        ? 'text-yellow-300' 
                        : 'text-orange-500 hover:text-yellow-200'
                    }`}
                    style={{
                      left: `${labelData.x}%`,
                      top: `${labelData.y}%`,
                      transform: 'translate(-50%, -50%)',
                      background: 'transparent',
                      border: 'none',
                      padding: '0.5rem 0.75rem',
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
              >
                <defs>
                  <style>
                    {`
                      .brain-region {
                        fill: transparent;
                        transition: all 0.3s ease;
                      }
                      .brain-region:hover {
                        fill: rgba(255, 106, 45, 0.1);
                      }
                      .brain-region.active {
                        fill: rgba(255, 200, 87, 0.15);
                        filter: drop-shadow(0 0 8px rgba(255, 200, 87, 0.4));
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
                      className={`brain-region ${selectedRegion === region.id ? 'active' : ''}`}
                      onClick={(e) => handleRegionClick(region.id, e)}
                    />
                  )
                })}
              </svg>
            </div>
          </div>

          {/* Info panel */}
          <div className="lg:col-span-3">
            {selected && (
              <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <div className="space-y-6">
                  {/* Title and label */}
                  <div>
                    <p className="text-[#ff6a2d] text-sm font-mono uppercase tracking-widest mb-2">
                      SCL Component
                    </p>
                    <h3 className="text-5xl font-bold text-[#f5ede6]">{selected.label}</h3>
                  </div>

                  {/* Role */}
                  <div className="space-y-2">
                    <p className="text-[#ff6a2d] text-xs uppercase tracking-widest font-semibold">Role</p>
                    <p className="text-2xl font-semibold text-[#f5ede6]">{selected.role}</p>
                  </div>

                  {/* Function */}
                  <div className="bg-[#ff6a2d]/10 border border-[#ff6a2d]/30 rounded-lg p-6 backdrop-blur-sm">
                    <p className="text-[#ff6a2d] text-xs uppercase tracking-widest font-semibold mb-3">
                      Function
                    </p>
                    <p className="text-[#f5ede6]/90 text-base leading-relaxed">
                      {selected.function}
                    </p>
                  </div>

                  {/* Region selector buttons */}
                  <div className="pt-6 border-t border-[#ff6a2d]/20">
                    <p className="text-[#ff6a2d] text-xs uppercase tracking-widest font-semibold mb-4">
                      Explore Other Regions
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {brainRegions.map((region) => (
                        <button
                          key={region.id}
                          onClick={() => setSelectedRegion(region.id)}
                          className={`px-4 py-3 rounded-lg border font-medium transition-all duration-300 text-sm ${
                            selectedRegion === region.id
                              ? 'bg-[#ff6a2d]/25 border-[#ff6a2d]/70 text-[#ff6a2d] shadow-[0_0_16px_rgba(255,106,45,0.4)]'
                              : 'bg-[#f5ede6]/5 border-[#f5ede6]/20 text-[#f5ede6]/70 hover:border-[#ff6a2d]/50 hover:bg-[#ff6a2d]/10 hover:text-[#ff6a2d]'
                          }`}
                        >
                          {region.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer caption */}
        <div className="text-center mt-20 pt-12 border-t border-[#ff6a2d]/15">
          <p className="text-[#f5ede6]/60 text-sm leading-relaxed">
            Explore the Cognitive Roles of the Structured Cognitive Loop.
          </p>
        </div>
      </div>
    </section>
  )
}
