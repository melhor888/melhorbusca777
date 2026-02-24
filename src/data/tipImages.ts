// Tip images - placeholder until Mexican tip images are generated
const PLACEHOLDER = "/placeholder.svg";

export const tipImages: Record<string, string> = {};

export function getTipImage(tipId: string, category?: string, themeTag?: string): string {
  return tipImages[tipId] || PLACEHOLDER;
}
