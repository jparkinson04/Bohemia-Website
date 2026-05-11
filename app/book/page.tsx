import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
  title: 'Book · Bohemia',
  description:
    "Reserve your space at a Bohemia sound bath, floating session, or private healing experience with Claire Whitfield. Bookings powered by Ticket Tailor.",
};

const TT_URL = 'https://www.tickettailor.com/events/bohemia1';

export default function BookPage() {
  return (
    <>
      <PageBanner
        eyebrow="Bookings"
        title="Reserve your space"
        lead="All sessions and treatments are booked through Ticket Tailor. Choose a time that suits you below."
      />

      <section className="section">
        <div className="container">
          <div className="embed-wrap">
            <iframe
              src={`${TT_URL}?ref=website_embed`}
              title="Bohemia bookings, powered by Ticket Tailor"
              className="booking-iframe"
              loading="lazy"
              allow="payment"
            >
              Your browser doesn&rsquo;t support embedded content.
            </iframe>
            <p className="embed-fallback">
              Trouble booking?
              <a href={TT_URL} target="_blank" rel="noopener">
                Open the booking page in a new tab →
              </a>
            </p>
          </div>

          <div
            className="centered"
            style={{ marginTop: 56, color: 'var(--taupe)', fontSize: '1rem' }}
          >
            <p>
              Prefer to talk first? Email{' '}
              <a
                href="mailto:hello@bohemia-wellness.co.uk"
                style={{ color: 'var(--gold)', textDecoration: 'none' }}
              >
                hello@bohemia-wellness.co.uk
              </a>{' '}
              or call{' '}
              <a
                href="tel:+447766588607"
                style={{ color: 'var(--gold)', textDecoration: 'none' }}
              >
                +44 7766 588607
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
