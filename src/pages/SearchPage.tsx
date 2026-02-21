import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { searchDishes, categories, dishes } from "@/data/dishes";
import { getDishImage } from "@/data/dishImages";
import DrinkCard from "@/components/DrinkCard";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const results = query.length >= 2 ? searchDishes(query) : [];

  const randomDish = useMemo(() => {
    return dishes[Math.floor(Math.random() * dishes.length)];
  }, []);

  return (
    <div className="min-h-screen pb-20 pt-4">
      {query.length < 2 && (
        <div className="px-4 mb-4">
          <button
            onClick={() => navigate(`/recipe/${randomDish.id}`)}
            className="relative w-full h-48 rounded-2xl overflow-hidden group"
          >
            <img
              src={getDishImage(randomDish.image)}
              alt={randomDish.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 hero-overlay" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="text-[10px] uppercase tracking-wider text-primary font-semibold">
                Prato do momento
              </span>
              <h2 className="font-display font-bold text-foreground text-xl leading-tight">
                {randomDish.name}
              </h2>
              <p className="text-muted-foreground text-xs mt-1">
                {randomDish.category} · {randomDish.difficulty} · {randomDish.time}
              </p>
            </div>
          </button>
        </div>
      )}

      {query.length < 2 && (
        <div className="mb-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 px-4 whitespace-nowrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setQuery(cat)}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground flex-shrink-0"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="px-4 mb-6">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar pratos, ingredientes..."
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>

      {query.length >= 2 && (
        <div className="px-4">
          {results.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {results.map((dish) => (
                <DrinkCard key={dish.id} drink={dish} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center mt-12">
              Nenhum resultado para "{query}"
            </p>
          )}
        </div>
      )}
    </div>
  );
}
