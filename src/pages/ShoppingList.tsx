import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Trash2, Copy, ShoppingCart, X } from "lucide-react";
import { getDrinkById } from "@/data/drinks";
import { getVipDrinkById } from "@/data/vipDrinks";
import { getDrinkImage } from "@/data/drinkImages";
import { getVipDrinkImage } from "@/data/vipDrinkImages";
import { useShoppingList } from "@/hooks/useShoppingList";
import { toast } from "sonner";

export default function ShoppingList() {
  const navigate = useNavigate();
  const { drinkIds, toggleDrink, clearList } = useShoppingList();

  const selectedDrinks = useMemo(
    () => drinkIds.map((id) => {
      const regular = getDrinkById(id);
      if (regular) return { ...regular, isVip: false };
      const vip = getVipDrinkById(id);
      if (vip) return { ...vip, isVip: true };
      return null;
    }).filter(Boolean),
    [drinkIds]
  );

  const consolidatedIngredients = useMemo(() => {
    const map = new Map<string, number>();
    for (const drink of selectedDrinks) {
      if (!drink) continue;
      for (const ing of drink.ingredients) {
        const normalized = ing.toLowerCase().trim();
        map.set(normalized, (map.get(normalized) || 0) + 1);
      }
    }
    return Array.from(map.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([name, count]) => ({ name, count }));
  }, [selectedDrinks]);

  const copyList = () => {
    const text = `🛒 Lista de Compras - Drink Quest\n\n${consolidatedIngredients
      .map((i) => `• ${i.name}${i.count > 1 ? ` (x${i.count})` : ""}`)
      .join("\n")}`;
    navigator.clipboard.writeText(text);
    toast.success("Lista copiada!");
  };

  return (
    <>
      <Helmet>
        <title>Lista de Compras | Drink Quest</title>
        <meta name="description" content="Monte sua lista de compras com os ingredientes dos drinks selecionados." />
      </Helmet>
      <div className="min-h-screen pb-24">
        {/* Header */}
        <div className="sticky top-0 z-40 glass-card border-b border-border/50 px-4 py-3 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <ArrowLeft size={20} className="text-foreground" />
          </button>
          <div className="flex-1">
            <h1 className="font-display font-bold text-foreground">Lista de Compras</h1>
            <p className="text-xs text-muted-foreground">{selectedDrinks.length} drinks selecionados</p>
          </div>
          {drinkIds.length > 0 && (
            <div className="flex gap-2">
              <button onClick={copyList} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Copy size={18} className="text-foreground" />
              </button>
              <button onClick={clearList} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Trash2 size={18} className="text-red-400" />
              </button>
            </div>
          )}
        </div>

        {drinkIds.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
            <ShoppingCart size={48} className="text-muted-foreground/30 mb-4" />
            <h2 className="font-display font-bold text-foreground text-lg">Nenhum drink selecionado</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Abra uma receita e toque no ícone 🛒 para adicionar drinks à sua lista de compras.
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
            {/* Selected drinks */}
            <section>
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Drinks Selecionados</h2>
              <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                {selectedDrinks.map((drink) => drink && (
                  <div key={drink.id} className="relative flex-shrink-0 w-20">
                    <img
                      src={drink.isVip 
                        ? (getVipDrinkImage(drink.id, drink.category) || "/placeholder.svg")
                        : getDrinkImage((drink as any).image || "")}
                      alt={drink.name}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                    <button
                      onClick={() => toggleDrink(drink.id)}
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center"
                    >
                      <X size={12} className="text-white" />
                    </button>
                    <p className="text-[10px] text-center text-foreground mt-1 truncate">{drink.name}</p>
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
