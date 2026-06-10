"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

const PAGE_SIZE = 10

const articles = [
  {
    publication: "TechBullion",
    headline: "FORHU at VivaTech: SCL (Structured Cognitive Loop) Glassbox AI via Smart Mirror for the EU AI Act",
    date: "2026-06-08",
    url: "https://techbullion.com/forhu-at-vivatech-scl-structured-cognitive-loop-glassbox-ai-via-smart-mirror-for-the-eu-ai-act/",
  },
  {
    publication: "Newsicons",
    headline: "Transparency in AI: How SCL (Structured Cognitive Loops) are Redefining Trust",
    date: "2026-06-08",
    url: "https://newsicons.com/article/2026-06-08-transparency-ai-how-scl-structured",
  },
  {
    publication: "SkyBluePrime",
    headline: "What Is SCL? The Structured Cognitive Loop Behind Trustworthy, Glassbox AI",
    date: "2026-06-08",
    url: "https://skyblueprime.com/article/2026-06-08-what-scl-structured-cognitive-loop",
  },
  {
    publication: "EIN Presswire",
    headline: "SCL (Structured Cognitive Loop): Unveiling the 'Architecture of Trust' as FORHU Unveils GlassboxAI at VivaTech",
    date: "2026-06-08",
    url: "https://www.einpresswire.com/article/917804745/scl-structured-cognitive-loop-unveiling-the-architecture-of-trust-as-forhu-unveils-glassboxai-at-vivatech",
  },
  {
    publication: "IssueWire",
    headline: "SCL: Unveiling the 'Architecture of Trust' as FORHU Unveils GlassboxAI at VivaTech",
    date: "2026-06-09",
    url: "https://www.issuewire.com/scl-structured-cognitive-loop-unveiling-the-architecture-of-trust-as-forhu-unveils-glassboxai-at-vivatech-1867414099197194",
  },
  {
    publication: "La Vague Tech",
    headline: "La Révolution de l'Intelligence Artificielle : Vers une Transparence Inédite avec le SCL",
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
    date: "2026-06-04",
    url: "https://www.issuewire.com/forhu-at-vivatech-scl-structured-cognitive-loop-glassbox-ai-via-smart-mirror-for-the-eu-ai-act-1867045939298699",
  },
  {
    publication: "Planet Actu",
    headline: "Why the future of artificial intelligence relies on GlassboxAI models",
    date: "2026-06-05",
    url: "https://planeteactu.fr/pourquoi-lavenir-de-lintelligence-artificielle-repose-sur-les-modeles-glassboxai/",
  },
  {
    publication: "TMCENT",
    headline: "FORHU at VivaTech: SCL Structured Cognitive Loop Glassbox AI via Smart Mirror for the EU AI Act",
    date: "2026-06-04",
    url: "https://tmcent.net/press-release/2026-06-04/33546/forhu-at-vivatech-scl-structured-cognitive-loop-glassbox-ai-via-smart-mirror-for-the-eu-ai-act",
  },
  {
    publication: "Advancefuturerobo",
    headline: "FORHU at VivaTech: SCL Structured Cognitive Loop Glassbox AI via Smart Mirror for the EU AI Act",
    date: "2026-06-04",
    url: "https://advancefuturerobo.com/press-release/2026-06-04/33583/forhu-at-vivatech-scl-structured-cognitive-loop-glassbox-ai-via-smart-mirror-for-the-eu-ai-act",
  },
  {
    publication: "Advanture Brand News",
    headline: "FORHU at VivaTech: SCL Structured Cognitive Loop Glassbox AI via Smart Mirror for the EU AI Act",
    date: "2026-06-04",
    url: "https://advanture.brandingnews.net/press-release/2026-06-04/33524/forhu-at-vivatech-scl-structured-cognitive-loop-glassbox-ai-via-smart-mirror-for-the-eu-ai-act",
  },
  {
    publication: "Market Business News",
    headline: "FORHU at VivaTech: SCL Structured Cognitive Loop Glassbox AI via Smart Mirror for the EU AI Act",
    date: "2026-06-04",
    url: "https://www.marketbusinessnews.com/forhu-at-vivatech-scl-structured-cognitive-loop-glassbox-ai-via-smart-mirror-for-the-eu-ai-act/705510/",
  }

]

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const } },
}

const MotionLi = motion.li

export default function PressSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(articles.length / PAGE_SIZE)
  const visible = articles.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

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
    <section id="press" className="py-16 sm:py-24" ref={ref}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ul className="sr-only">
        {articles.map((a) => (
          <li key={a.url}>
            <a href={a.url} target="_blank" rel="noopener noreferrer">
              {a.headline} — {a.publication}
            </a>
          </li>
        ))}
      </ul>

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.ul
          variants={listVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="rounded-2xl border border-white/8 bg-white/[0.06] backdrop-blur-md overflow-hidden divide-y divide-white/[0.06]"
        >
          {visible.map((article) => (
            <MotionLi key={article.url} variants={itemVariants}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1.5 px-5 py-4 hover:bg-white/[0.05] transition-colors duration-150 focus:outline-none focus-visible:bg-white/[0.05] cursor-pointer"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                    {article.publication}
                  </span>
                  <time
                    dateTime={article.date}
                    className="text-muted-foreground text-xs tabular-nums flex-shrink-0"
                  >
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <span className="flex items-start gap-1.5 text-foreground/85 text-sm leading-snug group-hover:text-accent transition-colors duration-150">
                  <span>{article.headline}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-accent text-xs font-semibold mt-0.5 opacity-60 hover:opacity-100 transition-opacity duration-150">
                  View Release <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </span>
              </a>
            </MotionLi>
          ))}
        </motion.ul>

        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6 px-1">
            <button
              onClick={() => { setPage((p) => Math.max(0, p - 1)); ref.current?.scrollIntoView({ behavior: "smooth", block: "start" }) }}
              disabled={page === 0}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/8 bg-white/[0.06] text-sm text-foreground/70 hover:bg-white/[0.1] hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-150"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <span className="text-muted-foreground text-xs tabular-nums">
              {page + 1} / {totalPages}
            </span>

            <button
              onClick={() => { setPage((p) => Math.min(totalPages - 1, p + 1)); ref.current?.scrollIntoView({ behavior: "smooth", block: "start" }) }}
              disabled={page === totalPages - 1}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/8 bg-white/[0.06] text-sm text-foreground/70 hover:bg-white/[0.1] hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-150"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
