'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to Formspree (https://formspree.io). When ready, replace
    // this handler with action="https://formspree.io/f/YOUR_FORM_ID" on the form
    // and remove the onSubmit prop.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="contact-direct" style={{ marginTop: 24 }}>
        Thank you. Once Formspree is connected, this message will reach Claire directly.
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Your name</span>
        <input type="text" name="name" required />
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" required />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows={5} required />
      </label>
      <button type="submit" className="btn btn--gold">
        Send message
      </button>
    </form>
  );
}
