"use client"
import { useEffect, useRef, useState } from "react"

interface AboutItem {
  title: string
  description: string
}

const aboutItems: AboutItem[] = [
  {
    title: "Mission & Vision",
    description: "We envision AI that extends human capability while safeguarding human dignity.",
  },
  {
    title: "Philosophy",
    description: "Structured Cognitive Loop (SCL) as the foundation for trustworthy, human-centered intelligence.",
  },
  {
    title: "Team",
    description: "Builders and thinkers who turn this vision into reality.",
  },
]

export default function AboutSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        },
        { threshold: 0.2 },
      )

      if (ref) observer.observe(ref)
      return observer
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <section id="about" className="relative py-16 sm:py-32 px-4 sm:px-6 bg-background font-poppins">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main heading */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="text-accent text-xs sm:text-sm font-bold uppercase tracking-widest">ABOUT US</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 text-foreground mb-6 sm:mb-8 leading-tight">
            The People and Philosophy <br /> Behind FORHU
          </h2>
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-lg sm:text-xl md:text-2xl text-foreground font-medium mb-4 sm:mb-6 leading-relaxed">
              "FORHU stands for FOR HUMAN—because our mission begins and ends with humanity."
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              FORHU is not just a company name. It is a declaration: technology must serve people, not the other way
              around.
            </p>
          </div>
        </div>

        {/* Grid of items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemRefs.current[index] = el
              }}
              className={`group p-6 sm:p-8 md:p-10 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-700 transform ${visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } hover:border-accent/30 hover:bg-card/50 hover:shadow-2xl hover:-translate-y-1`}
              style={{
                transitionDelay: visibleItems[index] ? `${index * 150}ms` : "0ms",
              }}
            >
              <div className="h-1 w-12 bg-accent/50 mb-6 sm:mb-8 rounded-full group-hover:w-20 transition-all duration-500"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg group-hover:text-foreground/80 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
