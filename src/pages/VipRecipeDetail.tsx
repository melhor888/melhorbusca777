import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Crown, Clock, ChefHat, Wine, Lightbulb, Lock, ShoppingCart, Heart, Share2 } from "lucide-react";
import { getVipDrinkById, getVipChefTip } from "@/data/vipDrinks";
import { isVipUnlocked } from "@/utils/vipKeys";
import VipTrialBanner from "@/components/VipTrialBanner";
import { useEffect, useState } from "react";
import { getVipDrinkImage } from "@/data/vipDrinkImages";
import { useShoppingList } from "@/hooks/useShoppingList";
import { useFavorites } from "@/hooks/useFavorites";

const difficultyColor: Record<string, string> = {
  "Fácil": "text-green-400",
  "Médio": "text-yellow-400",
  "Avançado": "text-red-400",
};

export default function VipRecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [unlocked, setUnlocked] = useState(false);
  const { isInList, toggleDrink } = useShoppingList();
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    setUnlocked(isVipUnlocked());
  }, [id]);

  const drink = getVipDrinkById(id || "");
  const chefTip = drink ? getVipChefTip(drink.id) : null;
  const drinkImage = drink ? getVipDrinkImage(drink.id, drink.category) : "";

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

  if (!drink) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <p className="text-muted-foreground">Receita não encontrada.</p>
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
        <title>{drink.name} - Receita VIP | Drink Quest</title>
        <meta name="description" content={drink.description.slice(0, 155)} />
      </Helmet>
      <div className="min-h-screen pb-24">
        {/* Hero Image */}
        {drinkImage && (
          <div className="relative overflow-hidden">
            <img
              src={drinkImage}
              alt={drink.name}
              className="w-full h-[360px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 z-10">
              <button
                onClick={(e) => { e.stopPropagation(); e.preventDefault(); navigate(-1); }}
                className="w-10 h-10 rounded-full bg-background/60 backdrop-blur flex items-center justify-center cursor-pointer z-30"
                aria-label="Voltar"
              >
                <ArrowLeft size={20} className="text-foreground" />
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleDrink(drink.id)}
                  className="w-10 h-10 rounded-full bg-background/60 backdrop-blur flex items-center justify-center"
                >
                  <ShoppingCart
                    size={20}
                    className={isInList(drink.id) ? "text-green-400 fill-green-400/20" : "text-foreground"}
                  />
                </button>
                <button
                  onClick={() => toggleFavorite(drink.id)}
                  className="w-10 h-10 rounded-full bg-background/60 backdrop-blur flex items-center justify-center"
                >
                  <Heart
                    size={20}
                    className={isFavorite(drink.id) ? "text-accent fill-accent" : "text-foreground"}
                  />
                </button>
                <div className="flex items-center gap-1 bg-yellow-500/20 backdrop-blur px-2 py-1 rounded-full self-center">
                  <Crown size={12} className="text-yellow-500" />
                  <span className="text-[10px] font-bold text-yellow-500">VIP</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
              <h1 className="text-2xl lg:text-3xl font-display font-bold text-foreground leading-tight">
                {drink.name}
              </h1>
              <div className="flex items-center gap-3 mt-2">
                <span className="flex items-center gap-1 text-muted-foreground text-xs">
                  <Clock size={12} />
                  {drink.time}
                </span>
                <span className={`flex items-center gap-1 text-xs font-semibold ${difficultyColor[drink.difficulty]}`}>
                  <ChefHat size={12} />
                  {drink.difficulty}
                </span>
                <span className="text-xs text-yellow-500 font-medium">{drink.category}</span>
              </div>
            </div>
          </div>
        )}

        {/* Fallback header if no image */}
        {!drinkImage && (
          <div className="pt-4 px-4 lg:px-6 mb-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(-1)}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center"
              >
                <ArrowLeft size={20} className="text-foreground" />
              </button>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h1 className="text-xl lg:text-2xl font-display font-bold text-foreground truncate">
                    {drink.name}
                  </h1>
                  <Crown size={18} className="text-yellow-500 flex-shrink-0" />
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1 text-muted-foreground text-xs">
                    <Clock size={12} />
                    {drink.time}
                  </span>
                  <span className={`flex items-center gap-1 text-xs font-semibold ${difficultyColor[drink.difficulty]}`}>
                    <ChefHat size={12} />
                    {drink.difficulty}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="px-4 lg:px-6 max-w-2xl mx-auto mt-6">
          {/* VIP Description */}
          <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Wine size={16} className="text-yellow-500" />
              <span className="text-sm font-semibold text-foreground">Sobre este drink</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{drink.description}</p>
          </div>

          {/* Chef Tips - Moved up for prominence */}
          {chefTip && (
            <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 p-4 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center">
                  <Lightbulb size={16} className="text-white" />
                </div>
                <div>
                  <span className="text-sm font-bold text-foreground">Dica do Chef</span>
                  <p className="text-[10px] text-yellow-500 font-semibold uppercase tracking-wider">Exclusivo VIP</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold text-xs mt-0.5">🥂</span>
                  <div>
                    <span className="font-semibold text-foreground">Copo ideal:</span>
                    <span className="text-muted-foreground ml-1">{chefTip.glass}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold text-xs mt-0.5">🧊</span>
                  <div>
                    <span className="font-semibold text-foreground">Como servir:</span>
                    <span className="text-muted-foreground ml-1">{chefTip.serve}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold text-xs mt-0.5">✨</span>
                  <div>
                    <span className="font-semibold text-foreground">Segredo do bartender:</span>
                    <span className="text-muted-foreground ml-1">{chefTip.tip}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Ingredients */}
          <div className="mb-6">
            <h2 className="font-display font-bold text-foreground text-lg mb-3">Ingredientes</h2>
            <ul className="space-y-2">
              {drink.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0" />
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div className="mb-6">
            <h2 className="font-display font-bold text-foreground text-lg mb-3">Modo de Preparo</h2>
            <ol className="space-y-3">
              {drink.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
