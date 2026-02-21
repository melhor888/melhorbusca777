import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Crown, Lock, Wine, Beer, Snowflake, Leaf, KeyRound, Check, X, Flame, GlassWater, IceCream, Trophy, Globe, CupSoda, Martini, ArrowRight, Sparkles, ChefHat, GraduationCap, UtensilsCrossed, BookOpen } from "lucide-react";
import { validateVipKey, isVipUnlocked, setVipUnlocked } from "@/utils/vipKeys";
import VipTrialBanner from "@/components/VipTrialBanner";
import VipNetflixHero from "@/components/VipNetflixHero";
import { getVipDrinksByCategory } from "@/data/vipDrinks";

const vipCategories = [
  {
    id: "receitas-secretas",
    name: "Receitas Secretas do Chef",
    icon: ChefHat,
    description: "Wagyu A5, Fugu, Kaiseki, Omakase — receitas que só chefs dominam",
    color: "from-red-600 to-rose-800",
  },
  {
    id: "masterclass-tecnicas",
    name: "Masterclass de Técnicas",
    icon: GraduationCap,
    description: "Afiar facas, corte sashimi, dashi perfeito, arte do tempurá",
    color: "from-indigo-500 to-blue-800",
  },
  {
    id: "harmonizacao-sake",
    name: "Harmonização Sake & Drinks",
    icon: Wine,
    description: "Guia de harmonização: sakê, shochu, whisky japonês com cada prato",
    color: "from-purple-500 to-violet-800",
  },
  {
    id: "cardapios-completos",
    name: "Cardápios Completos",
    icon: BookOpen,
    description: "Menus completos: Kaiseki, Izakaya, Hanami, Réveillon Japonês",
    color: "from-amber-500 to-orange-700",
  },
];

export default function Vip() {
  const navigate = useNavigate();
  const [unlocked, setUnlocked] = useState(false);
  const [keyInput, setKeyInput] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    setUnlocked(isVipUnlocked());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyInput.trim() || checking) return;

    setChecking(true);
    setStatus("idle");

    const valid = await validateVipKey(keyInput);

    if (valid) {
      setVipUnlocked();
      setUnlocked(true);
      setStatus("success");
    } else {
      setStatus("error");
    }
    setChecking(false);
  };

  return (
    <>
      <Helmet>
        <title>Área VIP | Receitas Japonesas XP</title>
        <meta name="description" content="Categorias exclusivas para membros VIP do Receitas Japonesas XP." />
      </Helmet>

      <VipTrialBanner />
      <main className="px-4 pt-0 pb-32 lg:pb-12">
        {/* Hero Banner Netflix Style Carousel */}
        <VipNetflixHero />

        {/* Key Input Section */}
        {!unlocked && (
          <div className="max-w-sm mx-auto mb-8">
            <div className="rounded-2xl border border-yellow-500/20 bg-card p-5">
              <div className="flex items-center gap-2 mb-3">
              <KeyRound size={18} className="text-yellow-500" />
              <span className="text-sm font-semibold text-foreground">
                Chave de Acesso VIP
              </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    value={keyInput}
                    onChange={(e) => {
                      setKeyInput(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder="Digite a chave VIP..."
                    maxLength={50}
                    className={`w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 transition-all ${
                      status === "error"
                        ? "focus:ring-destructive/50 ring-2 ring-destructive/50"
                        : "focus:ring-yellow-500/50"
                    }`}
                  />
                  {status === "error" && (
                    <X size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-destructive" />
                  )}
                </div>

                {status === "error" && (
                  <p className="text-destructive text-xs font-medium">
                    Chave incorreta. Tente novamente.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!keyInput.trim() || checking}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-600 text-white font-semibold text-sm transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {checking ? "Verificando..." : "Desbloquear"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Unlocked banner */}
        {unlocked && (
          <div className="max-w-sm mx-auto mb-8">
            <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <Check size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">VIP desbloqueado!</p>
                <p className="text-xs text-muted-foreground">Acesso permanente liberado</p>
              </div>
            </div>
          </div>
        )}

        {/* VIP Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {vipCategories.map((cat) => {
            const Icon = cat.icon;
            const drinkCount = getVipDrinksByCategory(cat.name).length;
            const hasRecipes = drinkCount > 0;
            const isClickable = unlocked && hasRecipes;
            return (
              <button
                key={cat.id}
                onClick={() => isClickable && navigate(`/vip/categoria/${cat.id}`)}
                disabled={!isClickable}
                className={`relative group rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30 text-left ${
                  !unlocked ? "opacity-60" : ""
                } ${isClickable ? "cursor-pointer" : "cursor-default"}`}
              >
                {/* Lock overlay when not unlocked */}
                {!unlocked && (
                  <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] z-10 flex items-center justify-center">
                    <Lock size={24} className="text-yellow-500/70" />
                  </div>
                )}

                {/* Card content */}
                <div className={`h-2 bg-gradient-to-r ${cat.color}`} />
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-foreground text-sm">{cat.name}</h3>
                      <p className="text-muted-foreground text-xs mt-1 line-clamp-2">{cat.description}</p>
                      <span className="inline-block mt-2 text-[10px] font-semibold uppercase tracking-wider text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded-full">
                        {hasRecipes ? `${drinkCount} receitas` : "Em breve"}
                      </span>
                      {unlocked ? (
                        hasRecipes && (
                          <span className="inline-flex items-center gap-1 mt-2 ml-2 text-[10px] font-semibold text-primary">
                            Ver Categoria <ArrowRight size={10} />
                          </span>
                        )
                      ) : (
                        <Link
                          to="/queroservip"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 mt-2 ml-2 text-[10px] font-semibold text-yellow-500 hover:text-yellow-400 z-20 relative"
                        >
                          Quero ser VIP <ArrowRight size={10} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </main>
    </>
  );
}
