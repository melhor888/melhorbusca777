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
import vipBeer9 from "@/assets/vip-beer-9.jpg";
import vipBeer10 from "@/assets/vip-beer-10.jpg";
import vipBeer11 from "@/assets/vip-beer-11.jpg";
import vipBeer12 from "@/assets/vip-beer-12.jpg";
import vipBeer13 from "@/assets/vip-beer-13.jpg";
import vipBeer14 from "@/assets/vip-beer-14.jpg";
import vipBeer15 from "@/assets/vip-beer-15.jpg";
import vipBeer16 from "@/assets/vip-beer-16.jpg";
import vipBeer17 from "@/assets/vip-beer-17.jpg";
import vipBeer18 from "@/assets/vip-beer-18.jpg";
import vipBeer19 from "@/assets/vip-beer-19.jpg";
import vipBeer20 from "@/assets/vip-beer-20.jpg";
import vipBeer21 from "@/assets/vip-beer-21.jpg";
import vipBeer22 from "@/assets/vip-beer-22.jpg";
import vipBeer23 from "@/assets/vip-beer-23.jpg";
import vipBeer24 from "@/assets/vip-beer-24.jpg";
import vipBeer25 from "@/assets/vip-beer-25.jpg";
import vipBeer26 from "@/assets/vip-beer-26.jpg";
import vipBeer27 from "@/assets/vip-beer-27.jpg";
import vipBeer28 from "@/assets/vip-beer-28.jpg";
import vipBeer29 from "@/assets/vip-beer-29.jpg";
import vipBeer30 from "@/assets/vip-beer-30.jpg";
import vipBeer31 from "@/assets/vip-beer-31.jpg";
import vipBeer32 from "@/assets/vip-beer-32.jpg";
import vipBeer33 from "@/assets/vip-beer-33.jpg";

import vipHeroVinho from "@/assets/vip-hero-vinho-sangrias.jpg";
import vipHeroCerveja from "@/assets/vip-hero-cerveja-beer.jpg";

const wineImages = [vipWine1, vipWine2, vipWine3, vipWine4, vipWine5, vipWine6, vipWine7, vipWine8];
const beerImages = [
  vipBeer1, vipBeer2, vipBeer3, vipBeer4, vipBeer5, vipBeer6, vipBeer7, vipBeer8,
  vipBeer9, vipBeer10, vipBeer11, vipBeer12, vipBeer13, vipBeer14, vipBeer15, vipBeer16,
  vipBeer17, vipBeer18, vipBeer19, vipBeer20, vipBeer21, vipBeer22, vipBeer23, vipBeer24,
  vipBeer25, vipBeer26, vipBeer27, vipBeer28, vipBeer29, vipBeer30, vipBeer31, vipBeer32,
  vipBeer33,
];

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
