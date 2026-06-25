import React, { useState } from 'react';
import './AboutMe.css';

const SKILLS = [
  'HTML', 'CSS', 'JavaScript', 'Python',
  'React', 'Django', 'REST API',
  'PostgreSQL', 'Git', 'Agile',
];

const PROFILE_IMG =
  'https://media.licdn.com/dms/image/v2/C4D03AQGsAsu-UNwnyw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1628016204993?e=1745452800&v=beta&t=upYDH3JMlCrZSasqn2Tq84ejb0TOH2g-Xo0TAqMMA7M';

function AboutMe() {
  const [imgError, setImgError] = useState(false);

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
            <p className="about__id-role">Full Stack Developer</p>

            <dl className="about__id-meta">
              <div><dt>ID</dt><dd>OB-92</dd></div>
              <div><dt>CLEARANCE</dt><dd>Junior</dd></div>
              <div><dt>STATUS</dt><dd className="ok">● Available</dd></div>
              <div><dt>BASE</dt><dd>Sweden</dd></div>
            </dl>
          </aside>

          {/* Bio + modules */}
          <div className="about__body">
            <p className="about__bio reveal" style={{ animationDelay: '0.2s' }}>
              Hi! I'm Oscar, a passionate <span className="hl">junior developer</span> who
              recently completed my <span className="hl">Full Stack Developer</span>{' '}
              certification. While new to professional development, I bring deep
              enthusiasm for learning and constantly sharpening my craft. I love
              building things with <span className="hl">React</span>,{' '}
              <span className="hl">Django</span> and modern web technologies, and I'm
              eager to grow through real-world challenges.
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
                  <li>Frontend Developer — Code Institute</li>
                  <li>Full Stack Development — Code Institute</li>
                </ul>
              </div>

              <div className="about__module panel reveal" style={{ animationDelay: '0.35s' }}>
                <span className="hud-label">{'// Education'}</span>
                <ul className="about__list">
                  <li>Full Stack Developer Diploma — Code Institute</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Diploma */}
        <div className="about__diploma panel reveal" style={{ animationDelay: '0.4s' }}>
          <span className="hud-label">{'// Credential — Diploma'}</span>
          <img
            src="/Skärmbild 2025-02-15 125830.png"
            alt="Oscar Bäckman's Full Stack Developer Diploma"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
