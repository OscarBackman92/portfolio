import React from 'react';
import { Link } from 'react-router-dom';
import Seo from './Seo';
import { JOB_TITLE, PROFILE_SUMMARY } from '../data/site';
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
      'Upsales',
      'Visma Business ERP',
      'Evatic',
      'Wint',
      'Nettailer / Netset',
      'SharePoint',
      'Microsoft Office',
      'Power BI (grunder)',
    ],
  },
  {
    label: 'Teknik',
    items: ['VS Code', 'GitHub', 'AI-assisterad utveckling (Claude Code, Cursor)'],
  },
  {
    label: 'Övrigt',
    items: ['B-körkort'],
  },
];

const EXPERIENCE = [
  {
    role: 'Business Operations Coordinator',
    company: 'ADNS House of Service AB',
    period: 'Feb 2026 – Jul 2026',
    summary:
      'Central roll med ansvar för ekonomi, administration och uppföljning för House of Service IT och FM, med fokus på effektiva och skalbara processer i ett växande bolag.',
    bullets: [
      'Operativt ansvar för kund- och leverantörsfakturor samt fakturering av avtal och avstämning vid licensförändringar.',
      'Arbetade proaktivt med fakturering, attestering och egenkontroller inför månads-, kvartals- och årsbokslut och säkerställde korrekt rapportering till koncernen (Nestit Group).',
      'Huvudkontakt mot extern ekonomipartner (Wint) gällande bokföring, löner och ekonomisystem, och säkerställde kvalitet och korrekthet i den ekonomiska leveransen.',
      'Ansvarade för och vidareutvecklade integrationer mellan affärssystem, webshop och fakturering så att både automatiserade och manuella flöden fungerade korrekt.',
      'Agerade koordinator och projektledare gentemot försäljning, operations, support och externa parter, och drev projekt, avtal och initiativ från start till mål.',
      'Utvecklade interna kontroller, processer och attestflöden, säkerställde regelefterlevnad (skatt, moms, redovisning) och hade kontorsansvar för kontinuerlig drift.',
    ],
  },
  {
    role: 'Orderadministratör',
    company: 'AVOKI Group AB',
    period: 'Nov 2018 – Okt 2025',
    bullets: [
      'Hanterade försäljningsorder inom IT, AV och dokumenthantering i CRM-systemet SuperOffice och ERP-systemet Visma Business.',
      'Bidrog aktivt i förbättringsprocesser för produkter och artikelregister.',
      'Deltog i implementeringen av e-handelsplattformen Nettailer, med fokus på att effektivisera sälj- och inköpsflöden.',
      'Ansvarade för administration av artikelregister, produktpaket och bidhantering i Nettailer.',
      'Hanterade den interna handeln av telefoner och IT-utrustning, inklusive framtagning av sortiment och kontakt med tillverkare för bidpriser.',
      'Stöttade kollegor med support och testning i samband med utveckling och uppdateringar av plattformen.',
      'Utförde lagerjusteringar och deltog vid inventeringar.',
    ],
  },
  {
    role: 'Ekonomiassistent',
    company: 'AVOKI',
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
      'Diplom i Full Stack Software Development med fokus på frontend. Betyg: Pass.',
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
      <Seo
        title="CV — Oscar Bäckman"
        description="Meritförteckning: operations, orderadministration och ekonomi 2017–2026."
        path="/cv"
      />
      <div className="section-inner cv__inner">
        <div className="cv__header reveal">
          <div className="eyebrow">Curriculum Vitae</div>
          <div className="cv__header-row">
            <div>
              <h1 className="cv__name display">Oscar Bäckman</h1>
              <p className="cv__title">{JOB_TITLE}</p>
              <p className="cv__location">Stockholm, Sverige</p>
            </div>
            <a href={CV_PDF} download className="btn cv__download">
              Ladda ner PDF
            </a>
          </div>

          <div className="cv__contacts panel">
            <a href="tel:+46720101647">072-010 16 47</a>
            <span className="cv__contact-sep">·</span>
            <a href="mailto:jan.oscar.backman@gmail.com">jan.oscar.backman@gmail.com</a>
            <span className="cv__contact-sep">·</span>
            <a
              href="https://www.linkedin.com/in/oscar-b%C3%A4ckman-3149b1167/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="cv__contact-sep">·</span>
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
          <article className="cv__block panel reveal" style={{ animationDelay: '0.08s' }}>
            <h2 className="cv__section-title">Profil</h2>
            <p className="cv__text">
              {PROFILE_SUMMARY} Jag har flera års erfarenhet av ekonomi, order och
              systemflöden i växande IT- och servicebolag. Jag bygger gärna om manuella
              rutiner till automatiserade flöden och sätter mig snabbt in i nya system.
            </p>
          </article>

          <article className="cv__block panel reveal" style={{ animationDelay: '0.1s' }}>
            <h2 className="cv__section-title">Egenskaper</h2>
            <div className="cv__skill-tags">
              {TRAITS.map((trait) => (
                <span className="cv__skill-tag cv__skill-tag--trait" key={trait}>
                  {trait}
                </span>
              ))}
            </div>
          </article>

          <article className="cv__block panel reveal" style={{ animationDelay: '0.14s' }}>
            <h2 className="cv__section-title">Arbetslivserfarenhet</h2>
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

          <article className="cv__block panel reveal" style={{ animationDelay: '0.18s' }}>
            <h2 className="cv__section-title">Kompetenser</h2>
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

          <article className="cv__block panel reveal" style={{ animationDelay: '0.22s' }}>
            <h2 className="cv__section-title">Utbildning</h2>
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

          <article className="cv__block panel reveal" style={{ animationDelay: '0.26s' }}>
            <h2 className="cv__section-title">Egna verktyg</h2>
            <p className="cv__text">
              Jag bygger egna verktyg vid sidan av arbetet — se{' '}
              <Link to="/projects" className="cv__inline-link">Projekt</Link>.
            </p>
          </article>
        </div>

        <div className="cv__footer reveal" style={{ animationDelay: '0.3s' }}>
          <a href={CV_PDF} download className="btn btn--ghost">
            Ladda ner PDF
          </a>
          <Link to="/contact" className="btn">
            Kontakta mig
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CV;
