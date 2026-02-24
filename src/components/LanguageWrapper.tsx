import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { langPrefixMap, type SupportedLanguage } from "@/i18n/config";

/**
 * Wraps children and syncs the i18n language from the URL :lang param.
 * If route has no lang prefix, keeps user's persisted language (i18next localStorage) when available.
 */
export default function LanguageWrapper({ children }: { children: React.ReactNode }) {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  function getPersistedLanguage(): SupportedLanguage | null {
    try {
      const stored = localStorage.getItem("i18nextLng")?.toLowerCase();
      if (!stored) return null;

      if (langPrefixMap[stored]) return langPrefixMap[stored];
      if (stored.startsWith("pt")) return "pt-BR";
      if (stored.startsWith("en")) return "en";
      if (stored.startsWith("es")) return "es";
      return null;
    } catch {
      return null;
    }
  }

  useEffect(() => {
    if (lang) {
      const resolved = langPrefixMap[lang.toLowerCase()];
      if (resolved && resolved !== i18n.language) {
        i18n.changeLanguage(resolved);
      }
      return;
    }

    const persisted = getPersistedLanguage();
    const targetLang = persisted || "pt-BR";
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang);
    }
  }, [lang, i18n]);

  // Update html lang attribute
  useEffect(() => {
    document.documentElement.lang = i18n.language === "pt-BR" ? "pt-BR" : i18n.language;
  }, [i18n.language]);

  return <>{children}</>;
}
