"use client"
import { useEffect, useRef, useState } from "react"

interface AboutItem {
  title: string
  description: string
  icon: string
}

const aboutItems: AboutItem[] = [
  {
    title: "Mission/Vision",
    description: "We envision AI that extends human capability while safeguarding human dignity.",
    icon: "🎯",
  },
  {
    title: "Philosophy",
    description: "Structured cognition (SCL) as the foundation for trustworthy, human-centered intelligence.",
    icon: "🧬",
  },
  {
    title: "Team",
    description: "Builders and thinkers who turn this vision into reality.",
    icon: "👨‍💻",
  },
  {
    title: "Contact",
    description: "We invite partners who share our belief in human-first AI.",
    icon: "✉️",
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
    <section id="about" className="relative py-32 px-6 bg-gradient-to-b from-background to-background/50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main heading */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-mono uppercase tracking-widest">ABOUT</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground mb-8">
            The People and Philosophy Behind FORHU
          </h2>
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 rounded-xl p-8 backdrop-blur-sm">
            <p className="text-xl text-foreground font-semibold mb-4">
              "FORHU stands for FOR HUMAN—because our mission begins and ends with humanity."
            </p>
            <p className="text-foreground/70">
              FORHU is not just a company name. It is a declaration: technology must serve people, not the other way
              around.
            </p>
          </div>
        </div>

        {/* Grid of items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemRefs.current[index] = el
              }}
              className={`group p-8 rounded-xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm transition-all duration-700 transform ${
                visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } hover:border-accent/50 hover:bg-gradient-to-br hover:from-accent/10 hover:to-transparent hover:shadow-[0_0_30px_rgba(0,217,255,0.2)]`}
              style={{
                transitionDelay: visibleItems[index] ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-foreground/70 group-hover:text-foreground/80 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
