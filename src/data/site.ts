const domain = 'zindukahub.co.ke';

// Role addresses, so handover between committees costs nothing.
//   general  public inbound, the only address published on the site
//   admin    internal: domain, billing, DNS and service accounts. Never shown
//            publicly, since admin@ is a heavily spam-targeted local part
//   team     group address the committee sends outreach from and replies land
//            back into, so no thread is trapped in one student's mailbox
export const emails = {
  general: `info@${domain}`,
  admin: `admin@${domain}`,
  team: `team@${domain}`,
};

// Only this address is rendered anywhere on the site.
export const publicEmail = emails.general;

export const site = {
  email: publicEmail,
  emails,
  // Every call-to-action lands on the on-site contact form rather than
  // handing the visitor off to their mail client.
  partnerHref: '/#contact',
  description:
    'Nurturing talent, innovation and entrepreneurship among young Kenyans, starting in Chuka. Partner with Zinduka Hub to give young ideas in underserved communities a platform.',
};

// Primary navigation: real pages only, so every item is a destination and the
// row stays readable. On-page anchors live in the footer instead.
export const navigation = [
  // `featured` marks the current edition so the header can pull focus to it.
  { label: 'Zinduka 11.0', href: '/zinduka-11', featured: true },
  { label: 'Events', href: '/events' },
  { label: 'History', href: '/history' },
  { label: 'About', href: '/#about' },
];

// Grouped links for the footer. Keeps the anchors discoverable without
// crowding the header.
export const footerNav = [
  {
    title: 'Explore',
    links: [
      { label: 'Zinduka 11.0', href: '/zinduka-11' },
      { label: 'Events', href: '/events' },
      { label: 'History', href: '/history' },
    ],
  },
  {
    title: 'About us',
    links: [
      { label: 'Who we are', href: '/#about' },
      { label: 'Our focus', href: '/#focus' },
      { label: 'Partnerships', href: '/#partnerships' },
    ],
  },
];

// Community links.
export const social = {
  // `handle` is what the page shows; `label` stays descriptive for screen
  // readers, which need more than "@zindukahub" to know where a link goes.
  whatsapp: {
    handle: 'WhatsApp community',
    label: 'Join our WhatsApp community',
    href: 'https://chat.whatsapp.com/BXDbqcSJp6jLhFZARmidBv',
  },
  instagram: {
    handle: '@zindukahub',
    label: 'Follow Zinduka Hub on Instagram',
    href: 'https://www.instagram.com/zindukahub/',
  },
};

// Focus areas from the brand guide, not named programs or impact claims.
export const focusAreas = [
  {
    title: 'Talent',
    treatment: 'talent',
  },
  {
    title: 'Innovation',
    treatment: 'innovation',
  },
  {
    title: 'Leadership',
    treatment: 'leadership',
  },
  {
    title: 'Entrepreneurship',
    treatment: 'entrepreneurship',
  },
] as const;

// Canonical facts about the organisation. Used for metadata and JSON-LD, so
// answer engines quote the same details the pages show.
export const org = {
  name: 'Zinduka Hub',
  legalName: 'Zinduka Hub',
  url: 'https://www.zindukahub.co.ke',
  logo: '/icon-512.png',
  ogImage: '/og-image.png',
  tagline:
    'Nurturing young talent in underserved counties and communities across Kenya.',
  foundingDate: '2015',
  address: {
    locality: 'Chuka',
    region: 'Tharaka Nithi County',
    country: 'KE',
  },
};
