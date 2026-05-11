import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import ContactForm from '@/components/ContactForm';
import LocationsList from '@/components/LocationsList';

export const metadata: Metadata = {
  title: 'Contact · Bohemia',
  description:
    'Get in touch with Claire Whitfield about Bohemia sound baths, retreats and private bookings.',
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Get in touch"
        title="Say hello"
        lead="Questions, bookings for groups, or just want to know which session might be right for you? Reach Claire directly, she answers every message personally."
      />

      <section className="section">
        <div className="container split split--reverse">
          <div className="split__text">
            <p className="eyebrow">Send a message</p>
            <h2>Drop Claire a note</h2>
            <p>
              Email is the fastest way to reach her — your message goes straight to
              her inbox.
            </p>

            <p className="contact-direct">
              <a href="mailto:hello@bohemia-wellness.co.uk">hello@bohemia-wellness.co.uk</a>
            </p>

            <ContactForm />
          </div>

          <LocationsList />
        </div>
      </section>
    </>
  );
}
