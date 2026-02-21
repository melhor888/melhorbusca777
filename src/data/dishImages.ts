// Images served from public/images/ as static files
// For now using placeholder images - replace with real photos later

export function getDishImage(imageKey: string): string {
  return `/images/dish-${imageKey}.jpg`;
}
