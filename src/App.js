import React from 'react';
import Navbar from '../src/components/layout/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import GitHubRepos from './components/GithubRepos';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <GitHubRepos />
      <Contact />
    </div>
  );
}

export default App;
