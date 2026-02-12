import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CategoryRow from "@/components/CategoryRow";
import XPBar from "@/components/XPBar";
import DrinkCard from "@/components/DrinkCard";
import { categories, getDrinksByCategory, searchDrinks } from "@/data/drinks";

export default function Index() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const results = query.length >= 2 ? searchDrinks(query) : [];

  return (
    <div className="min-h-screen pb-20">
      <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 flex items-center justify-end bg-gradient-to-b from-background via-background/90 to-transparent">
        <XPBar compact />
      </header>

      <HeroBanner />

      {/* Search bar below hero */}
      <div className="px-4 mb-4 -mt-2">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
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
        <div className="space-y-2">
          {categories.map((cat) => (
            <CategoryRow
              key={cat}
              title={cat}
              drinks={getDrinksByCategory(cat)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
