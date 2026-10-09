import {
  ArrowRight,
  Award,
  Calendar,
  Clock,
  Instagram,
  Location,
  MapPoint,
  Menu2,
  Sms,
  Star,
  Ticket,
  Users,
} from 'reicon-agent';

// Trusted Reicon artwork only. No user HTML or custom paths.
export const icons = {
  arrowRight: ArrowRight,
  award: Award,
  calendar: Calendar,
  clock: Clock,
  email: Sms,
  instagram: Instagram,
  location: Location,
  menu: Menu2,
  venue: MapPoint,
  star: Star,
  ticket: Ticket,
  users: Users,
};

export type IconName = keyof typeof icons;
