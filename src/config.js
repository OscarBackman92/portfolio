/**
 * Sajtens publika bas-URL. Sätt REACT_APP_SITE_URL i Vercel när domänen
 * oscarbackman.se är kopplad (Settings → Environment Variables).
 */
export const SITE_URL = (
  process.env.REACT_APP_SITE_URL || 'https://oscarbackman.se'
).replace(/\/$/, '');

export const OG_IMAGE = `${SITE_URL}/og.png`;
