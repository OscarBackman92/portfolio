/**
 * Kanonisk bas-URL. www är den enda adressen; apex (obackman.se) 308-redirectar.
 * Överskrivs av REACT_APP_SITE_URL i .env.production / Vercel om det behövs.
 */
export const SITE_URL = (
  process.env.REACT_APP_SITE_URL || 'https://www.obackman.se'
).replace(/\/$/, '');

export const OG_IMAGE = `${SITE_URL}/og.png`;
