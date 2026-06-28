# OpenSAS Website — Agent Context

## Project Overview

This is the marketing website for **OpenSAS** (Sovereign Automation Stack) — a private AI infrastructure blueprint for running autonomous agents on customer-owned hardware. The website communicates a security-hardened, engineer-to-engineer message: *Private AI infrastructure. No data leaves your network.*

The canonical product brief is [`WEBSITE_BRIEF.md`](./WEBSITE_BRIEF.md). Read that first for positioning, messaging, personas, use cases, and visual guidance. Every decision on this site should be validated against that document.

## Tech Stack (Decided)

| Concern | Choice |
|---------|--------|
| **Framework** | [Astro](https://astro.build) v5 (static site generation) |
| **CSS** | [Tailwind CSS](https://tailwindcss.com) v4 |
| **Package manager** | [pnpm](https://pnpm.io) |
| **Interactive diagram** | Custom Astro component with vanilla JS (see `/src/components/StackDiagram.astro`) |
| **Blog** | Astro Content Collections (Markdown — no MDX) |
| **Deployment** | GitHub Pages via GitHub Actions |
| **Domain** | Placeholder for now; configure `site` in `astro.config.mjs` once decided |
| **i18n** | English only, no localization |
| **License** | Apache 2.0 |

## Project Structure

```
/
├── agents.md                 # This file — Pi context
├── WEBSITE_BRIEF.md           # Product brief (canonical reference)
├── opensas.md                # Technical architecture (if available)
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind configuration (if v3) or CSS import (v4)
├── tsconfig.json             # TypeScript configuration
├── pnpm-lock.yaml
├── package.json
├── public/
│   ├── images/               # Static images, diagrams, logos
│   ├── fonts/                # Self-hosted fonts (if any)
│   └── favicon.svg           # Site favicon
├── src/
│   ├── components/           # Astro / vanilla JS components
│   │   └── StackDiagram.astro  # Interactive 5-layer stack diagram (hero visual)
│   ├── layouts/              # Page layouts
│   │   └── BaseLayout.astro # Default layout wrapper
│   ├── pages/                # Route pages
│   │   ├── index.astro       # Homepage (single-scroll)
│   │   ├── architecture.astro # Full layer-by-layer breakdown
│   │   ├── use-cases.astro   # Expanded case studies
│   │   ├── contact.astro     # Booking / contact form
│   │   └── blog/             # Blog posts (Content Collections)
│   │       └── [...slug].astro
│   ├── content/              # Astro Content Collections
│   │   └── blog/             # Markdown blog posts
│   ├── data/                 # Structured data (nav, features, team, etc.)
│   ├── styles/               # Global styles
│   │   └── global.css        # Tailwind base + custom properties
│   └── lib/                  # Utility functions
└── .github/
    └── workflows/
        └── deploy.yml        # GitHub Pages deployment workflow
```

## Common Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server (localhost:4321)
pnpm build            # Build for production
pnpm preview          # Preview production build locally
pnpm astro -- --help  # Astro CLI help
pnpm check            # Type-check (astro check)
pnpm lint             # Lint (if eslint configured)
pnpm format           # Format (if prettier configured)
```

## Git Conventions

- **Branch naming:** `feature/<short-description>` or `fix/<short-description>`
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org/) — `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `chore:`
- **PRs:** Reviewed by Ramshreyas
- **Merge strategy:** Squash merge preferred

## Design & Visual Guidance

From WEBSITE_BRIEF.md — refer to it for full details. Key points:

### Color Palette (to be finalized by designer)

- **Primary:** Deep blues, slate grays (security + infrastructure feel)
- **Accent:** Amber or teal (mesh/connectivity layer)
- **Serious, not bland** — avoid generic corporate blue. Think infrastructure tooling (Terraform, Tailscale, Grafana) rather than SaaS landing page.
- Use `oklch()` or Tailwind custom colors once decided. For now, placeholder with Tailwind slate/blue/amber/teal scales.

### Typography

- Monospace for code/CLI references
- Sans-serif for body (Inter, system-ui, or similar — designer decision)
- Keep it readable and technical, not "designed"

### The Hero Visual

The **interactive 5-layer stack diagram** is the centerpiece:

```
4. Interfaces      — LibreChat, Slack bots, Streamlit
3. App & Orchestration — n8n, MCP Servers, FastAPI agents
2. Data & Privacy  — MinIO, Qdrant, pgvector, IAM
1. Infrastructure & Day-2 — vLLM, LiteLLM, OpenBao, Grafana
0. Mesh & Connectivity — Teleport, WireGuard
```

- Implement as an Astro component with vanilla JS interactivity (click to expand, layer details)
- Layer numbers must be prominent (people will refer to "Layer 2")
- On mobile: collapse to accordion or horizontal swipe
- Track this in a feature file or TODO once scaffolding is done

### Tone

Write as one engineer to another. No fluff, no hype. If a sentence would sound out of place in a technical RFC, it doesn't belong on the site. Prefer specific claims over generic statements.

| ✅ Do | ❌ Don't |
|-------|---------|
| "Zero data leaves your network." | "Your data is safe with us." |
| "vLLM serves open-weight models on your GPUs." | "AI-powered cloud magic." |
| "6–8 weeks to production deployment." | "Transform your business overnight." |

## Personas (from Brief)

The site must speak to three audiences simultaneously on the homepage:

1. **CISO / Security Architect** — zero data leak, audit trails, IAM governance
2. **CTO / VP Engineering** — turnkey deployment, no vendor lock-in, flexible tooling
3. **DevOps / Platform Engineer** — day-2 operations, air-gapped, self-hosted

## Call to Action (Primary)

> **Deploy your first agent in 6 weeks →** [Schedule a discovery call]

Secondary CTAs also defined in the brief (download one-pager, read technical deep-dive).

## Site Structure

```
/                  — Single-scroll homepage (hero + stack + use cases + how it works + FAQ + CTA)
/architecture      — Full layer-by-layer breakdown
/use-cases         — Expanded case studies (3+)
/blog              — Technical posts, benchmarks, update logs
/contact           — Booking / discovery call form
```

## Priority Tasks (First Session)

1. **Scaffold** the Astro project (`pnpm create astro@latest`)
2. **Configure** Tailwind CSS, TypeScript, and GitHub Pages deploy workflow
3. **Create** `BaseLayout.astro` with meta tags, fonts, and global styles
4. **Build** the homepage sections in order: Hero → Problem → Stack Diagram → Use Cases → How It Works → FAQ → CTA/Contact
5. **Implement** the interactive 5-layer stack diagram (`StackDiagram.astro`)
6. **Create** placeholder pages for `/architecture`, `/use-cases`, `/blog`, `/contact`
7. **Set up** blog Content Collection with sample post

## Skills

Pi discovers actual skill files from `.pi/skills/<name>/SKILL.md`. Each skill has proper frontmatter (`name`, `description`) and step-by-step instructions. They can be invoked via `/skill:name` in Pi's interactive mode.

This section is a quick-reference summary. The canonical version of each skill lives in its SKILL.md file.

### Skill: commit-and-push

**File:** `.pi/skills/commit-and-push/SKILL.md`

Stages, commits (Conventional Commits), and pushes changes. Steps: check status → review diffs → stage → commit with conventional prefix → push → confirm.

### Skill: update-agents-md

**File:** `.pi/skills/update-agents-md/SKILL.md`

Updates `agents.md` and corresponding `.pi/skills/` files. Steps: read current → locate section → edit precisely → update skill files if needed → verify → commit.

## Rules for Pi

- Always refer to `WEBSITE_BRIEF.md` before making content or messaging decisions
- All copy must follow the "engineer-to-engineer" tone table above
- Do not introduce dependencies without documenting the rationale in this file
- Keep components small and focused; prefer `src/components/` over deeply nested directories
- Use TypeScript for all `.astro` script blocks and `.ts` files
- Tailwind utility classes preferred over custom CSS (custom CSS goes in `src/styles/` with a comment explaining why)
- Images go in `public/images/`; icons can be inline SVGs in `src/components/icons/`
- Default branch is `main`; all work on feature branches
- After scaffolding, run `pnpm build` to verify it compiles before committing
