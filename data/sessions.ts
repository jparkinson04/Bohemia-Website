/**
 * Sessions / offerings data.
 * Edit the entries below to add, remove, or update what Claire offers.
 * Each card renders identically; only `ctaHref` / `ctaLabel` differ between
 * "Book" cards (which jump to /book) and the "Enquire" card (which jumps to
 * /contact for bespoke private events).
 */
export type Session = {
  slug: string;
  title: string;
  description: string;
  ctaHref: string;
  ctaLabel: string;
};

export const sessions: Session[] = [
  {
    slug: 'group-sound-bath',
    title: 'Group Sound Bath',
    description:
      'An immersive group session with crystal bowls, gongs and gentle chimes. Lie back, let go, and be carried into deep stillness.',
    ctaHref: '/book',
    ctaLabel: 'Book',
  },
  {
    slug: 'floating-sound-bath',
    title: 'Floating Sound Bath',
    description:
      'A truly unique experience, drift in supported water as healing sound moves around and through you. Deeply restorative.',
    ctaHref: '/book',
    ctaLabel: 'Book',
  },
  {
    slug: 'private-sound-healing',
    title: '1:1 Private Sound Healing',
    description:
      'A bespoke private session with Claire, shaped around your intention. Nervous-system reset, gentle release, soulful reconnection.',
    ctaHref: '/book',
    ctaLabel: 'Book',
  },
  {
    slug: 'crystal-reiki',
    title: 'Crystal & Reiki Treatments',
    description:
      'Hands-on energy healing with crystals and Reiki, layered with soft sound. A nourishing reset for body, mind and spirit.',
    ctaHref: '/book',
    ctaLabel: 'Book',
  },
  {
    slug: 'wellness-retreats',
    title: 'Luxury Wellness Retreats',
    description:
      'Day experiences and seasonal retreats blending sound, ritual and luxury beauty. Beautifully curated, thoughtfully held.',
    ctaHref: '/book',
    ctaLabel: 'Book',
  },
  {
    slug: 'private-events',
    title: 'Bespoke Private Events',
    description:
      'Hen weekends, birthdays, corporate wellbeing days, Claire creates entirely tailored experiences for your group.',
    ctaHref: '/contact',
    ctaLabel: 'Enquire',
  },
];
