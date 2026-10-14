# Architecture

How the Zinduka Hub site is put together, and where to change things. Design rules live in [`DESIGN.md`](DESIGN.md); what Zinduka Hub is lives in [`README.md`](README.md).

Astro, Tailwind CSS v4, TypeScript. **Bun** runs everything.

## Commands

```sh
bun install
bun run dev --background   # bun run astro dev status | logs | stop
bun run build
bun run preview
bun run check
bun run format:check
```

> Astro requires Node.js `>=22.12.0`. If your default `node` is older, run the binaries through Bun: `bun node_modules/.bin/astro build`.

## Routes

| Route             | What it is                                                                   |
| ----------------- | ---------------------------------------------------------------------------- |
| `/`               | Hero, who we are, focus areas, the Zinduka 11.0 band, partnerships, contact  |
| `/zinduka-11`     | Current edition: theme, who it is for, the cohort programme, waitlist, calls |
| `/events`         | Upcoming and past events, each linking to its booking page                   |
| `/events/[slug]`  | One event: detail, venue, booking                                            |
| `/history`        | Current edition featured, past editions as compact rows                      |
| `/history/[slug]` | One edition: story, highlights, open calls, gallery                          |

## Directories

| Path                      | Holds                                                                 |
| ------------------------- | --------------------------------------------------------------------- |
| `src/components/layout`   | Header and footer                                                     |
| `src/components/sections` | Homepage and standalone page sections                                 |
| `src/components/ui`       | Buttons, icons, logo, cards, forms, breadcrumbs, share links          |
| `src/components/visuals`  | Built illustrations, **one visual per file**, each self-contained     |
| `src/scripts`             | Client scripts, **one per form or behaviour**, never a shared handler |
| `src/data`                | All content                                                           |
| `src/assets`              | Supplied logos, photography, posters, artwork                         |
| `src/styles/global.css`   | Tailwind import and the `@theme` tokens                               |

## Content

Everything editable lives in `src/data`:

- `site.ts` — contact addresses, navigation (`featured: true` marks the current edition), social links, focus areas
- `zinduka11.ts` — edition theme, tracks, the cohort modules, partner call, CTA posters
- `history.ts` — the editions, newest first, with stories, highlights, open calls and galleries
- `events.ts` — event title, date, time, venue, track, status, poster, booking URL
- `partners.ts` — partner names and logos

### Adding artwork

Drop files into the matching folder under `src/assets/`, then import them at the top of the relevant data file:

| Asset              | Folder                       |
| ------------------ | ---------------------------- |
| Event posters      | `src/assets/events/`         |
| Photography        | `src/assets/images/`         |
| Partner logos      | `src/assets/logos/`          |
| Call-to-action art | `src/assets/call to action/` |

Only four photographs exist, so before adding a photo to a new slot, check whether a built visual in `src/components/visuals/` is the better answer. `DESIGN.md` § Visuals has the rule.

## Conventions worth knowing

- **Fonts** are served locally: Literata for headings, Archivo for UI and body.
- **Icons** come from the installed `reicon-agent` package, registered in `src/components/ui/icons.ts`. The WhatsApp glyph is a hardcoded brand SVG in `WhatsAppIcon.astro`, since Reicon ships no brand logos.
- **Images** render through Astro's `<Image>` with explicit `widths` and `sizes`. Source assets stay untouched; derivatives are generated at build.
- **Forms** post to Web3Forms. One form, one component, one script, one access key: contact enquiries and cohort waitlist signups never share a code path or an inbox.
- **Colours** resolve to `@theme` tokens. No raw hex in markup.
