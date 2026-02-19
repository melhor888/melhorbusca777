import { useNavigate } from "react-router-dom";
import { Drink } from "@/data/drinks";
import DrinkCard from "./DrinkCard";

interface SimilarDrinksProps {
  currentDrink: Drink;
  allDrinks: Drink[];
}

export default function SimilarDrinks({ currentDrink, allDrinks }: SimilarDrinksProps) {
  const similar = allDrinks
    .filter(
      (d) =>
        d.id !== currentDrink.id &&
        (d.category === currentDrink.category ||
          d.difficulty === currentDrink.difficulty)
    )
    .slice(0, 6);

  if (similar.length === 0) return null;

  return (
    <section className="mt-8">
      <h2 className="text-lg font-display font-bold text-foreground mb-4">
        Drinks Similares
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {similar.map((drink, i) => (
          <div
            key={drink.id}
            className="animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <DrinkCard drink={drink} />
          </div>
        ))}
      </div>
    </section>
  );
}
