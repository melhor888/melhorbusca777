import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supportedLanguages, getLangPrefix, type SupportedLanguage } from "@/i18n/config";

const BASE = "https://receitasmexicanas.lovable.app";

/**
 * Renders hreflang link tags for all supported languages on every page.
 */
export default function HreflangTags() {
  const { pathname } = useLocation();

  // Strip any existing language prefix to get the canonical path
  let canonicalPath = pathname;
  for (const lang of supportedLanguages) {
    if (lang === "pt-BR") continue;
    const prefix = getLangPrefix(lang as SupportedLanguage);
    if (pathname.startsWith(prefix + "/") || pathname === prefix) {
      canonicalPath = pathname.slice(prefix.length) || "/";
      break;
    }
  }

  const hreflangs = supportedLanguages.map((lang) => {
    const prefix = lang === "pt-BR" ? "" : getLangPrefix(lang as SupportedLanguage);
    const href = `${BASE}${prefix}${canonicalPath === "/" ? "" : canonicalPath}`;
    const hreflang = lang === "pt-BR" ? "pt-BR" : lang;
    return { hreflang, href };
  });

  return (
    <Helmet>
      {hreflangs.map(({ hreflang, href }) => (
        <link key={hreflang} rel="alternate" hrefLang={hreflang} href={href} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${BASE}${canonicalPath}`} />
    </Helmet>
  );
}
