import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Crown, Clock, ChefHat, Lock } from "lucide-react";
import { getVipDrinksByCategory, getVipChefTip } from "@/data/vipDrinks";
import { isVipUnlocked } from "@/utils/vipKeys";
import { useEffect, useState } from "react";

const difficultyColor: Record<string, string> = {
  "Fácil": "text-green-400",
  "Médio": "text-yellow-400",
  "Avançado": "text-red-400",
};

const categoryNames: Record<string, string> = {
  "vinho-sangrias": "Vinho & Sangrias",
  "cerveja-beer-cocktails": "Cerveja & Beer Cocktails",
  "frozen-blended": "Frozen & Blended",
  "low-abv-wellness": "Low ABV & Wellness",
  "drinks-autor": "Drinks de Autor",
  "sazonais-festivos": "Sazonais & Festivos",
  "sobremesa-doces": "Sobremesa & Doces",
  "picantes-defumados": "Picantes & Defumados",
  "cha-infusoes": "Chá & Infusões",
  "veganos-plant-based": "Veganos & Plant-Based",
  "masterclass": "Masterclass Cocktails",
  "volta-ao-mundo": "Volta ao Mundo",
};

export default function VipCategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(isVipUnlocked());
  }, []);

  const categoryName = categoryNames[slug || ""] || "";
  const drinks = categoryName ? getVipDrinksByCategory(categoryName) : [];

  if (!unlocked) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <Lock size={48} className="text-yellow-500" />
        <p className="text-muted-foreground text-center">Desbloqueie a área VIP para acessar este conteúdo.</p>
        <Link to="/vip" className="text-yellow-500 font-semibold text-sm hover:underline">
          Ir para a Área VIP →
        </Link>
      </div>
    );
  }

  if (!categoryName || drinks.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <Crown size={48} className="text-yellow-500" />
        <p className="text-muted-foreground text-center">Categoria em breve! Estamos preparando receitas exclusivas.</p>
        <Link to="/vip" className="text-yellow-500 font-semibold text-sm hover:underline">
          ← Voltar para VIP
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{categoryName} VIP | Cachaça Quest</title>
        <meta name="description" content={`${drinks.length} receitas VIP exclusivas de ${categoryName}.`} />
      </Helmet>
      <div className="min-h-screen pb-24 pt-4 px-4 lg:px-6">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate("/vip")}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center"
          >
            <ArrowLeft size={20} className="text-foreground" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
                {categoryName}
              </h1>
              <Crown size={18} className="text-yellow-500" />
            </div>
            <p className="text-sm text-muted-foreground">{drinks.length} receitas VIP exclusivas</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4">
          {drinks.map((drink, i) => (
            <button
              key={drink.id}
              onClick={() => navigate(`/vip/recipe/${drink.id}`)}
              className="relative rounded-lg overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97] w-full h-[220px] lg:h-[280px] animate-fade-in text-left"
              style={{ animationDelay: `${i * 30}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/40 to-amber-950/60" />
              <div className="absolute top-2 right-2 z-10">
                <Crown size={14} className="text-yellow-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="font-display font-bold text-foreground leading-tight text-sm">
                  {drink.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="flex items-center gap-1 text-muted-foreground text-[10px]">
                    <Clock size={10} />
                    {drink.time}
                  </span>
                  <span className={`flex items-center gap-1 text-[10px] font-semibold ${difficultyColor[drink.difficulty] || "text-muted-foreground"}`}>
                    <ChefHat size={10} />
                    {drink.difficulty}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
