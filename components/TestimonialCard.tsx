import Image from 'next/image';
import type { Testimonial } from '@/data/testimonials';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="testimonial">
      <Image
        src={testimonial.image}
        alt={testimonial.imageAlt}
        width={480}
        height={360}
        className="testimonial__img"
      />
      <div className="testimonial__body">
        <span className="testimonial__mark" aria-hidden="true">&ldquo;</span>
        <blockquote>{testimonial.quote}</blockquote>
        <figcaption>{testimonial.attribution}</figcaption>
      </div>
    </figure>
  );
}
