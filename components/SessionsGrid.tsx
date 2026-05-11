import { sessions, type Session } from '@/data/sessions';
import SessionCard from './SessionCard';

type Props = {
  /** Optionally limit how many cards to render (e.g. for the home preview). */
  limit?: number;
  items?: Session[];
};

export default function SessionsGrid({ limit, items }: Props) {
  const list = items ?? sessions;
  const shown = typeof limit === 'number' ? list.slice(0, limit) : list;
  return (
    <div className="cards">
      {shown.map((s) => (
        <SessionCard key={s.slug} session={s} />
      ))}
    </div>
  );
}
