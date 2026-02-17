import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Search } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CategoryRow from "@/components/CategoryRow";
import XPBar from "@/components/XPBar";
import DrinkCard from "@/components/DrinkCard";
import AdPlaceholder from "@/components/AdPlaceholder";
import Footer from "@/components/Footer";
import { categories, getDrinksByCategory, searchDrinks } from "@/data/drinks";

export default function Index() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const results = query.length >= 2 ? searchDrinks(query) : [];

  return (
    <>
      <Helmet>
        <title>Drinks & Company - Receitas de Drinks e Coquetéis Profissionais</title>
        <meta name="description" content="Descubra receitas autênticas de drinks e coquetéis profissionais. Aprenda técnicas de bartenders, mixologia e faça os melhores cocktails em casa." />
        <link rel="canonical" href="https://drinkseco.lovable.app/" />
      </Helmet>
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

        <AdPlaceholder position="header" />

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
            {categories.map((cat, i) => (
              <div key={cat}>
                <CategoryRow title={cat} drinks={getDrinksByCategory(cat)} />
                {i === 2 && <AdPlaceholder position="in-content" />}
                {i === 5 && <AdPlaceholder position="native" />}
              </div>
            ))}
          </div>
        )}

        <AdPlaceholder position="footer" />
        <Footer />
      </div>
    </>
  );
}
