# ILKKA Healthcare Private Limited — Website

Official website for **ILKKA Healthcare Private Limited**, a progressive pharmaceutical company delivering high-quality, affordable medicines in Gynaecology and Infertility. Established 2019, Bangalore, Karnataka.

---

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Routing:** React Router v6
- **3D Animation:** Three.js (molecular scene on homepage)
- **Styling:** Plain CSS with CSS custom properties (no Tailwind/CSS-in-JS)
- **Fonts:** Cormorant Garamond · DM Sans · Syne (Google Fonts)
- **Deployment:** Vercel

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx / Navbar.css       # Fixed navbar with mobile hamburger menu
│   │   └── Footer.tsx / Footer.css       # 4-column footer
│   ├── ui/
│   │   └── Cursor.tsx / Cursor.css       # Custom cursor (desktop only)
│   ├── BrandLogo.tsx                     # Logo component
│   └── MolecularScene.tsx                # Three.js DNA helix + particles
├── pages/
│   ├── Home.tsx / Home.css
│   ├── About.tsx / About.css
│   ├── Products.tsx / Products.css
│   ├── Research.tsx / Research.css
│   ├── Manufacturing.tsx / Manufacturing.css
│   ├── Careers.tsx
│   ├── Blog.tsx
│   ├── Sustainability.tsx
│   └── Contact.tsx
├── hooks/
│   └── useReveal.ts                      # IntersectionObserver scroll reveal + nav scroll
├── lib/
│   └── data.ts                           # All company data (products, team, blog, jobs)
├── App.tsx                               # Routes + ScrollToTop
└── globals.css                           # Design tokens, typography, layout utilities
```

---

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, stats, portfolio areas, research band, blog preview, CTA |
| `/about` | About — mission, timeline, certifications, team |
| `/products` | Products — searchable product grid with modal detail view |
| `/research` | Research & Innovation — pillars, stats |
| `/manufacturing` | Manufacturing — unit cards, QMS standards |
| `/careers` | Careers — open positions |
| `/blog` | Insights — blog articles |
| `/sustainability` | Sustainability |
| `/contact` | Contact form |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## Deployment

The project is deployed on **Vercel** via GitHub integration.

Every push to the `main` branch on [`github.com/Saransh-29/New-Ilkka`](https://github.com/Saransh-29/New-Ilkka) triggers an automatic redeploy.

### Manual Deploy Steps
1. Make changes locally
2. `git add .`
3. `git commit -m "describe changes"`
4. `git push`

Vercel picks it up automatically.

---

## Design System

All design tokens are defined in `globals.css` under `:root`:

| Token | Value | Usage |
|---|---|---|
| `--g-deep` | `#152b1f` | Primary dark green |
| `--g-sage` | `#6f9a84` | Accent green |
| `--g-light` | `#a8c8b6` | Light green |
| `--ivory` | `#faf8f3` | Background |
| `--fd` | Cormorant Garamond | Display / headings |
| `--fb` | DM Sans | Body text |
| `--fu` | Syne | Labels / caps |

---

## Certifications

- WHO-GMP Practices
- ISO Compliant

## Therapeutic Areas

- Gynaecology
- Infertility

---

*© 2025 ILKKA Healthcare Private Limited. All rights reserved.*
