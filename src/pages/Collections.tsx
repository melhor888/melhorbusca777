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
    id: "sushi-sashimi",
    title: "Sushi & Sashimi",
    subtitle: "Os clássicos da culinária japonesa crua",
    emoji: "🍣",
    filter: (d) =>
      /sushi|sashimi|nigiri|temaki|uramaki|hosomaki|futomaki|chirashi/i.test(d.name) ||
      /sushi|sashimi|nigiri|temaki|uramaki|hosomaki|futomaki|chirashi/i.test(d.id),
  },
  {
    id: "ramen-massas",
    title: "Ramen & Massas",
    subtitle: "Tigelas quentes e reconfortantes de macarrão",
    emoji: "🍜",
    filter: (d) =>
      /ramen|udon|soba|yakisoba|lamen/i.test(d.name) ||
      /ramen|udon|soba|yakisoba|lamen/i.test(d.id),
  },
  {
    id: "donburi",
    title: "Donburi & Arroz",
    subtitle: "Tigelas de arroz com coberturas deliciosas",
    emoji: "🍚",
    filter: (d) =>
      /don$|don\b|gohan|onigiri|omurice|chahan|ochazuke/i.test(d.name) ||
      /don$|don\b|gohan|onigiri|omurice|chahan|ochazuke/i.test(d.id),
  },
  {
    id: "grelhados-fritos",
    title: "Grelhados & Fritos",
    subtitle: "Yakitori, tempurá, karaage e mais",
    emoji: "🔥",
    filter: (d) =>
      /yakitori|karaage|tempura|tonkatsu|kushikatsu|teppanyaki|tebasaki|korokke/i.test(d.name) ||
      /yakitori|karaage|tempura|tonkatsu|kushikatsu|teppanyaki|tebasaki|korokke/i.test(d.id),
  },
  {
    id: "street-food",
    title: "Street Food Japonesa",
    subtitle: "Takoyaki, okonomiyaki, taiyaki e sabores de matsuri",
    emoji: "🏮",
    filter: (d) =>
      /takoyaki|okonomiyaki|taiyaki|yakiimo|dango|gyoza/i.test(d.name) ||
      /takoyaki|okonomiyaki|taiyaki|yakiimo|dango|gyoza/i.test(d.id),
  },
  {
    id: "sopas",
    title: "Sopas & Caldos",
    subtitle: "Missoshiru, tonjiru e outras sopas tradicionais",
    emoji: "🥣",
    filter: (d) =>
      /misso|tonjiru|ozoni|chawanmushi|sopa/i.test(d.name) ||
      /misso|tonjiru|ozoni|chawanmushi/i.test(d.id),
  },
  {
    id: "sobremesas",
    title: "Sobremesas Japonesas",
    subtitle: "Mochi, dorayaki, matcha e doces tradicionais",
    emoji: "🍡",
    filter: (d) =>
      /mochi|dorayaki|dango|anmitsu|matcha|taiyaki|manju|warabi/i.test(d.name) ||
      /mochi|dorayaki|dango|anmitsu|matcha|taiyaki|manju|warabi/i.test(d.id),
  },
  {
    id: "facil",
    title: "Fácil & Rápido",
    subtitle: "Receitas simples para o dia a dia",
    emoji: "⚡",
    filter: (d) => d.difficulty === "Fácil",
  },
  {
    id: "hotpot",
    title: "Hotpot & Nabe",
    subtitle: "Sukiyaki, shabu-shabu e panelas quentes",
    emoji: "🫕",
    filter: (d) =>
      /sukiyaki|shabu|nabe|motsu/i.test(d.name) ||
      /sukiyaki|shabu|nabe|motsu/i.test(d.id),
  },
];

export default function Collections() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-24">
      <Helmet>
        <title>Coleções Temáticas | Nihon Food</title>
        <meta name="description" content="Coleções temáticas de receitas japonesas: sushi, ramen, donburi, street food e mais." />
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
