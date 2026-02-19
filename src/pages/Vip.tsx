import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Crown, Lock, Wine, Beer, Snowflake, Leaf, KeyRound, Check, X, Flame, GlassWater, IceCream, Trophy, Globe, CupSoda, Martini, ArrowRight, Sparkles } from "lucide-react";
import { validateVipKey, isVipUnlocked, setVipUnlocked } from "@/utils/vipKeys";
import { getVipDrinksByCategory } from "@/data/vipDrinks";
import vipHeroBanner from "@/assets/vip-hero-banner.jpg";

const vipCategories = [
  {
    id: "vinho-sangrias",
    name: "Vinho & Sangrias",
    icon: Wine,
    description: "Sangrias, vinhos quentes, spritzers de vinho e muito mais",
    color: "from-rose-500 to-red-700",
  },
  {
    id: "cerveja-beer-cocktails",
    name: "Cerveja & Beer Cocktails",
    icon: Beer,
    description: "Micheladas, Shandys, Radlers, Beer Margaritas",
    color: "from-amber-400 to-yellow-600",
  },
  {
    id: "frozen-blended",
    name: "Frozen & Blended",
    icon: Snowflake,
    description: "Frozen margaritas, frosés, slushies e drinks gelados",
    color: "from-cyan-400 to-blue-600",
  },
  {
    id: "low-abv-wellness",
    name: "Low ABV & Wellness",
    icon: Leaf,
    description: "Drinks leves, spritzes, kombuchas alcoólicas e mais",
    color: "from-emerald-400 to-green-600",
  },
  {
    id: "drinks-autor",
    name: "Drinks de Autor",
    icon: Martini,
    description: "Criações exclusivas e autorais de bartenders famosos",
    color: "from-violet-500 to-purple-700",
  },
  {
    id: "sazonais-festivos",
    name: "Sazonais & Festivos",
    icon: Crown,
    description: "Natal, Ano Novo, Carnaval, São João, Halloween",
    color: "from-red-400 to-pink-600",
  },
  {
    id: "sobremesa-doces",
    name: "Sobremesa & Doces",
    icon: IceCream,
    description: "Chocolate, caramelo, sorvete, licores cremosos",
    color: "from-pink-400 to-fuchsia-600",
  },
  {
    id: "picantes-defumados",
    name: "Picantes & Defumados",
    icon: Flame,
    description: "Mezcal, jalapeño, chili, técnicas de defumação",
    color: "from-orange-500 to-red-600",
  },
  {
    id: "cha-infusoes",
    name: "Chá & Infusões",
    icon: CupSoda,
    description: "Chá gelado alcoólico, infusões de ervas, matcha cocktails",
    color: "from-lime-400 to-green-600",
  },
  {
    id: "veganos-plant-based",
    name: "Veganos & Plant-Based",
    icon: Leaf,
    description: "Sem derivados animais, leites vegetais, aquafaba",
    color: "from-teal-400 to-emerald-600",
  },
  {
    id: "masterclass",
    name: "Masterclass Cocktails",
    icon: Trophy,
    description: "Técnicas avançadas: esferificação, clarificação, fat-wash",
    color: "from-yellow-500 to-amber-700",
  },
  {
    id: "volta-ao-mundo",
    name: "Volta ao Mundo",
    icon: Globe,
    description: "Drinks típicos de cada país: Japão, Peru, Cuba, Itália...",
    color: "from-sky-400 to-indigo-600",
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
        <title>Área VIP | Cachaça Quest</title>
        <meta name="description" content="Categorias exclusivas para membros VIP do Cachaça Quest." />
      </Helmet>

      <main className="px-4 pt-0 pb-32 lg:pb-12">
        {/* Hero Banner Netflix Style */}
        <div className="relative -mx-4 mb-8 overflow-hidden rounded-b-3xl">
          <img
            src={vipHeroBanner}
            alt="VIP Cocktails"
            className="w-full h-[280px] lg:h-[340px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-2">
              <Crown size={20} className="text-yellow-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-500">
                Exclusivo
              </span>
            </div>
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Seja <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">VIP</span>
            </h1>
            <p className="text-muted-foreground text-sm mt-2 max-w-sm">
              Descubra novos sabores com <strong className="text-foreground">1.200+ receitas exclusivas</strong>, dicas de bartenders e categorias premium.
            </p>
            {!unlocked && (
              <Link
                to="/queroservip"
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-600 text-white font-bold text-sm shadow-lg shadow-yellow-500/30 hover:shadow-xl transition-all hover:scale-[1.03] active:scale-[0.97]"
              >
                <Sparkles size={16} />
                Quero ser VIP
                <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </div>

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
