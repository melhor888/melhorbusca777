import tipTecnica from "@/assets/tip-tecnica.jpg";
import tipApresentacao from "@/assets/tip-apresentacao.jpg";
import tipHarmonizacao from "@/assets/tip-harmonizacao.jpg";
import tipHistoria from "@/assets/tip-historia.jpg";
import tipHomeBar from "@/assets/tip-home-bar.jpg";
import tipTropical from "@/assets/tip-tropical.jpg";
import tipCafeSpirits from "@/assets/tip-cafe-spirits.jpg";
import tipMolecular from "@/assets/tip-molecular.jpg";

export const tipCategoryImages: Record<string, string> = {
  tecnica: tipTecnica,
  apresentacao: tipApresentacao,
  harmonizacao: tipHarmonizacao,
  historia: tipHistoria,
};

export const tipThemeImages: Record<string, string> = {
  "home-bar": tipHomeBar,
  tropical: tipTropical,
  cafe: tipCafeSpirits,
  molecular: tipMolecular,
};

export function getTipImage(category: string, themeTag?: string): string {
  if (themeTag && tipThemeImages[themeTag]) {
    return tipThemeImages[themeTag];
  }
  return tipCategoryImages[category] || tipTecnica;
}
