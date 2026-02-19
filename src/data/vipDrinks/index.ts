export type { VipDrink, VipChefTip } from "./types";
export { vinhoSangrias } from "./vinhoSangrias";
export { cervejaBeerCocktails } from "./cervejaBeerCocktails";
export { frozenBlended } from "./frozenBlended";
export { vipChefTips } from "./vipChefTips";

import { VipDrink } from "./types";
import { vinhoSangrias } from "./vinhoSangrias";
import { cervejaBeerCocktails } from "./cervejaBeerCocktails";
import { frozenBlended } from "./frozenBlended";
import { vipChefTips } from "./vipChefTips";

export function getAllVipDrinks(): VipDrink[] {
  return [...vinhoSangrias, ...cervejaBeerCocktails, ...frozenBlended];
}

export function getVipDrinksByCategory(category: string): VipDrink[] {
  return getAllVipDrinks().filter((d) => d.category === category);
}

export function getVipDrinkById(id: string): VipDrink | undefined {
  return getAllVipDrinks().find((d) => d.id === id);
}

export function getVipChefTip(id: string) {
  return vipChefTips[id] || null;
}
