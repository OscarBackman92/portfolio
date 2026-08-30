import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from './Seo';
import './AboutMe.css';

const CV_PDF = '/cv/oscar-backman-cv.pdf';

const SKILLS = [
  'SuperOffice CRM', 'Upsales', 'Visma Business', 'Evatic', 'Wint', 'Nettailer',
  'SharePoint', 'Microsoft Office', 'Power BI',
];

const PROFILE_IMG = '/profile.jpg';
const PROFILE_IMG_FALLBACK =
  'https://media.licdn.com/dms/image/v2/C4D03AQGsAsu-UNwnyw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1628016204993?e=1745452800&v=beta&t=upYDH3JMlCrZSasqn2Tq84ejb0TOH2g-Xo0TAqMMA7M';

function AboutMe() {
  const [imgError, setImgError] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const [diplomaError, setDiplomaError] = useState(false);

  return (
    <section className="about section">
      <Seo
        title="Om mig — Oscar Bäckman"
        description="Bakgrund inom ekonomi, orderadministration och systemintegrationer. Bygger också egna verktyg."
        path="/about"
      />
      <div className="section-inner">
        <div className="eyebrow reveal">Om mig</div>
        <h1 className="about__title display reveal" style={{ animationDelay: '0.08s' }}>
          Koordinerar processer, avtal och system
        </h1>

        <div className="about__grid">
          <aside className="about__profile reveal" style={{ animationDelay: '0.12s' }}>
            <div className="about__avatar">
              {imgError ? (
                <span className="about__monogram">OB</span>
              ) : (
                <img
                  src={useFallback ? PROFILE_IMG_FALLBACK : PROFILE_IMG}
                  alt="Oscar Bäckman, Business Operations Coordinator i Stockholm"
                  width={148}
                  height={148}
                  loading="eager"
                  fetchPriority="high"
                  onError={() => {
                    if (!useFallback) setUseFallback(true);
                    else setImgError(true);
                  }}
                />
              )}
            </div>
            <h2 className="about__name">Oscar Bäckman</h2>
            <p className="about__role">Business Operations Coordinator</p>

            <dl className="about__meta">
              <div>
                <dt>Plats</dt>
                <dd>Stockholm</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd className="ok">Öppen för möjligheter</dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+46720101647">072-010 16 47</a>
                </dd>
              </div>
            </dl>

            <div className="about__actions">
              <Link to="/cv" className="btn about__btn">
                Visa CV
              </Link>
              <a href={CV_PDF} download className="btn btn--ghost about__btn">
                Ladda ner PDF
              </a>
            </div>
          </aside>

          <div className="about__body">
            <p className="about__bio reveal" style={{ animationDelay: '0.16s' }}>
              Jag har flera års erfarenhet av ekonomi, administration och{' '}
              <span className="hl">systemflöden</span> i IT- och servicebolag.
              Jag trivs i den koordinerande rollen där processer, avtal och
              integrationer ska hänga ihop, och arbetar nära ekonomi, försäljning
              och support.
            </p>
            <div className="about__blocks">
              <div className="about__block panel reveal" style={{ animationDelay: '0.2s' }}>
                <h2 className="about__block-title">Kompetenser</h2>
                <div className="about__tags">
                  {SKILLS.map((s) => (
                    <span className="about__tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>

              <div className="about__block panel reveal" style={{ animationDelay: '0.26s' }}>
                <h2 className="about__block-title">Certifieringar</h2>
                <ul className="about__list">
                  <li>Certifierad Ekonomiassistent — Påhlmans Handelsinstitut</li>
                  <li>MS Teams & SharePoint — Informator</li>
                </ul>
              </div>

              <div className="about__block panel reveal" style={{ animationDelay: '0.32s' }}>
                <h2 className="about__block-title">Utbildning</h2>
                <ul className="about__list">
                  <li>Full Stack Development — Code Institute</li>
                  <li>Tekniskt gymnasium — Värmdö Tekniska Gymnasium</li>
                  <li>Ekonomiutbildning — Komvux Värmdö</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="about__diploma panel reveal" style={{ animationDelay: '0.36s' }}>
          <h2 className="about__block-title">Verktyg jag byggt</h2>
          <p className="about__diploma-note">
            Jag bygger också egna verktyg. Det började med en fullstackutbildning
            hos Code Institute 2024 och har blivit ett sätt att lösa mina egna
            arbetsproblem — en jobbsöksapp som hämtar annonser från
            Arbetsförmedlingens API, och Textverket, en gratistjänst som skriver
            offertmejl och produkttexter åt svenska småföretag.
          </p>
          <p className="about__diploma-note">
            Jag söker inte utvecklarjobb. Men jag vet vad en integration kostar
            att bygga, var den brukar gå sönder och hur man beskriver ett problem
            så att en utvecklare kan lösa det. Det gör mig till en bättre
            kravställare.{' '}
            <Link to="/projects" className="about__diploma-link">
              Se projekten →
            </Link>
          </p>
          {!diplomaError && (
            <img
              src="/diploma.png"
              alt="Diplom i Full Stack Software Development från Code Institute, 2024"
              width={420}
              height={297}
              loading="lazy"
              onError={() => setDiplomaError(true)}
            />
          )}
          <a
            className="about__diploma-file"
            href={CV_PDF}
            download
          >
            Ladda ner CV med utbildning (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
