import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Lock, CheckCircle, Zap, Star, Trophy } from "lucide-react";
import { useXP, getLevel, LEVELS } from "@/hooks/useXP";
import { achievements as allAchievements, getTranslatedAchievement } from "@/data/achievements";
import { Progress } from "@/components/ui/progress";

function getCategory(ach: typeof allAchievements[0], t: (key: string) => string): string {
  if (ach.id.startsWith("explorer")) return t("achievements_page.exploration");
  if (ach.id.startsWith("xp-")) return t("achievements_page.xpMilestones");
  if (ach.id.startsWith("level-")) return t("achievements_page.levels");
  if (ach.id.startsWith("cat-")) return t("achievements_page.categoryAch");
  if (ach.id.startsWith("fav-")) return t("achievements_page.favoritesAch");
  if (ach.id.startsWith("shop-")) return t("achievements_page.shoppingList");
  if (ach.id.startsWith("diff-")) return t("achievements_page.difficultyAch");
  if (ach.id.startsWith("history-") || ach.id.startsWith("learn-")) return t("achievements_page.cultureAch");
  if (ach.id.startsWith("tips-") || ach.id === "first-tip" || ach.id === "all-tips" ||
      ach.id.startsWith("scholar-") || ach.id === "first-article" || ach.id === "articles-all") return t("achievements_page.schoolAch");
  return t("achievements_page.specialAch");
}

export default function Achievements() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const xpData = useXP();
  const unlockedSet = new Set(xpData.achievements);
  const unlockedCount = xpData.achievements.length;
  const totalCount = allAchievements.length;
  const pct = Math.round((unlockedCount / totalCount) * 100);

  const categoryOrder = [
    t("achievements_page.exploration"),
    t("achievements_page.xpMilestones"),
    t("achievements_page.levels"),
    t("achievements_page.schoolAch"),
    t("achievements_page.categoryAch"),
    t("achievements_page.favoritesAch"),
    t("achievements_page.shoppingList"),
    t("achievements_page.difficultyAch"),
    t("achievements_page.cultureAch"),
    t("achievements_page.specialAch"),
  ];

  // Group by category
  const grouped = new Map<string, typeof allAchievements>();
  for (const rawAch of allAchievements) {
    const ach = getTranslatedAchievement(rawAch);
    const cat = getCategory(rawAch, t); // Use raw for ID check
    if (!grouped.has(cat)) grouped.set(cat, []);
    grouped.get(cat)!.push(ach);
  }

  return (
    <div className="min-h-screen pb-24">
      <Helmet>
        <title>{t("achievements_page.title")} | Mexi Food XP</title>
      </Helmet>

      <div className="sticky top-0 z-40 glass-card border-b border-border/50 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
          <ArrowLeft size={18} className="text-foreground" />
        </button>
        <h1 className="font-display font-bold text-foreground text-lg">{t("achievements_page.title")}</h1>
      </div>

      <div className="px-4 pt-6 max-w-2xl mx-auto space-y-6">
        {/* Progress summary */}
        <div className="glass-card rounded-2xl p-5 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy size={22} className="text-primary" />
            <span className="font-display font-bold text-2xl text-foreground">{unlockedCount}/{totalCount}</span>
          </div>
          <Progress value={pct} className="h-3 mb-2" />
          <p className="text-xs text-muted-foreground">{t("achievements_page.pctUnlocked", { pct })}</p>
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