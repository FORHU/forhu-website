"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import HeroHome from "@/components/hero-home"
import PhilosophySection from "@/components/philosophy-section"
import SCLBrainVisualization from "@/components/scl-brain-visualization"
import SCLComparisonSection from "@/components/scl-comparison-section"
import ResearchSection from "@/components/research-section"
import AboutSection from "@/components/about-section"
import CTAFinal from "@/components/cta-final"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="overflow-hidden">
        <HeroHome />
        <PhilosophySection />
        <SCLBrainVisualization />
        <SCLComparisonSection />
        <ResearchSection />
        <AboutSection />
        <ContactSection />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  )
}
