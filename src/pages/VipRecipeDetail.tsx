import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Crown, Clock, ChefHat, Wine, Lightbulb } from "lucide-react";
import { getVipDrinkById, getVipChefTip } from "@/data/vipDrinks";
import { isVipUnlocked } from "@/utils/vipKeys";
import { useEffect, useState } from "react";
import { Lock } from "lucide-react";

const difficultyColor: Record<string, string> = {
  "Fácil": "text-green-400",
  "Médio": "text-yellow-400",
  "Avançado": "text-red-400",
};

export default function VipRecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(isVipUnlocked());
  }, []);

  const drink = getVipDrinkById(id || "");
  const chefTip = drink ? getVipChefTip(drink.id) : null;

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

  if (!drink) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <p className="text-muted-foreground">Receita não encontrada.</p>
        <Link to="/vip" className="text-yellow-500 font-semibold text-sm hover:underline">
          ← Voltar para VIP
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{drink.name} - Receita VIP | Cachaça Quest</title>
        <meta name="description" content={drink.description.slice(0, 155)} />
      </Helmet>
      <div className="min-h-screen pb-24 pt-4 px-4 lg:px-6 max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center"
          >
            <ArrowLeft size={20} className="text-foreground" />
          </button>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-xl lg:text-2xl font-display font-bold text-foreground truncate">
                {drink.name}
              </h1>
              <Crown size={18} className="text-yellow-500 flex-shrink-0" />
            </div>
            <div className="flex items-center gap-3 mt-1">
              <span className="flex items-center gap-1 text-muted-foreground text-xs">
                <Clock size={12} />
                {drink.time}
              </span>
              <span className={`flex items-center gap-1 text-xs font-semibold ${difficultyColor[drink.difficulty]}`}>
                <ChefHat size={12} />
                {drink.difficulty}
              </span>
              <span className="text-xs text-yellow-500 font-medium">{drink.category}</span>
            </div>
          </div>
        </div>

        {/* VIP Description */}
        <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Wine size={16} className="text-yellow-500" />
            <span className="text-sm font-semibold text-foreground">Sobre este drink</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{drink.description}</p>
        </div>

        {/* Ingredients */}
        <div className="mb-6">
          <h2 className="font-display font-bold text-foreground text-lg mb-3">Ingredientes</h2>
          <ul className="space-y-2">
            {drink.ingredients.map((ing, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0" />
                {ing}
              </li>
            ))}
          </ul>
        </div>

        {/* Steps */}
        <div className="mb-6">
          <h2 className="font-display font-bold text-foreground text-lg mb-3">Modo de Preparo</h2>
          <ol className="space-y-3">
            {drink.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Chef Tips */}
        {chefTip && (
          <div className="rounded-2xl border border-yellow-500/20 bg-card p-4">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb size={16} className="text-yellow-500" />
              <span className="text-sm font-semibold text-foreground">Dica do Chef</span>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><span className="font-medium text-foreground">Copo:</span> {chefTip.glass}</p>
              <p><span className="font-medium text-foreground">Servir:</span> {chefTip.serve}</p>
              <p><span className="font-medium text-foreground">Segredo:</span> {chefTip.tip}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
