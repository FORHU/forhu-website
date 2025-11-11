"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import HeroHome from "@/components/hero-home"
import PhilosophySection from "@/components/philosophy-section"
import SCLLoopSection from "@/components/scl-loop-section"
import SCLComparisonSection from "@/components/scl-comparison-section"
import ResearchSection from "@/components/research-section"
import AboutSection from "@/components/about-section"
import CTAFinal from "@/components/cta-final"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="overflow-hidden">
        <HeroHome />
        <PhilosophySection />
        <SCLLoopSection />
        <SCLComparisonSection />
        <ResearchSection />
        <AboutSection />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  )
}
