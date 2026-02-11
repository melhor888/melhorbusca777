import { Drink } from "@/data/drinks";
import DrinkCard from "./DrinkCard";

interface CategoryRowProps {
  title: string;
  drinks: Drink[];
}

export default function CategoryRow({ title, drinks }: CategoryRowProps) {
  if (drinks.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="text-lg font-display font-bold text-foreground px-4 mb-3">
        {title}
      </h2>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4">
        {drinks.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </div>
    </section>
  );
}
