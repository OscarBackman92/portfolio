import React from 'react';
import './FeaturedProject.css';

export const SHOWCASE_REPOS = new Set(['textverket', 'foretagskollen']);

const LIVE_URL = 'https://foretagskollen.vercel.app';
const REPO_URL = 'https://github.com/OscarBackman92/foretagskollen';

function FeaturedProject() {
  return (
    <article className="featured reveal" style={{ animationDelay: '0.14s' }}>
      <div className="featured__body">
        <p className="featured__eyebrow">
          <span className="featured__live" aria-hidden="true" />
          I drift
        </p>

        <h2 className="featured__title display">Textverket</h2>

        <ul className="featured__chips">
          <li>Offertmejl</li>
          <li>Produkttexter</li>
          <li>Kundmejl</li>
        </ul>

        <p className="featured__text">
          Gratis AI-verktyg som skriver offertmejl, produkttexter och kundmejl åt
          svenska småföretag. Ingen inloggning, inga kostnader. Jag byggde det för
          att småföretagare lägger timmar på texter de inte tycker om att skriva.
        </p>

        <div className="featured__actions">
          <a
            href={LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Besök Textverket
            <span aria-hidden="true">→</span>
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            Kod på GitHub
          </a>
        </div>
      </div>

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
            <em>offertutkast.md</em>
          </div>
          <div className="featured__window-body">
            <p className="featured__window-kicker">Offertmejl</p>
            <p>Hej Anna,</p>
            <p>
              Tack för er förfrågan. Här är ett utkast ni kan skicka i dag —
              kort, tydligt och utan fluff.
            </p>
            <span className="featured__caret" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default FeaturedProject;
