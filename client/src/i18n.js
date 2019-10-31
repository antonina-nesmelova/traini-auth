import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from "./locales/en/translation"
import cs from "./locales/cs/translation"

i18n
    .use(LanguageDetector) // detect user language

    .use(initReactI18next) // pass the i18n instance to react-i18next.

    .init({
        debug: true,
        initImmediate: false,
        preload: ["en", "cs"],
        fallbackLng: "en",
        lng: "en",
        resources: {
            en: { translation: en},
            cs: { translation: cs}
        }
    });

export default i18n;

