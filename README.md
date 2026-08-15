# Sentinel AI — AI Governance Platform (marketing site)

Marketing/landing site for an enterprise AI governance product: a single
control plane to inventory, assess, monitor, and prove compliance for every
AI model and agent in production.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 18 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- No backend — static export (`output: "export"` in `next.config.js`), no
  server-side code at runtime. The email capture form is a UI placeholder
  (`onSubmit` is a no-op) until a lead-capture endpoint is wired up.

## Deployment

Deployed to GitHub Pages via `.github/workflows/deploy.yml`, which builds
and publishes `out/` on every push to `main`.

**One-time manual setup required** (not automatable from here): in the repo
on github.com, go to **Settings → Pages → Build and deployment → Source**
and select **GitHub Actions**. After that, every push to `main` deploys
automatically. Since this repo is private, GitHub Pages also requires a
paid plan (GitHub Pro/Team/Enterprise) — Pages from a private repo isn't
available on the free plan.

The site is a GitHub Pages *project* site, so it's served from a subpath:
`https://<owner>.github.io/AIGov/`. `next.config.js` sets `basePath`/
`assetPrefix` to `/AIGov` only when `GITHUB_ACTIONS=true` (set automatically
by the workflow), so `npm run dev`/`npm run build` locally are unaffected.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

- `app/` — App Router entry (`layout.tsx`, `page.tsx`, `globals.css`)
- `components/` — page sections (`Hero`, `FeatureSection`, `HowItWorks`,
  `Trust`, `CTA`, `Nav`, `Footer`) and a small dependency-free `Icon`
  component
- `lib/features.ts` — the nine governance capability categories rendered by
  `FeatureSection`, each with a short list of concrete features. This is the
  single source of truth for what the page claims the product does — update
  it there rather than in the component.

## Feature categories covered

1. AI Inventory & Lifecycle
2. Data Foundation
3. Risk & Compliance
4. Privacy & Data Protection
5. Ethics, Fairness & Explainability
6. Access & Accountability
7. Monitoring & Operations
8. Collaboration & Enablement
9. Platform & Integrations

## Known follow-ups (not yet implemented)

- Lead-capture form in `components/CTA.tsx` doesn't submit anywhere yet.
- No analytics/telemetry wired up.
- `npm audit` reports 3 high-severity transitive advisories (in `postcss`
  and `sharp`, pulled in by Next.js's image optimizer) with no fix available
  short of moving to the very new Next.js 16 major version. None are
  reachable by this static page today (no untrusted CSS or image uploads),
  but revisit before adding a CMS, uploads, or dynamic image sources.
