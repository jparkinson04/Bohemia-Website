import Link from 'next/link';
import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import TestimonialsGrid from '@/components/TestimonialsGrid';

export const metadata: Metadata = {
  title: 'Reviews · Bohemia',
  description: 'Notes from guests who have sat with Claire at a Bohemia sound bath.',
};

export default function ReviewsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Kind words"
        title="What clients say"
        lead="Recent notes from guests who've sat with Claire."
      />

      <section className="section">
        <div className="container">
          <TestimonialsGrid />
          <div className="centered" style={{ marginTop: 48 }}>
            <Link href="/book" className="btn btn--gold">
              Book your own
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
