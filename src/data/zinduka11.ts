import type { ImageMetadata } from 'astro';
import type { IconName } from '../components/ui/icons';
import ctaPartners from '../assets/call to action/1.png';
import ctaCreatives from '../assets/call to action/2.png';
import ctaInnovators from '../assets/call to action/3.png';
import ctaEntrepreneurs from '../assets/call to action/4.png';

export interface Track {
  key: string;
  title: string;
  copy: string;
  icon: IconName;
  /** Supporting lines, shown beside the module artwork in alternating rows. */
  points?: string[];
}

export interface CallToAction {
  key: string;
  label: string;
  poster: ImageMetadata;
}

export const zinduka11 = {
  edition: '11.0',
  theme: 'CREATE. EXHIBIT. ENTERPRISE',
  tagline: 'A platform to showcase what you have built.',
  intro:
    'Zinduka Hub 11.0 is built around one idea: young people should have a platform to show the world what they can do. Under the theme CREATE. EXHIBIT. ENTERPRISE, we are bringing creatives, innovators, exhibitors and entrepreneurs together to showcase their work, and inviting partners to support the initiatives that make it happen.',
  // The intro above is the one-paragraph version used on the homepage band.
  // The edition page splits it so the idea leads and the detail follows.
  editionLead:
    'Young people should have a platform to show the world what they can do.',
  editionBody:
    'Under the theme CREATE. EXHIBIT. ENTERPRISE, we are bringing creatives, innovators, exhibitors and entrepreneurs together to showcase their work, and inviting partners to support the initiatives that make it happen.',
  tracks: [
    {
      key: 'creatives',
      title: 'Creatives',
      copy: 'A showcase for makers, artists and storytellers. A stage to present original work and reach an audience ready to see it.',
      icon: 'star',
    },
    {
      key: 'innovators',
      title: 'Innovators',
      copy: 'A space for new thinking and bold ideas, where problem-solvers can put their concepts in front of the people who can help them grow.',
      icon: 'award',
    },
    {
      key: 'exhibitors',
      title: 'Exhibitors',
      copy: 'A platform to put your product, project or craft on display and let people experience it up close.',
      icon: 'ticket',
    },
    {
      key: 'entrepreneurs',
      title: 'Entrepreneurs',
      copy: 'A meeting point for founders and business builders to share their ventures, sharpen the pitch, and find the connections that move them forward.',
      icon: 'users',
    },
  ] satisfies Track[],
  // The cohort runs after the annual talk day: the same people, carried from a
  // one-day showcase into months of coaching.
  cohort: {
    title: 'The cohort after the talk day',
    lead: 'The showcase is one day. The work that follows it is months.',
    note: 'Places are limited and applications open when the talk day closes. Put your name down and we will come to you first.',
    body: 'When the annual talk day closes, a selected group stays on for a coached programme. Sessions are run by people who have built the thing being taught, and the whole cohort moves through the same four areas together.',
    modules: [
      {
        key: 'branding',
        title: 'Brand and audience development',
        copy: 'Building a brand people recognise, and running the channels that carry it without burning out on content.',
        points: [
          'A brand people can recognise and repeat',
          'Channels you can run without burning out',
          'Work shown in a way that earns attention',
        ],
        icon: 'hashtag',
      },
      {
        key: 'selling',
        title: 'Sales, pitching and negotiation',
        copy: 'Pitching your work, pricing it honestly, and asking for the room, the client or the cheque without shrinking.',
        points: [
          'Pricing your work without apologising',
          'A pitch that survives the first question',
          'Negotiating terms, not just accepting them',
        ],
        icon: 'rocket',
      },
      {
        key: 'business',
        title: 'Running a venture in the first year',
        copy: 'The first year out: registration, money in and money out, clients, and keeping the thing alive while life gets expensive.',
        points: [
          'Registration, records and money in order',
          'Clients who come back and pay on time',
          'A plan for the lean months',
        ],
        icon: 'briefcase',
      },
      {
        key: 'legal',
        title: 'Contracts and commercial terms',
        copy: 'What to read before you sign. Ownership, payment terms, exclusivity, and the clauses that quietly cost you later.',
        points: [
          'What a contract actually commits you to',
          'Ownership of the work you produce',
          'The clauses that cost you quietly',
        ],
        icon: 'scale',
      },
    ] satisfies Track[],
  },
  partnerCall: {
    title: 'Partner with Zinduka 11.0',
    body: 'We are looking for partners willing to support our initiatives. Whether you bring funding, mentorship, space or expertise, there is a way to work together. Start a conversation with the team and let us build it with you.',
  },
  // Call-to-action posters, one per audience. Artwork lives in
  // src/assets/call to action/.
  callsToAction: [
    { key: 'creatives', label: 'Call for creatives', poster: ctaCreatives },
    { key: 'innovators', label: 'Call for innovators', poster: ctaInnovators },
    {
      key: 'entrepreneurs',
      label: 'Call for entrepreneurs',
      poster: ctaEntrepreneurs,
    },
    { key: 'partners', label: 'Call for partnerships', poster: ctaPartners },
  ] satisfies CallToAction[],
};

export type Zinduka11 = typeof zinduka11;
