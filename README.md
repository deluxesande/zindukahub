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

- `/` — homepage: hero, who we are, focus, Zinduka 11.0 band, partnerships, partners, contact.
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
- `src/assets`: supplied brand logos, photography, event posters, and CTA artwork
- `src/styles/global.css`: Tailwind import and brand theme tokens

Fraunces titles, Poppins controls, and Raleway body text are served locally. Icons come from the installed `reicon-agent` package and render at build time. The WhatsApp glyph is a single hardcoded brand SVG in `src/components/ui/WhatsAppIcon.astro`, since Reicon does not ship brand logos. Photos are monochrome with their original colour revealed on hover. Image derivatives are optimized by Astro; supplied source assets remain unchanged.

## Editing content

Content is drafted from the supplied brand guide and confirmed partner information without invented events, testimonials, programs, or impact figures. Everything you need to update lives in `src/data`:

- **Events** (`events.ts`): event title, date, time, venue, track, status, poster, and the `bookingUrl` to the event's page on our Zenlipa events platform.
- **History** (`history.ts`): the editions shown on `/history`, newest first.
- **Zinduka 11.0** (`zinduka11.ts`): the theme, tracks, partner call, and CTA posters.
- **Partners** (`partners.ts`): partner names and logos.
- **Social links** (`site.ts`): the WhatsApp group and Instagram links, plus contact details.

### Adding artwork

Drop image files into the matching folder under `src/assets/` and import them at the top of the relevant data file:

- Event posters → `src/assets/events/`
- History edition artwork → `src/assets/history/`
- Partner logos → `src/assets/logos/`
- Zinduka 11.0 CTA posters → `src/assets/call to action/`

## Getting in touch

There is no on-site form. Partners get in touch by email using the `mailto:` link in `src/data/site.ts` (`partnerHref`).
