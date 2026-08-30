import React from 'react';
import './FeaturedProject.css';

export const SHOWCASE_REPOS = new Set(['textverket', 'foretagskollen']);

const LIVE_URL = 'https://foretagskollen.vercel.app';
const REPO_URL = 'https://github.com/OscarBackman92/foretagskollen';

function FeaturedProject() {
  return (
    <article className="featured reveal" style={{ animationDelay: '0.14s' }}>
      <div className="featured__body">
        <p className="featured__eyebrow">I DRIFT</p>

        <h2 className="featured__title display">Textverket</h2>

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

      <div className="featured__shot featured__shot--brand" aria-hidden="true">
        <span className="featured__shot-label">Textverket</span>
        <span className="featured__shot-sub">AI-verktyg för svenska småföretag</span>
      </div>
    </article>
  );
}

export default FeaturedProject;
