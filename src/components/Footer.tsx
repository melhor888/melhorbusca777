import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-border/50 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Navegação</h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Receitas</Link></li>
              <li><Link to="/tips" className="text-muted-foreground hover:text-primary transition-colors">Escola Mexicana</Link></li>
              <li><Link to="/dicas" className="text-muted-foreground hover:text-primary transition-colors">Cultura</Link></li>
              <li><Link to="/favorites" className="text-muted-foreground hover:text-primary transition-colors">Favoritos</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Institucional</h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</Link></li>
              <li><Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</Link></li>
              <li><Link to="/sitemap" className="text-muted-foreground hover:text-primary transition-colors">Sitemap</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Legal</h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/privacidade" className="text-muted-foreground hover:text-primary transition-colors">Privacidade</Link></li>
              <li><Link to="/termos" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</Link></li>
              <li><Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">Cookies</Link></li>
              <li><Link to="/aviso-legal" className="text-muted-foreground hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 space-y-3 text-center">
          <p className="text-[10px] text-muted-foreground leading-relaxed">
            Este site não é afiliado ao Google. A monetização é feita através da plataforma Google AdSense, conforme as políticas da plataforma.
          </p>
          <p className="text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} Receitas 🇲🇽XP. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
