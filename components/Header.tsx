'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/sessions', label: 'Sessions' },
  { href: '/book', label: 'Book' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link href="/" className="nav__logo" aria-label="Bohemia, home" onClick={close}>
          <Image src="/images/logo.jpg" alt="Bohemia" width={180} height={180} priority />
        </Link>

        <button
          className={`nav__toggle${open ? ' is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="navMenu"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <nav id="navMenu" className={`nav__menu${open ? ' is-open' : ''}`}>
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={isActive ? 'is-active' : undefined}
                onClick={close}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
