import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from './Seo';
import {
  HOME_DESCRIPTION,
  JOB_TITLE,
  JOB_TITLE_WITH_LOCATION,
  PAGE_TITLE,
  PROFILE_SUMMARY,
} from '../data/site';
import './Home.css';

const PROFILE_IMG = '/profile.jpg';

function Home() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="home">
      <Seo
        title={PAGE_TITLE}
        description={HOME_DESCRIPTION}
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
                alt={`Oscar Bäckman, ${JOB_TITLE} i Stockholm`}
                width={132}
                height={132}
                loading="eager"
                fetchPriority="high"
                onError={() => setImgError(true)}
              />
            )}
          </div>

          <div className="home__identity">
            <p className="home__role">{JOB_TITLE_WITH_LOCATION}</p>
            <p className="home__brand">Oscar Bäckman</p>
          </div>
        </div>

        <h1 className="home__headline display reveal" style={{ animationDelay: '0.12s' }}>
          Order, fakturering och system som hänger ihop
        </h1>

        <p className="home__lede reveal" style={{ animationDelay: '0.22s' }}>
          {PROFILE_SUMMARY} Jag har ägt kund- och leverantörsfakturaflöden, varit
          huvudkontakt mot ekonomipartner och byggt vidare på integrationerna
          mellan affärssystem, webshop och fakturering.
        </p>

        <div className="home__cta reveal" style={{ animationDelay: '0.27s' }}>
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
