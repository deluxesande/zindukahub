export const site = {
  email: 'zindukahub@gmail.com',
  partnerHref: '#contact',
  description:
    'A space at Chuka University for young people to share ideas, talents, and skills. Partner with Zinduka Hub to promote talent, innovation, and an entrepreneurial culture.',
};

export const navigation = [
  { label: 'Who we are', href: '#about' },
  { label: 'Our focus', href: '#focus' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'Contact', href: '#contact' },
];

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
