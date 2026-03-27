# CLAUDE.md — Portfolio Site Context

## What This Is
Personal portfolio site for Rohan Sartho. Light-mode only, fixed left sidebar layout, no animations.
Stack: React + Vite + Tailwind CSS v4. Deployed on Vercel.

## Repo & Live
- **Repo:** https://github.com/RohanSartho/rs_portfolio
- **Live:** https://rohansartho.vercel.app
- Push to `main` auto-deploys via Vercel

---

## Stack & Conventions
- **Framework:** React + Vite
- **Styling:** Tailwind CSS v4 — utility classes only, no custom CSS files
- **Accent color:** `orange-700` / `#c2410c`
- **Background:** `#f5f1eb` (warm cream) — all sections
- **No dark mode**, no mount animations, no transitions except hover states
- **Section padding:** `px-8 sm:px-12 py-12`
- **Cards:** `bg-white rounded-2xl border border-gray-200 shadow-sm`
- **Font size:** match surrounding text size — don't introduce new sizes without reason

---

## Layout
- `src/App.jsx` — flex root: fixed `Sidebar` (w-64) + `main` with `lg:ml-64`
- All sections are content-height (no `min-h-screen`)
- Sidebar is fixed on desktop, hamburger drawer on mobile

---

## Key Files

| File | Purpose |
|---|---|
| `src/App.jsx` | Root layout |
| `src/components/Sidebar.jsx` | Fixed left nav — profile photo (scale-125 zoom), name, nav items, social links, CV download |
| `src/components/Hero.jsx` | Intro section: H1, bio text, stat chips (12+ Years, US Patent), CTAs, Based in / Open to row |
| `src/components/About.jsx` | "What I Do" — 4 category cards in 2x2 grid: Product Management, Platform & Developer Products, Analytics & Intelligence, AI-First Builder |
| `src/components/Projects.jsx` | Product Portfolio — 3 subsections: Work Portfolio (3 enterprise cards), Personal AI Apps (FindRec, French Wordle, PrepEdge), Patents (US Patent card) |
| `src/components/Contact.jsx` | Contact form via Formspree |
| `src/components/Footer.jsx` | Footer |
| `src/hooks/useAdminAssets.js` | localStorage asset manager (profile photo + resume) |
| `src/components/AdminPanel.jsx` | Admin upload UI at `/?admin=true` |

---

## Sections (in scroll order)
1. **Hero** (`#home`) — intro, stat chips, CTAs, location/availability
2. **What I Do** (`#about`) — 4 capability category cards
3. **Product Portfolio** (`#projects`) — Work Portfolio, Personal AI Apps, Patents
4. **Contact** (`#contact`) — Formspree form
5. **Footer**

---

## Content Reference (Rohan Sartho)
- **Role:** Engineer-turned-Senior PM, 12+ years
- **Previous companies:** VMware (Omnissa), Tata Communications, TCS
- **Key metrics:** 10M+ MAU, 5M+ daily data points, $20M cost savings, $5M ARR
- **US Patent:** US12267360B2 — URL Pattern-Based Risk Scoring & Anomaly Detection
  - Link: https://patents.justia.com/patent/20230396649
- **Personal apps:** FindRec Toronto, French Wordle, PrepEdge
- **Location:** Toronto, ON
- **Open to:** Full-time and Contract roles

---

## Phase Log

### Phase 1 — Initial Build
React + Vite scaffold, Tailwind v4, top navbar, all sections, admin panel, Formspree contact.

### Phase 2 — Sidebar Redesign
Removed navbar, Skills, References, dark mode, animations. Added fixed sidebar, warm cream theme, orange accent.

### Phase 3 — Product Apps
Replaced placeholder projects with real apps (FindRec, French Wordle, PrepEdge). Custom SVG logos, full card click.

### Phase 4 — Resume-Driven Content Refresh
- Hero intro rewritten from resume: 12+ years, AI/ML, engineering roots, operator focus
- Stat chips (12+ Years in Product, US Patent) placed beside bio, pushed to right edge
- "About Me" renamed to "What I Do" with 4 capability cards in 2x2 grid
- Projects split into Work Portfolio, Personal AI Apps, Patents subsections
- Em dashes removed across all components (replaced with colons / commas)
- Headshot zoom: `scale-125` on profile img
- "Currently working at" removed; Based in + Open to on one row

---

## Next Ideas
- Add GitHub repo links for FindRec and French Wordle when public
- Add case study PDFs to work portfolio cards
- Add a writing/blog section (Substack embed or MDX)
