// Optimized: No imports - images served from public/images/

export const tipCategoryImages: Record<string, string> = {
  tecnica: "/images/tip-tecnica.jpg",
  apresentacao: "/images/tip-apresentacao.jpg",
  harmonizacao: "/images/tip-harmonizacao.jpg",
  historia: "/images/tip-historia.jpg",
};

export const tipThemeImages: Record<string, string> = {
  "home-bar": "/images/tip-home-bar.jpg",
  tropical: "/images/tip-tropical.jpg",
  cafe: "/images/tip-cafe-spirits.jpg",
  molecular: "/images/tip-molecular.jpg",
};

export function getTipImage(category: string, themeTag?: string): string {
  if (themeTag && tipThemeImages[themeTag]) {
    return tipThemeImages[themeTag];
  }
  return tipCategoryImages[category] || "/images/tip-tecnica.jpg";
}
