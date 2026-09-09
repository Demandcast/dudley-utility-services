# DUS Brand Learnings

Corrections and rules established during builds. Read this before every DUS design task.

## Corner Treatment (Established 2026-08-25, from Jenny's feedback)

**Rule: All cards, panels, and boxed elements use straight corners (border-radius: 0) with plat-sheet corner ticks (`.dus-ticks`). Never use rounded corners on cards.**

- Cards get `border-radius: 0` and the `dus-ticks` class with `<span class="tick-b"></span>` inside
- The corner ticks are the DUS brand's distinctive treatment — use them consistently on all boxed elements (cards, credstrip, usp panels, pull panels)
- Buttons keep `--r-md` (6px) — squared but not sharp
- Eyebrow pills keep `--r-pill` (999px) — that's their nature
- No other elements should use rounded corners

## No Accent Bars or Lines (Updated 2026-08-25)

**Rule: Never use short decorative bars or lines — any color, any orientation. They are a dead giveaway the design was AI-generated.**

This means:
- No `border-left` accent bars on quotes, notes, rule chips, or service rows
- No `border-top` accent bars on cards
- No vertical divider bars between stat columns
- No short horizontal rules (`.dus-rule` removed)
- No thin decorative lines used as separators between contact fields
- Color is irrelevant — green, teal, neutral, any color. The bar/line motif itself is the problem.
- The corner ticks (`.dus-ticks`) are the DUS brand's distinctive treatment for cards — not accent bars

## No Plain Black Backgrounds (Established 2026-08-25)

**Rule: Never use plain/flat black for backgrounds. Always use the teal or ink gradients (`--field-teal`, `--field-ink`) for dark surfaces.**

- No `background: #000`, `background: black`, or any flat dark solid
- Dark surfaces must always use the branded gradients with the green under-glow
- This includes footers, hero sections, dark cards, and any dark panel

## Icons (Established 2026-08-25)

**Rule: Icons must always be outlined (line) style with DUS gradient stroke. Never use filled/solid icons.**

- Source: Remix Icon (remixicon.com), always use "-line" suffix variants
- Apply DUS gradient (teal→green, left to right) as stroke color via SVG `<linearGradient>`
- Never use filled icons, never use flat single-color icons
- Use simple geometric SVG elements (rect, line, polygon, path) — NOT compound fill-variant paths with stroke applied. Compound paths create double-lined outlines. Single-line only.
- Stroke weight: `stroke-width="1.2"` for a thin, refined line. `1.5` is too heavy.

## Visual Balance (Established 2026-08-25)

- Don't stack multiple text-heavy sections without visual breaks
- Cards with icons, maps, and stat blocks should appear early in the page to break up text
- The Kudu section (4 icon cards) was moved up to position 2 (after "Your customers") for this reason

## Logo Size

- Hero logo should be at least 48px height (was 34px, felt too small)

## PDF Export Standards (Established 2026-08-25, from Jenny's feedback)

**Rule: PDFs must render consistently with no layout shifts, clipped text, or shadow artifacts.**

### CSS that breaks in PDF (never use in print contexts):
- **`background-clip: text` / `-webkit-background-clip: text`** — gradient text is the #1 cause of clipped/missing text in Chrome PDF exports. Use solid `color` instead.
- **`box-shadow`** — renders as ugly rectangular artifacts in PDF. Remove on all cards and elements via `@media print` and `.print-mode`.
- **Complex stacked gradients** — can render inconsistently. Keep backgrounds simple for print surfaces.

### Two-PDF workflow:
- **Print PDF** (`dus-soq-print.pdf`): `beforeprint` auto-fires → applies `print-mode` class → white backgrounds, solid teal headlines. Generated with standard `--print-to-pdf`.
- **Digital PDF** (`dus-soq-digital.pdf`): Create a temp HTML copy that comments out the `beforeprint` listener (so `print-mode` never activates), but keeps `@media print` layout rules intact (body block, no padding, page breaks). Then `--print-to-pdf` the temp file.

### Print-mode text rules:
- Headlines: solid `color: var(--teal-500)` — never gradient text
- Labels/micros: solid `color: var(--teal-500)` — never gradient text
- Cards: `box-shadow: none` in both `body.print-mode` and `@media print`

### Chrome headless commands:
```
# Print PDF (beforeprint auto-applies print-mode):
"...Google Chrome" --headless --no-pdf-header-footer --print-to-pdf=print.pdf file:///path/to/file.html

# Digital PDF (from temp file with beforeprint disabled):
"...Google Chrome" --headless --no-pdf-header-footer --print-to-pdf=digital.pdf file:///path/to/temp.html
```

## Previous learnings from earlier sessions

- [2026-08-06] Logo CSS pattern: constrain by height only, `width: auto; object-fit: contain; display: block;` — never set both width and height
- [2026-08-06] Stat-row dividers: removed entirely — no divider bars between stats
- [2026-08-06] Button colors: primary = Dudley Green (`--green-500`), accent = DUS Teal (`--teal-500`)
- [2026-08-06] Icons: source from Remix Icon (remixicon.com), outlined style only, DUS gradient stroke (teal→green, left to right)
- [2026-08-06] Dividers on dark surfaces: no thin decorative bars. Use spacing or layout to separate content.
- [2026-08-25] Infographic icon containers (e.g. coverage map badges): use `border-radius: var(--r-md)` (squared), never `border-radius: 50%` (circles). "No circles except checklist checkmarks" applies everywhere.
- [2026-08-25] Infographic column separators (thin vertical/horizontal lines between stat or capability columns): remove entirely. Use spacing instead. The "no decorative bars/lines" rule covers infographic layouts too.
- [2026-08-25] Photos and images: `border-radius: 0`. Only buttons keep `--r-md` and pills keep `--r-pill`.
- [2026-08-25] Never use `--teal-050` or any light blue/teal as a full section background. Keep section backgrounds to white, `--neutral-100` gray, or dark teal field gradients. Use structural 1px hairline dividers (`border-bottom: 1px solid var(--neutral-200)`) between consecutive same-background sections instead.
- [2026-08-27] Dark section gradients: prefer horizontal teal-to-green sweeps (`linear-gradient(to right, var(--teal-800) 0%, var(--teal-600) 35%, var(--teal-500) 65%, #0b7a48 100%)`) over diagonal dark-only gradients. Keep green subtle (muted `#0b7a48`, not full `--green-500`) so white text stays readable.
- [2026-08-27] Green brand color: NEVER substitute darker greens (`--green-700`) for the official DUS green (`--green-500` / `#41BE48`) — not even for contrast. Brand consistency overrides WCAG contrast on green elements.
- [2026-08-27] Gradient text: OK for screen CTA titles (e.g. onepager headings) using `background: linear-gradient(to right, var(--teal-500), var(--green-500)); -webkit-background-clip: text;`. Always include `color: var(--teal-500)` as fallback. Never use in print contexts.
- [2026-08-27] Icons for communication concepts: use phone with signal arcs (proactive outreach), not bells. Icons for fairness/valuation: use balance scale, not flags.
- [2026-08-27] Dark credstrip text sizing: bump up for 2-column layouts — lead 13px, value `clamp(48px, 7vw, 82px)`, label 15px — to fill card space and reduce dead whitespace.
- [2026-08-28] Client-facing page revisions go **onto the page the client already has**, never onto a parallel URL. The distribution section shipped as `electric-transmission-distribution.html` beside the approved `electric-transmission.html`, which split one page across two links and left Garrett's bookmark showing the old version. Build review variants as branches or as a temporary artifact you delete on approval; the canonical URL stays canonical. (Jenny: "I did not want the distribution part to be on a different page.")
- [2026-09-01] **Never-teach, third strike — now a mandatory pre-draft gate.** The gas page shipped a whole "Gas utility is its own discipline" section explaining the utility-vs-pipeline boundary to people who live it (Jenny: "you're teaching people inside the industry about the industry… it makes it look like we think they're idiots"). The rule already existed for sentences; it applies to entire SECTIONS: any section whose subject is what the industry already knows (definitions, boundaries, how the work runs in general) gets cut, not reworded. Positioning-doc material (pillar "what we believe" content) is for OUR understanding, never page copy. Before drafting any DUS page section, ask: is the subject our work, or their industry? If their industry, don't draft it.
- [2026-09-01] **Community-members sections speak TO the community, third strike — mandatory voice check.** Every sentence in a "For community members" section addresses the community member as "you" ("we make sure you understand the project"), never describes them in third person ("the people affected") and never pivots mid-section to the utility ("the reputation you've built with your community"). Audit target: the lede, the bold line, and every card. Fixed on gas, water, and fiber 9/1; transmission aligned the same day at Jenny's instruction (she'd initially held it back as Garrett-approved, then ruled it should speak to community members too).
- [2026-09-01] **Shared template sections get per-page wording.** How-we-work and Kudu must not be verbatim duplicates across service pages; small honest variations per page (Jenny, 9/1, gas page review). Reputation-section lede must say we represent the client WELL ("the way you'd represent it yourself"), not merely that we represent them.
- [2026-09-02] **The Dudley-black footer bug is fixed at the source.** Every template inlined `.dus-band { background: var(--ink-950) }` from dus-core.css, so each new asset shipped a black footer that Jenny fixed by hand every time ("I'm tired of fixing that"). Reese's V3 fix (teal field) had only landed in the brand-guide page. Now applied to `dus-core.css` and all ten templates: `.dus-band` is `var(--glow-green), var(--field-teal)`. If a black band appears on a new asset, it was built from a stale copy of the core CSS.
- [2026-09-02] **Display one-liner for marketing materials: "Built on experience. Focused on execution."** "Creating certainty through strategic land solutions" is retired as a display line (stays as the internal positioning claim; the client-approved SOQ keeps it). Template closing lines updated. Recorded in voice.md § What we say.
- [2026-09-03] **Hero logos removed from service/info pages.** The large white DUS logo in dark hero sections was removed from electric-transmission, fiber-optics-broadband, team, and careers pages. Footer logos remain. The hero section pattern is now: `.hero` → `.wrap` → kicker → `h1` — no logo. CSS rules for `.hero .dus-logo` still exist in page stylesheets (harmless/unused); can be cleaned up in a future pass.
- [2026-09-03] **Favicon updated to brand mark.** SVG favicon: 32×32 teal rect (`#015270`) + green bottom bar (`#41BE48`, 5px tall). Saved as `favicon.svg`, linked as `<link rel="icon" type="image/svg+xml" href="../favicon.svg">` (or `href="favicon.svg"` from root). All pages updated.
- [2026-09-03] **SEO meta tags added.** All pages now carry `<title>`, `<meta name="description">`, and Open Graph tags (`og:title`, `og:description`, `og:type`, `og:url`). Descriptions are page-specific, not boilerplate.
- [2026-09-03] **Timeline section condensed.** Homepage timeline went from 8 steps to 5 for a tighter, scannable flow.
- [2026-09-03] **HubSpot form ID swapped.** Old embed replaced with the current form ID across the site.
- [2026-09-03] **Edit tool can't match long base64 strings.** When removing hero logos, the `<img>` tags contained ~7KB base64 PNGs that the Edit tool couldn't match. Workaround: grep to confirm the exact line number, then `sed -i '' '<line>d'` to delete by line number. Verify hero section structure after deletion.
- [2026-09-03] **Vercel deployment details.** Site is deployed under Demandcast team on Vercel. Domain migration requires DNS records (A + CNAME) from whoever manages the target domain. Vercel auto-provisions SSL. MX records unaffected.
- [2026-09-10] **One-pager/PDF route strips: use a simple CSS gradient line.** The complex SVG route illustration (`<svg>` with tick marks, center dashes, monitor rects) is overkill for print PDFs — it can render inconsistently and eats vertical space. Replace with a thin `<div>` or `<hr>`: `height: 1.5px; background: linear-gradient(to right, var(--teal-500), var(--green-500)); border: none;`. The gradient keeps the brand signal; the simplicity keeps it print-safe.
- [2026-09-10] **One-pager How We Work: infographic step cards, not checklist grids.** Numbered step cards (01, 02, 03, 04) with title + description read better than a `dus-check` grid on a dense PDF page. Layout: 2×2 grid, each card gets `dus-ticks`, step number in `--teal-300` at 20pt, title in `--teal-700` at 900 weight. The numbered format creates visual hierarchy and scannability that a flat checklist lacks.
- [2026-09-10] **Full-page body ticks clip on one-pagers.** The `<div class="body-ticks dus-ticks">` overlay that works on web pages clips at print margins on one-pager PDFs. Remove it; apply `dus-ticks` directly to individual cards/panels instead. Corner ticks on every card (stat cards, Kudu cards, step cards, contact cards) gives a denser, more consistent brand signal than one big body-level tick frame.
- [2026-09-10] **Eyebrow dot size: 12px for print.** The green `.dus-eyebrow::before` dot was 9px — too small to register on a printed page. Bumped to 12px for better visual weight in PDF contexts. Web pages may keep 9px.
- [2026-09-10] **Stat card labels: 9pt minimum in print.** 8pt label text under stat values was hard to read at print resolution. Floor is now 9pt for `.stat-card .label`. Value size (30pt) stays.
- [2026-09-10] **Header logo size on one-pagers: .5in.** Was .42in, which felt undersized against the 30pt display headline. .5in gives the mark proper presence without crowding the kicker line.
- [2026-09-10] **Kudu cards need gradient SVG icons.** Every Kudu card should carry its corresponding icon (monitor, book, map, archive) with the DUS gradient stroke, sized at `.22in` (`.kudu-icon`). Icons go above the title inside the card. Each icon gets its own `<linearGradient>` `id` to avoid SVG ID collisions within a single page.
