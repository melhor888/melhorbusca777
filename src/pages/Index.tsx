import HeroBanner from "@/components/HeroBanner";
import CategoryRow from "@/components/CategoryRow";
import { categories, getDrinksByCategory } from "@/data/drinks";

export default function Index() {
  return (
    <div className="min-h-screen pb-20">
      <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 flex items-center justify-between bg-gradient-to-b from-background via-background/90 to-transparent">
        <h1 className="text-xl font-display font-bold">
          <span className="text-gradient-gold">Drinks</span>
          <span className="text-muted-foreground"> & Company</span>
        </h1>
      </header>

      <HeroBanner />

      <div className="space-y-2">
        {categories.map((cat) => (
          <CategoryRow
            key={cat}
            title={cat}
            drinks={getDrinksByCategory(cat)}
          />
        ))}
      </div>
    </div>
  );
}
