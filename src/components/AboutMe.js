import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';

const CV_PDF = '/cv/oscar-backman-cv.pdf';

const SKILLS = [
  'SuperOffice CRM', 'Visma Business', 'Wint', 'Nettailer',
  'React', 'Django', 'JavaScript', 'Python',
  'SharePoint', 'Power BI', 'GitHub', 'VS Code',
];

const PROFILE_IMG =
  'https://media.licdn.com/dms/image/v2/C4D03AQGsAsu-UNwnyw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1628016204993?e=1745452800&v=beta&t=upYDH3JMlCrZSasqn2Tq84ejb0TOH2g-Xo0TAqMMA7M';

function AboutMe() {
  const [imgError, setImgError] = useState(false);
  const [diplomaError, setDiplomaError] = useState(false);

  return (
    <section className="about section">
      <div className="section-inner">
        <div className="eyebrow reveal">OPERATOR DOSSIER</div>
        <h2 className="about__title display reveal" style={{ animationDelay: '0.1s' }}>
          About Me
        </h2>

        <div className="about__grid">
          {/* ID card */}
          <aside className="about__id panel reveal" style={{ animationDelay: '0.15s' }}>
            <div className="about__avatar">
              {imgError ? (
                <span className="about__monogram">OB</span>
              ) : (
                <img
                  src={PROFILE_IMG}
                  alt="Oscar Bäckman"
                  loading="lazy"
                  onError={() => setImgError(true)}
                />
              )}
              <span className="about__avatar-ring"></span>
            </div>
            <h3 className="about__id-name">Oscar Bäckman</h3>
            <p className="about__id-role">Business Operations · Full Stack</p>

            <dl className="about__id-meta">
              <div><dt>ID</dt><dd>OB-92</dd></div>
              <div><dt>BASE</dt><dd>Stockholm</dd></div>
              <div><dt>STATUS</dt><dd className="ok">● Available</dd></div>
              <div><dt>TEL</dt><dd>072-010 16 47</dd></div>
            </dl>

            <div className="about__id-actions">
              <Link to="/cv" className="btn about__id-btn">
                ▸ View CV
              </Link>
              <a href={CV_PDF} download className="btn btn--ghost about__id-btn">
                ▸ PDF
              </a>
            </div>
          </aside>

          {/* Bio + modules */}
          <div className="about__body">
            <p className="about__bio reveal" style={{ animationDelay: '0.2s' }}>
              Hej! Jag är Oscar — strukturerad och lösningsorienterad med lång
              erfarenhet av <span className="hl">affärssystem</span>, ekonomi och
              processutveckling. Efter år som Business Operations Coordinator kombinerar
              jag operativt driv med ett genuint intresse för teknik. Jag har nyligen
              tagit <span className="hl">Full Stack Development</span>-diplom och bygger
              vidare med <span className="hl">React</span>,{' '}
              <span className="hl">Django</span> och moderna verktyg.
            </p>

            <div className="about__modules">
              <div className="about__module panel reveal" style={{ animationDelay: '0.25s' }}>
                <span className="hud-label">{'// Skills'}</span>
                <div className="about__tags">
                  {SKILLS.map((s) => (
                    <span className="about__tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>

              <div className="about__module panel reveal" style={{ animationDelay: '0.3s' }}>
                <span className="hud-label">{'// Certifications'}</span>
                <ul className="about__list">
                  <li>Full Stack Development — Code Institute (2024)</li>
                  <li>Certifierad Ekonomiassistent — Påhlmans Handelsinstitut</li>
                  <li>MS Teams & SharePoint — Informator</li>
                </ul>
              </div>

              <div className="about__module panel reveal" style={{ animationDelay: '0.35s' }}>
                <span className="hud-label">{'// Education'}</span>
                <ul className="about__list">
                  <li>Full Stack Development — Code Institute</li>
                  <li>Tekniskt gymnasium — Värmdö Tekniska Gymnasium</li>
                  <li>Ekonomiutbildning — Komvux Värmdö</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Diploma */}
        <div className="about__diploma panel reveal" style={{ animationDelay: '0.4s' }}>
          <span className="hud-label">{'// Credential — Diploma'}</span>
          {diplomaError ? (
            <div className="about__diploma-fallback">
              <span className="about__diploma-icon">◆</span>
              <p>Full Stack Developer Diploma — Code Institute</p>
              <Link to="/cv" className="about__diploma-link">
                View credentials on CV →
              </Link>
            </div>
          ) : (
            <img
              src="/diploma.png"
              alt="Oscar Bäckman's Full Stack Developer Diploma"
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
