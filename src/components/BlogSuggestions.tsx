import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Clock, ChevronRight, Newspaper } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { getTranslatedBlogPost } from "@/data/blogTranslations";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";

interface Props {
  recipeId?: string;
}

/**
 * Shows 3 random blog posts on recipe pages.
 * Prioritizes posts that reference this recipe, fills rest randomly.
 */
export default function BlogSuggestions({ recipeId }: Props) {
  const { localePath, lang } = useLocalizedPath();

  const posts = useMemo(() => {
    // Prioritize posts related to this recipe
    const related = recipeId
      ? blogPosts.filter((p) => p.relatedRecipes.includes(recipeId))
      : [];
    const others = blogPosts.filter((p) => !related.includes(p));

    // Shuffle others
    const shuffled = [...others].sort(() => Math.random() - 0.5);

    // Take up to 3: related first, then random
    const result = [...related, ...shuffled].slice(0, 3);
    return result;
  }, [recipeId]);

  if (posts.length === 0) return null;

  const sectionLabel =
    lang === "en" ? "📰 From Our Blog" : lang === "es" ? "📰 De Nuestro Blog" : "📰 Do Nosso Blog";

  return (
    <section className="mt-6">
      <h3 className="text-sm font-display font-bold text-foreground mb-3 flex items-center gap-1.5">
        <Newspaper size={14} className="text-primary" />
        {sectionLabel}
      </h3>
      <div className="space-y-2.5">
        {posts.map((post) => {
          const pT = getTranslatedBlogPost(post, lang);
          return (
            <Link
              key={post.id}
              to={localePath(`/blog/${pT.slug}`)}
              className="flex gap-3 glass-card rounded-xl p-2.5 hover:border-primary/30 transition-all active:scale-[0.98]"
            >
              <img
                src={post.image}
                alt={pT.title}
                className="w-16 h-14 rounded-lg object-cover flex-shrink-0"
                loading="lazy"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-display font-bold text-xs text-foreground line-clamp-2 leading-tight">
                  {pT.title}
                </h4>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <Clock size={10} /> {pT.readTime}
                  </span>
                  <span className="text-[10px] text-primary font-semibold flex items-center gap-0.5">
                    <ChevronRight size={10} />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
