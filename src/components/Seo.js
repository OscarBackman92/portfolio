import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../config';

/**
 * Per-sida-metadata. Länkförhandsvisare kör ingen JavaScript och ser
 * därför det statiska setet i public/index.html — det är avsiktligt.
 */
function Seo({ title, description, path }) {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

export default Seo;
