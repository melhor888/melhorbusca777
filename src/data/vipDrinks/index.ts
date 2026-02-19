export type { VipDrink, VipChefTip } from "./types";
export { vinhoSangrias } from "./vinhoSangrias";
export { vipChefTips } from "./vipChefTips";

import { VipDrink } from "./types";
import { vinhoSangrias } from "./vinhoSangrias";
import { vipChefTips } from "./vipChefTips";

export function getAllVipDrinks(): VipDrink[] {
  return [...vinhoSangrias];
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
