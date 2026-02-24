import { Dish } from "@/data/dishes";
import { useTranslation } from "react-i18next";
import DrinkCard from "./DrinkCard";

interface SimilarDrinksProps {
  currentDrink: Dish;
  allDrinks: Dish[];
}

export default function SimilarDrinks({ currentDrink, allDrinks }: SimilarDrinksProps) {
  const { t } = useTranslation();
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
        {t("recipe.similar", "Pratos Similares")}
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
