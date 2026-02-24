import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";

export default function Footer() {
  const { t } = useTranslation();
  const { localePath } = useLocalizedPath();

  return (
    <footer className="mt-12 border-t border-border/50 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">{t("footer.navigation")}</h3>
            <ul className="space-y-2 text-xs">
              <li><Link to={localePath("/")} className="text-muted-foreground hover:text-primary transition-colors">{t("nav.recipes")}</Link></li>
              <li><Link to={localePath("/tips")} className="text-muted-foreground hover:text-primary transition-colors">{t("nav.school")}</Link></li>
              <li><Link to={localePath("/dicas")} className="text-muted-foreground hover:text-primary transition-colors">{t("nav.culture")}</Link></li>
              <li><Link to={localePath("/favorites")} className="text-muted-foreground hover:text-primary transition-colors">{t("nav.favorites")}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">{t("footer.institutional")}</h3>
            <ul className="space-y-2 text-xs">
              <li><Link to={localePath("/sobre")} className="text-muted-foreground hover:text-primary transition-colors">{t("footer.about")}</Link></li>
              <li><Link to={localePath("/contato")} className="text-muted-foreground hover:text-primary transition-colors">{t("footer.contact")}</Link></li>
              <li><Link to={localePath("/sitemap")} className="text-muted-foreground hover:text-primary transition-colors">{t("footer.sitemap")}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">{t("footer.legal")}</h3>
            <ul className="space-y-2 text-xs">
              <li><Link to={localePath("/privacidade")} className="text-muted-foreground hover:text-primary transition-colors">{t("footer.privacy")}</Link></li>
              <li><Link to={localePath("/termos")} className="text-muted-foreground hover:text-primary transition-colors">{t("footer.terms")}</Link></li>
              <li><Link to={localePath("/cookies")} className="text-muted-foreground hover:text-primary transition-colors">{t("footer.cookies")}</Link></li>
              <li><Link to={localePath("/aviso-legal")} className="text-muted-foreground hover:text-primary transition-colors">{t("footer.disclaimer")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 space-y-3 text-center">
          <p className="text-[10px] text-muted-foreground leading-relaxed">
            {t("footer.adDisclaimer")}
          </p>
          <p className="text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} <span style={{ color: '#006847' }}>Mexi</span> <span>Food</span> <span style={{ color: '#CE1126' }}>XP</span>. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
