const email = 'zindukahub@gmail.com';
const emailSubject = 'Enquiry from the Zinduka Hub website';
const emailBody = `Hi Zinduka Hub,

I would like to get in touch about partnering with Zinduka Hub.`;

export const site = {
  email,
  // Opens the visitor's mail app with a pre-filled draft.
  partnerHref: `mailto:${email}?subject=${encodeURIComponent(
    emailSubject,
  )}&body=${encodeURIComponent(emailBody)}`,
  description:
    'A space at Chuka University for young people to share ideas, talents, and skills. Partner with Zinduka Hub to promote talent, innovation, and an entrepreneurial culture.',
};

// Navigation mixes on-page anchors (prefixed with "/" so they resolve from
// every route) with full pages for Events, History, and the current edition.
export const navigation = [
  { label: 'Who we are', href: '/#about' },
  { label: 'Our focus', href: '/#focus' },
  { label: 'Zinduka 11.0', href: '/zinduka-11' },
  { label: 'Events', href: '/events' },
  { label: 'History', href: '/history' },
  { label: 'Partnerships', href: '/#partnerships' },
  { label: 'Contact', href: '/#contact' },
];

// Community links.
export const social = {
  whatsapp: {
    label: 'Join our WhatsApp community',
    href: 'https://chat.whatsapp.com/BXDbqcSJp6jLhFZARmidBv',
  },
  instagram: {
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
