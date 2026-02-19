import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { drinks, categories } from "@/data/drinks";
import { articles } from "@/data/articles";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function SitemapPage() {
  return (
    <>
      <Helmet>
        <title>Sitemap - Drinks & Company | Mapa do Site</title>
        <meta name="description" content="Mapa completo do site Drinks & Company. Encontre todas as receitas, artigos, dicas e páginas do site." />
        <link rel="canonical" href="https://drinkseco.lovable.app/sitemap" />
      </Helmet>
      <div className="min-h-screen pb-20">
        <div className="px-4 pt-16 max-w-2xl mx-auto">
          <Breadcrumbs items={[{ label: "Sitemap" }]} />
          <h1 className="text-3xl font-display font-bold text-foreground mt-4 mb-6">Mapa do Site</h1>

          <div className="space-y-8 text-sm">
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-3">Páginas Principais</h2>
              <ul className="space-y-2 ml-2">
                <li><Link to="/" className="text-primary hover:underline">Página Inicial</Link></li>
                <li><Link to="/tips" className="text-primary hover:underline">Escola de Drinks</Link></li>
                <li><Link to="/dicas" className="text-primary hover:underline">Dicas e Artigos</Link></li>
                <li><Link to="/favorites" className="text-primary hover:underline">Favoritos</Link></li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-3">Institucional</h2>
              <ul className="space-y-2 ml-2">
                <li><Link to="/sobre" className="text-primary hover:underline">Sobre Nós</Link></li>
                <li><Link to="/contato" className="text-primary hover:underline">Contato</Link></li>
                <li><Link to="/privacidade" className="text-primary hover:underline">Política de Privacidade</Link></li>
                <li><Link to="/termos" className="text-primary hover:underline">Termos de Uso</Link></li>
                <li><Link to="/cookies" className="text-primary hover:underline">Política de Cookies</Link></li>
                <li><Link to="/aviso-legal" className="text-primary hover:underline">Aviso Legal</Link></li>
              </ul>
            </section>

            {categories.map((cat) => {
              const catDrinks = drinks.filter(d => d.category === cat);
              return (
                <section key={cat}>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">Receitas: {cat}</h2>
                  <ul className="space-y-1 ml-2">
                    {catDrinks.map(d => (
                      <li key={d.id}>
                        <Link to={`/recipe/${d.id}`} className="text-primary hover:underline">{d.name}</Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-3">Artigos Educacionais</h2>
              <ul className="space-y-1 ml-2">
                {articles.map(a => (
                  <li key={a.id}>
                    <Link to={`/artigo/${a.id}`} className="text-primary hover:underline">{a.title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
