import type { Metadata } from "next"
import NewsList from "./news-list"

export const metadata: Metadata = {
  title: "Forhu AI in the News | Press Coverage & Media",
  description:
    "Read the latest press coverage of Forhu AI and the Structured Cognitive Loop (SCL). Global media coverage of GlassboxAI, VivaTech 2026, and the EU AI Act.",
  alternates: { canonical: "https://forhu.ai/news" },
  openGraph: {
    title: "Forhu AI in the News | Press Coverage & Media",
    description:
      "Global press coverage of Forhu AI and the Structured Cognitive Loop — the transparent AI architecture built for the EU AI Act era.",
    url: "https://forhu.ai/news",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forhu AI in the News",
    description:
      "Global press coverage of Forhu AI and the Structured Cognitive Loop (SCL).",
  },
}

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
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://forhu.ai" },
        { "@type": "ListItem", position: 2, name: "News", item: "https://forhu.ai/news" },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": "https://forhu.ai/news",
      name: "Forhu AI in the News",
      description:
        "Press coverage of Forhu AI, the Structured Cognitive Loop (SCL), and GlassboxAI from media outlets worldwide.",
      url: "https://forhu.ai/news",
      publisher: {
        "@type": "Organization",
        name: "Forhu AI",
        url: "https://forhu.ai",
        founder: {
          "@type": "Person",
          name: "Jungkwan Shin",
          jobTitle: "Chief Executive Officer",
          worksFor: { "@type": "Organization", name: "Forhu AI" },
        },
      },
      mainEntity: {
        "@type": "ItemList",
        name: "Forhu AI Press Coverage",
        numberOfItems: articles.length,
        itemListElement: articles.map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "NewsArticle",
            headline: a.headline,
            url: a.url,
            datePublished: a.date,
            publisher: { "@type": "Organization", name: a.publication },
            about: {
              "@type": "Organization",
              name: "Forhu AI",
              url: "https://forhu.ai",
            },
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is the CEO of Forhu AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jungkwan Shin is the CEO and founder of Forhu AI. He leads the development of the Structured Cognitive Loop (SCL), Forhu's transparent AI architecture designed for EU AI Act compliance.",
          },
        },
        {
          "@type": "Question",
          name: "Who founded Forhu AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Forhu AI was founded by Jungkwan Shin, who serves as the company's CEO. FORHU stands for FOR HUMAN — the mission to build AI that extends human capability while safeguarding human dignity.",
          },
        },
        {
          "@type": "Question",
          name: "What is Forhu AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Forhu AI is a technology company founded by CEO Jungkwan Shin that builds transparent, auditable AI systems using the Structured Cognitive Loop (SCL) architecture. FORHU stands for FOR HUMAN.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Structured Cognitive Loop (SCL)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Structured Cognitive Loop (SCL) is Forhu AI's proprietary AI architecture that records and displays the entire reasoning path in real time, enabling traceable and auditable AI decisions — the Architecture of Trust for EU AI Act compliance.",
          },
        },
        {
          "@type": "Question",
          name: "What is GlassboxAI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GlassboxAI is Forhu AI's approach to transparent AI, contrasted with traditional BlackboxAI. It uses SCL to make every AI judgment traceable, auditable, and explainable.",
          },
        },
        {
          "@type": "Question",
          name: "Where was Forhu AI featured at VivaTech 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Forhu AI exhibited at VivaTech 2026 in Paris at Booth 1J22, showcasing the StyleOS smart mirror — a 32-inch AI mirror powered by the SCL architecture for personalized fashion and beauty recommendations.",
          },
        },
      ],
    },
  ],
}

export default function NewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hidden machine-readable article list for crawlers */}
      <ul className="sr-only" aria-hidden="false">
        {articles.map((a) => (
          <li key={a.url}>
            <a href={a.url} target="_blank" rel="noopener noreferrer">
              {a.headline} — {a.publication} — {a.date}
            </a>
          </li>
        ))}
      </ul>

      <main className="bg-background text-foreground min-h-screen pt-24">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Press &amp; Media</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mt-4 mb-6">
              In the<br />News
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light">
              Forhu AI and the Structured Cognitive Loop are gaining coverage from news outlets and media platforms around the world.
            </p>
          </div>

          {/* Stats bar */}
          <div className="mt-10 flex flex-wrap gap-6 sm:gap-12">
            <div>
              <p className="text-3xl font-bold text-foreground tabular-nums">235+</p>
              <p className="text-sm text-muted-foreground mt-1">Full-page placements</p>
            </div>
            <div className="w-px bg-border/40 self-stretch hidden sm:block" />
            <div>
              <p className="text-3xl font-bold text-foreground tabular-nums">20K+</p>
              <p className="text-sm text-muted-foreground mt-1">Potential audience reach</p>
            </div>
            <div className="w-px bg-border/40 self-stretch hidden sm:block" />
            <div>
              <p className="text-3xl font-bold text-foreground tabular-nums">June 2026</p>
              <p className="text-sm text-muted-foreground mt-1">VivaTech coverage wave</p>
            </div>
          </div>
        </section>

        {/* Article list */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-4xl mx-auto">
          <NewsList articles={articles} />
        </section>

        {/* AEO — visible FAQ for answer engines */}
        <section className="border-t border-border/30 px-4 sm:px-6 lg:px-8 py-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-foreground">About Forhu AI</h2>
          <dl className="space-y-8">
            {[
              {
                q: "Who is the CEO of Forhu AI?",
                a: "Jungkwan Shin is the CEO and founder of Forhu AI. He leads the development of the Structured Cognitive Loop (SCL), Forhu's transparent AI architecture designed for EU AI Act compliance.",
              },
              {
                q: "Who founded Forhu AI?",
                a: "Forhu AI was founded by Jungkwan Shin, who serves as the company's CEO. FORHU stands for FOR HUMAN — reflecting the mission to build AI that extends human capability while safeguarding human dignity.",
              },
              {
                q: "What is Forhu AI?",
                a: "Forhu AI is a technology company built on the principle that AI must be transparent and accountable. Founded by CEO Jungkwan Shin, Forhu — which stands for FOR HUMAN — develops the Structured Cognitive Loop (SCL), an architecture that records every AI reasoning step in real time.",
              },
              {
                q: "What is the Structured Cognitive Loop (SCL)?",
                a: "The SCL is Forhu's core AI architecture. Unlike traditional blackbox AI systems that only return results, SCL records and displays the entire judgment path, allowing users to see exactly why a recommendation was made. It is designed for EU AI Act compliance with a focus on transparency, traceability, and human oversight.",
              },
              {
                q: "What is GlassboxAI?",
                a: "GlassboxAI is Forhu's term for fully transparent, auditable AI — the opposite of BlackboxAI. Every output from a GlassboxAI system is traceable to a structured reasoning chain governed by the SCL architecture.",
              },
              {
                q: "Where was Forhu AI featured at VivaTech 2026?",
                a: "Forhu AI exhibited at VivaTech 2026 (Paris, June 17–20) at Booth 1J22, showcasing the StyleOS smart mirror — a 32-inch AI mirror powered by SCL for personalized fashion and beauty recommendations.",
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <dt className="text-base font-semibold text-foreground mb-2">{q}</dt>
                <dd className="text-muted-foreground text-sm leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
    </>
  )
}
