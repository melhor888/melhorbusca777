import i18n from "@/i18n/config";
import { getDishExtra, DishExtra } from "./dishExtras";

/**
 * Convert price string like "$25 MXN (~R$8)" to localized currency
 * PT-BR: keep as-is
 * EN: "$25 MXN (~$1.50 USD)"
 * ES: "$25 MXN (~€1.30)"
 */
function localizePrice(price: string, lang: string): string {
  if (lang === "pt-BR" || lang.startsWith("pt")) return price;
  if (price === "Gratuito") return lang.startsWith("es") ? "Gratis" : "Free";
  if (price === "Premium") return "Premium";

  // Extract pattern "$XX MXN (~R$YY)"
  const match = price.match(/^(\$[\d.,]+ MXN)\s*\(~R\$\s*([\d.,]+)\s*(\([^)]*\))?\)(.*)$/);
  if (!match) {
    // Try simpler pattern "R$ XX"
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
  // EN
  const usdValue = Math.max(1, Math.round(brlValue * 0.19));
  return `${mxnPart} (~$${usdValue} USD)${suffix}`;
}

function localizeCuriosity(curiosity: string, lang: string): string {
  if (lang === "pt-BR" || lang.startsWith("pt")) return curiosity;
  // Curiosities remain in PT for now (already handled by getTranslatedDish for dish.curiosity)
  return curiosity;
}

export function getLocalizedExtra(id: string): DishExtra | undefined {
  const extra = getDishExtra(id);
  if (!extra) return undefined;

  const lang = i18n.language;
  if (lang === "pt-BR" || lang.startsWith("pt")) return extra;

  return {
    price: localizePrice(extra.price, lang),
    curiosity: extra.curiosity,
    origin: extra.origin,
  };
}
