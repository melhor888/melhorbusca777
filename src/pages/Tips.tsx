import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useXP, getLevel, LEVELS } from "@/hooks/useXP";
import { bartenderTips } from "@/data/bartenderTips";
import { achievements, getAchievementById } from "@/data/achievements";
import XPBar from "@/components/XPBar";
import TipCard from "@/components/TipCard";
import { Trophy, Lock, Shield, BookOpen, CheckCircle2 } from "lucide-react";
import { getTranslatedTip, getTipsUIStrings } from "@/data/tipTranslations";

function getTipRequiredLevel(index: number): number {
  if (index < 2) return 1;
  if (index < 4) return 2;
  if (index < 6) return 3;
  if (index < 8) return 4;
  if (index < 10) return 5;
  if (index < 13) return 6;
  if (index < 16) return 7;
  if (index < 19) return 8;
  if (index < 22) return 9;
  if (index < 25) return 10;
  if (index < 28) return 11;
  if (index < 31) return 12;
  if (index < 34) return 13;
  if (index < 37) return 14;
  return 15;
}

export default function Tips() {
  const navigate = useNavigate();
  const { totalXP, achievements: unlockedAchievements, viewedRecipes } = useXP();
  const currentLevel = getLevel(totalXP);
  const [readTips, setReadTips] = useState<string[]>([]);
  const ui = getTipsUIStrings();

  useEffect(() => {
    window.scrollTo(0, 0);
    const stored = JSON.parse(localStorage.getItem("drinks-co-read-tips") || "[]") as string[];
    setReadTips(stored);
  }, []);

  const tipsWithLevel = bartenderTips.map((tip, index) => ({
    ...tip,
    requiredLevel: tip.requiredLevel ?? getTipRequiredLevel(index),
  }));

  const availableTips = tipsWithLevel.filter((t, i) => {
    if (i < 3) return t.requiredXP <= totalXP;
    return currentLevel.level >= t.requiredLevel;
  });

  const lockedTips = tipsWithLevel.filter((t, i) => {
    if (i < 3) return t.requiredXP > totalXP;
    return currentLevel.level < t.requiredLevel;
  });

  const readCount = availableTips.filter(t => readTips.includes(t.id)).length;
  const nextLocked = lockedTips[0];
  const nextLevelNeeded = nextLocked?.requiredLevel ?? 0;
  const nextLevelInfo = LEVELS.find(l => l.level === nextLevelNeeded);

  return (
    <div className="min-h-screen pb-24 pt-4 px-4 lg:px-6 lg:max-w-4xl lg:mx-auto">
      <h1 className="text-2xl font-display font-bold text-foreground mb-4">
        {ui.pageTitle}
      </h1>

      <XPBar />

      <div className="grid grid-cols-4 gap-2 mt-4">
        <div className="glass-card rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-foreground">{currentLevel.level}</p>
          <p className="text-[10px] text-muted-foreground">{ui.level}</p>
          <p className="text-[9px] text-primary font-semibold">{currentLevel.title}</p>
        </div>
        <div className="glass-card rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-primary">{availableTips.length}</p>
          <p className="text-[10px] text-muted-foreground">{ui.unlocked}</p>
        </div>
        <div className="glass-card rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-accent">{readCount}</p>
          <p className="text-[10px] text-muted-foreground">{ui.read}</p>
        </div>
        <div className="glass-card rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-muted-foreground">{lockedTips.length}</p>
          <p className="text-[10px] text-muted-foreground">{ui.locked}</p>
        </div>
      </div>

      {/* Progress bar of read tips */}
      {availableTips.length > 0 && (
        <div className="mt-3 glass-card rounded-xl p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-foreground flex items-center gap-1">
              <BookOpen size={12} className="text-primary" /> {ui.readingProgress}
            </span>
            <span className="text-xs text-muted-foreground">
              {readCount}/{availableTips.length}
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${(readCount / availableTips.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {nextLocked && (
        <div className="mt-3 glass-card rounded-xl p-3 border-primary/20 flex items-center gap-3">
          <Shield size={16} className="text-primary flex-shrink-0" />
          <p className="text-xs text-muted-foreground">
            {ui.nextTipRequires}{" "}
            {nextLocked.requiredLevel <= 1 ? (
              <span className="text-primary font-bold">{nextLocked.requiredXP - totalXP} XP</span>
            ) : (
              <span className="text-primary font-bold">
                {ui.level} {nextLocked.requiredLevel} ({nextLevelInfo?.title})
                {nextLevelInfo ? ` — ${nextLevelInfo.minXP} XP` : ""}
              </span>
            )}
          </p>
        </div>
      )}

      {unlockedAchievements.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-display font-bold text-foreground mb-3 flex items-center gap-2">
            <Trophy size={16} className="text-primary" />
            {ui.achievements}
          </h2>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            {unlockedAchievements.map((id) => {
              const ach = getAchievementById(id);
              if (!ach) return null;
              return (
                <div key={id} className="glass-card rounded-xl p-3 flex-shrink-0 min-w-[100px] text-center">
                  <div className="text-2xl mb-1">{ach.icon}</div>
                  <p className="text-[10px] font-bold text-foreground truncate">{ach.title}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {availableTips.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-display font-bold text-foreground mb-3">
            {ui.unlockedTips} ({availableTips.length})
          </h2>
          <div className="space-y-3">
            {availableTips.map((rawTip, i) => {
              const tip = getTranslatedTip(rawTip);
              return (
                <div key={tip.id} className="animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
                  <TipCard
                    tip={tip}
                    unlocked={true}
                    tipLevel={rawTip.requiredLevel}
                    isRead={readTips.includes(tip.id)}
                    onClick={() => navigate(`/tip/${tip.id}`)}
                  />
                </div>
              );
            })}
          </div>
        </section>
      )}

      {lockedTips.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-display font-bold text-foreground mb-3">
            {ui.toUnlock} ({lockedTips.length})
          </h2>
          <div className="space-y-3">
            {lockedTips.map((rawTip) => {
              const tip = getTranslatedTip(rawTip);
              return (
                <TipCard key={tip.id} tip={tip} unlocked={false} tipLevel={rawTip.requiredLevel} onClick={() => {}} />
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
