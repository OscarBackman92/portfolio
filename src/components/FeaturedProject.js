import React, { useState } from 'react';
import './FeaturedProject.css';

/**
 * Repot bakom Textverket. Namnen matchas mot GitHub-listan så att projektet
 * inte visas både här och som ett vanligt kort.
 */
export const SHOWCASE_REPOS = new Set(['textverket', 'foretagskollen']);

const LIVE_URL = 'https://foretagskollen.vercel.app';

// TODO: byt till .../textverket när repot är omdöpt. GitHub redirectar från
// det gamla namnet, så den här länken fungerar i båda lägen.
const REPO_URL = 'https://github.com/OscarBackman92/foretagskollen';

// TODO: lägg skärmbilden i public/textverket.png (1200x750).
const SCREENSHOT = '/textverket.png';

function FeaturedProject() {
  const [shotMissing, setShotMissing] = useState(false);

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

      <div className="featured__shot">
        {shotMissing ? (
          <span className="featured__shot-fallback">Textverket</span>
        ) : (
          <img
            src={SCREENSHOT}
            alt="Startsidan för Textverket"
            width={1200}
            height={750}
            loading="lazy"
            onError={() => setShotMissing(true)}
          />
        )}
      </div>
    </article>
  );
}

export default FeaturedProject;
