"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const articles = [
  {
    publication: "TechBullion",
    headline: "FORHU at VivaTech: SCL (Structured Cognitive Loop) Glassbox AI via Smart Mirror for the EU AI Act",
    excerpt: "FORHU unveiled its SCL architecture at VivaTech, representing a shift from opaque AI to auditable Glassbox AI — ensuring AI judgments are grounded in verified, traceable facts.",
    date: "2026-06-08",
    url: "https://techbullion.com/forhu-at-vivatech-scl-structured-cognitive-loop-glassbox-ai-via-smart-mirror-for-the-eu-ai-act/",
  },
  {
    publication: "Newsicons",
    headline: "Transparency in AI: How SCL (Structured Cognitive Loops) are Redefining Trust",
    excerpt: "SCL is engineered to ensure its reasoning processes are explicit, auditable, and traceable from input to output — a paradigm shift from black-box AI that raises serious concerns about accountability.",
    date: "2026-06-08",
    url: "https://newsicons.com/article/2026-06-08-transparency-ai-how-scl-structured",
  },
  {
    publication: "SkyBluePrime",
    headline: "What Is SCL? The Structured Cognitive Loop Behind Trustworthy, Glassbox AI",
    excerpt: "SCL is a glass-box approach to AI: a system designed so its reasoning is visible, traceable, and auditable from input to output — thinking deliberately before it answers, not just fast.",
    date: "2026-06-08",
    url: "https://skyblueprime.com/article/2026-06-08-what-scl-structured-cognitive-loop",
  },
  {
    publication: "EIN Presswire",
    headline: "SCL (Structured Cognitive Loop): Unveiling the 'Architecture of Trust' as FORHU Unveils GlassboxAI at VivaTech",
    excerpt: "FORHU introduced its Structured Cognitive Loop technology at VivaTech 2026, positioning it as a transparent AI framework designed to meet EU AI Act requirements through traceable decision-making.",
    date: "2026-06-08",
    url: "https://www.einpresswire.com/article/917804745/scl-structured-cognitive-loop-unveiling-the-architecture-of-trust-as-forhu-unveils-glassboxai-at-vivatech",
  },
  {
    publication: "IssueWire",
    headline: "SCL (Structured Cognitive Loop): Unveiling the 'Architecture of Trust' as FORHU Unveils GlassboxAI at VivaTech",
    excerpt: "FORHU presented a transparent AI system at VivaTech designed to meet EU AI Act requirements through fully auditable, traceable decision-making processes.",
    date: "2026-06-09",
    url: "https://www.issuewire.com/scl-structured-cognitive-loop-unveiling-the-architecture-of-trust-as-forhu-unveils-glassboxai-at-vivatech-1867414099197194",
  },
  {
    publication: "La Vague Tech",
    headline: "La Révolution de l'Intelligence Artificielle : Vers une Transparence Inédite avec le SCL",
    excerpt: "Le SCL adopte une approche de 'boîte transparente' offrant visibilité, traçabilité et audit des raisonnements — là où les systèmes classiques cachent leurs processus décisionnels.",
    date: "2026-06-08",
    url: "https://lavaguetech.com/article/2026-06-08-la-r%C3%A9volution-de-l-intelligence",
  },
  {
    publication: "Minute Info",
    headline: "SCL : l'Architecture Cognitive qui Redéfinit la Confiance dans l'Intelligence Artificielle",
    date: "2026-06-08",
    url: "https://minuteinfo.fr/scl-larchitecture-cognitive-qui-redefinit-la-confiance-dans-lintelligence-artificielle/",
  },
  {
    publication: "IssueWire",
    headline: "FORHU at VivaTech: SCL (Structured Cognitive Loop) Glassbox AI via Smart Mirror for the EU AI Act",
    excerpt: "FORHU Inc. unveiled its Structured Cognitive Loop architecture at VivaTech 2026 — a fully traceable and auditable system shifting AI from opaque decisions to transparent, verifiable reasoning.",
    date: "2026-06-04",
    url: "https://www.issuewire.com/forhu-at-vivatech-scl-structured-cognitive-loop-glassbox-ai-via-smart-mirror-for-the-eu-ai-act-1867045939298699",
  },
]

const looped = [...articles, ...articles]

function ArticleCard({ article }: { article: typeof articles[0] }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = (e.clientX - rect.left) / rect.width - 0.5
    const cy = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: cy * -12, y: cx * 12 })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      className="group flex flex-col w-72 flex-shrink-0 bg-white/[0.09] border border-white/8 backdrop-blur-sm shadow-lg shadow-black/30 rounded-2xl p-6 cursor-pointer hover:border-accent/35 hover:bg-white/[0.13] hover:shadow-accent/15 hover:shadow-xl"
    >
      <span className="text-accent text-xs font-semibold uppercase tracking-widest">
        {article.publication}
      </span>

      <h3 className="mt-2 text-foreground font-bold text-base leading-snug flex-1 line-clamp-3">
        {article.headline}
      </h3>

      {article.excerpt && (
        <p className="mt-3 text-muted-foreground text-sm line-clamp-2">
          {article.excerpt}
        </p>
      )}

      <div className="mt-5 flex items-center justify-between">
        {article.date && (
          <time dateTime={article.date} className="text-muted-foreground text-xs">
            {new Date(article.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
        )}
        <span className="ml-auto flex items-center gap-1.5 text-accent text-sm font-medium group-hover:translate-x-0.5 transition-transform duration-200">
          Read
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </span>
      </div>
    </motion.a>
  )
}

export default function PressSection() {
  const [paused, setPaused] = useState(false)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Forhu AI in the News",
    itemListElement: articles.map((article, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "NewsArticle",
        headline: article.headline,
        url: article.url,
        publisher: { "@type": "Organization", name: article.publication },
        ...(article.date ? { datePublished: article.date } : {}),
      },
    })),
  }

  return (
    <section id="press" className="py-16 sm:py-24 overflow-hidden">
      {/* JSON-LD for AI/search crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hidden list keeps all links indexable even as a client component */}
      <ul className="sr-only">
        {articles.map((a) => (
          <li key={a.url}>
            <a href={a.url} target="_blank" rel="noopener noreferrer">
              {a.headline} — {a.publication}
            </a>
          </li>
        ))}
      </ul>

      {/* Section header */}
      <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6 lg:px-8">
        <p className="text-accent uppercase tracking-[0.25em] text-sm font-semibold mb-3">
          Press &amp; Media
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          In the News
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          Forhu and the Structured Cognitive Loop are gaining coverage
          from news outlets and media platforms around the world.
        </p>
      </div>

      {/* Infinite scrolling marquee */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left fade edge */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
        {/* Right fade edge */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div
          className="flex gap-6 w-max"
          style={{
            animation: "press-marquee 40s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {looped.map((article, i) => (
            <ArticleCard key={`${article.url}-${i}`} article={article} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes press-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
