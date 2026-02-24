import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { getDishById, dishes as allDishes } from "@/data/dishes";
import { getDishImage } from "@/data/dishImages";
import { getChefTip } from "@/data/chefTips";
import { getDishExtra } from "@/data/dishExtras";
import { useFavorites } from "@/hooks/useFavorites";
import { useXP } from "@/hooks/useXP";
import XPToast from "@/components/XPToast";
import SimilarDrinks from "@/components/SimilarDrinks";
import AdBanner from "@/components/AdBanner";
import ShareCard from "@/components/ShareCard";
import { ArrowLeft, Heart, Share2, Clock, ChefHat, UtensilsCrossed, Lightbulb, Zap, ShoppingCart, Image, MapPin, Coins, Sparkles } from "lucide-react";
import { useShoppingList } from "@/hooks/useShoppingList";

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isInList, toggleDrink } = useShoppingList();
  const { addRecipeXP } = useXP();
  const [showXP, setShowXP] = useState(false);
  const [xpGained, setXpGained] = useState(0);
  const [xpMarked, setXpMarked] = useState(false);
  const [showShareCard, setShowShareCard] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (id) {
      const delay = Math.floor(Math.random() * 4000) + 3000;
      timerRef.current = setTimeout(() => {
        const gained = addRecipeXP(id);
        if (gained > 0) {
          setXpGained(gained);
          setShowXP(true);
          setXpMarked(true);
        }
      }, delay);
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }
  }, [id, addRecipeXP]);

  const dish = getDishById(id || "");

  if (!dish) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Receita não encontrada.</p>
      </div>
    );
  }

  const fav = isFavorite(dish.id);
  const inCart = isInList(dish.id);
  const chefTip = getChefTip(dish.id);
  const extra = getDishExtra(dish.id);
  const handleShare = async () => {
    const text = `🍣 ${dish.name}\n\nIngredientes:\n${dish.ingredients.join("\n")}\n\nConfira no Receitas Japonesas XP!`;
    if (navigator.share) {
      await navigator.share({ title: dish.name, text });
    } else {
      await navigator.clipboard.writeText(text);
    }
  };

  const ogDescription = `Aprenda a fazer ${dish.name}: ${dish.ingredients.slice(0, 3).join(", ")}. Receita completa no Receitas Japonesas XP.`;

  return (
    <div className="min-h-screen pb-24">
      <Helmet>
        <title>{dish.name} - Receita Japonesa | Receitas Japonesas XP</title>
        <meta name="description" content={ogDescription} />
      </Helmet>
      <XPToast xp={xpGained} show={showXP} onClose={() => setShowXP(false)} />
      
      <div className="relative h-[360px] lg:h-[480px]">
        <img
          src={getDishImage(dish.image)}
          alt={dish.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        {xpMarked && (
          <div className="absolute top-16 right-4 z-10 animate-fade-in">
            <div className="flex items-center gap-1.5 bg-primary/90 text-primary-foreground rounded-full px-3 py-1.5 shadow-lg">
              <Zap size={14} className="fill-primary-foreground" />
              <span className="text-xs font-bold">XP Ganho</span>
            </div>
          </div>
        )}

        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 z-10">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center"
          >
            <ArrowLeft size={20} className="text-foreground" />
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => toggleDrink(dish.id)}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center"
            >
              <ShoppingCart
                size={20}
                className={inCart ? "text-green-400 fill-green-400/20" : "text-foreground"}
              />
            </button>
            <button
              onClick={() => toggleFavorite(dish.id)}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center"
            >
              <Heart
                size={20}
                className={fav ? "text-primary fill-primary" : "text-foreground"}
              />
            </button>
            <button
              onClick={handleShare}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center"
            >
              <Share2 size={20} className="text-foreground" />
            </button>
          </div>
        </div>

        {showShareCard && <ShareCard drink={dish as any} onClose={() => setShowShareCard(false)} />}

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">
            {dish.category}
          </span>
          <h1 className="text-3xl font-display font-bold text-foreground mt-1">
            {dish.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock size={14} /> {dish.time}
            </span>
            <span className={`flex items-center gap-1 font-semibold ${
              dish.difficulty === "Fácil" ? "text-green-400" : 
              dish.difficulty === "Médio" ? "text-yellow-400" : "text-red-400"
            }`}>
              <ChefHat size={14} /> {dish.difficulty}
            </span>
            {extra?.price && (
              <span className="flex items-center gap-1">
                <Coins size={14} className="text-primary" /> {extra.price}
              </span>
            )}
            {extra?.origin && (
              <span className="flex items-center gap-1">
                <MapPin size={14} className="text-primary" /> {extra.origin}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-8 lg:max-w-3xl lg:mx-auto">
        {dish.description && (
          <section className="glass-card rounded-2xl p-5">
            <p className="text-secondary-foreground text-sm leading-relaxed italic">
              {dish.description}
            </p>
          </section>
        )}

        {extra?.curiosity && (
          <section className="glass-card rounded-2xl p-5 border border-primary/20">
            <div className="flex items-start gap-3">
              <Sparkles size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Curiosidade</p>
                <p className="text-secondary-foreground text-sm leading-relaxed">{extra.curiosity}</p>
              </div>
            </div>
          </section>
        )}

        <section>
          <h2 className="text-lg font-display font-bold text-foreground mb-4">
            Ingredientes
          </h2>
          <ul className="space-y-3">
            {dish.ingredients.map((ingredient, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-secondary-foreground text-sm">
                  {ingredient}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-display font-bold text-foreground mb-4">
            Modo de Preparo
          </h2>
          <ol className="space-y-4">
            {dish.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 text-primary text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-secondary-foreground text-sm pt-0.5 leading-relaxed">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {chefTip && (
          <section className="glass-card rounded-2xl p-5 space-y-4">
            <h2 className="text-lg font-display font-bold text-foreground flex items-center gap-2">
              <ChefHat size={20} className="text-primary" />
              Dica do Chef
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <UtensilsCrossed size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Louça Ideal</p>
                  <p className="text-secondary-foreground text-sm leading-relaxed">{chefTip.glass}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Share2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Como Servir</p>
                  <p className="text-secondary-foreground text-sm leading-relaxed">{chefTip.serve}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Segredo do Chef</p>
                  <p className="text-secondary-foreground text-sm leading-relaxed">{chefTip.tip}</p>
                </div>
              </div>
            </div>
          </section>
        )}
        <AdBanner slot="recipe-bottom" className="mt-4" />

        <SimilarDrinks currentDrink={dish} allDrinks={allDishes} />
      </div>
    </div>
  );
}
