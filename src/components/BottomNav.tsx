import { Wine, GraduationCap, Heart, BookOpen } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import XPBar from "./XPBar";

const navItems = [
  { path: "/", icon: Wine, label: "Receitas" },
  { path: "/tips", icon: GraduationCap, label: "Escola" },
  { path: "/dicas", icon: BookOpen, label: "Dicas" },
  { path: "/favorites", icon: Heart, label: "Favoritos" },
];

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  // Hide on recipe detail and tip detail pages
  if (location.pathname.startsWith("/recipe/") || location.pathname.startsWith("/tip/") || location.pathname.startsWith("/artigo/")) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-border/50 pb-safe">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {navItems.map(({ path, icon: Icon, label }) => {
          const active = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon size={22} strokeWidth={active ? 2.5 : 1.5} />
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
