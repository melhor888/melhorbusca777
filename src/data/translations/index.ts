import { Dish } from "../dishes";
import i18n from "@/i18n/config";
import { dishTranslationsEN } from "./dishes-en";
import { dishTranslationsENBatch8_18 } from "./dishes-en-batch8-18";
import { dishTranslationsES } from "./dishes-es";
import { dishTranslationsESBatch8_18 } from "./dishes-es-batch8-18";

export interface DishTranslation {
  name: string;
  ingredients: string[];
  steps: string[];
  description?: string;
  curiosity?: string;
  origin?: string;
}

const translationMaps: Record<string, Record<string, DishTranslation>> = {
  en: { ...dishTranslationsEN, ...dishTranslationsENBatch8_18 },
  es: { ...dishTranslationsES, ...dishTranslationsESBatch8_18 },
};

const difficultyMap: Record<string, Record<string, string>> = {
  en: { "Fácil": "Easy", "Médio": "Medium", "Avançado": "Advanced" },
  es: { "Fácil": "Fácil", "Médio": "Medio", "Avançado": "Avanzado" },
};

const categoryMap: Record<string, Record<string, string>> = {
  en: {
    "Tacos": "Tacos",
    "Tortillas & Bases": "Tortillas & Bases",
    "Pratos Tradicionais": "Traditional Dishes",
    "Antojitos": "Antojitos",
    "Queijos & Recheios": "Cheese & Fillings",
    "Molhos & Salsas": "Sauces & Salsas",
    "Sopas & Caldos": "Soups & Broths",
    "Carnes Mexicanas": "Mexican Meats",
    "Mariscos": "Seafood",
    "Sobremesas": "Desserts",
    "Bebidas": "Beverages",
    "Arroz & Feijão": "Rice & Beans",
    "Café da Manhã": "Breakfast",
    "Tamales & Massas": "Tamales & Dough",
    "Cultura Mexicana": "Mexican Culture",
    "Escola Mexicana": "Mexican School",
  },
  es: {
    "Tacos": "Tacos",
    "Tortillas & Bases": "Tortillas y Bases",
    "Pratos Tradicionais": "Platos Tradicionales",
    "Antojitos": "Antojitos",
    "Queijos & Recheios": "Quesos y Rellenos",
    "Molhos & Salsas": "Salsas",
    "Sopas & Caldos": "Sopas y Caldos",
    "Carnes Mexicanas": "Carnes Mexicanas",
    "Mariscos": "Mariscos",
    "Sobremesas": "Postres",
    "Bebidas": "Bebidas",
    "Arroz & Feijão": "Arroz y Frijoles",
    "Café da Manhã": "Desayuno",
    "Tamales & Massas": "Tamales y Masas",
    "Cultura Mexicana": "Cultura Mexicana",
    "Escola Mexicana": "Escuela Mexicana",
  },
};

// Automatic PT→ES ingredient/step translation map for terms that differ
const ptToEsTerms: [RegExp, string][] = [
  // Measurements & quantities
  [/\bcolher(es)?\b/gi, "cucharada(s)"],
  [/\bcolher(es)? de sopa\b/gi, "cucharada(s)"],
  [/\bcolher(es)? de chá\b/gi, "cucharadita(s)"],
  [/\bxícara(s)?\b/gi, "taza(s)"],
  
  // Common ingredients
  [/\bcebola\b/gi, "cebolla"],
  [/\bcoentro\b/gi, "cilantro"],
  [/\balho\b/gi, "ajo"],
  [/\btomate\b/gi, "tomate"],
  [/\blimão\b/gi, "limón"],
  [/\baçúcar\b/gi, "azúcar"],
  [/\bsal\b/gi, "sal"],
  [/\bpimenta\b/gi, "pimienta"],
  [/\bóleo\b/gi, "aceite"],
  [/\bmanteiga\b/gi, "mantequilla"],
  [/\bleite\b/gi, "leche"],
  [/\bovo(s)?\b/gi, "huevo(s)"],
  [/\bfrango\b/gi, "pollo"],
  [/\bcarne de res\b/gi, "carne de res"],
  [/\bcarne de porco\b/gi, "carne de cerdo"],
  [/\bporco\b/gi, "cerdo"],
  [/\bcamarão\b/gi, "camarón"],
  [/\bcamarões\b/gi, "camarones"],
  [/\bpeixe\b/gi, "pescado"],
  [/\bqueijo\b/gi, "queso"],
  [/\bfarinha\b/gi, "harina"],
  [/\bfarinha de trigo\b/gi, "harina de trigo"],
  [/\bmilho\b/gi, "maíz"],
  [/\barroz\b/gi, "arroz"],
  [/\bfeijão\b/gi, "frijol"],
  [/\bfeijão preto\b/gi, "frijol negro"],
  [/\bfeijão refrito\b/gi, "frijol refrito"],
  [/\babacaxi\b/gi, "piña"],
  [/\bmelancia\b/gi, "sandía"],
  [/\bmorango(s)?\b/gi, "fresa(s)"],
  [/\bmaçã\b/gi, "manzana"],
  [/\bpera\b/gi, "pera"],
  [/\blaranja\b/gi, "naranja"],
  [/\babacate\b/gi, "aguacate"],
  [/\bbatata\b/gi, "papa"],
  [/\bcenoura\b/gi, "zanahoria"],
  [/\bchuchu\b/gi, "chayote"],
  [/\brepolho\b/gi, "repollo"],
  [/\balface\b/gi, "lechuga"],
  [/\bpimentão\b/gi, "pimiento"],
  [/\bpimentão colorido\b/gi, "pimiento colorido"],
  [/\bpimenta serrano\b/gi, "chile serrano"],
  [/\bpimenta jalapeño\b/gi, "chile jalapeño"],
  [/\bchile\b/gi, "chile"],
  [/\bnoz(es)?\b/gi, "nuez/nueces"],
  [/\bamendoim\b/gi, "cacahuate"],
  [/\bcravo\b/gi, "clavo"],
  [/\bcanela\b/gi, "canela"],
  [/\borégano\b/gi, "orégano"],
  [/\bcominho\b/gi, "comino"],
  [/\bvinagre\b/gi, "vinagre"],
  [/\bazeite\b/gi, "aceite de oliva"],
  [/\bbanha\b/gi, "manteca"],
  [/\bmanteca\b/gi, "manteca"],
  [/\bcreme de leite\b/gi, "crema de leche"],
  [/\bcreme ácido\b/gi, "crema ácida"],
  [/\bchocolate\b/gi, "chocolate"],
  [/\bbaunilha\b/gi, "vainilla"],
  [/\bgelo\b/gi, "hielo"],
  [/\bágua\b/gi, "agua"],
  
  // Cooking terms in steps
  [/\bCozinhe\b/gi, "Cocina"],
  [/\bcozinhe\b/gi, "cocina"],
  [/\bFrite\b/gi, "Fríe"],
  [/\bfrite\b/gi, "fríe"],
  [/\bAsse\b/gi, "Asa"],
  [/\basse\b/gi, "asa"],
  [/\bMisture\b/gi, "Mezcla"],
  [/\bmisture\b/gi, "mezcla"],
  [/\bAdicione\b/gi, "Agrega"],
  [/\badicione\b/gi, "agrega"],
  [/\bSirva\b/gi, "Sirve"],
  [/\bsirva\b/gi, "sirve"],
  [/\bPrepare\b/gi, "Prepara"],
  [/\bprepare\b/gi, "prepara"],
  [/\bCorte\b/gi, "Corta"],
  [/\bcorte\b/gi, "corta"],
  [/\bBata\b/gi, "Licúa"],
  [/\bbata\b/gi, "licúa"],
  [/\bAqueça\b/gi, "Calienta"],
  [/\baqueça\b/gi, "calienta"],
  [/\bDesfie\b/gi, "Deshebra"],
  [/\bdesfie\b/gi, "deshebra"],
  [/\bEscorra\b/gi, "Escurre"],
  [/\bescorra\b/gi, "escurre"],
  [/\bRefogue\b/gi, "Sofríe"],
  [/\brefogue\b/gi, "sofríe"],
  [/\bTempere\b/gi, "Sazona"],
  [/\btempere\b/gi, "sazona"],
  [/\bEsprema\b/gi, "Exprime"],
  [/\besprema\b/gi, "exprime"],
  [/\bpanela\b/gi, "olla"],
  [/\bchapa\b/gi, "comal"],
  [/\bcoloque\b/gi, "coloca"],
  [/\bColoque\b/gi, "Coloca"],
  [/\bcubra\b/gi, "cubre"],
  [/\bCubra\b/gi, "Cubre"],
  [/\bdeixe\b/gi, "deja"],
  [/\bDeixe\b/gi, "Deja"],
  [/\bacompanhe\b/gi, "acompaña"],
  [/\bAcompanhe\b/gi, "Acompaña"],
  
  // Common PT words to ES
  [/\btortillas de milho\b/gi, "tortillas de maíz"],
  [/\btortillas de farinha\b/gi, "tortillas de harina"],
  [/\bqueijo fresco\b/gi, "queso fresco"],
  [/\bqueijo Oaxaca\b/gi, "queso Oaxaca"],
  [/\bsalsa verde\b/gi, "salsa verde"],
  [/\bsalsa roja\b/gi, "salsa roja"],
  [/\bsalsa vermelha\b/gi, "salsa roja"],
  [/\bpáprica\b/gi, "pimentón"],
  [/\bpáprica defumada\b/gi, "pimentón ahumado"],
  [/\bforno\b/gi, "horno"],
  [/\bfogo\b/gi, "fuego"],
  [/\bfogo alto\b/gi, "fuego alto"],
  [/\bfogo baixo\b/gi, "fuego bajo"],
  [/\bfogo médio\b/gi, "fuego medio"],
  [/\bminutos?\b/gi, "min"],
  [/\bhoras?\b/gi, "h"],
  [/\bpedaços\b/gi, "pedazos"],
  [/\btiras\b/gi, "tiras"],
  [/\bcubos\b/gi, "cubos"],
  [/\bpequenos\b/gi, "pequeños"],
  [/\bgrandes\b/gi, "grandes"],
  [/\bdourado\b/gi, "dorado"],
  [/\bcrocante\b/gi, "crujiente"],
  [/\bmacio\b/gi, "suave"],
  [/\bquente\b/gi, "caliente"],
  [/\bfrio\b/gi, "frío"],
  [/\bgelado\b/gi, "helado"],
  
  // Description terms
  [/\bprato\b/gi, "platillo"],
  [/\breceita\b/gi, "receta"],
  [/\bsabor\b/gi, "sabor"],
  [/\btextura\b/gi, "textura"],
  [/\baroma\b/gi, "aroma"],
  [/\btradição\b/gi, "tradición"],
  [/\btradicionais?\b/gi, "tradicional(es)"],
  [/\bespecialidade\b/gi, "especialidad"],
  [/\bdelicioso\b/gi, "delicioso"],
  [/\brefrescante\b/gi, "refrescante"],
  [/\bpicante\b/gi, "picante"],
  [/\bdoce\b/gi, "dulce"],
  [/\bsalgado\b/gi, "salado"],
  [/\bazedo\b/gi, "ácido"],
  [/\bdefumado\b/gi, "ahumado"],
];

/**
 * Automatically translates a Portuguese text to Spanish using term mapping.
 * Since PT and ES are very similar, this covers most culinary terms.
 */
function autoTranslatePtToEs(text: string): string {
  let result = text;
  for (const [pattern, replacement] of ptToEsTerms) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

/**
 * Auto-translates an array of Portuguese strings to Spanish.
 */
function autoTranslateArrayPtToEs(arr: string[]): string[] {
  return arr.map(autoTranslatePtToEs);
}

export function getTranslatedDish(dish: Dish): Dish {
  const lang = i18n.language;
  
  // pt-BR is the default language, no translation needed
  if (lang === "pt-BR" || lang.startsWith("pt")) return dish;

  const langKey = lang.startsWith("es") ? "es" : "en";
  const translations = translationMaps[langKey];
  const t = translations?.[dish.id];

  const translatedDifficulty = difficultyMap[langKey]?.[dish.difficulty] || dish.difficulty;
  const translatedCategory = categoryMap[langKey]?.[dish.category] || dish.category;

  // For Spanish: if no manual translation exists, auto-translate from Portuguese
  if (!t && langKey === "es") {
    return {
      ...dish,
      name: autoTranslatePtToEs(dish.name),
      ingredients: autoTranslateArrayPtToEs(dish.ingredients),
      steps: autoTranslateArrayPtToEs(dish.steps),
      description: dish.description ? autoTranslatePtToEs(dish.description) : dish.description,
      curiosity: dish.curiosity ? autoTranslatePtToEs(dish.curiosity) : dish.curiosity,
      origin: dish.origin ? autoTranslatePtToEs(dish.origin) : dish.origin,
      difficulty: translatedDifficulty as Dish["difficulty"],
      category: translatedCategory,
    };
  }

  if (!t) {
    return {
      ...dish,
      difficulty: translatedDifficulty as Dish["difficulty"],
      category: translatedCategory,
    };
  }

  return {
    ...dish,
    name: t.name || dish.name,
    ingredients: t.ingredients || dish.ingredients,
    steps: t.steps || dish.steps,
    description: t.description || dish.description,
    curiosity: t.curiosity || dish.curiosity,
    origin: t.origin || dish.origin,
    difficulty: translatedDifficulty as Dish["difficulty"],
    category: translatedCategory,
  };
}

export function getTranslatedCategory(category: string): string {
  const lang = i18n.language;
  if (lang === "pt-BR" || lang.startsWith("pt")) return category;
  const langKey = lang.startsWith("es") ? "es" : "en";
  return categoryMap[langKey]?.[category] || category;
}

export function getTranslatedDifficulty(difficulty: string): string {
  const lang = i18n.language;
  if (lang === "pt-BR" || lang.startsWith("pt")) return difficulty;
  const langKey = lang.startsWith("es") ? "es" : "en";
  return difficultyMap[langKey]?.[difficulty] || difficulty;
}
