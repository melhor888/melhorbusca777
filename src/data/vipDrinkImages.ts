// VIP Drink Images - Optimized: served from public/images/ as static files
// No imports or import.meta.glob - all paths are constructed directly

// Known VIP image files per category prefix and their number ranges
const vipImageNumbers: Record<string, number[]> = {
  wine: Array.from({ length: 20 }, (_, i) => i + 1),
  beer: Array.from({ length: 50 }, (_, i) => i + 1),
  frozen: Array.from({ length: 50 }, (_, i) => i + 1),
  shot: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 38, 44, 50, 53, 64, 84, 88],
  tiki: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25],
  classico: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 37, 71, 89],
  classic: [18],
  lowabv: Array.from({ length: 50 }, (_, i) => i + 1),
  autor: Array.from({ length: 50 }, (_, i) => i + 1),
  cafe: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 34, 39],
  seasonal: Array.from({ length: 50 }, (_, i) => i + 1),
  dessert: Array.from({ length: 50 }, (_, i) => i + 1),
  spicy: Array.from({ length: 50 }, (_, i) => i + 1),
  tea: Array.from({ length: 50 }, (_, i) => i + 1),
  vegan: Array.from({ length: 50 }, (_, i) => i + 1),
  masterclass: Array.from({ length: 50 }, (_, i) => i + 1),
  volta: Array.from({ length: 50 }, (_, i) => i + 1),
};

function buildImagePool(prefix: string): string[] {
  const numbers = vipImageNumbers[prefix] || [];
  return numbers.map(n => `/images/vip-${prefix}-${n}.jpg`);
}

const categoryImagePools: Record<string, string[]> = {
  "Vinho & Sangrias": buildImagePool('wine'),
  "Cerveja & Beer Cocktails": buildImagePool('beer'),
  "Frozen & Blended": buildImagePool('frozen'),
  "Shots & Shooters": buildImagePool('shot'),
  "Tropical & Tiki": buildImagePool('tiki'),
  "Clássicos Reinventados": [...buildImagePool('classic'), ...buildImagePool('classico')],
  "Low ABV & Wellness": buildImagePool('lowabv'),
  "Drinks de Autor": buildImagePool('autor'),
  "Café & Dessert Cocktails": buildImagePool('cafe'),
  "Sazonais & Festivos": buildImagePool('seasonal'),
  "Sobremesa & Doces": buildImagePool('dessert'),
  "Picantes & Defumados": buildImagePool('spicy'),
  "Chá & Infusões": buildImagePool('tea'),
  "Veganos & Plant-Based": buildImagePool('vegan'),
  "Masterclass Cocktails": buildImagePool('masterclass'),
  "Volta ao Mundo": buildImagePool('volta'),
};

const categoryHeroBanners: Record<string, string> = {
  "vinho-sangrias": "/images/vip-hero-vinho-sangrias.jpg",
  "cerveja-beer-cocktails": "/images/vip-hero-cerveja-beer.jpg",
  "frozen-blended": "/images/vip-hero-frozen-blended.jpg",
  "shots-shooters": "/images/vip-hero-shots-shooters.jpg",
  "tropical-tiki": "/images/vip-hero-tropical-tiki.jpg",
  "classicos-reinventados": "/images/vip-hero-classicos-reinventados.jpg",
  "low-abv-wellness": "/images/vip-hero-low-abv.jpg",
  "drinks-autor": "/images/vip-hero-drinks-autor.jpg",
  "cafe-dessert-cocktails": "/images/vip-hero-cafe-dessert.jpg",
  "sazonais-festivos": categoryImagePools["Sazonais & Festivos"]?.[0] || '',
  "sobremesa-doces": categoryImagePools["Sobremesa & Doces"]?.[0] || '',
  "picantes-defumados": categoryImagePools["Picantes & Defumados"]?.[0] || '',
  "cha-infusoes": categoryImagePools["Chá & Infusões"]?.[0] || '',
  "veganos-plant-based": categoryImagePools["Veganos & Plant-Based"]?.[0] || '',
  "masterclass-cocktails": categoryImagePools["Masterclass Cocktails"]?.[0] || '',
  "volta-ao-mundo": categoryImagePools["Volta ao Mundo"]?.[0] || '',
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
