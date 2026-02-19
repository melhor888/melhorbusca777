import { Helmet } from "react-helmet-async";
import { Crown, Lock, Wine, Beer, Snowflake, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Área VIP | Cachaça Quest</title>
        <meta name="description" content="Categorias exclusivas para membros VIP do Cachaça Quest." />
      </Helmet>

      <main className="px-4 pt-6 pb-32 lg:pb-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 shadow-lg mb-4">
            <Crown size={32} className="text-white" />
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Área <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">VIP</span>
          </h1>
          <p className="text-muted-foreground text-sm mt-2 max-w-xs mx-auto">
            Categorias exclusivas disponíveis apenas para membros VIP
          </p>
        </div>

        {/* VIP Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {vipCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="relative group rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30"
              >
                {/* Lock overlay */}
                <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex flex-col items-center gap-2">
                    <Lock size={28} className="text-yellow-500" />
                    <span className="text-xs font-semibold text-foreground">Exclusivo VIP</span>
                  </div>
                </div>

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

        {/* CTA */}
        <div className="mt-8 text-center">
          <div className="inline-flex flex-col items-center gap-3 p-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5">
            <Crown size={24} className="text-yellow-500" />
            <p className="text-sm font-medium text-foreground">Torne-se VIP para desbloquear</p>
            <p className="text-xs text-muted-foreground max-w-xs">
              Em breve você poderá acessar receitas exclusivas e conteúdo premium.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
