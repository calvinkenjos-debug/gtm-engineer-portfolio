# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start the dev server (Turbopack, http://localhost:3000)
- `npm run build` — production build (also runs the TypeScript check)
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`)

There is no test runner configured. This is a single-page marketing site with no
routes beyond `/`; there is nothing to run "a single test" against.

## Architecture

Single-page Next.js App Router site (`src/app/page.tsx`) assembled from section
components in `src/components/`, each one a self-contained `<section>`. To
reorder or remove a section, edit the list in `page.tsx` — nothing else depends
on section order.

**Content is separated from presentation.** Every section's copy lives in
`src/content/*.ts` as typed arrays/objects (`problems.ts`, `services.ts`,
`stack.ts`, `proof.ts`, `process.ts`, `testimonials.ts`, `faq.ts`). Components
import and map over this data rather than hardcoding copy in JSX. When editing
site copy, edit the content file, not the component.

**Identity and contact links are centralized** in `src/lib/site-config.ts`
(`siteConfig`). Name, role, email, booking link, LinkedIn, and site URL are all
placeholder values (`[Your Name]`, `example.com`, etc.) marked in that file's
comments — every one of them must be replaced before launch, since they also
feed the JSON-LD in `layout.tsx` and `public/llms.txt`.

**Design tokens live in `src/app/globals.css`** as CSS custom properties
consumed through a Tailwind v4 `@theme inline` block (not `tailwind.config.js` —
this project uses Tailwind v4's CSS-first config). The palette is an
"operator-technical" adaptation of the Superhuman-style reference in
`design-reference/` (same spacing/typography restraint, recolored from warm
parchment + maroon to ink/paper + a single signal-green accent). Custom tokens:
`bg-canvas`, `bg-surface`, `text-ink`, `text-ink-secondary`, `text-ink-faint`,
`border-border`, `border-border-strong`, `bg-accent` / `text-accent`,
`bg-accent-soft`, `rounded-card`, `rounded-button`, `rounded-pill`,
`rounded-tag`. Stick to these instead of introducing new raw colors.

**`design-reference/`** holds the original refero.design extraction (Superhuman
style) the palette was adapted from. It's reference material, not part of the
build — don't import from it.

**Fonts** come from the `geist` npm package (`geist/font/sans`,
`geist/font/mono`), self-hosted, not `next/font/google`. Applied as CSS
variables in `layout.tsx` and consumed via the `--font-sans` / `--font-mono`
theme tokens.

**Scroll-reveal animation** is centralized in `src/components/Reveal.tsx`
(`motion/react`, `whileInView`, respects `prefers-reduced-motion`). Wrap new
section content in `<Reveal>` rather than writing bespoke animation code.

**Diagrams are hand-built inline SVG**, not screenshots or icon-library
assets: `src/components/diagrams/WaterfallDiagram.tsx` and
`RoutingDiagram.tsx`. They read the same CSS custom properties as the rest of
the page (`var(--color-ink)`, etc.) so they stay in sync with the palette
automatically.

**Icons** are from `@phosphor-icons/react` (`/dist/ssr` import path for
server components) — this is the only icon library in the project; don't add
a second one (e.g. lucide-react).

**Tool-stack logos:** the Systems section intentionally renders tool names as
styled text pills, not brand logos. Simple Icons doesn't carry most of the
smaller GTM tools in this stack (Clay, Apollo, ZoomInfo, Outreach, etc.) or
Salesforce/LinkedIn (excluded from that set on brand grounds), so a mixed
real-logo/text-wordmark treatment would look inconsistent. If real logos are
added later, source them consistently (all real SVGs or none) rather than
mixing styles — see the `company-logos` skill guardrails.

**Proof and testimonials content is placeholder data**, not fabricated
claims: `src/content/proof.ts` and `testimonials.ts` use bracketed
`[placeholder]` text and are visually marked in their components (dashed
borders, "Template slot" / "Awaiting real quotes" labels). Replace the
content-file data with real engagements before launch; don't just restyle the
placeholder text in place.

**SEO/AEO:** `src/app/layout.tsx` injects `@graph` JSON-LD (`ProfessionalService`,
`Person`, `WebSite`); `src/components/Faq.tsx` injects its own `FAQPage`
JSON-LD scoped to that section. `src/app/sitemap.ts` and `robots.ts` use the
Next.js Metadata API (not static files). `public/llms.txt` is a
manually-maintained AEO summary — update it if service/tool/FAQ content
changes materially, it won't regenerate itself.