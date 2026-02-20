// VIP Drink Images - Optimized with import.meta.glob
// This replaces 300+ individual imports with a single glob pattern

const allVipImages = import.meta.glob<string>(
  '/src/assets/vip-*.jpg',
  { eager: true, import: 'default' }
);

// Helper to filter images by prefix and sort numerically
function getImagePool(prefix: string): string[] {
  return Object.entries(allVipImages)
    .filter(([path]) => {
      const filename = path.split('/').pop() || '';
      // Match vip-{prefix}-{number}.jpg but NOT vip-hero-{prefix}
      return filename.startsWith(`vip-${prefix}-`) && !filename.startsWith('vip-hero-');
    })
    .sort(([a], [b]) => {
      const numA = parseInt(a.match(/(\d+)\.jpg$/)?.[1] || '0');
      const numB = parseInt(b.match(/(\d+)\.jpg$/)?.[1] || '0');
      return numA - numB;
    })
    .map(([, url]) => url);
}

// Helper to get a specific hero image
function getHeroImage(name: string): string {
  const entry = Object.entries(allVipImages).find(([path]) =>
    path.includes(`/vip-hero-${name}`)
  );
  return entry ? entry[1] : '';
}

// Build category image pools
const wineImages = getImagePool('wine');
const beerImages = getImagePool('beer');
const frozenImages = getImagePool('frozen');
const shotImages = getImagePool('shot');
const tikiImages = getImagePool('tiki');
const classicImages = getImagePool('classic').concat(getImagePool('classico'));
const lowAbvImages = getImagePool('lowabv');
const autorImages = getImagePool('autor');
const cafeImages = getImagePool('cafe');
const seasonalImages = getImagePool('seasonal');
const dessertImages = getImagePool('dessert');
const spicyImages = getImagePool('spicy');
const teaImages = getImagePool('tea');
const veganImages = getImagePool('vegan');
const masterclassImages = getImagePool('masterclass');
const voltaImages = getImagePool('volta');

const categoryImagePools: Record<string, string[]> = {
  "Vinho & Sangrias": wineImages,
  "Cerveja & Beer Cocktails": beerImages,
  "Frozen & Blended": frozenImages,
  "Shots & Shooters": shotImages,
  "Tropical & Tiki": tikiImages,
  "Clássicos Reinventados": classicImages,
  "Low ABV & Wellness": lowAbvImages,
  "Drinks de Autor": autorImages,
  "Café & Dessert Cocktails": cafeImages,
  "Sazonais & Festivos": seasonalImages,
  "Sobremesa & Doces": dessertImages,
  "Picantes & Defumados": spicyImages,
  "Chá & Infusões": teaImages,
  "Veganos & Plant-Based": veganImages,
  "Masterclass Cocktails": masterclassImages,
  "Volta ao Mundo": voltaImages,
};

const categoryHeroBanners: Record<string, string> = {
  "vinho-sangrias": getHeroImage('vinho-sangrias'),
  "cerveja-beer-cocktails": getHeroImage('cerveja-beer'),
  "frozen-blended": getHeroImage('frozen-blended'),
  "shots-shooters": getHeroImage('shots-shooters'),
  "tropical-tiki": getHeroImage('tropical-tiki'),
  "classicos-reinventados": getHeroImage('classicos-reinventados'),
  "low-abv-wellness": getHeroImage('low-abv'),
  "drinks-autor": getHeroImage('drinks-autor'),
  "cafe-dessert-cocktails": getHeroImage('cafe-dessert'),
  "sazonais-festivos": seasonalImages[0] || '',
  "sobremesa-doces": dessertImages[0] || '',
  "picantes-defumados": spicyImages[0] || '',
  "cha-infusoes": teaImages[0] || '',
  "veganos-plant-based": veganImages[0] || '',
  "masterclass-cocktails": masterclassImages[0] || '',
  "volta-ao-mundo": voltaImages[0] || '',
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
