import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Crown, Clock, ChefHat, Lock, Search, X } from "lucide-react";
import { getVipDrinksByCategory } from "@/data/vipDrinks";
import { isVipUnlocked } from "@/utils/vipKeys";
import VipTrialBanner from "@/components/VipTrialBanner";
import VipHeroBanner from "@/components/VipHeroBanner";
import { useEffect, useState, useMemo } from "react";
import { getVipDrinkImage } from "@/data/vipDrinkImages";
import { Input } from "@/components/ui/input";

const difficultyColor: Record<string, string> = {
  "Fácil": "text-green-400",
  "Médio": "text-yellow-400",
  "Avançado": "text-red-400",
};

const categoryHeroImages: Record<string, string> = {
  "receitas-secretas": "/images/vip-hero-receitas-secretas.jpg",
  "masterclass-tecnicas": "/images/vip-hero-masterclass.jpg",
  "harmonizacao-sake": "/images/vip-hero-harmonizacao.jpg",
  "cardapios-completos": "/images/vip-hero-cardapios.jpg",
  "receitas-exclusivas": "/images/vip-hero-receitas-secretas.jpg",
};

const categoryNameKeys: Record<string, string> = {
  "receitas-secretas": "catNameSecretRecipes",
  "masterclass-tecnicas": "catNameMasterclass",
  "harmonizacao-sake": "catNameDrinks",
  "cardapios-completos": "catNameMenus",
  "receitas-exclusivas": "catNameExclusive",
};

const categorySubKeys: Record<string, string> = {
  "receitas-secretas": "catSubSecretRecipes",
  "masterclass-tecnicas": "catSubMasterclass",
  "harmonizacao-sake": "catSubDrinks",
  "cardapios-completos": "catSubMenus",
  "receitas-exclusivas": "catSubExclusive",
};

export default function VipCategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [unlocked, setUnlocked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setUnlocked(isVipUnlocked());
  }, [slug]);

  useEffect(() => {
    setSearchQuery("");
  }, [slug]);

  const categoryNameKey = categoryNameKeys[slug || ""];
  const categoryName = categoryNameKey ? t(`vip.${categoryNameKey}`) : "";
  const categorySubKey = categorySubKeys[slug || ""];
  const subtitle = categorySubKey ? t(`vip.${categorySubKey}`) : "";

  // Still need the PT name for data lookup
  const categoryNamesPT: Record<string, string> = {
    "receitas-secretas": "Receitas Secretas do Chef",
    "masterclass-tecnicas": "Masterclass de Técnicas",
    "harmonizacao-sake": "Harmonização Sake & Drinks",
    "cardapios-completos": "Cardápios Completos",
    "receitas-exclusivas": "Receitas Exclusivas Premium",
  };
  const ptName = categoryNamesPT[slug || ""] || "";

  const allDrinks = slug ? getVipDrinksByCategory(slug).concat(
    ptName ? getVipDrinksByCategory(ptName).filter(d => !getVipDrinksByCategory(slug).some(s => s.id === d.id)) : []
  ) : [];
  const heroImage = categoryHeroImages[slug || ""];

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
        <p className="text-muted-foreground text-center">{t("vip.unlockVip")}</p>
        <Link to="/vip" className="text-yellow-500 font-semibold text-sm hover:underline">
          {t("vip.goToVip")}
        </Link>
      </div>
    );
  }

  if (!categoryName || allDrinks.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <Crown size={48} className="text-yellow-500" />
        <p className="text-muted-foreground text-center">{t("vip.comingSoon")}</p>
        <Link to="/vip" className="text-yellow-500 font-semibold text-sm hover:underline">
          {t("vip.backToVip")}
        </Link>
      </div>
    );
  }

  const showHeroBanner = slug === "receitas-exclusivas" && allDrinks.length >= 4;

  return (
    <>
      <VipTrialBanner />
      <Helmet>
        <title>{categoryName} VIP | Mexi Food XP</title>
        <meta name="description" content={`${drinks.length} ${t("vip.exclusiveRecipesCount", { count: drinks.length })}.`} />
      </Helmet>
      <div className="min-h-screen pb-24">
        {showHeroBanner ? (
          <>
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); e.preventDefault(); navigate("/vip"); }}
                className="absolute top-4 left-4 z-30 w-9 h-9 rounded-full bg-background/60 backdrop-blur flex items-center justify-center cursor-pointer"
                aria-label={t("common.back")}
              >
                <ArrowLeft size={16} className="text-foreground" />
              </button>
              <VipHeroBanner drinks={allDrinks} count={10} />
            </div>
          </>
        ) : (
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

            <button
              onClick={(e) => { e.stopPropagation(); e.preventDefault(); navigate("/vip"); }}
              className="absolute top-4 left-4 z-30 w-9 h-9 rounded-full bg-background/60 backdrop-blur flex items-center justify-center cursor-pointer"
              aria-label={t("common.back")}
            >
              <ArrowLeft size={16} className="text-foreground" />
            </button>

            <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-10 lg:max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Crown size={14} className="text-yellow-500" />
                <span className="text-yellow-500 text-xs font-semibold tracking-widest uppercase">
                  {t("vip.exclusive")}
                </span>
              </div>
              <h1 className="text-2xl lg:text-4xl font-display font-bold text-foreground leading-tight">
                {categoryName}
              </h1>
              <p className="text-sm text-muted-foreground mt-2 max-w-md">
                {subtitle}
              </p>
              <p className="text-xs text-yellow-500/80 mt-2 font-semibold">
                {t("vip.exclusiveRecipesCount", { count: allDrinks.length })}
              </p>
            </div>
          </div>
        )}

        {/* Search bar */}
        <div className="px-4 lg:px-6 py-4 sticky top-0 z-20 bg-background/80 backdrop-blur-lg border-b border-border/30">
          <div className="relative max-w-md mx-auto">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t("vip.searchIn", { name: categoryName })}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-9 h-10 bg-card border-yellow-500/30 focus-visible:ring-yellow-500/50 text-sm rounded-full"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label={t("search.clear")}
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
              {t("vip.noResultsFor", { query: searchQuery })}
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4">
              {drinks.map((drink, i) => {
                const image = getVipDrinkImage(drink.id, drink.category);
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
