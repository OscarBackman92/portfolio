import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="section-inner">
        <div className="eyebrow reveal">Om mig</div>
        <h2 className="about__title display reveal" style={{ animationDelay: '0.08s' }}>
          Koordinerar processer, avtal och system
        </h2>

        <div className="about__grid">
          <aside className="about__profile reveal" style={{ animationDelay: '0.12s' }}>
            <div className="about__avatar">
              {imgError ? (
                <span className="about__monogram">OB</span>
              ) : (
                <img
                  src={useFallback ? PROFILE_IMG_FALLBACK : PROFILE_IMG}
                  alt="Oscar Bäckman"
                  loading="lazy"
                  onError={() => {
                    if (!useFallback) setUseFallback(true);
                    else setImgError(true);
                  }}
                />
              )}
            </div>
            <h3 className="about__name">Oscar Bäckman</h3>
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
            <p className="about__hobby reveal" style={{ animationDelay: '0.18s' }}>
              Kodning är något jag gör på sidan om jobbet, för att det är kul —
              inte något jag arbetat med.
            </p>

            <div className="about__blocks">
              <div className="about__block panel reveal" style={{ animationDelay: '0.2s' }}>
                <h3 className="about__block-title">Kompetenser</h3>
                <div className="about__tags">
                  {SKILLS.map((s) => (
                    <span className="about__tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>

              <div className="about__block panel reveal" style={{ animationDelay: '0.26s' }}>
                <h3 className="about__block-title">Certifieringar</h3>
                <ul className="about__list">
                  <li>Certifierad Ekonomiassistent — Påhlmans Handelsinstitut</li>
                  <li>MS Teams & SharePoint — Informator</li>
                </ul>
              </div>

              <div className="about__block panel reveal" style={{ animationDelay: '0.32s' }}>
                <h3 className="about__block-title">Utbildning</h3>
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
          <h3 className="about__block-title">På sidan om</h3>
          <p className="about__diploma-note">
            2024 läste jag Full Stack Development hos Code Institute av nyfikenhet.
            Det är ett sidospår, inte en yrkesroll.{' '}
            <Link to="/projects" className="about__diploma-link">
              Några hobbyprojekt →
            </Link>
          </p>
          {diplomaError ? (
            <div className="about__diploma-fallback">
              <p>Diplom — Code Institute, 2024</p>
            </div>
          ) : (
            <img
              src="/diploma.png"
              alt="Diplom i Full Stack Development från Code Institute, ett sidospår vid sidan av jobbet"
              loading="lazy"
              onError={() => setDiplomaError(true)}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
