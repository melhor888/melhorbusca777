import { blogTranslationsBatch2EN, blogTranslationsBatch2ES } from "./blogTranslations-batch2";
import { blogTranslationsBatch3EN, blogTranslationsBatch3ES } from "./blogTranslations-batch3";

/**
 * Blog post translations for EN and ES.
 * Each key maps to a blog post ID with translated fields.
 */
export interface BlogTranslation {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  readTime: string;
  categoryLabel?: string;
}

type BlogTranslations = Record<string, Record<string, BlogTranslation>>;

const blogTranslationsBase: BlogTranslations = {
  en: {
    "blog-1": {
      title: "The History of Tacos al Pastor: From the Spit to the Trompo",
      slug: "history-tacos-al-pastor",
      excerpt: "Discover how Lebanese immigrants in Mexico created one of the world's most iconic tacos, fusing shawarma with Mexican ingredients.",
      readTime: "12 min",
      content: `<!-- kept -->`
    },
    // ... keep existing code
  },
  es: {
    // ... keep existing code
  },
};

// Merge all batch translations
export const blogTranslations: BlogTranslations = {
  en: { ...blogTranslationsBase.en, ...blogTranslationsBatch2EN, ...blogTranslationsBatch3EN },
  es: { ...blogTranslationsBase.es, ...blogTranslationsBatch2ES, ...blogTranslationsBatch3ES },
};

/**
 * Get a translated blog post.
 * Falls back to the original pt-BR data if no translation is found.
 */
export function getTranslatedBlogPost(
  post: { id: string; title: string; slug: string; excerpt: string; content: string; readTime: string },
  lang: string
): { title: string; slug: string; excerpt: string; content: string; readTime: string } {
  if (lang === "pt-BR" || !blogTranslations[lang]?.[post.id]) {
    return post;
  }
  const t = blogTranslations[lang][post.id];
  return {
    title: t.title,
    slug: t.slug,
    excerpt: t.excerpt,
    content: t.content,
    readTime: t.readTime,
  };
}

/** Translated blog category labels */
export const blogCategoryTranslations: Record<string, Record<string, { label: string }>> = {
  en: {
    historia: { label: "History & Culture" },
    tecnicas: { label: "Techniques" },
    ingredientes: { label: "Ingredients" },
    regionais: { label: "Regional Cuisine" },
    receitas: { label: "Recipes & Tips" },
    tacos: { label: "Tacos" },
    burritos: { label: "Burritos" },
    enchiladas: { label: "Enchiladas" },
    tamales: { label: "Tamales" },
    quesadillas: { label: "Quesadillas" },
    nachos: { label: "Nachos" },
    molhos: { label: "Mexican Sauces" },
    sopas: { label: "Mexican Soups" },
    bebidas: { label: "Traditional Beverages" },
    doces: { label: "Desserts & Sweets" },
    "comida-rua": { label: "Street Food" },
    tradicionais: { label: "Traditional Dishes" },
    ancestral: { label: "Ancestral Cuisine" },
    moderna: { label: "Modern Cuisine" },
    festivos: { label: "Festive Dishes" },
    religiosos: { label: "Religious Dishes" },
    "street-premium": { label: "Premium Street Food" },
    tortillas: { label: "Tortillas" },
  },
  es: {
    historia: { label: "Historia y Cultura" },
    tecnicas: { label: "Técnicas" },
    ingredientes: { label: "Ingredientes" },
    regionais: { label: "Cocina Regional" },
    receitas: { label: "Recetas y Tips" },
    tacos: { label: "Tacos" },
    burritos: { label: "Burritos" },
    enchiladas: { label: "Enchiladas" },
    tamales: { label: "Tamales" },
    quesadillas: { label: "Quesadillas" },
    nachos: { label: "Nachos" },
    molhos: { label: "Salsas Mexicanas" },
    sopas: { label: "Sopas Mexicanas" },
    bebidas: { label: "Bebidas Típicas" },
    doces: { label: "Postres y Dulces" },
    "comida-rua": { label: "Comida Callejera" },
    tradicionais: { label: "Platos Tradicionales" },
    ancestral: { label: "Cocina Ancestral" },
    moderna: { label: "Cocina Moderna" },
    festivos: { label: "Platos Festivos" },
    religiosos: { label: "Platos Religiosos" },
    "street-premium": { label: "Street Food Premium" },
    tortillas: { label: "Tortillas" },
  },
};
