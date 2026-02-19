import { useFavorites } from "@/hooks/useFavorites";
import { drinks } from "@/data/drinks";
import DrinkCard from "@/components/DrinkCard";
import { Heart } from "lucide-react";

export default function Favorites() {
  const { favorites } = useFavorites();
  const favDrinks = drinks.filter((d) => favorites.includes(d.id));

  return (
    <div className="min-h-screen pb-20 pt-4 px-4 lg:px-6">
      <h1 className="text-2xl font-display font-bold text-foreground mb-6">
        Favoritos
      </h1>

      {favDrinks.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4">
          {favDrinks.map((drink) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20 text-center">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
            <Heart size={28} className="text-muted-foreground" />
          </div>
          <p className="text-muted-foreground text-sm">
            Você ainda não tem favoritos.
          </p>
          <p className="text-muted-foreground text-xs mt-1">
            Toque no ❤️ nas receitas para salvar aqui.
          </p>
        </div>
      )}
    </div>
  );
}
