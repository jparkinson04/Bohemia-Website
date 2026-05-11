import Script from 'next/script';

/**
 * Live Instagram feed for @bohemiawellbeing.
 *
 * Powered by Elfsight (their free tier covers this site easily).
 *
 * To swap the connected Instagram account or restyle the feed:
 *   1. Log in at https://elfsight.com/dashboard
 *   2. Edit the widget (account, layout, captions, etc.)
 *   3. Save — changes go live without a deploy.
 *
 * To replace the widget entirely:
 *   1. Create a new widget on Elfsight, copy its ID (the long uuid at the end
 *      of the `elfsight-app-...` class name in the embed code).
 *   2. Paste it into ELFSIGHT_APP_ID below.
 */
const ELFSIGHT_APP_ID = '91b2c84c-3011-4ab3-b939-baf110ccb793';

export default function InstagramFeed() {
  return (
    <section className="section" id="instagram">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">@bohemiawellbeing</p>
          <h2>From the studio</h2>
          <p className="section__lead">
            Moments, gatherings and quiet rituals, follow along on Instagram.
          </p>
        </div>

        <div className="embed-wrap">
          <div
            className={`elfsight-app-${ELFSIGHT_APP_ID}`}
            data-elfsight-app-lazy
          />
        </div>

        <div className="centered">
          <a
            href="https://www.instagram.com/bohemiawellbeing"
            target="_blank"
            rel="noopener"
            className="btn btn--ghost"
          >
            Follow @bohemiawellbeing
          </a>
        </div>
      </div>

      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
