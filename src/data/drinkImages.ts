// Optimized: No imports - images served from public/images/ as static files
// This eliminates ~800 bundled image modules that were causing build failures

// Aliases: keys that use a DIFFERENT drink's image file
const imageAliases: Record<string, string> = {
  "vodka-martini": "martini",
  "tequila-sour": "whisky-sour",
  "gin-rickey": "gin-tonic",
  "southside": "gin-fizz",
  "gin-basil-smash": "bramble",
  "pegu-club": "french-75",
  "white-lady": "french-75",
  "monkey-gland": "cosmopolitan",
  "gin-gin-mule": "mexican-mule",
  "naked-and-famous": "aviation",
  "brave-bull": "godfather",
  "mezcal-margarita": "spicy-margarita",
  "brandy-alexander": "espresso-martini",
  "stinger": "martini",
  "jack-rose": "clover-club",
  "angel-face": "corpse-reviver",
  "between-the-sheets": "sidecar",
  "hanky-panky": "negroni",
  "safe-sex-on-beach": "sex-on-beach",
  "tropical-punch-sa": "tropical-punch",
  "pina-colada-sa": "pina-colada",
  "fruit-punch-sa": "fruit-punch",
  "espresso-shot": "espresso-martini",
  "mezcal-negroni": "boulevardier",
  "canchanchara": "caipirinha",
  "carajillo-espanhol": "carajillo",
  "mezcal-paloma": "paloma",
  "whisky-ginger": "penicillin",
  "kentucky-mule": "mexican-mule",
  "elderflower-gin": "gin-fizz",
  "pink-gin-tonic": "gin-tonic",
  "death-in-afternoon": "french-75",
  "elderflower-spritz": "limoncello-spritz",
  "champagne-margarita": "margarita",
  // Batch-suffixed aliases (duplicate recipe variants sharing same image)
  "lavender-collins-b7": "lavender-collins",
  "cardamom-rose-lassi-b7": "cardamom-rose-lassi",
  "cucumber-sake-b7": "cucumber-sake",
  "rose-gin-fizz-b8": "rose-gin-fizz",
  "frozen-pina-colada-b7": "frozen-pina-colada",
};

export function getDrinkImage(imageKey: string): string {
  // Special case: hero image doesn't have "drink-" prefix
  if (imageKey === "hero-mojito") {
    return "/images/hero-mojito.jpg";
  }

  const alias = imageAliases[imageKey];
  if (alias) {
    return `/images/drink-${alias}.jpg`;
  }

  return `/images/drink-${imageKey}.jpg`;
}
