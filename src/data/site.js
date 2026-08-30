import { SITE_URL, OG_IMAGE } from '../config';

export const JOB_TITLE = 'Operations- och ekonomikoordinator';
export const JOB_TITLE_WITH_LOCATION = `${JOB_TITLE} · Stockholm`;
export const PAGE_TITLE = `Oscar Bäckman — ${JOB_TITLE}`;

export const HOME_DESCRIPTION =
  'Operations- och ekonomikoordinator i Stockholm. Håller ihop order, fakturering och systemflöden så att rätt saker händer i rätt ordning.';

export const PROFILE_SUMMARY =
  'Jag håller ihop processerna — ser till att order, fakturering och system fungerar tillsammans, och att rätt information når rätt person i rätt tid.';

export const PERSON = {
  name: 'Oscar Bäckman',
  givenName: 'Oscar',
  familyName: 'Bäckman',
  jobTitle: JOB_TITLE,
  email: 'jan.oscar.backman@gmail.com',
  phone: '+46720101647',
  locality: 'Stockholm',
  region: 'Stockholms län',
  country: 'SE',
  linkedIn: 'https://www.linkedin.com/in/oscar-b%C3%A4ckman-3149b1167/',
  github: 'https://github.com/OscarBackman92',
};

export const ROUTES = {
  '/': {
    title: PAGE_TITLE,
    description: HOME_DESCRIPTION,
    breadcrumb: 'Hem',
  },
  '/about': {
    title: 'Om mig — Oscar Bäckman',
    description:
      'Operations- och ekonomikoordinator med bakgrund inom order, fakturering och affärssystem. Bygger också egna verktyg.',
    breadcrumb: 'Om mig',
  },
  '/projects': {
    title: 'Projekt — Oscar Bäckman',
    description:
      'Verktyg och projekt jag byggt, från Textverket till kursarbeten i Python och JavaScript.',
    breadcrumb: 'Projekt',
  },
  '/cv': {
    title: 'CV — Oscar Bäckman',
    description:
      'Meritförteckning: operations, orderadministration och ekonomi 2017–2026.',
    breadcrumb: 'CV',
  },
  '/contact': {
    title: 'Kontakt — Oscar Bäckman',
    description:
      'Öppen för roller inom order, inköp, ekonomiadministration och operations i Stockholm. Hör av dig.',
    breadcrumb: 'Kontakt',
  },
};

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: PERSON.name,
    description: ROUTES['/'].description,
    inLanguage: 'sv-SE',
    publisher: { '@id': `${SITE_URL}/#person` },
  };
}

export function buildPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: PERSON.name,
    givenName: PERSON.givenName,
    familyName: PERSON.familyName,
    jobTitle: PERSON.jobTitle,
    email: PERSON.email,
    telephone: PERSON.phone,
    url: SITE_URL,
    image: `${SITE_URL}/profile.jpg`,
    sameAs: [PERSON.linkedIn, PERSON.github],
    address: {
      '@type': 'PostalAddress',
      addressLocality: PERSON.locality,
      addressRegion: PERSON.region,
      addressCountry: PERSON.country,
    },
  };
}

/** Professionell närvaro i Stockholm — inte ett fysiskt kontor, men korrekt för lokalt sök */
export function buildProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#service`,
    name: PERSON.name,
    description: ROUTES['/'].description,
    url: SITE_URL,
    image: OG_IMAGE,
    telephone: PERSON.phone,
    email: PERSON.email,
    areaServed: {
      '@type': 'City',
      name: PERSON.locality,
      containedInPlace: {
        '@type': 'Country',
        name: 'Sweden',
      },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: PERSON.locality,
      addressRegion: PERSON.region,
      addressCountry: PERSON.country,
    },
    founder: { '@id': `${SITE_URL}/#person` },
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
