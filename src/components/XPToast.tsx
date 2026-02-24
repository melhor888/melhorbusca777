import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Zap } from "lucide-react";

interface XPToastProps {
  xp: number;
  show: boolean;
  onClose: () => void;
  message?: string;
}

export default function XPToast({ xp, show, onClose, message }: XPToastProps) {
  const { t } = useTranslation();

  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 2500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] animate-fade-in">
      <div className="glass-card rounded-full px-5 py-2.5 flex items-center gap-2 shadow-lg shadow-primary/20 border-primary/30">
        <Zap size={16} className="text-primary fill-primary" />
        <span className="text-sm font-bold text-foreground">+{xp} XP</span>
        <span className="text-xs text-muted-foreground">{message || t("xp.recipeViewed")}</span>
      </div>
    </div>
  );
}
