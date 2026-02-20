import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTipById } from "@/data/bartenderTips";
import { getTipImage } from "@/data/tipImages";
import { ArrowLeft, Zap } from "lucide-react";
import { useXP } from "@/hooks/useXP";
import XPToast from "@/components/XPToast";

const XP_PER_TIP = 5;

export default function TipDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addTipXP } = useXP();
  const [showXP, setShowXP] = useState(false);
  const [xpGained, setXpGained] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!id) return;
    const timer = setTimeout(() => {
      const gained = addTipXP(id, XP_PER_TIP);
      if (gained > 0) {
        setXpGained(gained);
        setShowXP(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [id, addTipXP]);

  const tip = getTipById(id || "");

  if (!tip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Dica não encontrada.</p>
      </div>
    );
  }

  const categoryColors: Record<string, string> = {
    tecnica: "text-primary",
    apresentacao: "text-accent",
    harmonizacao: "text-[hsl(38,90%,55%)]",
    historia: "text-[hsl(345,70%,40%)]",
  };

  return (
    <div className="min-h-screen pb-24">
      <XPToast xp={xpGained} show={showXP} onClose={() => setShowXP(false)} />
      {/* Header */}
      <div className="glass-card border-b border-border/50 px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/tips")}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center"
          >
            <ArrowLeft size={20} className="text-foreground" />
          </button>
          <div className="flex-1">
            <p className={`text-xs font-semibold uppercase tracking-wider ${categoryColors[tip.category]}`}>
              Dica do Bartender
            </p>
            <h1 className="text-lg font-display font-bold text-foreground truncate">
              {tip.title}
            </h1>
          </div>
          <div className="text-3xl">{tip.icon}</div>
        </div>
      </div>

      {/* Hero card */}
      <div className="px-4 mt-4">
        <div className="glass-card rounded-2xl p-5 text-center space-y-2">
          <div className="text-5xl">{tip.icon}</div>
          <h2 className="text-xl font-display font-bold text-foreground">{tip.title}</h2>
          <p className="text-sm text-muted-foreground">{tip.subtitle}</p>
          <div className="flex items-center justify-center gap-1 text-primary">
            <Zap size={14} className="fill-primary" />
            <span className="text-xs font-bold">Desbloqueado com {tip.requiredXP} XP</span>
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div className="px-4 mt-6 space-y-4">
        {tip.content.map((section, i) => (
          <div
            key={i}
            className={`rounded-xl p-4 animate-fade-in ${
              section.highlight
                ? "glass-card border-primary/30 bg-primary/5"
                : section.heading
                ? "glass-card"
                : ""
            }`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {section.heading && (
              <h3 className="font-display font-bold text-foreground text-sm mb-2">
                {section.heading}
              </h3>
            )}
            <p className="text-secondary-foreground text-sm leading-relaxed">
              {section.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
