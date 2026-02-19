import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { drinks } from "@/data/drinks";
import { getDrinkImage } from "@/data/drinkImages";
import { Play } from "lucide-react";

export default function HeroBanner() {
  const featured = useMemo(() => drinks[Math.floor(Math.random() * drinks.length)], []);

  const navigate = useNavigate();

  return (
    <div className="relative h-[420px] lg:h-[500px] w-full mb-6">
      <img
        src={getDrinkImage(featured.image)}
        alt={featured.name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 lg:max-w-3xl">
        <span className="text-primary text-xs font-semibold tracking-widest uppercase">
          Destaque
        </span>
        <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mt-1">
          {featured.name}
        </h1>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {featured.ingredients.slice(0, 3).join(" · ")}
        </p>
        <button
          onClick={() => navigate(`/recipe/${featured.id}`)}
          className="mt-4 flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm transition-transform hover:scale-105 active:scale-95"
        >
          <Play size={16} fill="currentColor" />
          Ver Receita
        </button>
      </div>
    </div>
  );
}
