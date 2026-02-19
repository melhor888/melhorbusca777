import { Wine, GraduationCap, Heart, HelpCircle, BarChart3 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import XPBar from "./XPBar";
import { useShoppingList } from "@/hooks/useShoppingList";

const navItems = [
  { path: "/", icon: Wine, label: "Receitas" },
  { path: "/quiz", icon: HelpCircle, label: "Quiz" },
  { path: "/dashboard", icon: BarChart3, label: "Stats" },
  { path: "/favorites", icon: Heart, label: "Favoritos" },
];

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { drinkIds } = useShoppingList();

  // Hide on recipe detail and tip detail pages
  if (location.pathname.startsWith("/tip/")) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-border/50 pb-safe lg:hidden">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {navItems.map(({ path, icon: Icon, label }) => {
          const active = location.pathname === path;
          const showBadge = path === "/lista-compras" && drinkIds.length > 0;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`relative flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon size={22} strokeWidth={active ? 2.5 : 1.5} />
              {showBadge && (
                <span className="absolute top-1 right-2 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] font-bold flex items-center justify-center">
                  {drinkIds.length}
                </span>
              )}
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
