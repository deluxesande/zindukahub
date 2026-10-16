import type { ImageMetadata } from 'astro';
import aiesec from '../assets/logos/powered-by-Blue.png';
import campusReview from '../assets/partners/campus-review.png';
import dressWithUs from '../assets/partners/dress-with-us.png';
import foundersLiveChuka from '../assets/partners/founders-live-chuka.png';
import kool from '../assets/partners/kool.png';

/** Cap height of a logo on the partners wall. */
export type PartnerSize = 'max-h-16' | 'max-h-20' | 'max-h-24';

export interface Partner {
  name: string;
  logo: ImageMetadata;
  href?: string;
  /**
   * Cap height on the partners wall, set by eye: a wordmark with heavy
   * letterforms carries more weight than a mark with a light frame, so a few
   * of these want to run smaller or larger than the default.
   */
  size?: PartnerSize;
}

export const partners: Partner[] = [
  // The powered-by lockup is tall and light, so it runs at the default.
  { name: 'AIESEC', logo: aiesec },
  // Thick letterforms: they read heavier than the rest at the same height.
  { name: 'Dress With Us', logo: dressWithUs, size: 'max-h-16' },
  // A framed badge with white space inside, so it needs more room.
  { name: 'Founders Live Chuka', logo: foundersLiveChuka, size: 'max-h-24' },
  { name: 'KOOL', logo: kool, size: 'max-h-16' },
  { name: 'The Campus Review', logo: campusReview },
];
