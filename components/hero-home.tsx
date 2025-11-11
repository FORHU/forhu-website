"use client"
import { useEffect, useRef } from "react"

export default function HeroHome() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && textRef.current) {
        textRef.current.style.animation = "fadeInUp 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"
      }
    })

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-background/80"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div ref={textRef} className="relative z-10 text-center px-6 max-w-4xl mx-auto" style={{ opacity: 0 }}>
        {/* Section label */}
        <div className="mb-8 inline-block">
          <span className="text-accent text-sm font-mono uppercase tracking-widest animate-fade-in">
            HOME: An Age of Distrust
          </span>
        </div>

        {/* Main headline with staggered animation */}
        <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground via-accent to-foreground animate-gradient-shift">
            If you can't trust AI,
          </span>
          <span
            className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#a855f7] to-accent mt-3 animate-gradient-shift"
            style={{ animationDelay: "0.2s" }}
          >
            then redesign it.
          </span>
        </h1>

        {/* Subcopy with reveal animation */}
        <div className="max-w-2xl mx-auto mb-12 space-y-4 text-lg text-foreground/70">
          <p className="animate-fade-in-delay" style={{ animationDelay: "0.4s" }}>
            Billions of people ask AI questions every day.
          </p>
          <p className="animate-fade-in-delay" style={{ animationDelay: "0.6s" }}>
            But not a single person fully trusts the answers.
          </p>
          <p className="text-foreground font-semibold mt-6 animate-fade-in-delay" style={{ animationDelay: "0.8s" }}>
            Why is that?
          </p>
        </div>

        {/* The problem statement */}
        <div className="bg-foreground/5 border border-accent/20 rounded-xl p-8 mb-12 backdrop-blur-sm">
          <div className="space-y-3 text-foreground/80 mb-6 animate-fade-in-delay" style={{ animationDelay: "1s" }}>
            <p>AI answers, but it does not think.</p>
            <p>It does not verify. It does not remember.</p>
            <p className="text-accent font-semibold">It repeats the same mistakes.</p>
          </div>
        </div>

        {/* The solution */}
        <div className="space-y-6 mb-12 animate-fade-in-delay" style={{ animationDelay: "1.2s" }}>
          <p className="text-2xl font-semibold text-foreground">FORHU has given AI the structure of thought.</p>
          <p className="text-xl text-foreground/70">To judge, to act, to remember, to verify—</p>
          <p className="text-3xl font-bold text-accent">AI that thinks like a human: SCL.</p>
        </div>

        {/* The benefit */}
        <div
          className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 rounded-xl p-8 mb-12 backdrop-blur-sm animate-fade-in-delay"
          style={{ animationDelay: "1.4s" }}
        >
          <p className="text-lg text-foreground mb-2">Now, AI doesn't just give answers,</p>
          <p className="text-2xl font-semibold text-accent">it explains why that answer is correct.</p>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-delay"
          style={{ animationDelay: "1.6s" }}
        >
          <a
            href="#scl-loop"
            className="px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
          >
            Witness the moment intelligence evolves
          </a>
          <a
            href="#research"
            className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
          >
            Download the Whitepaper (Free)
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDelay {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }

        .animate-fade-in {
          animation: fadeInDelay 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-delay {
          animation: fadeInDelay 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient-shift {
          background-size: 200% center;
          animation: gradientShift 6s ease infinite;
        }
      `}</style>
    </section>
  )
}
