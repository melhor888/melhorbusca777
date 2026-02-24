import { useState, useEffect, useRef, useCallback } from "react";
import { Play, Pause, RotateCcw, Timer, Crown } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CookingTimerProps {
  /** e.g. "30 min", "1h 20 min", "45 min" */
  timeString: string;
}

function parseTimeToSeconds(time: string): number {
  let total = 0;
  const hMatch = time.match(/(\d+)\s*h/);
  const mMatch = time.match(/(\d+)\s*min/);
  if (hMatch) total += parseInt(hMatch[1]) * 3600;
  if (mMatch) total += parseInt(mMatch[1]) * 60;
  if (total === 0) {
    const num = parseInt(time);
    if (!isNaN(num)) total = num * 60;
  }
  return total;
}

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

export default function CookingTimer({ timeString }: CookingTimerProps) {
  const { t } = useTranslation();
  const totalSeconds = parseTimeToSeconds(timeString);
  const [remaining, setRemaining] = useState(totalSeconds);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setRunning(false);
  }, []);

  const start = useCallback(() => {
    if (remaining <= 0) return;
    setRunning(true);
    setFinished(false);
    intervalRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          stop();
          setFinished(true);
          if ("Notification" in window && Notification.permission === "granted") {
            new Notification("⏰ Tempo esgotado!", {
              body: "Sua receita está pronta!",
              icon: "/pwa-192x192.png",
            });
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [remaining, stop]);

  const reset = useCallback(() => {
    stop();
    setRemaining(totalSeconds);
    setFinished(false);
  }, [totalSeconds, stop]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const progress = totalSeconds > 0 ? ((totalSeconds - remaining) / totalSeconds) * 100 : 0;

  if (totalSeconds <= 0) return null;

  return (
    <div className={`rounded-2xl border p-4 transition-all ${
      finished
        ? "border-green-500/30 bg-green-500/5 animate-pulse"
        : running
        ? "border-yellow-500/30 bg-yellow-500/5"
        : "border-yellow-500/15 bg-card"
    }`}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center">
          <Timer size={16} className="text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold text-foreground">{t("vip.timer")}</span>
            <Crown size={12} className="text-yellow-500" />
          </div>
          <p className="text-[10px] text-yellow-500 font-semibold uppercase tracking-wider">{t("vip.exclusiveVip")}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 rounded-full bg-secondary mb-3 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ${
            finished ? "bg-green-500" : "bg-gradient-to-r from-yellow-400 to-amber-500"
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center justify-between">
        <span className={`font-mono text-2xl font-bold ${
          finished ? "text-green-500" : remaining <= 60 && running ? "text-red-400" : "text-foreground"
        }`}>
          {finished ? t("vip.timerDone") : formatTime(remaining)}
        </span>

        <div className="flex gap-2">
          <button
            onClick={reset}
            className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Reset"
          >
            <RotateCcw size={16} />
          </button>
          <button
            onClick={running ? stop : start}
            disabled={remaining <= 0 && !finished}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              running
                ? "bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30"
                : "bg-gradient-to-br from-yellow-400 to-amber-600 text-white hover:shadow-lg"
            }`}
            aria-label={running ? "Pause" : "Start"}
          >
            {running ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
