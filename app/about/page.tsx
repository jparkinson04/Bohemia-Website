import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import PullQuote from '@/components/PullQuote';

export const metadata: Metadata = {
  title: 'About Claire · Bohemia',
  description:
    "Claire Whitfield's path from a successful beauty salon to founding Bohemia, a soulful sanctuary blending sound healing, holistic care and luxury wellness.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="Our story"
        title="A soulful sanctuary"
        lead="Bohemia is more than an event or a treatment, it's an experience."
      />

      <section className="section">
        <div className="container split">
          <div className="split__media">
            <Image
              src="/images/claire.jpg"
              alt="Claire Whitfield, founder of Bohemia"
              width={800}
              height={1000}
              priority
            />
          </div>
          <div className="split__text">
            <p className="eyebrow">Meet Claire</p>
            <h2>Boho-luxury, reimagined.</h2>
            <p>
              After more than a decade running her successful salon, Claire Whitfield
              Beauty, Claire has evolved her path into something deeper, more aligned,
              and more transformative. With over 25 years in the beauty industry, she
              combines her expertise in luxury treatments with extensive training in
              holistic healing, creating a space where beauty, wellness, and soulful
              transformation meet.
            </p>
            <p>
              Trained in a range of healing therapies, Claire weaves these together
              with her wealth of beauty experience to offer a truly unique and deeply
              nurturing approach to wellbeing. Bohemia blends bohemian spirit with
              luxurious care, creating uplifting experiences that support people on
              their journey back to themselves.
            </p>
            <p>
              Bohemia is more than an event or a treatment, it&rsquo;s an experience.
              A place where you can soften, tune in, and step into a transformative
              journey surrounded by warmth, beauty, and soulful energy.
            </p>
          </div>
        </div>
      </section>

      <PullQuote>
        Step into a world of radiant balance, conscious beauty, and effortless elegance.
      </PullQuote>

      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: 720 }}>
          <h2>Come and meet Claire</h2>
          <p className="section__lead" style={{ maxWidth: 560, margin: '0 auto 28px' }}>
            Whether you join a calming sound bath, drift into stillness during a
            floating session, or book a personalised treatment, Bohemia invites you to
            reconnect with who you truly are.
          </p>
          <div style={{ display: 'inline-flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/sessions" className="btn btn--ghost">
              Explore the sessions
            </Link>
            <Link href="/book" className="btn btn--gold">
              Book a session
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
