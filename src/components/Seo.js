import { Helmet } from 'react-helmet-async';
import { SITE_URL, OG_IMAGE } from '../config';
import {
  buildPersonSchema,
  buildProfessionalServiceSchema,
  buildWebSiteSchema,
} from '../data/site';

/**
 * Per-sida-metadata. Länkförhandsvisare kör ingen JavaScript och ser
 * därför det statiska setet i public/index.html — det är avsiktligt.
 */
function Seo({ title, description, path, noindex = false, jsonLd = [] }) {
  const url = `${SITE_URL}${path}`;
  const robots = noindex ? 'noindex, nofollow' : 'index, follow';

  const globalSchema = [
    buildWebSiteSchema(),
    buildPersonSchema(),
    buildProfessionalServiceSchema(),
    ...jsonLd,
  ];

  return (
    <Helmet>
      <html lang="sv" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content="Oscar Bäckman" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="sv_SE" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} — delningsbild`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content={`${title} — delningsbild`} />

      {globalSchema.map((block) => (
        <script key={block['@id'] || block['@type']} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
}

export default Seo;
