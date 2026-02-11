import { useState } from "react";
import { Search } from "lucide-react";
import { searchDrinks, categories } from "@/data/drinks";
import DrinkCard from "@/components/DrinkCard";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const results = query.length >= 2 ? searchDrinks(query) : [];

  return (
    <div className="min-h-screen pb-20 pt-4">
      <div className="px-4">
        <h1 className="text-2xl font-display font-bold text-foreground mb-4">
          Buscar
        </h1>
        <div className="relative mb-6">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar drinks, ingredientes..."
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>

      {query.length >= 2 ? (
        <div className="px-4">
          {results.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {results.map((drink) => (
                <DrinkCard key={drink.id} drink={drink} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center mt-12">
              Nenhum resultado para "{query}"
            </p>
          )}
        </div>
      ) : (
        <div className="px-4">
          <h2 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
            Categorias
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setQuery(cat)}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
