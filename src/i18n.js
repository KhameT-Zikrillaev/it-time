import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импортируем переводы
import uzTranslations from './locales/uz/uz.json';
import krTranslations from './locales/kr/kr.json';
import ruTranslations from './locales/ru/ru.json';
import enTranslations from './locales/en/en.json';

const resources = {
  uz: {
    translation: uzTranslations
  },
  kr: {
    translation: krTranslations
  },
  ru: {
    translation: ruTranslations
  },
  en: {
    translation: enTranslations
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'kr', // язык по умолчанию
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
