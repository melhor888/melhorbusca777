import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Crown, Lock, Wine, Beer, Snowflake, Leaf, KeyRound, Check, X } from "lucide-react";
import { validateVipKey, isVipUnlocked, setVipUnlocked, getTodayDayName } from "@/utils/vipKeys";

const vipCategories = [
  {
    id: "vinho-sangrias",
    name: "Vinho & Sangrias",
    icon: Wine,
    description: "Sangrias, vinhos quentes, spritzers de vinho e muito mais",
    color: "from-rose-500 to-red-700",
    count: "Em breve",
  },
  {
    id: "cerveja-beer-cocktails",
    name: "Cerveja & Beer Cocktails",
    icon: Beer,
    description: "Micheladas, Shandys, Radlers, Beer Margaritas",
    color: "from-amber-400 to-yellow-600",
    count: "Em breve",
  },
  {
    id: "frozen-blended",
    name: "Frozen & Blended",
    icon: Snowflake,
    description: "Frozen margaritas, frosés, slushies e drinks gelados",
    color: "from-cyan-400 to-blue-600",
    count: "Em breve",
  },
  {
    id: "low-abv-wellness",
    name: "Low ABV & Wellness",
    icon: Leaf,
    description: "Drinks leves, spritzes, kombuchas alcoólicas e mais",
    color: "from-emerald-400 to-green-600",
    count: "Em breve",
  },
];

export default function Vip() {
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

      <main className="px-4 pt-6 pb-32 lg:pb-12">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 shadow-lg mb-4">
            <Crown size={32} className="text-white" />
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Área <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">VIP</span>
          </h1>
          <p className="text-muted-foreground text-sm mt-2 max-w-xs mx-auto">
            Insira a chave do dia para desbloquear o conteúdo exclusivo
          </p>
        </div>

        {/* Key Input Section */}
        {!unlocked && (
          <div className="max-w-sm mx-auto mb-8">
            <div className="rounded-2xl border border-yellow-500/20 bg-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <KeyRound size={18} className="text-yellow-500" />
                <span className="text-sm font-semibold text-foreground">
                  Chave de {getTodayDayName()}
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
                <p className="text-xs text-muted-foreground">Acesso liberado até meia-noite</p>
              </div>
            </div>
          </div>
        )}

        {/* VIP Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {vipCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className={`relative group rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30 ${
                  !unlocked ? "opacity-60" : ""
                }`}
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
                        {cat.count}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
