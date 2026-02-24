import { SpiceLevel, spiceLevelLabels } from "@/data/dishes";

interface SpiceBadgeProps {
  level: SpiceLevel;
  size?: "sm" | "md";
  showLabel?: boolean;
}

export default function SpiceBadge({ level, size = "sm", showLabel = false }: SpiceBadgeProps) {
  const info = spiceLevelLabels[level];
  const textSize = size === "sm" ? "text-[10px]" : "text-xs";

  return (
    <span className={`inline-flex items-center gap-1 ${info.color} ${textSize} font-semibold`} title={`Ardência: ${info.label}`}>
      <span>{info.icon}</span>
      {showLabel && <span>{info.label}</span>}
    </span>
  );
}
