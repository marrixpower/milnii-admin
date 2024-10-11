import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './translations/en.json';

export const resources = {
  en: enTranslations,
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: {
      lookupLocalStorage: 'milnii-admin-LanguageKey',
    },
    fallbackLng: 'en',
    resources,
  });

export default i18n;
