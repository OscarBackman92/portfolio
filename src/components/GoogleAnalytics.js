import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-56SB9P6ZF9';
const GTAG_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

function ensureGtag() {
  if (typeof window.gtag === 'function') {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());

  if (!document.querySelector(`script[src="${GTAG_SRC}"]`)) {
    const script = document.createElement('script');
    script.async = true;
    script.src = GTAG_SRC;
    document.head.appendChild(script);
  }
}

function pagePath(location) {
  return `${location.pathname}${location.search}`;
}

/** GA4 — laddar gtag och skickar sidvisning vid varje SPA-rutt. */
function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    ensureGtag();
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pagePath(location),
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [location]);

  return null;
}

export default GoogleAnalytics;
