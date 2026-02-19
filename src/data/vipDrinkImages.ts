// VIP Drink Images - Category-based image pools
import vipWine1 from "@/assets/vip-wine-1.jpg";
import vipWine2 from "@/assets/vip-wine-2.jpg";
import vipWine3 from "@/assets/vip-wine-3.jpg";
import vipWine4 from "@/assets/vip-wine-4.jpg";
import vipWine5 from "@/assets/vip-wine-5.jpg";
import vipWine6 from "@/assets/vip-wine-6.jpg";
import vipWine7 from "@/assets/vip-wine-7.jpg";
import vipWine8 from "@/assets/vip-wine-8.jpg";

import vipBeer1 from "@/assets/vip-beer-1.jpg";
import vipBeer2 from "@/assets/vip-beer-2.jpg";
import vipBeer3 from "@/assets/vip-beer-3.jpg";
import vipBeer4 from "@/assets/vip-beer-4.jpg";
import vipBeer5 from "@/assets/vip-beer-5.jpg";
import vipBeer6 from "@/assets/vip-beer-6.jpg";
import vipBeer7 from "@/assets/vip-beer-7.jpg";
import vipBeer8 from "@/assets/vip-beer-8.jpg";

import vipHeroVinho from "@/assets/vip-hero-vinho-sangrias.jpg";
import vipHeroCerveja from "@/assets/vip-hero-cerveja-beer.jpg";

const wineImages = [vipWine1, vipWine2, vipWine3, vipWine4, vipWine5, vipWine6, vipWine7, vipWine8];
const beerImages = [vipBeer1, vipBeer2, vipBeer3, vipBeer4, vipBeer5, vipBeer6, vipBeer7, vipBeer8];

const categoryImagePools: Record<string, string[]> = {
  "Vinho & Sangrias": wineImages,
  "Cerveja & Beer Cocktails": beerImages,
};

const categoryHeroBanners: Record<string, string> = {
  "vinho-sangrias": vipHeroVinho,
  "cerveja-beer-cocktails": vipHeroCerveja,
};

// Simple hash to get consistent image for each drink
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getVipDrinkImage(drinkId: string, category: string): string {
  const pool = categoryImagePools[category];
  if (!pool || pool.length === 0) return "";
  return pool[hashCode(drinkId) % pool.length];
}

export function getVipCategoryHero(slug: string): string {
  return categoryHeroBanners[slug] || "";
}
