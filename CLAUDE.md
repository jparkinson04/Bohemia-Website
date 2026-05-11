# CLAUDE.md — Bohemia Next.js site

This document explains the Bohemia design system, project structure, and conventions to any future agent or developer working on this codebase.

> **Read this before making changes.** Brand fidelity is the most important
> constraint here — Claire Whitfield's brand is established and should not
> drift.

---

## What this site is

A Next.js 16 (App Router) website for **Bohemia**, a sound healing & wellness
business founded by **Claire Whitfield**. The site is intentionally calm,
grounded and luxurious — it should feel like a slow exhale.

It is built by Jessie at **All Sorted Media** as a portfolio showcase and a
gift to Claire. The original was a single-page static HTML site (still
preserved at `/Users/jessieparkinson/Desktop/Bohemia Website/`); this Next.js
version is the production codebase going forward.

---

## Tech stack

| Concern | Choice | Why |
|---|---|---|
| Framework | **Next.js 16** (App Router) | Industry standard for React in 2026, easy Vercel deploy, static export of every page |
| Language | **TypeScript** | Catches mistakes early, helps future agents read the code |
| Styling | **Plain CSS** in `app/globals.css` (no Tailwind, no CSS modules) | Preserves the rich brand styling exactly as-designed; one source of truth |
| Fonts | **`next/font/google`** loading Italiana + Cormorant Garamond | Self-hosted, no FOUT, no extra network requests |
| Images | **`next/image`** | Automatic optimisation, lazy loading, modern formats |
| Forms | Static contact form (TODO: wire to Formspree) | No backend needed |
| Booking | **Ticket Tailor** iframe at `/book` | Claire's existing booking platform |
| AI assistant | **Vercel AI SDK v6** + **Anthropic Claude Haiku 4.5** | Streamed FAQ chatbot at `/api/chat`, mounted on every page |

---

## Brand & design system

### Colours

Defined as CSS custom properties in `app/globals.css` `:root`. **Do not redefine
these values; reuse the variables.**

| Variable | Hex | Use |
|---|---|---|
| `--sand` | `#f6debe` | Page background, nav bar (matches the cream backdrop of Claire's logo so it blends seamlessly) |
| `--cream` | `#FDFAF5` | Off-white panel surfaces (cards, alt sections, embed wrappers) |
| `--gold` | `#B8860B` | Accent colour — eyebrow text, links, primary buttons, quote marks |
| `--gold-soft` | `#c9982a` | Hover state for gold |
| `--ink` | `#2C1810` | Primary text, footer background, ghost-button border |
| `--taupe` | `#4f3018` | Secondary text (descriptions, leads, addresses). **Was lightened previously and confirmed too pale — keep this dark.** |
| `--line` | `rgba(44, 24, 16, 0.12)` | Subtle separators |

### Typography

- **Headings** use `--font-italiana` (Italiana, an elegant display serif). Light
  letter-spacing only — Italiana is delicate, don't crowd it.
- **Body** uses `--font-cormorant` (Cormorant Garamond). Generally weight 400 or
  500. The body sits at 19px on desktop, 18px on mobile.
- **Eyebrows** are small, all-caps, gold, very wide letter-spacing (0.32em).
  They give each section a quiet prelude before the heading.

Both font families are loaded via `next/font/google` in `app/layout.tsx`, which
generates the CSS variables. Never load fonts via `<link>` tags.

### Spacing & shape

- **Border-radius** is generous: `--r-sm` 12px, `--r-md` 20px, `--r-lg` 32px,
  `--r-xl` 48px. Sharp corners feel clinical — avoid them.
- **Section padding** is responsive: `clamp(64px, 9vw, 128px)`. This is
  intentional — keep sections breathing.
- **Containers** are capped at 1180px (`--maxw`).

### Motion

- Hover transitions use the shared `--t` token: `0.35s cubic-bezier(.2,.7,.2,1)`.
- Hero has a **drifting aurora** — two stacked `::before`/`::after`
  pseudo-elements with radial-gradient orbs that float and rotate on a
  14s/19s cycle. Uses `mix-blend-mode: screen` so the orbs feel like light, not
  paint. This is the brand's "spiritual" signature — leave it intact.
- All animation is gated behind `@media (prefers-reduced-motion: reduce)` which
  disables it entirely. Never add an animation that ignores this.

### Tone of voice in copy

- Calm, grounded, gently reverent. Not new-age cliché.
- No em-dashes — the user requested commas instead. Hyphens in compound words
  like *much-needed* or *boho-luxury* are fine.
- Honour Claire's voice as captured in `app/about/page.tsx` and
  `data/sessions.ts`.

---

## Project structure

```
bohemia-next/
├── app/                     # App Router routes
│   ├── layout.tsx           # Root layout — fonts, Header, Footer, ChatBot, metadata
│   ├── page.tsx             # Home (/)
│   ├── globals.css          # ALL site styles (incl. chatbot UI)
│   ├── about/page.tsx       # /about
│   ├── sessions/page.tsx    # /sessions
│   ├── book/page.tsx        # /book — Ticket Tailor iframe
│   ├── reviews/page.tsx     # /reviews
│   ├── contact/page.tsx     # /contact — form, locations
│   └── api/chat/route.ts    # POST endpoint — streams Claude responses
├── components/              # Reusable React components
│   ├── Header.tsx           # Fixed nav bar (client — uses pathname + state)
│   ├── Footer.tsx           # Footer (server)
│   ├── Hero.tsx             # Home-page hero with aurora animation
│   ├── PageBanner.tsx       # Smaller banner for inner pages
│   ├── PullQuote.tsx        # Cream-coloured quote band
│   ├── SessionCard.tsx      # Single offering card
│   ├── SessionsGrid.tsx     # Grid wrapper around SessionCard
│   ├── TestimonialCard.tsx  # Single testimonial with photo
│   ├── TestimonialsGrid.tsx # Grid wrapper around TestimonialCard
│   ├── InstagramFeed.tsx    # Elfsight Instagram widget on home
│   ├── ContactForm.tsx      # Contact form (client — has state)
│   ├── LocationsList.tsx    # "Find Claire" address/phone/social card
│   └── ChatBot.tsx          # Floating AI assistant (client — uses useChat)
├── data/                    # Content as plain TypeScript
│   ├── sessions.ts          # Array of Session — edit to change offerings
│   └── testimonials.ts      # Array of Testimonial — edit to change reviews
├── lib/
│   └── chatbot-prompt.ts    # System prompt for the AI assistant
├── public/
│   └── images/              # All site photos (referenced as /images/...)
├── .env.example             # Template for required env vars
├── .env.local               # Real env vars (git-ignored)
├── HOW_TO_RUN.md            # Plain-English run/build/deploy guide
├── CLAUDE.md                # This file
└── package.json
```

### Server vs client components

Most components are **server components** (the Next.js default — no `'use
client'` directive). They render on the server, ship zero JavaScript, and load
fastest. Only components that need state, refs, or browser APIs are marked
`'use client'`:

- `components/Header.tsx` — uses `useState` for the hamburger and `usePathname`
  to highlight the active link.
- `components/ContactForm.tsx` — uses `useState` to show a thank-you on submit.

When in doubt, default to server. Add `'use client'` only when you need
interactivity.

---

## Conventions for future changes

### Adding or editing a session
Edit `data/sessions.ts`. Each entry needs `slug`, `title`, `description`,
`ctaHref`, `ctaLabel`. The card grid auto-renders the new entry.

### Adding or editing a testimonial
Edit `data/testimonials.ts`. Each entry needs `id`, `quote`, `attribution`,
`image` (path under `/public`), `imageAlt`.

### Adding a new page
1. Create `app/<route>/page.tsx`. Default export a function that returns JSX.
2. Add the route to the `navItems` array in `components/Header.tsx`.
3. Optionally add it to the footer in `components/Footer.tsx`.
4. Always export a `Metadata` object for SEO.

### Adding a new image
Drop it in `public/images/`. Reference as `/images/your-file.jpg`. Lowercase,
no spaces, hyphens between words. Always use `next/image` (`<Image>`) not raw
`<img>` for performance.

### Editing what the chatbot knows
Open `lib/chatbot-prompt.ts` and edit `BOHEMIA_SYSTEM_PROMPT`. Keep the
markdown structure (headings, bullet lists) — Claude reads structured prompts
better than walls of text. The system prompt is sent as a cached block on
every request, so longer prompts don't proportionally increase cost after the
first request in any 5-minute window.

### Tuning the chatbot's tone or adding a new "skill"
The system prompt is the only place Bohemia knowledge lives. To make the bot
handle a new topic (e.g. gift vouchers, accessibility, parking), add a section
to the prompt. To change tone, edit the `# Tone` section.

### Switching the chatbot model
In `app/api/chat/route.ts`, change the model id passed to `anthropic(...)`.
Available choices (see `node_modules/@ai-sdk/anthropic/dist/index.d.ts`):

- `claude-haiku-4-5` — current default. Fast, ~£0.001 per conversation.
- `claude-sonnet-4-6` — better reasoning, ~£0.005 per conversation.
- `claude-opus-4-7` — best quality, ~£0.025 per conversation. Overkill for FAQ.

### Adding a new style
Append it to `app/globals.css`. Group it under an appropriate `/* ----- Section
------ */` comment. Reuse existing CSS variables — never hard-code colours.

### Don't
- Don't introduce Tailwind here. The static-CSS approach is deliberate; it
  preserves the design exactly. Future client projects can use Tailwind —
  this one is locked in.
- Don't add em-dashes (`—`) to copy. The user prefers commas. (Hyphens in
  compound words are fine.)
- Don't load fonts via `<link>` — use `next/font`.
- Don't add component libraries (MUI, Chakra, shadcn, etc.) — they'd fight the
  established brand.
- Don't add `<img>` tags — use `next/image`.
- Don't commit `.env.local`. The chatbot's `ANTHROPIC_API_KEY` lives there.
  `.env.example` is the safe-to-commit template; `.env.local` is git-ignored.
- Don't put the API key into client-side code. The chatbot only ever talks to
  the server route at `/api/chat`, which keeps the key server-side.

---

## Known TODOs

| Area | What's needed |
|---|---|
| Contact form | Wire to Formspree (sign up at formspree.io, then in `components/ContactForm.tsx` change to a normal `<form action="https://formspree.io/f/YOUR_ID" method="POST">` and remove the `onSubmit`/`useState` logic) |
| Live Instagram feed | Not yet integrated — when ready, add an Elfsight widget at `/about` or as a new `/instagram` page |
| Google Reviews | Currently using hand-curated testimonials. If a live feed is wanted later, drop an Elfsight Google Reviews embed below `<TestimonialsGrid />` on `/reviews` |
| Custom domain | When Claire has one, set it in Vercel's project Domains settings |
| Open Graph image | Currently uses `/images/hero.jpg`. A purpose-cropped 1200×630 OG image in `/public/og.jpg` would be a small upgrade |

---

## Useful context for any agent inheriting this project

- The original static site lives at `/Users/jessieparkinson/Desktop/Bohemia
  Website/` and is the source of truth for any historical decisions about
  copy, layout, or design.
- The user (Jessie) is a digital marketing consultant, not a daily developer.
  Prefer plain-English explanations over jargon. Tell her exactly which file to
  open and which lines to change rather than just saying "edit the
  configuration".
- The Bohemia logo is at `/public/images/logo.jpg`. Its background colour is
  `#f6debe` — that's why the page background and nav use the same value (the
  logo tile blends seamlessly into the bar instead of looking pasted on).
- All testimonials are real — light-touch copy edits only (punctuation,
  apostrophes), never rewrite client voices.
