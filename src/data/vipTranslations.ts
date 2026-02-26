import { VipDrink } from "./vipDrinks/types";
import { VipChefTip } from "./vipDrinks/types";
import { autoTranslatePtToEs } from "./translations";
import i18n from "@/i18n/config";

// ==================== PT → EN auto-translation ====================
const ptToEnTerms: [RegExp, string][] = [
  // Measurements
  [/\bcolher(es)? de sopa\b/gi, "tablespoon(s)"],
  [/\bcolher(es)? de chá\b/gi, "teaspoon(s)"],
  [/\bcolher(es)?\b/gi, "spoon(s)"],
  [/\bxícara(s)?\b/gi, "cup(s)"],

  // Common ingredients
  [/\bcebola roxa\b/gi, "red onion"],
  [/\bcebola\b/gi, "onion"],
  [/\bcoentro\b/gi, "cilantro"],
  [/\balho\b/gi, "garlic"],
  [/\btomate\b/gi, "tomato"],
  [/\blimão\b/gi, "lime"],
  [/\blimões\b/gi, "limes"],
  [/\baçúcar\b/gi, "sugar"],
  [/\bsal grosso\b/gi, "coarse salt"],
  [/\bsal\b/gi, "salt"],
  [/\bpimenta preta\b/gi, "black pepper"],
  [/\bpimenta-da-jamaica\b/gi, "allspice"],
  [/\bpimenta\b/gi, "pepper"],
  [/\bóleo\b/gi, "oil"],
  [/\bmanteiga\b/gi, "butter"],
  [/\bleite condensado\b/gi, "condensed milk"],
  [/\bleite evaporado\b/gi, "evaporated milk"],
  [/\bleite\b/gi, "milk"],
  [/\bovo(s)? cozido(s)?\b/gi, "hard-boiled egg(s)"],
  [/\bovos?\b/gi, "egg(s)"],
  [/\bfrango\b/gi, "chicken"],
  [/\bcarne de porco\b/gi, "pork"],
  [/\bpernil de porco\b/gi, "pork leg"],
  [/\blombo de porco\b/gi, "pork loin"],
  [/\bporco\b/gi, "pork"],
  [/\bcarne de boi\b/gi, "beef"],
  [/\bcostela de boi\b/gi, "beef ribs"],
  [/\bcostela\b/gi, "ribs"],
  [/\bcamarão jumbo\b/gi, "jumbo shrimp"],
  [/\bcamarões\b/gi, "shrimp"],
  [/\bcamarão\b/gi, "shrimp"],
  [/\bpeixe\b/gi, "fish"],
  [/\bpolvo\b/gi, "octopus"],
  [/\blula\b/gi, "squid"],
  [/\bvieira\b/gi, "scallop"],
  [/\blagosta\b/gi, "lobster"],
  [/\bqueijo\b/gi, "cheese"],
  [/\bfarinha de trigo\b/gi, "wheat flour"],
  [/\bfarinha\b/gi, "flour"],
  [/\bmilho\b/gi, "corn"],
  [/\barroz\b/gi, "rice"],
  [/\bfeijão preto\b/gi, "black beans"],
  [/\bfeijão refrito\b/gi, "refried beans"],
  [/\bfeijão\b/gi, "beans"],
  [/\babacaxi\b/gi, "pineapple"],
  [/\bmaçã\b/gi, "apple"],
  [/\bpera\b/gi, "pear"],
  [/\bpêssego\b/gi, "peach"],
  [/\blaranja\b/gi, "orange"],
  [/\babacate\b/gi, "avocado"],
  [/\bbatata\b/gi, "potato"],
  [/\bcenoura\b/gi, "carrot"],
  [/\balface\b/gi, "lettuce"],
  [/\bnoz(es)?\b/gi, "walnut(s)"],
  [/\bamendoim\b/gi, "peanut"],
  [/\bgergelim\b/gi, "sesame"],
  [/\bcravo-da-índia\b/gi, "cloves"],
  [/\bcravo\b/gi, "clove"],
  [/\bcanela em pau\b/gi, "cinnamon stick"],
  [/\bcanela\b/gi, "cinnamon"],
  [/\borégano\b/gi, "oregano"],
  [/\bcominho\b/gi, "cumin"],
  [/\bvinagre de maçã\b/gi, "apple cider vinegar"],
  [/\bvinagre\b/gi, "vinegar"],
  [/\bazeite\b/gi, "olive oil"],
  [/\bbanha de porco\b/gi, "pork lard"],
  [/\bbanha\b/gi, "lard"],
  [/\bcreme de leite\b/gi, "heavy cream"],
  [/\bchocolate amargo\b/gi, "dark chocolate"],
  [/\bchocolate\b/gi, "chocolate"],
  [/\bbaunilha\b/gi, "vanilla"],
  [/\bgelo\b/gi, "ice"],
  [/\bágua quente\b/gi, "hot water"],
  [/\bágua morna\b/gi, "warm water"],
  [/\bágua\b/gi, "water"],
  [/\bfolha de louro\b/gi, "bay leaf"],
  [/\bfolha(s)? de bananeira\b/gi, "banana leaf/leaves"],
  [/\bsementes? de abóbora\b/gi, "pumpkin seed(s)"],
  [/\bcaldo de frango\b/gi, "chicken broth"],
  [/\bcaldo de peixe\b/gi, "fish stock"],
  [/\bcaldo\b/gi, "broth"],
  [/\btortilla(s)? de milho\b/gi, "corn tortilla(s)"],
  [/\btortilla(s)? de farinha\b/gi, "flour tortilla(s)"],
  [/\bqueijo fresco\b/gi, "fresh cheese"],
  [/\bbanana da terra\b/gi, "plantain"],
  [/\bbanana prata\b/gi, "banana"],
  [/\bgengibre\b/gi, "ginger"],
  [/\bermeiro\b/gi, "rosemary"],
  [/\btomilho\b/gi, "thyme"],
  [/\bfrutas\b/gi, "fruits"],
  [/\bfruta\b/gi, "fruit"],
  [/\bperu\b/gi, "turkey"],
  [/\bcordeiro\b/gi, "lamb"],
  [/\bborrego\b/gi, "lamb"],
  [/\bcabrito\b/gi, "kid goat"],
  [/\brábano\b/gi, "radish"],
  [/\bvagem\b/gi, "green beans"],
  [/\bRomã\b/gi, "Pomegranate"],
  [/\bromã\b/gi, "pomegranate"],

  // Cooking verbs
  [/\bCozinhe\b/g, "Cook"],
  [/\bcozinhe\b/g, "cook"],
  [/\bFrite\b/g, "Fry"],
  [/\bfrite\b/g, "fry"],
  [/\bAsse\b/g, "Roast"],
  [/\basse\b/g, "roast"],
  [/\bMisture\b/g, "Mix"],
  [/\bmisture\b/g, "mix"],
  [/\bAdicione\b/g, "Add"],
  [/\badicione\b/g, "add"],
  [/\bSirva\b/g, "Serve"],
  [/\bsirva\b/g, "serve"],
  [/\bPrepare\b/g, "Prepare"],
  [/\bprepare\b/g, "prepare"],
  [/\bCorte\b/g, "Cut"],
  [/\bcorte\b/g, "cut"],
  [/\bBata\b/g, "Blend"],
  [/\bbata\b/g, "blend"],
  [/\bAqueça\b/g, "Heat"],
  [/\baqueça\b/g, "heat"],
  [/\bDesfie\b/g, "Shred"],
  [/\bdesfie\b/g, "shred"],
  [/\bEscorra\b/g, "Drain"],
  [/\bescorra\b/g, "drain"],
  [/\bRefogue\b/g, "Sauté"],
  [/\brefogue\b/g, "sauté"],
  [/\bTempere\b/g, "Season"],
  [/\btempere\b/g, "season"],
  [/\bTorre\b/g, "Toast"],
  [/\btorre\b/g, "toast"],
  [/\bHidrate\b/g, "Soak"],
  [/\bhidrate\b/g, "soak"],
  [/\bDescasque\b/g, "Peel"],
  [/\bdescasque\b/g, "peel"],
  [/\bDissolver?\b/g, "Dissolve"],
  [/\bdissolver?\b/g, "dissolve"],
  [/\bColoque\b/g, "Place"],
  [/\bcoloque\b/g, "place"],
  [/\bCubra\b/g, "Cover"],
  [/\bcubra\b/g, "cover"],
  [/\bDeixe\b/g, "Let"],
  [/\bdeixe\b/g, "let"],
  [/\bMarine\b/g, "Marinate"],
  [/\bmarine\b/g, "marinate"],
  [/\bGrelhe\b/g, "Grill"],
  [/\bgrelhe\b/g, "grill"],
  [/\bMoa\b/g, "Grind"],
  [/\bmoa\b/g, "grind"],
  [/\bEspalhe\b/g, "Spread"],
  [/\bespalhe\b/g, "spread"],
  [/\bRecheie\b/g, "Stuff"],
  [/\brecheie\b/g, "stuff"],
  [/\bRetire\b/g, "Remove"],
  [/\bretire\b/g, "remove"],
  [/\bFinalize\b/g, "Finish"],
  [/\bfinalize\b/g, "finish"],
  [/\bMonte\b/g, "Assemble"],
  [/\bmonte\b/g, "assemble"],

  // Cooking terms
  [/\bpanela\b/gi, "pot"],
  [/\bfrigideira\b/gi, "skillet"],
  [/\bfogo alto\b/gi, "high heat"],
  [/\bfogo baixo\b/gi, "low heat"],
  [/\bfogo médio\b/gi, "medium heat"],
  [/\bfogo baixíssimo\b/gi, "very low heat"],
  [/\bfogo\b/gi, "heat"],
  [/\bforno\b/gi, "oven"],
  [/\bgeladeira\b/gi, "refrigerator"],
  [/\bassadeira\b/gi, "baking pan"],
  [/\brefratário\b/gi, "baking dish"],
  [/\bchapa\b/gi, "griddle"],
  [/\bpedaços\b/gi, "pieces"],
  [/\btiras\b/gi, "strips"],
  [/\bdourar\b/gi, "brown"],
  [/\bdourado\b/gi, "golden"],
  [/\bcrocante\b/gi, "crispy"],
  [/\bmacio\b/gi, "soft"],
  [/\bquente\b/gi, "hot"],
  [/\bfrio\b/gi, "cold"],
  [/\bgelado\b/gi, "chilled"],
  [/\bdesmanchar\b/gi, "fall apart"],
  [/\bdesfiada?\b/gi, "shredded"],
  [/\bempanizado\b/gi, "breaded"],
  [/\bfatiado?\b/gi, "sliced"],
  [/\bpicado?\b/gi, "chopped"],
  [/\bralado?\b/gi, "grated"],
  [/\btorrado?\b/gi, "toasted"],
  [/\brecheado?\b/gi, "stuffed"],
  [/\bmexendo\b/gi, "stirring"],
  [/\bconstantemente\b/gi, "constantly"],
  [/\bgenerosamente\b/gi, "generously"],
  [/\bimediatamente\b/gi, "immediately"],
  [/\blentamente\b/gi, "slowly"],

  // Description terms
  [/\bprato\b/gi, "dish"],
  [/\breceita\b/gi, "recipe"],
  [/\bsabor\b/gi, "flavor"],
  [/\btextura\b/gi, "texture"],
  [/\baroma\b/gi, "aroma"],
  [/\btradição\b/gi, "tradition"],
  [/\btradicionais?\b/gi, "traditional"],
  [/\bdefumado\b/gi, "smoky"],
  [/\bpicante\b/gi, "spicy"],
  [/\bdoce\b/gi, "sweet"],
  [/\bsalgado\b/gi, "salty"],
  [/\brefrescante\b/gi, "refreshing"],
  [/\bdelicioso\b/gi, "delicious"],
  [/\bcremoso\b/gi, "creamy"],
  [/\bsecreta?\b/gi, "secret"],
  [/\bfamília\b/gi, "family"],
  [/\bgerações\b/gi, "generations"],
  [/\bgeração\b/gi, "generation"],
  [/\boriginal\b/gi, "original"],
  [/\bautêntico\b/gi, "authentic"],
  [/\bancestral\b/gi, "ancestral"],
  [/\bversão\b/gi, "version"],
  [/\btécnica\b/gi, "technique"],
  [/\bmétodo\b/gi, "method"],
  [/\bcozinha\b/gi, "cuisine"],
  [/\bcozinheiro\b/gi, "cook"],
  [/\bsopas?\b/gi, "soup(s)"],
  [/\bcom\b/gi, "with"],
  [/\bpor cima\b/gi, "on top"],
  [/\bpor dentro\b/gi, "inside"],
  [/\bpor fora\b/gi, "outside"],
  [/\bnoite toda\b/gi, "overnight"],
  [/\bna véspera\b/gi, "the day before"],
  [/\bminutos?\b/gi, "minute(s)"],
  [/\bhoras?\b/gi, "hour(s)"],
  [/\bdias?\b/gi, "day(s)"],
  [/\bmínimo\b/gi, "minimum"],
  [/\bideal\b/gi, "ideal"],

  // Recipe-specific
  [/\bReceita Secreta\b/gi, "Secret Recipe"],
  [/\bReceita do Chef\b/gi, "Chef's Recipe"],
  [/\bVersão do Chef\b/gi, "Chef's Version"],
  [/\bMétodo Ancestral\b/gi, "Ancestral Method"],
  [/\bReceita Perfeita\b/gi, "Perfect Recipe"],
  [/\bReceita Maia\b/gi, "Mayan Recipe"],
  [/\bSegredo de\b/gi, "Secret of"],
  [/\bEstilo\b/gi, "Style"],
  [/\bMenu Degustação\b/gi, "Tasting Menu"],
  [/\bCardápio Completo\b/gi, "Complete Menu"],
  [/\bMasterclass de Técnicas\b/gi, "Technique Masterclass"],
  [/\bReceitas Secretas do Chef\b/gi, "Chef's Secret Recipes"],
  [/\bReceitas Exclusivas Premium\b/gi, "Premium Exclusive Recipes"],
  [/\bCardápios Completos\b/gi, "Complete Menus"],
  [/\bHarmonização Agave & Comida\b/gi, "Agave & Food Pairing"],
  [/\bReceitas Exclusivas\b/gi, "Exclusive Recipes"],

  // Section headers in cardapios
  [/\bENTRADA:\b/g, "STARTER:"],
  [/\bPRATO PRINCIPAL:\b/g, "MAIN COURSE:"],
  [/\bBEBIDA:\b/g, "DRINK:"],
  [/\bSOBREMESA:\b/g, "DESSERT:"],
  [/\bOFERENDA:\b/g, "OFFERING:"],
  [/\bACOMPANHAMENTOS:\b/g, "SIDES:"],
  [/\bGUISADOS:\b/g, "STEWS:"],
  [/\bCARNES:\b/g, "MEATS:"],
  [/\bSALSAS:\b/g, "SALSAS:"],
  [/\bTORTILLAS:\b/g, "TORTILLAS:"],
  [/\bMILHO:\b/g, "CORN:"],
  [/\bMASA:\b/g, "DOUGH:"],
  [/\bTOSTADAS:\b/g, "TOSTADAS:"],
  [/\bCALDOS:\b/g, "BROTHS:"],
  [/\bPRATO FORTE:\b/g, "MAIN DISH:"],
  [/\bOVOS:\b/g, "EGGS:"],
  [/\bPAN DULCE:\b/g, "SWEET BREAD:"],
  [/\bBEBIDAS:\b/g, "DRINKS:"],
  [/\bFRUTA:\b/g, "FRUIT:"],
  [/\bGUARNIÇÕES:\b/g, "GARNISHES:"],
  [/\bPRATO ÚNICO:\b/g, "MAIN DISH:"],

  // Common description phrases
  [/\bÉ o prato\b/gi, "It is the dish"],
  [/\bnasceu em\b/gi, "was born in"],
  [/\bvem de\b/gi, "comes from"],
  [/\bé servido\b/gi, "is served"],
  [/\bé feito\b/gi, "is made"],
  [/\bsão os?\b/gi, "is/are the"],
  [/\bcidade do México\b/gi, "Mexico City"],
  [/\bdo México\b/gi, "of Mexico"],
  [/\bno México\b/gi, "in Mexico"],
  [/\bdo mundo\b/gi, "in the world"],
];

function autoTranslatePtToEn(text: string): string {
  let result = text;
  for (const [pattern, replacement] of ptToEnTerms) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

function autoTranslateArrayPtToEn(arr: string[]): string[] {
  return arr.map(autoTranslatePtToEn);
}

function autoTranslateArrayPtToEs(arr: string[]): string[] {
  return arr.map(autoTranslatePtToEs);
}

// Difficulty maps
const vipDifficultyMap: Record<string, Record<string, string>> = {
  en: { "Fácil": "Easy", "Médio": "Medium", "Avançado": "Advanced" },
  es: { "Fácil": "Fácil", "Médio": "Medio", "Avançado": "Avanzado" },
};

// VIP category name translations
const vipCategoryTranslation: Record<string, Record<string, string>> = {
  en: {
    "receitas-exclusivas": "Premium Exclusive Recipes",
    "Receitas Exclusivas Premium": "Premium Exclusive Recipes",
    "Receitas Secretas do Chef": "Chef's Secret Recipes",
    "receitas-secretas": "Chef's Secret Recipes",
    "Masterclass de Técnicas": "Technique Masterclass",
    "masterclass-tecnicas": "Technique Masterclass",
    "Harmonização Agave & Comida": "Agave & Food Pairing",
    "Harmonização Sake & Drinks": "Agave & Food Pairing",
    "harmonizacao-sake": "Agave & Food Pairing",
    "Cardápios Completos": "Complete Menus",
    "cardapios-completos": "Complete Menus",
  },
  es: {
    "receitas-exclusivas": "Recetas Exclusivas Premium",
    "Receitas Exclusivas Premium": "Recetas Exclusivas Premium",
    "Receitas Secretas do Chef": "Recetas Secretas del Chef",
    "receitas-secretas": "Recetas Secretas del Chef",
    "Masterclass de Técnicas": "Masterclass de Técnicas",
    "masterclass-tecnicas": "Masterclass de Técnicas",
    "Harmonização Agave & Comida": "Maridaje Agave y Comida",
    "Harmonização Sake & Drinks": "Maridaje Agave y Comida",
    "harmonizacao-sake": "Maridaje Agave y Comida",
    "Cardápios Completos": "Menús Completos",
    "cardapios-completos": "Menús Completos",
  },
};

export function getTranslatedVipCategory(category: string): string {
  const lang = i18n.language;
  if (lang === "pt-BR" || lang.startsWith("pt")) return category;
  const langKey = lang.startsWith("es") ? "es" : "en";
  return vipCategoryTranslation[langKey]?.[category] || category;
}

export function getTranslatedVipDrink(drink: VipDrink): VipDrink {
  const lang = i18n.language;

  // pt-BR is default
  if (lang === "pt-BR" || lang.startsWith("pt")) return drink;

  const langKey = lang.startsWith("es") ? "es" : "en";
  const translatedDifficulty = vipDifficultyMap[langKey]?.[drink.difficulty] || drink.difficulty;
  const translatedCategory = getTranslatedVipCategory(drink.category);

  if (langKey === "es") {
    return {
      ...drink,
      name: autoTranslatePtToEs(drink.name),
      ingredients: autoTranslateArrayPtToEs(drink.ingredients),
      steps: autoTranslateArrayPtToEs(drink.steps),
      description: autoTranslatePtToEs(drink.description),
      difficulty: translatedDifficulty as VipDrink["difficulty"],
      category: translatedCategory,
    };
  }

  // English
  return {
    ...drink,
    name: autoTranslatePtToEn(drink.name),
    ingredients: autoTranslateArrayPtToEn(drink.ingredients),
    steps: autoTranslateArrayPtToEn(drink.steps),
    description: autoTranslatePtToEn(drink.description),
    difficulty: translatedDifficulty as VipDrink["difficulty"],
    category: translatedCategory,
  };
}

export function getTranslatedVipChefTip(tip: VipChefTip): VipChefTip {
  const lang = i18n.language;
  if (lang === "pt-BR" || lang.startsWith("pt")) return tip;

  const langKey = lang.startsWith("es") ? "es" : "en";

  if (langKey === "es") {
    return {
      glass: autoTranslatePtToEs(tip.glass),
      serve: autoTranslatePtToEs(tip.serve),
      tip: autoTranslatePtToEs(tip.tip),
    };
  }

  return {
    glass: autoTranslatePtToEn(tip.glass),
    serve: autoTranslatePtToEn(tip.serve),
    tip: autoTranslatePtToEn(tip.tip),
  };
}
