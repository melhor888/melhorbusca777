import { useNavigate } from "react-router-dom";
import { Drink } from "@/data/drinks";
import { getDrinkImage } from "@/data/drinkImages";
import { Clock, ChefHat } from "lucide-react";

interface DrinkCardProps {
  drink: Drink;
  size?: "small" | "large";
}

export default function DrinkCard({ drink, size = "small" }: DrinkCardProps) {
  const navigate = useNavigate();
  const isLarge = size === "large";

  return (
    <button
      onClick={() => navigate(`/recipe/${drink.id}`)}
      className={`relative flex-shrink-0 rounded-lg overflow-hidden group cursor-pointer ${
        isLarge ? "w-[280px] h-[380px]" : "w-[160px] lg:w-full h-[220px] lg:h-[280px]"
      }`}
    >
      <img
        src={getDrinkImage(drink.image)}
        alt={drink.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <h3
          className={`font-display font-bold text-foreground leading-tight ${
            isLarge ? "text-xl" : "text-sm"
          }`}
        >
          {drink.name}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="flex items-center gap-1 text-muted-foreground text-[10px]">
            <Clock size={10} />
            {drink.time}
          </span>
          <span className="flex items-center gap-1 text-muted-foreground text-[10px]">
            <ChefHat size={10} />
            {drink.difficulty}
          </span>
        </div>
      </div>
    </button>
  );
}
