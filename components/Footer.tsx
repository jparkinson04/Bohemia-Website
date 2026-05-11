import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Image
            src="/images/logo.jpg"
            alt="Bohemia"
            width={140}
            height={140}
            className="footer__logo-img"
          />
          <p className="footer__tag">A soulful sanctuary by Claire Whitfield. Boho-luxury, reimagined.</p>
        </div>

        <nav className="footer__links">
          <Link href="/about">About</Link>
          <Link href="/sessions">Sessions</Link>
          <Link href="/book">Book</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/bohemiawellbeing"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/share/1Ea2wMYMwz/"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>

        <p className="footer__copy">© {new Date().getFullYear()} Bohemia. All rights reserved.</p>
      </div>
    </footer>
  );
}
