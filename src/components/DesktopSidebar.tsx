import { useState } from "react";
import { UtensilsCrossed, GraduationCap, Heart, BookOpen, Info, Mail, ShoppingCart, Search, HelpCircle, BarChart3, Package, Layers, Crown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import XPBar from "./XPBar";
import ThemeToggle from "./ThemeToggle";
import { useShoppingList } from "@/hooks/useShoppingList";

const mainNav = [
  { path: "/", icon: UtensilsCrossed, label: "Receitas" },
  { path: "/quiz", icon: HelpCircle, label: "Quiz" },
  { path: "/ingredientes", icon: Package, label: "Ingredientes" },
  { path: "/colecoes", icon: Layers, label: "Coleções" },
  { path: "/tips", icon: GraduationCap, label: "Escola Mexicana" },
  { path: "/dicas", icon: BookOpen, label: "Cultura" },
  { path: "/dashboard", icon: BarChart3, label: "Dashboard" },
  { path: "/lista-compras", icon: ShoppingCart, label: "Lista de Compras" },
  { path: "/favorites", icon: Heart, label: "Favoritos" },
  { path: "/vip", icon: Crown, label: "VIP", isVip: true },
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
      <Link to="/" className="flex items-center gap-2 px-5 py-5 border-b border-border/50">
        <span className="text-2xl">🌮</span>
        <span className="font-display font-bold text-lg text-foreground">
          Receitas Mexicanas<span className="text-primary">XP</span>
        </span>
      </Link>

      <form onSubmit={handleSearch} className="px-3 py-3 border-b border-border/50">
        <div className="relative">
          <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar pratos..."
            className="w-full pl-8 pr-3 py-2 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground text-xs focus:outline-none focus:ring-1 focus:ring-primary/50"
          />
        </div>
      </form>

      <div className="px-4 py-3 border-b border-border/50 flex items-center gap-2">
        <div className="flex-1"><XPBar compact /></div>
        <ThemeToggle />
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
          Menu
        </p>
        {mainNav.map(({ path, icon: Icon, label, ...rest }) => {
          const active = location.pathname === path;
          const showBadge = path === "/lista-compras" && drinkIds.length > 0;
          const isVip = (rest as any).isVip;
          return (
            <Link
              key={path}
              to={path}
              className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isVip
                  ? active
                    ? "text-accent bg-accent/10 shadow-sm"
                    : "text-accent/70 hover:text-accent hover:bg-accent/10"
                  : active
                    ? "text-primary bg-primary/10 shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Icon size={20} strokeWidth={active ? 2.5 : 1.5} />
              {label}
              {isVip && (
                <span className="ml-auto text-[9px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-1.5 py-0.5 rounded">
                  ★
                </span>
              )}
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

      <div className="px-4 py-4 border-t border-border/50">
        <p className="text-[10px] text-muted-foreground text-center">
          © {new Date().getFullYear()} Receitas MexicanasXP
        </p>
      </div>
    </aside>
  );
}
