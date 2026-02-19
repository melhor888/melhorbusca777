import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Trophy, Eye, Heart, Star, BookOpen, Zap, Target } from "lucide-react";
import { useXP, getLevel, getLevelProgress, LEVELS } from "@/hooks/useXP";
import { useFavorites } from "@/hooks/useFavorites";
import { achievements as allAchievements, getAchievementById } from "@/data/achievements";
import { drinks, categories, getDrinksByCategory } from "@/data/drinks";

export default function Dashboard() {
  const navigate = useNavigate();
  const xpData = useXP();
  const { favorites } = useFavorites();
  const level = getLevel(xpData.totalXP);
  const progress = getLevelProgress(xpData.totalXP);

  // Stats by category
  const categoryStats = categories.map((cat) => {
    const catDrinks = getDrinksByCategory(cat);
    const viewed = catDrinks.filter((d) => xpData.viewedRecipes.includes(d.id)).length;
    return { name: cat, total: catDrinks.length, viewed };
  });

  const totalViewed = xpData.viewedRecipes.length;
  const totalDrinks = drinks.length;
  const unlockedCount = xpData.achievements.length;
  const totalAchievements = allAchievements.length;
  const readArticles = JSON.parse(localStorage.getItem("drinks-co-read-articles") || "[]") as string[];

  return (
    <div className="min-h-screen pb-24">
      <Helmet>
        <title>Dashboard do Bartender | Cachaça Quest</title>
      </Helmet>

      {/* Header */}
      <div className="sticky top-0 z-40 glass-card border-b border-border/50 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
          <ArrowLeft size={18} className="text-foreground" />
        </button>
        <h1 className="font-display font-bold text-foreground text-lg">Dashboard do Bartender</h1>
      </div>

      <div className="px-4 pt-6 max-w-2xl mx-auto space-y-6">
        {/* Level Card */}
        <div className="glass-card rounded-2xl p-6 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-3">
            <span className="text-3xl">🍸</span>
          </div>
          <h2 className="font-display font-bold text-xl text-foreground">{level.title}</h2>
          <p className="text-primary text-sm font-semibold">Nível {level.level}</p>
          <div className="mt-4 w-full bg-secondary rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-gold-light rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {xpData.totalXP} XP {level.maxXP !== Infinity && `/ ${level.maxXP} XP`}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Eye, label: "Receitas Vistas", value: totalViewed, sub: `de ${totalDrinks}` },
            { icon: Heart, label: "Favoritos", value: favorites.length, sub: "drinks salvos" },
            { icon: Trophy, label: "Conquistas", value: unlockedCount, sub: `de ${totalAchievements}` },
            { icon: BookOpen, label: "Artigos Lidos", value: readArticles.length, sub: "completos" },
          ].map(({ icon: Icon, label, value, sub }) => (
            <div key={label} className="glass-card rounded-xl p-4">
              <Icon size={20} className="text-primary mb-2" />
              <p className="text-2xl font-display font-bold text-foreground">{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="text-[10px] text-muted-foreground/70">{sub}</p>
            </div>
          ))}
        </div>

        {/* XP by Category */}
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
            <Target size={18} className="text-primary" />
            Progresso por Categoria
          </h3>
          <div className="space-y-3">
            {categoryStats.map(({ name, total, viewed }) => {
              const pct = total > 0 ? Math.round((viewed / total) * 100) : 0;
              return (
                <div key={name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-secondary-foreground truncate">{name}</span>
                    <span className="text-muted-foreground">{viewed}/{total}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-primary/80 rounded-full transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
            <Star size={18} className="text-primary" />
            Conquistas ({unlockedCount}/{totalAchievements})
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
            {allAchievements.slice(0, 30).map((ach) => {
              const unlocked = xpData.achievements.includes(ach.id);
              return (
                <div
                  key={ach.id}
                  className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                    unlocked ? "bg-primary/10" : "bg-secondary/50 opacity-40"
                  }`}
                  title={`${ach.title}: ${ach.description}`}
                >
                  <span className="text-2xl">{ach.icon}</span>
                  <span className="text-[9px] text-center text-muted-foreground leading-tight truncate w-full">
                    {ach.title}
                  </span>
                </div>
              );
            })}
          </div>
          {allAchievements.length > 30 && (
            <p className="text-xs text-muted-foreground text-center mt-3">
              +{allAchievements.length - 30} conquistas disponíveis
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
