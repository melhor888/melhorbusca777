import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, User, Calendar, ChevronRight } from "lucide-react";
import { blogCategories, blogPosts } from "@/data/blogPosts";
import { getTranslatedBlogPost, blogCategoryTranslations } from "@/data/blogTranslations";
import { getDishById } from "@/data/dishes";
import { getTranslatedDish } from "@/data/translations";
import { getDishImage } from "@/data/dishImages";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
import AdBanner from "@/components/AdBanner";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { localePath, lang } = useLocalizedPath();

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  // Find post by slug (check translated slugs too)
  const post = useMemo(() => {
    // First try original slugs
    let found = blogPosts.find((p) => p.slug === slug);
    if (found) return found;
    // Try translated slugs
    for (const p of blogPosts) {
      const t = getTranslatedBlogPost(p, lang);
      if (t.slug === slug) return p;
    }
    // Try all languages
    for (const p of blogPosts) {
      for (const l of ["en", "es"]) {
        const t = getTranslatedBlogPost(p, l);
        if (t.slug === slug) return p;
      }
    }
    return undefined;
  }, [slug, lang]);

  if (!post) {
    const backLabel = lang === "en" ? "← Back to Blog" : lang === "es" ? "← Volver al Blog" : "← Voltar ao Blog";
    const notFoundLabel = lang === "en" ? "Article not found." : lang === "es" ? "Artículo no encontrado." : "Artigo não encontrado.";
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">{notFoundLabel}</p>
          <button onClick={() => navigate(localePath("/blog"))} className="text-primary font-semibold text-sm">{backLabel}</button>
        </div>
      </div>
    );
  }

  const translated = getTranslatedBlogPost(post, lang);
  const catInfo = blogCategories.find((c) => c.id === post.category);
  const catLabel = blogCategoryTranslations[lang]?.[post.category]?.label || catInfo?.label || "";

  const relatedDishes = post.relatedRecipes
    .map((id) => ({ dish: getDishById(id), id }))
    .filter((r) => r.dish);

  const morePosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  const contentParts = translated.content.split("</h2>");
  const midPoint = Math.floor(contentParts.length / 2);

  const baseUrl = "https://receitasmexicanas.lovable.app";
  const canonicalUrl = `${baseUrl}${localePath(`/blog/${translated.slug}`)}`;
  const imageUrl = `${baseUrl}${post.image}`;

  const dateFormatLocale = lang === "en" ? "en-US" : lang === "es" ? "es-ES" : "pt-BR";

  // Article Schema.org
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: translated.title,
    description: translated.excerpt,
    image: imageUrl,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Mexi Food XP",
      logo: { "@type": "ImageObject", url: `${baseUrl}/pwa-512x512.png` },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    inLanguage: lang === "pt-BR" ? "pt-BR" : lang,
    articleSection: catLabel,
    keywords: post.tags.join(", "),
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}${localePath("/")}` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}${localePath("/blog")}` },
      { "@type": "ListItem", position: 3, name: translated.title, item: canonicalUrl },
    ],
  };

  const recipesLabel = lang === "en" ? "🍽️ Related Recipes" : lang === "es" ? "🍽️ Recetas Relacionadas" : "🍽️ Receitas Relacionadas";
  const seeRecipeLabel = lang === "en" ? "See recipe" : lang === "es" ? "Ver receta" : "Ver receita";
  const readAlsoLabel = lang === "en" ? "📚 Read Also" : lang === "es" ? "📚 Lee También" : "📚 Leia Também";

  return (
    <>
      <Helmet>
        <title>{translated.title} | Blog</title>
        <meta name="description" content={translated.excerpt} />
        <link rel="canonical" href={canonicalUrl} />
        {/* Open Graph */}
        <meta property="og:title" content={translated.title} />
        <meta property="og:description" content={translated.excerpt} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content={lang === "en" ? "en_US" : lang === "es" ? "es_ES" : "pt_BR"} />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={catLabel} />
        {post.tags.map((tag) => <meta key={tag} property="article:tag" content={tag} />)}
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={translated.title} />
        <meta name="twitter:description" content={translated.excerpt} />
        <meta name="twitter:image" content={imageUrl} />
        {/* Hreflang */}
        <link rel="alternate" hrefLang="pt-BR" href={`${baseUrl}/blog/${post.slug}`} />
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en/blog/${getTranslatedBlogPost(post, "en").slug}`} />
        <link rel="alternate" hrefLang="es" href={`${baseUrl}/es/blog/${getTranslatedBlogPost(post, "es").slug}`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/blog/${post.slug}`} />
        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen pb-24">
        {/* Hero Image */}
        <div className="relative aspect-[16/9] lg:aspect-[21/9]">
          <img src={post.image} alt={translated.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <button
            onClick={() => navigate(localePath("/blog"))}
            className="absolute top-4 left-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center"
          >
            <ArrowLeft size={20} className="text-foreground" />
          </button>
        </div>

        {/* Article header */}
        <div className="px-4 lg:px-0 lg:max-w-3xl lg:mx-auto -mt-16 relative z-10">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {catInfo && (
              <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
                {catInfo.icon} {catLabel}
              </span>
            )}
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-[10px]">#{tag}</span>
            ))}
          </div>

          <h1 className="text-2xl lg:text-4xl font-display font-bold text-foreground leading-tight mb-3">
            {translated.title}
          </h1>

          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{translated.excerpt}</p>

          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6 pb-4 border-b border-border/50">
            <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
            <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(post.publishedAt).toLocaleDateString(dateFormatLocale)}</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {translated.readTime}</span>
          </div>
        </div>

        <AdBanner slot="blog-post-top" className="my-4" />

        {/* Article content */}
        <div className="px-4 lg:px-0 lg:max-w-3xl lg:mx-auto">
          <article className="prose-custom">
            {contentParts.map((part, i) => (
              <div key={i}>
                <div
                  dangerouslySetInnerHTML={{ __html: i < contentParts.length - 1 ? part + "</h2>" : part }}
                  className="blog-content"
                />
                {i === midPoint && <AdBanner slot="blog-post-mid" className="my-6" />}
              </div>
            ))}
          </article>
        </div>

        <AdBanner slot="blog-post-after-content" className="my-6" />

        {/* Related Recipes */}
        {relatedDishes.length > 0 && (
          <div className="px-4 lg:px-0 lg:max-w-3xl lg:mx-auto mt-8">
            <h2 className="text-lg font-display font-bold text-foreground mb-4">{recipesLabel}</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedDishes.map(({ dish, id }) => {
                if (!dish) return null;
                const img = getDishImage(dish.image);
                const dishT = getTranslatedDish(dish);
                return (
                  <Link
                    key={id}
                    to={localePath(`/recipe/${dish.id}`)}
                    className="glass-card rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <div className="aspect-[16/9]">
                      <img src={img} alt={dishT.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="p-3">
                      <h3 className="font-display font-bold text-xs text-foreground truncate">{dishT.name}</h3>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{dish.time} · {dish.difficulty}</p>
                      <span className="text-[10px] text-primary font-semibold flex items-center gap-0.5 mt-1">
                        {seeRecipeLabel} <ChevronRight size={10} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <AdBanner slot="blog-post-after-recipes" className="my-6" />

        {/* More from Blog */}
        <div className="px-4 lg:px-0 lg:max-w-3xl lg:mx-auto mt-8">
          <h2 className="text-lg font-display font-bold text-foreground mb-4">{readAlsoLabel}</h2>
          <div className="space-y-3">
            {morePosts.map((p) => {
              const pT = getTranslatedBlogPost(p, lang);
              return (
                <Link
                  key={p.id}
                  to={localePath(`/blog/${pT.slug}`)}
                  className="flex gap-3 glass-card rounded-xl p-3 hover:border-primary/30 transition-all"
                >
                  <img src={p.image} alt={pT.title} className="w-20 h-16 rounded-lg object-cover flex-shrink-0" loading="lazy" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-xs text-foreground line-clamp-2">{pT.title}</h3>
                    <p className="text-[10px] text-muted-foreground mt-0.5 line-clamp-1">{pT.excerpt}</p>
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1 mt-1">
                      <Clock size={10} /> {pT.readTime}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <AdBanner slot="blog-post-bottom" className="mt-6" />
      </div>
    </>
  );
}
