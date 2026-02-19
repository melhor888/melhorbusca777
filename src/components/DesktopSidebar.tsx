import { Wine, GraduationCap, Heart, BookOpen, Info, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import XPBar from "./XPBar";

const mainNav = [
  { path: "/", icon: Wine, label: "Receitas" },
  { path: "/tips", icon: GraduationCap, label: "Escola" },
  { path: "/dicas", icon: BookOpen, label: "Dicas" },
  { path: "/favorites", icon: Heart, label: "Favoritos" },
];

const secondaryNav = [
  { path: "/sobre", icon: Info, label: "Sobre Nós" },
  { path: "/contato", icon: Mail, label: "Contato" },
];

export default function DesktopSidebar() {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-60 z-50 glass-card border-r border-border/50">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 px-5 py-5 border-b border-border/50">
        <Wine size={28} className="text-primary flex-shrink-0" />
        <span className="font-display font-bold text-lg text-foreground">
          Drinks <span className="text-primary">&</span> Company
        </span>
      </Link>

      {/* XP Bar */}
      <div className="px-4 py-4 border-b border-border/50">
        <XPBar compact />
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
          Menu
        </p>
        {mainNav.map(({ path, icon: Icon, label }) => {
          const active = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active
                  ? "text-primary bg-primary/10 shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Icon size={20} strokeWidth={active ? 2.5 : 1.5} />
              {label}
            </Link>
          );
        })}

        <div className="my-4 border-t border-border/50" />

        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
          Institucional
        </p>
        {secondaryNav.map(({ path, icon: Icon, label }) => {
          const active = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active
                  ? "text-primary bg-primary/10 shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Icon size={20} strokeWidth={active ? 2.5 : 1.5} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-border/50">
        <p className="text-[10px] text-muted-foreground text-center">
          © {new Date().getFullYear()} Drinks & Company
        </p>
      </div>
    </aside>
  );
}
