import type { ImageMetadata } from 'astro';
import editionHero from '../assets/images/history-current-edition.png';
import heroPhoto from '../assets/images/Hero.png';
import galleryStage from '../assets/images/IMG_9264.png';
import galleryTeam from '../assets/images/IMG_6682.png';
import galleryFloor from '../assets/images/DSC_0639.png';
import callCreatives from '../assets/call to action/2.png';
import callInnovators from '../assets/call to action/3.png';
import callEntrepreneurs from '../assets/call to action/4.png';
import callPartners from '../assets/call to action/1.png';

export interface Edition {
  edition: number;
  /** URL segment for the detail page: /history/<slug>. */
  slug: string;
  year: string;
  theme: string;
  title: string;
  description: string;
  /** Edition artwork for the featured card on the history index. */
  image?: ImageMetadata;
  /** Longer write-up for the detail page. */
  story?: string;
  /** Bullets of what happened, or what is planned, that year. */
  highlights?: string[];
  /** Open calls for an edition still taking part. Copy mirrors the posters. */
  openCalls?: {
    title: string;
    audience: string;
    copy: string;
    poster: ImageMetadata;
  }[];
  /** Photographs from the edition, shown as a strip on the detail page. */
  gallery?: { image: ImageMetadata; alt: string }[];
}

export const historyIntro =
  'Zinduka Hub has grown across eleven editions. A decade of creating space for young people to share ideas, talent, and enterprise at Chuka University. Each edition carried its own theme; together they tell the story of the community we are building.';

export const editions: Edition[] = [
  {
    edition: 11,
    slug: '11',
    year: 'Current edition',
    theme: 'CREATE. EXHIBIT. ENTERPRISE',
    title: 'Zinduka Hub 11.0',
    image: editionHero,
    description:
      'Bringing creatives, innovators, exhibitors and entrepreneurs a platform to showcase what they have built, and welcoming partners who want to support our initiatives.',
    story:
      'Eleven years in, the edition is organised around four open calls rather than a single programme. Each call names who it is for in plain terms, because the most common reason a student does not take part is assuming the event is not meant for them. A rapper, a software developer, a trader at the market and a sponsor organisation are all being invited to the same floor, and the theme is the instruction: create something, exhibit it, and treat it as an enterprise rather than a hobby.',
    highlights: [
      'Four open calls, running in parallel.',
      'A showcase floor, not a panel.',
      'Partner organisations in the room.',
      'Open to every Chuka student.',
    ],
    openCalls: [
      {
        title: 'Call for creatives',
        poster: callCreatives,
        audience:
          'Fashionistas, artists, rappers, spoken-word artists, singers and graphic designers',
        copy: 'Have a unique talent to share? Showcase your talent, connect with fellow creatives, and bring your ideas to life.',
      },
      {
        title: 'Call for innovators',
        poster: callInnovators,
        audience:
          'Engineers, computer scientists, software developers, inventors, researchers, makers, designers and problem-solvers',
        copy: 'Have an idea that can make a difference? Showcase your innovations, connect with like-minded minds, and inspire positive change. Nobody left out.',
      },
      {
        title: 'Call for entrepreneurs',
        poster: callEntrepreneurs,
        audience:
          'Business owners, founders, start-up teams, social entrepreneurs, freelancers, traders and aspiring entrepreneurs',
        copy: 'Have a bold idea, a growing business, or a solution to share? Showcase your venture, connect with like-minded people, and unlock new opportunities.',
      },
      {
        title: 'Call for partnerships',
        poster: callPartners,
        audience: 'Organisations, businesses, institutions and individuals',
        copy: 'Partner with Zinduka Hub to turn shared ideas into meaningful impact. Invest in young people, support innovative solutions, and strengthen communities by connecting resources, expertise and opportunities.',
      },
    ],
    gallery: [
      {
        image: galleryStage,
        alt: 'Two Zinduka Hub members talking at an edition showcase',
      },
      {
        image: galleryTeam,
        alt: 'The Zinduka Hub organising team together at an edition',
      },
      {
        image: galleryFloor,
        alt: 'Members of the Zinduka Hub community on the showcase floor',
      },
      {
        image: heroPhoto,
        alt: 'The Zinduka Hub community together at the edition',
      },
    ],
  },
  // -------------------------------------------------------------------------
  // 10.0 and 7.0 are taken from the posters in the 2026 brand guidelines.
  // Editions 1 to 9 (except 7) are DRAFTED placeholders so the index has
  // shape: the years follow an annual cadence back from 10.0, but the themes
  // and descriptions need replacing with the real record before launch.
  // -------------------------------------------------------------------------
  {
    edition: 10,
    slug: '10',
    year: '2025',
    theme: 'YOUTH ENTREPRENEURSHIP',
    title: 'Zinduka Hub 10.0',
    description:
      'The tenth edition, marking ten years of entrepreneurship at Chuka University, with guest speakers and a full-day programme.',
  },
  {
    edition: 9,
    slug: '9',
    year: '2024',
    theme: 'BUILD WHAT YOU NEED',
    title: 'Zinduka Hub 9.0',
    description:
      'A year focused on students solving problems they had met themselves, on campus and at home.',
  },
  {
    edition: 8,
    slug: '8',
    year: '2023',
    theme: 'FROM IDEA TO INCOME',
    title: 'Zinduka Hub 8.0',
    description:
      'Turning side projects into something that pays, with sessions on pricing, customers and first sales.',
  },
  {
    edition: 7,
    slug: '7',
    year: '2022',
    theme: 'TECHNOPRENEURSHIP AND DIGITAL MARKETING',
    title: 'Zinduka Hub 7.0',
    description:
      'A full-day programme on building with technology and reaching an audience online, run with partner studios.',
  },
  {
    edition: 6,
    slug: '6',
    year: '2021',
    theme: 'BACK IN THE ROOM',
    title: 'Zinduka Hub 6.0',
    description:
      'The return to in-person showcases after a period of online-only sessions.',
  },
  {
    edition: 5,
    slug: '5',
    year: '2020',
    theme: 'KEEP BUILDING',
    title: 'Zinduka Hub 5.0',
    description:
      'A scaled-down edition run largely online, keeping the community together through a disrupted year.',
  },
  {
    edition: 4,
    slug: '4',
    year: '2019',
    theme: 'SHOW YOUR WORK',
    title: 'Zinduka Hub 4.0',
    description:
      'The edition that moved the format towards exhibition, with students standing beside what they had made.',
  },
  {
    edition: 3,
    slug: '3',
    year: '2018',
    theme: 'IDEAS WORTH SHARING',
    title: 'Zinduka Hub 3.0',
    description:
      'A talks-led edition built around students presenting ideas to their peers.',
  },
  {
    edition: 2,
    slug: '2',
    year: '2017',
    theme: 'FIND YOUR PEOPLE',
    title: 'Zinduka Hub 2.0',
    description:
      'The second edition, where the community grew beyond the founding group.',
  },
  {
    edition: 1,
    slug: '1',
    year: '2016',
    theme: 'THE FIRST ONE',
    title: 'Zinduka Hub 1.0',
    description:
      'Where it started: a small group of students at Chuka University making room for each other to share ideas.',
  },
];

export const editionBySlug = (slug: string) =>
  editions.find((edition) => edition.slug === slug);

// Newest edition first for display.
export const editionsNewestFirst = [...editions].sort(
  (a, b) => b.edition - a.edition,
);
