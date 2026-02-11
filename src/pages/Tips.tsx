import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useXP } from "@/hooks/useXP";
import { bartenderTips } from "@/data/bartenderTips";
import { achievements, getAchievementById } from "@/data/achievements";
import XPBar from "@/components/XPBar";
import TipCard from "@/components/TipCard";
import { Trophy, Lock } from "lucide-react";

export default function Tips() {
  const navigate = useNavigate();
  const { totalXP, achievements: unlockedAchievements, viewedRecipes } = useXP();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const availableTips = bartenderTips.filter((t) => t.requiredXP <= totalXP);
  const lockedTips = bartenderTips.filter((t) => t.requiredXP > totalXP);
  const nextTip = lockedTips[0];

  return (
    <div className="min-h-screen pb-24 pt-4 px-4">
      <h1 className="text-2xl font-display font-bold text-foreground mb-4">
        Escola do Bartender
      </h1>

      {/* XP Bar */}
      <XPBar />

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 mt-4">
        <div className="glass-card rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-foreground">{viewedRecipes.length}</p>
          <p className="text-[10px] text-muted-foreground">Receitas Vistas</p>
        </div>
        <div className="glass-card rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-primary">{availableTips.length}</p>
          <p className="text-[10px] text-muted-foreground">Dicas Desbloqueadas</p>
        </div>
        <div className="glass-card rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-accent">{unlockedAchievements.length}</p>
          <p className="text-[10px] text-muted-foreground">Conquistas</p>
        </div>
      </div>

      {/* Next unlock hint */}
      {nextTip && (
        <div className="mt-4 glass-card rounded-xl p-3 border-primary/20 flex items-center gap-3">
          <Lock size={16} className="text-muted-foreground flex-shrink-0" />
          <p className="text-xs text-muted-foreground">
            Próxima dica em <span className="text-primary font-bold">{nextTip.requiredXP - totalXP} XP</span> — continue visualizando receitas!
          </p>
        </div>
      )}

      {/* Achievements */}
      {unlockedAchievements.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-display font-bold text-foreground mb-3 flex items-center gap-2">
            <Trophy size={16} className="text-primary" />
            Conquistas
          </h2>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            {unlockedAchievements.map((id) => {
              const ach = getAchievementById(id);
              if (!ach) return null;
              return (
                <div
                  key={id}
                  className="glass-card rounded-xl p-3 flex-shrink-0 min-w-[100px] text-center"
                >
                  <div className="text-2xl mb-1">{ach.icon}</div>
                  <p className="text-[10px] font-bold text-foreground truncate">{ach.title}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Unlocked Tips */}
      {availableTips.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-display font-bold text-foreground mb-3">
            📖 Dicas Desbloqueadas
          </h2>
          <div className="space-y-3">
            {availableTips.map((tip, i) => (
              <div
                key={tip.id}
                className="animate-fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <TipCard
                  tip={tip}
                  unlocked={true}
                  onClick={() => navigate(`/tip/${tip.id}`)}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Locked Tips */}
      {lockedTips.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-display font-bold text-foreground mb-3">
            🔒 A Desbloquear
          </h2>
          <div className="space-y-3">
            {lockedTips.map((tip) => (
              <TipCard
                key={tip.id}
                tip={tip}
                unlocked={false}
                onClick={() => {}}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
