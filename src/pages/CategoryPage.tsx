import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { categories, getDishesByCategory } from "@/data/dishes";
import DrinkCard from "@/components/DrinkCard";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getCategoryFromSlug(slug: string): string | undefined {
  return categories.find((c) => slugify(c) === slug);
}

export { slugify };

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryFromSlug(slug || "");
  const dishes = category ? getDishesByCategory(category) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Categoria não encontrada.</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{category} - Receitas Japonesas | Receitas Japonesas XP</title>
        <meta
          name="description"
          content={`Descubra ${dishes.length} receitas na categoria ${category}. Pratos autênticos da culinária japonesa.`}
        />
      </Helmet>
      <div className="min-h-screen pb-24 pt-4 px-4 lg:px-6">
        <div className="flex items-center gap-3 mb-6">
          <Link
            to="/"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center lg:hidden"
          >
            <ArrowLeft size={20} className="text-foreground" />
          </Link>
          <div>
            <h1 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
              {category}
            </h1>
            <p className="text-sm text-muted-foreground">{dishes.length} pratos disponíveis</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4">
          {dishes.map((dish, i) => (
            <div
              key={dish.id}
              className="animate-fade-in"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <DrinkCard drink={dish} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
