# Zinduka Hub

A responsive, partner-focused homepage built with Astro, Tailwind CSS, and Reicon. Use **Bun** for all package and project commands.

## Development

```sh
bun install
bun run dev --background
bun run astro dev status
bun run astro dev logs
bun run astro dev stop
```

## Production

```sh
bun run build
bun run preview
bun run check
bun run format:check
```

## Organization

- `src/components/layout`: shared header and footer
- `src/components/sections`: homepage sections
- `src/components/ui`: reusable buttons, icons, logo, headings, and focus cards
- `src/data/site.ts`: contact details, navigation, and focus areas
- `src/assets`: supplied brand logos and photography
- `src/styles/global.css`: Tailwind import and brand theme tokens

Fraunces titles, Poppins controls, and Raleway body text are served locally. Icons come from the installed `reicon-agent` package and render at build time. Photos are monochrome with their original colour revealed on hover. Image derivatives are optimized by Astro; supplied source assets remain unchanged.

Partnership links lead to the on-page contact form. Content is drafted from the supplied brand guide and confirmed partner information without invented events, testimonials, programs, or impact figures.

## Contact form

The form uses [Web3Forms](https://docs.web3forms.com/how-to-guides/html-and-javascript) and keeps visitors on the page. Add your Web3Forms public access key to `.env` as `PUBLIC_WEB3FORMS_ACCESS_KEY` (see `.env.example`), then restart the dev server or rebuild for production. Use a key connected to `zindukahub@gmail.com`.

Until a key is configured, submissions show an unavailable message and make no network request. The form includes required fields, a spam honeypot, duplicate-submit protection, a request timeout, and accessible status feedback. Failed requests retain the message for retry. Enable domain restrictions and spam protection in your Web3Forms dashboard before publishing. Live delivery must be verified after adding your key.
