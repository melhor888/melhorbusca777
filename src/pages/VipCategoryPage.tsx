import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Crown, Clock, ChefHat, Lock, Search, X } from "lucide-react";
import { getVipDrinksByCategory } from "@/data/vipDrinks";
import { isVipUnlocked } from "@/utils/vipKeys";
import VipTrialBanner from "@/components/VipTrialBanner";
import { useEffect, useState, useMemo } from "react";
import { getVipDrinkImage } from "@/data/vipDrinkImages";
import { Input } from "@/components/ui/input";

import heroReceitasSecretas from "@/assets/vip/hero-receitas-secretas.jpg";
import heroMasterclassTecnicas from "@/assets/vip/hero-masterclass-tecnicas.jpg";
import heroHarmonizacaoSake from "@/assets/vip/hero-harmonizacao-sake.jpg";
import heroCardapiosCompletos from "@/assets/vip/hero-cardapios-completos.jpg";

// Dish images for Receitas Secretas do Chef
import imgTeppanyaki from "@/assets/dishes/teppanyaki.jpg";
import imgSashimiMisto from "@/assets/dishes/sashimi-misto.jpg";
import imgSushiMisto from "@/assets/dishes/sushi-misto.jpg";
import imgUnadon from "@/assets/dishes/unadon.jpg";
import imgSukiyaki from "@/assets/dishes/sukiyaki.jpg";
import imgRamenTonkotsu from "@/assets/dishes/ramen-tonkotsu.jpg";
import imgTempura from "@/assets/dishes/tempura-mista.jpg";
import imgSobaFria from "@/assets/dishes/soba-fria.jpg";
import imgMatchaCheesecake from "@/assets/dishes/matcha-cheesecake.jpg";
import imgChirashi from "@/assets/dishes/chirashi.jpg";

// Dish images for Masterclass de Técnicas
import imgKaraage from "@/assets/dishes/karaage.jpg";
import imgMissoshiru from "@/assets/dishes/missoshiru.jpg";
import imgNigiriSalmao from "@/assets/dishes/nigiri-salmao.jpg";
import imgOnigiri from "@/assets/dishes/onigiri.jpg";
import imgYakitori from "@/assets/dishes/yakitori.jpg";
import imgNimonoKabocha from "@/assets/dishes/nimono-kabocha.jpg";
import imgTamagoyaki from "@/assets/dishes/tamagoyaki.jpg";
import imgNatto from "@/assets/dishes/natto.jpg";
import imgSunomono from "@/assets/dishes/sunomono.jpg";
import imgEdamame from "@/assets/dishes/edamame.jpg";

// Dish images for Harmonização Sake & Drinks
import imgGyoza from "@/assets/dishes/gyoza.jpg";
import imgShabuShabu from "@/assets/dishes/shabu-shabu.jpg";
import imgMatchaParfait from "@/assets/dishes/matcha-parfait.jpg";
import imgMochi from "@/assets/dishes/mochi.jpg";
import imgOkonomiyaki from "@/assets/dishes/okonomiyaki.jpg";
import imgTakoyaki from "@/assets/dishes/takoyaki.jpg";

const receitasSecretasImages: Record<string, string> = {
  "wagyu-a5-teppanyaki": imgTeppanyaki,
  "kaiseki-sakizuke": imgSashimiMisto,
  "omakase-sushi-supreme": imgSushiMisto,
  "fugu-sashimi-tessa": imgChirashi,
  "unagi-kabayaki-artesanal": imgUnadon,
  "sukiyaki-imperial": imgSukiyaki,
  "ramen-tonkotsu-48h": imgRamenTonkotsu,
  "tempura-edomae": imgTempura,
  "soba-teuchi": imgSobaFria,
  "matcha-kaiseki-dessert": imgMatchaCheesecake,
};

const masterclassTecnicasImages: Record<string, string> = {
  "mt-afiar-facas-japonesas": imgKaraage,
  "mt-dashi-perfeito": imgMissoshiru,
  "mt-corte-sashimi": imgSashimiMisto,
  "mt-tecnica-tempura": imgTempura,
  "mt-arroz-shari": imgNigiriSalmao,
  "mt-katsuramuki": imgSunomono,
  "mt-nimono-tecnica": imgNimonoKabocha,
  "mt-yakimono-grelhados": imgYakitori,
  "mt-fermentacao-japonesa": imgNatto,
  "mt-arte-bento": imgOnigiri,
};

const harmonizacaoSakeImages: Record<string, string> = {
  "hs-junmai-daiginjo": imgSashimiMisto,
  "hs-nigori-yakitori": imgYakitori,
  "hs-shochu-izakaya": imgGyoza,
  "hs-whisky-japones": imgTeppanyaki,
  "hs-umeshu-sobremesa": imgMochi,
  "hs-sparkling-sake-tempura": imgTempura,
  "hs-sake-quente-nabe": imgShabuShabu,
  "hs-cocktail-matcha-gin": imgEdamame,
  "hs-awamori-okinawa": imgOkonomiyaki,
  "hs-sake-queijo": imgTakoyaki,
};

const difficultyColor: Record<string, string> = {
  "Fácil": "text-green-400",
  "Médio": "text-yellow-400",
  "Avançado": "text-red-400",
};

const categoryNames: Record<string, string> = {
  "receitas-secretas": "Receitas Secretas do Chef",
  "masterclass-tecnicas": "Masterclass de Técnicas",
  "harmonizacao-sake": "Harmonização Sake & Drinks",
  "cardapios-completos": "Cardápios Completos",
};

const categoryHeroImages: Record<string, string> = {
  "receitas-secretas": heroReceitasSecretas,
  "masterclass-tecnicas": heroMasterclassTecnicas,
  "harmonizacao-sake": heroHarmonizacaoSake,
  "cardapios-completos": heroCardapiosCompletos,
};

const categorySubtitles: Record<string, string> = {
  "receitas-secretas": "Wagyu A5, Fugu, Kaiseki, Omakase — receitas que só chefs dominam",
  "masterclass-tecnicas": "Afiar facas, corte sashimi, dashi perfeito, arte do tempurá",
  "harmonizacao-sake": "Guia de harmonização: sakê, shochu, whisky japonês com cada prato",
  "cardapios-completos": "Menus completos: Kaiseki, Izakaya, Hanami, Réveillon Japonês",
};

export default function VipCategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [unlocked, setUnlocked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setUnlocked(isVipUnlocked());
  }, [slug]);

  useEffect(() => {
    setSearchQuery("");
  }, [slug]);

  const categoryName = categoryNames[slug || ""] || "";
  const allDrinks = categoryName ? getVipDrinksByCategory(categoryName) : [];
  const heroImage = categoryHeroImages[slug || ""];
  const subtitle = categorySubtitles[slug || ""] || "";

  const drinks = useMemo(() => {
    if (!searchQuery.trim()) return allDrinks;
    const q = searchQuery.toLowerCase().trim();
    return allDrinks.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.ingredients.some(ing => ing.toLowerCase().includes(q))
    );
  }, [allDrinks, searchQuery]);

  if (!unlocked) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <Lock size={48} className="text-yellow-500" />
        <p className="text-muted-foreground text-center">Desbloqueie a área VIP para acessar este conteúdo.</p>
        <Link to="/vip" className="text-yellow-500 font-semibold text-sm hover:underline">
          Ir para a Área VIP →
        </Link>
      </div>
    );
  }

  if (!categoryName || allDrinks.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <Crown size={48} className="text-yellow-500" />
        <p className="text-muted-foreground text-center">Categoria em breve! Estamos preparando receitas exclusivas.</p>
        <Link to="/vip" className="text-yellow-500 font-semibold text-sm hover:underline">
          ← Voltar para VIP
        </Link>
      </div>
    );
  }

  return (
    <>
      <VipTrialBanner />
      <Helmet>
        <title>{categoryName} VIP | Nihon Food</title>
        <meta name="description" content={`${drinks.length} receitas VIP exclusivas de ${categoryName}.`} />
      </Helmet>
      <div className="min-h-screen pb-24">
        {/* Hero Banner */}
        <div className="relative h-[320px] lg:h-[420px] w-full overflow-hidden">
          {heroImage && (
            <img
              src={heroImage}
              alt={categoryName}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

          {/* Back button */}
          <button
            onClick={(e) => { e.stopPropagation(); e.preventDefault(); navigate("/vip"); }}
            className="absolute top-4 left-4 z-30 w-9 h-9 rounded-full bg-background/60 backdrop-blur flex items-center justify-center cursor-pointer"
            aria-label="Voltar"
          >
            <ArrowLeft size={16} className="text-foreground" />
          </button>

          {/* Hero content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-10 lg:max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Crown size={14} className="text-yellow-500" />
              <span className="text-yellow-500 text-xs font-semibold tracking-widest uppercase">
                VIP · Exclusivo
              </span>
            </div>
            <h1 className="text-2xl lg:text-4xl font-display font-bold text-foreground leading-tight">
              {categoryName}
            </h1>
            <p className="text-sm text-muted-foreground mt-2 max-w-md">
              {subtitle}
            </p>
            <p className="text-xs text-yellow-500/80 mt-2 font-semibold">
              {allDrinks.length} receitas exclusivas
            </p>
          </div>
        </div>

        {/* Search bar */}
        <div className="px-4 lg:px-6 py-4 sticky top-0 z-20 bg-background/80 backdrop-blur-lg border-b border-border/30">
          <div className="relative max-w-md mx-auto">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder={`Buscar em ${categoryName}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-9 h-10 bg-card border-yellow-500/30 focus-visible:ring-yellow-500/50 text-sm rounded-full"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Limpar busca"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="px-4 lg:px-6 mt-4">
          {drinks.length === 0 && searchQuery ? (
            <p className="text-muted-foreground text-sm text-center py-8">
              Nenhuma receita encontrada para "{searchQuery}"
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4">
              {drinks.map((drink, i) => {
                const image = receitasSecretasImages[drink.id] || masterclassTecnicasImages[drink.id] || harmonizacaoSakeImages[drink.id] || getVipDrinkImage(drink.id, drink.category);
                return (
                  <button
                    key={drink.id}
                    onClick={() => navigate(`/vip/recipe/${drink.id}`)}
                    className="relative rounded-lg overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97] w-full h-[220px] lg:h-[280px] animate-fade-in text-left"
                    style={{ animationDelay: `${i * 30}ms` }}
                  >
                    {image ? (
                      <img
                        src={image}
                        alt={drink.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/40 to-amber-950/60" />
                    )}
                    <div className="absolute inset-0 hero-overlay" />
                    <div className="absolute top-2 right-2 z-10">
                      <Crown size={14} className="text-yellow-500" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="font-display font-bold text-foreground leading-tight text-sm">
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
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
