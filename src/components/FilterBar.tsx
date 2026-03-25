import { Search } from "lucide-react";

interface FilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  location: string;
  onLocationChange: (value: string) => void;
  children?: React.ReactNode;
}

export default function FilterBar({
  search, onSearchChange,
  priceRange, onPriceRangeChange,
  location, onLocationChange,
  children,
}: FilterBarProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-4 space-y-4">
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Preço mínimo</label>
          <input
            type="number"
            placeholder="R$ 0"
            value={priceRange[0] || ""}
            onChange={(e) => onPriceRangeChange([Number(e.target.value), priceRange[1]])}
            className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Preço máximo</label>
          <input
            type="number"
            placeholder="Sem limite"
            value={priceRange[1] || ""}
            onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
            className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Localização</label>
          <input
            type="text"
            placeholder="Ex: São Paulo"
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        {children && <div>{children}</div>}
      </div>
    </div>
  );
}
