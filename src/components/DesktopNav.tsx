import { Wine, GraduationCap, Heart, BookOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import XPBar from "./XPBar";

const navItems = [
  { path: "/", icon: Wine, label: "Receitas" },
  { path: "/tips", icon: GraduationCap, label: "Escola" },
  { path: "/dicas", icon: BookOpen, label: "Dicas" },
  { path: "/favorites", icon: Heart, label: "Favoritos" },
];

export default function DesktopNav() {
  const location = useLocation();

  return (
    <header className="hidden lg:block fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Wine size={24} className="text-primary" />
          <span className="font-display font-bold text-xl text-foreground">
            Drinks <span className="text-primary">&</span> Company
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map(({ path, icon: Icon, label }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <Icon size={18} strokeWidth={active ? 2.5 : 1.5} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="w-48">
          <XPBar compact />
        </div>
      </div>
    </header>
  );
}
