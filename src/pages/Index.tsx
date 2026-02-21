import { useState, useEffect, useMemo } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Search, SlidersHorizontal, X } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CategoryRow from "@/components/CategoryRow";
import XPBar from "@/components/XPBar";
import DrinkCard from "@/components/DrinkCard";
import ThemeToggle from "@/components/ThemeToggle";
import NotificationToggle from "@/components/NotificationToggle";
import { categories, getDishesByCategory, searchDishes, dishes as allDishes } from "@/data/dishes";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const difficulties = ["Fácil", "Médio", "Avançado"] as const;

export default function Index() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setQuery(q);
  }, [searchParams]);

  const results = query.length >= 2 ? searchDishes(query) : [];

  const filteredResults = activeFilter
    ? (query.length >= 2 ? results : allDishes).filter(
        (d) => d.difficulty === activeFilter
      )
    : results;

  const showFilteredGrid = query.length >= 2 || activeFilter;

  return (
    <>
      <Helmet>
        <title>Nihon Food - Receitas de Comida Japonesa Autêntica</title>
        <meta name="description" content="Descubra receitas autênticas da culinária japonesa. Sushi, ramen, tempurá, yakitori e muito mais. Aprenda técnicas profissionais." />
      </Helmet>
      <div className="min-h-screen pb-20">
        <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 flex items-center justify-end gap-2 bg-gradient-to-b from-background via-background/90 to-transparent lg:hidden">
          <NotificationToggle />
          <ThemeToggle />
          <XPBar compact />
        </header>

        <HeroBanner />

        <div className="px-4 lg:px-6 mb-4 -mt-2 lg:max-w-2xl lg:mx-auto">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar pratos, ingredientes..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center justify-center w-12 rounded-xl transition-colors ${
                showFilters || activeFilter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              <SlidersHorizontal size={18} />
            </button>
          </div>

          {showFilters && (
            <div className="flex gap-2 mt-3 animate-fade-in">
              {difficulties.map((diff) => (
                <button
                  key={diff}
                  onClick={() =>
                    setActiveFilter(activeFilter === diff ? null : diff)
                  }
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeFilter === diff
                      ? diff === "Fácil"
                        ? "bg-green-500/20 text-green-400 ring-1 ring-green-500/50"
                        : diff === "Médio"
                        ? "bg-yellow-500/20 text-yellow-400 ring-1 ring-yellow-500/50"
                        : "bg-red-500/20 text-red-400 ring-1 ring-red-500/50"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {diff}
                </button>
              ))}
              {activeFilter && (
                <button
                  onClick={() => setActiveFilter(null)}
                  className="px-3 py-1.5 rounded-full text-xs text-muted-foreground hover:text-foreground bg-secondary"
                >
                  Limpar
                </button>
              )}
            </div>
          )}
        </div>

        {showFilteredGrid ? (
          <div className="px-4 lg:px-6">
            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4">
                {filteredResults.map((dish, i) => (
                  <div
                    key={dish.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    <DrinkCard drink={dish} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center mt-12">
                Nenhum resultado encontrado.
              </p>
            )}
          </div>
        ) : (
          <div className="space-y-2">
            {categories.map((cat) => {
              const catDishes = getDishesByCategory(cat);
              const shuffled = [...catDishes].sort(() => Math.random() - 0.5);
              return (
                <div key={cat}>
                  <CategoryRow
                    title={cat}
                    drinks={shuffled}
                    categorySlug={slugify(cat)}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
