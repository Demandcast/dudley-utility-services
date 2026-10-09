# DUS Brand Rules — Distilled Reference

Source of truth: Dudley Land Company Brand Guidelines (26 pp., July 2025, by Benali) + the DUS Design System v2.0 refinement (July 2026). DUS shares Dudley's typography, black/green language, and voice; **DUS Teal `#015270`** is the differentiator that marks a piece as Utility Services rather than Land Company.

> **Voice is not in this file.** See `voice.md` for everything about how DUS talks. This document is the visual system.

## The concept: the route and the grid

DUS's product is a defensible route across land: survey grids, plat maps, section lines, corridor easements. The system encodes that literally:

- **Survey grid** — every dark brand surface carries a fine plat-style grid: 44px cells with a heavier "section line" every 4th cell. It reads as precision, not decoration.
- **Route alignment** — the right-of-way drawn like a surveyor's alignment sheet: a green dash-dot centerline (civil centerline linetype), a translucent easement corridor with dashed edges, square PI monuments with center points, perpendicular station ticks, and faint parcel boundaries. Three tiers: full (with parcels and stationing labels) for covers and title slides, corridor (band only) for social scale, slim (centerline only) for banners. One per composition, maximum, always behind content.
- **Horizon rule** — a green line anchoring the bottom of dark panels: the land itself, the surface the whole business works on, rendered as geometry.
- **Squared structure** — small radii, corner ticks, hairlines. Sturdy, engineered, nothing soft.

## Color

| Role | Value | Rules |
|---|---|---|
| DUS Teal (primary) | `#015270` | Headlines on white, fields, table headers, links. The brand's ground. |
| Dudley Green (accent) | `#41BE48` | Checkmarks, rules, route line, stat units, pill text. ≤ ~8% of any composition. Never body text below 20px except on ink. |
| Ink | `#2B2B2B` text · `#06090B` grounds | Large dark fields are gradients (`--field-teal`, `--field-ink`), never flat #000. |
| Neutrals | `#EBEBEB`, `#F5F5F5`, white | Whitespace is a brand asset. Default ground is white. |
| **Never: light blue** | `#7EC0D6`, `#D6ECF3`, `#EDF6FA` (teal-200/100/050) and any pale blue tint | Banned in every role: fills, table stripes, hairlines, map land/water, chart series, dark-mode text. Light grounds are neutrals only. (Jenny, 2026-10-09) |

Proportions on a typical asset: ~70% white/neutral, ~20% teal, ~8% ink, ≤2% green. Dark-field assets invert: teal field dominant, green still ≤ ~8%.

## Typography — Lato, three weights

| Style | Spec | Use |
|---|---|---|
| Display | 900, UPPERCASE, -0.02em, lh 0.98 | Covers, title slides, banners. Short and declarative. |
| H1/H2 | 900, sentence case, -0.02em | Post headlines, slide titles |
| H3/labels | 700 | Subheads, list items, table headers |
| Body | 400, lh 1.6 | Paragraphs. 16px web / 10.5–11pt print |
| Eyebrow | 700, 13px, 0.16em tracking, UPPERCASE, leading green square | Section markers |
| Micro | 700, 11px, 0.22em tracking, UPPERCASE, muted | Plat-sheet annotations, page counters |

The DUDLEY wordmark is custom condensed artwork. It is never re-typed, stretched, recolored, or given effects. Black/green lockup on light; white/green on dark; clear space = ½ the wordmark height; minimum width 120px digital / 1.1in print.

## Voice

**Voice lives in `voice.md`, not here.** That file is canonical: audience, claim, inherited values, register, mechanics, the never list, the three tests, and before/after examples. This document covers the visual system only.

The one-line version, so this page stands alone: professional but real, confident without the ego. *"We're not trying to be the loudest voice in the room. We're trying to be the most trusted."*

## Imagery

Only real fieldwork: courthouses, working farms and ranches, title documents, survey equipment, transmission corridors and substations in landscape context. Never: boardrooms, refineries, smokestacks, disaster imagery, fake-looking stock, other brands' logos. No photography is bundled with this system; templates offer labeled photo slots that accept supplied images.

## Asset anatomy quick-reference

- **Dark canvas** = field gradient + survey grid + (usually) green horizon + white/green logo + optional single route line at low opacity.
- **Light canvas** = white + optional light grid + teal/ink type + green accents + black/green logo.
- **Print docs** = white ground, teal header/footer bands where specified, corner ticks framing body content, `.dus-band` ink footer with contact line.
- Checklists use the parent-brand green circular check. Stats use huge Lato Black numerals with the unit in green.
