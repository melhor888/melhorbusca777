import { useState, useEffect } from "react";
import { Clock, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { isVipTrial, getTrialRemainingMs } from "@/utils/vipKeys";

export default function VipTrialBanner() {
  const { t } = useTranslation();
  const [remaining, setRemaining] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isVipTrial()) return;
    setShow(true);
    setRemaining(getTrialRemainingMs());

    const interval = setInterval(() => {
      const ms = getTrialRemainingMs();
      setRemaining(ms);
      if (ms <= 0) {
        setShow(false);
        clearInterval(interval);
        window.location.reload();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!show) return null;

  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-4 py-2 flex items-center justify-center gap-3 text-sm font-medium shadow-lg">
      <Clock className="w-4 h-4 animate-pulse" />
      <span>
        {t("vip.trialFree")}{" "}
        <strong>{minutes}:{seconds.toString().padStart(2, "0")}</strong>
      </span>
      <Link
        to="/queroservip"
        className="ml-2 bg-black text-amber-400 px-3 py-1 rounded-full text-xs font-bold hover:bg-black/80 transition-colors inline-flex items-center gap-1"
      >
        <Crown className="w-3 h-3" />
        {t("vip.unlockVipBtn")}
      </Link>
    </div>
  );
}
