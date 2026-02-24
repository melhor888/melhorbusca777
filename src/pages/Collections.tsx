import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { dishes } from "@/data/dishes";
import DrinkCard from "@/components/DrinkCard";

interface Collection {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  filter: (d: typeof dishes[0]) => boolean;
}

const collections: Collection[] = [
  {
    id: "tacos",
    title: "Tacos",
    subtitle: "O rei da comida de rua mexicana em todas as variações",
    emoji: "🌮",
    filter: (d) => /taco/i.test(d.name) || d.category === "Tacos",
  },
  {
    id: "sopas-caldos",
    title: "Sopas & Caldos",
    subtitle: "Pozole, menudo, caldo de pollo e mais",
    emoji: "🍲",
    filter: (d) =>
      /pozole|menudo|caldo|sopa|consomé/i.test(d.name) || d.category === "Sopas & Caldos",
  },
  {
    id: "antojitos",
    title: "Antojitos",
    subtitle: "Quesadillas, enchiladas, chilaquiles, sopes e gorditas",
    emoji: "🫔",
    filter: (d) =>
      /quesadilla|enchilada|chilaquiles|sope|gordita|tostada|elote|tamale/i.test(d.name) || d.category === "Antojitos",
  },
  {
    id: "carnes",
    title: "Carnes Mexicanas",
    subtitle: "Mole, carnitas, barbacoa, cochinita e arrachera",
    emoji: "🥩",
    filter: (d) =>
      /mole|carnitas|barbacoa|cochinita|arrachera|bistec|cecina|tasajo|suadero|carne/i.test(d.name) || d.category === "Carnes Mexicanas",
  },
  {
    id: "molhos-salsas",
    title: "Molhos & Salsas",
    subtitle: "Guacamole, salsa roja, verde, pico de gallo e mais",
    emoji: "🥣",
    filter: (d) =>
      /guacamole|salsa|pico de gallo|molho|mole/i.test(d.name) || d.category === "Molhos & Salsas",
  },
  {
    id: "mariscos",
    title: "Mariscos",
    subtitle: "Ceviche, camarões, peixe e frutos do mar",
    emoji: "🦐",
    filter: (d) =>
      /ceviche|camar|pescado|zarandeado|marisco/i.test(d.name) || d.category === "Mariscos",
  },
  {
    id: "sobremesas",
    title: "Sobremesas Mexicanas",
    subtitle: "Churros, flan, tres leches e doces tradicionais",
    emoji: "🍮",
    filter: (d) =>
      /churro|flan|tres leches|arroz con leche|mazapan|alegria|helado/i.test(d.name) || d.category === "Sobremesas",
  },
  {
    id: "bebidas",
    title: "Bebidas",
    subtitle: "Horchata, jamaica, chocolate mexicano e michelada",
    emoji: "🍹",
    filter: (d) =>
      /horchata|jamaica|chocolate|michelada|margarita|pulque|agua/i.test(d.name) || d.category === "Bebidas",
  },
  {
    id: "cafe-da-manha",
    title: "Café da Manhã",
    subtitle: "Huevos rancheros, divorciados e chilaquiles matinais",
    emoji: "🍳",
    filter: (d) =>
      /huevos|motuleños/i.test(d.name) || d.category === "Café da Manhã",
  },
  {
    id: "facil",
    title: "Fácil & Rápido",
    subtitle: "Receitas simples para o dia a dia",
    emoji: "⚡",
    filter: (d) => d.difficulty === "Fácil",
  },
  {
    id: "tortillas-bases",
    title: "Tortillas & Bases",
    subtitle: "Tortillas de milho, trigo, sopes, tlacoyos e tostadas",
    emoji: "🫓",
    filter: (d) =>
      /tortilla|tlacoyo|tostada/i.test(d.name) || d.category === "Tortillas & Bases",
  },
  {
    id: "picantes",
    title: "Para os Corajosos 🔥",
    subtitle: "As receitas mais picantes do cardápio",
    emoji: "🌶️",
    filter: (d) =>
      /habanero|diabla|extra.?picante/i.test(d.name) ||
      /habanero|diabla/i.test(d.ingredients?.join(" ") || ""),
  },
];

export default function Collections() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-24">
      <Helmet>
        <title>Coleções Temáticas | Receitas MexicanasXP</title>
        <meta name="description" content="Coleções temáticas de receitas mexicanas: tacos, enchiladas, moles, sopas, sobremesas e mais." />
      </Helmet>

      <div className="sticky top-0 z-40 glass-card border-b border-border/50 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
          <ArrowLeft size={18} className="text-foreground" />
        </button>
        <h1 className="font-display font-bold text-foreground text-lg">Coleções Temáticas</h1>
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
                <p className="text-xs text-muted-foreground">{col.subtitle} • {dishes.filter(col.filter).length} receitas</p>
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
