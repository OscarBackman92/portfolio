/**
 * Sajtens publika bas-URL. Domänen är inte kopplad ännu, så konstanten
 * används som fallback när REACT_APP_SITE_URL saknas i miljön.
 */
export const SITE_URL = (
  process.env.REACT_APP_SITE_URL || 'https://oscarbackman.se'
).replace(/\/$/, '');

export const OG_IMAGE = `${SITE_URL}/og.png`;
