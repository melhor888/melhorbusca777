import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import {
  Crown, Star, Flame, Globe, Trophy,
  ShoppingCart, BookOpen, Heart, Lightbulb, ChefHat, Sparkles, ArrowRight,
  MessageCircle, Check, Zap, UtensilsCrossed, Soup, Fish, Leaf, CakeSlice, Coffee,
  Calculator, Truck, FileText, GraduationCap, Wine, Beef, Salad, Timer, Users, TrendingUp
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5527995055993?text=Ol%C3%A1!%20Quero%20ser%20VIP%20no%20Receitas%20MexicanasXP!";

interface T {
  hero: { badge: string; title: string; titleHighlight: string; desc: string; cta: string; ctaSub: string };
  benefits: { badge: string; title: string; items: { title: string; desc: string }[] };
  categories: { title: string; subtitle: string; more: string };
  tools: { badge: string; title: string; subtitle: string; items: { title: string; desc: string }[] };
  free: { badge: string; title: string; subtitle: string; items: { title: string; desc: string }[] };
  compare: { title: string; header: string[]; rows: string[][] };
  cta: { title: string; desc: string; btn: string; confirm: string };
}

const translations: Record<string, T> = {
  pt: {
    hero: {
      badge: "★ Experiência Premium",
      title: "Torne-se",
      titleHighlight: "VIP",
      desc: "Desbloqueie um universo de <strong>1.200+ receitas exclusivas</strong>, 7 ferramentas profissionais, dicas de chefs e categorias premium que você não encontra em nenhum outro lugar.",
      cta: "Quero ser VIP agora!",
      ctaSub: "Via WhatsApp · Resposta imediata",
    },
    benefits: {
      badge: "Exclusivo VIP",
      title: "O que você recebe como VIP",
      items: [
        { title: "1.200+ Receitas Exclusivas", desc: "Acesso a 20+ categorias VIP com receitas autênticas, incluindo pratos de autor, sazonais e masterclass." },
        { title: "Dicas do Chef em Cada Receita", desc: "Cada receita VIP vem com orientações de chefs profissionais: utensílio ideal, modo de servir e segredos do ofício." },
        { title: "Descrição VIP Detalhada", desc: "Saiba a história de cada prato, onde é mais consumido, em qual estação brilha e com o que harmoniza." },
        { title: "Categorias Premium", desc: "Receitas Secretas, Masterclass Técnicas, Harmonização com Agave, Cardápios Completos e muito mais." },
        { title: "7 Ferramentas Profissionais", desc: "Calculadoras de SHU, lucro e preço; geradores de cardápio; simulador de delivery e mais." },
        { title: "Acesso Permanente", desc: "Uma vez VIP, sempre VIP. Desbloqueie uma vez e tenha acesso para sempre, incluindo futuras atualizações." },
        { title: "Modelos de Cardápio Editáveis", desc: "Templates profissionais prontos para usar no seu restaurante ou evento." },
        { title: "Conteúdo Atualizado Semanalmente", desc: "Novas receitas, ferramentas e categorias adicionadas regularmente." },
      ],
    },
    categories: {
      title: "20+ Categorias Premium",
      subtitle: "Receitas autênticas mexicanizadas em cada categoria",
      more: "+ mais categorias adicionais",
    },
    tools: {
      badge: "Ferramentas VIP",
      title: "7 Ferramentas Profissionais",
      subtitle: "Calculadoras, geradores e simuladores para profissionais",
      items: [
        { title: "Calculadora de SHU", desc: "Calcule a intensidade de pimenta ideal para cada prato." },
        { title: "Calculadora de Lucro", desc: "Calcule margens de lucro e custo por porção." },
        { title: "Calculadora de Preço", desc: "Defina preços competitivos para seu cardápio." },
        { title: "Gerador de Cardápio", desc: "Crie cardápios temáticos completos automaticamente." },
        { title: "Simulador de Delivery", desc: "Simule operações de delivery e custos." },
        { title: "Modelos de Cardápio", desc: "Templates editáveis prontos para seu negócio." },
      ],
    },
    free: {
      badge: "Já incluso no app",
      title: "Tudo isso você já tem grátis",
      subtitle: "E com o VIP, fica ainda melhor",
      items: [
        { title: "100+ Receitas Gratuitas", desc: "Dezenas de pratos clássicos da culinária mexicana." },
        { title: "Lista de Compras Inteligente", desc: "Adicione ingredientes e organize suas compras." },
        { title: "Favoritos", desc: "Salve seus pratos preferidos e acesse rapidamente." },
        { title: "80+ Artigos Técnicos", desc: "Dicas sobre técnicas, utensílios e segredos profissionais." },
        { title: "Blog com 25+ Artigos", desc: "Artigos aprofundados sobre gastronomia mexicana." },
        { title: "Quiz de Culinária", desc: "Teste seus conhecimentos sobre gastronomia mexicana." },
      ],
    },
    compare: {
      title: "Grátis vs VIP",
      header: ["Recurso", "Grátis", "VIP ★"],
      rows: [
        ["Receitas", "100+", "1.300+"],
        ["Dicas do Chef", "Parcial", "✓ Completo"],
        ["Ferramentas", "—", "7 ferramentas"],
        ["Categorias", "8", "28+"],
        ["Artigos/Dicas", "80+", "80+ Premium"],
        ["Blog", "25+", "25+ Premium"],
        ["Modelos Cardápio", "—", "✓"],
        ["Atualizações", "✓", "✓ Prioritário"],
      ],
    },
    cta: {
      title: "Pronto para ser VIP?",
      desc: "Clique no botão abaixo e fale com a gente no WhatsApp. Em poucos minutos você terá acesso a tudo.",
      btn: "Falar no WhatsApp",
      confirm: "Acesso imediato após confirmação",
    },
  },
  en: {
    hero: {
      badge: "★ Premium Experience",
      title: "Become",
      titleHighlight: "VIP",
      desc: "Unlock a universe of <strong>1,200+ exclusive recipes</strong>, 7 professional tools, chef tips, and premium categories you won't find anywhere else.",
      cta: "I want to be VIP now!",
      ctaSub: "Via WhatsApp · Instant response",
    },
    benefits: {
      badge: "VIP Exclusive",
      title: "What you get as VIP",
      items: [
        { title: "1,200+ Exclusive Recipes", desc: "Access 20+ VIP categories with authentic recipes, including signature dishes, seasonal, and masterclass." },
        { title: "Chef Tips on Every Recipe", desc: "Each VIP recipe comes with pro chef guidance: ideal utensils, serving style, and trade secrets." },
        { title: "Detailed VIP Descriptions", desc: "Learn the history of each dish, where it's most popular, which season it shines, and pairing suggestions." },
        { title: "Premium Categories", desc: "Secret Recipes, Technical Masterclass, Agave Pairing, Complete Menus, and much more." },
        { title: "7 Professional Tools", desc: "SHU, profit, and pricing calculators; menu generators; delivery simulator, and more." },
        { title: "Permanent Access", desc: "Once VIP, always VIP. Unlock once and have access forever, including future updates." },
        { title: "Editable Menu Templates", desc: "Professional templates ready to use in your restaurant or event." },
        { title: "Weekly Updated Content", desc: "New recipes, tools, and categories added regularly." },
      ],
    },
    categories: {
      title: "20+ Premium Categories",
      subtitle: "Authentic Mexicanized recipes in every category",
      more: "+ additional categories",
    },
    tools: {
      badge: "VIP Tools",
      title: "7 Professional Tools",
      subtitle: "Calculators, generators, and simulators for professionals",
      items: [
        { title: "SHU Calculator", desc: "Calculate the ideal pepper intensity for each dish." },
        { title: "Profit Calculator", desc: "Calculate profit margins and cost per serving." },
        { title: "Price Calculator", desc: "Set competitive prices for your menu." },
        { title: "Menu Generator", desc: "Create complete themed menus automatically." },
        { title: "Delivery Simulator", desc: "Simulate delivery operations and costs." },
        { title: "Menu Templates", desc: "Editable templates ready for your business." },
      ],
    },
    free: {
      badge: "Already included",
      title: "All this is already free",
      subtitle: "And with VIP, it gets even better",
      items: [
        { title: "100+ Free Recipes", desc: "Dozens of classic Mexican cuisine dishes." },
        { title: "Smart Shopping List", desc: "Add ingredients and organize your shopping." },
        { title: "Favorites", desc: "Save your favorite dishes for quick access." },
        { title: "80+ Technical Articles", desc: "Tips on techniques, utensils, and pro secrets." },
        { title: "Blog with 25+ Articles", desc: "In-depth articles on Mexican gastronomy." },
        { title: "Cooking Quiz", desc: "Test your knowledge of Mexican gastronomy." },
      ],
    },
    compare: {
      title: "Free vs VIP",
      header: ["Feature", "Free", "VIP ★"],
      rows: [
        ["Recipes", "100+", "1,300+"],
        ["Chef Tips", "Partial", "✓ Complete"],
        ["Tools", "—", "7 tools"],
        ["Categories", "8", "28+"],
        ["Articles/Tips", "80+", "80+ Premium"],
        ["Blog", "25+", "25+ Premium"],
        ["Menu Templates", "—", "✓"],
        ["Updates", "✓", "✓ Priority"],
      ],
    },
    cta: {
      title: "Ready to become VIP?",
      desc: "Click the button below and talk to us on WhatsApp. In just a few minutes you'll have access to everything.",
      btn: "Chat on WhatsApp",
      confirm: "Immediate access after confirmation",
    },
  },
  es: {
    hero: {
      badge: "★ Experiencia Premium",
      title: "Conviértete en",
      titleHighlight: "VIP",
      desc: "Desbloquea un universo de <strong>1.200+ recetas exclusivas</strong>, 7 herramientas profesionales, tips de chefs y categorías premium que no encontrarás en ningún otro lugar.",
      cta: "¡Quiero ser VIP ahora!",
      ctaSub: "Vía WhatsApp · Respuesta inmediata",
    },
    benefits: {
      badge: "Exclusivo VIP",
      title: "Lo que recibes como VIP",
      items: [
        { title: "1.200+ Recetas Exclusivas", desc: "Acceso a 20+ categorías VIP con recetas auténticas, incluyendo platos de autor, de temporada y masterclass." },
        { title: "Tips del Chef en Cada Receta", desc: "Cada receta VIP incluye orientaciones de chefs profesionales: utensilio ideal, modo de servir y secretos del oficio." },
        { title: "Descripción VIP Detallada", desc: "Conoce la historia de cada platillo, dónde es más popular, en qué temporada brilla y con qué se armoniza." },
        { title: "Categorías Premium", desc: "Recetas Secretas, Masterclass Técnicas, Armonización con Agave, Menús Completos y mucho más." },
        { title: "7 Herramientas Profesionales", desc: "Calculadoras de SHU, ganancia y precio; generadores de menú; simulador de delivery y más." },
        { title: "Acceso Permanente", desc: "Una vez VIP, siempre VIP. Desbloquea una vez y ten acceso para siempre, incluyendo futuras actualizaciones." },
        { title: "Plantillas de Menú Editables", desc: "Plantillas profesionales listas para usar en tu restaurante o evento." },
        { title: "Contenido Actualizado Semanalmente", desc: "Nuevas recetas, herramientas y categorías agregadas regularmente." },
      ],
    },
    categories: {
      title: "20+ Categorías Premium",
      subtitle: "Recetas auténticas mexicanizadas en cada categoría",
      more: "+ categorías adicionales",
    },
    tools: {
      badge: "Herramientas VIP",
      title: "7 Herramientas Profesionales",
      subtitle: "Calculadoras, generadores y simuladores para profesionales",
      items: [
        { title: "Calculadora de SHU", desc: "Calcula la intensidad ideal de chile para cada platillo." },
        { title: "Calculadora de Ganancia", desc: "Calcula márgenes de ganancia y costo por porción." },
        { title: "Calculadora de Precio", desc: "Define precios competitivos para tu menú." },
        { title: "Generador de Menú", desc: "Crea menús temáticos completos automáticamente." },
        { title: "Simulador de Delivery", desc: "Simula operaciones de delivery y costos." },
        { title: "Plantillas de Menú", desc: "Plantillas editables listas para tu negocio." },
      ],
    },
    free: {
      badge: "Ya incluido en la app",
      title: "Todo esto ya lo tienes gratis",
      subtitle: "Y con VIP, se pone aún mejor",
      items: [
        { title: "100+ Recetas Gratuitas", desc: "Decenas de platillos clásicos de la cocina mexicana." },
        { title: "Lista de Compras Inteligente", desc: "Agrega ingredientes y organiza tus compras." },
        { title: "Favoritos", desc: "Guarda tus platillos favoritos y accede rápidamente." },
        { title: "80+ Artículos Técnicos", desc: "Tips sobre técnicas, utensilios y secretos profesionales." },
        { title: "Blog con 25+ Artículos", desc: "Artículos profundos sobre gastronomía mexicana." },
        { title: "Quiz de Cocina", desc: "Pon a prueba tus conocimientos sobre gastronomía mexicana." },
      ],
    },
    compare: {
      title: "Gratis vs VIP",
      header: ["Característica", "Gratis", "VIP ★"],
      rows: [
        ["Recetas", "100+", "1.300+"],
        ["Tips del Chef", "Parcial", "✓ Completo"],
        ["Herramientas", "—", "7 herramientas"],
        ["Categorías", "8", "28+"],
        ["Artículos/Tips", "80+", "80+ Premium"],
        ["Blog", "25+", "25+ Premium"],
        ["Plantillas Menú", "—", "✓"],
        ["Actualizaciones", "✓", "✓ Prioritario"],
      ],
    },
    cta: {
      title: "¿Listo para ser VIP?",
      desc: "Haz clic en el botón de abajo y habla con nosotros en WhatsApp. En pocos minutos tendrás acceso a todo.",
      btn: "Hablar en WhatsApp",
      confirm: "Acceso inmediato tras confirmación",
    },
  },
};

const benefitIcons = [Crown, ChefHat, Sparkles, UtensilsCrossed, Calculator, Zap, FileText, Star];
const toolIcons = [Flame, TrendingUp, ShoppingCart, UtensilsCrossed, Truck, FileText];
const freeIcons = [BookOpen, ShoppingCart, Heart, Lightbulb, GraduationCap, Globe];

const vipCategories = [
  { name: { pt: "Receitas Secretas", en: "Secret Recipes", es: "Recetas Secretas" }, icon: Sparkles, color: "from-violet-500 to-purple-700" },
  { name: { pt: "Masterclass Técnicas", en: "Technical Masterclass", es: "Masterclass Técnicas" }, icon: Trophy, color: "from-yellow-500 to-amber-700" },
  { name: { pt: "Harmonização com Agave", en: "Agave Pairing", es: "Armonización con Agave" }, icon: Wine, color: "from-rose-500 to-red-700" },
  { name: { pt: "Cardápios Completos", en: "Complete Menus", es: "Menús Completos" }, icon: UtensilsCrossed, color: "from-emerald-500 to-green-700" },
  { name: { pt: "Clássicos Reinventados", en: "Reinvented Classics", es: "Clásicos Reinventados" }, icon: Star, color: "from-amber-400 to-yellow-600" },
  { name: { pt: "Tropical & Tiki", en: "Tropical & Tiki", es: "Tropical y Tiki" }, icon: Leaf, color: "from-cyan-400 to-blue-600" },
  { name: { pt: "Picantes & Defumados", en: "Spicy & Smoky", es: "Picantes y Ahumados" }, icon: Flame, color: "from-orange-500 to-red-600" },
  { name: { pt: "Sobremesas & Doces", en: "Desserts & Sweets", es: "Postres y Dulces" }, icon: CakeSlice, color: "from-pink-400 to-fuchsia-600" },
  { name: { pt: "Carnes Mexicanas", en: "Mexican Meats", es: "Carnes Mexicanas" }, icon: Beef, color: "from-red-500 to-rose-700" },
  { name: { pt: "Receitas Exclusivas", en: "Exclusive Recipes", es: "Recetas Exclusivas" }, icon: Crown, color: "from-yellow-400 to-amber-600" },
];

function getLangKey(lang: string): string {
  if (lang.startsWith("es")) return "es";
  if (lang.startsWith("en")) return "en";
  return "pt";
}

export default function QueroSerVip() {
  const { i18n } = useTranslation();
  const lk = getLangKey(i18n.language);
  const t = translations[lk] || translations.pt;

  return (
    <>
      <Helmet>
        <title>{lk === "en" ? "Become VIP" : lk === "es" ? "Quiero ser VIP" : "Quero Ser VIP"} | Mexi Food XP</title>
        <meta name="description" content={t.hero.desc.replace(/<[^>]+>/g, "")} />
      </Helmet>

      <main className="pb-32 lg:pb-12">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-yellow-950/80 via-background to-background px-4 pt-12 pb-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent" />
          <div className="relative z-10 max-w-lg mx-auto">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full mb-4">{t.hero.badge}</span>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-600 shadow-2xl shadow-yellow-500/30 mb-6">
              <Crown size={40} className="text-white" />
            </div>
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              {t.hero.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                {t.hero.titleHighlight}
              </span>
            </h1>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed max-w-md mx-auto" dangerouslySetInnerHTML={{ __html: t.hero.desc }} />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-600 text-white font-bold text-base shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40 transition-all hover:scale-[1.03] active:scale-[0.97]"
            >
              <MessageCircle size={20} />
              {t.hero.cta}
            </a>
            <p className="text-xs text-muted-foreground mt-3">{t.hero.ctaSub}</p>
          </div>
        </section>

        {/* VIP Benefits */}
        <section className="px-4 py-12 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full">
              {t.benefits.badge}
            </span>
            <h2 className="font-display text-2xl font-bold text-foreground mt-4">{t.benefits.title}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.benefits.items.map((b, i) => {
              const Icon = benefitIcons[i] || Star;
              return (
                <div key={i} className="rounded-2xl border border-yellow-500/15 bg-card p-5 hover:border-yellow-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center mb-3">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-sm">{b.title}</h3>
                  <p className="text-muted-foreground text-xs mt-1.5 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* VIP Categories Preview */}
        <section className="px-4 py-12 bg-card/50">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display text-xl font-bold text-foreground">{t.categories.title}</h2>
              <p className="text-muted-foreground text-sm mt-2">{t.categories.subtitle}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {vipCategories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card border border-border/50">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <span className="text-xs font-semibold text-foreground text-center leading-tight">{cat.name[lk as keyof typeof cat.name]}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4">{t.categories.more}</p>
          </div>
        </section>

        {/* Professional Tools */}
        <section className="px-4 py-12 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
              {t.tools.badge}
            </span>
            <h2 className="font-display text-2xl font-bold text-foreground mt-4">{t.tools.title}</h2>
            <p className="text-muted-foreground text-sm mt-2">{t.tools.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.tools.items.map((tool, i) => {
              const Icon = toolIcons[i] || Calculator;
              return (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-primary/15 hover:border-primary/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{tool.title}</h3>
                    <p className="text-muted-foreground text-xs mt-0.5">{tool.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Free features */}
        <section className="px-4 py-12 bg-card/50">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
                {t.free.badge}
              </span>
              <h2 className="font-display text-2xl font-bold text-foreground mt-4">{t.free.title}</h2>
              <p className="text-muted-foreground text-sm mt-2">{t.free.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.free.items.map((f, i) => {
                const Icon = freeIcons[i] || BookOpen;
                return (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{f.title}</h3>
                      <p className="text-muted-foreground text-xs mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="px-4 py-12">
          <div className="max-w-md mx-auto">
            <h2 className="font-display text-xl font-bold text-foreground text-center mb-6">{t.compare.title}</h2>
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 text-center text-xs font-semibold border-b border-border">
                {t.compare.header.map((h, i) => (
                  <div key={i} className={`p-3 ${i === 0 ? "text-muted-foreground" : i === 2 ? "text-yellow-500 bg-yellow-500/5" : "text-foreground"}`}>{h}</div>
                ))}
              </div>
              {t.compare.rows.map((row, i) => (
                <div key={i} className={`grid grid-cols-3 text-center text-xs ${i % 2 === 0 ? "bg-background" : ""}`}>
                  <div className="p-3 text-muted-foreground text-left pl-4">{row[0]}</div>
                  <div className="p-3 text-foreground">{row[1]}</div>
                  <div className="p-3 text-yellow-500 font-semibold bg-yellow-500/5">{row[2]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <Crown size={48} className="text-yellow-500 mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold text-foreground">{t.cta.title}</h2>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{t.cta.desc}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-600 text-white font-bold text-base shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40 transition-all hover:scale-[1.03] active:scale-[0.97]"
            >
              <MessageCircle size={20} />
              {t.cta.btn}
            </a>
            <p className="text-xs text-muted-foreground mt-3 flex items-center justify-center gap-1.5">
              <Check size={12} className="text-emerald-500" />
              {t.cta.confirm}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
