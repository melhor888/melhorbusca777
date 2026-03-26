import { ES_CITIES } from "@/data/esCities";

export function cityToSlug(city: string): string {
  return city
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

const slugMap = new Map<string, string>();
ES_CITIES.forEach((city) => slugMap.set(cityToSlug(city), city));

export function slugToCity(slug: string): string | null {
  return slugMap.get(slug.toLowerCase()) || null;
}

export function getAllCitySlugs(): string[] {
  return Array.from(slugMap.keys());
}
