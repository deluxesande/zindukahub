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
    'Zinduka Hub 11.0 is built around one idea: young people should have a platform to show the world what they can do. Under the theme CREATE. EXHIBIT. ENTERPRISE, we are bringing creatives, innovators, exhibitors and entrepreneurs together to showcase their work — and inviting partners to support the initiatives that make it happen.',
  tracks: [
    {
      key: 'creatives',
      title: 'Creatives',
      copy: 'A showcase for makers, artists and storytellers — a stage to present original work and reach an audience ready to see it.',
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
