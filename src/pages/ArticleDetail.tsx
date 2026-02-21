import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Zap, BookOpen, CheckCircle } from "lucide-react";
import { getArticleById, articleCategories } from "@/data/articles";
import { useXP } from "@/hooks/useXP";

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { totalXP, addArticleXP } = useXP();
  const [currentModule, setCurrentModule] = useState(0);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [xpAwarded, setXpAwarded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentModule]);

  const article = getArticleById(id || "");

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Artigo não encontrado.</p>
      </div>
    );
  }

  const catInfo = articleCategories[article.category];
  const totalModules = article.modules.length;
  const allCompleted = completedModules.length === totalModules;

  const handleCompleteModule = () => {
    if (!completedModules.includes(currentModule)) {
      setCompletedModules((prev) => [...prev, currentModule]);
    }
    if (currentModule < totalModules - 1) {
      setCurrentModule(currentModule + 1);
    }
  };

  const handleFinishArticle = () => {
    if (!xpAwarded && !alreadyRead) {
      setCompletedModules(article.modules.map((_, i) => i));
      const gained = addArticleXP(article.id, article.xpReward);
      if (gained > 0) {
        setXpAwarded(true);
      }
    }
  };

  const isLastModule = currentModule === totalModules - 1;
  const isCurrentCompleted = completedModules.includes(currentModule);
  const readArticles = JSON.parse(localStorage.getItem("nihon-read-articles") || "[]") as string[];
  const alreadyRead = readArticles.includes(article.id);

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="glass-card border-b border-border/50 px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/dicas")}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center"
          >
            <ArrowLeft size={20} className="text-foreground" />
          </button>
          <div className="flex-1">
            <p className={`text-xs font-semibold uppercase tracking-wider text-${catInfo.color}`}>
              {catInfo.label}
            </p>
            <h1 className="text-lg font-display font-bold text-foreground truncate">
              {article.title}
            </h1>
          </div>
          <div className="text-3xl">{article.icon}</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground">
            Módulo {currentModule + 1} de {totalModules}
          </span>
          <span className="text-xs text-primary font-bold">
            {completedModules.length}/{totalModules} completos
          </span>
        </div>
        <div className="flex gap-1">
          {article.modules.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors cursor-pointer ${
                completedModules.includes(i)
                  ? "bg-primary"
                  : i === currentModule
                  ? "bg-primary/40"
                  : "bg-secondary"
              }`}
              onClick={() => setCurrentModule(i)}
            />
          ))}
        </div>
      </div>

      {/* Module navigation pills */}
      <div className="px-4 mt-4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 whitespace-nowrap pb-2">
          {article.modules.map((mod, i) => (
            <button
              key={i}
              onClick={() => setCurrentModule(i)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1 flex-shrink-0 ${
                i === currentModule
                  ? "bg-primary text-primary-foreground"
                  : completedModules.includes(i)
                  ? "bg-primary/20 text-primary"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {completedModules.includes(i) && <CheckCircle size={12} />}
              {i + 1}. {mod.title.length > 20 ? mod.title.substring(0, 20) + "..." : mod.title}
            </button>
          ))}
        </div>
      </div>

      {/* Current module content */}
      <div className="px-4 mt-4">
        <div
          className={`rounded-2xl p-5 animate-fade-in ${
            article.modules[currentModule].highlight
              ? "glass-card border-primary/30 bg-primary/5"
              : "glass-card"
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={16} className="text-primary" />
            <h2 className="font-display font-bold text-foreground">
              {article.modules[currentModule].title}
            </h2>
          </div>
          <p className="text-secondary-foreground text-sm leading-relaxed whitespace-pre-line">
            {article.modules[currentModule].content}
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="px-4 mt-6 space-y-3">
        {!isLastModule && (
          <button
            onClick={handleCompleteModule}
            className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Próximo Módulo →
          </button>
        )}

        {isLastModule && !alreadyRead && !xpAwarded && (
          <button
            onClick={handleFinishArticle}
            className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <Zap size={16} className="fill-primary-foreground" />
            Concluir e Ganhar +{article.xpReward} XP
          </button>
        )}

        {(xpAwarded || alreadyRead) && (
          <div className="glass-card rounded-xl p-4 text-center border-primary/30">
            <CheckCircle size={24} className="text-primary mx-auto mb-2" />
            <p className="text-sm font-bold text-foreground">Artigo Concluído!</p>
            <p className="text-xs text-muted-foreground mt-1">
              {alreadyRead && !xpAwarded ? "Você já leu este artigo" : `+${article.xpReward} XP adicionados`}
            </p>
          </div>
        )}

        {currentModule > 0 && (
          <button
            onClick={() => setCurrentModule(currentModule - 1)}
            className="w-full py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm"
          >
            ← Módulo Anterior
          </button>
        )}
      </div>
    </div>
  );
}
