"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { publications } from "@/lib/publications"

const latestPaper = publications[0]

export default function HeroHome() {
  const [showResearch, setShowResearch] = useState(false)
  const [paused, setPaused] = useState(false)

  // Rotate between the tagline badge and the latest-research pill
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setShowResearch((v) => !v), 4500)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        crossOrigin="anonymous"
        suppressHydrationWarning
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/synapse-6GkWZHBLR3B9YFKFnxnpOfFv0E4Hbm.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/60" />
      {/* Content wrapper */}
      <div className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="mx-auto max-w-4xl w-full">
          {/* Header badge — rotates between the tagline and the latest research */}
          <div
            className="mb-6 md:mb-8 relative h-9 md:h-11"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className={`absolute inset-0 flex justify-center transition-all duration-700 ${showResearch ? "opacity-0 -translate-y-2 pointer-events-none" : "opacity-100 translate-y-0"}`}
              aria-hidden={showResearch}
            >
              <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-accent bg-black/30 backdrop-blur-sm">
                <span className="text-xs md:text-sm font-medium text-muted-foreground">An Age of Distrust</span>
              </div>
            </div>
            <div
              className={`absolute inset-0 flex justify-center transition-all duration-700 ${showResearch ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
              aria-hidden={!showResearch}
            >
              <Link
                href="/research"
                tabIndex={showResearch ? 0 : -1}
                className="group inline-flex items-center gap-2 max-w-full px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-accent bg-black/30 backdrop-blur-sm hover:bg-accent/15 transition-colors"
              >
                <span className="shrink-0 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">New</span>
                <span className="truncate text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {latestPaper.title}: {latestPaper.subtitle.split(" for ")[0]}
                </span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-accent transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground text-center leading-tight mb-6 tracking-tight">
            Where AI and humanity <span className="font-semibold text-accent">connect</span>
            <br />
            <span
              className="font-semibold text-accent block mt-2 md:mt-0 md:inline"
              style={{
                textShadow: '0 0 20px rgba(217, 119, 6, 0.4), 0 0 40px rgba(217, 119, 6, 0.2)',
                filter: 'drop-shadow(0 0 8px rgba(217, 119, 6, 0.3))'
              }}
            >
              TRUST BEGINS
            </span>
          </h1>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mt-10 md:mt-16 items-center w-full sm:w-auto">
            <a
              href="#scl"
              className="w-full sm:w-auto px-6 py-3 rounded-md border border-border bg-primary text-primary-foreground font-light hover:opacity-90 transition-opacity text-center"
            >
              Learn about SCL
            </a>
            <a
              href="#research"
              className="w-full sm:w-auto px-6 py-3 rounded-md border border-border bg-transparent text-foreground font-light hover:bg-black/20 transition-colors text-center"
            >
              Read the research
            </a>
          </div>

          <p className="text-xs sm:text-sm text-accent font-medium text-center max-w-xl mx-auto mt-8 px-4">
            Neurons connect through synapses to create thought
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            SCL connects your process to create clarity.
          </p>
        </div>
      </div>
    </section>
  )
}
