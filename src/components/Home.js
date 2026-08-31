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

const FOCI = [
  {
    n: '01',
    title: 'Order och fakturering',
    text: 'Kund- och leverantörsflöden, avtal och avstämning inför bokslut.',
    to: '/cv',
  },
  {
    n: '02',
    title: 'Systemkedjan',
    text: 'Affärssystem, webshop och fakturering som faktiskt hänger ihop.',
    to: '/about',
  },
  {
    n: '03',
    title: 'Verktyg jag byggt',
    text: 'Egna lösningar när rutinerna saknas — från offerttext till jobbansökan.',
    to: '/projects',
  },
];

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
        {!imgError && (
          <img
            className="home__ambient"
            src={PROFILE_IMG}
            alt=""
            onError={() => setImgError(true)}
          />
        )}
        <div className="home__wash" />
        <div className="home__glow" />
      </div>

      <div className="home__stage">
        <div className="home__content">
          <div className="home__copy">
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
                <p className="home__hello">Hej — det här är jag.</p>
                <p className="home__brand">Oscar Bäckman</p>
                <p className="home__role">{JOB_TITLE_WITH_LOCATION}</p>
              </div>
            </div>

            <h1 className="home__headline display reveal" style={{ animationDelay: '0.1s' }}>
              Order, fakturering och system som hänger ihop
            </h1>

            <p className="home__lede reveal" style={{ animationDelay: '0.18s' }}>
              {PROFILE_SUMMARY} Jag har ägt kund- och leverantörsfakturaflöden, varit
              huvudkontakt mot ekonomipartner och byggt vidare på integrationerna
              mellan affärssystem, webshop och fakturering.
            </p>

            <div className="home__cta reveal" style={{ animationDelay: '0.24s' }}>
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

          <ul className="home__foci" aria-label="Vad jag arbetar med">
            {FOCI.map((item, i) => (
              <li key={item.n}>
                <Link
                  to={item.to}
                  className="home__focus reveal"
                  style={{ animationDelay: `${0.16 + i * 0.08}s` }}
                >
                  <span className="home__focus-n">{item.n}</span>
                  <span className="home__focus-body">
                    <span className="home__focus-title">{item.title}</span>
                    <span className="home__focus-text">{item.text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="home__rail reveal" style={{ animationDelay: '0.36s' }}>
          <div className="home__rail-inner">
            <p className="home__rail-item">
              <span className="home__rail-label">Plats</span>
              Stockholm
            </p>
            <p className="home__rail-item">
              <span className="home__rail-label">Status</span>
              Öppen för roller
            </p>
            <p className="home__rail-item">
              <span className="home__rail-label">Fokus</span>
              Order · ekonomi · system
            </p>
            <Link to="/cv" className="home__rail-link">
              Läs meriten →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
