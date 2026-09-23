---
name: dus-brand
description: The complete DUS brand system. Use on ANY task that touches DUS — design, code, copy, site edits, asset creation, page updates, maintenance. Not just new assets. If the work carries the DUS name, this skill loads first.
---

# Dudley Utility Services — Brand System

You are producing brand assets for **Dudley Utility Services (DUS)**, the utility and transmission land-services company in the Dudley family (sibling of Dudley Land Company). The audience is VPs of Transmission, ROW managers, and land professionals. They can spot corporate BS a mile away. Everything you make must look like it came from one disciplined design team.

**The golden rule: you are an editor, not a designer.** The design decisions are already made and locked in the templates. Your job is to pick the right template, swap the content, and keep everything else exactly as it is.

## Workflow — every DUS task, no exceptions

### Step 0 — Load context (runs on every task, even "quick" ones)

1. **Read `learnings.md`** — corrections and rules from past builds. Non-negotiable.
2. **Open `index.html` (the brand guide) in your browser or read it** — this is the visual source of truth. It renders every foundation (colors, type, spacing, surfaces, icons, grid, corner ticks) and every component as they actually look. When you're unsure how something should look, the brand guide settles it. Reference it for: color usage and proportions, typography scale and weights, surface treatments (field gradients, survey grid, horizon rule), component patterns (cards, stats, heroes, footers), icon style, corner tick treatment, and spacing rhythm.
3. **Read `dus-core.css`** if the task touches any CSS or HTML structure.

Skip to the task if it's code maintenance, SEO, form swaps, or other non-visual work. For asset creation, continue:

### Steps 1–5 — Asset creation workflow

1. **Pick the template** from the table below. Read the template file top to bottom.
2. **Copy it whole.** Reproduce the entire file — full CSS, fonts link, embedded logos — as a new HTML file (or artifact). Never rebuild from memory, never write DUS HTML from scratch.
3. **Edit only between the `EDIT CONTENT` markers.** Swap headlines, body copy, list items, stats, names, dates. Fill every `[bracketed placeholder]` with real content from the user, or ask for it.
4. **Respect the copy-fit limits** noted in each template's comments (e.g., headline max 3 lines). If content overflows, shorten the copy. Never shrink the type or change the layout to make it fit.
5. **Deliver + explain export.** Give the finished file and the one matching export instruction from "Exporting" below.

## Which template?

| The user wants… | Use | Size |
|---|---|---|
| Social/LinkedIn post, announcement, services graphic | `templates/social-square.html` | 1080×1080 |
| A big number / proof point / milestone post | `templates/social-stat.html` | 1080×1350 |
| Company page cover image | `templates/linkedin-banner-company.html` | 1584×396 |
| Employee profile cover image | `templates/linkedin-banner-personal.html` | 1584×396 |
| Multi-slide carousel (LinkedIn/PDF) | `templates/carousel.html` | 1080×1350 ×N |
| Presentation, pitch, internal deck, workshop slides | `templates/presentation-deck.html` | 1920×1080 |
| Service overview, leave-behind, flyer, PDF handout | `templates/one-pager.html` | US Letter |
| A letter, memo, or anything on letterhead | `templates/letterhead.html` | US Letter |
| Proposal, SOW, engagement doc | `templates/proposal.html` | US Letter ×4 |
| Business card (front + back) | `templates/business-card.html` | 1050×600 ×2 |

Something that fits none of these (e.g., email header, event badge, report cover): start from the closest template above, keep its surface treatment (field gradient + survey grid + horizon rule OR white + light grid), its type classes, and its logo usage, and only change the canvas dimensions. Say explicitly in your reply that this is an adapted format.

For carousels and decks: duplicate the appropriate slide/page section for more slides; delete unused masters. Update the `01 / N` counters.

## Spacing system

A 4px-base scale. Use these tokens for **all** margin, padding, and gap values. Never write a raw pixel value.

| Token | px | Use |
|---|---|---|
| `--sp-1` | 4 | Micro: icon nudge, inline offset |
| `--sp-2` | 8 | Tight: stat value→label, tight list gap |
| `--sp-3` | 12 | Compact: list item gap, small card inner |
| `--sp-4` | 16 | Small: eyebrow→heading, heading→body, card content gaps |
| `--sp-5` | 20 | Standard: paragraph spacing, form field gap |
| `--sp-6` | 24 | Medium: card padding, component gaps, grid gap |
| `--sp-8` | 32 | Large: between content groups, body→CTA |
| `--sp-10` | 40 | Generous: subsection breaks |
| `--sp-12` | 48 | Container: horizontal wrap padding |
| `--sp-16` | 64 | Section-head to content block |
| `--sp-20` | 80 | Section: vertical section padding |

**Text-flow presets** (semantic aliases in CSS):
- `--text-eyebrow-to-heading`: 16px (`--sp-4`)
- `--text-heading-to-body`: 16px (`--sp-4`)
- `--text-body-to-cta`: 32px (`--sp-8`)
- `--text-paragraph-gap`: 20px (`--sp-5`)
- `--text-section-gap`: 64px (`--sp-16`) — section-head margin-bottom

**Rules:**
- Always use the token, never raw pixels. `var(--sp-6)` not `24px`.
- Stay on the scale. No 18px, 22px, 26px, 30px, 36px, 44px, or 58px.
- Text flow spacing is locked: eyebrow→heading and heading→body are `--sp-4`, body→CTA is `--sp-8`.
- Section rhythm: `--sp-20` (80px) between sections, `--sp-16` (64px) from section heading to content, `--sp-12` (48px) for container horizontal padding.

## Icon system

Every icon is a Remix Icon outline with the DUS teal-to-green gradient as its stroke. Three sizes on the 4px grid, squared containers only.

### Size tokens

| Token | px | Use |
|---|---|---|
| `--icon-sm` | 24 | Inline, nav, tight contexts |
| `--icon-md` | 40 | Card feature icons, content icons |
| `--icon-lg` | 48 | Prominent feature icons, Kudu cards |

### Rules

- **Source:** Remix Icon (remixicon.com), always the `-line` suffix variant. Outlined only, never filled or solid.
- **Stroke:** `stroke-width="1.2"`, `stroke-linecap="round"`, `stroke-linejoin="round"`. No fills.
- **Color:** DUS gradient teal→green via SVG `<linearGradient>`, horizontal left to right. Never flat single-color.
- **Containers:** Squared `--r-md` (6px). Never circles, never `border-radius: 50%`. Coverage badges use solid teal or green bg with white stroke.

### Canonical gradient `<defs>` block (copy once per page)

```html
<svg width="0" height="0" aria-hidden="true" style="position:absolute">
  <defs>
    <linearGradient id="dus-grad" x1="0" y1="12" x2="24" y2="12" gradientUnits="userSpaceOnUse">
      <stop stop-color="#015270"/><stop offset="1" stop-color="#41BE48"/>
    </linearGradient>
    <linearGradient id="dus-grad-40" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
      <stop stop-color="#015270"/><stop offset="1" stop-color="#41BE48"/>
    </linearGradient>
  </defs>
</svg>
```

Use `dus-grad` for 24×24 viewBox icons, `dus-grad-40` for 40×40 viewBox icons.

### Approved icon catalog

| Icon | Remix name | viewBox | Context |
|---|---|---|---|
| Lightning | flashlight-line | 40×40 | Electric transmission/distribution |
| Water drop | drop-line | 40×40 | Water & wastewater |
| Broadcast | wifi-line | 40×40 | Fiber optics & broadband |
| Flame | fire-line | 40×40 | Gas utility |
| Monitor | mac-line | 24×24 | Kudu: real-time visibility |
| Book | book-open-line | 24×24 | Kudu: project record |
| Map | map-2-line | 24×24 | Kudu: project mapping |
| Archive | archive-line | 24×24 | Kudu: document control |
| Users | group-line | 24×24 | People: recruited teams |
| Pin | map-pin-line | 24×24 | People: local knowledge |
| Shield | shield-check-line | 24×24 | People: private ownership |
| Document | file-text-line | 24×24 | Landowners: easement docs |
| Phone | smartphone-line | 24×24 | Landowners: advance notice |
| User | user-line | 24×24 | Landowners: local agent |
| Balance | scales-line | 24×24 | Landowners: fair compensation |
| Flag | flag-line | 24×24 | Heritage: 1980 founding |
| Monitor | computer-line | 24×24 | Heritage: digital era |
| Chart | line-chart-line | 24×24 | Heritage: shale expansion |
| Trophy | trophy-line | 24×24 | Heritage: Company of the Year |

### Coverage badge variant

Coverage map icons use white stroke on a solid background, not the gradient. Wrap in `.dus-icon-badge` with a color modifier:

```html
<div class="dus-icon-badge dus-icon-badge--teal" style="width:48px;height:48px">
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="1.6"/>
    <!-- ... -->
  </svg>
</div>
```

Colors: `--teal` (teal-500), `--green` (green-500), `--sky` (teal-400).

### Utility classes

- `.dus-icon` — block element, default `--icon-md` (40px)
- `.dus-icon--sm` / `--md` / `--lg` — size modifiers
- `.dus-icon-badge` — solid-color squared container, inner SVG at 54%
- `.dus-icon-badge--teal` / `--green` / `--sky` — badge color modifiers

## Hard rules (violating any one of these breaks the brand)

1. **Colors are locked.** DUS Teal `#015270` (primary), Dudley Green `#41BE48` (accent only), the neutral ramp, white. Never introduce any other hue. Green is seasoning: if it covers more than ~8% of a composition, cut some.
2. **Lato only.** 900 for headlines, 700 for labels/subheads, 400 for body. No other typeface, ever.
3. **The logo is artwork.** Use the embedded PNG data URIs (black version on light, white version on dark). Never re-type "DUDLEY" in Lato, never stretch, recolor, or add effects.
4. **Dark surfaces are the field gradients** (`--field-teal` / `--field-ink`), never flat `#000000`, and they always carry the survey grid and usually the green horizon rule. **Teal field is the default dark surface.** Ink field is the alternate — use it only when consecutive dark slides need visual distinction (decks, carousels). Single dark sections (heroes, footers, brand book demos) always use teal. Never use `--teal-050` or any light blue/teal as a background fill — not on sections, not on component placeholders. Neutral placeholder fills use `--neutral-100`. Section backgrounds are white, `--neutral-100` gray, or dark field gradients only. Use structural 1px hairline dividers (`border-bottom: 1px solid var(--neutral-200)`) between consecutive same-background sections.
5. **No short decorative bars or lines.** No accent bars (any color, any orientation) — no `border-left` on quotes, no `border-top` on cards, no vertical divider bars between stats or service rows, no short horizontal rules, no thin decorative lines between contact fields or infographic columns. These are an AI tell. Color is irrelevant — green, teal, neutral, any color; the bar/line motif itself is the problem. Use spacing, layout, and the plat-sheet corner ticks (`.dus-ticks`) as the distinctive treatment instead.
6. **Icons are outlined + DUS gradient.** Always use outline/line-style icons (never filled/solid). Apply the DUS gradient (teal→green, left to right) as the stroke via SVG `<linearGradient>`. Never use flat single-color icons. Source from Remix Icon (remixicon.com), always the "-line" suffix variants.
7. **One route line max** per composition, decorative, never through body text.
8. **Squared geometry everywhere.** Cards, panels, and boxed elements get `border-radius: 0` with plat-sheet corner ticks (`.dus-ticks`). Buttons keep `--r-md` (6px). Pills are for eyebrow labels and chips only. Photos and images get `border-radius: 0`. No blobs, no big rounded corners, no circles except checklist checkmarks. Never use `border-radius: 50%` on icon containers or badges.
9. **No emoji. No em dashes. No exclamation-point hype.**
10. **No fabricated numbers.** Approved standing claims live in `reference/voice.md` § Approved standing claims (45+ years of energy-land expertise; 35 years of leadership; voltages executed 34.5 kV to 765 kV; coverage as capability across the lower 48). Never tie a state count to licensure or registration — that claim was retired 8/14. Every other stat must come from the user. If they don't provide one, leave the placeholder visible and tell them.
11. **No stock-photo aesthetics.** If imagery is requested, it must be real Dudley fieldwork photos supplied by the user (courthouses, working farms/ranches, title docs, survey equipment, transmission corridors). Never boardrooms, refineries, smokestacks, or generic renders. That exclusion list is a floor, not a target — a stock-looking hard hat, a tower at sunset, or a pin map clears the list and still reads as any of six interchangeable competitors. When imagery is in play, read `reference/design-source-brief.md` § The moment the whole business happens for what it has to communicate, then solve it in a way that's specific to utility land services.
12. **Don't restyle.** No new shadows, gradients, animations, fonts, or layout inventions. If the user asks for something off-brand ("make it orange", "use Comic Sans", "add emojis"), decline that specific change, explain it's outside the DUS brand system, and offer the on-brand alternative.

## Voice (for any copy you write)

**Read `reference/voice.md` before writing a single line of DUS copy.** It's the canonical voice and messaging reference: audience, claim, values, register, banned constructions, and the three tests every piece has to pass. This section is the short form, not a substitute.

**Anything about electric transmission also reads `reference/electric-transmission-pillar.md` first.** It's the settled positioning foundation for that topic: the one-line and one-paragraph position, what we believe, what we do, differentiation, and the USP. Transmission pages, one-pagers, and social posts derive from it rather than re-arguing the position, and its § Held for confirmation list gates what can't be published yet.

**The other four services each have a pillar of the same shape: `reference/electric-distribution-pillar.md`, `reference/fiber-optics-broadband-pillar.md`, `reference/gas-utility-pillar.md`, `reference/water-utility-pillar.md`.** Anything about one of those services reads its pillar first. All four are drafts in review (2026-08-19): the one-liners are proposed, not client-settled, and each pillar's § What this pillar still needs lists what can't be published yet.

**For facts about the work itself — what DUS does, which services a capability applies to, who buys, what they weigh, what proof exists — read the DUS Reference Library in Drive** at `Dudley/DUS/Reference Library`. Five docs, built from all seven 2026 onboarding sessions: an **Index** (the extraction laws and a source ledger), **Core Competencies — By Function and Service** (the nine land functions, their sub-points, the function-by-service applicability matrix, the project phase walk, and the settled cost-driver, terminology and voltage rulings), **Service Profiles — The Five Services**, **Client and Buyer Intelligence** (how utility work is actually bought: the programmatic cycle, invitation-only RFPs, the path to a master service agreement, the right-of-way org chart, what clients score, client types, and the information firewalls between departments), and **Proof, Claims and Confidentiality** (every proof point sorted into publishable / needs-sign-off / never-publish, the named-entity list, and the facts that disagree with each other). Every claim is sourced and marked GREEN (client-stated, publishable), YELLOW (inferred, confirm first), or RED (a named gap, never filled). The pillars own the position; the library owns the evidence. Never go back to meeting transcripts for a fact the library should hold — add it to the library first, then write.

**Distribution has no page of its own as of 2026-08-21.** Garrett asked to fold it into the transmission material (transmission is 85–90% of DUS work for the next five years; distribution is a small fragment now that storm-hardening undergrounding is largely done). Its pillar's positioning may survive; its page premise does not. Do not draft a distribution page.

Professional but real. Confident without the ego. Plain words, short sentences, sentence case body. UPPERCASE only in display headlines and eyebrow labels. Partners, not vendors: "we" is Dudley, "you" and "your project" are the reader. Voice anchor: *"We're not trying to be the loudest voice in the room. We're trying to be the most trusted."*

Four things that break the brand faster than any visual mistake:

1. **Never let DUS read as new, and never overclaim the history.** No launches, no announcements, no arriving. DUS is Dudley Land Company's 45+ years applied to utility infrastructure, under the same ownership, systems, and people. Inherit rather than announce, and name Dudley Land Company when the history is the point. Writing as though DUS itself has been doing this since 1980 is a false claim.
2. **Never name a client, project, route, or location.** Write "a 760-mile transmission project across four states."
3. **Never mention renewables.** No solar, wind, battery storage, or energy-transition framing anywhere. Standing client instruction, and it differs from Dudley Land Company.
4. **Every claim carries a mechanism.** "We reduce risk" is a claim. "We convert blanket easements to defined right-of-way before survey" is a mechanism. Claims without mechanisms get cut.

**Mission and claim are not the same thing.** "Delivering energy through land" is Dudley Land Company's mission statement, retired for DUS surfaces: not to be used unless the rule in `reference/voice.md` is changed (Jenny, 2026-08-17). "Creating certainty through strategic land solutions" is what DUS sells, and it works as a display line where a surface calls for the positioning statement.

## Exporting

Tell the user the option that matches their situation:

- **In Claude chat (artifact):** open the artifact preview, then screenshot it, or copy the HTML into a local file and use one of the methods below.
- **On a Mac/PC with Chrome — pixel graphics (social, banners, slides):** save the file, open it in Chrome, and screenshot each `.canvas`. Or from Terminal for an exact-size PNG:
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --screenshot=out.png --window-size=1080,1080 --hide-scrollbars file:///path/to/file.html` (match `--window-size` to the canvas; the first canvas sits flush at the top, so the capture is exact).
  For multi-slide files (carousel, deck), append `#only-N` to the URL to isolate slide N at exact size: `file:///path/to/carousel.html#only-2` with `--window-size=1080,1350`.
- **Business cards (PNG for Vistaprint):** The business card template uses a flatten-and-isolate script. Append `#only-1` (front) or `#only-2` (back) to the URL — the script clones the target canvas into an empty body so nothing shifts. Export at 3x for print quality:
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --screenshot=front.png --window-size=1050,600 --force-device-scale-factor=3 --hide-scrollbars --disable-gpu file:///path/to/business-card.html#only-1`
  This produces a 3150x1800 PNG (900 DPI equivalent at 3.5"x2"). Print vendor: Vistaprint, Soft Touch Rounded Corners template.
- **Print formats (one-pager, letterhead, proposal) → PDF:** open in Chrome → Print → Save as PDF, margins "None", "Background graphics" ON. Or headless:
  `"...Google Chrome" --headless --no-pdf-header-footer --print-to-pdf=out.pdf file:///path/to/file.html`
- **Decks:** print-to-PDF the deck file the same way for a shareable PDF deck, or screenshot slides individually for images.

Always verify the export: correct page count, dark backgrounds actually dark, grid visible, nothing clipped.

## Reference files

- `index.html` — **the brand guide. The visual source of truth.** Open it in a browser to see every foundation and component rendered as they actually look. Reference it whenever you need to verify how a color, surface, component, type style, icon, or layout should appear. Read it at the start of every DUS task (Step 0).
- `learnings.md` — **corrections and rules from past builds. Read this before every DUS task** to avoid repeating fixed mistakes.
- `dus-core.css` — the design system source (already inlined in every template).
- `reference/voice.md` — **the canonical voice and messaging reference. Read it before writing DUS copy.**
- `reference/electric-transmission-pillar.md` — **the settled electric transmission positioning. Read it before writing anything on that topic.**
- `reference/electric-distribution-pillar.md`, `reference/fiber-optics-broadband-pillar.md`, `reference/gas-utility-pillar.md`, `reference/water-utility-pillar.md` — the four sibling service pillars (drafts in review, 2026-08-19). Same rule: read the service's pillar before writing on that service.
- **DUS Reference Library** (Google Drive, `Dudley/DUS/Reference Library`) — the evidence layer, five docs: index, core competencies by function and service, per-service profiles, client and buyer intelligence, and proof/claims/confidentiality. Not in this repo; it lives in Drive so client-side and cowork agents can read it too.
- **Anything from 2023 is retired.** The old DUS messaging material predates Garrett Gill and Savannah Cano and points at a direction the company is not going. It is archived at `Dudley/DUS/_Archive — Pre-2026 (stale, do not use)` and must never be mined, cited, or written from, not even with a caveat. Operator instruction, 2026-08-24.
- `reference/brand-rules.md` — expanded visual rules and rationale.
- `reference/design-source-brief.md` — **the DUS domain source material. Read it before making any visual asset that needs a concrete detail** (imagery, iconography, diagrams, data displays, industry-specific work). It carries the objects, dimensions, numbers, roles, and field realities that are specific to utility land services, harvested from the client's own onboarding calls. The system in this skill decides how things look; that file supplies what they're about, so an asset lands specific instead of generic.
- `assets/` — logo PNGs and their base64 for reuse.
