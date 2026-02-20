import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { drinks } from "@/data/drinks";
import { getDrinkImage } from "@/data/drinkImages";
import DrinkCard from "@/components/DrinkCard";

interface Collection {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  filter: (d: typeof drinks[0]) => boolean;
}

const collections: Collection[] = [
  {
    id: "verao",
    title: "Drinks de Verão",
    subtitle: "Refrescantes e tropicais para os dias quentes",
    emoji: "☀️",
    filter: (d) =>
      d.category === "Drinks Tropicais" ||
      d.ingredients.some((i) => /gelo|hortelã|suco|água com gás|tônica|ginger/i.test(i)),
  },
  {
    id: "natal",
    title: "Drinks para Natal",
    subtitle: "Elegantes e festivos para celebrar",
    emoji: "🎄",
    filter: (d) =>
      d.category === "Champagne & Espumantes" ||
      d.category === "Café & Licores" ||
      d.ingredients.some((i) => /canela|noz-moscada|creme|champagne|prosecco|licor/i.test(i)),
  },
  {
    id: "happy-hour",
    title: "Happy Hour",
    subtitle: "Rápidos e fáceis para depois do trabalho",
    emoji: "🍻",
    filter: (d) => d.difficulty === "Fácil" && d.time.includes("2") || d.time.includes("3"),
  },
  {
    id: "romantico",
    title: "Noite Romântica",
    subtitle: "Sofisticados para uma noite especial",
    emoji: "🌹",
    filter: (d) =>
      d.category === "Coquetéis Clássicos" ||
      d.category === "Champagne & Espumantes" ||
      ["martini", "cosmopolitan", "french-75", "bellini", "kir-royal"].includes(d.id),
  },
  {
    id: "festa",
    title: "Drinks para Festa",
    subtitle: "Shots, punches e drinks que animam qualquer evento",
    emoji: "🎉",
    filter: (d) =>
      d.category === "Shots e Rápidos" ||
      d.category === "Drinks Tropicais" ||
      d.ingredients.some((i) => /punch|grenadine/i.test(i)),
  },
  {
    id: "sem-alcool",
    title: "Zero Álcool",
    subtitle: "Mocktails deliciosos para todos",
    emoji: "🚫🍺",
    filter: (d) => d.category === "Não Alcoólicos",
  },
  {
    id: "cafe-lovers",
    title: "Para Amantes de Café",
    subtitle: "Drinks com espresso, Kahlúa e licores",
    emoji: "☕",
    filter: (d) =>
      d.category === "Café & Licores" ||
      d.ingredients.some((i) => /café|espresso|kahlúa|licor de café/i.test(i)),
  },
];

export default function Collections() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-24">
      <Helmet>
        <title>Coleções Temáticas | Drink Quest</title>
      </Helmet>

      <div className="sticky top-0 z-40 glass-card border-b border-border/50 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
          <ArrowLeft size={18} className="text-foreground" />
        </button>
        <h1 className="font-display font-bold text-foreground text-lg">Coleções Temáticas</h1>
      </div>

      <div className="px-4 pt-6 max-w-2xl mx-auto space-y-8">
        {collections.map((col) => {
          const colDrinks = drinks.filter(col.filter).slice(0, 8);
          if (colDrinks.length === 0) return null;
          return (
            <section key={col.id}>
              <div className="mb-3">
                <h2 className="font-display font-bold text-foreground text-lg flex items-center gap-2">
                  <span>{col.emoji}</span> {col.title}
                </h2>
                <p className="text-xs text-muted-foreground">{col.subtitle}</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {colDrinks.map((drink) => (
                  <DrinkCard key={drink.id} drink={drink} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
