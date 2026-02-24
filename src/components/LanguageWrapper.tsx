import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { langPrefixMap, type SupportedLanguage } from "@/i18n/config";

/**
 * Wraps children and syncs the i18n language from the URL :lang param.
 */
export default function LanguageWrapper({ children }: { children: React.ReactNode }) {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang) {
      const resolved = langPrefixMap[lang.toLowerCase()];
      if (resolved && resolved !== i18n.language) {
        i18n.changeLanguage(resolved);
      }
    } else {
      // No prefix = default pt-BR
      if (i18n.language !== "pt-BR") {
        i18n.changeLanguage("pt-BR");
      }
    }
  }, [lang, i18n]);

  // Update html lang attribute
  useEffect(() => {
    document.documentElement.lang = i18n.language === "pt-BR" ? "pt-BR" : i18n.language;
  }, [i18n.language]);

  return <>{children}</>;
}
