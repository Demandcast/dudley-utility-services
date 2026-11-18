# DUS Exemplars — Shipped, Public-Facing Work

These are captures of DUS work that is live or in clients' hands. Look at them before designing anything new for DUS. The templates say how an asset is built; these show what the finished work looks like once real content is in it.

Captured 2026-11-18 from production. Re-capture after any site launch or content round, since a capture goes stale the day the page changes.

## The one source rule

**The live Vercel site at `dudley-utility.com` is the design reference.** It is served from this repo (`pages/`), and `main` is what's live.

A Webflow rebuild of the site exists. It changed parts of the design system, and those changes are not approved. Never reference, match, or borrow from the Webflow version, and never treat a Webflow screenshot or export as DUS design (Jenny, 2026-11-18).

## How to use these

1. Find the exemplar closest to what you're making in the table below.
2. Open its captures. The website frames are viewport-height (1440×900) and numbered top to bottom.
3. For exact values, read the source file named in the table. A capture shows the result; the source carries the CSS.
4. Take the surface treatment, type scale, spacing rhythm, and component patterns from the exemplar. Lay the new piece out from its own content. An exemplar is a precedent for that piece, never a mold to pour different content into.

## Website (live)

| Page | Captures | Source | Live URL |
|---|---|---|---|
| Home | `website/home-01…08.jpg` | `pages/home.html` | https://www.dudley-utility.com/ |
| Electric transmission | `website/electric-transmission-01…12.jpg` | `pages/electric-transmission.html` | https://www.dudley-utility.com/pages/electric-transmission |
| Gas utility | `website/gas-utility-01…12.jpg` | `pages/gas-utility.html` | https://www.dudley-utility.com/pages/gas-utility |
| Team | `website/team-01…04.jpg` | `pages/team.html` | https://www.dudley-utility.com/pages/team |
| Careers | `website/careers-01…09.jpg` | `pages/careers.html` | https://www.dudley-utility.com/pages/careers |
| Meet With Dudley | `website/meet-with-dudley-01…02.jpg` | `pages/meet-with-dudley.html` | https://www.dudley-utility.com/pages/meet-with-dudley |

What to take from the site:

- **Hero:** teal-to-green horizontal sweep with the survey grid, an uppercase Lato 900 headline, a short lede, one white button. No logo in the hero; the logo sits in the nav and the footer.
- **Section rhythm:** white, `--neutral-100` gray, and teal field sections alternate. Each section opens with a green-square eyebrow and a sentence-case teal headline.
- **Cards:** square corners with plat-sheet corner ticks, on white or over the teal field.
- **Stat strip:** large Lato 900 numerals on the teal field with small uppercase labels (home frame 04).
- **Process graphic:** the plan → research → engage → acquire → support → closeout row (home frame 03).
- **Coverage map:** neutral gray map with three squared icon badges (home frame 05).
- **Closing band:** teal field, "Start the conversation" on the left, a white card on the right (home frames 07 and 08).

## One-pagers (live downloads)

| Piece | Captures | Source | PDF |
|---|---|---|---|
| Electric transmission overview | `one-pagers/electric-transmission-overview-1.png`, `-2.png` | `pages/electric-transmission-overview.html` | `downloads/dus-electric-transmission-overview.pdf` |
| Gas utility overview | `one-pagers/gas-utility-overview-1.png`, `-2.png` | `pages/gas-utility-overview.html` | `downloads/dus-gas-utility-overview.pdf` |

Each is two US Letter pages. What to take from them:

- Teal field header band carrying the white-and-green logo, a tracked uppercase kicker, and an uppercase headline, closed by a thin green rule.
- A white body with green-square eyebrows, a two-column checklist, numbered step cards (01 to 04), and stat cards with corner ticks.
- One teal callout panel per page for the point that matters most.
- Two contact cards at the bottom of page two, then the "Built on experience. Focused on execution." line and a teal footer band with the logo and office cities.

The water and fiber one-pagers (`downloads/dus-water-and-wastewater-overview.pdf`, `downloads/dus-fiber-optics-broadband-overview.pdf`) exist, but their pages are not live and they are not exemplars yet. Their header logo also sits too close to the kicker line. Don't copy that spacing.

## Statement of qualifications (live download)

| Piece | Captures | Source | PDF |
|---|---|---|---|
| SOQ, four pages | `soq/soq-1…4.jpg` | `pages/soq.html` | `downloads/dus-soq.pdf` |

The densest approved DUS document. It shows how teal field bands and white sections trade off down a page, the all-white logo on teal, the coverage map in print, and a full-width closing band with the route line. Its cover line, "Creating certainty through strategic land solutions," is client-approved for the SOQ only. New marketing pieces use "Built on experience. Focused on execution."

## Podcast and video (published episode art)

| Piece | Capture | Format |
|---|---|---|
| DUS 001 full episode thumbnail | `podcast/dus001-full-episode.jpg` | 1920×1080 |
| DUS 001 teaser thumbnail | `podcast/dus001-teaser.jpg` | 1920×1080 |
| DUS 001 clip thumbnail | `podcast/dus001-clip-1.jpg` | 1080×1080 |
| DUS 001 snippet thumbnail | `podcast/dus001-snippet-1.jpg` | 1080×1920 |

This is the art that shipped with the first DUS episode. What to take from it:

- The teal-to-green sweep with the survey grid as the ground, and the white-and-green logo top left.
- Clip frames: a teal header bar with the clip title in a green-outlined box, and small teal name tags on each speaker.
- Snippet cards: a green-square eyebrow, an uppercase headline, and a vertical surveyor's stationing line carrying the list.
- A light variant on a white grid with the black-and-green logo, used for diagram-style frames (the transmission-structure drawing in the teaser).

The full episode page lives in the `Demandcast/demandcast-delivery` repo at `data/dus001.ts` (https://demandcast-delivery.vercel.app). The wider podcast kit, including backgrounds, is in `../podcast/`.

## Not exemplars

Do not use any of these as a design reference:

- **The Webflow rebuild of the site.** See the source rule above.
- **Anything made before 2026.** That includes the LinkedIn banners in Drive under `DUS/Design/DUS LinkedIn Banners` (they carry the retired "Delivering Energy Through Land" line) and the pillar post graphics under `DUS/Social Media`.
- **The business card PDF in Drive** (`DUS/Design/Business Card`). Its footer reads "Oil & Gas | Utilities | Renewables," and DUS never mentions renewables. Build cards from `templates/business-card.html`.
- **Any logo with a teal or light blue descriptor.** The logo is Dudley Green. Files are in `../assets/logo/`.
- **The WSP qualifications page** (`wsp/`). It is a private, password-protected pitch that names a client.
