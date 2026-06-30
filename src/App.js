import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import GitHubRepos from './components/GithubRepos';
import Contact from './components/Contact';
import CV from './components/CV';
import NotFound from './components/NotFound';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<GitHubRepos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
