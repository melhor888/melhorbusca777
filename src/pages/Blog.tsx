import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Clock, ChevronRight } from "lucide-react";
import { blogPosts, blogCategories, getBlogPostsByCategory } from "@/data/blogPosts";
import { getTranslatedBlogPost, blogCategoryTranslations } from "@/data/blogTranslations";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
import AdBanner from "@/components/AdBanner";

export default function Blog() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { localePath, lang } = useLocalizedPath();
  const [selectedCategory, setSelectedCategory] = useState("todos");

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const posts = getBlogPostsByCategory(selectedCategory);
  const featured = blogPosts[0];
  const featuredT = getTranslatedBlogPost(featured, lang);

  function getCatLabel(catId: string, fallback: string) {
    return blogCategoryTranslations[lang]?.[catId]?.label || fallback;
  }

  const seoTitle = lang === "en" ? "Blog | Mexican Recipes" : lang === "es" ? "Blog | Recetas Mexicanas" : "Blog | Receitas Mexicanas";
  const seoDesc = lang === "en"
    ? "In-depth articles about Mexican cuisine — history, techniques, ingredients, and recipes with 1200+ words each."
    : lang === "es"
    ? "Artículos profundos sobre cocina mexicana — historia, técnicas, ingredientes y recetas con más de 1200 palabras."
    : "Artigos aprofundados sobre culinária mexicana — história, técnicas, ingredientes e receitas com mais de 1200 palavras cada.";

  const allLabel = lang === "en" ? "All" : lang === "es" ? "Todos" : "Todos";
  const readMoreLabel = lang === "en" ? "Read more" : lang === "es" ? "Leer más" : "Ler mais";
  const featuredLabel = lang === "en" ? "Featured" : lang === "es" ? "Destacado" : "Destaque";

  // Blog listing Schema
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: seoTitle,
    description: seoDesc,
    blogPost: blogPosts.map((p) => {
      const pT = getTranslatedBlogPost(p, lang);
      return {
        "@type": "BlogPosting",
        headline: pT.title,
        url: `https://receitasmexicanas.lovable.app${localePath(`/blog/${pT.slug}`)}`,
        image: `https://receitasmexicanas.lovable.app${p.image}`,
        datePublished: p.publishedAt,
        author: { "@type": "Person", name: p.author },
      };
    }),
  };

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <link rel="canonical" href={`https://receitasmexicanas.lovable.app${localePath("/blog")}`} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://receitasmexicanas.lovable.app${localePath("/blog")}`} />
        <script type="application/ld+json">{JSON.stringify(blogListSchema)}</script>
      </Helmet>

      <div className="min-h-screen pb-24 pt-4 px-4 lg:px-6 lg:max-w-5xl lg:mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-display font-bold text-foreground mb-1">Blog</h1>
          <p className="text-sm text-muted-foreground">{seoDesc.substring(0, 90)}...</p>
        </div>

        {/* Featured */}
        <button onClick={() => navigate(localePath(`/blog/${featuredT.slug}`))} className="w-full text-left mb-6 group">
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-3">
            <img src={featured.image} alt={featuredT.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
              <span className="inline-block px-2 py-0.5 rounded-full bg-primary/80 text-primary-foreground text-[10px] font-bold uppercase tracking-wider mb-2">{featuredLabel}</span>
              <h2 className="text-xl lg:text-2xl font-display font-bold text-foreground leading-tight mb-1">{featuredT.title}</h2>
              <p className="text-xs text-muted-foreground line-clamp-2">{featuredT.excerpt}</p>
              <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock size={12} /> {featuredT.readTime}</span>
                <span>{featured.author}</span>
              </div>
            </div>
          </div>
        </button>

        <AdBanner slot="blog-top" className="mb-6" />

        {/* Category filter */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-3 mb-4">
          <button
            onClick={() => setSelectedCategory("todos")}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${selectedCategory === "todos" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}
          >
            {allLabel} ({blogPosts.length})
          </button>
          {blogCategories.map((cat) => {
            const count = blogPosts.filter((p) => p.category === cat.id).length;
            if (count === 0) return null;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${selectedCategory === cat.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}
              >
                {cat.icon} {getCatLabel(cat.id, cat.label)} ({count})
              </button>
            );
          })}
        </div>

        {/* Posts grid */}
        <div className="grid gap-4 lg:grid-cols-2">
          {posts.map((post, i) => {
            const pT = getTranslatedBlogPost(post, lang);
            const catInfo = blogCategories.find((c) => c.id === post.category);
            return (
              <div key={post.id}>
                <button
                  onClick={() => navigate(localePath(`/blog/${pT.slug}`))}
                  className="w-full text-left glass-card rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 active:scale-[0.98] animate-fade-in"
                  style={{ animationDelay: `${Math.min(i * 50, 400)}ms` }}
                >
                  <div className="relative aspect-[16/9]">
                    <img src={post.image} alt={pT.title} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 rounded-full bg-background/80 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-foreground">
                        {catInfo?.icon} {getCatLabel(post.category, catInfo?.label || "")}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-bold text-sm text-foreground leading-tight mb-1 line-clamp-2">{pT.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{pT.excerpt}</p>
                    <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock size={10} /> {pT.readTime}</span>
                      <span className="flex items-center gap-1 text-primary font-semibold">{readMoreLabel} <ChevronRight size={12} /></span>
                    </div>
                  </div>
                </button>
                {(i + 1) % 2 === 0 && i < posts.length - 1 && <AdBanner slot={`blog-list-${i}`} className="my-4" />}
              </div>
            );
          })}
        </div>

        <AdBanner slot="blog-bottom" className="mt-6" />
      </div>
    </>
  );
}
