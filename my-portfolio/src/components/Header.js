import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <header className="bg-blue-600 text-white p-6">
      <h1 className="text-4xl font-bold text-center">{t('welcome')}</h1>
      <p className="text-center">{t('aboutText')}</p>
    </header>
  );
}

export default Header;