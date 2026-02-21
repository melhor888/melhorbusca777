import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BookOpen, Clock, Zap } from "lucide-react";
import { articles, articleCategories } from "@/data/articles";
import { useXP } from "@/hooks/useXP";

export default function Dicas() {
  const navigate = useNavigate();
  const { totalXP } = useXP();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const readArticles = JSON.parse(localStorage.getItem("nihon-read-articles") || "[]") as string[];

  return (
    <div className="min-h-screen pb-24 pt-4 px-4 lg:px-6 lg:max-w-4xl lg:mx-auto">
      <h1 className="text-2xl font-display font-bold text-foreground mb-1">
        Cultura & Artigos
      </h1>
      <p className="text-sm text-muted-foreground mb-6">
        Aprenda sobre a cultura gastronômica japonesa e ganhe XP
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        <div className="glass-card rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-primary">{readArticles.length}</p>
          <p className="text-[10px] text-muted-foreground">Artigos Lidos</p>
        </div>
        <div className="glass-card rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-foreground">{articles.length}</p>
          <p className="text-[10px] text-muted-foreground">Total Disponível</p>
        </div>
      </div>

      {/* Articles list */}
      <div className="space-y-3">
        {articles.map((article, i) => {
          const isRead = readArticles.includes(article.id);
          const catInfo = articleCategories[article.category];
          return (
            <button
              key={article.id}
              onClick={() => navigate(`/artigo/${article.id}`)}
              className="w-full text-left glass-card rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 active:scale-[0.98] animate-fade-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center text-2xl flex-shrink-0">
                  {article.icon}
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
                      <span className="text-[10px] text-primary font-bold">✓ Lido</span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-foreground text-sm truncate">
                    {article.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                    {article.subtitle}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-primary">
                    <Zap size={12} className="fill-primary" />
                    <span className="text-[10px] font-bold">+{article.xpReward} XP ao completar</span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
