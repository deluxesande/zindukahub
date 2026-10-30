# Zinduka Hub Design Guide

Two sources, kept separate on purpose:

- **Brand** comes from _Brand Guidelines, 12 September 2026_ (deluxecreates). Colors, typefaces, logo, tagline.
- **Web decisions** come from commit `6fa9b69`, the original single-page build. How the brand is translated to screen: the three-font system, the tint palette, motion, imagery, focus states.

Where the two differ, the PDF governs brand identity and `6fa9b69` governs implementation. Tokens live in `src/styles/global.css` (`@theme`). Use the Tailwind utilities they generate, never raw hex in markup.

## Brand (from the PDF)

Zinduka Hub is an independent, Kenya-wide mission based in Chuka. It began with the support of AIESEC in Chuka, now one partner among others. Tagline: _Nurturing young talent in underserved counties and communities across Kenya._

| Token     | Hex       | Tailwind | Use                                      |
| --------- | --------- | -------- | ---------------------------------------- |
| Brand red | `#940D11` | `brand`  | Primary surfaces, headings, CTAs         |
| Black     | `#000000` | n/a      | Logo lockup on light, hard contrast only |
| White     | `#FFFFFF` | `white`  | Type on red, cards                       |

Typefaces in the PDF: **Poppins** and **Raleway**.

Logo: red on light grounds, black where red would vibrate, white knocked out on red. Never recolor or restretch it.

## Web decisions (from `6fa9b69`)

### Two fonts, three jobs

| Token          | Family                                  | Job                                 |
| -------------- | --------------------------------------- | ----------------------------------- |
| `font-heading` | Literata Variable, Georgia, serif       | Display headings: `h1`, `h2`, `h3`  |
| `font-ui`      | Archivo Variable, system-ui, sans-serif | Buttons, nav, labels, form controls |
| `font-body`    | Archivo Variable, system-ui, sans-serif | Body copy, paragraphs               |

Replaced Fraunces, Poppins and Raleway in October 2026 on a request for a corporate serif plus sans pairing. Literata is a reading serif with institutional weight, warm without tipping into the editorial-italic cliche; its italic is still the expressive device in the hero. Archivo is a grotesque drawn for signage and print, so it holds up at label sizes and reads corporate rather than startup. Two families, not three: body and UI share Archivo at different weights.

### Type ramp

Four fluid steps in `global.css`, roughly 1.3 between them, each `clamp()` bounded so the max stays under 2.5x the min. These replaced 22 ad-hoc `text-[Npx]` values.

| Token          | Range        | Job                          |
| -------------- | ------------ | ---------------------------- |
| `text-display` | 44px to 72px | Page `h1`, hero              |
| `text-h2`      | 32px to 56px | Section headings             |
| `text-h3`      | 24px to 40px | Card and subsection headings |
| `text-h4`      | 20px to 24px | Small headings               |

Never add a raw `text-[Npx]`. Extend the ramp instead. Because each step is fluid, drop the `sm:` and `lg:` size variants that used to accompany these headings.

Display type stays `font-normal` with `tracking-[-0.035em]` to `-0.04em` and `text-balance`. Headings are sentence case, not the ALL CAPS of the posters.

Body copy runs `text-ink/70` at `leading-7` to `leading-8`.

### Extended palette

The three brand colors anchor the site. Beyond them, a small set of warm tints is in use on focus cards, and these are part of the system:

| Hex       | Tailwind    | Role                                            |
| --------- | ----------- | ----------------------------------------------- |
| `#211C1C` | `ink`       | Body copy, dark sections, footer ground         |
| `#F8F5F2` | `paper`     | Default page ground                             |
| `#E9D9D6` | `tint`      | Lightest warm tint                              |
| `#D8CECA` | `tint-mid`  | Mid warm tint                                   |
| `#C98785` | `tint-deep` | Deepest tint, strong enough to carry `ink` text |

All six are `@theme` tokens in `global.css`, so markup never carries a raw hex: write `bg-tint-deep`, not `bg-[#c98785]`. Inside a component's own `<style>` block, reach for the generated variable (`var(--color-tint)`). Add no new hues. New tints must sit on this red-to-warm-neutral axis.

### Imagery

Every photo ships `grayscale`, returning to color on hover, on fine pointers only:

```
grayscale transition-[filter] duration-200 motion-reduce:transition-none
[@media(hover:hover)_and_(pointer:fine)]:group-hover:grayscale-0
```

Always use Astro's `<Image>` with explicit `widths`, `sizes`, and `width`. Decorative images take `alt=""`. The hero image takes `loading="eager"` and `fetchpriority="high"`; everything else lazy-loads by default.

Two deliberate exceptions:

- **Documentary photos that are about colour stay in colour.** The showcase-stand photo on `/zinduka-11` is documentary, so it skips the grayscale treatment entirely.
- **Cutout portraits sit on a colour ground, never a flat crop.** `talent.png`, `innovation.png`, `leadership.png` and `history-current-edition.png` are transparent PNGs with the subject in the lower third of the frame, built for the FocusCard treatment (a colour panel showing through the transparent area). Used anywhere else, they need the same two things: a `bg-brand` (or tint) panel behind them, and `object-bottom` rather than the default centre, or the crop shows the empty top of the frame instead of the person.

### Motion

150ms for interaction, 200ms for filters. Easing is `cubic-bezier(0.23,1,0.32,1)`. Pressable things take `active:scale-[0.97]`. Every transition carries `motion-reduce:transition-none`, and the page is `scroll-smooth motion-reduce:scroll-auto`.

### Focus states

Non-negotiable on every interactive element: `focus-visible:outline-2 focus-visible:outline-offset-4`, in `outline-brand`, `outline-white`, or `outline-current` depending on the ground. Keep the skip link.

### Layout rhythm

Content maxes at `max-w-page`, the `--container-page` token, currently 1320px. 1120 left too much air on a laptop; prose keeps its own cap via `max-w-prose`. Sections run `py-16 sm:py-20 lg:py-24` with `px-6 sm:px-10`. Full-bleed red and `ink` sections alternate with `paper`. Section headings pair with a short paragraph in a two-column grid, heading left, copy right.

Four rules that have been broken before:

1. **Every section carries symmetric vertical padding.** A section with only `pb-*` lets its first heading collide with the section above it. Use `py-*` unless an image is deliberately bleeding to an edge.
2. **Heading-beside-paragraph grids align tops, not bottoms.** `items-end` on a short heading next to a tall paragraph pushes the paragraph's top well above the heading, which reads as a mistake. Use `items-start` with `md:pt-3` on the paragraph for optical balance. `items-end` stays correct when the second column is an image, where bottom alignment is the composition.
3. **Do not cap a short heading's width.** `max-w-lg` or `max-w-xl` on a one-line heading breaks it across two lines for no reason. Only long page titles (`h1` on a detail page) take a cap, at `max-w-3xl`. `text-balance` is already on every heading utility; let it do the work.
4. **Short column, tall column: move the supporting content.** If a heading column is much shorter than its neighbour, stack the theme line and buttons under the heading rather than leaving a hole in the grid row.

### Alternating rows

For a sequence of substantial items, a cohort curriculum, a programme, a set of stages, use alternating rows rather than a row of cards. Cards flatten four things into four equal squares and nothing gets room to argue for itself. Alternating rows give each item half the page.

The pattern:

- A centred intro block opens the section: `h2`, then the idea in `heading-2 text-brand`, then a paragraph. Capped at `max-w-2xl`, centred, and that is the only centred text in the section.
- Each item is a full-width two-column row, `grid items-center gap-8 lg:grid-cols-2 lg:gap-20`, rows separated by `space-y-16 sm:space-y-20 lg:space-y-24`.
- The visual and text columns swap sides on every other row: `index % 2 === 1 && 'lg:order-2'` on the visual, `'lg:order-1'` on the text. On mobile every row stacks visual first.
- Visual column: a photograph at `aspect-[4/3] object-cover` with the standard grayscale hover recipe, or a flat tint panel from the listed tints. Never a drop shadow or a browser chrome mockup.
- Text column: an `heading-2` title with nothing beside it, a paragraph, then three supporting lines, each a `check` icon in `text-brand` beside a short clause. Three lines, not five. No icon badge on the title: a round tinted disc next to a heading is a pill badge by another name, and the title is enough.
- The section closes with one quiet line, `font-ui text-sm text-ink/60`, for timing or eligibility.

What the reference examples of this pattern carry and we drop: the `01 / 02 / 03` step counters and the status pills floating over the artwork. Both are prohibited here. The alternation itself is the sequence; it does not need numbering.

Implemented at `src/pages/zinduka-11.astro`, cohort section.

### Icons

Icons come from the `reicon-agent` package and nowhere else. Register the ones in use in `src/components/ui/icons.ts` as a lowercase key, then render through `Icon.astro` with a `size`. No inline SVG paths in markup, no second icon set, no icon font.

Icons mark list items, sit inside buttons, and label small UI. They do not sit beside headings: a round tinted disc next to a title is a pill badge by another name.

### Visuals

Four photographs carry the whole site, so a photograph used twice is the default failure. Where a slot needs a visual and no unseen photograph exists, build one.

Built visuals live in `src/components/visuals/`, **one visual per file**, each self-contained: its own markup, its own classes, its own `<style>`. No file holds two components, and no shared base component or shared stylesheet sits under them. A caller picks the visual it wants by importing it, or by keying a small map in the page (see the cohort rows in `src/pages/zinduka-11.astro`).

Current visuals:

| File                           | Used by                             |
| ------------------------------ | ----------------------------------- |
| `visuals/BrandVisual.astro`    | Cohort row, brand and audience      |
| `visuals/SalesVisual.astro`    | Cohort row, sales and negotiation   |
| `visuals/VentureVisual.astro`  | Cohort row, running a venture       |
| `visuals/ContractVisual.astro` | Cohort row, contracts and terms     |
| `visuals/EditionMark.astro`    | Edition detail pages, featured card |

Photographs stay where the subject is the point: the heroes, the history pages (index card and edition artwork), the edition photo band, and the gallery. Everywhere else, prefer a built visual over a third outing for the same shot.

Rules:

- **Label everything.** Grey placeholder bars are a wireframe, not an illustration. Each element carries real words in `font-ui text-xs`, drawn from the thing it illustrates. `EditionMark` sets the theme itself as the mark.
- Panels are `aria-hidden="true"`: they restate the copy beside them, so screen readers skip them.
- Motion loops are short and legible, 3s to 4.5s, `cubic-bezier(0.23,1,0.32,1)` or `ease-in-out`, staggered with `nth-child` delays. A 6px drift over five seconds reads as a rendering bug, not restraint.
- Every animated class is listed in a `@media (prefers-reduced-motion: reduce)` block that sets `animation: none`.

### Forms

**One form, one file, one script, one key.** Forms are never generalised into a shared handler: the contact form and the cohort waitlist submit to different Web3Forms keys so the two streams stay separate, and each owns its own component and its own script.

| Form     | Component               | Script                     | Submits as        |
| -------- | ----------------------- | -------------------------- | ----------------- |
| Contact  | `ui/ContactForm.astro`  | `scripts/contact-form.ts`  | General enquiries |
| Waitlist | `ui/WaitlistForm.astro` | `scripts/waitlist-form.ts` | Cohort signups    |

Each script targets its own form by id, posts JSON to Web3Forms, and writes its own copy. Shared shape, not shared code:

- Hidden `access_key`, a `subject` naming the stream, and a hidden `botcheck` honeypot.
- Submit button wrapping `<span data-submit-label>` so the script can swap the label while sending.
- A status paragraph with `role="status" aria-live="polite" class="empty:hidden"`.
- Field styling follows the ground: `border-ink/15 bg-paper` on light, `border-white/35 bg-white/5` on `ink` or `brand`.
- A form that opens on demand stays `hidden` while collapsed so it is out of the tab order, animates with `grid-rows-[0fr]` to `[1fr]` plus a small translate, and offers a quiet way back out. The toggle lives in its own script (`scripts/waitlist.ts`).

## Prohibited patterns

Hard rules for all copy and markup. Remove where found, do not reintroduce.

1. **No em-dashes.** `—` and `–` are banned in UI copy, headings, and `src/data/`. Use a period, a comma, or restructure.
2. **No eyebrow text.** No small all-caps kicker above a heading, no `eyebrow` / `kicker` / `overline` prop or class. `6fa9b69` had none; this restores that. Let the heading open the section.
3. **No numbers as decoration.** No step counters (`01`, `02`), no stat or counter blocks, no numbered badges. Real dates, times, prices, and edition names (`Zinduka 11.0`) are content and stay.
4. **No pill badges.** No `rounded-full` chips, tags, status pills, or category labels.

   `rounded-full` is still correct for buttons, which are pill-shaped by design in `Button.astro`, for the circular icon button in the header, for avatars, and for the decorative shapes in `FocusCard.astro`. The ban is on badges, not on round geometry.

When a poster from the guidelines shows an eyebrow, a number badge, or a pill, drop that element in the web translation and keep the rest.

## Checklist

- Colors resolve to a token. No raw hex in markup.
- Literata (`font-heading`) for headings, Archivo (`font-ui`, `font-body`) for everything else.
- Photos grayscale with the hover return, `<Image>` with `widths` and `sizes`.
- Transitions carry `motion-reduce`, interactive elements carry `focus-visible`.
- No `—`, no eyebrow, no decorative number, no badge pill.
- White on `#940D11` passes AA at body size.
