import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Clock, ChevronRight, Tag } from "lucide-react";
import { blogPosts, blogCategories, getBlogPostsByCategory } from "@/data/blogPosts";
import AdBanner from "@/components/AdBanner";

export default function Blog() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("todos");

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const posts = getBlogPostsByCategory(selectedCategory);
  const featured = blogPosts[0];

  return (
    <>
      <Helmet>
        <title>Blog | Receitas Mexicanas</title>
        <meta name="description" content="Artigos aprofundados sobre culinária mexicana — história, técnicas, ingredientes e receitas com mais de 1200 palavras cada." />
      </Helmet>

      <div className="min-h-screen pb-24 pt-4 px-4 lg:px-6 lg:max-w-5xl lg:mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-display font-bold text-foreground mb-1">Blog</h1>
          <p className="text-sm text-muted-foreground">
            Artigos aprofundados sobre a culinária mexicana — história, técnicas e sabores.
          </p>
        </div>

        {/* Featured Post */}
        <button
          onClick={() => navigate(`/blog/${featured.slug}`)}
          className="w-full text-left mb-6 group"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-3">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
              <span className="inline-block px-2 py-0.5 rounded-full bg-primary/80 text-primary-foreground text-[10px] font-bold uppercase tracking-wider mb-2">
                Destaque
              </span>
              <h2 className="text-xl lg:text-2xl font-display font-bold text-foreground leading-tight mb-1">
                {featured.title}
              </h2>
              <p className="text-xs text-muted-foreground line-clamp-2">{featured.excerpt}</p>
              <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
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
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              selectedCategory === "todos"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            Todos ({blogPosts.length})
          </button>
          {blogCategories.map((cat) => {
            const count = blogPosts.filter((p) => p.category === cat.id).length;
            if (count === 0) return null;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat.icon} {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Posts grid */}
        <div className="grid gap-4 lg:grid-cols-2">
          {posts.map((post, i) => (
            <div key={post.id}>
              <button
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="w-full text-left glass-card rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 active:scale-[0.98] animate-fade-in"
                style={{ animationDelay: `${Math.min(i * 50, 400)}ms` }}
              >
                <div className="relative aspect-[16/9]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 rounded-full bg-background/80 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-foreground">
                      {blogCategories.find((c) => c.id === post.category)?.icon}{" "}
                      {blogCategories.find((c) => c.id === post.category)?.label}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-bold text-sm text-foreground leading-tight mb-1 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                    <span className="flex items-center gap-1 text-primary font-semibold">
                      Ler mais <ChevronRight size={12} />
                    </span>
                  </div>
                </div>
              </button>

              {/* Ad between posts every 2 posts */}
              {(i + 1) % 2 === 0 && i < posts.length - 1 && (
                <AdBanner slot={`blog-list-${i}`} className="my-4" />
              )}
            </div>
          ))}
        </div>

        <AdBanner slot="blog-bottom" className="mt-6" />
      </div>
    </>
  );
}
