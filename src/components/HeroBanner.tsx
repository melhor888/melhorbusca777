import { useMemo, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { drinks } from "@/data/drinks";
import { getDrinkImage } from "@/data/drinkImages";
import { Play } from "lucide-react";

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const INTERVAL = 5000;

export default function HeroBanner() {
  const queue = useMemo(() => shuffleArray(drinks).slice(0, 8), []);
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const featured = queue[index];
  const navigate = useNavigate();

  const advance = useCallback(() => {
    setFading(true);
    setTimeout(() => {
      setIndex((i) => (i + 1) % queue.length);
      setFading(false);
    }, 400);
  }, [queue.length]);

  useEffect(() => {
    const id = setInterval(advance, INTERVAL);
    return () => clearInterval(id);
  }, [advance]);

  return (
    <div className="relative h-[420px] lg:h-[500px] w-full mb-6 overflow-hidden">
      <img
        src={getDrinkImage(featured.image)}
        alt={featured.name}
        className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${fading ? "opacity-0" : "opacity-100"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className={`absolute bottom-0 left-0 right-0 p-6 lg:p-12 lg:max-w-3xl transition-all duration-500 ${fading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
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
      {/* Dots */}
      <div className="absolute bottom-3 right-4 flex gap-1.5">
        {queue.map((_, i) => (
          <button
            key={i}
            onClick={() => { setFading(true); setTimeout(() => { setIndex(i); setFading(false); }, 400); }}
            className={`w-2 h-2 rounded-full transition-all ${i === index ? "bg-primary w-4" : "bg-muted-foreground/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
