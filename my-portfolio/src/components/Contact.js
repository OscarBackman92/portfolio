import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">{t('contact')}</h2>
      <p>{t('contactText')}</p>
      <a href="mailto:your.email@example.com" className="text-blue-500">{t('sendEmail')}</a>
    </section>
  );
}

export default Contact;
