import { Lock, Zap } from "lucide-react";
import type { BartenderTip } from "@/data/bartenderTips";

interface TipCardProps {
  tip: BartenderTip;
  unlocked: boolean;
  onClick: () => void;
}

const categoryColors: Record<string, string> = {
  tecnica: "bg-primary/20 text-primary",
  apresentacao: "bg-accent/20 text-accent",
  harmonizacao: "bg-[hsl(38,90%,55%)]/20 text-[hsl(38,90%,55%)]",
  historia: "bg-[hsl(345,70%,40%)]/20 text-[hsl(345,70%,40%)]",
};

const categoryLabels: Record<string, string> = {
  tecnica: "Técnica",
  apresentacao: "Apresentação",
  harmonizacao: "Harmonização",
  historia: "História",
};

export default function TipCard({ tip, unlocked, onClick }: TipCardProps) {
  return (
    <button
      onClick={onClick}
      disabled={!unlocked}
      className={`w-full text-left glass-card rounded-xl p-4 transition-all duration-300 ${
        unlocked
          ? "hover:scale-[1.02] hover:border-primary/30 active:scale-[0.98]"
          : "opacity-60 cursor-not-allowed"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center text-2xl flex-shrink-0 relative">
          {tip.icon}
          {!unlocked && (
            <div className="absolute inset-0 rounded-xl bg-background/70 flex items-center justify-center">
              <Lock size={16} className="text-muted-foreground" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${categoryColors[tip.category]}`}>
              {categoryLabels[tip.category]}
            </span>
            {!unlocked && (
              <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                <Zap size={10} /> {tip.requiredXP} XP
              </span>
            )}
          </div>
          <h3 className="font-display font-bold text-foreground text-sm truncate">
            {tip.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
            {unlocked ? tip.subtitle : `Desbloqueie com ${tip.requiredXP} XP`}
          </p>
        </div>
      </div>
    </button>
  );
}
