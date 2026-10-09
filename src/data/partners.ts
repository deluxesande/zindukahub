import type { ImageMetadata } from 'astro';
import aiesec from '../assets/logos/powered-by-Blue.png';

export interface Partner {
  name: string;
  /** Partner logo. Set to an imported image once supplied. */
  logo: ImageMetadata | null;
  href?: string;
}

// ---------------------------------------------------------------------------
// AIESEC is a confirmed supporter. The remaining entries are placeholders —
// add partner names and drop their logo files into src/assets/logos/partners/,
// then import and reference them here.
// ---------------------------------------------------------------------------
export const partners: Partner[] = [
  { name: 'AIESEC', logo: aiesec },
  { name: 'Partner name', logo: null },
  { name: 'Partner name', logo: null },
  { name: 'Partner name', logo: null },
  { name: 'Partner name', logo: null },
];
