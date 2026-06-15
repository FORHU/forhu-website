"use client"

import { useEffect } from "react"

// ── Change this URL to swap the featured post ──
const FEATURED_TWEET_URL = "https://x.com/forhuai/status/2061787414243455416"

declare global {
  interface Window {
    twttr?: { widgets: { load: () => void } }
  }
}

export default function XEmbed() {
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

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-12 max-w-7xl mx-auto">
      <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">From X</span>
      <div className="mt-6 flex justify-center">
        <blockquote className="twitter-tweet" data-theme="dark" data-dnt="true" data-align="center">
          <a href={FEATURED_TWEET_URL}>View on X</a>
        </blockquote>
      </div>
    </section>
  )
}
