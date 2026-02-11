import { useXP, getLevelProgress, getLevel } from "@/hooks/useXP";
import { Zap } from "lucide-react";

interface XPBarProps {
  compact?: boolean;
}

export default function XPBar({ compact = false }: XPBarProps) {
  const { totalXP, level, progress } = useXP();

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 text-primary">
          <Zap size={14} className="fill-primary" />
          <span className="text-xs font-bold">{totalXP} XP</span>
        </div>
        <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-[10px] text-muted-foreground">Nv.{level.level}</span>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Zap size={20} className="text-primary fill-primary" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">Nível {level.level}</p>
            <p className="text-xs text-primary font-semibold">{level.title}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-gradient-gold">{totalXP} XP</p>
          {level.maxXP !== Infinity && (
            <p className="text-[10px] text-muted-foreground">{level.maxXP - totalXP} XP para próximo nível</p>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <div className="w-full h-2.5 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-muted-foreground">
          <span>{level.minXP} XP</span>
          {level.maxXP !== Infinity && <span>{level.maxXP} XP</span>}
        </div>
      </div>
    </div>
  );
}
