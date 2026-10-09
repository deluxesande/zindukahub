import type { ImageMetadata } from 'astro';
import halloweenPoster from '../assets/events/Black and Red Spooky Halloween Party Poster.jpg';
import movieNightPoster from '../assets/events/WhatsApp Image 2026-10-01 at 12.10.23.jpeg';

export type EventTrack =
  'Creatives' | 'Innovators' | 'Exhibitors' | 'Entrepreneurs' | 'Partners';

export interface EventItem {
  title: string;
  date: string;
  time?: string;
  location: string;
  /** Optional: only set when the event clearly belongs to one audience. */
  track?: EventTrack;
  description: string;
  /** Link to the booking page on our external events management platform. */
  bookingUrl: string;
  /** Poster artwork. Set to an imported image once supplied. */
  poster: ImageMetadata | null;
  status: 'upcoming' | 'past';
}

// ---------------------------------------------------------------------------
// TODO: replace each bookingUrl with the event's page on our external events
// platform. Poster artwork lives in src/assets/events/.
// ---------------------------------------------------------------------------
export const events: EventItem[] = [
  {
    title: 'Halloween Party',
    date: 'October 31',
    time: 'Starts 09:00',
    location: 'Origins Club, opposite Space Q',
    track: 'Creatives',
    description:
      'An art and fashion expo to celebrate the season. Artists, bring your vision; fashionistas, bring your finest collections. Come dressed in character, step into the spotlight and showcase your creativity. Entry 250 KES.',
    bookingUrl: 'https://REPLACE_ME',
    poster: halloweenPoster,
    status: 'upcoming',
  },
  {
    title: 'Movie Night',
    date: 'October 8',
    time: '6:00 PM – 10:00 PM',
    location: 'SGT1, Science Complex',
    description:
      'An evening screening with popcorn and snacks provided. Tickets 100 KES.',
    bookingUrl: 'https://REPLACE_ME',
    poster: movieNightPoster,
    status: 'past',
  },
];

export const upcomingEvents = events.filter(
  (event) => event.status === 'upcoming',
);
export const pastEvents = events.filter((event) => event.status === 'past');
