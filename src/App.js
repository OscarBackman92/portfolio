import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import './App.css';

// Ruttbaserad kodsplittring — EmailJS-klienten behövs bara på /contact
const Home = lazy(() => import('./components/Home'));
const AboutMe = lazy(() => import('./components/AboutMe'));
const GitHubRepos = lazy(() => import('./components/GithubRepos'));
const Contact = lazy(() => import('./components/Contact'));
const CV = lazy(() => import('./components/CV'));
const NotFound = lazy(() => import('./components/NotFound'));

// Tom yta med samma höjd som en vy — ingen spinner som blinkar förbi
const routeFallback = <div className="route-placeholder" aria-hidden="true" />;

function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Hoppa till innehåll
      </a>

      <Navbar />

      <Breadcrumbs />

      <main className="app-main" id="main" tabIndex={-1}>
        <Suspense fallback={routeFallback}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<GitHubRepos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<CV />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
