import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from './Seo';
import './Home.css';

const PROFILE_IMG = '/profile.jpg';

function Home() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="home">
      <Seo
        title="Oscar Bäckman — Business Operations Coordinator"
        description="Business Operations Coordinator i Stockholm. Håller ihop ekonomi, order och systemflöden i bolag som växer fortare än sina rutiner."
        path="/"
      />

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
                alt="Oscar Bäckman, Business Operations Coordinator i Stockholm"
                width={132}
                height={132}
                loading="eager"
                fetchPriority="high"
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
          Jag håller ihop ekonomi, order och system i bolag som växer fortare än
          sina rutiner. Senast på House of Service, där jag ägde kund- och
          leverantörsfakturaflödet, var huvudkontakt mot vår ekonomipartner och
          byggde vidare på integrationerna mellan affärssystem, webshop och
          fakturering.
        </p>

        <p className="home__lede home__lede--short reveal" style={{ animationDelay: '0.27s' }}>
          När ett flöde görs manuellt tre gånger brukar jag automatisera det
          fjärde.
        </p>

        <div className="home__cta reveal" style={{ animationDelay: '0.32s' }}>
          <Link to="/about" className="btn btn--ghost">
            Om mig
          </Link>
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
