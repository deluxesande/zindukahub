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
];

// Newest edition first for display.
export const editionsNewestFirst = [...editions].sort(
  (a, b) => b.edition - a.edition,
);
