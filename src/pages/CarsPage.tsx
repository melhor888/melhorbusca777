import { useState, useMemo } from "react";
import ListingCard from "@/components/ListingCard";
import FilterBar from "@/components/FilterBar";
import { sampleCars, carBrands, fuelTypes, transmissionTypes } from "@/data/listings";

export default function CarsPage() {
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);
  const [location, setLocation] = useState("");
  const [brand, setBrand] = useState("");
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");

  const filtered = useMemo(() => {
    return sampleCars.filter((car) => {
      const matchSearch = !search || car.title.toLowerCase().includes(search.toLowerCase()) || car.description.toLowerCase().includes(search.toLowerCase());
      const matchMinPrice = !priceRange[0] || car.price >= priceRange[0];
      const matchMaxPrice = !priceRange[1] || car.price <= priceRange[1];
      const matchLocation = !location || car.location.toLowerCase().includes(location.toLowerCase());
      const matchBrand = !brand || car.brand === brand;
      const matchFuel = !fuel || car.fuel === fuel;
      const matchTrans = !transmission || car.transmission === transmission;
      return matchSearch && matchMinPrice && matchMaxPrice && matchLocation && matchBrand && matchFuel && matchTrans;
    });
  }, [search, priceRange, location, brand, fuel, transmission]);

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <h1 className="font-display font-bold text-3xl text-foreground mb-6">Carros à Venda</h1>

      <FilterBar
        search={search} onSearchChange={setSearch}
        priceRange={priceRange} onPriceRangeChange={setPriceRange}
        location={location} onLocationChange={setLocation}
      >
        <div className="space-y-3">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Marca</label>
            <select value={brand} onChange={(e) => setBrand(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
              <option value="">Todas</option>
              {carBrands.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
        </div>
      </FilterBar>

      <div className="flex gap-3 mt-4 flex-wrap">
        {fuelTypes.map((f) => (
          <button key={f} onClick={() => setFuel(fuel === f ? "" : f)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${fuel === f ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
            {f}
          </button>
        ))}
        <span className="text-muted-foreground text-xs flex items-center">|</span>
        {transmissionTypes.map((t) => (
          <button key={t} onClick={() => setTransmission(transmission === t ? "" : t)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${transmission === t ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
            {t}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-sm text-muted-foreground mb-4">{filtered.length} resultado(s)</p>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((car) => <ListingCard key={car.id} listing={car} />)}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg">Nenhum carro encontrado</p>
            <p className="text-sm mt-1">Tente ajustar os filtros</p>
          </div>
        )}
      </div>
    </div>
  );
}
