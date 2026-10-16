import type { ImageMetadata } from 'astro';
import halloweenPoster from '../assets/events/halloween-party-poster.jpg';
import movieNightPoster from '../assets/events/movie-night-poster.jpg';

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
    title: 'Halloween Night',
    date: 'October 31',
    startDate: '2026-10-31T21:00:00+03:00',
    time: '9:00 PM till late',
    location: 'Origins Club, opposite Space Q',
    track: 'Creatives',
    description:
      'Dress. Spook. Hang. Come as your favourite character and spend the night with drinks, games, performances, paint, style and rap. Entry 300 KES.',
    about:
      'Halloween Night is our dress-up edition, and the costume is the point rather than the decoration. Come as anyone you like: anime, movie, TV, superhero, video game, comic, horror, fantasy, historical, or a character you invented yourself. The night runs late at Origins, with drinks, games and performances between the sets, a paint corner for anyone who wants to make something, and style and rap on the floor. Entry is 300 KES and the door stays open till late, so arrive when you can.',
    details: [
      'A costume floor open to everyone, judged late in the night.',
      'Performances and a rap set across the evening.',
      'Drinks and games running all night.',
      'A paint corner for anyone who wants to make something on the spot.',
      'Style on the floor, and photography throughout with shots shared to our Instagram afterwards.',
    ],
    schedule: [
      { time: '21:00', item: 'Doors, drinks and games open' },
      { time: '22:00', item: 'Performances and rap set' },
      { time: '23:30', item: 'Paint corner and open floor' },
      { time: '00:30', item: 'Costume judging and closing' },
    ],
    notes: [
      { label: 'Entry', value: '300 KES per person' },
      {
        label: 'Dress code',
        value:
          'Come as your favourite character. Anime, movie, TV, superhero, video game, comic, horror, fantasy, historical, or your own original',
      },
      {
        label: 'Tickets',
        value: 'Scan the QR code on the poster, or book in advance',
      },
      {
        label: 'Info',
        value: 'WhatsApp or call 0745 767 158 for more details',
      },
    ],
    bookingUrl: 'https://zenlipa.co.ke/events/TBO5Pw',
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
