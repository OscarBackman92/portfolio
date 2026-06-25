import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const ROLES = [
  'FULL STACK DEVELOPER',
  'REACT ENGINEER',
  'DJANGO BUILDER',
  'PROBLEM SOLVER',
];

function useTypewriter(words, typing = 90, deleting = 45, hold = 1400) {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let delay = del ? deleting : typing;

    if (!del && text === word) {
      delay = hold;
      const t = setTimeout(() => setDel(true), delay);
      return () => clearTimeout(t);
    }
    if (del && text === '') {
      setDel(false);
      setI((v) => v + 1);
      return;
    }

    const t = setTimeout(() => {
      setText((cur) =>
        del ? word.slice(0, cur.length - 1) : word.slice(0, cur.length + 1)
      );
    }, delay);
    return () => clearTimeout(t);
  }, [text, del, i, words, typing, deleting, hold]);

  return text;
}

function Home() {
  const role = useTypewriter(ROLES);

  return (
    <section className="home section">
      <div className="section-inner home__grid">
        {/* Left: identity */}
        <div className="home__intro">
          <div className="eyebrow reveal">SYSTEM ONLINE — OPERATOR PROFILE</div>

          <h1 className="home__name display reveal" style={{ animationDelay: '0.1s' }}>
            OSCAR<br />BÄCKMAN
          </h1>

          <div className="home__role reveal" style={{ animationDelay: '0.2s' }}>
            <span className="home__role-prefix">&gt;</span>
            <span className="home__role-text">{role}</span>
            <span className="home__cursor">_</span>
          </div>

          <p className="home__lede reveal" style={{ animationDelay: '0.3s' }}>
            Junior developer building interactive, fast and accessible web
            applications with <span className="hl">React</span>,{' '}
            <span className="hl">JavaScript</span> and{' '}
            <span className="hl">Django</span>. Always hunting the next
            challenge to grow.
          </p>

          <div className="home__cta reveal" style={{ animationDelay: '0.4s' }}>
            <Link to="/projects" className="btn">
              ▸ Explore Missions
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              ▸ Open Comms
            </Link>
          </div>
        </div>

        {/* Right: telemetry terminal */}
        <div className="home__panel panel reveal" style={{ animationDelay: '0.3s' }}>
          <div className="home__panel-head">
            <span className="home__panel-dots">
              <i></i><i></i><i></i>
            </span>
            <span className="home__panel-title">operator.status</span>
          </div>
          <div className="home__terminal">
            <p><span className="t-dim">$</span> whoami</p>
            <p className="t-out">oscar_backman</p>
            <p><span className="t-dim">$</span> cat ./status.json</p>
            <p className="t-out">{'{'}</p>
            <p className="t-out">&nbsp;&nbsp;<span className="t-key">"role"</span>: <span className="t-val">"Full Stack Dev"</span>,</p>
            <p className="t-out">&nbsp;&nbsp;<span className="t-key">"focus"</span>: <span className="t-val">"React / Django"</span>,</p>
            <p className="t-out">&nbsp;&nbsp;<span className="t-key">"status"</span>: <span className="t-ok">"available"</span>,</p>
            <p className="t-out">&nbsp;&nbsp;<span className="t-key">"location"</span>: <span className="t-val">"Sweden"</span></p>
            <p className="t-out">{'}'}</p>
            <p><span className="t-dim">$</span> <span className="home__cursor">_</span></p>
          </div>
        </div>
      </div>

      <div className="home__stats section-inner reveal" style={{ animationDelay: '0.5s' }}>
        {[
          { k: 'STACK', v: 'React · Django' },
          { k: 'CERT', v: 'Full Stack Dev' },
          { k: 'STATUS', v: 'Open to work' },
          { k: 'BASE', v: 'Sweden 🇸🇪' },
        ].map((s) => (
          <div className="home__stat" key={s.k}>
            <span className="home__stat-k">{s.k}</span>
            <span className="home__stat-v">{s.v}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
