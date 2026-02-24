// Dish images - placeholder until Mexican dish images are generated
const PLACEHOLDER = "/placeholder.svg";

const dishImages: Record<string, string> = {};

export function getDishImage(dishId: string): string {
  return dishImages[dishId] || PLACEHOLDER;
}

export default dishImages;
