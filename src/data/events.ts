import type { ImageMetadata } from 'astro';
import halloweenPoster from '../assets/events/Black and Red Spooky Halloween Party Poster.jpg';
import movieNightPoster from '../assets/events/WhatsApp Image 2026-10-01 at 12.10.23.jpeg';

export type EventTrack =
  'Creatives' | 'Innovators' | 'Exhibitors' | 'Entrepreneurs' | 'Partners';

export interface EventItem {
  /** URL segment for the detail page: /events/<slug>. */
  slug: string;
  title: string;
  date: string;
  /** ISO 8601 start, for structured data. Keep in sync with `date`. */
  startDate: string;
  time?: string;
  location: string;
  /** Optional: only set when the event clearly belongs to one audience. */
  track?: EventTrack;
  description: string;
  /** Link to the booking page on our external events management platform. */
  bookingUrl: string;
  /** Poster artwork. */
  poster: ImageMetadata;
  /** Longer write-up for the detail page. */
  about?: string;
  /** Bullets shown as "What to expect". */
  details?: string[];
  /** Practical notes: dress code, entry, what to bring. */
  notes?: { label: string; value: string }[];
  /** Running order. Times are indicative, not a contract. */
  schedule?: { time: string; item: string }[];
  status: 'upcoming' | 'past';
}

// ---------------------------------------------------------------------------
// Booking links point at our Zenlipa events platform. Poster artwork lives in
// src/assets/events/.
// ---------------------------------------------------------------------------
export const events: EventItem[] = [
  {
    slug: 'halloween-party',
    title: 'Halloween Party',
    date: 'October 31',
    startDate: '2026-10-31T09:00:00+03:00',
    time: 'Starts 09:00',
    location: 'Origins Club, opposite Space Q',
    track: 'Creatives',
    description:
      'An art and fashion expo to celebrate the season. Artists, bring your vision; fashionistas, bring your finest collections. Come dressed in character, step into the spotlight and showcase your creativity. Entry 250 KES.',
    about:
      'This is our Halloween edition of the showcase, and it runs as a working expo rather than a party with decorations. The floor is split between an art wall and a fashion runway. Painters, illustrators, photographers and digital artists hang and stand beside their work so visitors can ask about it and buy it. Designers and stylists walk their collections in two runs across the night. Costume is the thread that ties the room together: come as a character and the whole room reads as one piece.',
    details: [
      'An art wall where exhibiting artists stand with their work and sell directly to visitors.',
      'Two runway sessions for designers and stylists showing a collection or a single look.',
      'A costume floor, judged late in the night, open to everyone who turns up in character.',
      'A DJ set between runway runs, so the room keeps moving while the floor resets.',
      'Photography throughout, with shots shared to our Instagram afterwards.',
    ],
    schedule: [
      { time: '09:00', item: 'Doors, art wall opens, exhibitors set up' },
      { time: '11:00', item: 'First runway run' },
      { time: '13:00', item: 'Open floor, DJ set, artist conversations' },
      { time: '16:00', item: 'Second runway run' },
      { time: '18:00', item: 'Costume judging and closing' },
    ],
    notes: [
      { label: 'Entry', value: '250 KES per person, booked in advance' },
      {
        label: 'Dress code',
        value: 'Come in character. Costume is encouraged, not required',
      },
      {
        label: 'Exhibiting',
        value:
          'Artists and designers should arrive by 08:00 to set up. Bring your own stands or rails where you can',
      },
      {
        label: 'Payment',
        value:
          'Mobile money on the night for anything bought from an exhibitor',
      },
    ],
    bookingUrl: 'https://zenlipa.co.ke/events/d6kRCv',
    poster: halloweenPoster,
    status: 'upcoming',
  },
  {
    slug: 'movie-night',
    title: 'Movie Night',
    date: 'October 8',
    startDate: '2026-10-08T18:00:00+03:00',
    time: '6:00 PM to 10:00 PM',
    location: 'SGT1, Science Complex',
    description:
      'An evening screening with popcorn and snacks provided. Tickets 100 KES.',
    about:
      'A low-key evening in the Science Complex lecture theatre, built as a break in the middle of the semester rather than a showcase. We screened a feature on the big projector with the lights down, popcorn and soft drinks included in the ticket, and left time either side for people to actually talk to each other. It is the cheapest thing we run and usually the easiest way for someone new to meet the community before committing to a bigger event.',
    details: [
      'One feature screening on the lecture theatre projector.',
      'Popcorn and a soft drink included in the ticket price.',
      'Open seating, with the front rows left for people who arrive late.',
      'An informal hour afterwards for anyone who wants to stay and talk.',
    ],
    notes: [
      { label: 'Entry', value: '100 KES per person' },
      { label: 'Seating', value: 'Open seating, roughly 120 places' },
      {
        label: 'Bring',
        value: 'A jumper. The theatre gets cold once the lights go down',
      },
    ],
    bookingUrl: 'https://zenlipa.co.ke/events/K1kgTV',
    poster: movieNightPoster,
    status: 'past',
  },
];

export const eventBySlug = (slug: string) =>
  events.find((event) => event.slug === slug);

export const upcomingEvents = events.filter(
  (event) => event.status === 'upcoming',
);
export const pastEvents = events.filter((event) => event.status === 'past');
