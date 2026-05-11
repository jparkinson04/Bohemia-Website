import { testimonials, type Testimonial } from '@/data/testimonials';
import TestimonialCard from './TestimonialCard';

type Props = {
  limit?: number;
  items?: Testimonial[];
};

export default function TestimonialsGrid({ limit, items }: Props) {
  const list = items ?? testimonials;
  const shown = typeof limit === 'number' ? list.slice(0, limit) : list;
  return (
    <div className="testimonials">
      {shown.map((t) => (
        <TestimonialCard key={t.id} testimonial={t} />
      ))}
    </div>
  );
}
