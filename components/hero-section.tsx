import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl opacity-20" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-block rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-accent">
          ✨ Advancing AI Science
        </div>

        <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
          The Future of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
            AI Research
          </span>
        </h1>

        <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          Forhu is a leading research institute dedicated to advancing artificial intelligence through rigorous academic
          inquiry, groundbreaking discoveries, and responsible innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Explore Our Research
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>

        {/* Decorative Element */}
        <div className="mt-16 relative h-64 sm:h-80 rounded-lg overflow-hidden border border-border bg-card/30">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 mb-4">
                <div className="h-8 w-8 rounded-full border-2 border-accent" />
              </div>
              <p className="text-sm text-muted-foreground">AI Research Hub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
