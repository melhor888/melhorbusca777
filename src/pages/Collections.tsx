import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { getAllDishes } from "@/data/dishes";
import DrinkCard from "@/components/DrinkCard";

export default function Collections() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dishes = getAllDishes();

  const collections = [
    {
      id: "tacos",
      title: t("collections_page.tacos"),
      subtitle: t("collections_page.tacosDesc"),
      emoji: "🌮",
      filter: (d: typeof dishes[0]) => /taco/i.test(d.name) || d.category === "Tacos",
    },
    {
      id: "sopas-caldos",
      title: t("collections_page.soupsAndBroths"),
      subtitle: t("collections_page.soupsAndBrothsDesc"),
      emoji: "🍲",
      filter: (d: typeof dishes[0]) =>
        /pozole|menudo|caldo|sopa|consomé/i.test(d.name) || d.category === "Sopas & Caldos",
    },
    {
      id: "antojitos",
      title: t("collections_page.antojitos"),
      subtitle: t("collections_page.antojitosDesc"),
      emoji: "🫔",
      filter: (d: typeof dishes[0]) =>
        /quesadilla|enchilada|chilaquiles|sope|gordita|tostada|elote|tamale/i.test(d.name) || d.category === "Antojitos",
    },
    {
      id: "carnes",
      title: t("collections_page.meats"),
      subtitle: t("collections_page.meatsDesc"),
      emoji: "🥩",
      filter: (d: typeof dishes[0]) =>
        /mole|carnitas|barbacoa|cochinita|arrachera|bistec|cecina|tasajo|suadero|carne/i.test(d.name) || d.category === "Carnes Mexicanas",
    },
    {
      id: "molhos-salsas",
      title: t("collections_page.sauces"),
      subtitle: t("collections_page.saucesDesc"),
      emoji: "🥣",
      filter: (d: typeof dishes[0]) =>
        /guacamole|salsa|pico de gallo|molho|mole/i.test(d.name) || d.category === "Molhos & Salsas",
    },
    {
      id: "mariscos",
      title: t("collections_page.seafood"),
      subtitle: t("collections_page.seafoodDesc"),
      emoji: "🦐",
      filter: (d: typeof dishes[0]) =>
        /ceviche|camar|pescado|zarandeado|marisco/i.test(d.name) || d.category === "Mariscos",
    },
    {
      id: "sobremesas",
      title: t("collections_page.desserts"),
      subtitle: t("collections_page.dessertsDesc"),
      emoji: "🍮",
      filter: (d: typeof dishes[0]) =>
        /churro|flan|tres leches|arroz con leche|mazapan|alegria|helado/i.test(d.name) || d.category === "Sobremesas",
    },
    {
      id: "bebidas",
      title: t("collections_page.beverages"),
      subtitle: t("collections_page.beveragesDesc"),
      emoji: "🍹",
      filter: (d: typeof dishes[0]) =>
        /horchata|jamaica|chocolate|michelada|margarita|pulque|agua/i.test(d.name) || d.category === "Bebidas",
    },
    {
      id: "cafe-da-manha",
      title: t("collections_page.breakfast"),
      subtitle: t("collections_page.breakfastDesc"),
      emoji: "🍳",
      filter: (d: typeof dishes[0]) =>
        /huevos|motuleños/i.test(d.name) || d.category === "Café da Manhã",
    },
    {
      id: "facil",
      title: t("collections_page.easyAndQuick"),
      subtitle: t("collections_page.easyAndQuickDesc"),
      emoji: "⚡",
      filter: (d: typeof dishes[0]) => d.difficulty === "Fácil",
    },
    {
      id: "tortillas-bases",
      title: t("collections_page.tortillasAndBases"),
      subtitle: t("collections_page.tortillasAndBasesDesc"),
      emoji: "🫓",
      filter: (d: typeof dishes[0]) =>
        /tortilla|tlacoyo|tostada/i.test(d.name) || d.category === "Tortillas & Bases",
    },
    {
      id: "picantes",
      title: t("collections_page.spicy"),
      subtitle: t("collections_page.spicyDesc"),
      emoji: "🌶️",
      filter: (d: typeof dishes[0]) =>
        /habanero|diabla|extra.?picante/i.test(d.name) ||
        /habanero|diabla/i.test(d.ingredients?.join(" ") || ""),
    },
  ];

  return (
    <div className="min-h-screen pb-24">
      <Helmet>
        <title>{t("collections_page.title")} | Mexi Food XP</title>
      </Helmet>

      <div className="sticky top-0 z-40 glass-card border-b border-border/50 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
          <ArrowLeft size={18} className="text-foreground" />
        </button>
        <h1 className="font-display font-bold text-foreground text-lg">{t("collections_page.title")}</h1>
      </div>

      <div className="px-4 pt-6 max-w-2xl mx-auto space-y-8">
        {collections.map((col) => {
          const colDishes = dishes.filter(col.filter).slice(0, 8);
          if (colDishes.length === 0) return null;
          return (
            <section key={col.id}>
              <div className="mb-3">
                <h2 className="font-display font-bold text-foreground text-lg flex items-center gap-2">
                  <span>{col.emoji}</span> {col.title}
                </h2>
                <p className="text-xs text-muted-foreground">{col.subtitle} • {dishes.filter(col.filter).length} {t("common.recipes")}</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {colDishes.map((dish) => (
                  <DrinkCard key={dish.id} drink={dish} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}