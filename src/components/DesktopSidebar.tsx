import { useState } from "react";
import { Wine, GraduationCap, Heart, BookOpen, Info, Mail, ShoppingCart, Search } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import XPBar from "./XPBar";
import { useShoppingList } from "@/hooks/useShoppingList";

const mainNav = [
  { path: "/", icon: Wine, label: "Receitas" },
  { path: "/tips", icon: GraduationCap, label: "Escola" },
  { path: "/dicas", icon: BookOpen, label: "Dicas" },
  { path: "/lista-compras", icon: ShoppingCart, label: "Lista de Compras" },
  { path: "/favorites", icon: Heart, label: "Favoritos" },
];

const secondaryNav = [
  { path: "/sobre", icon: Info, label: "Sobre Nós" },
  { path: "/contato", icon: Mail, label: "Contato" },
];

export default function DesktopSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { drinkIds } = useShoppingList();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim().length >= 2) {
      navigate(`/?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-60 z-50 glass-card border-r border-border/50">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 px-5 py-5 border-b border-border/50">
        <img src="/pwa-192x192.png" alt="Cachaça Quest" className="w-8 h-8 rounded-lg flex-shrink-0" />
        <span className="font-display font-bold text-lg text-foreground">
          Cachaça <span className="text-primary">Quest</span>
        </span>
      </Link>

      {/* Search */}
      <form onSubmit={handleSearch} className="px-3 py-3 border-b border-border/50">
        <div className="relative">
          <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar drinks..."
            className="w-full pl-8 pr-3 py-2 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground text-xs focus:outline-none focus:ring-1 focus:ring-primary/50"
          />
        </div>
      </form>

      {/* XP Bar */}
      <div className="px-4 py-3 border-b border-border/50">
        <XPBar compact />
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
          Menu
        </p>
        {mainNav.map(({ path, icon: Icon, label }) => {
          const active = location.pathname === path;
          const showBadge = path === "/lista-compras" && drinkIds.length > 0;
          return (
            <Link
              key={path}
              to={path}
              className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active
                  ? "text-primary bg-primary/10 shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Icon size={20} strokeWidth={active ? 2.5 : 1.5} />
              {label}
              {showBadge && (
                <span className="ml-auto w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                  {drinkIds.length}
                </span>
              )}
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
          © {new Date().getFullYear()} Cachaça Quest
        </p>
      </div>
    </aside>
  );
}
