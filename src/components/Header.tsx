import { Car, Building2, Plus, Search, Menu, X, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useCityDetection } from "@/hooks/useCityDetection";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/imoveis", label: "Imóveis", icon: Building2 },
  { to: "/veiculos", label: "Veículos", icon: Car },
  { to: "/anunciar", label: "Anunciar", icon: Plus },
];

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { detectedCity } = useCityDetection();

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-xl border-b border-border">
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/pwa-512x512.png" alt="Melhor Busca" className="w-9 h-9 rounded-xl shadow-md object-contain" />
          <span className="font-display font-bold text-xl text-foreground">
            Melhor<span className="text-primary">Busca</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                location.pathname === link.to
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {detectedCity && (
            <span className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground">
              <MapPin size={14} className="text-primary" />
              {detectedCity}
            </span>
          )}
        </nav>

        <Link
          to="/buscar"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary text-secondary-foreground text-sm hover:bg-secondary/80 transition-colors"
        >
          <Search size={16} />
          Buscar
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-xl hover:bg-secondary transition-colors"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-3 space-y-1 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {link.icon && <link.icon size={18} />}
              {link.label}
            </Link>
          ))}
          <Link
            to="/buscar"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary"
          >
            <Search size={18} />
            Buscar
          </Link>
        </div>
      )}
    </header>
  );
}
