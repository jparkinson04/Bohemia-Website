import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import PullQuote from '@/components/PullQuote';
import SessionsGrid from '@/components/SessionsGrid';
import TestimonialsGrid from '@/components/TestimonialsGrid';
import InstagramFeed from '@/components/InstagramFeed';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About preview */}
      <section className="section" id="about">
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
            <p className="eyebrow">Our story</p>
            <h2>A soulful sanctuary</h2>
            <p>
              After more than a decade running her successful salon, Claire Whitfield
              Beauty, Claire has evolved her path into something deeper, more aligned,
              and more transformative. With over 25 years in the beauty industry, she
              combines her expertise in luxury treatments with extensive training in
              holistic healing, creating a space where beauty, wellness, and soulful
              transformation meet.
            </p>
            <p>
              Bohemia blends bohemian spirit with luxurious care, creating uplifting
              experiences that support people on their journey back to themselves.
            </p>
            <Link href="/about" className="link-arrow">
              Read Claire&rsquo;s full story →
            </Link>
          </div>
        </div>
      </section>

      <PullQuote>
        Step into a world of radiant balance, conscious beauty, and effortless elegance.
      </PullQuote>

      {/* Sessions preview */}
      <section className="section" id="wellness">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Bohemia</p>
            <h2>Sessions & rituals</h2>
            <p className="section__lead">
              Sound, breath, and stillness, chosen to meet you wherever you are.
            </p>
          </div>
          <SessionsGrid limit={3} />
          <div className="centered">
            <Link href="/sessions" className="btn btn--ghost">
              See all sessions
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="section section--alt" id="reviews">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Kind words</p>
            <h2>What clients say</h2>
            <p className="section__lead">
              Recent notes from guests who&rsquo;ve sat with Claire.
            </p>
          </div>
          <TestimonialsGrid limit={3} />
          <div className="centered">
            <Link href="/reviews" className="btn btn--ghost">
              Read all reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Live Instagram feed */}
      <InstagramFeed />

      {/* Closing CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: 720 }}>
          <p className="eyebrow">Ready when you are</p>
          <h2>Step into stillness</h2>
          <p
            className="section__lead"
            style={{ maxWidth: 560, margin: '0 auto 28px' }}
          >
            Book a sound bath, send Claire a message, or simply explore what Bohemia
            holds for you.
          </p>
          <div style={{ display: 'inline-flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/book" className="btn btn--gold">
              Book a session
            </Link>
            <Link href="/contact" className="btn btn--ghost">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
