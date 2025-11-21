"use client"

export default function HeroHome() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-contain"
        crossOrigin="anonymous"
        suppressHydrationWarning
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/synapse-6GkWZHBLR3B9YFKFnxnpOfFv0E4Hbm.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content wrapper */}
      <div className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="mx-auto max-w-4xl w-full">
          {/* Header badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border-2 border-accent bg-card/50 backdrop-blur-sm">
              <span className="text-sm font-medium text-muted-foreground">An Age of Distrust</span>
            </div>
          </div>

          {/* Main headline - Simple and powerful */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground text-center leading-tight mb-6 tracking-tight">
            Where AI and humanity <span className="font-semibold text-accent">connect</span>
            <br />
            <span 
              className="font-semibold text-accent"
              style={{
                textShadow: '0 0 20px rgba(217, 119, 6, 0.4), 0 0 40px rgba(217, 119, 6, 0.2)',
                filter: 'drop-shadow(0 0 8px rgba(217, 119, 6, 0.3))'
              }}
            >
              TRUST BEGINS
            </span>
          </h1>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row gap-8 justify-center mt-16 items-center">
            {/* Learn about SCL button */}
            <a
              href="#scl"
              className="px-6 py-3 rounded-md border border-border bg-primary text-primary-foreground font-light hover:opacity-90 transition-opacity text-center"
            >
              Learn about SCL
            </a>

            {/* Read our research button */}
            <a
              href="#research"
              className="px-6 py-3 rounded-md border border-border bg-transparent text-foreground font-light hover:bg-card/50 transition-colors text-center"
            >
              Read our research
            </a>
          </div>

          <p className="text-sm text-accent font-medium text-center max-w-xl mx-auto mt-8">
            Neurons connect through synapses to create thought
            <br />
            SCL connects your process to create clarity.
          </p>
        </div>
      </div>
    </section>
  )
}
