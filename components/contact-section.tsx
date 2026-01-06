"use client"

import { Mail } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-foreground mb-8">Get in Touch</h2>
        <div className="flex flex-col items-center justify-center space-y-6 p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
          <div className="p-4 rounded-full bg-accent/10 text-accent">
            <Mail className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <p className="text-lg text-muted-foreground">
              Have questions or want to collaborate? Reach out to us directly at:
            </p>
            <a
              href="mailto:support@forhu.ai"
              className="text-2xl font-semibold text-foreground hover:text-accent transition-colors block mt-2"
            >
              support@forhu.ai
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
