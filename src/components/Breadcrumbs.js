import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../config';
import { ROUTES, buildBreadcrumbSchema } from '../data/site';
import './Breadcrumbs.css';

function Breadcrumbs() {
  const { pathname } = useLocation();

  if (pathname === '/') return null;

  const current = ROUTES[pathname];
  if (!current) return null;

  const schema = buildBreadcrumbSchema([
    { name: 'Hem', url: `${SITE_URL}/` },
    { name: current.breadcrumb, url: `${SITE_URL}${pathname}` },
  ]);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <nav className="breadcrumbs section-inner" aria-label="Brödsmulor">
        <ol className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link to="/">Hem</Link>
          </li>
          <li className="breadcrumbs__item" aria-current="page">
            {current.breadcrumb}
          </li>
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumbs;
