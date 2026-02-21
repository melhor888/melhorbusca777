import { useMemo, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { dishes } from "@/data/dishes";
import { getDishImage } from "@/data/dishImages";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

function randomShuffle<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const INTERVAL = 6000;

export default function QuizHeroBanner() {
  const queue = useMemo(() => randomShuffle(dishes).slice(0, 10), []);
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const navigate = useNavigate();

  const featured = queue[index];

  const goTo = useCallback(
    (next: number) => {
      if (fading) return;
      setFading(true);
      setTimeout(() => {
        setIndex(next);
        setFading(false);
      }, 400);
    },
    [fading]
  );

  const advance = useCallback(() => {
    goTo((index + 1) % queue.length);
  }, [index, goTo, queue.length]);

  const prev = useCallback(() => {
    goTo((index - 1 + queue.length) % queue.length);
  }, [index, goTo, queue.length]);

  useEffect(() => {
    const id = setInterval(advance, INTERVAL);
    return () => clearInterval(id);
  }, [advance]);

  // Progress bar
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / INTERVAL) * 100, 100));
      if (elapsed < INTERVAL) requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [index]);

  const description =
    featured.ingredients.slice(0, 4).join(" · ") +
    ` · ${featured.difficulty}`;

  return (
    <div className="relative -mx-4 mb-6 overflow-hidden rounded-b-3xl group">
      <div className="relative h-[340px] lg:h-[420px] w-full">
        <img
          src={getDishImage(featured.image)}
          alt={featured.name}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ${
            fading ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
        />

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />

        {/* Content */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-6 lg:p-10 lg:max-w-xl transition-all duration-500 ${
            fading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
          }`}
        >
          <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
            {featured.category}
          </span>

          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground leading-tight mt-1">
            {featured.name}
          </h2>

          <p className="text-muted-foreground text-sm mt-2 line-clamp-2 max-w-md leading-relaxed">
            {description}
          </p>

          <button
            onClick={() => navigate(`/recipe/${featured.id}`)}
            className="mt-4 flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <Play size={16} fill="currentColor" />
            Ver Receita
          </button>
        </div>

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/80 z-10"
        >
          <ChevronLeft size={20} className="text-foreground" />
        </button>
        <button
          onClick={advance}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/80 z-10"
        >
          <ChevronRight size={20} className="text-foreground" />
        </button>

        {/* Dots + progress */}
        <div className="absolute bottom-3 right-4 flex items-center gap-2">
          {queue.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className="relative">
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 h-2 bg-primary"
                    : "w-2 h-2 bg-muted-foreground/40 hover:bg-muted-foreground/60"
                }`}
              />
              {i === index && (
                <span
                  className="absolute inset-0 rounded-full bg-primary/40"
                  style={{ width: `${progress}%`, maxWidth: "100%" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
