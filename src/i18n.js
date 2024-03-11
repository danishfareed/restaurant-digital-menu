// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // English translations
      },
    },
    ar: {
      translation: {
        // Arabic translations
      },
    },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if translation is missing
  keySeparator: false, // Remove namespace separator (useful for nested keys)
  interpolation: {
    escapeValue: false, // React already escapes values, so no need to escape again
  },
});

export default i18n;
