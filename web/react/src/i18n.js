import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // optional for loading translations via HTTP
  .use(initReactI18next) // make sure react-i18next is initialized with i18next
  .init({
    backend: {
      loadPath: '/i18n/locales/{{lng}}/{{ns}}.json', // Path for the translation files
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if the current language is not available
    ns: ['common', 'navigation'], // Namespaces you're using
    defaultNS: 'common', // Default namespace to load
    interpolation: {
      escapeValue: false, // React handles escaping
    },
  });

export default i18n;
