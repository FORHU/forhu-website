# FORHU Website — Codebase Overview

## Project Summary

The FORHU website is a single-page marketing and research site for **FORHU** ("For Human") — an AI research organisation centered on the **Structured Cognitive Loop (SCL)** architecture. The site communicates FORHU's philosophy, explains SCL, showcases peer-reviewed research, and presents SCL-powered real-world projects.

**Live dev server:** `npm run dev` (Next.js, port 3000)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | **Next.js 16** (App Router, `"use client"` where needed) |
| Language | **TypeScript 5** |
| Styling | **Tailwind CSS v4** (`@import "tailwindcss"`) |
| Animation | **Framer Motion 12** |
| UI Primitives | **Radix UI** (full suite — accordion, dialog, dropdown, etc.) |
| Icons | **Lucide React** |
| Fonts | **Poppins** (primary), Geist, Geist Mono (via `next/font/google`) |
| Analytics | **@vercel/analytics** |
| Package Manager | npm |

---

## Directory Structure

```
forhu-website/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, dark-mode class
│   ├── page.tsx            # Single page — section composition order
│   └── globals.css         # Design tokens (CSS variables), Tailwind imports, keyframe animations
├── components/
│   ├── navigation.tsx          # Fixed top nav, mobile hamburger menu
│   ├── hero-home.tsx           # Full-screen video hero
│   ├── philosophy-section.tsx  # 3-card philosophy grid with scroll-reveal
│   ├── scl-brain-visualization.tsx   # Interactive brain diagram (3D tilt + clickable regions)
│   ├── scl-comparison-section.tsx    # SVG mind-map: Minsky layers ↔ SCL modules
│   ├── research-section.tsx          # Publication cards with video/diagram panels
│   ├── research-diagrams.tsx         # SVG diagram components (Schema, Layered, Network, Neural)
│   ├── projects-section.tsx          # Framer Motion project showcase (Chumme, I Love Lawyer)
│   ├── about-section.tsx             # About grid (Mission, Philosophy, Team)
│   ├── contact-section.tsx           # Contact section
│   ├── cta-final.tsx                 # Final call-to-action
│   ├── cta-section.tsx               # Secondary CTA (unused in page.tsx)
│   ├── features-section.tsx          # Features section (unused in page.tsx)
│   ├── publications-section.tsx      # Alternate publications layout (unused in page.tsx)
│   ├── hero-section.tsx              # Alternate hero (unused in page.tsx)
│   ├── footer.tsx                    # Footer with nav links and social icons
│   ├── forhu-logo.tsx                # FORHU logo SVG component
│   ├── logo.tsx                      # Thin wrapper rendering <ForhuLogo>
│   ├── theme-provider.tsx            # next-themes ThemeProvider wrapper
│   ├── theme-toggle.tsx              # Light/dark toggle button
│   └── ui/                           # Radix-based shadcn/ui primitives
├── public/
│   ├── assets/
│   │   └── videos/                   # Per-publication MP4 files (see Research Section below)
│   ├── images/                       # Additional static images
│   ├── chumme.png                    # Chumme project logo
│   ├── forhu-logofin.png             # FORHU logo PNG
│   └── ilovelawyer.png               # I Love Lawyer project logo
├── styles/                           # (reserved, currently empty)
├── hooks/                            # Custom React hooks
├── lib/                              # Utility functions (cn, etc.)
├── next.config.mjs
├── tailwind.config (inline via globals.css @theme)
├── tsconfig.json
└── package.json
```

---

## Page Composition (`app/page.tsx`)

Sections render top-to-bottom in this order:

1. `<Navigation />` — fixed header
2. `<HeroHome />` — full-screen video background
3. `<PhilosophySection />` — FORHU philosophy cards
4. `<SCLBrainVisualization />` — interactive brain / SCL explainer
5. `<SCLComparisonSection />` — Minsky ↔ SCL interactive map
6. `<ResearchSection />` — publications with video panels
7. `<ProjectsSection />` — Chumme & I Love Lawyer
8. `<AboutSection />` — mission, philosophy, team
9. `<ContactSection />` — contact info
10. `<CTAFinal />` — closing call-to-action
11. `<Footer />` — links and social icons

---

## Design System (`app/globals.css`)

### Color Tokens

| Token | Light | Dark |
|---|---|---|
| `--background` | `#faf8f5` (warm beige) | `#0f0d0a` (near-black) |
| `--foreground` | `#1a1612` | `#f5ede6` |
| `--accent` | `#ff6a2d` (orange) | `#ff6a2d` |
| `--primary` | `#8b5a3c` (warm brown) | `#d4a574` (sand) |
| `--muted-foreground` | `#6b5f55` | `#a0917f` |

The site renders exclusively in **dark mode** (`<html class="dark">`). Light mode tokens are defined but not actively used.

### Custom Animations

- `animate-fade-in-up` — 0.6s ease-out fade + 12px upward slide
- `animate-scale-in` — 0.5s scale from 0.98 → 1
- `animate-pulse` — 3s opacity pulse

---

## Component Reference

### `navigation.tsx`
- Fixed, `z-50`, `backdrop-blur-md`
- Nav items: Philosophy · SCL · Research · Projects · About · Contact (all anchor links)
- Mobile: hamburger toggles a slide-down menu
- Logo: renders `<Logo>` component (SVG)

### `hero-home.tsx`
- Full-viewport `<video>` background (Vercel blob URL, autoplay/muted/loop)
- Overlay: `bg-black/60`
- Headline: *"Where AI and humanity connect — TRUST BEGINS"*
- CTAs: "Learn about SCL" → `#scl`, "Read our research" → `#research`

### `philosophy-section.tsx`
- 3 cards: **For Human**, **Honest Engineering**, **Hallucination Governance**
- Scroll-reveal via `IntersectionObserver` with staggered `transitionDelay`
- Hover: accent top-border line slides in

### `scl-brain-visualization.tsx`
- **ID:** `#scl`
- Brain image hosted on Vercel blob storage
- 5 interactive regions: **Judgment**, **Memory**, **Control**, **Runtime**, **Metaprompt**
- Interaction: click region label or hotspot → updates info panel on the right
- 3D parallax tilt using Framer Motion `useMotionValue` + `useSpring` on mouse move
- Active region label glows yellow with text-shadow + drop-shadow filter

### `scl-comparison-section.tsx`
- SVG-based interactive mind map (no ID anchor — sits between `#scl` and `#research`)
- Two concentric rings: inner = **Minsky Layers** (orange), outer = **SCL Modules** (brown/primary)
- Clicking a node highlights its pair and shows details in the left panel
- Animated connection lines with arrowheads; pulse animation on active nodes

### `research-section.tsx`
- **ID:** `#research`
- 6 publications, each as an expandable card
- **Left panel:** `<video>` (autoplay, muted, loop, `object-cover`) — falls back to SVG diagram if file missing
- **Video files** expected in `public/assets/videos/`:

| Publication | Filename |
|---|---|
| Executable Epistemology | `executableepistemology.mp4` (user-renamed) |
| Structured Cognitive Loop | `structured-cognitive-loop.mp4` |
| Emergent Cognitive Convergence | `emergent-convergence.mp4` |
| Hallucination-Informed Intelligence | `hallucination-informed.mp4` |
| Hallucination as Byproduct | `hallucination-byproduct.mp4` |
| Understanding Architecture | `cognitive-architecture.mp4` |

- **Right panel:** year badge, title, subtitle, domain tags, action buttons
- "View Publication" → external link; "View Abstract" → toggles expandable abstract + key contributions

### `research-diagrams.tsx`
- 4 pure-SVG diagram components used as fallbacks: `NetworkGraphDiagram`, `LayeredModelDiagram`, `SchemaDiagram`, `NeuralDiagram`

### `projects-section.tsx`
- **ID:** `#projects`
- 2 projects: **Chumme** (social/artist platform) and **I Love Lawyer** (Philippine legal research)
- Layout alternates left/right image per project (`index % 2`)
- Framer Motion: scroll-driven parallax (`useScroll` + `useTransform`), `useInView` re-triggers on scroll
- Image panel: aspect-video, `rounded-3xl`, hover scale + ambient glow
- "SCL Core Connection" card slides in last per project

### `about-section.tsx`
- **ID:** `#about`
- 3 cards: Mission & Vision · Philosophy · Team
- Same `IntersectionObserver` scroll-reveal pattern as Philosophy section
- Hover: accent bar expands from `w-12` → `w-20`

### `footer.tsx`
- 2-column nav: **About** (Team, Mission) · **Legal** (Privacy, Terms, Contact)
- Social icons (inline SVG): Facebook, Instagram, TikTok, X, LinkedIn
- All social links open `target="_blank"` with `rel="noopener noreferrer"`

---

## External Assets

| Asset | URL / Path |
|---|---|
| Hero video | Vercel blob storage (MP4) |
| Brain diagram | Vercel blob storage (PNG) |
| Chumme logo | `/chumme.png` |
| I Love Lawyer logo | `/ilovelawyer.png` |
| FORHU logo | `/forhu-logofin.png` |
| Research videos | `/assets/videos/*.mp4` |

---

## Key Patterns

- **`"use client"`** is declared at the top of every interactive component (Next.js App Router requirement for hooks/events)
- **Scroll animations** use two approaches: native `IntersectionObserver` (Philosophy, About) and Framer Motion `useInView` / `useScroll` (Projects, Research)
- **Anchor navigation** — all nav links are `href="#section-id"` hash links; `scroll-behavior: smooth` is set globally
- **Dark mode** — forced via `class="dark"` on `<html>`, no toggle exposed to users currently
- **Video layout fix** — research card video uses `absolute inset-0` inside a `relative min-h-[240px]` wrapper to guarantee fill regardless of flex parent height

---

## Running the Project

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```
