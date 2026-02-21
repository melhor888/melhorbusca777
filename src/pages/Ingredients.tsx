import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Search, X, Check } from "lucide-react";
import { dishes } from "@/data/dishes";
import { getDishImage } from "@/data/dishImages";

// Extract unique ingredients from dishes
function extractAllIngredients(): string[] {
  const set = new Set<string>();
  for (const d of dishes) {
    for (const ing of d.ingredients) {
      const name = ing
        .replace(/^\d+[\w/]*\s*(de\s+)?/i, "")
        .replace(/^\d+[-–]\d+\s*/i, "")
        .replace(/^(colher(es)?|xícara(s)?|fatia|rodela|ramo|talo|folha(s)?|pitada|unidade(s)?)\s+(de\s+)?/i, "")
        .trim();
      if (name.length > 1) set.add(name);
    }
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b, "pt"));
}

const allIngredients = extractAllIngredients();

const popularIngredients = [
  "arroz japonês", "salmão fresco", "atum fresco", "nori", "shoyu",
  "wasabi", "gengibre", "tofu", "missô", "dashi",
  "mirin", "sakê culinário", "panko", "udon", "soba",
  "cebolinha", "gergelim", "óleo de gergelim", "vinagre de arroz",
  "cogumelos shiitake", "alga wakame", "camarão"
];

export default function Ingredients() {
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredIngredients = useMemo(() => {
    if (!search) return popularIngredients;
    return allIngredients.filter((i) =>
      i.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 30);
  }, [search]);

  const toggle = (ing: string) => {
    setSelected((prev) =>
      prev.includes(ing) ? prev.filter((i) => i !== ing) : [...prev, ing]
    );
  };

  const matchedDishes = useMemo(() => {
    if (selected.length === 0) return [];
    return dishes
      .map((dish) => {
        const matchCount = dish.ingredients.filter((di) =>
          selected.some((s) => di.toLowerCase().includes(s.toLowerCase()))
        ).length;
        const matchPct = matchCount / dish.ingredients.length;
        return { dish, matchCount, matchPct };
      })
      .filter((m) => m.matchCount >= 1)
      .sort((a, b) => b.matchPct - a.matchPct || b.matchCount - a.matchCount)
      .slice(0, 20);
  }, [selected]);

  return (
    <div className="min-h-screen pb-24">
      <Helmet>
        <title>O que tenho em casa? — Ingredientes Japoneses | Japan Food</title>
        <meta name="description" content="Selecione os ingredientes japoneses que você tem em casa e descubra quais pratos pode preparar." />
      </Helmet>

      {/* Header */}
      <div className="sticky top-0 z-40 glass-card border-b border-border/50 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
          <ArrowLeft size={18} className="text-foreground" />
        </button>
        <h1 className="font-display font-bold text-foreground text-lg">O que tenho em casa? 🥢</h1>
      </div>

      <div className="px-4 pt-6 max-w-lg mx-auto space-y-6">
        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar ingrediente japonês..."
            className="w-full pl-9 pr-9 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <X size={16} />
            </button>
          )}
        </div>

        {/* Selected pills */}
        {selected.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selected.map((s) => (
              <button
                key={s}
                onClick={() => toggle(s)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-semibold"
              >
                {s} <X size={12} />
              </button>
            ))}
            <button
              onClick={() => setSelected([])}
              className="px-3 py-1.5 rounded-full bg-secondary text-muted-foreground text-xs"
            >
              Limpar
            </button>
          </div>
        )}

        {/* Ingredients grid */}
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-3">
            {search ? "Resultados" : "🍱 Ingredientes populares da culinária japonesa"}
          </p>
          <div className="flex flex-wrap gap-2">
            {filteredIngredients.map((ing) => {
              const isSelected = selected.includes(ing);
              return (
                <button
                  key={ing}
                  onClick={() => toggle(ing)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {isSelected && <Check size={12} />}
                  {ing}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results */}
        {selected.length > 0 && (
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-3">
              {matchedDishes.length > 0
                ? `🍣 ${matchedDishes.length} pratos encontrados`
                : "Nenhum prato encontrado com esses ingredientes"}
            </p>
            <div className="space-y-2">
              {matchedDishes.map(({ dish, matchPct }) => (
                <button
                  key={dish.id}
                  onClick={() => navigate(`/recipe/${dish.id}`)}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-card hover:bg-card/80 border border-border/50 transition-all"
                >
                  <img
                    src={getDishImage(dish.image)}
                    alt={dish.name}
                    className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 text-left">
                    <h3 className="font-display font-bold text-foreground text-sm">{dish.name}</h3>
                    <p className="text-[11px] text-muted-foreground">{dish.category}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-bold ${
                      matchPct >= 0.8 ? "text-green-400" : matchPct >= 0.5 ? "text-yellow-400" : "text-muted-foreground"
                    }`}>
                      {Math.round(matchPct * 100)}%
                    </span>
                    <p className="text-[10px] text-muted-foreground">match</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
