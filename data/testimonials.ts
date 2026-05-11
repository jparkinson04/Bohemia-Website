/**
 * Testimonials data.
 * Each entry maps to one card on /reviews (and the home preview).
 * `image` is a path under /public.
 */
export type Testimonial = {
  id: string;
  quote: string;
  attribution: string;
  image: string;
  imageAlt: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 'crystals-and-bird',
    quote:
      "Thank you for letting me join your wonderful sound bath. I feel so relaxed and de-stressed. I also really enjoyed my gifts of crystals, and the little bird outside the window singing really was a delight.",
    attribution: 'Sound Bath guest',
    image: '/images/relax.jpg',
    imageAlt: 'A crystal sound bowl during a Bohemia sound bath',
  },
  {
    id: 'citrine-selenite',
    quote:
      "Thank you so much. I had no idea what to expect, but I really enjoyed it. Thank you for the citrine and selenite, such a kind gesture. Looking forward to the next moon.",
    attribution: 'Sound Bath guest',
    image: '/images/instrument.jpg',
    imageAlt: 'A gong used during a Bohemia sound healing session',
  },
  {
    id: 'fantastic-experience',
    quote:
      "Had a fantastic experience this evening, I left feeling very relaxed and positive. I can't wait for the next one.",
    attribution: 'Sound Bath guest',
    image: '/images/floating-sound-bath.jpg',
    imageAlt: 'The pool set up for a Bohemia floating sound bath',
  },
  {
    id: 'great-nights-sleep',
    quote:
      "The Sound Bath evening was amazing. I felt so relaxed afterwards, a much-needed time and space for me. I had a great night's sleep. Thank you for the crystal and your advice. Can't wait to join you again.",
    attribution: 'Sound Bath guest',
    image: '/images/candles.jpg',
    imageAlt: 'Crystal sound bowls and candles arranged for a Bohemia session',
  },
  {
    id: 'best-nights-sleep',
    quote:
      "The sound bath was amazing, thoroughly enjoyed it. Came away feeling very relaxed and de-stressed. Had the best night's sleep I've had in a long time. Thank you Claire, will definitely return.",
    attribution: 'Sound Bath guest',
    image: '/images/crystal-table.jpg',
    imageAlt: 'A table of Bohemia crystals, candles and wellness products',
  },
  {
    id: 'lighter-and-calmer',
    quote:
      "Your sound bath this evening was amazing, it was so relaxing and I came away feeling lighter and calmer. Thank you so much for the beautiful crystal and special evening.",
    attribution: 'Sound Bath guest',
    image: '/images/zen.jpg',
    imageAlt:
      'A Bohemia sound bath setup with gong, candles and sound bowls in a stone-walled room',
  },
];
