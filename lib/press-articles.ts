export type Article = {
  publication: string
  headline: string
  date: string
  url: string
}

// Single source of truth for press coverage, newest first.
// Used by the homepage "In the News" section and the /news page.
export const articles: Article[] = [
  // ── ilovelawyer coverage (newest first) ──
  {
    publication: "Newsicons",
    headline: "See the Case From Both Sides of the Table: A Tour of ilovelawyer's AI Legal Insights",
    date: "2026-11-06",
    url: "https://newsicons.com/article/2026-11-06-see-case-both-sides-table-tour-ilovelawyer-ai-legal-insights",
  },
  {
    publication: "LinkTechnews",
    headline: "ilovelawyer's Red Team Pane Ranks Opposing Counsel's Likely Arguments",
    date: "2026-11-06",
    url: "https://linktechnews.com/article/2026-11-06-ilovelawyer-red-team-pane-ranks-opposing-counsel-likely",
  },
  {
    publication: "Magazine Techy",
    headline: "Lawyers Author, AI Reconciles: Why ilovelawyer Refuses to Pick a Winner",
    date: "2026-11-06",
    url: "https://magazinetechy.com/article/2026-11-06-lawyers-author-ai-reconciles-why-ilovelawyer-refuses-pick",
  },
  {
    publication: "Magazine Air",
    headline: "The Night-Before Habit: On Arguing the Other Side, and Letting Software Start the List",
    date: "2026-11-06",
    url: "https://magazineair.com/article/2026-11-06-night-before-habit-arguing-other-side-letting-software-start",
  },
  {
    publication: "La Vague Tech",
    headline: "FORHU révolutionne la préparation des audiences pour avocats avec ilovelawyer",
    date: "2026-11-06",
    url: "https://lavaguetech.com/article/2026-11-06-forhu-r%C3%A9volutionne-la-pr%C3%A9paration-des-audiences-pour-avocats",
  },
  {
    publication: "Tech Oggi",
    headline: "La causa vista dall'altra parte: ilovelawyer racconta i fatti tre volte e mette in fila gli argomenti dell'avversario",
    date: "2026-11-06",
    url: "https://techoggi.com/article/2026-11-06-la-causa-vista-dall-altra-parte-ilovelawyer-racconta-i-fatti",
  },
  {
    publication: "TechnikPost",
    headline: "KI-gestützte Fallanalyse: ilovelawyer nutzt Red-Team-Modul zur Schwachstellenerkennung im Rechtswesen",
    date: "2026-11-06",
    url: "https://technikpost.de/article/2026-11-06-ki-gest%C3%BCtzte-fallanalyse-ilovelawyer-nutzt-red-team-modul",
  },
  {
    publication: "TechHoy",
    headline: "La inteligencia artificial al servicio del derecho: ilovelawyer anticipa argumentos de la contraparte",
    date: "2026-11-06",
    url: "https://techhoy.com/article/2026-11-06-la-inteligencia-artificial-al-servicio-del-derecho",
  },
  {
    publication: "Newsicons",
    headline: "Meet FORHU: The \"For Human\" Company Behind ilovelawyer",
    date: "2026-10-31",
    url: "https://newsicons.com/article/2026-10-31-meet-forhu-human-company-behind-ilovelawyer",
  },
  {
    publication: "Magazine Techy",
    headline: "Seven Things Worth Knowing About ilovelawyer, the AI Case Workspace From FORHU",
    date: "2026-10-31",
    url: "https://magazinetechy.com/article/2026-10-31-seven-things-worth-knowing-about-ilovelawyer-ai-case",
  },
  {
    publication: "DbTechnews",
    headline: "Case Files as Structured Data: Inside the Model That Keeps ilovelawyer's Analysis in Sync",
    date: "2026-10-31",
    url: "https://dbtechnews.com/article/2026-10-31-case-files-structured-data-inside-model-keeps-ilovelawyer",
  },
  {
    publication: "Magazine Air",
    headline: "Monday Morning, Eleven Documents: A Litigator's Week With an AI Case Workspace",
    date: "2026-10-31",
    url: "https://magazineair.com/article/2026-10-31-monday-morning-eleven-documents-litigator-week-ai-case",
  },
  {
    publication: "La Vague Tech",
    headline: "Des sources vérifiables : comment ilovelawyer aborde le risque des citations inventées",
    date: "2026-10-31",
    url: "https://lavaguetech.com/article/2026-10-31-ilovelawyer-l-innovation-n%C3%A9cessaire-en-mati%C3%A8re-de",
  },
  {
    publication: "Tech Oggi",
    headline: "Lo studio legale come un'unica scrivania digitale: cosa cambia con ilovelawyer",
    date: "2026-10-31",
    url: "https://techoggi.com/article/2026-10-31-ilovelawyer-la-nuova-frontiera-digitale-per-gli-studi-legali",
  },
  {
    publication: "DbTechnews",
    headline: "ilovelawyer Legal Terminal: Citation Checking and Saved Workspaces",
    date: "2026-10-05",
    url: "https://dbtechnews.com/article/2026-10-05-ilovelawyer-legal-terminal-citation-checking-saved",
  },
  {
    publication: "Magazine Techy",
    headline: "Why ilovelawyer Built a Legal Terminal Lawyers Arrange Themselves",
    date: "2026-10-05",
    url: "https://magazinetechy.com/article/2026-10-05-why-ilovelawyer-built-legal-terminal-lawyers-arrange",
  },
  {
    publication: "TechyGate",
    headline: "Legal Terminal by ilovelawyer: 5 Things Every Lawyer Should Know",
    date: "2026-10-05",
    url: "https://techygate.com/article/2026-10-05-legal-terminal-ilovelawyer-5-things-every-lawyer-should-know",
  },
  {
    publication: "New York Signal",
    headline: "From Case File to Strategy Tree: ilovelawyer's Mind Map for Lawyers",
    date: "2026-10-05",
    url: "https://newyorksignal.com/article/2026-10-05-case-file-strategy-tree-ilovelawyer-mind-map-lawyers",
  },
  {
    publication: "SkyBluePrime",
    headline: "Ilovelawyer Unveils AI Consultation Platform for Streamlined Legal Assistance",
    date: "2026-09-16",
    url: "https://skyblueprime.com/article/2026-09-16-ilovelawyer-unveils-ai-consultation-platform",
  },
  {
    publication: "LinkTechnews",
    headline: "Ilovelawyer: Enhancing Coordination in Legal Practices",
    date: "2026-09-16",
    url: "https://linktechnews.com/article/2026-09-16-ilovelawyer-enhancing-coordination-legal-practices",
  },
  {
    publication: "New York Signal",
    headline: "Ilovelawyer: A Game-Changer in Legal Case Management Utilizing AI Technology",
    date: "2026-09-16",
    url: "https://newyorksignal.com/article/2026-09-16-ilovelawyer-game-changer-legal-case-management",
  },
  {
    publication: "TechyGate",
    headline: "Empowering Modern Legal Practice: Discover ilovelawyer",
    date: "2026-09-10",
    url: "https://techygate.com/article/2026-09-10-empowering-modern-legal-practice-discover-ilovelawyer-8",
  },
  // ── FORHU / SCL coverage ──
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
