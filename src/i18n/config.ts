import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ptBR from "./locales/pt-BR.json";
import en from "./locales/en.json";
import es from "./locales/es.json";

export const supportedLanguages = ["pt-BR", "en", "es"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const languageNames: Record<SupportedLanguage, string> = {
  "pt-BR": "Português",
  en: "English",
  es: "Español",
};

export const languageFlags: Record<SupportedLanguage, string> = {
  "pt-BR": "🇧🇷",
  en: "🇺🇸",
  es: "🇪🇸",
};

export const langPrefixMap: Record<string, SupportedLanguage> = {
  "pt-br": "pt-BR",
  en: "en",
  es: "es",
};

export function getLangPrefix(lang: SupportedLanguage): string {
  if (lang === "pt-BR") return "/pt-br";
  return `/${lang}`;
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "pt-BR": { translation: ptBR },
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: "pt-BR",
    supportedLngs: [...supportedLanguages],
    interpolation: { escapeValue: false },
    detection: {
      order: ["path", "localStorage", "navigator"],
      lookupFromPathIndex: 0,
      caches: ["localStorage"],
    },
  });

export default i18n;
