import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import ListingCard from "@/components/ListingCard";
import { allListings } from "@/data/listings";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    return allListings.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q) ||
        l.location.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <h1 className="font-display font-bold text-3xl text-foreground mb-6">Buscar</h1>

      <div className="relative max-w-xl">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar carros, imóveis, localização..."
          className="w-full pl-11 pr-4 py-3 rounded-xl bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          autoFocus
        />
      </div>

      <div className="mt-8">
        {query.length < 2 ? (
          <p className="text-muted-foreground text-center py-16">Digite pelo menos 2 caracteres para buscar</p>
        ) : results.length > 0 ? (
          <>
            <p className="text-sm text-muted-foreground mb-4">{results.length} resultado(s) para "{query}"</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {results.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        ) : (
          <p className="text-muted-foreground text-center py-16">Nenhum resultado para "{query}"</p>
        )}
      </div>
    </div>
  );
}
