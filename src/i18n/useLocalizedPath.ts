import { useTranslation } from "react-i18next";
import { getLangPrefix, type SupportedLanguage } from "./config";

/**
 * Hook to generate localized paths.
 * For pt-BR (default), paths stay as-is (no prefix) for backward compat.
 * For en/es, adds /{lang} prefix.
 */
export function useLocalizedPath() {
  const { i18n } = useTranslation();
  const lang = i18n.language as SupportedLanguage;

  function localePath(path: string): string {
    // Default language has no prefix for backward compat & cleaner URLs
    if (lang === "pt-BR") return path;
    const prefix = getLangPrefix(lang);
    return path === "/" ? prefix : `${prefix}${path}`;
  }

  return { localePath, lang };
}
