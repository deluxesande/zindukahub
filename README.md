# Zinduka Hub

A responsive, partner-focused website built with Astro, Tailwind CSS, and Reicon. Use **Bun** for all package and project commands.

## Development

```sh
bun install
bun run dev --background
bun run astro dev status
bun run astro dev logs
bun run astro dev stop
```

> Astro 7 requires Node.js `>=22.12.0`. If your default `node` is older, run the
> Astro and Prettier binaries through Bun, e.g.
> `bun node_modules/.bin/astro dev` and `bun node_modules/.bin/astro build`.

## Production

```sh
bun run build
bun run preview
bun run check
bun run format:check
```

## Pages

- `/` — homepage: hero, who we are, focus, Zinduka 11.0 band, partnerships, partners, community, contact.
- `/events` — upcoming and past events. Each event links out to its own booking page on our external events platform.
- `/history` — the eleven Zinduka Hub editions, newest first, with 11.0 highlighted.
- `/zinduka-11` — the current edition: theme **CREATE. EXHIBIT. ENTERPRISE**, the four tracks, the partner call, and call-to-action posters.

## Organization

- `src/components/layout`: shared header and footer
- `src/components/sections`: homepage and standalone page sections
- `src/components/ui`: reusable buttons, icons, logo, headings, cards, and social links
- `src/data/site.ts`: contact details, navigation, social links, and focus areas
- `src/data/events.ts`: event listings (title, date, venue, track, booking URL, poster)
- `src/data/history.ts`: the eleven editions
- `src/data/zinduka11.ts`: Zinduka 11.0 theme, tracks, partner call, and CTA posters
- `src/data/partners.ts`: partner names and logos
- `src/assets`: supplied brand logos, photography, and (to add) event/history posters
- `src/styles/global.css`: Tailwind import and brand theme tokens

Fraunces titles, Poppins controls, and Raleway body text are served locally. Icons come from the installed `reicon-agent` package and render at build time. The WhatsApp glyph is a single hardcoded brand SVG in `src/components/ui/WhatsAppIcon.astro`, since Reicon does not ship brand logos. Photos are monochrome with their original colour revealed on hover. Image derivatives are optimized by Astro; supplied source assets remain unchanged.

## Editing content

Content is drafted from the supplied brand guide and confirmed partner information without invented events, testimonials, programs, or impact figures. Everything you need to update lives in `src/data` and is marked with `TODO` comments:

- **Events** (`events.ts`): replace the placeholder titles, dates, venues and `bookingUrl` values, and set `status` to `'upcoming'` or `'past'`.
- **History** (`history.ts`): edition 11.0 is real; replace the placeholder years, themes and descriptions for editions 1–10.
- **Zinduka 11.0** (`zinduka11.ts`): the theme and track copy is a first draft — review and edit freely.
- **Partners** (`partners.ts`): AIESEC is confirmed; add the rest.
- **Social links** (`site.ts`): the WhatsApp group and Instagram links are set; update them here if they change.

### Adding artwork

Poster and logo placeholders render as dashed boxes until real images are supplied. To add them:

1. Drop the file into `src/assets/posters/`, `src/assets/history/`, or `src/assets/logos/partners/`.
2. Import it at the top of the relevant data file (e.g. `import poster from '../assets/posters/event-1.png';`).
3. Set it on the `poster` / `image` / `logo` field instead of `null`.

## Getting in touch

There is no on-site form. Creatives, exhibitors and innovators apply through a Google Form, while partners get in touch by email. Both destinations live in `src/data/site.ts`:

- `applyFormHref` — the public Google Form link (currently a placeholder).
- `partnerHref` — a `mailto:` link to `site.email`.
