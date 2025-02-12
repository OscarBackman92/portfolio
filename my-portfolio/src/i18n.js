import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to my Portfolio!",
      aboutMe: "About Me",
      aboutText: "I am a web developer who loves to create applications and build user-friendly interfaces. Here are some of my projects!",
      myProjects: "My Projects",
      project1: "This is my first project.",
      project2: "This is my second project.",
      viewGitHub: "View on GitHub",
      contact: "Contact",
      contactText: "If you're interested in collaborating, feel free to contact me!",
      sendEmail: "Send an email",
    },
  },
  sv: {
    translation: {
      welcome: "Välkommen till min Portfolio!",
      aboutMe: "Om mig",
      aboutText: "Jag är en webbutvecklare som älskar att skapa applikationer och bygga användarvänliga gränssnitt. Här är några av mina projekt!",
      myProjects: "Mina projekt",
      project1: "Det här är mitt första projekt.",
      project2: "Det här är mitt andra projekt.",
      viewGitHub: "Se på GitHub",
      contact: "Kontakt",
      contactText: "Om du är intresserad av att samarbeta, tveka inte att kontakta mig!",
      sendEmail: "Skicka ett mejl",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: navigator.language.split('-')[0] || 'en', // Automatisk språkdetektion
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: 'en', // Om ett språk inte finns, använd engelska
  });

export default i18n;
