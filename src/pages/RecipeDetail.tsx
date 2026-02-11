import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getDrinkById } from "@/data/drinks";
import { getDrinkImage } from "@/data/drinkImages";
import { useFavorites } from "@/hooks/useFavorites";
import { ArrowLeft, Heart, Share2, Clock, ChefHat } from "lucide-react";

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const drink = getDrinkById(id || "");

  if (!drink) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Receita não encontrada.</p>
      </div>
    );
  }

  const fav = isFavorite(drink.id);

  const handleShare = async () => {
    const text = `🍸 ${drink.name}\n\nIngredientes:\n${drink.ingredients.join("\n")}\n\nConfira no Drinks & Company!`;
    if (navigator.share) {
      await navigator.share({ title: drink.name, text });
    } else {
      await navigator.clipboard.writeText(text);
    }
  };

  return (
    <div className="min-h-screen pb-8">
      {/* Hero */}
      <div className="relative h-[360px]">
        <img
          src={getDrinkImage(drink.image)}
          alt={drink.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

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
            <span className="flex items-center gap-1">
              <ChefHat size={14} /> {drink.difficulty}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 mt-6 space-y-8">
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
      </div>
    </div>
  );
}
