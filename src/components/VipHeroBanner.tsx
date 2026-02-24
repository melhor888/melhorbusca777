import { useMemo, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Play, Crown } from "lucide-react";
import { VipDrink } from "@/data/vipDrinks/types";
import { getVipDrinkImage } from "@/data/vipDrinkImages";

const INTERVAL = 6000;

interface VipHeroBannerProps {
  drinks: VipDrink[];
  count?: number;
}

export default function VipHeroBanner({ drinks, count = 8 }: VipHeroBannerProps) {
  const { t } = useTranslation();
  const queue = useMemo(() => {
    const shuffled = [...drinks].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }, [drinks, count]);

  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const navigate = useNavigate();

  const featured = queue[index];

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

  if (!featured) return null;

  const image = getVipDrinkImage(featured.id, featured.category);

  return (
    <div className="relative h-[340px] lg:h-[420px] w-full mb-6 overflow-hidden">
      <img
        src={image}
        alt={featured.name}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${fading ? "opacity-0" : "opacity-100"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />

      <div
        className={`absolute bottom-0 left-0 right-0 p-5 lg:p-10 lg:max-w-2xl transition-all duration-500 ${
          fading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="flex items-center gap-2 mb-1">
          <Crown size={14} className="text-yellow-500" />
          <span className="text-yellow-500 text-xs font-semibold tracking-widest uppercase">
            {t("vip.highlight")}
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight">
          {featured.name}
        </h2>

        <p className="text-sm text-muted-foreground mt-2 line-clamp-2 max-w-md">
          {featured.description}
        </p>

        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={() => navigate(`/vip/recipe/${featured.id}`)}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm transition-transform hover:scale-105 active:scale-95"
          >
            <Play size={16} fill="currentColor" />
            {t("vip.viewRecipe")}
          </button>
          <span className="text-xs text-muted-foreground">
            {featured.difficulty} · {featured.time}
          </span>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 right-4 flex gap-1.5">
        {queue.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setFading(true);
              setTimeout(() => {
                setIndex(i);
                setFading(false);
              }, 400);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              i === index ? "bg-yellow-500 w-4" : "bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
