// VIP Drink Images - Optimized: served from public/images/ as static files
// No imports or import.meta.glob - all paths are constructed directly

// Known VIP image files per category prefix and their number ranges
const vipImageNumbers: Record<string, number[]> = {
  wine: Array.from({ length: 91 }, (_, i) => i + 1),
  beer: Array.from({ length: 89 }, (_, i) => i + 1),
  frozen: Array.from({ length: 50 }, (_, i) => i + 1),
  shot: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 38, 44, 50, 53, 64, 84, 88],
  tiki: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25],
  classico: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 37, 71, 89],
  classic: [18],
  lowabv: Array.from({ length: 100 }, (_, i) => i + 1),
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

// Dedicated images for specific drinks (overrides hash-based assignment)
const dedicatedImages: Record<string, string> = {
  "beer-boulevardier": "/images/vip-beer-90.jpg",
  "beer-bloody-mary": "/images/vip-beer-91.jpg",
  "cerveza-preparada": "/images/vip-beer-92.jpg",
  "brass-monkey": "/images/vip-beer-93.jpg",
  "dark-and-stormy-beer": "/images/vip-beer-94.jpg",
  "sangria-de-kombucha": "/images/vip-wine-92.jpg",
  // Drinks de Autor - imagens dedicadas
  "penicillin-autor": "/images/vip-autor-51.jpg",
  "paper-plane-autor": "/images/vip-autor-52.jpg",
  "last-word-autor": "/images/vip-autor-53.jpg",
  "naked-famous-autor": "/images/vip-autor-54.jpg",
  "bentons-old-fashioned": "/images/vip-autor-55.jpg",
  "trinidad-sour-autor": "/images/vip-autor-56.jpg",
  "division-bell-autor": "/images/vip-autor-57.jpg",
  "jungle-bird-autor": "/images/vip-autor-58.jpg",
  "gold-rush-autor": "/images/vip-autor-59.jpg",
  "tipperary-autor": "/images/vip-autor-60.jpg",
  "suffering-bastard-autor": "/images/vip-autor-61.jpg",
  "chartreuse-swizzle-autor": "/images/vip-autor-62.jpg",
  "bees-knees-autor": "/images/vip-autor-63.jpg",
  "tommys-margarita-autor": "/images/vip-autor-64.jpg",
  "pornstar-martini-autor": "/images/vip-autor-65.jpg",
  "frozen-baileys-oreo": "/images/vip-frozen-51.jpg",
  "frozen-tiki-zombie": "/images/vip-frozen-52.jpg",
  "tom-and-jerry-cocktail": "/images/vip-seasonal-51.jpg",
  "rum-punch-carnaval": "/images/vip-seasonal-52.jpg",
  "french-75-reveillon": "/images/vip-seasonal-53.jpg",
  "caipirinha-de-carnaval": "/images/vip-seasonal-54.jpg",
  "caipiroska-arco-iris": "/images/vip-seasonal-55.jpg",
  "winter-spice-old-fashioned": "/images/vip-seasonal-56.jpg",
  "midnight-kiss": "/images/vip-seasonal-57.jpg",
  "ponche-natalino-brasileiro": "/images/vip-seasonal-58.jpg",
  "eggnog-classico": "/images/vip-seasonal-59.jpg",
  "glogg-de-natal": "/images/vip-seasonal-60.jpg",
  "candy-cane-martini": "/images/vip-seasonal-61.jpg",
  "hot-buttered-rum": "/images/vip-seasonal-62.jpg",
  "christmas-punch": "/images/vip-seasonal-63.jpg",
  "spiced-cranberry-mule": "/images/vip-seasonal-64.jpg",
  "gingerbread-martini": "/images/vip-seasonal-65.jpg",
  "mulled-cider-bourbon": "/images/vip-seasonal-66.jpg",
  "peppermint-white-russian": "/images/vip-seasonal-67.jpg",
  "champagne-cranberry-sparkler": "/images/vip-seasonal-68.jpg",
  "coquito-porto-riquenho-natal": "/images/vip-seasonal-69.jpg",
  "poinsettia-cocktail": "/images/vip-seasonal-70.jpg",
  "champagne-cocktail-classico-reveillon": "/images/vip-seasonal-71.jpg",
  "gold-rush-ano-novo": "/images/vip-seasonal-72.jpg",
  "watermelon-sugar-highball": "/images/vip-seasonal-73.jpg",
  // Sobremesa & Doces - imagens dedicadas (100 receitas)
  "chocolate-martini-noir": "/images/vip-dessert-51.jpg",
  "dark-chocolate-old-fashioned": "/images/vip-dessert-52.jpg",
  "white-chocolate-alexander": "/images/vip-dessert-53.jpg",
  "mexican-chocolate-cocktail": "/images/vip-dessert-54.jpg",
  "chocolate-hazelnut-martini": "/images/vip-dessert-55.jpg",
  "after-eight-cocktail": "/images/vip-dessert-56.jpg",
  "chocolate-orange-negroni-dessert": "/images/vip-dessert-57.jpg",
  "smores-cocktail": "/images/vip-dessert-58.jpg",
  "mocha-espresso-martini": "/images/vip-dessert-59.jpg",
  "chocolate-stout-float": "/images/vip-dessert-60.jpg",
  "ganache-cocktail": "/images/vip-dessert-61.jpg",
  "ferrero-rocher-shot": "/images/vip-dessert-62.jpg",
  "rocky-road-milkshake-cocktail": "/images/vip-dessert-63.jpg",
  "chili-chocolate-margarita": "/images/vip-dessert-64.jpg",
  "truffle-martini": "/images/vip-dessert-65.jpg",
  "salted-caramel-espresso-martini": "/images/vip-dessert-66.jpg",
  "dulce-de-leche-cocktail": "/images/vip-dessert-67.jpg",
  "butterscotch-old-fashioned": "/images/vip-dessert-68.jpg",
  "creme-brulee-cocktail-dessert": "/images/vip-dessert-69.jpg",
  "toffee-apple-cocktail-dessert": "/images/vip-dessert-70.jpg",
  "banoffee-martini": "/images/vip-dessert-71.jpg",
  "honeycomb-whiskey-sour": "/images/vip-dessert-72.jpg",
  "caramel-popcorn-cocktail-dessert": "/images/vip-dessert-73.jpg",
  "maple-bourbon-cream": "/images/vip-dessert-74.jpg",
  "flan-cocktail": "/images/vip-dessert-75.jpg",
  "panna-cotta-cocktail": "/images/vip-dessert-76.jpg",
  "churros-cocktail-dessert": "/images/vip-dessert-77.jpg",
  "pecan-pie-bourbon": "/images/vip-dessert-78.jpg",
  "millionaires-shortbread-cocktail": "/images/vip-dessert-79.jpg",
  "strawberry-cheesecake-martini": "/images/vip-dessert-80.jpg",
  "lemon-meringue-cocktail-dessert": "/images/vip-dessert-81.jpg",
  "peach-cobbler-cocktail": "/images/vip-dessert-82.jpg",
  "key-lime-pie-shot": "/images/vip-dessert-83.jpg",
  "mango-lassi-cocktail-dessert": "/images/vip-dessert-84.jpg",
  "pavlova-cocktail-dessert": "/images/vip-dessert-85.jpg",
  "apple-strudel-cocktail": "/images/vip-dessert-86.jpg",
  "raspberry-clafoutis-cocktail": "/images/vip-dessert-87.jpg",
  "baked-alaska-cocktail": "/images/vip-dessert-88.jpg",
  "coconut-cream-pie-cocktail-dessert": "/images/vip-dessert-89.jpg",
  "fig-and-honey-cocktail": "/images/vip-dessert-90.jpg",
  "rhubarb-crumble-cocktail": "/images/vip-dessert-91.jpg",
  "passion-fruit-mousse-cocktail": "/images/vip-dessert-92.jpg",
  "berry-trifle-cocktail": "/images/vip-dessert-93.jpg",
  "mango-sticky-rice-cocktail-dessert": "/images/vip-dessert-94.jpg",
  "black-forest-gateau-cocktail": "/images/vip-dessert-95.jpg",
  "baklava-cocktail-dessert": "/images/vip-dessert-96.jpg",
  "gulab-jamun-cocktail": "/images/vip-dessert-97.jpg",
  "tres-leches-cocktail-dessert": "/images/vip-dessert-98.jpg",
  "arroz-doce-cocktail": "/images/vip-dessert-99.jpg",
  "eggnog-dessert-cocktail": "/images/vip-dessert-100.jpg",
  "horchata-cocktail": "/images/vip-dessert-101.jpg",
  "condensed-milk-caipirinha": "/images/vip-dessert-102.jpg",
  "white-russian-dessert": "/images/vip-dessert-103.jpg",
  "chai-cream-cocktail": "/images/vip-dessert-104.jpg",
  "vietnamese-coffee-cocktail-dessert": "/images/vip-dessert-105.jpg",
  "rompope-mexicano": "/images/vip-dessert-106.jpg",
  "golden-milk-cocktail-dessert": "/images/vip-dessert-107.jpg",
  "brigadeiro-cocktail": "/images/vip-dessert-108.jpg",
  "affogato-cocktail-dessert": "/images/vip-dessert-109.jpg",
  "banana-split-cocktail": "/images/vip-dessert-110.jpg",
  "frozen-tiramisu": "/images/vip-dessert-111.jpg",
  "frozen-pina-colada-dessert": "/images/vip-dessert-112.jpg",
  "strawberry-milkshake-cocktail": "/images/vip-dessert-113.jpg",
  "cookies-and-cream-cocktail": "/images/vip-dessert-114.jpg",
  "mango-sorbet-cocktail": "/images/vip-dessert-115.jpg",
  "sundae-cocktail-caramelo": "/images/vip-dessert-116.jpg",
  "gelato-negroni": "/images/vip-dessert-117.jpg",
  "ice-cream-float-champagne": "/images/vip-dessert-118.jpg",
  "frozen-cheesecake-cocktail": "/images/vip-dessert-119.jpg",
  "carrot-cake-cocktail-dessert": "/images/vip-dessert-120.jpg",
  "red-velvet-cocktail-dessert": "/images/vip-dessert-121.jpg",
  "opera-cake-cocktail": "/images/vip-dessert-122.jpg",
  "tiramisu-shot": "/images/vip-dessert-123.jpg",
  "sachertorte-cocktail": "/images/vip-dessert-124.jpg",
  "bolo-de-rolo-cocktail": "/images/vip-dessert-125.jpg",
  "mille-feuille-cocktail": "/images/vip-dessert-126.jpg",
  "lamington-cocktail": "/images/vip-dessert-127.jpg",
  "quindim-cocktail": "/images/vip-dessert-128.jpg",
  "croissant-cocktail": "/images/vip-dessert-129.jpg",
  "cotton-candy-cocktail": "/images/vip-dessert-130.jpg",
  "maple-walnut-cocktail": "/images/vip-dessert-131.jpg",
  "bubble-gum-cocktail": "/images/vip-dessert-132.jpg",
  "waffle-cocktail": "/images/vip-dessert-133.jpg",
  "cinnamon-roll-cocktail-dessert": "/images/vip-dessert-134.jpg",
  "peanut-butter-cup-cocktail-dessert": "/images/vip-dessert-135.jpg",
  "matcha-white-chocolate-cocktail": "/images/vip-dessert-136.jpg",
  "turkish-delight-cocktail": "/images/vip-dessert-137.jpg",
  "beignet-cocktail": "/images/vip-dessert-138.jpg",
  "dulce-de-membrillo-cocktail": "/images/vip-dessert-139.jpg",
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
  if (dedicatedImages[drinkId]) return dedicatedImages[drinkId];
  const pool = categoryImagePools[category];
  if (!pool || pool.length === 0) return "";
  return pool[hashCode(drinkId) % pool.length];
}

export function getVipCategoryHero(slug: string): string {
  return categoryHeroBanners[slug] || "";
}
