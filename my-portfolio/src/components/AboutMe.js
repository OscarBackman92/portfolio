import { useTranslation } from 'react-i18next';

function AboutMe() {
  const { t } = useTranslation();

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">{t('aboutMe')}</h2>
      <p className="text-lg">{t('aboutText')}</p>
    </section>
  );
}

export default AboutMe;