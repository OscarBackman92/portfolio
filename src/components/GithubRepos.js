import React, { useEffect, useMemo, useState } from 'react';
import Seo from './Seo';
import FeaturedProject, { SHOWCASE_REPOS } from './FeaturedProject';
import './GithubRepos.css';

const GITHUB_USER = 'OscarBackman92';
const API_URL = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`;

/** Cache i localStorage — GitHubs oautentiserade tak är 60 anrop per timme och IP */
const CACHE_KEY = 'gh:repos:v1';
const CACHE_TTL = 6 * 60 * 60 * 1000;

/** Repot för den här sajten, plus kursarbeten och tomma testrepon som inte ska listas */
const EXCLUDED_REPOS = new Set([
  'portfolio',
  'test-django',
  'java',
  'demo-backend',
  'budget_frontend',
  'budget-tracker-django',
  'fitnesspp5api',
  'FitPro',
  'CI-PP2-OScar-B-ckman',
  'Project-1-Oscar-B-ckmanv2',
  'Battleship_PP3_CI',
  'WafflerestPP4oscar',
]);

/** Kända döda värdar (t.ex. Herokus avslutade gratisnivå) */
const DEAD_HOMEPAGE_HOSTS = new Set([
  'oscarportfolio-c9ac98cf9943.herokuapp.com',
  'fitnessapi-d773a1148384.herokuapp.com',
  'oscarwaffle-be7490c12beb.herokuapp.com',
  'python3battleship-c25008d31b4b.herokuapp.com',
]);

/** Backend- och kodrepon utan publik sida — ingen Live-knapp */
const CODE_ONLY_REPOS = new Set([
  'af-jobbansokan-api',
  'demo-backend',
  'budget-tracker-django',
  'test-django',
  'java',
  'fitnesspp5api',
  'budget_frontend',
]);

/** Kategorin läses ur repots topics, i den här prioritetsordningen */
const CATEGORY_TOPICS = [
  'featured',
  'api',
  'react',
  'django',
  'python',
  'javascript',
  'kurs',
];

const CATEGORY_LABELS = {
  featured: 'I drift',
  api: 'API',
  react: 'React',
  django: 'Django',
  python: 'Python',
  javascript: 'JavaScript',
  kurs: 'Kurs',
};

const LANG_COLORS = {
  JavaScript: '#c9a227',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#c2410c',
  CSS: '#563d7c',
  Java: '#b07219',
  'C#': '#178600',
  PHP: '#4F5D95',
  Shell: '#0f6b5c',
  Ruby: '#701516',
  Go: '#00ADD8',
  Vue: '#41b883',
};

function trimRepo(repo) {
  return {
    id: repo.id,
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url,
    homepage: repo.homepage,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    pushed_at: repo.pushed_at,
    topics: repo.topics || [],
    archived: repo.archived,
    fork: repo.fork,
  };
}

function readCache() {
  try {
    const parsed = JSON.parse(localStorage.getItem(CACHE_KEY));
    if (!parsed || typeof parsed.fetchedAt !== 'number') return null;
    if (!Array.isArray(parsed.repos)) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeCache(repos) {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ fetchedAt: Date.now(), repos })
    );
  } catch {
    // Privat läge eller full kvot — cache är en bonus, inte ett krav
  }
}

function getLiveUrl(repo) {
  if (CODE_ONLY_REPOS.has(repo.name)) return null;
  if (!repo.homepage) return null;

  try {
    if (DEAD_HOMEPAGE_HOSTS.has(new URL(repo.homepage).hostname)) return null;
  } catch {
    return null;
  }

  return repo.homepage;
}

function getCategory(repo) {
  const topics = repo.topics || [];
  const match = CATEGORY_TOPICS.find((topic) => topics.includes(topic));
  return match ? CATEGORY_LABELS[match] : null;
}

function isFeatured(repo) {
  return (repo.topics || []).includes('featured');
}

/** Visas i Textverket-blocket ovanför listan, ska inte dyka upp två gånger */
function isShowcased(repo) {
  return SHOWCASE_REPOS.has(repo.name) && isFeatured(repo);
}

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days < 1) return 'idag';
  if (days < 30) return `${days} d sedan`;
  if (days < 365) return `${Math.floor(days / 30)} mån sedan`;
  return `${Math.floor(days / 365)} år sedan`;
}

function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState('loading');
  const [fromCache, setFromCache] = useState(false);
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    const cached = readCache();

    if (cached && Date.now() - cached.fetchedAt < CACHE_TTL) {
      setRepos(cached.repos);
      setStatus('ready');
      return undefined;
    }

    let cancelled = false;

    fetch(API_URL, {
      headers: {
        Accept: 'application/vnd.github+json, application/vnd.github.mercy-preview+json',
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub svarade ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const trimmed = data.map(trimRepo);
        writeCache(trimmed);
        setRepos(trimmed);
        setFromCache(false);
        setStatus('ready');
      })
      .catch(() => {
        if (cancelled) return;
        // Utgången cache är bättre än en tom projektsida
        if (cached) {
          setRepos(cached.repos);
          setFromCache(true);
          setStatus('ready');
        } else {
          setStatus('error');
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const listed = useMemo(() => {
    return repos
      .filter(
        (repo) =>
          !repo.archived &&
          !repo.fork &&
          !EXCLUDED_REPOS.has(repo.name) &&
          !isShowcased(repo)
      )
      .sort((a, b) => {
        const featureGap = Number(isFeatured(b)) - Number(isFeatured(a));
        if (featureGap !== 0) return featureGap;
        return new Date(b.pushed_at) - new Date(a.pushed_at);
      });
  }, [repos]);

  const languages = useMemo(() => {
    const set = new Set(listed.map((repo) => repo.language).filter(Boolean));
    return ['ALL', ...Array.from(set).sort()];
  }, [listed]);

  const visible =
    filter === 'ALL' ? listed : listed.filter((repo) => repo.language === filter);

  return (
    <section className="repos section">
      <Seo
        title="Projekt — Oscar Bäckman"
        description="Verktyg jag byggt och underhåller: Textverket, Jobbdjungeln och en sajt för en båtmekaniker."
        path="/projects"
      />
      <div className="section-inner">
        <header className="repos__hero">
          <span className="repos__mark" aria-hidden="true">
            byggt
          </span>
          <div className="repos__hero-copy">
            <div className="eyebrow reveal">Projekt</div>
            <h1 className="repos__title display reveal" style={{ animationDelay: '0.08s' }}>
              Saker jag <em>byggt</em>
            </h1>
          </div>
          <p className="repos__lede reveal" style={{ animationDelay: '0.12s' }}>
            Jag löser mina egna arbetsproblem med kod. Här ligger det jag faktiskt
            använder och underhåller — inte allt jag någonsin har byggt.
          </p>
        </header>

        <FeaturedProject />

        {status === 'ready' && (
          <div className="repos__toolbar reveal" style={{ animationDelay: '0.16s' }}>
            <span className="repos__count">
              {visible.length} projekt
              {fromCache && (
                <span className="repos__notice"> · Visar sparad projektlista.</span>
              )}
            </span>
            <div className="repos__filters">
              {languages.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  className={`repos__filter ${filter === lang ? 'is-active' : ''}`}
                  onClick={() => setFilter(lang)}
                >
                  {lang !== 'ALL' && (
                    <span
                      className="repos__filter-dot"
                      style={{
                        background: LANG_COLORS[lang] || '#5c716b',
                      }}
                    />
                  )}
                  {lang === 'ALL' ? 'Alla' : lang}
                </button>
              ))}
            </div>
          </div>
        )}

        {status === 'loading' && (
          <div className="repos__grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="repos__skeleton panel" key={i} />
            ))}
          </div>
        )}

        {status === 'error' && (
          <div className="repos__error panel">
            <p className="repos__error-msg">
              Kunde inte hämta projektlistan just nu. Den finns på{' '}
              <a
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="repos__user"
              >
                github.com/{GITHUB_USER}
              </a>
              .
            </p>
          </div>
        )}

        {status === 'ready' && visible.length === 0 && (
          <p className="repos__empty">Inga projekt matchar filtret.</p>
        )}

        {status === 'ready' && visible.length > 0 && (
          <>
            <h2 className="visually-hidden">Projekt från GitHub</h2>
            <div className="repos__grid">
              {visible.map((repo, i) => {
                const liveUrl = getLiveUrl(repo);
                const category = getCategory(repo);

                return (
                  <article
                    className="repos__card panel reveal"
                    key={repo.id}
                    style={{ animationDelay: `${0.04 * (i % 9)}s` }}
                  >
                    <span className="repos__index" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <header className="repos__card-head">
                      <h3 className="repos__name">{repo.name}</h3>
                      <div className="repos__card-badges">
                        {category && <span className="repos__tag">{category}</span>}
                        {repo.language && (
                          <span className="repos__lang">
                            <span
                              className="repos__lang-dot"
                              style={{
                                background: LANG_COLORS[repo.language] || '#5c716b',
                              }}
                            />
                            {repo.language}
                          </span>
                        )}
                      </div>
                    </header>

                    <p className="repos__desc">
                      {repo.description || 'Ingen beskrivning angiven.'}
                    </p>

                    <div className="repos__meta">
                      {repo.stargazers_count > 0 && (
                        <span title="Stjärnor">★ {repo.stargazers_count}</span>
                      )}
                      {repo.forks_count > 0 && (
                        <span title="Forks">⑂ {repo.forks_count}</span>
                      )}
                      <span title="Senast uppdaterad">
                        Uppdaterad {timeAgo(repo.pushed_at)}
                      </span>
                    </div>

                    <footer className="repos__card-foot">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="repos__link"
                      >
                        Kod
                      </a>
                      {liveUrl && (
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="repos__link repos__link--live"
                        >
                          Live
                        </a>
                      )}
                    </footer>
                  </article>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default GitHubRepos;
