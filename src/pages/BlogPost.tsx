import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, User, Calendar, Tag, ChevronRight } from "lucide-react";
import { getBlogPostBySlug, blogCategories, blogPosts } from "@/data/blogPosts";
import { getDishById } from "@/data/dishes";
import { getDishImage } from "@/data/dishImages";
import AdBanner from "@/components/AdBanner";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const post = getBlogPostBySlug(slug || "");

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Artigo não encontrado.</p>
          <button onClick={() => navigate("/blog")} className="text-primary font-semibold text-sm">
            ← Voltar ao Blog
          </button>
        </div>
      </div>
    );
  }

  const catInfo = blogCategories.find((c) => c.id === post.category);
  const relatedDishes = post.relatedRecipes
    .map((id) => ({ dish: getDishById(id), id }))
    .filter((r) => r.dish);

  // Get other blog posts for "read more"
  const morePosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  // Split content into chunks to insert ads
  const contentParts = post.content.split("</h2>");
  const midPoint = Math.floor(contentParts.length / 2);

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog Receitas Mexicanas</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen pb-24">
        {/* Hero Image */}
        <div className="relative aspect-[16/9] lg:aspect-[21/9]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <button
            onClick={() => navigate("/blog")}
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
                {catInfo.icon} {catInfo.label}
              </span>
            )}
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-[10px]">
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-2xl lg:text-4xl font-display font-bold text-foreground leading-tight mb-3">
            {post.title}
          </h1>

          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6 pb-4 border-b border-border/50">
            <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
            <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(post.publishedAt).toLocaleDateString("pt-BR")}</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
          </div>
        </div>

        <AdBanner slot="blog-post-top" className="my-4" />

        {/* Article content */}
        <div className="px-4 lg:px-0 lg:max-w-3xl lg:mx-auto">
          <article className="prose-custom">
            {contentParts.map((part, i) => (
              <div key={i}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: i < contentParts.length - 1 ? part + "</h2>" : part,
                  }}
                  className="blog-content"
                />
                {/* Insert ad in the middle of article */}
                {i === midPoint && (
                  <AdBanner slot="blog-post-mid" className="my-6" />
                )}
              </div>
            ))}
          </article>
        </div>

        <AdBanner slot="blog-post-after-content" className="my-6" />

        {/* Related Recipes */}
        {relatedDishes.length > 0 && (
          <div className="px-4 lg:px-0 lg:max-w-3xl lg:mx-auto mt-8">
            <h2 className="text-lg font-display font-bold text-foreground mb-4">
              🍽️ Receitas Relacionadas
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedDishes.map(({ dish, id }) => {
                if (!dish) return null;
                const img = getDishImage(dish.image);
                return (
                  <Link
                    key={id}
                    to={`/recipe/${dish.id}`}
                    className="glass-card rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <div className="aspect-[16/9]">
                      <img src={img} alt={dish.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="p-3">
                      <h3 className="font-display font-bold text-xs text-foreground truncate">{dish.name}</h3>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{dish.time} · {dish.difficulty}</p>
                      <span className="text-[10px] text-primary font-semibold flex items-center gap-0.5 mt-1">
                        Ver receita <ChevronRight size={10} />
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
          <h2 className="text-lg font-display font-bold text-foreground mb-4">
            📚 Leia Também
          </h2>
          <div className="space-y-3">
            {morePosts.map((p) => (
              <Link
                key={p.id}
                to={`/blog/${p.slug}`}
                className="flex gap-3 glass-card rounded-xl p-3 hover:border-primary/30 transition-all"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-20 h-16 rounded-lg object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-xs text-foreground line-clamp-2">{p.title}</h3>
                  <p className="text-[10px] text-muted-foreground mt-0.5 line-clamp-1">{p.excerpt}</p>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1 mt-1">
                    <Clock size={10} /> {p.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <AdBanner slot="blog-post-bottom" className="mt-6" />
      </div>
    </>
  );
}
