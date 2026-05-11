import Link from 'next/link';
import type { Session } from '@/data/sessions';

export default function SessionCard({ session }: { session: Session }) {
  return (
    <article className="card">
      <h3>{session.title}</h3>
      <p className="card__desc">{session.description}</p>
      <div className="card__foot">
        <Link href={session.ctaHref} className="btn btn--ghost">
          {session.ctaLabel}
        </Link>
      </div>
    </article>
  );
}
