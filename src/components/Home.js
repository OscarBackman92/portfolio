import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const PROFILE_IMG = '/profile.jpg';

function Home() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="home">
      <div className="home__visual" aria-hidden="true">
        {!imgError && <img className="home__ambient" src={PROFILE_IMG} alt="" />}
        <div className="home__wash" />
      </div>

      <div className="home__content section-inner">
        <div className="home__intro reveal">
          <div className="home__avatar">
            {imgError ? (
              <span className="home__monogram">OB</span>
            ) : (
              <img
                src={PROFILE_IMG}
                alt="Oscar Bäckman"
                onError={() => setImgError(true)}
              />
            )}
          </div>

          <div className="home__identity">
            <p className="home__role">Business Operations Coordinator · Stockholm</p>
            <p className="home__brand">Oscar Bäckman</p>
          </div>
        </div>

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
