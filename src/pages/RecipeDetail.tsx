import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback, useRef } from "react";
import { getDrinkById } from "@/data/drinks";
import { getDrinkImage } from "@/data/drinkImages";
import { getChefTip } from "@/data/chefTips";
import { useFavorites } from "@/hooks/useFavorites";
import { useXP } from "@/hooks/useXP";
import XPToast from "@/components/XPToast";
import { ArrowLeft, Heart, Share2, Clock, ChefHat, Wine, Lightbulb, Zap } from "lucide-react";

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { addRecipeXP } = useXP();
  const [showXP, setShowXP] = useState(false);
  const [xpGained, setXpGained] = useState(0);
  const [xpMarked, setXpMarked] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (id) {
      // Random delay between 3-7 seconds
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

  const drink = getDrinkById(id || "");

  if (!drink) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Receita não encontrada.</p>
      </div>
    );
  }

  const fav = isFavorite(drink.id);
  const chefTip = getChefTip(drink.id);
  const handleShare = async () => {
    const text = `🍸 ${drink.name}\n\nIngredientes:\n${drink.ingredients.join("\n")}\n\nConfira no Drinks & Company!`;
    if (navigator.share) {
      await navigator.share({ title: drink.name, text });
    } else {
      await navigator.clipboard.writeText(text);
    }
  };

  return (
    <div className="min-h-screen pb-24">
      <XPToast xp={xpGained} show={showXP} onClose={() => setShowXP(false)} />
      {/* Hero */}
      <div className="relative h-[360px] lg:h-[480px]">
        <img
          src={getDrinkImage(drink.image)}
          alt={drink.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        {/* XP Ganho badge */}
        {xpMarked && (
          <div className="absolute top-16 right-4 z-10 animate-fade-in">
            <div className="flex items-center gap-1.5 bg-primary/90 text-primary-foreground rounded-full px-3 py-1.5 shadow-lg">
              <Zap size={14} className="fill-primary-foreground" />
              <span className="text-xs font-bold">XP Ganho</span>
            </div>
          </div>
        )}

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 z-10">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center"
          >
            <ArrowLeft size={20} className="text-foreground" />
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => toggleFavorite(drink.id)}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center"
            >
              <Heart
                size={20}
                className={fav ? "text-accent fill-accent" : "text-foreground"}
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

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">
            {drink.category}
          </span>
          <h1 className="text-3xl font-display font-bold text-foreground mt-1">
            {drink.name}
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock size={14} /> {drink.time}
            </span>
            <span className={`flex items-center gap-1 font-semibold ${
              drink.difficulty === "Fácil" ? "text-green-400" : 
              drink.difficulty === "Médio" ? "text-yellow-400" : "text-red-400"
            }`}>
              <ChefHat size={14} /> {drink.difficulty}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 mt-6 space-y-8 lg:max-w-3xl lg:mx-auto">
        {/* Ingredients */}
        <section>
          <h2 className="text-lg font-display font-bold text-foreground mb-4">
            Ingredientes
          </h2>
          <ul className="space-y-3">
            {drink.ingredients.map((ingredient, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-secondary-foreground text-sm">
                  {ingredient}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Steps */}
        <section>
          <h2 className="text-lg font-display font-bold text-foreground mb-4">
            Modo de Preparo
          </h2>
          <ol className="space-y-4">
            {drink.steps.map((step, i) => (
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

        {/* Chef Tip */}
        {chefTip && (
          <section className="glass-card rounded-2xl p-5 space-y-4">
            <h2 className="text-lg font-display font-bold text-foreground flex items-center gap-2">
              <ChefHat size={20} className="text-primary" />
              Dica do Chef
            </h2>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Wine size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Copo Ideal</p>
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
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Segredo do Bartender</p>
                  <p className="text-secondary-foreground text-sm leading-relaxed">{chefTip.tip}</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
