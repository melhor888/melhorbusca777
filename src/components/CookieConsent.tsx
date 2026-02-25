import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface CookiePrefs {
  essential: boolean;
  analytics: boolean;
  functionality: boolean;
  advertising: boolean;
}

const STORAGE_KEY = "cookie_consent";

function getStoredConsent(): CookiePrefs | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v ? JSON.parse(v) : null;
  } catch { return null; }
}

export default function CookieConsent() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>({
    essential: true,
    analytics: false,
    functionality: false,
    advertising: false,
  });

  useEffect(() => {
    if (!getStoredConsent()) setVisible(true);
  }, []);

  const save = (p: CookiePrefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    setVisible(false);
  };

  const acceptAll = () => save({ essential: true, analytics: true, functionality: true, advertising: true });
  const rejectAll = () => save({ essential: true, analytics: false, functionality: false, advertising: false });
  const saveCustom = () => save(prefs);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-4">
      <div className="max-w-lg mx-auto rounded-2xl bg-card border border-border shadow-2xl p-5 space-y-4">
        <div>
          <h2 className="text-sm font-display font-bold text-foreground mb-1">{t("cookies.title")}</h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {t("cookies.description")}{" "}
            <Link to="/privacidade" className="text-primary underline">{t("cookies.privacyPolicy")}</Link> {t("cookies.and")}{" "}
            <Link to="/cookies" className="text-primary underline">{t("cookies.cookiePolicy")}</Link>.
          </p>
        </div>

        {showSettings && (
          <div className="space-y-3 border-t border-border/50 pt-3">
            <label className="flex items-center justify-between text-xs">
              <span className="text-foreground">{t("cookies.essential")}</span>
              <input type="checkbox" checked disabled className="accent-primary" />
            </label>
            <label className="flex items-center justify-between text-xs cursor-pointer">
              <span className="text-foreground">{t("cookies.analytics")}</span>
              <input type="checkbox" checked={prefs.analytics} onChange={() => setPrefs(p => ({ ...p, analytics: !p.analytics }))} className="accent-primary" />
            </label>
            <label className="flex items-center justify-between text-xs cursor-pointer">
              <span className="text-foreground">{t("cookies.functionality")}</span>
              <input type="checkbox" checked={prefs.functionality} onChange={() => setPrefs(p => ({ ...p, functionality: !p.functionality }))} className="accent-primary" />
            </label>
            <label className="flex items-center justify-between text-xs cursor-pointer">
              <span className="text-foreground">{t("cookies.advertising")}</span>
              <input type="checkbox" checked={prefs.advertising} onChange={() => setPrefs(p => ({ ...p, advertising: !p.advertising }))} className="accent-primary" />
            </label>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <button onClick={acceptAll} className="flex-1 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity">
            {t("cookies.acceptAll")}
          </button>
          <button onClick={rejectAll} className="flex-1 py-2.5 rounded-xl bg-secondary text-secondary-foreground text-xs font-semibold hover:opacity-80 transition-opacity">
            {t("cookies.rejectAll")}
          </button>
          {showSettings ? (
            <button onClick={saveCustom} className="flex-1 py-2.5 rounded-xl border border-primary/50 text-primary text-xs font-semibold hover:bg-primary/10 transition-colors">
              {t("cookies.savePrefs")}
            </button>
          ) : (
            <button onClick={() => setShowSettings(true)} className="flex-1 py-2.5 rounded-xl border border-border text-muted-foreground text-xs font-semibold hover:text-foreground transition-colors">
              {t("cookies.configure")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
