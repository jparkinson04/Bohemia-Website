# How to run the Bohemia Next.js site

A practical, copy-paste guide for running, building, and deploying the site.
Written for someone who isn't a daily developer — every command shows what to type, and what you should see.

---

## One-time setup (only ever do this once per machine)

You only need to do this if you've cloned the project on a new computer or
reinstalled macOS. The version of Node.js it requires is already installed at
`~/.local/share/node/`.

### 1. Install dependencies

```bash
# Install all the npm packages the site depends on
cd "/Users/jessieparkinson/Desktop/bohemia-next"
npm install
```

You should see something like `added 357 packages in 20s`. That's it.

### 2. Add your Anthropic API key (for the chatbot)

The Bohemia assistant in the bottom-right corner needs an Anthropic API key
to work. Without one, clicking the bubble shows a friendly "not yet connected"
message — the rest of the site is unaffected.

1. Go to <https://console.anthropic.com> and sign in (or sign up — free $5
   credit gets you started).
2. Click **Settings → API Keys → Create Key**. Name it "Bohemia website".
3. Copy the key it shows (starts with `sk-ant-...`). **You only see it once**
   — copy it immediately.
4. Open `.env.local` in VS Code and paste your key after the equals sign:

   ```
   ANTHROPIC_API_KEY=sk-ant-paste-your-real-key-here
   ```

5. Save. **Stop and restart `npm run dev`** so the new env var is picked up.

The bubble in the bottom-right will now stream real answers about Bohemia.

**Cost rule of thumb**: each conversation costs ~£0.001 (about a tenth of a
penny) using Claude Haiku 4.5. 1,000 conversations a month ≈ £1. The first
$5 of credit Anthropic gives you covers ~5,000 conversations.

---

## Day-to-day: working on the site locally

### Start the dev server

```bash
cd "/Users/jessieparkinson/Desktop/bohemia-next"
npm run dev
```

You'll see:

```
▲ Next.js 16.x
- Local:   http://localhost:3000
✓ Ready in 200ms
```

Open **http://localhost:3000** in your browser. Edit any file and the page
hot-reloads automatically.

To stop the server, press **Ctrl + C** in the terminal.

### Routes

| URL | What it shows |
|---|---|
| `/` | Home — hero, about teaser, sessions preview, reviews preview, CTA |
| `/about` | Claire's full story |
| `/sessions` | All 6 offerings |
| `/book` | Ticket Tailor booking iframe |
| `/reviews` | All testimonials |
| `/contact` | Email, form, address, phone, socials |

---

## Build for production

Run this before deploying — it confirms everything compiles and produces an
optimised build.

```bash
cd "/Users/jessieparkinson/Desktop/bohemia-next"
npm run build
```

You should see all 6 pages listed under "Route (app)" with `○ (Static)` next to
each — that means they prerender as static HTML, which is fast and cheap to
host.

To preview the production build locally:

```bash
npm run start
```

---

## Deploy

Easiest path: **Vercel** (the company that builds Next.js — free tier covers
this site many times over).

1. Push the project to a GitHub repository (`git add .`, `git commit -m "Initial Next.js build"`, then push).
2. Go to <https://vercel.com> → "Add new project" → import the GitHub repo.
3. Vercel auto-detects Next.js. Click **Deploy**.
4. You'll get a URL like `bohemia-next.vercel.app`. Add Claire's domain in
   Vercel's "Domains" settings when she has one.

---

## Editing content (no Next.js knowledge required)

| What you want to change | File |
|---|---|
| Hero headline / subtitle | `components/Hero.tsx` |
| About story (home + /about) | `app/page.tsx` and `app/about/page.tsx` |
| Sessions list / descriptions | `data/sessions.ts` |
| Testimonials | `data/testimonials.ts` |
| Locations / phone / socials | `components/LocationsList.tsx` |
| Email address | search project for `hello@bohemia-wellness.co.uk` |
| Brand colours / fonts | `app/globals.css` (the `:root` block at the top) |
| Photos | `public/images/` (replace files; keep filenames) |
| Chatbot knowledge & tone | `lib/chatbot-prompt.ts` |
| Chatbot suggested questions | `components/ChatBot.tsx` (the `SUGGESTIONS` array) |
| Chatbot model (cost vs quality) | `app/api/chat/route.ts` (the `anthropic('claude-haiku-4-5')` line) |

After saving any file with `npm run dev` running, refresh the browser — the
change appears instantly.

---

## Useful commands cheat-sheet

```bash
npm run dev       # Development server with hot reload (localhost:3000)
npm run build     # Production build — must pass before deploy
npm run start     # Serve the production build locally
npm run lint      # ESLint check for code issues
```

---

## Troubleshooting

**`command not found: npm`**
The terminal can't find Node. Open a new terminal window and try again. If it
still fails, ensure `~/.local/share/node/bin` is in your PATH (it was added to
`~/.zshrc` during setup).

**Port 3000 already in use**
Something else is using port 3000. Either stop it, or run on a different port:
`npm run dev -- -p 3001`.

**A page shows a TypeScript / module error in your editor**
If you've just cloned the repo, run `npm install` first — that fetches the
type definitions that VS Code is complaining about.
