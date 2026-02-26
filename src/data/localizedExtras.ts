import i18n from "@/i18n/config";
import { getDishExtra, DishExtra } from "./dishExtras";
import { curiosityTranslationsEN } from "./curiosityTranslations-en";
import { curiosityTranslationsES } from "./curiosityTranslations-es";

/**
 * Convert price string like "$25 MXN (~R$8)" to localized currency
 */
function localizePrice(price: string, lang: string): string {
  if (lang === "pt-BR" || lang.startsWith("pt")) return price;
  if (price === "Gratuito") return lang.startsWith("es") ? "Gratis" : "Free";
  if (price === "Premium") return "Premium";

  const match = price.match(/^(\$[\d.,]+ MXN)\s*\(~R\$\s*([\d.,]+)\s*(\([^)]*\))?\)(.*)$/);
  if (!match) {
    const simpleMatch = price.match(/R\$\s*([\d.,]+)/);
    if (!simpleMatch) return price;
    const brl = parseFloat(simpleMatch[1].replace(",", "."));
    if (lang.startsWith("es")) {
      return price.replace(/R\$\s*[\d.,]+/, `€${Math.round(brl * 0.17)}`);
    }
    return price.replace(/R\$\s*[\d.,]+/, `$${Math.round(brl * 0.19)} USD`);
  }

  const mxnPart = match[1];
  const brlValue = parseFloat(match[2].replace(",", "."));
  const suffix = match[4] || "";

  if (lang.startsWith("es")) {
    const eurValue = Math.max(1, Math.round(brlValue * 0.17));
    return `${mxnPart} (~€${eurValue})${suffix}`;
  }
  const usdValue = Math.max(1, Math.round(brlValue * 0.19));
  return `${mxnPart} (~$${usdValue} USD)${suffix}`;
}

const curiosityMaps: Record<string, Record<string, string>> = {
  en: curiosityTranslationsEN,
  es: curiosityTranslationsES,
};

function localizeCuriosity(curiosity: string, lang: string, id?: string): string {
  if (lang === "pt-BR" || lang.startsWith("pt")) return curiosity;
  if (!id) return curiosity;
  const langKey = lang.startsWith("es") ? "es" : "en";
  return curiosityMaps[langKey]?.[id] || curiosity;
}

const originTranslationsEN: Record<string, string> = {
  "Cidade do México": "Mexico City",
  "México (todo o país)": "Mexico (nationwide)",
  "Centro do México": "Central Mexico",
  "Centro e Norte do México": "Central and Northern Mexico",
  "Norte do México": "Northern Mexico",
  "Costa do Pacífico": "Pacific Coast",
  "Costa mexicana": "Mexican Coast",
  "México rural": "Rural Mexico",
  "México pré-hispânico": "Pre-Hispanic Mexico",
  "México contemporâneo": "Contemporary Mexico",
  "México (pré-hispânico)": "Mexico (pre-Hispanic)",
  "Espanha → México": "Spain → Mexico",
  "México/Nicarágua": "Mexico/Nicaragua",
  "México/Texas": "Mexico/Texas",
  "Valência, Espanha → México": "Valencia, Spain → Mexico",
  "África → México": "Africa → Mexico",
  "Campo mexicano": "Mexican Countryside",
  "Norte do México/Texas": "Northern Mexico/Texas",
  "Estado do México": "State of Mexico",
  "Hidalgo/Estado do México": "Hidalgo/State of Mexico",
  "Mesoamérica (3000 a.C.)": "Mesoamerica (3000 BC)",
  "Sonora/Arizona": "Sonora/Arizona",
  "Guerrero/Jalisco, México": "Guerrero/Jalisco, Mexico",
  "Oaxaca/Centro do México": "Oaxaca/Central Mexico",
  "Puebla/Oaxaca": "Puebla/Oaxaca",
  "Toluca, Estado do México": "Toluca, State of Mexico",
  "Tlalpan, CDMX": "Tlalpan, Mexico City",
};

const originTranslationsES: Record<string, string> = {
  "Cidade do México": "Ciudad de México",
  "México (todo o país)": "México (todo el país)",
  "Centro do México": "Centro de México",
  "Centro e Norte do México": "Centro y Norte de México",
  "Norte do México": "Norte de México",
  "Costa do Pacífico": "Costa del Pacífico",
  "Costa mexicana": "Costa mexicana",
  "México rural": "México rural",
  "México pré-hispânico": "México prehispánico",
  "México contemporâneo": "México contemporáneo",
  "México (pré-hispânico)": "México (prehispánico)",
  "Espanha → México": "España → México",
  "México/Nicarágua": "México/Nicaragua",
  "Valência, Espanha → México": "Valencia, España → México",
  "África → México": "África → México",
  "Campo mexicano": "Campo mexicano",
  "Norte do México/Texas": "Norte de México/Texas",
  "Estado do México": "Estado de México",
  "Hidalgo/Estado do México": "Hidalgo/Estado de México",
  "Mesoamérica (3000 a.C.)": "Mesoamérica (3000 a.C.)",
  "Guerrero/Jalisco, México": "Guerrero/Jalisco, México",
  "Oaxaca/Centro do México": "Oaxaca/Centro de México",
  "Puebla/Oaxaca": "Puebla/Oaxaca",
  "Toluca, Estado do México": "Toluca, Estado de México",
  "Tlalpan, CDMX": "Tlalpan, CDMX",
};

function localizeOrigin(origin: string, lang: string): string {
  if (lang === "pt-BR" || lang.startsWith("pt")) return origin;
  const langKey = lang.startsWith("es") ? "es" : "en";
  const map = langKey === "en" ? originTranslationsEN : originTranslationsES;
  return map[origin] || origin;
}

export function getLocalizedExtra(id: string): DishExtra | undefined {
  const extra = getDishExtra(id);
  if (!extra) return undefined;

  const lang = i18n.language;
  if (lang === "pt-BR" || lang.startsWith("pt")) return extra;

  return {
    price: localizePrice(extra.price, lang),
    curiosity: localizeCuriosity(extra.curiosity, lang, id),
    origin: localizeOrigin(extra.origin, lang),
  };
}
