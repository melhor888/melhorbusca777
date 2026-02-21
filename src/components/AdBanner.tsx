import { isVipUnlocked } from "@/utils/vipKeys";

interface AdBannerProps {
  slot?: string;
  className?: string;
}

/**
 * Ad placeholder component.
 * Hidden for VIP users. Shows a placeholder for non-VIP users.
 * Replace the placeholder content with actual ad code (e.g. Google AdSense) when ready.
 */
export default function AdBanner({ slot = "default", className = "" }: AdBannerProps) {
  // VIP users never see ads
  if (isVipUnlocked()) return null;

  return (
    <div className={`w-full flex items-center justify-center py-3 ${className}`}>
      <div className="w-full max-w-2xl rounded-xl border border-dashed border-border/50 bg-secondary/30 py-6 px-4 text-center">
        <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">Espaço publicitário</p>
        {/* Replace this div with actual ad script when integrating AdSense */}
        {/* <ins className="adsbygoogle" data-ad-client="..." data-ad-slot={slot} /> */}
      </div>
    </div>
  );
}
