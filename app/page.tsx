"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Hexagon from "@/components/hexagon"
import ForhuLogo from "@/components/forhu-logo"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <ForhuLogo className="h-10 w-10" animated={true} />
              <span className="text-xl font-bold text-foreground">FORHU</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#philosophy" className="text-sm hover:text-accent transition-colors duration-300">
                Philosophy
              </Link>
              <Link href="#scl" className="text-sm hover:text-accent transition-colors duration-300">
                SCL
              </Link>
              <Link href="#research" className="text-sm hover:text-accent transition-colors duration-300">
                Research
              </Link>
              <Link href="#about" className="text-sm hover:text-accent transition-colors duration-300">
                About
              </Link>
              <Button
                size="sm"
                className="rounded-full bg-accent hover:bg-accent/90 text-primary font-semibold shadow-lg shadow-accent/50 hover:shadow-xl hover:shadow-accent/70"
              >
                Contact
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="md:hidden">
              Menu
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Plasma Wave Design */}
      <section className="relative overflow-hidden px-4 py-32 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 via-transparent to-purple-500/5">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-accent/20 to-purple-500/10 rounded-full blur-3xl animate-plasma-wave" />
          <div
            className="absolute -bottom-1/2 left-1/3 w-96 h-96 bg-gradient-to-tr from-cyan-500/15 to-accent/5 rounded-full blur-3xl animate-plasma-wave"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-accent/2 via-transparent to-transparent animate-gradient-shift"
            style={{ backgroundSize: "200% 200%" }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl text-center z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 animate-pulse-ring shadow-lg shadow-accent/20 backdrop-blur-sm">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">An age of distrust</span>
          </div>

          <h1
            className="mb-8 text-5xl sm:text-7xl font-bold leading-tight text-pretty bg-gradient-to-r from-foreground via-accent to-purple-400 bg-clip-text text-transparent"
            style={{ animationDelay: "0.1s" }}
          >
            If you can't trust AI,
            <br />
            <span className="inline-block bg-gradient-to-r from-accent via-cyan-300 to-accent bg-clip-text text-transparent">
              redesign it.
            </span>
          </h1>

          <p
            className="mb-12 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-blur-in"
            style={{ animationDelay: "0.2s" }}
          >
            Billions of people ask AI questions every day. But not a single person fully trusts the answers. FORHU has
            given AI the structure of thought.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-accent to-cyan-400 hover:from-accent/90 hover:to-cyan-400/80 text-primary font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-accent/40 hover:shadow-2xl hover:shadow-accent/60 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                Witness the moment intelligence evolves
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-accent/80 drop-shadow-lg" />
        </div>
      </section>

      {/* Problem Section - Unique Problem Visualization */}
      <section className="border-t border-border/50 relative overflow-hidden bg-gradient-to-b from-background via-red-950/10 to-background">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-1/4 -left-40 w-80 h-80 bg-red-500/15 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/3 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute inset-0 opacity-50 animate-problem-background-pulse" />
        </div>

        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="problem-grid" x="60" y="60" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 0 0 L 60 0 L 60 60 L 0 60 Z" fill="none" stroke="rgba(255, 68, 68, 0.15)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#problem-grid)" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          {/* Main title with cracking animation */}
          <div className="mb-20">
            <h2 className="mb-8 text-5xl sm:text-7xl font-black leading-tight text-center">
              <span className="block text-foreground mb-4">Why is AI</span>
              <span
                className="block text-5xl sm:text-6xl animate-problem-text-crack"
                style={{
                  backgroundImage: "linear-gradient(to right, #ff4444 0%, #ff4444 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                NOT TRUSTWORTHY?
              </span>
            </h2>
            <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed italic">
              Traditional AI systems fail us because they lack the fundamental structure of real intelligence
            </p>
          </div>

          {/* Four problem pillars with unique animations */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: "🤔",
                title: "AI Answers, But It Does Not Think",
                description:
                  "It generates plausible text without reasoning. No verification. No consideration. Just pattern matching at scale.",
                key: 1,
                color: "from-red-500",
              },
              {
                icon: "❌",
                title: "It Does Not Verify",
                description:
                  "With no verification layer, errors pass through unchecked. AI produces confident lies without knowing it's lying.",
                key: 2,
                color: "from-orange-500",
              },
              {
                icon: "🧠",
                title: "It Does Not Remember",
                description:
                  "Every conversation starts fresh. No continuous learning. No experience accumulation. The same mistakes repeat infinitely.",
                key: 3,
                color: "from-yellow-500",
              },
              {
                icon: "🔄",
                title: "It Repeats Mistakes Endlessly",
                description:
                  "Without memory or accountability, errors compound. There's no mechanism to break the cycle of failure.",
                key: 4,
                color: "from-pink-500",
              },
            ].map((problem, idx) => (
              <div
                key={problem.key}
                className="group relative"
                style={{
                  animation: `problem-column-slide 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                  animationDelay: `${idx * 0.1}s`,
                  opacity: 0,
                }}
              >
                {/* Animated background glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-red-500/20 to-pink-500/10 transition-opacity duration-500 blur-xl" />

                {/* Main card with problem border */}
                <div className="relative rounded-2xl border-2 border-red-500/20 bg-gradient-to-br from-card/40 to-background/50 backdrop-blur-sm p-8 transition-all duration-500 group-hover:animate-problem-border-glow">
                  <div className="relative">
                    {/* Icon with shake animation */}
                    <div
                      className="mb-6 text-6xl transform transition-all duration-300 inline-block animate-problem-icon-shake group-hover:animate-problem-icon-shake"
                      style={{
                        animationDelay: `${idx * 0.15}s`,
                      }}
                    >
                      {problem.icon}
                    </div>

                    {/* Title with underline strike */}
                    <div className="relative mb-4">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-red-400 transition-colors duration-300">
                        {problem.title}
                      </h3>
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-red-500 to-pink-400 transition-all duration-500" />
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed group-hover:text-muted-foreground/95 transition-colors duration-300">
                      {problem.description}
                    </p>
                  </div>

                  {/* Accent corner dots */}
                  <div className="absolute top-0 right-0 w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

          {/* The immature intelligence revelation */}
          <div className="mt-20 pt-16 border-t border-red-500/30 relative">
            <div
              className="opacity-0 animate-slide-in-up"
              style={{
                animation: "slide-in-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                animationDelay: "0.4s",
              }}
            >
              <div className="rounded-2xl border-2 border-red-500/40 bg-gradient-to-r from-red-950/20 via-red-900/10 to-background p-12 backdrop-blur-md relative overflow-hidden">
                {/* Animated accent background */}
                <div className="absolute inset-0 opacity-30 animate-problem-background-pulse">
                  <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500/20 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 text-center">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Traditional LLMs handle judgment, execution, memory, and verification all at the same time.
                  </p>
                  <p className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
                    <span className="text-foreground">When errors occur, they don't know why. </span>
                    <span className="block text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 bg-clip-text mt-3 animate-problem-text-crack">
                      They repeat mistakes endlessly. They cannot explain themselves.
                    </span>
                  </p>
                  <p className="text-xl text-red-400 font-bold italic">This is the limit of immature intelligence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - 3D Card Design */}
      <section
        id="philosophy"
        className="border-t border-border/50 px-4 py-24 sm:px-6 lg:px-8 bg-gradient-to-b from-card/30 via-background to-transparent relative overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        <div className="absolute inset-0 opacity-40">
          {/* Animated flowing shapes */}
          <div className="absolute top-0 -left-40 w-96 h-96 bg-gradient-to-br from-accent/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-philosophy-bg-gradient-shift" />
          <div
            className="absolute bottom-1/3 -right-40 w-80 h-80 bg-gradient-to-tl from-cyan-400/15 to-accent/5 rounded-full blur-3xl animate-philosophy-bg-gradient-shift"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-500/15 to-transparent rounded-full blur-3xl animate-philosophy-bg-gradient-shift"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="philosophy-grid" x="60" y="60" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 0 0 L 60 0 L 60 60 L 0 60 Z" fill="none" stroke="rgba(0, 217, 255, 0.1)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#philosophy-grid)" />
          </svg>
        </div>

        <div className="mx-auto max-w-6xl relative z-10">
          {/* Enhanced header with flowing accent lines */}
          <div className="mb-16 text-center relative">
            {/* Top accent line */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse-ring" />

            <div
              className="mb-8 inline-flex items-center gap-3 rounded-full border-2 border-accent/40 bg-gradient-to-r from-accent/15 to-purple-500/15 px-6 py-3 backdrop-blur-md animate-philosophy-border-flow shadow-xl shadow-accent/20"
              style={{ backgroundSize: "200% 200%", backgroundPosition: "0% 50%" }}
            >
              <div className="w-2.5 h-2.5 bg-gradient-to-br from-accent to-cyan-300 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">The Philosophy</span>
              <div
                className="w-2.5 h-2.5 bg-gradient-to-br from-purple-400 to-accent rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>

            <h2
              className="text-5xl sm:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground via-accent to-cyan-300 bg-clip-text text-transparent animate-philosophy-text-glow"
              style={{
                animation:
                  "philosophy-text-glow 3s ease-in-out infinite, slide-in-down 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                animationDelay: "0s",
              }}
            >
              How AI for Humans <br /> Is Different
            </h2>

            {/* Bottom accent line */}
            <div className="absolute -bottom-12 left-0 right-0 mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-pulse-ring" />

            <p
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto italic opacity-0 animate-slide-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              FORHU sets the standard for human-centered, trustworthy AI at every level
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "AI is a Partner, Not a Tool",
                description:
                  "AI should expand human potential and serve as a safety net against mistakes. We don't build AI that replaces you.",
                icon: "👥",
                color: "from-cyan-400",
                delay: 0,
                number: "01",
                image: "/Ai is a Partner, Not a Tool.jpg"
              },
              {
                title: "Honest Engineering: Science, Not Magic",
                description:
                  "Untrustworthy intelligence is not intelligence. SCL separates and records every step of reasoning. Transparent thinking is where trust begins.",
                icon: "🔬",
                color: "from-purple-400",
                delay: 0.2,
                number: "02",
                image: "/Honest Engineering_ Science, Not Magic.jpg",
              },
              {
                title: "Hallucination Governance",
                description:
                  "Hallucinations are a natural byproduct of intelligence. SCL records mistakes and immediately verifies and corrects them.",
                icon: "✓",
                color: "from-cyan-300",
                delay: 0.4,
                number: "03",
                image: "/Hallucination Governance.jpg",
              },
            ].map((philosophy, idx) => (
              <div
                key={idx}
                className="group relative"
                style={{
                  animation: `philosophy-card-reveal 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                  animationDelay: `${philosophy.delay}s`,
                  opacity: 0,
                }}
              >
                {/* Animated background glow layers */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${philosophy.color} to-accent/20 opacity-20 blur-2xl`}
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-accent/15 via-transparent to-transparent blur-xl" />
                </div>

                {/* Main card with dynamic border and gradient background */}
                <div
                  className="relative rounded-3xl overflow-hidden border-2 backdrop-blur-xl p-8 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-accent/40 transform group-hover:-translate-y-4"
                  style={{
                    borderImage: `linear-gradient(135deg, rgba(0, 217, 255, 0.4), rgba(167, 139, 250, 0.3), rgba(0, 217, 255, 0.2)) 1`,
                    background: "linear-gradient(135deg, rgba(26, 26, 46, 0.6) 0%, rgba(26, 26, 46, 0.3) 100%)",
                  }}
                >
                  {/* Number badge - top right with rotation */}
                  <div className="absolute top-6 right-6 text-5xl font-black text-accent/15 group-hover:text-accent/40 transition-colors duration-300">
                    {philosophy.number}
                  </div>

                  <div className="relative z-10">
                    {/* Icon with orbit animation */}
                    <div className="mb-8 text-6xl transform transition-all duration-300 group-hover:scale-120 inline-block">
                      {philosophy.icon}
                    </div>

                    {/* Title with glow effect */}
                    <h3
                      className={`text-2xl font-bold mb-4 bg-gradient-to-r ${philosophy.color} to-accent bg-clip-text text-transparent group-hover:to-cyan-300 transition-all duration-300 animate-philosophy-text-glow`}
                      style={{
                        animationDelay: `${idx * 0.15}s`,
                      }}
                    >
                      {philosophy.title}
                    </h3>

                    {/* Decorative line that extends on hover */}
                    <div className="mb-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-accent via-purple-400 to-cyan-300 rounded-full transition-all duration-500 transform origin-left" />

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed group-hover:text-muted-foreground/95 transition-colors duration-300 mb-6">
                      {philosophy.description}
                    </p>

                    {/* Philosophy Image */}
                    {philosophy.image && (
                      <div className="mt-6 mb-6">
                        <Image
                          src={philosophy.image}
                          alt={philosophy.title}
                          width={800}
                          height={400}
                          className="rounded-lg shadow-lg w-full h-auto"
                          priority
                        />
                      </div>
                    )}

                    {/* Interactive CTA with arrow */}
                    <div className="flex items-center gap-2 text-accent font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                      <span className="text-sm">Explore</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Bottom shimmer effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-16 border-t border-accent/20 relative">
            <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse-ring" />

            <div
              className="text-center opacity-0 animate-slide-in-up"
              style={{
                animation: "slide-in-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                animationDelay: "0.6s",
              }}
            >
              <p className="text-lg text-muted-foreground italic leading-relaxed mb-8">
                These three principles work together to create AI that doesn't just perform—it{" "}
                <span className="text-accent font-semibold">thinks, explains, and learns</span>.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-sm hover:border-accent/80 hover:bg-accent/15 transition-all duration-300">
                <span className="text-sm font-semibold text-accent">Discover the SCL architecture</span>
                <ArrowRight className="h-4 w-4 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCL Section - Circuit Board Design */}
      <section id="scl" className="border-t border-border/50 px-4 py-8 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background with flowing particles */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div
            className="absolute inset-0 bg-gradient-to-br from-accent/10 via-purple-500/5 to-pink-500/5 animate-scl-flow"
            style={{ backgroundSize: "200% 200%" }}
          />

          {/* Flowing data particles */}
          <div
            className="absolute top-1/4 left-0 w-2 h-2 bg-accent rounded-full animate-data-flow opacity-60"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-1/3 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-data-flow opacity-50"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-2/3 left-1/2 w-2 h-2 bg-cyan-300 rounded-full animate-data-flow opacity-60"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-accent rounded-full animate-data-flow opacity-50"
            style={{ animationDelay: "3s" }}
          />
        </div>

        {/* Central rotating hexagon visualization */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none">
          <div className="relative w-full h-full animate-hex-rotate">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <Hexagon
                points="100,20 170,60 170,140 100,180 30,140 30,60"
                fill="none"
                stroke="url(#hexGradient)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(0, 217, 255, 0.5)" />
                  <stop offset="100%" stopColor="rgba(167, 139, 250, 0.5)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="mx-auto max-w-6xl relative z-10">
          {/* Header with animated title */}
          <div className="mb-20 text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-gradient-to-r from-accent/20 to-purple-500/20 px-6 py-3 animate-pulse-ring shadow-xl shadow-accent/30 backdrop-blur-md">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">
                The Intelligence Evolution
              </span>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>

            <h2
              className="text-5xl sm:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground via-accent to-cyan-300 bg-clip-text text-transparent animate-blur-in"
              style={{ animationDelay: "0.1s" }}
            >
              SCL
              <span className="block text-3xl sm:text-4xl font-light text-muted-foreground mt-2">
                Structured Cognitive Loop
              </span>
            </h2>

            <p
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-slide-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              A revolutionary cognitive architecture that gives AI the structure of human thought—reasoning,
              verification, memory, and self-correction working in perfect harmony.
            </p>
          </div>

          <div className="mb-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-2">
              {[
                {
                  step: 1,
                  label: "METAPROMPT",
                  role: "The Compass",
                  copy: "Defines purpose & direction",
                  icon: "🧭",
                  image: `/compasss.jpg`
                },
                {
                  step: 2,
                  label: "JUDGMENT",
                  role: "The Decision Maker",
                  copy: "Evaluates & chooses",
                  icon: "⚖️",
                  image: "/decision maker.jpg",
                },
                {
                  step: 3,
                  label: "RUNTIME",
                  role: "The Executor",
                  copy: "Executes the plan",
                  icon: "⚡",
                  image: "/executor.jpg"
                },
                {
                  step: 4,
                  label: "MEMORY",
                  role: "Experience Vault",
                  copy: "Records & learns",
                  icon: "🧠",
                  image: "/experience vault.jpg"
                },
                {
                  step: 5,
                  label: "CONTROL",
                  role: "Self-Checker",
                  copy: "Verifies & corrects",
                  icon: "✓",
                  image: "/self checker.jpg"
                },
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  {idx < 4 && (
                    <div
                      className="hidden md:block absolute left-full top-1/2 w-4 h-0.5 bg-gradient-to-r from-accent to-transparent transform -translate-y-1/2"
                      style={{ width: "calc(100% - 24px)" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent via-purple-400 to-transparent animate-data-flow opacity-70" />
                    </div>
                  )}

                  {/* Step card with unique hover effects */}
                  <div
                    className="rounded-2xl border border-accent/40 bg-gradient-to-br from-card/80 via-card/50 to-background/50 backdrop-blur-sm p-8 transition-all duration-500 group-hover:border-accent group-hover:shadow-2xl group-hover:shadow-accent/50 h-full transform group-hover:-translate-y-6 opacity-0 animate-pulse-expand"
                    style={{
                      animationDelay: `${idx * 0.15}s`,
                    }}
                  >
                    {/* Glow background on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-accent/10 to-purple-500/10 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10">
                      {/* Step number with rotating animation */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="text-5xl font-black text-accent/20 group-hover:text-accent/40 transition-colors duration-300 group-hover:animate-hex-rotate">
                          {String(item.step).padStart(2, "0")}
                        </div>
                        <div className="text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110 animate-pulse">
                          {item.icon}
                        </div>
                      </div>

                      {/* Label */}
                      <span className="text-xs font-bold text-accent/70 group-hover:text-accent transition-colors duration-300 uppercase tracking-wider block mb-2">
                        {item.label}
                      </span>

                      {/* Role */}
                      <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 mb-3">
                        {item.role}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/90 italic leading-relaxed">
                        {item.copy}
                      </p>

                      {/* SCL Step Image */}
                      <div className="mt-6 mb-6">
                        <Image
                          src={item.image}
                          alt={`${item.role} visualization`}
                          width={800}
                          height={400}
                          className="rounded-lg shadow-lg w-full h-auto"
                          priority
                        />
                      </div>

                      {/* Animated bottom accent line */}
                      <div className="mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-accent to-purple-400 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile connection indicator */}
            <div className="md:hidden flex justify-center mt-6 gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                  {i < 3 && <div className="w-3 h-0.5 bg-gradient-to-r from-accent to-transparent" />}
                </div>
              ))}
            </div>
          </div>

          {/* Removed SCL in Action video section */}

          <div
            className="rounded-2xl border border-accent/40 overflow-hidden opacity-0 animate-slide-in-left shadow-2xl shadow-accent/20 backdrop-blur-sm"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-accent/30 bg-gradient-to-r from-accent/15 via-purple-500/10 to-accent/5">
                    <th className="px-6 py-5 text-left font-bold text-accent text-sm uppercase tracking-wider">
                      Dimension
                    </th>
                    <th className="px-6 py-5 text-left font-semibold text-muted-foreground text-sm">Traditional AI</th>
                    <th className="px-6 py-5 text-left font-bold text-accent text-sm">SCL Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      category: "Architecture",
                      traditional: "Monolithic, all-in-one inference",
                      scl: "Separated cognitive layers, specialized roles",
                    },
                    {
                      category: "Error Recovery",
                      traditional: "No recovery mechanism",
                      scl: "Self-correction through control layer",
                    },
                    {
                      category: "Explainability",
                      traditional: "Black box reasoning",
                      scl: "Full transparency at each step",
                    },
                    {
                      category: "Learning",
                      traditional: "Static after training",
                      scl: "Continuous evolution from memory",
                    },
                    {
                      category: "Reliability",
                      traditional: "Probabilistic, unpredictable",
                      scl: "Structurally guaranteed performance",
                    },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-border/30 hover:bg-accent/8 transition group cursor-pointer"
                      style={{
                        animation: `fade-in-scale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                        animationDelay: `${0.5 + idx * 0.08}s`,
                        opacity: 0,
                      }}
                    >
                      <td className="px-6 py-4 font-bold text-foreground group-hover:text-accent transition duration-300">
                        {row.category}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground group-hover:text-muted-foreground/80 transition">
                        {row.traditional}
                      </td>
                      <td className="px-6 py-4 text-accent font-semibold group-hover:text-cyan-300/80 transition">
                        {row.scl}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section - Premium Card Morph Design */}
      <section
        id="research"
        className="border-t border-border/50 px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-b from-accent/30 to-transparent rounded-full blur-3xl animate-research-gradient-flow" />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-t from-purple-500/20 to-transparent rounded-full blur-3xl animate-research-gradient-flow"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Animated mesh lines */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="research-mesh" x="80" y="80" width="80" height="80" patternUnits="userSpaceOnUse">
                <path
                  d="M 0 0 L 80 0 L 80 80 L 0 80 Z"
                  fill="none"
                  stroke="rgba(0, 217, 255, 0.1)"
                  strokeWidth="1"
                  className="animate-research-gradient-flow"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#research-mesh)" />
          </svg>
        </div>

        <div className="mx-auto max-w-6xl relative z-10">
          <div
            className="text-center mb-24 opacity-0 animate-slide-in-down"
            style={{ animation: "slide-in-down 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards" }}
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-accent/50 bg-gradient-to-r from-accent/20 to-purple-500/15 px-6 py-3 backdrop-blur-md">
              <div className="w-2 h-2 bg-gradient-to-r from-accent to-cyan-300 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">
                Intelligence through Research
              </span>
              <div
                className="w-2 h-2 bg-gradient-to-r from-purple-400 to-accent rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground via-accent to-cyan-300 bg-clip-text text-transparent">
              Research & Insights
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto italic">
              "We don't just build technology. We study intelligence itself."
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "📄",
                title: "Whitepaper",
                description: "The foundation of our technology and the philosophy behind SCL",
                color: "from-accent",
                delay: 0,
                image: "/Whitepaper.jpg"
              },
              {
                icon: "🧠",
                title: "Hallucination Analysis",
                description: "Deep dive into the essence of AI hallucinations and how SCL prevents them",
                color: "from-purple-400",
                delay: 0.15,
                image: "/Hallucination Analysis.jpg"
              },
              {
                icon: "🚀",
                title: "Big Tech Strategy",
                description: "Where the giants are heading and why structured cognition is the future",
                color: "from-cyan-300",
                delay: 0.3,
                image: "/Big Tech Strategy.jpg"
              },
            ].map((research, idx) => (
              <Link
                key={idx}
                href="#"
                className="group"
                style={{
                  animation: `fade-in-scale 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                  animationDelay: `${research.delay}s`,
                  opacity: 0,
                }}
              >
                <div className="relative h-full">
                  {/* Animated background layers */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/8 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                  {/* Main card with morphing animation */}
                  <div
                    className={`relative rounded-3xl border-2 border-transparent bg-gradient-to-br from-card/60 via-card/40 to-background/30 backdrop-blur-xl p-8 h-full transform transition-all duration-500 overflow-hidden animate-research-card-morph group-hover:animate-research-border-glow group-hover:from-card/90 group-hover:via-card/70 group-hover:to-background/50`}
                    style={{
                      borderImage: `linear-gradient(135deg, rgba(0, 217, 255, 0.5), rgba(167, 139, 250, 0.3)) 1`,
                    }}
                  >
                    {/* Animated inner glow */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent/20 to-transparent rounded-full blur-2xl" />
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-500/15 to-transparent rounded-full blur-2xl" />
                    </div>

                    <div className="relative z-10">
                      {/* Icon with rotation animation */}
                      <div className="mb-6 text-6xl transform transition-all duration-300 group-hover:animate-research-icon-rotate inline-block">
                        {research.icon}
                      </div>

                      {/* Title with color gradient */}
                      <h3
                        className={`text-2xl font-bold mb-4 bg-gradient-to-r ${research.color} to-accent bg-clip-text text-transparent group-hover:to-cyan-300 transition-all duration-300`}
                      >
                        {research.title}
                      </h3>

                      {/* Description with pulsing animation */}
                      <p
                        className="text-muted-foreground leading-relaxed mb-6 group-hover:text-muted-foreground/95 transition-colors duration-300 animate-research-content-pulse"
                        style={{
                          animationDelay: `${research.delay * 1000}ms`,
                        }}
                      >
                        {research.description}
                      </p>

                      {/* Research Image */}
                      {research.image && (
                        <div className="mt-6 mb-8">
                          <Image
                            src={research.image}
                            alt={research.title}
                            width={800}
                            height={400}
                            className="rounded-lg shadow-lg w-full h-auto"
                            priority
                          />
                        </div>
                      )}

                      {/* Animated CTA line */}
                      <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all duration-300">
                        <span>Explore Research</span>
                        <ArrowRight className="h-5 w-5 transform group-hover:translate-x-3 transition-transform duration-300" />
                      </div>

                      {/* Bottom accent line with shimmer */}
                      <div className="mt-8 h-1 w-0 group-hover:w-full bg-gradient-to-r from-accent via-purple-400 to-cyan-300 rounded-full transition-all duration-500 animate-research-shimmer-wave group-hover:animate-research-shimmer-wave" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Breathing Typography Design */}
      <section id="about" className="border-t border-border/50 px-4 py-24 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-t from-accent/8 to-transparent opacity-50 animate-morphing"
          style={{ animationDuration: "16s" }}
        />
        <div className="absolute -top-40 right-1/3 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-orbit opacity-40" />

        <div className="mx-auto max-w-4xl text-center relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 animate-fade-in-scale shadow-lg shadow-accent/20 backdrop-blur-sm">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">THE PEOPLE BEHIND FORHU</span>
          </div>
          <h2
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-cyan-300 bg-clip-text text-transparent opacity-0 animate-slide-in-right animate-gentle-breathe"
            style={{ animationDelay: "0.1s" }}
          >
            FOR HUMAN
          </h2>
          <p
            className="text-lg text-muted-foreground leading-relaxed mb-6 opacity-0 animate-slide-in-left animate-gentle-breathe"
            style={{ animationDelay: "0.2s" }}
          >
            FORHU stands for FOR HUMAN—because our mission begins and ends with humanity. We envision AI that extends
            human capability while safeguarding human dignity. Structured cognition (SCL) is the foundation for
            trustworthy, human-centered intelligence.
          </p>
          <div className="grid gap-8 md:grid-cols-3 mt-12">
            {[
              { label: "Mission/Vision", description: "Extend human capability while safeguarding human dignity" },
              { label: "Philosophy", description: "Structured cognition as the foundation for trustworthy AI" },
              { label: "Team", description: "Builders and thinkers who turn this vision into reality" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="opacity-0 animate-fade-in-scale animate-gentle-breathe"
                style={{
                  animation: `fade-in-scale 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, gentle-breathe 3s ease-in-out infinite`,
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                <h4 className="font-bold text-accent mb-2 hover:text-cyan-300 transition-colors duration-300">
                  {item.label}
                </h4>
                <p className="text-muted-foreground text-sm group-hover:text-muted-foreground/90 transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Meet the Builders Section */}
          <div className="mt-24 pt-16 border-t border-accent/30">
            <h3 className="text-2xl font-bold mb-12 text-foreground">Meet the Builders</h3>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  name: "Alex Chen",
                  role: "Founder & Chief Visionary",
                  icon: "🧠",
                  color: "from-cyan-400",
                  delay: 0,
                },
                {
                  name: "Jordan Silva",
                  role: "AI Architecture Lead",
                  icon: "⚙️",
                  color: "from-purple-400",
                  delay: 0.1,
                },
                {
                  name: "Morgan Blake",
                  role: "Research Director",
                  icon: "🔬",
                  color: "from-cyan-300",
                  delay: 0.2,
                },
                {
                  name: "Casey Park",
                  role: "Engineering Lead",
                  icon: "⚡",
                  color: "from-cyan-400",
                  delay: 0.3,
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="group relative"
                  style={{
                    animation: `team-card-reveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                    animationDelay: `${member.delay}s`,
                    opacity: 0,
                  }}
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-accent/20 to-purple-500/10 transition-opacity duration-500 blur-xl" />

                  {/* Main card */}
                  <div className="relative rounded-2xl border border-accent/30 bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-sm p-6 hover:border-accent/80 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/40 transform group-hover:scale-105 group-hover:-translate-y-2">
                    {/* Icon badge with floating animation */}
                    <div className="relative mb-6 flex justify-center">
                      <div
                        className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${member.color} to-accent/30 flex items-center justify-center text-5xl animate-team-icon-float animate-team-badge-pulse shadow-lg shadow-accent/30 overflow-hidden`}
                        style={{
                          animationDelay: `${member.delay * 1000}ms`,
                        }}
                      >
                        {/* Rotating background accent */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                        <span className="relative z-10">{member.icon}</span>
                      </div>
                    </div>

                    {/* Member info */}
                    <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-sm text-muted-foreground group-hover:text-cyan-300/80 transition-colors duration-300 italic">
                      {member.role}
                    </p>

                    {/* Animated bottom accent line */}
                    <div className="mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-accent to-purple-400 transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Electric Pulse Design */}
      <section className="border-t border-border/50 px-4 py-24 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-r from-accent/15 via-purple-500/10 to-transparent">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-glow-pulse opacity-50" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float opacity-40"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute inset-0 opacity-20 animate-gradient-shift"
          style={{
            backgroundSize: "200% 200%",
            background: "linear-gradient(45deg, rgba(0, 217, 255, 0.1), rgba(167, 139, 250, 0.1))",
          }}
        />

        <div className="mx-auto max-w-4xl text-center relative z-10">
          <h2
            className="mb-4 text-4xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent opacity-0 animate-slide-in-left animate-electric-pulse"
            style={{ animationDelay: "0s" }}
          >
            3-Line Summary
          </h2>
          <p
            className="mb-12 text-lg text-muted-foreground leading-relaxed opacity-0 animate-slide-in-right animate-electric-pulse"
            style={{ animationDelay: "0.1s" }}
          >
            In an age where AI cannot be trusted, FORHU has given AI the structure of thought. Now, AI thinks,
            remembers, and corrects itself.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-scale"
            style={{
              animation: "fade-in-scale 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
              animationDelay: "0.2s",
            }}
          >
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-accent to-cyan-400 hover:from-accent/90 hover:to-cyan-400/80 text-primary font-semibold hover:shadow-2xl hover:shadow-accent/50 transform hover:scale-110 transition-all shadow-xl shadow-accent/40 animate-electric-pulse"
            >
              Stop Doubting AI <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-accent/60 text-accent hover:bg-accent/15 bg-transparent transform hover:scale-110 transition-all hover:shadow-lg hover:shadow-accent/40 hover:border-accent hover:animate-electric-pulse"
            >
              Build the Future with FORHU
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-gradient-to-b from-card/30 to-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center shadow-lg shadow-accent/40">
                  <span className="text-primary font-bold text-xs">F</span>
                </div>
                <span className="font-bold text-accent">FORHU</span>
              </div>
              <p className="text-sm text-muted-foreground">For human intelligence, by design.</p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#scl" className="hover:text-accent transition-colors duration-300">
                    SCL
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-accent transition-colors duration-300">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-accent transition-colors duration-300">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#about" className="hover:text-accent transition-colors duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#research" className="hover:text-accent transition-colors duration-300">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-accent transition-colors duration-300">
                    News
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-accent transition-colors duration-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-accent transition-colors duration-300">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-accent transition-colors duration-300">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/30 pt-8">
            <p className="text-center text-sm text-muted-foreground">© 2025 FORHU. We stand for FOR HUMAN.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
