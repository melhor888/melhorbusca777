import { useState } from "react";
import { Wine, Heart, HelpCircle, BarChart3, MoreHorizontal, GraduationCap, BookOpen, ShoppingCart, Package, Layers, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import XPBar from "./XPBar";
import { useShoppingList } from "@/hooks/useShoppingList";

const navItems = [
  { path: "/", icon: Wine, label: "Receitas" },
  { path: "/quiz", icon: HelpCircle, label: "Quiz" },
  { path: "/dashboard", icon: BarChart3, label: "Stats" },
  { path: "/favorites", icon: Heart, label: "Favoritos" },
];

const moreItems = [
  { path: "/ingredientes", icon: Package, label: "Ingredientes" },
  { path: "/colecoes", icon: Layers, label: "Coleções" },
  { path: "/tips", icon: GraduationCap, label: "Escola" },
  { path: "/dicas", icon: BookOpen, label: "Dicas" },
  { path: "/lista-compras", icon: ShoppingCart, label: "Lista de Compras" },
];

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { drinkIds } = useShoppingList();
  const [showMore, setShowMore] = useState(false);

  if (location.pathname.startsWith("/tip/")) return null;

  const isMoreActive = moreItems.some((m) => location.pathname === m.path);

  return (
    <>
      {/* More menu overlay */}
      {showMore && (
        <div className="fixed inset-0 z-[55] bg-background/60 backdrop-blur-sm lg:hidden" onClick={() => setShowMore(false)}>
          <div
            className="absolute bottom-20 left-4 right-4 max-w-lg mx-auto bg-card border border-border/50 rounded-2xl p-4 shadow-xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-foreground text-sm">Mais opções</h3>
              <button onClick={() => setShowMore(false)} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <X size={16} className="text-muted-foreground" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {moreItems.map(({ path, icon: Icon, label }) => {
                const active = location.pathname === path;
                const showBadge = path === "/lista-compras" && drinkIds.length > 0;
                return (
                  <button
                    key={path}
                    onClick={() => { navigate(path); setShowMore(false); }}
                    className={`relative flex flex-col items-center gap-1.5 p-3 rounded-xl transition-colors ${
                      active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    <Icon size={22} strokeWidth={active ? 2.5 : 1.5} />
                    {showBadge && (
                      <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] font-bold flex items-center justify-center">
                        {drinkIds.length}
                      </span>
                    )}
                    <span className="text-[10px] font-medium leading-tight text-center">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Bottom nav bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-border/50 pb-safe lg:hidden">
        <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
          {navItems.map(({ path, icon: Icon, label }) => {
            const active = location.pathname === path;
            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`relative flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon size={22} strokeWidth={active ? 2.5 : 1.5} />
                <span className="text-[10px] font-medium">{label}</span>
              </button>
            );
          })}
          {/* More button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className={`relative flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
              showMore || isMoreActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <MoreHorizontal size={22} strokeWidth={showMore ? 2.5 : 1.5} />
            <span className="text-[10px] font-medium">Mais</span>
          </button>
        </div>
      </nav>
    </>
  );
}
