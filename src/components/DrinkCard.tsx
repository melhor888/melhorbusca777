import { useNavigate } from "react-router-dom";
import { Dish, getSpiceLevel } from "@/data/dishes";
import { getDishImage } from "@/data/dishImages";
import { Clock, ChefHat } from "lucide-react";
import SpiceBadge from "@/components/SpiceBadge";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";

interface DrinkCardProps {
  drink: Dish;
  size?: "small" | "large";
}

const difficultyColor: Record<string, string> = {
  "Fácil": "text-green-400",
  "Médio": "text-yellow-400",
  "Avançado": "text-red-400",
};

export default function DrinkCard({ drink, size = "small" }: DrinkCardProps) {
  const navigate = useNavigate();
  const { localePath } = useLocalizedPath();
  const isLarge = size === "large";
  const spice = getSpiceLevel(drink);

  return (
    <button
      onClick={() => navigate(localePath(`/recipe/${drink.id}`))}
      className={`relative flex-shrink-0 rounded-lg overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97] ${
        isLarge ? "w-[280px] h-[380px]" : "w-full h-[220px] lg:h-[280px]"
      }`}
    >
      <img
        src={getDishImage(drink.image)}
        alt={drink.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 hero-overlay" />

      {/* Spice badge top-right */}
      <div className="absolute top-2 right-2 bg-background/70 backdrop-blur-sm rounded-full px-2 py-1">
        <SpiceBadge level={spice} />
      </div>

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
          <span className={`flex items-center gap-1 text-[10px] font-semibold ${difficultyColor[drink.difficulty] || "text-muted-foreground"}`}>
            <ChefHat size={10} />
            {drink.difficulty}
          </span>
        </div>
      </div>
    </button>
  );
}
