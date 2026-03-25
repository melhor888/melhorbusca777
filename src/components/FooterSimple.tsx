import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function FooterSimple() {
  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="container max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl gradient-hero flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">
              Auto<span className="text-primary">Imóvel</span>
            </span>
          </div>
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/imoveis" className="hover:text-foreground transition-colors">Imóveis</Link>
            <Link to="/veiculos" className="hover:text-foreground transition-colors">Veículos</Link>
            <Link to="/anunciar" className="hover:text-foreground transition-colors">Anunciar</Link>
          </nav>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AutoImóvel. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
