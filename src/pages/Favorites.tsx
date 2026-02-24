import { useFavorites } from "@/hooks/useFavorites";
import { getAllDishes } from "@/data/dishes";
import { useTranslation } from "react-i18next";
import DrinkCard from "@/components/DrinkCard";
import { Heart } from "lucide-react";

export default function Favorites() {
  const { favorites } = useFavorites();
  const { t } = useTranslation();
  const favDishes = getAllDishes().filter((d) => favorites.includes(d.id));

  return (
    <div className="min-h-screen pb-20 pt-4 px-4 lg:px-6">
      <h1 className="text-2xl font-display font-bold text-foreground mb-6">
        {t("favorites_page.title")}
      </h1>

      {favDishes.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4">
          {favDishes.map((dish) => (
            <DrinkCard key={dish.id} drink={dish} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20 text-center">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
            <Heart size={28} className="text-muted-foreground" />
          </div>
          <p className="text-muted-foreground text-sm">
            {t("favorites_page.empty")}
          </p>
          <p className="text-muted-foreground text-xs mt-1">
            {t("favorites_page.emptyHint")}
          </p>
        </div>
      )}
    </div>
  );
}