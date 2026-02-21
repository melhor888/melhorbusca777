import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BookOpen, Clock, Zap, CheckCircle, Filter } from "lucide-react";
import { articles, articleCategories } from "@/data/articles";
import { useXP } from "@/hooks/useXP";
import { Helmet } from "react-helmet-async";

type CategoryKey = keyof typeof articleCategories | "todos";

export default function Dicas() {
  const navigate = useNavigate();
  const { totalXP } = useXP();
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("todos");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const readArticles = JSON.parse(localStorage.getItem("nihon-read-articles") || "[]") as string[];

  const filteredArticles = selectedCategory === "todos"
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  const completionPercent = articles.length > 0
    ? Math.round((readArticles.length / articles.length) * 100)
    : 0;

  const categories: { key: CategoryKey; label: string }[] = [
    { key: "todos", label: "Todos" },
    { key: "fundamentos", label: "Fundamentos" },
    { key: "tecnicas", label: "Técnicas" },
    { key: "cultura", label: "Cultura" },
    { key: "destilados", label: "Ingredientes" },
    { key: "avancado", label: "Avançado" },
  ];

  return (
    <>
      <Helmet>
        <title>Dicas & Artigos | Nihon Food</title>
        <meta name="description" content="Aprenda sobre culinária japonesa com artigos completos sobre técnicas, ingredientes, cultura e mais." />
      </Helmet>
      <div className="min-h-screen pb-24 pt-4 px-4 lg:px-6 lg:max-w-4xl lg:mx-auto">
        <h1 className="text-2xl font-display font-bold text-foreground mb-1">
          Cultura & Artigos
        </h1>
        <p className="text-sm text-muted-foreground mb-4">
          Aprenda sobre a cultura gastronômica japonesa e ganhe XP
        </p>

        {/* Progress */}
        <div className="glass-card rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-foreground">Progresso Geral</span>
            <span className="text-sm font-bold text-primary">{readArticles.length}/{articles.length}</span>
          </div>
          <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${completionPercent}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1.5">{completionPercent}% concluído</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="glass-card rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-primary">{readArticles.length}</p>
            <p className="text-[10px] text-muted-foreground">Concluídos</p>
          </div>
          <div className="glass-card rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-foreground">{articles.length - readArticles.length}</p>
            <p className="text-[10px] text-muted-foreground">Pendentes</p>
          </div>
          <div className="glass-card rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-accent">{articles.length}</p>
            <p className="text-[10px] text-muted-foreground">Total</p>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-3 mb-4">
          {categories.map((cat) => {
            const count = cat.key === "todos"
              ? articles.length
              : articles.filter((a) => a.category === cat.key).length;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  selectedCategory === cat.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Articles list */}
        <div className="space-y-3">
          {filteredArticles.map((article, i) => {
            const isRead = readArticles.includes(article.id);
            const catInfo = articleCategories[article.category];
            return (
              <button
                key={article.id}
                onClick={() => navigate(`/artigo/${article.id}`)}
                className={`w-full text-left glass-card rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 active:scale-[0.98] animate-fade-in ${
                  isRead ? "border-primary/20" : ""
                }`}
                style={{ animationDelay: `${Math.min(i * 40, 600)}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${
                    isRead ? "bg-primary/10" : "bg-card"
                  }`}>
                    {isRead ? <CheckCircle size={24} className="text-primary" /> : article.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                        {catInfo.label}
                      </span>
                      <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                        <Clock size={10} /> {article.readTime}
                      </span>
                      {isRead && (
                        <span className="text-[10px] text-primary font-bold flex items-center gap-0.5">
                          ✓ Concluído
                        </span>
                      )}
                    </div>
                    <h3 className={`font-display font-bold text-sm truncate ${
                      isRead ? "text-muted-foreground" : "text-foreground"
                    }`}>
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                      {article.subtitle}
                    </p>
                    {!isRead && (
                      <div className="flex items-center gap-1 mt-2 text-primary">
                        <Zap size={12} className="fill-primary" />
                        <span className="text-[10px] font-bold">+{article.xpReward} XP ao completar</span>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
