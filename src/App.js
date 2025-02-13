import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import GitHubRepos from './components/GithubRepos';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <GitHubRepos />
      <Contact />
    </div>
  );
}

export default App;
