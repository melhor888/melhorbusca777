import { useState, useMemo } from "react";
import ListingCard from "@/components/ListingCard";
import FilterBar from "@/components/FilterBar";
import { sampleProperties, propertyTypes } from "@/data/listings";

const propertyTypeLabels: Record<string, string> = {
  apartment: "Apartamento",
  house: "Casa",
  land: "Terreno",
  commercial: "Comercial",
};

export default function PropertiesPage() {
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);
  const [location, setLocation] = useState("");
  const [propType, setPropType] = useState("");
  const [minBedrooms, setMinBedrooms] = useState(0);

  const filtered = useMemo(() => {
    return sampleProperties.filter((p) => {
      const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
      const matchMinPrice = !priceRange[0] || p.price >= priceRange[0];
      const matchMaxPrice = !priceRange[1] || p.price <= priceRange[1];
      const matchLocation = !location || p.location.toLowerCase().includes(location.toLowerCase()) || p.neighborhood.toLowerCase().includes(location.toLowerCase());
      const matchType = !propType || p.propertyType === propType;
      const matchBedrooms = !minBedrooms || p.bedrooms >= minBedrooms;
      return matchSearch && matchMinPrice && matchMaxPrice && matchLocation && matchType && matchBedrooms;
    });
  }, [search, priceRange, location, propType, minBedrooms]);

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <h1 className="font-display font-bold text-3xl text-foreground mb-6">Imóveis à Venda</h1>

      <FilterBar
        search={search} onSearchChange={setSearch}
        priceRange={priceRange} onPriceRangeChange={setPriceRange}
        location={location} onLocationChange={setLocation}
      >
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Tipo</label>
          <select value={propType} onChange={(e) => setPropType(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
            <option value="">Todos</option>
            {propertyTypes.map((t) => <option key={t} value={t}>{propertyTypeLabels[t]}</option>)}
          </select>
        </div>
      </FilterBar>

      <div className="flex gap-3 mt-4 flex-wrap">
        <span className="text-xs text-muted-foreground flex items-center">Quartos:</span>
        {[1, 2, 3, 4].map((n) => (
          <button key={n} onClick={() => setMinBedrooms(minBedrooms === n ? 0 : n)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${minBedrooms === n ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
            {n}+
          </button>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-sm text-muted-foreground mb-4">{filtered.length} resultado(s)</p>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => <ListingCard key={p.id} listing={p} />)}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg">Nenhum imóvel encontrado</p>
            <p className="text-sm mt-1">Tente ajustar os filtros</p>
          </div>
        )}
      </div>
    </div>
  );
}
