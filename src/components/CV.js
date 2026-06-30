import React from 'react';
import { Link } from 'react-router-dom';
import './CV.css';

const CV_PDF = '/cv/oscar-backman-cv.pdf';

const TRAITS = [
  'Lösningsorienterad',
  'Serviceinriktad',
  'Nyfiken / snabblärd',
  'Analytisk',
  'Samarbetsinriktad',
];

const SKILL_GROUPS = [
  {
    label: 'Affärssystem & verktyg',
    items: [
      'SuperOffice CRM',
      'Visma Business ERP',
      'Wint',
      'Nettailer / Netset',
      'SharePoint',
      'Microsoft Office',
      'Power BI (grunder)',
    ],
  },
  {
    label: 'Utveckling & teknik',
    items: ['VS Code', 'GitHub', 'React', 'Django', 'Claude (AI)'],
  },
  {
    label: 'Övrigt',
    items: ['B-körkort'],
  },
];

const EXPERIENCE = [
  {
    role: 'Orderadministratör',
    company: 'AVOKI Group AB',
    period: 'Feb 2026 – pågående',
    current: true,
    bullets: [
      'Hanterar försäljningsorder inom IT, AV och dokumenthantering i SuperOffice och Visma Business.',
      'Bidrar aktivt i förbättringsprocesser för produkter och artikelregister.',
      'Deltar i implementeringen av e-handelsplattformen Nettailer med fokus på effektivare sälj- och inköpsflöden.',
      'Ansvarar för administration av artikelregister, produktpaket och bidhantering i Nettailer.',
      'Hanterar intern handel av telefoner och IT-utrustning, inklusive sortiment och kontakt med tillverkare.',
      'Stöttar kollegor med support och testning vid utveckling och uppdateringar av plattformen.',
      'Utför lagerjusteringar och deltar vid inventeringar.',
    ],
  },
  {
    role: 'Business Operations Coordinator',
    company: 'ADNS House of Service AB',
    period: 'Nov 2018 – Okt 2025',
    summary:
      'Central roll med ansvar för ekonomi, administration och uppföljning för House of Service IT och FM, med fokus på effektiva och skalbara processer i ett växande bolag.',
    bullets: [
      'Operativt ansvar för kund- och leverantörsfakturor – kontering, matchning och attest – samt fakturering av avtal och avstämning vid licensförändringar.',
      'Arbetar proaktivt med fakturering, attestering och egenkontroller inför månads-, kvartals- och årsbokslut och säkerställer korrekt rapportering till koncernen (Nestit Group).',
      'Huvudkontakt mot extern ekonomipartner (Wint) gällande bokföring, löner och ekonomisystem.',
      'Ansvarar för och vidareutvecklar integrationer mellan affärssystem, webshop och fakturering.',
      'Agerar koordinator och projektledare gentemot försäljning, operations, support och externa parter.',
      'Utvecklar interna kontroller, processer och attestflöden samt säkerställer regelefterlevnad (skatt, moms, redovisning).',
      'Kontorsansvar för kontinuerlig drift.',
    ],
  },
  {
    role: 'Ekonomiassistent',
    company: 'AVOKI Group AB',
    period: 'Sep 2017 – Nov 2018',
    bullets: [
      'Hanterade fakturering och kreditering i Visma Business.',
      'Utförde löpande kontoavstämningar och hanterade kundfrågor kring fakturor och betalningar.',
    ],
  },
  {
    role: 'Ekonomiassistent (praktik)',
    company: 'IMG Sweden AB',
    period: 'Jun 2017 – Aug 2017',
    bullets: [
      'Assisterade i löpande ekonomiuppgifter, fakturering och rapportering.',
    ],
  },
];

const EDUCATION = [
  {
    title: 'Fullstack Development',
    org: 'Code Institute',
    period: '2024',
    detail:
      'Diplom i Full Stack Software Development med fokus på avancerad frontend. Praktisk erfarenhet av React, Node.js och Django. Betyg: Pass.',
  },
  {
    title: 'MS Teams & SharePoint för administratörer',
    org: 'Informator',
    period: '2022',
    detail: null,
  },
  {
    title: 'Certifierad Ekonomiassistent',
    org: 'Påhlmans Handelsinstitut',
    period: '2017',
    detail: null,
  },
  {
    title: 'Ekonomiutbildning',
    org: 'Komvux Värmdö',
    period: '2014',
    detail: null,
  },
  {
    title: 'Tekniskt gymnasium',
    org: 'Värmdö Tekniska Gymnasium',
    period: '2010 – 2013',
    detail: null,
  },
];

function CV() {
  return (
    <section className="cv section">
      <div className="section-inner cv__inner">
        <div className="cv__header reveal">
          <div className="eyebrow">PERSONNEL FILE — CV</div>
          <div className="cv__header-row">
            <div>
              <h1 className="cv__name display">Oscar Bäckman</h1>
              <p className="cv__title">Business Operations Coordinator</p>
              <p className="cv__location">Stockholm, Sverige</p>
            </div>
            <a href={CV_PDF} download className="btn cv__download">
              ▸ Ladda ner PDF
            </a>
          </div>

          <div className="cv__contacts panel">
            <a href="tel:+46720101647">072-010 16 47</a>
            <span className="cv__contact-sep">|</span>
            <a href="mailto:jan.oscar.backman@gmail.com">jan.oscar.backman@gmail.com</a>
            <span className="cv__contact-sep">|</span>
            <a
              href="https://www.linkedin.com/in/oscar-b%C3%A4ckman-3149b1167/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="cv__contact-sep">|</span>
            <a
              href="https://github.com/OscarBackman92"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="cv__body">
          <article className="cv__block panel reveal" style={{ animationDelay: '0.1s' }}>
            <span className="hud-label">{'// Profil'}</span>
            <p className="cv__text">
              Jag är en snabblärd och strukturerad person som trivs i rollen som spindeln i
              nätet. Jag gillar att samarbeta, lösa problem och förbättra rutiner. Med ett
              genuint intresse för teknik och system sätter jag mig snabbt in i nya
              arbetssätt och bidrar gärna till att skapa effektiva och användarvänliga
              lösningar. Jag uppskattar att arbeta med människor och motiveras av att se
              hur samarbete leder till utveckling.
            </p>
          </article>

          <article className="cv__block panel reveal" style={{ animationDelay: '0.12s' }}>
            <span className="hud-label">{'// Egenskaper'}</span>
            <div className="cv__skill-tags">
              {TRAITS.map((trait) => (
                <span className="cv__skill-tag cv__skill-tag--trait" key={trait}>
                  {trait}
                </span>
              ))}
            </div>
          </article>

          <article className="cv__block panel reveal" style={{ animationDelay: '0.15s' }}>
            <span className="hud-label">{'// Arbetslivserfarenhet'}</span>
            <ul className="cv__timeline cv__timeline--jobs">
              {EXPERIENCE.map((job) => (
                <li
                  className={`cv__timeline-item${job.current ? ' cv__timeline-item--current' : ''}`}
                  key={`${job.company}-${job.period}`}
                >
                  <div className="cv__timeline-head">
                    <strong>
                      {job.role}
                      {job.current && <span className="cv__current-badge">Nuvarande</span>}
                    </strong>
                    <span>{job.period}</span>
                  </div>
                  <p className="cv__timeline-org">{job.company}</p>
                  {job.summary && <p className="cv__job-summary">{job.summary}</p>}
                  <ul className="cv__bullets">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </article>

          <article className="cv__block panel reveal" style={{ animationDelay: '0.2s' }}>
            <span className="hud-label">{'// Kompetenser'}</span>
            <div className="cv__skills">
              {SKILL_GROUPS.map((group) => (
                <div className="cv__skill-group" key={group.label}>
                  <h3 className="cv__skill-label">{group.label}</h3>
                  <div className="cv__skill-tags">
                    {group.items.map((skill) => (
                      <span className="cv__skill-tag" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="cv__block panel reveal" style={{ animationDelay: '0.25s' }}>
            <span className="hud-label">{'// Utbildning'}</span>
            <ul className="cv__timeline">
              {EDUCATION.map((item) => (
                <li className="cv__timeline-item" key={item.title}>
                  <div className="cv__timeline-head">
                    <strong>{item.title}</strong>
                    <span>{item.period}</span>
                  </div>
                  <p className="cv__timeline-org">{item.org}</p>
                  {item.detail && <p>{item.detail}</p>}
                </li>
              ))}
            </ul>
          </article>

          <article className="cv__block panel reveal" style={{ animationDelay: '0.3s' }}>
            <span className="hud-label">{'// Utvecklingsprojekt'}</span>
            <p className="cv__text">
              Full stack-projekt med React, Django och moderna webbverktyg — se{' '}
              <Link to="/projects" className="cv__inline-link">
                Mission Log
              </Link>{' '}
              och{' '}
              <a
                href="https://github.com/OscarBackman92"
                target="_blank"
                rel="noopener noreferrer"
                className="cv__inline-link"
              >
                GitHub
              </a>
              .
            </p>
          </article>
        </div>

        <div className="cv__footer reveal" style={{ animationDelay: '0.35s' }}>
          <a href={CV_PDF} download className="btn btn--ghost">
            ▸ Ladda ner PDF
          </a>
          <Link to="/contact" className="btn">
            ▸ Kontakta mig
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CV;
