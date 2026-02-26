import { useTranslation } from "react-i18next";
import { SpiceLevel, spiceLevelLabels } from "@/data/dishes";

interface SpiceBadgeProps {
  level: SpiceLevel;
  size?: "sm" | "md";
  showLabel?: boolean;
}

const spiceI18nKeys: Record<SpiceLevel, string> = {
  0: "difficulty.mild",
  1: "difficulty.mediumSpice",
  2: "difficulty.hot",
  3: "difficulty.extreme",
};

export default function SpiceBadge({ level, size = "sm", showLabel = false }: SpiceBadgeProps) {
  const { t } = useTranslation();
  const info = spiceLevelLabels[level];
  const textSize = size === "sm" ? "text-[10px]" : "text-xs";
  // Get translated label (strip emoji prefix from i18n value since icon is separate)
  const label = t(spiceI18nKeys[level]).replace(/^[^\w\sÀ-ú]+\s*/, "");

  return (
    <span className={`inline-flex items-center gap-1 ${info.color} ${textSize} font-semibold`} title={label}>
      <span>{info.icon}</span>
      {showLabel && <span>{label}</span>}
    </span>
  );
}
