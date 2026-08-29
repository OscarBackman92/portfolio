import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const PROFILE_IMG = '/profile.jpg';
const PROFILE_IMG_FALLBACK =
  'https://media.licdn.com/dms/image/v2/C4D03AQGsAsu-UNwnyw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1628016204993?e=1745452800&v=beta&t=upYDH3JMlCrZSasqn2Tq84ejb0TOH2g-Xo0TAqMMA7M';

function Home() {
  const [imgError, setImgError] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  return (
    <section className="home">
      <div className="home__visual" aria-hidden="true">
        {!imgError && (
          <img
            className="home__portrait"
            src={useFallback ? PROFILE_IMG_FALLBACK : PROFILE_IMG}
            alt=""
            onError={() => {
              if (!useFallback) setUseFallback(true);
              else setImgError(true);
            }}
          />
        )}
        <div className="home__wash" />
      </div>

      <div className="home__content section-inner">
        <p className="home__brand reveal">Oscar Bäckman</p>

        <h1 className="home__headline display reveal" style={{ animationDelay: '0.12s' }}>
          Ekonomi, administration och systemflöden
        </h1>

        <p className="home__lede reveal" style={{ animationDelay: '0.22s' }}>
          Jag trivs i den koordinerande rollen där processer, avtal och
          integrationer ska hänga ihop. Jag arbetar nära ekonomi, försäljning
          och support, och bygger gärna om manuella rutiner till enklare flöden.
        </p>

        <div className="home__cta reveal" style={{ animationDelay: '0.32s' }}>
          <Link to="/cv" className="btn">
            Visa CV
          </Link>
          <Link to="/contact" className="btn btn--ghost">
            Kontakta mig
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
