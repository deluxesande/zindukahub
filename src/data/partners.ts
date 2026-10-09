import type { ImageMetadata } from 'astro';
import aiesec from '../assets/logos/powered-by-Blue.png';

export interface Partner {
  name: string;
  logo: ImageMetadata;
  href?: string;
}

export const partners: Partner[] = [{ name: 'AIESEC', logo: aiesec }];
