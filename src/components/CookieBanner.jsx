import { useEffect, useState } from 'react';

const KEY = 'obk_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved !== 'granted' && saved !== 'denied') setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (value) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: value,
        ad_user_data: value,
        ad_personalization: value,
        analytics_storage: value
      });
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookiesamtycke"
      style={{
        position: 'fixed',
        insetInline: 0,
        bottom: 0,
        zIndex: 9999,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        padding: '1rem 1.25rem',
        background: '#111',
        color: '#f5f5f5',
        font: '400 0.9rem/1.5 system-ui, sans-serif',
        boxShadow: '0 -2px 12px rgba(0,0,0,.25)'
      }}
    >
      <p style={{ margin: 0, maxWidth: '46ch' }}>
        Den här sidan använder cookies för att mäta besök med Google Analytics.
        Du väljer själv om du vill tillåta det.
      </p>

      <div style={{ display: 'flex', gap: '.5rem' }}>
        <button onClick={() => choose('denied')} style={btn(false)}>
          Endast nödvändiga
        </button>
        <button onClick={() => choose('granted')} style={btn(true)}>
          Godkänn
        </button>
      </div>
    </div>
  );
}

const btn = (primary) => ({
  padding: '.55rem 1.1rem',
  borderRadius: '999px',
  border: primary ? 'none' : '1px solid #666',
  background: primary ? '#f5f5f5' : 'transparent',
  color: primary ? '#111' : '#f5f5f5',
  font: 'inherit',
  fontWeight: 500,
  cursor: 'pointer'
});
