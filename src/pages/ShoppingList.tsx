import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Trash2, Copy, ShoppingCart, X, UtensilsCrossed } from "lucide-react";
import { getDishById } from "@/data/dishes";
import { getDishImage } from "@/data/dishImages";
import { getVipDrinkById } from "@/data/vipDrinks";
import { getVipDrinkImage } from "@/data/vipDrinkImages";
import { useShoppingList } from "@/hooks/useShoppingList";
import { toast } from "sonner";

export default function ShoppingList() {
  const navigate = useNavigate();
  const { drinkIds, toggleDrink, clearList } = useShoppingList();

  const selectedRecipes = useMemo(
    () => drinkIds.map((id) => {
      const dish = getDishById(id);
      if (dish) return { ...dish, isVip: false };
      const vip = getVipDrinkById(id);
      if (vip) return { ...vip, isVip: true };
      return null;
    }).filter(Boolean),
    [drinkIds]
  );

  const consolidatedIngredients = useMemo(() => {
    const map = new Map<string, number>();
    for (const recipe of selectedRecipes) {
      if (!recipe) continue;
      for (const ing of recipe.ingredients) {
        const normalized = ing.toLowerCase().trim();
        map.set(normalized, (map.get(normalized) || 0) + 1);
      }
    }
    return Array.from(map.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([name, count]) => ({ name, count }));
  }, [selectedRecipes]);

  const copyList = () => {
    const text = `🛒 Lista de Compras - Receitas Japonesas XP\n\n${consolidatedIngredients
      .map((i) => `• ${i.name}${i.count > 1 ? ` (x${i.count})` : ""}`)
      .join("\n")}`;
    navigator.clipboard.writeText(text);
    toast.success("Lista copiada!");
  };

  return (
    <>
      <Helmet>
        <title>Lista de Compras | Receitas Japonesas XP</title>
        <meta name="description" content="Monte sua lista de compras com os ingredientes das receitas selecionadas." />
      </Helmet>
      <div className="min-h-screen pb-24">
        {/* Hero Banner */}
        <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <ShoppingCart size={120} className="text-primary" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border/50"
          >
            <ArrowLeft size={20} className="text-foreground" />
          </button>
          {drinkIds.length > 0 && (
            <div className="absolute top-4 right-4 flex gap-2">
              <button onClick={copyList} className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border/50">
                <Copy size={18} className="text-foreground" />
              </button>
              <button onClick={clearList} className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border/50">
                <Trash2 size={18} className="text-destructive" />
              </button>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">Organização</span>
            <h1 className="text-2xl font-display font-bold text-foreground mt-1">Lista de Compras</h1>
            <p className="text-xs text-muted-foreground mt-0.5">
              {selectedRecipes.length > 0
                ? `${selectedRecipes.length} receita${selectedRecipes.length > 1 ? "s" : ""} · ${consolidatedIngredients.length} ingredientes`
                : "Adicione receitas para montar sua lista"}
            </p>
          </div>
        </div>

        {drinkIds.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
            <UtensilsCrossed size={48} className="text-muted-foreground/30 mb-4" />
            <h2 className="font-display font-bold text-foreground text-lg">Nenhuma receita selecionada</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Abra uma receita e toque no ícone 🛒 para adicionar ingredientes à sua lista de compras.
            </p>
            <button
              onClick={() => navigate("/")}
              className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm"
            >
              Explorar Receitas
            </button>
          </div>
        ) : (
          <div className="px-4 lg:px-6 lg:max-w-3xl lg:mx-auto mt-4 space-y-6">
            {/* Selected recipes */}
            <section>
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Receitas Selecionadas</h2>
              <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                {selectedRecipes.map((recipe) => recipe && (
                  <div key={recipe.id} className="relative flex-shrink-0 w-20">
                    <img
                      src={recipe.isVip
                        ? (getVipDrinkImage(recipe.id, recipe.category) || "/placeholder.svg")
                        : getDishImage((recipe as any).image || "")}
                      alt={recipe.name}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                    <button
                      onClick={() => toggleDrink(recipe.id)}
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-destructive flex items-center justify-center"
                    >
                      <X size={12} className="text-destructive-foreground" />
                    </button>
                    <p className="text-[10px] text-center text-foreground mt-1 truncate">{recipe.name}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Consolidated ingredients */}
            <section>
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Ingredientes ({consolidatedIngredients.length})
              </h2>
              <ul className="space-y-2">
                {consolidatedIngredients.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 bg-secondary/50 rounded-lg px-4 py-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-foreground flex-1 capitalize">{item.name}</span>
                    {item.count > 1 && (
                      <span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full">
                        x{item.count}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}
      </div>
    </>
  );
}
