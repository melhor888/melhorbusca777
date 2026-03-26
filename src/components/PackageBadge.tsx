import { Crown, Star } from "lucide-react";

interface PackageBadgeProps {
  tier: "basico" | "premium" | "vip";
  size?: "sm" | "md";
}

export default function PackageBadge({ tier, size = "sm" }: PackageBadgeProps) {
  if (tier === "basico") return null;

  const styles = {
    premium: {
      bg: "bg-gradient-to-r from-amber-500 to-orange-500",
      icon: Star,
      label: "Premium",
    },
    vip: {
      bg: "bg-gradient-to-r from-purple-600 to-indigo-600",
      icon: Crown,
      label: "VIP",
    },
  };

  const config = styles[tier];
  const Icon = config.icon;
  const sizeClasses = size === "sm" ? "px-1.5 py-0.5 text-[9px]" : "px-2.5 py-1 text-xs";

  return (
    <span className={`inline-flex items-center gap-0.5 ${config.bg} text-white font-bold rounded-md ${sizeClasses} shadow-sm`}>
      <Icon size={size === "sm" ? 8 : 12} />
      {config.label}
    </span>
  );
}
