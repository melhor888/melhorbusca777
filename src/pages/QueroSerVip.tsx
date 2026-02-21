import { Helmet } from "react-helmet-async";
import {
  Crown, Star, Flame, Globe, Trophy,
  ShoppingCart, BookOpen, Heart, Lightbulb, ChefHat, Sparkles, ArrowRight,
  MessageCircle, Check, Zap, UtensilsCrossed, Soup, Fish, Leaf, CakeSlice, Coffee
} from "lucide-react";

const vipBenefits = [
  {
    icon: Crown,
    title: "1.200+ Receitas Exclusivas",
    description: "Acesso a 20 categorias VIP com receitas autênticas, incluindo pratos de autor, sazonais e masterclass.",
  },
  {
    icon: ChefHat,
    title: "Dicas do Chef em Cada Receita",
    description: "Cada receita VIP vem com orientações de chefs profissionais: utensílio ideal, modo de servir e segredos do ofício.",
  },
  {
    icon: Sparkles,
    title: "Descrição VIP Detalhada",
    description: "Saiba a história de cada prato, onde é mais consumido, em qual estação brilha e com o que harmoniza.",
  },
  {
    icon: UtensilsCrossed,
    title: "Categorias Premium",
    description: "Receitas Secretas, Masterclass Técnicas, Harmonização com Sake, Cardápios Completos e muito mais.",
  },
  {
    icon: Zap,
    title: "Acesso Permanente",
    description: "Uma vez VIP, sempre VIP. Desbloqueie uma vez e tenha acesso para sempre, incluindo futuras atualizações.",
  },
  {
    icon: Star,
    title: "Conteúdo Atualizado",
    description: "Novas receitas e categorias adicionadas regularmente. Seu catálogo VIP só cresce.",
  },
];

const appFeatures = [
  {
    icon: BookOpen,
    title: "100+ Receitas Gratuitas",
    description: "Dezenas de pratos clássicos da culinária japonesa disponíveis gratuitamente.",
  },
  {
    icon: ShoppingCart,
    title: "Lista de Compras Inteligente",
    description: "Adicione ingredientes de qualquer receita e organize suas compras automaticamente.",
  },
  {
    icon: Heart,
    title: "Favoritos",
    description: "Salve seus pratos preferidos e acesse rapidamente.",
  },
  {
    icon: Lightbulb,
    title: "Dicas & Técnicas",
    description: "Artigos sobre técnicas japonesas, utensílios e segredos profissionais.",
  },
  {
    icon: Globe,
    title: "Quiz de Culinária",
    description: "Teste seus conhecimentos sobre gastronomia japonesa e descubra novos sabores.",
  },
  {
    icon: Fish,
    title: "Busca por Ingredientes",
    description: "Encontre receitas com o que você já tem em casa.",
  },
];

const vipCategories = [
  { name: "Receitas Secretas", icon: Sparkles, color: "from-violet-500 to-purple-700" },
  { name: "Masterclass Técnicas", icon: Trophy, color: "from-yellow-500 to-amber-700" },
  { name: "Harmonização com Sake", icon: Coffee, color: "from-rose-500 to-red-700" },
  { name: "Cardápios Completos", icon: UtensilsCrossed, color: "from-emerald-500 to-green-700" },
  { name: "Clássicos Reinventados", icon: Star, color: "from-amber-400 to-yellow-600" },
  { name: "Tropical & Tiki", icon: Leaf, color: "from-cyan-400 to-blue-600" },
  { name: "Picantes & Defumados", icon: Flame, color: "from-orange-500 to-red-600" },
  { name: "Sobremesa & Doces", icon: CakeSlice, color: "from-pink-400 to-fuchsia-600" },
];

const WHATSAPP_URL = "https://wa.me/5527995055993?text=Ol%C3%A1!%20Quero%20ser%20VIP%20no%20Receitas%20Japonesas%20XP!";

export default function QueroSerVip() {
  return (
    <>
      <Helmet>
        <title>Quero Ser VIP | Receitas Japonesas XP</title>
        <meta name="description" content="Desbloqueie receitas exclusivas da culinária japonesa, dicas do chef e categorias premium. Torne-se VIP no Receitas Japonesas XP." />
      </Helmet>

      <main className="pb-32 lg:pb-12">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-yellow-950/80 via-background to-background px-4 pt-12 pb-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent" />
          <div className="relative z-10 max-w-lg mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-600 shadow-2xl shadow-yellow-500/30 mb-6">
              <Crown size={40} className="text-white" />
            </div>
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Torne-se{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                VIP
              </span>
            </h1>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed max-w-md mx-auto">
              Desbloqueie um universo de <strong className="text-foreground">1.200+ receitas exclusivas</strong> da culinária japonesa, 
              dicas de chefs profissionais e categorias premium que você não encontra em nenhum outro lugar.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-600 text-white font-bold text-base shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40 transition-all hover:scale-[1.03] active:scale-[0.97]"
            >
              <MessageCircle size={20} />
              Quero ser VIP agora!
            </a>
            <p className="text-xs text-muted-foreground mt-3">Via WhatsApp · Resposta imediata</p>
          </div>
        </section>

        {/* What VIP gets */}
        <section className="px-4 py-12 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full">
              Exclusivo VIP
            </span>
            <h2 className="font-display text-2xl font-bold text-foreground mt-4">
              O que você recebe como VIP
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {vipBenefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="rounded-2xl border border-yellow-500/15 bg-card p-5 hover:border-yellow-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center mb-3">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-sm">{b.title}</h3>
                  <p className="text-muted-foreground text-xs mt-1.5 leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* VIP Categories Preview */}
        <section className="px-4 py-12 bg-card/50">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display text-xl font-bold text-foreground">
                20 Categorias Premium
              </h2>
              <p className="text-muted-foreground text-sm mt-2">Receitas autênticas em cada categoria</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {vipCategories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card border border-border/50">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <span className="text-xs font-semibold text-foreground text-center leading-tight">{cat.name}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4">+ 12 categorias adicionais</p>
          </div>
        </section>

        {/* What's already in the app (free) */}
        <section className="px-4 py-12 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
              Já incluso no app
            </span>
            <h2 className="font-display text-2xl font-bold text-foreground mt-4">
              Tudo isso você já tem grátis
            </h2>
            <p className="text-muted-foreground text-sm mt-2">E com o VIP, fica ainda melhor</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {appFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{f.title}</h3>
                    <p className="text-muted-foreground text-xs mt-0.5">{f.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Comparison */}
        <section className="px-4 py-12 bg-card/50">
          <div className="max-w-md mx-auto">
            <h2 className="font-display text-xl font-bold text-foreground text-center mb-6">
              Grátis vs VIP
            </h2>
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 text-center text-xs font-semibold border-b border-border">
                <div className="p-3 text-muted-foreground">Recurso</div>
                <div className="p-3 text-foreground">Grátis</div>
                <div className="p-3 text-yellow-500 bg-yellow-500/5">VIP ★</div>
              </div>
              {[
                ["Receitas", "100+", "1.300+"],
                ["Dicas do Chef", "Parcial", "✓ Completo"],
                ["Descrição VIP", "—", "✓"],
                ["Categorias", "8", "28"],
                ["Lista de Compras", "✓", "✓"],
                ["Favoritos", "✓", "✓"],
                ["Atualizações", "✓", "✓ Prioritário"],
              ].map(([feature, free, vip], i) => (
                <div key={i} className={`grid grid-cols-3 text-center text-xs ${i % 2 === 0 ? "bg-background" : ""}`}>
                  <div className="p-3 text-muted-foreground text-left pl-4">{feature}</div>
                  <div className="p-3 text-foreground">{free}</div>
                  <div className="p-3 text-yellow-500 font-semibold bg-yellow-500/5">{vip}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <Crown size={48} className="text-yellow-500 mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Pronto para ser VIP?
            </h2>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              Clique no botão abaixo e fale com a gente no WhatsApp. 
              Em poucos minutos você terá acesso a tudo.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-600 text-white font-bold text-base shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40 transition-all hover:scale-[1.03] active:scale-[0.97]"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
            <p className="text-xs text-muted-foreground mt-3 flex items-center justify-center gap-1.5">
              <Check size={12} className="text-emerald-500" />
              Acesso imediato após confirmação
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
