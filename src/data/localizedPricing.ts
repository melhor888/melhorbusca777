import i18n from "@/i18n/config";
import { DishPricing, getDishPricing } from "./dishPricing";

interface LocalizedPricing extends DishPricing {}

// Approximate conversion rates from BRL
const BRL_TO_USD = 0.19;
const BRL_TO_EUR = 0.17;

function convertPrice(brlPrice: string, currency: "USD" | "EUR"): string {
  const rate = currency === "USD" ? BRL_TO_USD : BRL_TO_EUR;
  const symbol = currency === "USD" ? "$" : "€";
  
  // Extract numbers from price string like "R$ 12–18 (unidade)"
  const numbers = brlPrice.match(/[\d,]+(?:\.\d+)?/g);
  if (!numbers) return brlPrice;
  
  let result = brlPrice.replace("R$ ", "").replace("R$", "");
  numbers.forEach(num => {
    const val = parseFloat(num.replace(",", "."));
    const converted = Math.round(val * rate);
    result = result.replace(num, String(converted));
  });
  
  return `${symbol} ${result.trim()}`;
}

const usRegions = [
  { brRegion: "SP (Capital)", usRegion: "New York (NYC)", esRegion: "Madrid" },
  { brRegion: "RJ (Capital)", usRegion: "Los Angeles (CA)", esRegion: "Barcelona" },
  { brRegion: "MG (BH)", usRegion: "Chicago (IL)", esRegion: "Valencia" },
  { brRegion: "RS (POA)", usRegion: "Houston (TX)", esRegion: "Sevilla" },
  { brRegion: "BA (Salvador)", usRegion: "Miami (FL)", esRegion: "Bilbao" },
  { brRegion: "CE (Fortaleza)", usRegion: "San Antonio (TX)", esRegion: "Málaga" },
];

export function getLocalizedPricing(id: string): LocalizedPricing | undefined {
  const pricing = getDishPricing(id);
  if (!pricing) return undefined;

  const lang = i18n.language;
  
  // PT-BR: return as-is (Brazilian data)
  if (lang === "pt-BR" || lang.startsWith("pt")) return pricing;

  const isEs = lang.startsWith("es");
  const currency = isEs ? "EUR" : "USD";

  return {
    sellPrice: convertPrice(pricing.sellPrice, currency),
    productionCost: convertPrice(pricing.productionCost, currency),
    margin: pricing.margin,
    yield: pricing.yield,
    regionalPrices: pricing.regionalPrices.map((rp, i) => ({
      region: usRegions[i]
        ? (isEs ? usRegions[i].esRegion : usRegions[i].usRegion)
        : rp.region,
      price: convertPrice(rp.price, currency),
    })),
    pricingTip: pricing.pricingTip, // kept in PT-BR as fallback
  };
}
