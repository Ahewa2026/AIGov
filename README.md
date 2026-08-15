# Sentinel AI — AI Governance Platform (marketing site)

Marketing/landing site for an enterprise AI governance product: a single
control plane to inventory, assess, monitor, and prove compliance for every
AI model and agent in production.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 18 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- No backend — static/SSR marketing page only. The email capture form is a
  UI placeholder (`onSubmit` is a no-op) until a lead-capture endpoint is
  wired up.

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
