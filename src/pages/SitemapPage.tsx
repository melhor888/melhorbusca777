import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { drinks, categories as drinkCategories } from "@/data/drinks";
import { getAllDishes, categories as dishCategories } from "@/data/dishes";
import { articles } from "@/data/articles";
import { blogPosts } from "@/data/blogPosts";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useTranslation } from "react-i18next";

export default function SitemapPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Sitemap - Mexi Food XP | Mapa do Site</title>
        <meta name="description" content="Mapa completo do site Mexi Food XP. Encontre todas as receitas, artigos, blog e páginas." />
        <link rel="canonical" href="https://receitasmexicanas.lovable.app/sitemap" />
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
                <li><Link to="/tips" className="text-primary hover:underline">Escola Mexicana</Link></li>
                <li><Link to="/dicas" className="text-primary hover:underline">Dicas e Artigos</Link></li>
                <li><Link to="/blog" className="text-primary hover:underline">Blog</Link></li>
                <li><Link to="/quiz" className="text-primary hover:underline">Quiz</Link></li>
                <li><Link to="/colecoes" className="text-primary hover:underline">Coleções</Link></li>
                <li><Link to="/favorites" className="text-primary hover:underline">Favoritos</Link></li>
                <li><Link to="/lista-compras" className="text-primary hover:underline">{t("nav.shoppingList")}</Link></li>
                <li><Link to="/dashboard" className="text-primary hover:underline">Dashboard</Link></li>
                <li><Link to="/ingredientes" className="text-primary hover:underline">Ingredientes</Link></li>
                <li><Link to="/vip" className="text-primary hover:underline">VIP</Link></li>
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

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-3">Blog ({blogPosts.length} artigos)</h2>
              <ul className="space-y-1 ml-2">
                {blogPosts.map(post => (
                  <li key={post.id}>
                    <Link to={`/blog/${post.slug}`} className="text-primary hover:underline">{post.title}</Link>
                  </li>
                ))}
              </ul>
            </section>

            {dishCategories.map((cat) => {
              const catDishes = getAllDishes().filter(d => d.category === cat);
              if (catDishes.length === 0) return null;
              return (
                <section key={cat}>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">Receitas: {cat} ({catDishes.length})</h2>
                  <ul className="space-y-1 ml-2">
                    {catDishes.map(d => (
                      <li key={d.id}>
                        <Link to={`/recipe/${d.id}`} className="text-primary hover:underline">{d.name}</Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-3">Artigos Educacionais ({articles.length})</h2>
              <ul className="space-y-1 ml-2">
                {articles.map(a => (
                  <li key={a.id}>
                    <Link to={`/artigo/${a.id}`} className="text-primary hover:underline">{a.title}</Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-3">Idiomas Disponíveis</h2>
              <ul className="space-y-2 ml-2">
                <li><Link to="/" className="text-primary hover:underline">🇧🇷 Português (Brasil)</Link></li>
                <li><Link to="/en" className="text-primary hover:underline">🇺🇸 English</Link></li>
                <li><Link to="/es" className="text-primary hover:underline">🇪🇸 Español</Link></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
