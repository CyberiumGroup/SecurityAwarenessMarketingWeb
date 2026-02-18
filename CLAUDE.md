# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for **CyberEscape Platform** — an enterprise cybersecurity awareness training SaaS product that replaces passive slide-based training with gamified escape-room-style challenges. This repo contains only the marketing/landing site, not the platform itself.

**Design reference:** Framer mockup at https://framer.com/projects/Gen-1-5--sSPh9sXQkM61NvGNJWb3-dgLYi

## Commands

- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run build` — Production build
- `npm run lint` — ESLint

## Tech Stack

Next.js 16 (App Router, TypeScript), Tailwind CSS v4, lucide-react icons, clsx + tailwind-merge.

## Architecture

- **Pages** (`src/app/`): Home, Pricing, About, Contact, FAQ, Sign-In. Pages are thin — they compose section components.
- **Section components** (`src/components/sections/`): Hero, ValueProps, FeatureShowcase, AnalyticsPreview, CaseStudy, CTABanner, PricingCards, ContactForm. Each renders a full-width page section.
- **UI components** (`src/components/ui/`): Button, Card, Badge, SectionHeading, PlaceholderImage, Container, Accordion. Reusable primitives.
- **Layout** (`src/components/layout/`): Navbar (client component with mobile menu) and Footer. Rendered in root layout.
- **Constants** (`src/lib/constants.ts`): All marketing content lives here — nav links, value props, pricing data, FAQ items, case study, analytics capabilities. This is the single source of truth for content.
- **Styling**: Dark cybersecurity theme defined in `src/app/globals.css` via Tailwind v4 `@theme inline` — custom colors (background, surface, accent cyan/violet), utility classes (hero-glow, dot-grid, gradient-text).

## Key Content Guidelines

- Product features and marketing copy are defined in `docs/MARKETING-FEATURES.md`
- Page requirements and pricing details are in `docs/requirements.md`
- **Do not include details about specific game modes** — those are subject to change
- Leave placeholder spaces for platform screenshots (use `PlaceholderImage` component)
- Pricing: $2/user/month, 20% annual discount, 14-day free trial (3-5 users)
- Product name "CyberEscape" is stored in `SITE_NAME` constant and may change
- Contact form is UI-only — no backend integration yet
- Sign-In page is a non-functional placeholder
