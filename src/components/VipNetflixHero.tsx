import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Crown, Play, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { getVipCategoryHero } from "@/data/vipDrinkImages";

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
    id: "vinho-sangrias",
    title: "Vinho & Sangrias",
    subtitle: "Sangrias, spritzers e vinhos quentes",
    description: "Sangrias clássicas e modernas, vinhos quentes especiados, spritzers refrescantes e criações com vinho tinto, branco e rosé.",
    image: getVipCategoryHero("vinho-sangrias") || "/images/vip-wine-1.jpg",
    cta: "Ver Categoria",
    ctaLink: "/vip/categoria/vinho-sangrias",
  },
  {
    id: "cerveja-beer-cocktails",
    title: "Cerveja & Beer Cocktails",
    subtitle: "Micheladas, Shandys e Radlers",
    description: "Micheladas picantes, Shandys refrescantes, Radlers cítricos e Beer Margaritas que vão mudar sua visão sobre cerveja.",
    image: getVipCategoryHero("cerveja-beer-cocktails") || "/images/vip-beer-1.jpg",
    cta: "Ver Categoria",
    ctaLink: "/vip/categoria/cerveja-beer-cocktails",
  },
  {
    id: "frozen-blended",
    title: "Frozen & Blended",
    subtitle: "Drinks gelados e cremosos",
    description: "Frozen margaritas, frosés, slushies alcoólicos e drinks blended que são perfeitos para dias quentes.",
    image: getVipCategoryHero("frozen-blended") || "/images/vip-frozen-1.jpg",
    cta: "Ver Categoria",
    ctaLink: "/vip/categoria/frozen-blended",
  },
  {
    id: "low-abv-wellness",
    title: "Low ABV & Wellness",
    subtitle: "Drinks leves e saudáveis",
    description: "Spritzes, kombuchas alcoólicas e cocktails com baixo teor alcoólico para quem busca equilíbrio e sabor.",
    image: getVipCategoryHero("low-abv-wellness") || "/images/vip-lowabv-1.jpg",
    cta: "Ver Categoria",
    ctaLink: "/vip/categoria/low-abv-wellness",
  },
  {
    id: "drinks-autor",
    title: "Drinks de Autor",
    subtitle: "Criações exclusivas de bartenders",
    description: "Receitas assinadas por bartenders renomados do mundo todo. Ingredientes inesperados e combinações que surpreendem.",
    image: getVipCategoryHero("drinks-autor") || "/images/vip-autor-1.jpg",
    cta: "Ver Categoria",
    ctaLink: "/vip/categoria/drinks-autor",
  },
  {
    id: "classicos-reinventados",
    title: "Clássicos Reinventados",
    subtitle: "Os favoritos, repaginados",
    description: "Old Fashioned com baunilha, Negroni defumado, Daiquiri molecular. Técnicas modernas em receitas eternas.",
    image: getVipCategoryHero("classicos-reinventados") || "/images/vip-classico-1.jpg",
    cta: "Ver Categoria",
    ctaLink: "/vip/categoria/classicos-reinventados",
  },
  {
    id: "sazonais-festivos",
    title: "Sazonais & Festivos",
    subtitle: "Natal, Carnaval, São João",
    description: "Drinks temáticos para cada época do ano — festas, feriados e celebrações especiais com receitas únicas.",
    image: getVipCategoryHero("sazonais-festivos") || "/images/vip-seasonal-1.jpg",
    cta: "Ver Categoria",
    ctaLink: "/vip/categoria/sazonais-festivos",
  },
  {
    id: "sobremesa-doces",
    title: "Sobremesa & Doces",
    subtitle: "Chocolate, caramelo e licores",
    description: "Cocktails de sobremesa com chocolate, caramelo, sorvete e licores cremosos que substituem a sobremesa.",
    image: getVipCategoryHero("sobremesa-doces") || "/images/vip-dessert-1.jpg",
    cta: "Ver Categoria",
    ctaLink: "/vip/categoria/sobremesa-doces",
  },
  {
    id: "picantes-defumados",
    title: "Picantes & Defumados",
    subtitle: "Mezcal, jalapeño e chili",
    description: "Drinks com mezcal, pimenta, técnicas de defumação e sabores intensos para paladares aventureiros.",
    image: getVipCategoryHero("picantes-defumados") || "/images/vip-spicy-1.jpg",
    cta: "Ver Categoria",
    ctaLink: "/vip/categoria/picantes-defumados",
  },
  {
    id: "cha-infusoes",
    title: "Chá & Infusões",
    subtitle: "Chá gelado alcoólico e matcha",
    description: "Chás gelados alcoólicos, infusões de ervas aromáticas e matcha cocktails sofisticados.",
    image: getVipCategoryHero("cha-infusoes") || "/images/vip-tea-1.jpg",
    cta: "Ver Categoria",
    ctaLink: "/vip/categoria/cha-infusoes",
  },
  {
    id: "masterclass",
    title: "Masterclass Cocktails",
    subtitle: "Técnicas de nível profissional",
    description: "Esferificação, fat-wash, clarificação a leite. Domine as técnicas dos melhores bares do mundo.",
    image: getVipCategoryHero("masterclass-cocktails") || "/images/vip-masterclass-1.jpg",
    cta: "Ver Categoria",
    ctaLink: "/vip/categoria/masterclass",
  },
  {
    id: "volta-ao-mundo",
    title: "Volta ao Mundo",
    subtitle: "Drinks típicos de cada país",
    description: "Viaje pelos sabores do Japão, Peru, Cuba, Itália e dezenas de outros países através dos seus cocktails tradicionais.",
    image: getVipCategoryHero("volta-ao-mundo") || "/images/vip-volta-1.jpg",
    cta: "Ver Categoria",
    ctaLink: "/vip/categoria/volta-ao-mundo",
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

  // Progress bar width
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
      {/* Background image */}
      <div className="relative h-[380px] lg:h-[460px] w-full">
        <img
          src={slide.image}
          alt={slide.title}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ${
            fading ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
        />

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />

        {/* Content */}
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

        {/* Nav arrows */}
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

        {/* Dots + progress */}
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
