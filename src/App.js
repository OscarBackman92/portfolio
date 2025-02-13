import React from 'react';
import Navbar from '../src/components/layout/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import GitHubRepos from './components/GithubRepos';
import Contact from './components/Contact';
import Footer from './components/layout/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <GitHubRepos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
