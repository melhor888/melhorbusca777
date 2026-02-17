import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
          <h2 className="text-sm font-display font-bold text-foreground mb-1">🍪 Cookies e Privacidade</h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Utilizamos cookies para melhorar sua experiência, analisar o tráfego e exibir anúncios personalizados. Ao clicar em "Aceitar todos", você concorda com o uso de todos os cookies conforme nossa{" "}
            <Link to="/privacidade" className="text-primary underline">Política de Privacidade</Link> e{" "}
            <Link to="/cookies" className="text-primary underline">Política de Cookies</Link>.
          </p>
        </div>

        {showSettings && (
          <div className="space-y-3 border-t border-border/50 pt-3">
            <label className="flex items-center justify-between text-xs">
              <span className="text-foreground">Essenciais (obrigatórios)</span>
              <input type="checkbox" checked disabled className="accent-primary" />
            </label>
            <label className="flex items-center justify-between text-xs cursor-pointer">
              <span className="text-foreground">Análise e Desempenho</span>
              <input type="checkbox" checked={prefs.analytics} onChange={() => setPrefs(p => ({ ...p, analytics: !p.analytics }))} className="accent-primary" />
            </label>
            <label className="flex items-center justify-between text-xs cursor-pointer">
              <span className="text-foreground">Funcionalidade</span>
              <input type="checkbox" checked={prefs.functionality} onChange={() => setPrefs(p => ({ ...p, functionality: !p.functionality }))} className="accent-primary" />
            </label>
            <label className="flex items-center justify-between text-xs cursor-pointer">
              <span className="text-foreground">Publicidade e Remarketing</span>
              <input type="checkbox" checked={prefs.advertising} onChange={() => setPrefs(p => ({ ...p, advertising: !p.advertising }))} className="accent-primary" />
            </label>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <button onClick={acceptAll} className="flex-1 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity">
            Aceitar todos
          </button>
          <button onClick={rejectAll} className="flex-1 py-2.5 rounded-xl bg-secondary text-secondary-foreground text-xs font-semibold hover:opacity-80 transition-opacity">
            Recusar
          </button>
          {showSettings ? (
            <button onClick={saveCustom} className="flex-1 py-2.5 rounded-xl border border-primary/50 text-primary text-xs font-semibold hover:bg-primary/10 transition-colors">
              Salvar preferências
            </button>
          ) : (
            <button onClick={() => setShowSettings(true)} className="flex-1 py-2.5 rounded-xl border border-border text-muted-foreground text-xs font-semibold hover:text-foreground transition-colors">
              Configurar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
