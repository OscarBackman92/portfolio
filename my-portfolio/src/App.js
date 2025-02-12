import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Språkväxlingskomponent
function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="absolute top-4 right-4">
      <button onClick={() => changeLanguage('en')} className="bg-blue-500 text-white p-2 rounded mr-2">
        English
      </button>
      <button onClick={() => changeLanguage('sv')} className="bg-blue-500 text-white p-2 rounded">
        Svenska
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <LanguageSwitcher /> {/* Språkväxlingsknappar */}
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
