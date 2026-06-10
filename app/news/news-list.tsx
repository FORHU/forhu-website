"use client"

import { useState } from "react"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const PAGE_SIZE = 10

type Article = {
  publication: string
  headline: string
  date: string
  url: string
}

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.04 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const } },
}

const MotionLi = motion.li

export default function NewsList({ articles }: { articles: Article[] }) {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(articles.length / PAGE_SIZE)
  const visible = articles.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  const goTo = (next: number) => {
    setPage(next)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="rounded-2xl border border-white/8 bg-white/[0.06] backdrop-blur-md overflow-hidden divide-y divide-white/[0.06]"
        aria-label="Press coverage articles"
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
              <span className="text-foreground/85 text-sm leading-snug">
                {article.headline}
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
            onClick={() => goTo(Math.max(0, page - 1))}
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
            onClick={() => goTo(Math.min(totalPages - 1, page + 1))}
            disabled={page === totalPages - 1}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/8 bg-white/[0.06] text-sm text-foreground/70 hover:bg-white/[0.1] hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-150"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  )
}
