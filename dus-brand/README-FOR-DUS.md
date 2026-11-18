# DUS Brand System — How to Use This

This folder is a complete, locked design system for **Dudley Utility Services**. Hand it to an AI assistant, ask for what you need in plain English, and you get finished, on-brand graphics and documents: social posts, LinkedIn covers, carousels, presentation decks, one-pagers, letterhead, and proposals.

You don't need design skills and you don't need to know HTML. You describe the content; the system handles how it looks.

It also works without any AI at all. A human designer can pick this up and build from it — see **For a human designer** near the bottom.

## Start here

| If you want to… | Open |
|---|---|
| See the whole system as a document | `DUS-Brand-Book.pdf` |
| Browse the system with live examples | `index.html` (double-click, opens in your browser) |
| Set up an AI to produce assets for you | The setup options below |
| Know how DUS talks | `reference/voice.md` |

## Setting up an AI assistant

Pick the one that matches the tool you already use. Every option does the same thing: give the AI the rules (`SKILL.md`) and the templates it copies from.

### Claude — upload as a Skill (best results)

1. Zip this folder if it isn't already (`dus-brand.zip`).
2. In Claude: **Settings → Capabilities → Skills → Upload skill**, and upload the zip.
3. Done. Ask for a DUS asset in any chat and Claude uses it automatically, or type `/dus-brand` to invoke it directly.

### Claude — a shared Project (best for teams)

1. Create a Project called **DUS Brand**.
2. Copy the contents of `PROJECT-INSTRUCTIONS.md` into the Project's **Instructions** box.
3. Upload to the Project's knowledge: everything in `templates/`, plus `SKILL.md`, `dus-core.css`, `reference/voice.md`, and `reference/brand-rules.md`.
4. Invite the team. Every chat in that Project is brand-aware.

### ChatGPT — a Project or a Custom GPT

1. Create a Project (or a Custom GPT, if you want to share it more widely).
2. Paste the contents of `PROJECT-INSTRUCTIONS.md` into the **Instructions** field.
3. Upload the same files listed above to the Project files / Knowledge.
4. Ask for assets the same way.

### Microsoft Copilot, Gemini, or any other assistant

These don't all support persistent instructions, so do it per chat:

1. Start the chat by pasting the contents of `PROJECT-INSTRUCTIONS.md`.
2. Attach `SKILL.md` and the one template file you need for that asset (the decision table in `SKILL.md` says which).
3. Then make your request.

It's a little more setup each time, but the output is the same.

### Claude Code or Cowork

Point a session at this folder. It reads `SKILL.md` and the templates directly, and can export finished PNGs and PDFs for you.

## Asking for things — examples that work well

- "Make a LinkedIn post announcing that Savannah Cano joined as Land Director for Utilities, starting August 3."
- "I need a carousel: 5 things transmission PMs get wrong about easement timelines. Here are my 5 points: …"
- "Company page LinkedIn banner."
- "Personal LinkedIn cover for Brent."
- "A one-page service overview I can leave behind after the AEP meeting. Emphasize siting and routing."
- "Draft a proposal for [Client] for right-of-way acquisition on the [Project] corridor: 4 phases, here's the scope and pricing…"
- "Turn these bullet points into a 10-slide deck for Thursday's kickoff."

**Give real content.** The system never invents numbers or project facts. The only standing claims it uses are the approved ones in `reference/voice.md`: 45+ years of energy-land expertise, 35+ combined years of leadership, voltages executed up to 765 kV, and coverage across the lower 48. If you don't provide a stat, you get a visible `[placeholder]` instead of a made-up number. That's deliberate.

**It won't name your clients.** Ask for a case study naming a utility and you get an anonymized version ("a Gulf Coast investor-owned utility"). Client confidentiality is built in, because publishing client details is exactly the judgment that disqualifies a vendor in this industry.

## Getting the finished file out

The AI will include the export step with each asset. In short:

- **Graphics (posts, banners, slides):** save the HTML file, open it in Chrome, screenshot the graphic. For a pixel-perfect PNG, ask for the one-line Terminal command.
- **Documents (one-pager, letterhead, proposal, decks):** open in Chrome → **Print → Save as PDF**, margins **None**, **Background graphics ON**. That last one matters — without it the teal backgrounds vanish.
- In **Claude Code or Cowork**, just say "export this as PNG/PDF."

## What's in this folder

| File | What it is |
|---|---|
| `DUS-Brand-Book.pdf` | **The brand book as a document** — send this to anyone who just needs to see the system |
| `index.html` | The same brand book in a browser, with live component examples |
| `SKILL.md` | The AI's instruction manual. You don't need to read it; the AI does. |
| `PROJECT-INSTRUCTIONS.md` | Paste-in text for a Claude Project, ChatGPT Project, or Custom GPT |
| `templates/` | 10 locked templates the AI copies and fills in |
| `dus-core.css` | The design system source code: colors, type, spacing, components |
| `reference/voice.md` | How DUS talks: audience, claims, values, rules, examples |
| `reference/brand-rules.md` | The distilled visual rules |
| `assets/` | Official DUS logo files and maps |

## For a human designer

Everything a designer needs is here, no AI involved:

- `DUS-Brand-Book.pdf` and `index.html` — the system, documented, with live examples
- `dus-core.css` — the real tokens: colors, type scale, spacing, component styles
- `templates/` — 10 working layouts to build from
- `assets/` — logo files in every approved treatment
- `reference/brand-rules.md` — the rules in plain language

The templates are plain HTML and CSS, so they open in any code editor and export from any browser. Nothing here depends on a subscription or a specific tool.

## Ground rules (for humans too)

- Colors are **DUS Teal `#015270`**, **Dudley Green `#41BE48`** (small doses), black-ish ink, gray, white. Nothing else.
- The typeface is **Lato**. The DUDLEY wordmark is artwork, never typed.
- No emoji. No hype words. Real numbers only.
- If the AI refuses to "make it pop" with a new color, that's the system working.

## If something looks off

- **Backgrounds print white** → "Background graphics" was off in the print dialog.
- **Wrong font showing** → no internet when the file opened (Lato loads from Google Fonts). Reopen while online, or it falls back to a close system font.
- **Text overflows the graphic** → the copy is too long for that layout. Shorten the copy; don't shrink the type.
- **The AI went off-brand** → say "follow the DUS brand system in SKILL.md." That re-anchors it.
