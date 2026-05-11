import Link from 'next/link';
import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import SessionsGrid from '@/components/SessionsGrid';

export const metadata: Metadata = {
  title: 'Sessions & rituals · Bohemia',
  description:
    'Sound baths, floating sound experiences, private healing, retreats and bespoke private events with Claire Whitfield.',
};

export default function SessionsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Bohemia"
        title="Sessions & rituals"
        lead="Sound, breath, and stillness, chosen to meet you wherever you are."
      />

      <section className="section">
        <div className="container">
          <SessionsGrid />
          <div className="centered" style={{ marginTop: 48 }}>
            <Link href="/book" className="btn btn--gold">
              Book a session
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
