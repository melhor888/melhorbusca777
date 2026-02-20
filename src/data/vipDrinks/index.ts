export type { VipDrink, VipChefTip } from "./types";
export { vinhoSangrias } from "./vinhoSangrias";
export { cervejaBeerCocktails } from "./cervejaBeerCocktails";
export { frozenBlended } from "./frozenBlended";
export { shotsShooters } from "./shotsShooters";
export { tropicalTiki } from "./tropicalTiki";
export { classicosReinventados } from "./classicosReinventados";
export { lowAbvWellness } from "./lowAbvWellness";
export { drinksAutor } from "./drinksAutor";
export { cafeDessertCocktails } from "./cafeDessertCocktails";
export { sazonaisFestivos } from "./sazonaisFestivos";
export { sobremesaDoces } from "./sobremesaDoces";
export { picantesDefumados } from "./picantesDefumados";
export { chaInfusoes } from "./chaInfusoes";
export { veganosPlantBased } from "./veganosPlantBased";
export { vipChefTips } from "./vipChefTips";

import { VipDrink } from "./types";
import { vinhoSangrias } from "./vinhoSangrias";
import { cervejaBeerCocktails } from "./cervejaBeerCocktails";
import { frozenBlended } from "./frozenBlended";
import { shotsShooters } from "./shotsShooters";
import { tropicalTiki } from "./tropicalTiki";
import { classicosReinventados } from "./classicosReinventados";
import { lowAbvWellness } from "./lowAbvWellness";
import { drinksAutor } from "./drinksAutor";
import { cafeDessertCocktails } from "./cafeDessertCocktails";
import { sazonaisFestivos } from "./sazonaisFestivos";
import { sobremesaDoces } from "./sobremesaDoces";
import { picantesDefumados } from "./picantesDefumados";
import { chaInfusoes } from "./chaInfusoes";
import { veganosPlantBased } from "./veganosPlantBased";
import { vipChefTips } from "./vipChefTips";

export function getAllVipDrinks(): VipDrink[] {
  return [...vinhoSangrias, ...cervejaBeerCocktails, ...frozenBlended, ...shotsShooters, ...tropicalTiki, ...classicosReinventados, ...lowAbvWellness, ...drinksAutor, ...cafeDessertCocktails, ...sazonaisFestivos, ...sobremesaDoces, ...picantesDefumados, ...chaInfusoes, ...veganosPlantBased];
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
