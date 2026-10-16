import type { ImageMetadata } from 'astro';
import aiesec from '../assets/logos/powered-by-Blue.png';
import campusReview from '../assets/partners/campus-review.png';
import dressWithUs from '../assets/partners/dress-with-us.png';
import foundersLiveChuka from '../assets/partners/founders-live-chuka.png';
import kool from '../assets/partners/kool.png';

export interface Partner {
  name: string;
  logo: ImageMetadata;
  href?: string;
}

export const partners: Partner[] = [
  { name: 'AIESEC', logo: aiesec },
  { name: 'Dress With Us', logo: dressWithUs },
  { name: 'Founders Live Chuka', logo: foundersLiveChuka },
  { name: 'KOOL', logo: kool },
  { name: 'The Campus Review', logo: campusReview },
];
