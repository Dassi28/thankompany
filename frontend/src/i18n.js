import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // load translation using http -> see /public/locales
    .use(HttpBackend)
    // detect user language
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    .init({

        lng: 'de', // ✅ Default language
        fallbackLng: 'en', // ✅ Fallback if translation is missing

        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        // backend options
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });

// ✅ Add a helper to force reload translations
export const reloadTranslations = (language = i18n.language) => {
    i18n.reloadResources([language]).then(() => {
        i18n.changeLanguage(language);
        console.log(`Translations reloaded for: ${language}`);
    });
};


