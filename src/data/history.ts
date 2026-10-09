import type { ImageMetadata } from 'astro';

export interface Edition {
  edition: number;
  year: string;
  theme: string;
  title: string;
  description: string;
  /** Edition artwork. Set to an imported image once supplied. */
  image: ImageMetadata | null;
}

export const historyIntro =
  'Zinduka Hub has grown across eleven editions — a decade of creating space for young people to share ideas, talent, and enterprise at Chuka University. Each edition carried its own theme; together they tell the story of the community we are building.';

// ---------------------------------------------------------------------------
// Edition 11.0 is the current edition and carries the confirmed theme. Every
// other edition below is a placeholder — replace the year, theme, title and
// description with the real record, and drop artwork into src/assets/history/.
// ---------------------------------------------------------------------------
const placeholderEditions: Edition[] = Array.from(
  { length: 10 },
  (_, index) => {
    const edition = index + 1;
    return {
      edition,
      year: 'Add year',
      theme: 'Add theme',
      title: `Zinduka Hub ${edition}.0`,
      description:
        'Placeholder entry. Add what this edition focused on and what it achieved.',
      image: null,
    };
  },
);

export const editions: Edition[] = [
  {
    edition: 11,
    year: 'Current edition',
    theme: 'CREATE. EXHIBIT. ENTERPRISE',
    title: 'Zinduka Hub 11.0',
    description:
      'Bringing creatives, innovators, exhibitors and entrepreneurs a platform to showcase what they have built — and welcoming partners who want to support our initiatives.',
    image: null,
  },
  ...placeholderEditions,
];

// Newest edition first for display.
export const editionsNewestFirst = [...editions].sort(
  (a, b) => b.edition - a.edition,
);
