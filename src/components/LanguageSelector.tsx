import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  supportedLanguages,
  languageNames,
  languageFlags,
  getLangPrefix,
  type SupportedLanguage,
} from "@/i18n/config";

export default function LanguageSelector({ compact = false }: { compact?: boolean }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const currentLang = i18n.language as SupportedLanguage;

  function switchLanguage(lang: SupportedLanguage) {
    if (lang === currentLang) { setOpen(false); return; }

    // Remove current lang prefix from pathname
    let path = location.pathname;
    const currentPrefix = getLangPrefix(currentLang);
    if (currentLang !== "pt-BR" && path.startsWith(currentPrefix)) {
      path = path.slice(currentPrefix.length) || "/";
    }

    // Add new lang prefix
    const newPath = lang === "pt-BR" ? path : `${getLangPrefix(lang)}${path === "/" ? "" : path}`;

    i18n.changeLanguage(lang);
    navigate(newPath);
    setOpen(false);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors text-xs"
        aria-label="Select language"
      >
        <Globe size={14} />
        {!compact && (
          <span>{languageFlags[currentLang]} {languageNames[currentLang]}</span>
        )}
        {compact && <span>{languageFlags[currentLang]}</span>}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-xl shadow-xl z-[60] overflow-hidden min-w-[140px] animate-fade-in">
          {supportedLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => switchLanguage(lang)}
              className={`w-full flex items-center gap-2 px-3 py-2.5 text-xs font-medium transition-colors ${
                lang === currentLang
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <span>{languageFlags[lang]}</span>
              <span>{languageNames[lang]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
