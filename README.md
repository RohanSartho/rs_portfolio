# Rohan Sartho — Portfolio

Personal portfolio site. Light-mode only, sidebar navigation, no animations.

**Live →** [rohansartho.vercel.app](https://rohansartho.vercel.app)

---

## Stack

| Layer | Tool |
|---|---|
| UI | React 19 + Vite |
| Styling | Tailwind CSS v4 |
| Contact form | Formspree |
| Hosting | Vercel + Analytics |

---

## Structure

```
src/
├── components/
│   ├── Sidebar.jsx     # Fixed left nav (photo, links, social)
│   ├── Hero.jsx        # Intro + CTAs
│   ├── About.jsx       # Bio + stats
│   ├── Projects.jsx    # Product apps cards
│   ├── Contact.jsx     # Formspree form + contact links
│   ├── Footer.jsx
│   ├── AdminPanel.jsx  # /?admin=true — upload photo & resume
│   └── ui/             # PrimaryButton, SecondaryButton
├── hooks/
│   └── useAdminAssets.js   # localStorage-based asset manager
└── assets/
    └── findrec_logo.png
```

---

## Product Apps

- **[FindRec Toronto](https://findrectoronto.vercel.app/)** — Civic app for finding City of Toronto recreation activities and parks
- **French Wordle** — Daily French vocabulary puzzle game
- **[PrepEdge](https://getprepedge.vercel.app/)** — AI-powered PM interview practice platform

---

## Admin Panel

Upload photo and resume without touching code:

```
Visit /?admin=true → upload photo / PDF resume
```

Assets are stored in `localStorage` and persist across refreshes.

---

## Local Dev

```bash
npm install
npm run dev      # localhost:5173
npm run build    # → dist/
```

---

## Contact

[LinkedIn](https://www.linkedin.com/in/rohan-sartho/) · [GitHub](https://github.com/RohanSartho) · rohansartho@gmail.com

---

GNU GPL v3 — see [LICENSE](LICENSE)
