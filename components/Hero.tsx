import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__content">
        <p className="hero__eyebrow">Bohemia · Beauty · Healing · Wellness</p>
        <h1 className="hero__title">Step into Bohemia.</h1>
        <p className="hero__sub">
          Bohemia is boho-luxury reimagined, a soulful sanctuary founded by Claire
          Whitfield, a beauty and wellness therapist with over 25 years of experience.
        </p>
        <Link href="/book" className="btn btn--gold">
          Book your session
        </Link>
      </div>
    </section>
  );
}
