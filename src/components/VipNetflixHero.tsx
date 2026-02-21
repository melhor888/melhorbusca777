import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Crown, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { getDishImage } from "@/data/dishImages";

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  ctaLink: string;
}

const INTERVAL = 7000;

const slides: Slide[] = [
  {
    id: "receitas-secretas",
    title: "Receitas Secretas do Chef",
    subtitle: "Exclusivo VIP",
    description: "Wagyu A5, Fugu, Kaiseki, Omakase — receitas que só chefs com anos de experiência dominam. Aprenda os segredos dos mestres itamae.",
    image: getDishImage("sashimi-misto"),
    cta: "Ver Categoria",
    ctaLink: "/vip/categoria/receitas-secretas",
  },
  {
    id: "masterclass-tecnicas",
    title: "Masterclass de Técnicas",
    subtitle: "Domine a Arte",
    description: "Afiar facas japonesas, corte perfeito de sashimi, dashi fundamental, arte do tempurá — técnicas de nível profissional.",
    image: getDishImage("tempura-mista"),
    cta: "Ver Categoria",
    ctaLink: "/vip/categoria/masterclass-tecnicas",
  },
  {
    id: "harmonizacao-sake",
    title: "Harmonização Sake & Drinks",
    subtitle: "Sabores Perfeitos",
    description: "Guia completo de harmonização: sakê, shochu, whisky japonês e chás especiais com cada tipo de prato da culinária japonesa.",
    image: getDishImage("sukiyaki"),
    cta: "Ver Categoria",
    ctaLink: "/vip/categoria/harmonizacao-sake",
  },
  {
    id: "cardapios-completos",
    title: "Cardápios Completos",
    subtitle: "Menus Exclusivos",
    description: "Menus completos para ocasiões especiais: Kaiseki, noite de Izakaya, Hanami sob cerejeiras e Réveillon Japonês.",
    image: getDishImage("sushi-misto"),
    cta: "Ver Categoria",
    ctaLink: "/vip/categoria/cardapios-completos",
  },
];

export default function VipNetflixHero() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const navigate = useNavigate();

  const slide = slides[index];

  const goTo = useCallback(
    (next: number) => {
      if (fading) return;
      setFading(true);
      setTimeout(() => {
        setIndex(next);
        setFading(false);
      }, 450);
    },
    [fading]
  );

  const advance = useCallback(() => {
    goTo((index + 1) % slides.length);
  }, [index, goTo]);

  const prev = useCallback(() => {
    goTo((index - 1 + slides.length) % slides.length);
  }, [index, goTo]);

  useEffect(() => {
    const id = setInterval(advance, INTERVAL);
    return () => clearInterval(id);
  }, [advance]);

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

  return (
    <div className="relative -mx-4 mb-8 overflow-hidden rounded-b-3xl group">
      <div className="relative h-[380px] lg:h-[460px] w-full">
        <img
          src={slide.image}
          alt={slide.title}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ${
            fading ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />

        <div
          className={`absolute bottom-0 left-0 right-0 p-6 lg:p-10 lg:max-w-xl transition-all duration-500 ${
            fading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Crown size={16} className="text-yellow-500" />
            <span className="text-yellow-500 text-[10px] font-bold tracking-[0.2em] uppercase">
              {slide.subtitle}
            </span>
          </div>

          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            {slide.title}
          </h2>

          <p className="text-muted-foreground text-sm mt-3 line-clamp-2 max-w-md leading-relaxed">
            {slide.description}
          </p>

          <div className="flex items-center gap-3 mt-5">
            <button
              onClick={() => navigate(slide.ctaLink)}
              className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-600 text-white px-7 py-3 rounded-full font-bold text-sm shadow-lg shadow-yellow-500/30 transition-all hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <Play size={16} fill="currentColor" />
              {slide.cta}
            </button>
          </div>
        </div>

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/80"
        >
          <ChevronLeft size={20} className="text-foreground" />
        </button>
        <button
          onClick={advance}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/80"
        >
          <ChevronRight size={20} className="text-foreground" />
        </button>

        <div className="absolute bottom-3 right-4 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="relative"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 h-2 bg-yellow-500"
                    : "w-2 h-2 bg-muted-foreground/40 hover:bg-muted-foreground/60"
                }`}
              />
              {i === index && (
                <span
                  className="absolute inset-0 rounded-full bg-yellow-300/50"
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
