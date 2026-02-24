import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Crown, Lock, Wine, Beer, Snowflake, Leaf, KeyRound, Check, X, Flame, GlassWater, IceCream, Trophy, Globe, CupSoda, Martini, ArrowRight, Sparkles, ChefHat, GraduationCap, UtensilsCrossed, BookOpen, Wrench, FileText, Star } from "lucide-react";
import { validateVipKey, isVipUnlocked, setVipUnlocked } from "@/utils/vipKeys";
import VipTrialBanner from "@/components/VipTrialBanner";
import VipNetflixHero from "@/components/VipNetflixHero";
import { getVipDrinksByCategory } from "@/data/vipDrinks";

const vipCategories = [
  {
    id: "receitas-exclusivas",
    name: "🌮 Receitas Exclusivas (Premium)",
    icon: Star,
    description: "Receitas secretas, regionais autênticas, pratos raros, combinações autorais, gourmet e alto ticket",
    color: "from-yellow-500 to-amber-700",
  },
  {
    id: "receitas-secretas",
    name: "Receitas Secretas do Chef",
    icon: ChefHat,
    description: "Mole negro, Cochinita Pibil, Barbacoa de borrego — receitas que só chefs dominam",
    color: "from-red-600 to-rose-800",
  },
  {
    id: "masterclass-tecnicas",
    name: "Masterclass de Técnicas",
    icon: GraduationCap,
    description: "Tortillas à mão, nixtamalização, assados em folha de bananeira",
    color: "from-indigo-500 to-blue-800",
  },
  {
    id: "harmonizacao-sake",
    name: "Tequila, Mezcal & Drinks",
    icon: Wine,
    description: "Guia de harmonização: tequila, mezcal, michelada com cada prato",
    color: "from-purple-500 to-violet-800",
  },
  {
    id: "cardapios-completos",
    name: "Cardápios Completos",
    icon: BookOpen,
    description: "Menus completos: Dia de los Muertos, Navidad, Quinceañera, Fiesta",
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
        <title>Área VIP | Receitas MexicanasXP</title>
        <meta name="description" content="Categorias exclusivas para membros VIP do Receitas MexicanasXP." />
      </Helmet>

      <VipTrialBanner />
      <main className="px-4 pt-0 pb-32 lg:pb-12">
        <VipNetflixHero />

        {!unlocked && (
          <div className="max-w-md mx-auto mb-8">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <KeyRound size={20} className="text-primary" />
                <h3 className="font-display font-bold text-foreground">Insira sua Chave VIP</h3>
              </div>
              <input
                type="text"
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                placeholder="Ex: MEXICANXP-XXXX-XXXX"
                className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                disabled={checking}
                className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm disabled:opacity-50"
              >
                {checking ? "Verificando..." : "Ativar VIP"}
              </button>
              {status === "success" && (
                <p className="text-green-400 text-xs flex items-center gap-1"><Check size={14} /> Chave válida! Bem-vindo ao VIP.</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-xs flex items-center gap-1"><X size={14} /> Chave inválida. Tente novamente.</p>
              )}
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {vipCategories.map((cat) => {
            const Icon = cat.icon;
            const catDrinks = getVipDrinksByCategory(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => unlocked && navigate(`/vip/${cat.id}`)}
                className={`relative overflow-hidden rounded-2xl p-5 text-left transition-all ${
                  unlocked ? "hover:scale-[1.02] active:scale-[0.98]" : "opacity-60"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-20`} />
                <div className="relative z-10">
                  <Icon size={28} className="text-primary mb-3" />
                  <h3 className="font-display font-bold text-foreground text-lg">{cat.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{cat.description}</p>
                  <p className="text-xs text-primary font-semibold mt-2">{catDrinks.length} receitas</p>
                  {!unlocked && (
                    <div className="absolute top-3 right-3">
                      <Lock size={16} className="text-muted-foreground" />
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Ferramentas VIP */}
        {unlocked && (
          <div className="max-w-2xl mx-auto mt-8 mb-4">
            <button
              onClick={() => navigate("/vip/ferramentas")}
              className="w-full flex items-center gap-4 rounded-2xl p-5 text-left bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:scale-[1.01]"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center flex-shrink-0">
                <Wrench size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-foreground text-lg">Ferramentas VIP 🛠️</h3>
                <p className="text-xs text-muted-foreground mt-1">Calculadora de ardência, lucro, gerador de cardápio, combos, preços, promoções e simulador de delivery</p>
              </div>
              <ArrowRight size={20} className="text-yellow-500" />
            </button>
            <button
              onClick={() => navigate("/vip/modelos")}
              className="w-full flex items-center gap-4 rounded-2xl p-5 text-left bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-all hover:scale-[1.01] mt-3"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                <FileText size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-foreground text-lg">Modelos Prontos 📋</h3>
                <p className="text-xs text-muted-foreground mt-1">Cardápios editáveis, delivery, food truck, dark kitchen, combos, kits e campanhas sazonais</p>
              </div>
              <ArrowRight size={20} className="text-emerald-500" />
            </button>
          </div>
        )}

        {!unlocked && (
          <div className="text-center mt-8">
            <Link
              to="/quero-ser-vip"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform"
            >
              <Crown size={18} />
              Quero ser VIP
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </main>
    </>
  );
}
