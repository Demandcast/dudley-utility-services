# Dudley Utility Services — Brand & Design System

The complete DUS brand system, packaged so anyone at Dudley can generate on-brand assets with Claude: social posts, LinkedIn covers (company and personal), carousels, presentation decks, one-pagers, letterhead, and proposals.

You describe the content. The system owns how it looks.

## Start here

**Open the brand book:** download or clone this repo and open `dus-brand/index.html` in a browser. It shows the whole system: logo rules, color, type, motifs, components, and live previews of every template.

**Set up Claude (one time):** follow `dus-brand/README-FOR-DUS.md`. Three paths, pick one:

| You use… | Setup |
|---|---|
| Claude.ai with Skills | Zip the `dus-brand` folder (or grab the zip from the latest [Release](../../releases)) and upload it under Settings → Capabilities → Skills |
| A shared Claude Project | Paste `dus-brand/PROJECT-INSTRUCTIONS.md` into the Project instructions and upload the `dus-brand` files as knowledge |
| Claude Cowork / Claude Code | Point your session at the `dus-brand` folder |

Then just ask: *"Make a LinkedIn post announcing our new Director of Operations"* or *"Draft a proposal for [Client] for ROW acquisition, 4 phases."*

## What's in the box

```
dus-brand/
  index.html             The brand book — open in a browser
  SKILL.md               Claude's instruction manual (locked rules + workflow)
  README-FOR-DUS.md      Human setup + usage guide
  PROJECT-INSTRUCTIONS.md Paste-in text for a Claude Project
  dus-core.css           Design system source (tokens, motifs, components)
  templates/             10 locked HTML templates Claude copies and fills
  reference/voice.md     Canonical voice and messaging (read before writing copy)
  reference/brand-rules.md  Distilled visual rules
  assets/                Official DUS logo files (current masters in assets/logo/)
  exemplars/             Captures of the shipped, public-facing work, with an index
  podcast/               Podcast branding kit and backgrounds
samples/                 Rendered examples (PNG + PDF) of what the system produces
```

## Ground rules

- Colors: **DUS Teal `#015270`** (primary), **Dudley Green `#41BE48`** (accent, sparingly), ink, gray, white. Nothing else.
- Type: **Lato**, three weights. The DUDLEY wordmark is artwork, never re-typed.
- The signature motif is the **route alignment**: a surveyor's dash-dot centerline with easement corridor, PI monuments, and station ticks, over a plat-style survey grid.
- No emoji, no hype words, no invented numbers. Approved standing claims live in `dus-brand/reference/voice.md`: 45+ years of energy-land expertise, 35+ combined years of leadership, voltages executed up to 765 kV, and coverage across the lower 48.
- Voice is canonical in `dus-brand/reference/voice.md`. DUS never reads as new, never names a client, and never mentions renewables.

## The site

This repo is connected to Vercel through GitHub. **Pushing to `main` is the deploy** —
Vercel builds and publishes automatically. There is no CLI upload and no manual deploy
step; never run `vercel deploy` or upload from a temp folder.

```
index.html            landing page, links to everything below
pages/                rendered pages (brand-voice, and whatever comes next)
dus-brand/index.html  the brand book
vercel.json           static config: clean URLs, security headers
```

Branch pushes get their own preview URL, which is the right way to share something for
review before it goes to `main`.

Adding a page: build it from a template per `dus-brand/SKILL.md`, drop it in `pages/`,
add a link on `index.html`, and push.

## Making changes

The templates are locked by design — consistency is the product. If something needs to evolve (new template, new claim, contact block updates), change it here and cut a new release so every copy stays in sync. Maintained with the Demandcast team.
