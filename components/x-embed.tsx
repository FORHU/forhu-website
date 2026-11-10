"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// ── Featured X posts, newest first. Add a new post by putting its URL at the top. ──
const FEATURED_TWEET_URLS = [
  "https://x.com/forhuai/status/2107734410619699232",
  "https://x.com/forhuai/status/2061787414243455416",
]

declare global {
  interface Window {
    twttr?: { widgets: { load: () => void } }
  }
}

export default function XEmbed() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [canScroll, setCanScroll] = useState(true)

  useEffect(() => {
    if (window.twttr) {
      window.twttr.widgets.load()
    } else {
      const script = document.createElement("script")
      script.src = "https://platform.twitter.com/widgets.js"
      script.async = true
      script.charset = "utf-8"
      document.body.appendChild(script)
    }
  }, [])

  // Track which slide is in view and whether the row overflows (controls hide when all slides fit)
  const update = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanScroll(el.scrollWidth > el.clientWidth + 4)
    const slides = Array.from(el.children) as HTMLElement[]
    let best = 0
    let bestDist = Infinity
    slides.forEach((s, i) => {
      const d = Math.abs(s.offsetLeft - el.offsetLeft - el.scrollLeft)
      if (d < bestDist) {
        bestDist = d
        best = i
      }
    })
    // At the far end the last slide may not reach the left edge, so snap the indicator to it
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) best = slides.length - 1
    setActive(best)
  }, [])

  useEffect(() => {
    update()
    const el = trackRef.current
    if (!el) return
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [update])

  const goTo = (i: number) => {
    const el = trackRef.current
    const slide = el?.children[i] as HTMLElement | undefined
    if (!el || !slide) return
    el.scrollTo({ left: slide.offsetLeft - el.offsetLeft, behavior: "smooth" })
  }

  const last = FEATURED_TWEET_URLS.length - 1

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-12 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">From X</span>
        {canScroll && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => goTo(Math.max(0, active - 1))}
              disabled={active === 0}
              aria-label="Previous post"
              className="p-2 rounded-full border border-white/10 bg-white/[0.06] text-foreground/70 hover:bg-white/[0.12] hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => goTo(Math.min(last, active + 1))}
              disabled={active === last}
              aria-label="Next post"
              className="p-2 rounded-full border border-white/10 bg-white/[0.06] text-foreground/70 hover:bg-white/[0.12] hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <div
        ref={trackRef}
        onScroll={update}
        className="mt-6 flex gap-6 overflow-x-auto snap-x snap-mandatory items-start [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {FEATURED_TWEET_URLS.map((url) => (
          <div key={url} className="snap-start shrink-0 w-full lg:w-[calc(50%-0.75rem)] flex justify-center">
            <blockquote className="twitter-tweet" data-theme="dark" data-dnt="true" data-align="center">
              <a href={url}>View on X</a>
            </blockquote>
          </div>
        ))}
      </div>

      {canScroll && (
        <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label="Featured posts">
          {FEATURED_TWEET_URLS.map((url, i) => (
            <button
              key={url}
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={active === i}
              aria-label={`Go to post ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${active === i ? "w-6 bg-accent" : "w-2 bg-white/25 hover:bg-white/40"}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
