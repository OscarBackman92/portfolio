import React from 'react';
import './FeaturedProject.css';

const SHOWCASES = [
  {
    repo: 'foretagskollen',
    title: 'Textverket',
    liveUrl: 'https://foretagskollen.vercel.app',
    repoUrl: 'https://github.com/OscarBackman92/foretagskollen',
    chips: ['Offertmejl', 'Produkttexter', 'Kundmejl'],
    text: 'Gratis AI-verktyg som skriver offertmejl, produkttexter och kundmejl åt svenska småföretag. Ingen inloggning, inga kostnader. Jag byggde det för att småföretagare lägger timmar på texter de inte tycker om att skriva.',
    visitLabel: 'Besök Textverket',
    windowFile: 'offertutkast.md',
    windowKicker: 'Offertmejl',
    windowKind: 'letter',
    windowLines: [
      'Hej Anna,',
      'Tack för er förfrågan. Här är ett utkast ni kan skicka i dag — kort, tydligt och utan fluff.',
    ],
  },
  {
    repo: 'af-jobbansokan-api',
    title: 'Jobbdjungeln',
    liveUrl: 'https://jobbdjungeln.obackman.se/',
    repoUrl: 'https://github.com/OscarBackman92/af-jobbansokan-api',
    chips: ['Ansökningar', 'Platsbanken', 'Påminnelser'],
    text: 'Gratis översikt över hela jobbsöket — ansökningar, status, nästa steg och sök i Platsbanken. Ingen Excel, inga annonser. Jag byggde det för att hålla koll när flera processer rullar samtidigt.',
    visitLabel: 'Besök Jobbdjungeln',
    windowFile: 'idag.md',
    windowKicker: 'Idag & att göra',
    windowKind: 'list',
    windowItems: [
      { title: 'Ring tillbaka', meta: 'Nordlogistik · fredag' },
      { title: 'Skicka CV', meta: 'Wint · idag' },
    ],
  },
];

export const SHOWCASE_REPOS = new Set(SHOWCASES.map((item) => item.repo));

function ShowcaseWindow({ item }) {
  return (
    <div className="featured__shot" aria-hidden="true">
      <div className="featured__stack">
        <span />
        <span />
      </div>
      <div className="featured__window">
        <div className="featured__window-bar">
          <span />
          <span />
          <span />
          <em>{item.windowFile}</em>
        </div>
        <div className="featured__window-body">
          <p className="featured__window-kicker">{item.windowKicker}</p>
          {item.windowKind === 'list' ? (
            <ul className="featured__window-list">
              {item.windowItems.map((row) => (
                <li key={row.title}>
                  <strong>{row.title}</strong>
                  <span>{row.meta}</span>
                </li>
              ))}
            </ul>
          ) : (
            item.windowLines.map((line) => <p key={line}>{line}</p>)
          )}
          <span className="featured__caret" />
        </div>
      </div>
    </div>
  );
}

function FeaturedProject() {
  return (
    <div className="featured-list">
      {SHOWCASES.map((item, i) => (
        <article
          className="featured reveal"
          key={item.repo}
          style={{ animationDelay: `${0.14 + i * 0.08}s` }}
        >
          <div className="featured__body">
            <p className="featured__eyebrow">
              <span className="featured__live" aria-hidden="true" />
              I drift
            </p>

            <h2 className="featured__title display">{item.title}</h2>

            <ul className="featured__chips">
              {item.chips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>

            <p className="featured__text">{item.text}</p>

            <div className="featured__actions">
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                {item.visitLabel}
                <span aria-hidden="true">→</span>
              </a>
              <a
                href={item.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                Kod på GitHub
              </a>
            </div>
          </div>

          <ShowcaseWindow item={item} />
        </article>
      ))}
    </div>
  );
}

export default FeaturedProject;
