import React, { useEffect, useMemo, useState } from 'react';
import './GithubRepos.css';

const GITHUB_USER = 'OscarBackman92';
const API_URL = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`;

const LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  'C#': '#178600',
  PHP: '#4F5D95',
  Shell: '#89e051',
  Ruby: '#701516',
  Go: '#00ADD8',
  Vue: '#41b883',
};

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days < 1) return 'today';
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setStatus('loading');
      setError('');
      try {
        const res = await fetch(API_URL, { signal: controller.signal });
        if (!res.ok) {
          if (res.status === 403) {
            throw new Error('GitHub API rate limit reached. Try again in a little while.');
          }
          throw new Error(`GitHub responded with ${res.status}.`);
        }
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error('Unexpected response from GitHub.');
        setRepos(data.filter((r) => !r.fork && !r.archived));
        setStatus('ready');
      } catch (err) {
        if (err.name === 'AbortError') return;
        setError(err.message || 'Failed to load projects.');
        setStatus('error');
      }
    }

    load();
    return () => controller.abort();
  }, []);

  const sorted = useMemo(() => {
    return [...repos].sort(
      (a, b) =>
        b.stargazers_count - a.stargazers_count ||
        new Date(b.pushed_at) - new Date(a.pushed_at)
    );
  }, [repos]);

  const languages = useMemo(() => {
    const set = new Set(sorted.map((r) => r.language).filter(Boolean));
    return ['ALL', ...Array.from(set).sort()];
  }, [sorted]);

  const visible =
    filter === 'ALL' ? sorted : sorted.filter((r) => r.language === filter);

  return (
    <section className="repos section">
      <div className="section-inner">
        <div className="eyebrow reveal">MISSION LOG — LIVE FEED</div>
        <h2 className="repos__title display reveal" style={{ animationDelay: '0.1s' }}>
          Projects
        </h2>
        <p className="repos__lede reveal" style={{ animationDelay: '0.15s' }}>
          Pulled live from{' '}
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="repos__user"
          >
            github.com/{GITHUB_USER}
          </a>{' '}
          via the GitHub API.
        </p>

        {/* Toolbar */}
        {status === 'ready' && (
          <div className="repos__toolbar reveal" style={{ animationDelay: '0.2s' }}>
            <span className="repos__count">
              {visible.length} {visible.length === 1 ? 'unit' : 'units'} deployed
            </span>
            <div className="repos__filters">
              {languages.map((lang) => (
                <button
                  key={lang}
                  className={`repos__filter ${filter === lang ? 'is-active' : ''}`}
                  onClick={() => setFilter(lang)}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Loading skeletons */}
        {status === 'loading' && (
          <div className="repos__grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="repos__skeleton panel" key={i}>
                <span className="repos__scan"></span>
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {status === 'error' && (
          <div className="repos__error panel">
            <span className="repos__error-icon">⚠</span>
            <p className="repos__error-msg">{error}</p>
            <a
              href={`https://github.com/${GITHUB_USER}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              ▸ View on GitHub
            </a>
          </div>
        )}

        {/* Empty */}
        {status === 'ready' && visible.length === 0 && (
          <p className="repos__empty">No units match this filter.</p>
        )}

        {/* Grid */}
        {status === 'ready' && visible.length > 0 && (
          <div className="repos__grid">
            {visible.map((repo, i) => (
              <article
                className="repos__card panel reveal"
                key={repo.id}
                style={{ animationDelay: `${0.05 * (i % 9)}s` }}
              >
                <header className="repos__card-head">
                  <h3 className="repos__name">{repo.name}</h3>
                  {repo.language && (
                    <span className="repos__lang">
                      <span
                        className="repos__lang-dot"
                        style={{ background: LANG_COLORS[repo.language] || '#8b98a8' }}
                      ></span>
                      {repo.language}
                    </span>
                  )}
                </header>

                <p className="repos__desc">
                  {repo.description || 'No description provided.'}
                </p>

                <div className="repos__meta">
                  <span title="Stars">★ {repo.stargazers_count}</span>
                  <span title="Forks">⑂ {repo.forks_count}</span>
                  <span title="Last push">⟳ {timeAgo(repo.pushed_at)}</span>
                </div>

                <footer className="repos__card-foot">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repos__link"
                  >
                    ▸ Code
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repos__link repos__link--live"
                    >
                      ▸ Live
                    </a>
                  )}
                </footer>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default GitHubRepos;
