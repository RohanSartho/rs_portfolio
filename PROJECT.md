# PROJECT.md — Portfolio Site

## What This Is

Personal portfolio site for Rohan Sartho. Light-mode only, sidebar layout, no animations.
Built with React + Vite + Tailwind CSS v4. Deployed on Vercel.

---

## Phase Log

### Phase 1 — Initial Build
- React + Vite scaffold, Tailwind CSS v4
- Top navbar, Hero, About, Skills, Projects, References, Contact, Footer
- Admin panel (`/?admin=true`) for uploading profile photo and resume via localStorage
- Formspree contact form integration

### Phase 2 — Redesign (sidebar layout + cleanup)
- **Removed:** top Navbar, Skills section, References section, dark mode, all animations
- **Added:** fixed left sidebar (`Sidebar.jsx`) — profile photo, nav items with active indicator, social links
- Layout: `flex` root with `lg:ml-64` offset for sidebar; all sections content-height (no `min-h-screen`)
- Theme: warm cream background `#f5f1eb`, orange accent `#c2410c`
- Sections reduced to: Hero → About → Projects → Contact → Footer
- GitHub link updated to `https://github.com/RohanSartho`

### Phase 3 — Product Apps update
- Replaced old projects (EduSphere, IoT Logger) with real product apps
- Projects renamed to **Product Apps**
- Added: FindRec Toronto (real logo fetched from live site), French Wordle (SVG tile logo), PrepEdge (SVG logo reconstructed from brand)
- Full card click → new tab; hover lift (`-translate-y-1.5 shadow-xl`)
- Removed ~955KB of old project images from bundle

---

## Key Files

| File | Purpose |
|---|---|
| `src/App.jsx` | Root layout — sidebar + main content |
| `src/components/Sidebar.jsx` | Fixed left nav panel |
| `src/components/Projects.jsx` | Product app cards |
| `src/hooks/useAdminAssets.js` | localStorage asset manager |
| `src/components/AdminPanel.jsx` | Admin upload UI at `/?admin=true` |

---

## Conventions

- Accent color: `orange-700` / `#c2410c`
- Background: `#f5f1eb` (warm cream)
- No dark mode classes anywhere
- No CSS transitions on mount (page loads fully rendered)
- Section padding: `px-8 sm:px-12 py-12`
- Cards: `bg-white rounded-2xl border border-gray-200 shadow-sm`

---

## Active Deployment

- **Repo:** https://github.com/RohanSartho/PortfolioSiteSingleScrollPage
- **Live:** https://rohansartho.vercel.app
- Push to `main` → auto-deploys via Vercel

---

## Next Up (Phase 4 ideas)

- Add GitHub repo links for FindRec Toronto and French Wordle when public
- Add a blog/writing section (Substack embed or MDX)
- Add case study PDFs to project cards
