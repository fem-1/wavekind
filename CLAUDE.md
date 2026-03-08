# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Wavekind website — a modern, minimalist breathwork & conscious living brand site built with Next.js 14 (App Router) and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Fonts**: DM Sans, Playfair Display, DM Mono (via `next/font/google`)
- **Node**: >=18.17.0

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
```

### Start production server

```bash
npm start
```

### Run the linter

```bash
npm run lint
```

## Project Structure

```
app/
  layout.tsx       — Root layout with font setup and metadata
  page.tsx         — Homepage (assembles all section components)
  globals.css      — Global styles, Tailwind directives, custom utilities

components/
  Nav.tsx          — Fixed header with mobile menu overlay
  Hero.tsx         — Full-screen hero with headline, stats, scroll indicator
  About.tsx        — Philosophy/values two-column section
  Offerings.tsx    — Services list on dark background with hover interactions
  Testimonials.tsx — Auto-rotating testimonial slider
  CTA.tsx          — Dark call-to-action panel
  Footer.tsx       — Site footer with nav links and social links
```

## Design System

### Color palette (defined in `tailwind.config.ts`)

- `cream` / `cream-dark` — off-white backgrounds
- `charcoal` / `charcoal-soft` — near-black for text and dark sections
- `stone` / `stone-light` — muted mid-tones for secondary text
- `sage` — brand blue-gray accent (`#6d91a3`)
- `mint` — brand green accent (`#57cc99`)
- `warm` — warm neutral accent

### Typography

- **Headings**: `font-serif` (Playfair Display) — used for section titles and pull quotes
- **Body**: `font-sans` (DM Sans) — default, weight 300–500
- **Labels/mono**: `font-mono` (DM Mono) — section labels, metadata, numbering

### Conventions

- Section labels use `.section-label` utility: `text-xs tracking-ultra-wide uppercase text-stone font-mono`
- Reveal animations are done with `IntersectionObserver` (no external animation library)
- All `"use client"` components are clearly marked; server components are the default
