import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Lock, CheckCircle, Zap, Star, Trophy } from "lucide-react";
import { useXP, getLevel, LEVELS } from "@/hooks/useXP";
import { achievements as allAchievements } from "@/data/achievements";
import { Progress } from "@/components/ui/progress";

function getRequirement(ach: typeof allAchievements[0]): string {
  if (ach.requiredXP) return `${ach.requiredXP} XP`;
  
  // Level achievements
  if (ach.id.startsWith("level-")) {
    const lvlNum = parseInt(ach.id.split("-")[1]);
    const lvl = LEVELS.find(l => l.level === lvlNum);
    return lvl ? `Nível ${lvlNum} (${lvl.minXP} XP)` : `Nível ${lvlNum}`;
  }
  
  // Explorer
  const explorerMatch = ach.id.match(/^explorer-(\d+)$/);
  if (explorerMatch) return `Ver ${explorerMatch[1]} receitas`;
  if (ach.id === "explorer-all") return "Ver todas as receitas";
  
  // Favorites
  const favMatch = ach.id.match(/^fav-(\d+)$/);
  if (favMatch) return `Favoritar ${favMatch[1]} pratos`;
  
  // Shopping
  const shopMatch = ach.id.match(/^shop-(\d+)$/);
  if (shopMatch) return `${shopMatch[1]} pratos na lista`;
  
  // Tips
  const tipsMatch = ach.id.match(/^tips-(\d+)$/);
  if (tipsMatch) return `Completar ${tipsMatch[1]} lições`;
  if (ach.id === "first-tip") return "Completar 1 lição";
  if (ach.id === "all-tips") return "Completar todas as lições";
  
  // Articles/Scholar
  const scholarMatch = ach.id.match(/^scholar-(\d+)$/);
  if (scholarMatch) return `Ler ${scholarMatch[1]} artigos`;
  if (ach.id === "first-article") return "Ler 1 artigo";
  if (ach.id === "articles-all") return "Ler todos os artigos";
  
  // Difficulty
  if (ach.id.startsWith("diff-")) return ach.description;
  
  // Category
  if (ach.id.startsWith("cat-")) return ach.description;
  
  // History/Culture
  if (ach.id.startsWith("history-") || ach.id.startsWith("learn-")) return ach.description;
  
  // Streaks
  const streakMatch = ach.id.match(/^streak-(\d+)$/);
  if (streakMatch) return `${streakMatch[1]} dias seguidos`;
  
  // Special/Behavior
  if (ach.id === "night-owl") return "Explorar após meia-noite";
  if (ach.id === "early-bird") return "Explorar antes das 7h";
  if (ach.id === "weekend-warrior") return "Ver 20 receitas em 1 dia";
  if (ach.id === "binge-viewer") return "Ver 30 receitas em 1 dia";
  if (ach.id === "first-search") return "Fazer primeira busca";
  if (ach.id === "speed-learner") return "Ganhar 100 XP em 1 dia";
  if (ach.id === "speed-master") return "Ganhar 200 XP em 1 dia";
  if (ach.id === "completionist") return "Desbloquear 50 conquistas";
  if (ach.id === "mega-completionist") return "Desbloquear 75 conquistas";
  if (ach.id === "ultimate") return "Desbloquear 100 conquistas";
  
  return ach.description;
}

function getCategory(ach: typeof allAchievements[0]): string {
  if (ach.id.startsWith("explorer")) return "Exploração";
  if (ach.id.startsWith("xp-")) return "Marcos de XP";
  if (ach.id.startsWith("level-")) return "Níveis";
  if (ach.id.startsWith("cat-")) return "Categorias";
  if (ach.id.startsWith("fav-")) return "Favoritos";
  if (ach.id.startsWith("shop-")) return "Lista de Compras";
  if (ach.id.startsWith("diff-")) return "Dificuldade";
  if (ach.id.startsWith("history-") || ach.id.startsWith("learn-")) return "Cultura";
  if (ach.id.startsWith("tips-") || ach.id === "first-tip" || ach.id === "all-tips" ||
      ach.id.startsWith("scholar-") || ach.id === "first-article" || ach.id === "articles-all") return "Escola";
  return "Especiais";
}

const categoryOrder = ["Exploração", "Marcos de XP", "Níveis", "Escola", "Categorias", "Favoritos", "Lista de Compras", "Dificuldade", "Cultura", "Especiais"];

export default function Achievements() {
  const navigate = useNavigate();
  const xpData = useXP();
  const unlockedSet = new Set(xpData.achievements);
  const unlockedCount = xpData.achievements.length;
  const totalCount = allAchievements.length;
  const pct = Math.round((unlockedCount / totalCount) * 100);

  // Group by category
  const grouped = new Map<string, typeof allAchievements>();
  for (const ach of allAchievements) {
    const cat = getCategory(ach);
    if (!grouped.has(cat)) grouped.set(cat, []);
    grouped.get(cat)!.push(ach);
  }

  return (
    <div className="min-h-screen pb-24">
      <Helmet>
        <title>Todas as Conquistas | Nihon Food</title>
        <meta name="description" content="Veja todas as conquistas disponíveis, requisitos de XP e nível para desbloquear cada uma." />
      </Helmet>

      <div className="sticky top-0 z-40 glass-card border-b border-border/50 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
          <ArrowLeft size={18} className="text-foreground" />
        </button>
        <h1 className="font-display font-bold text-foreground text-lg">Todas as Conquistas 🏆</h1>
      </div>

      <div className="px-4 pt-6 max-w-2xl mx-auto space-y-6">
        {/* Progress summary */}
        <div className="glass-card rounded-2xl p-5 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy size={22} className="text-primary" />
            <span className="font-display font-bold text-2xl text-foreground">{unlockedCount}/{totalCount}</span>
          </div>
          <Progress value={pct} className="h-3 mb-2" />
          <p className="text-xs text-muted-foreground">{pct}% das conquistas desbloqueadas</p>
        </div>

        {/* Grouped achievements */}
        {categoryOrder.map(catName => {
          const items = grouped.get(catName);
          if (!items?.length) return null;
          const catUnlocked = items.filter(a => unlockedSet.has(a.id)).length;
          
          return (
            <div key={catName} className="glass-card rounded-2xl p-5">
              <h3 className="font-display font-bold text-foreground mb-1 flex items-center gap-2">
                <Star size={16} className="text-primary" />
                {catName}
                <span className="text-xs font-normal text-muted-foreground ml-auto">{catUnlocked}/{items.length}</span>
              </h3>
              <div className="space-y-2 mt-3">
                {items.map(ach => {
                  const unlocked = unlockedSet.has(ach.id);
                  return (
                    <div
                      key={ach.id}
                      className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                        unlocked ? "bg-primary/10 border border-primary/20" : "bg-secondary/40 opacity-60"
                      }`}
                    >
                      <span className="text-2xl flex-shrink-0">{ach.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-foreground">{ach.title}</span>
                          {unlocked ? (
                            <CheckCircle size={14} className="text-primary flex-shrink-0" />
                          ) : (
                            <Lock size={14} className="text-muted-foreground flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{ach.description}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Zap size={12} className="text-primary" />
                          <span className="text-[11px] text-primary font-medium">{getRequirement(ach)}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
