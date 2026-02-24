import { Dish } from "../dishes";
import i18n from "@/i18n/config";
import { dishTranslationsEN } from "./dishes-en";
import { dishTranslationsENBatch8_18 } from "./dishes-en-batch8-18";
import { dishTranslationsES } from "./dishes-es";
import { dishTranslationsESBatch8_18 } from "./dishes-es-batch8-18";

export interface DishTranslation {
  name: string;
  ingredients: string[];
  steps: string[];
  description?: string;
  curiosity?: string;
  origin?: string;
}

const translationMaps: Record<string, Record<string, DishTranslation>> = {
  en: { ...dishTranslationsEN, ...dishTranslationsENBatch8_18 },
  es: { ...dishTranslationsES, ...dishTranslationsESBatch8_18 },
};

const difficultyMap: Record<string, Record<string, string>> = {
  en: { "Fácil": "Easy", "Médio": "Medium", "Avançado": "Advanced" },
  es: { "Fácil": "Fácil", "Médio": "Medio", "Avançado": "Avanzado" },
};

const categoryMap: Record<string, Record<string, string>> = {
  en: {
    "Tacos": "Tacos",
    "Tortillas & Bases": "Tortillas & Bases",
    "Pratos Tradicionais": "Traditional Dishes",
    "Antojitos": "Antojitos",
    "Queijos & Recheios": "Cheese & Fillings",
    "Molhos & Salsas": "Sauces & Salsas",
    "Sopas & Caldos": "Soups & Broths",
    "Carnes Mexicanas": "Mexican Meats",
    "Mariscos": "Seafood",
    "Sobremesas": "Desserts",
    "Bebidas": "Beverages",
    "Arroz & Feijão": "Rice & Beans",
    "Café da Manhã": "Breakfast",
    "Tamales & Massas": "Tamales & Dough",
    "Cultura Mexicana": "Mexican Culture",
    "Escola Mexicana": "Mexican School",
  },
  es: {
    "Tacos": "Tacos",
    "Tortillas & Bases": "Tortillas y Bases",
    "Pratos Tradicionais": "Platos Tradicionales",
    "Antojitos": "Antojitos",
    "Queijos & Recheios": "Quesos y Rellenos",
    "Molhos & Salsas": "Salsas",
    "Sopas & Caldos": "Sopas y Caldos",
    "Carnes Mexicanas": "Carnes Mexicanas",
    "Mariscos": "Mariscos",
    "Sobremesas": "Postres",
    "Bebidas": "Bebidas",
    "Arroz & Feijão": "Arroz y Frijoles",
    "Café da Manhã": "Desayuno",
    "Tamales & Massas": "Tamales y Masas",
    "Cultura Mexicana": "Cultura Mexicana",
    "Escola Mexicana": "Escuela Mexicana",
  },
};

export function getTranslatedDish(dish: Dish): Dish {
  const lang = i18n.language;
  
  // pt-BR is the default language, no translation needed
  if (lang === "pt-BR" || lang.startsWith("pt")) return dish;

  const langKey = lang.startsWith("es") ? "es" : "en";
  const translations = translationMaps[langKey];
  const t = translations?.[dish.id];

  const translatedDifficulty = difficultyMap[langKey]?.[dish.difficulty] || dish.difficulty;
  const translatedCategory = categoryMap[langKey]?.[dish.category] || dish.category;

  if (!t) {
    return {
      ...dish,
      difficulty: translatedDifficulty as Dish["difficulty"],
      category: translatedCategory,
    };
  }

  return {
    ...dish,
    name: t.name || dish.name,
    ingredients: t.ingredients || dish.ingredients,
    steps: t.steps || dish.steps,
    description: t.description || dish.description,
    curiosity: t.curiosity || dish.curiosity,
    origin: t.origin || dish.origin,
    difficulty: translatedDifficulty as Dish["difficulty"],
    category: translatedCategory,
  };
}

export function getTranslatedCategory(category: string): string {
  const lang = i18n.language;
  if (lang === "pt-BR" || lang.startsWith("pt")) return category;
  const langKey = lang.startsWith("es") ? "es" : "en";
  return categoryMap[langKey]?.[category] || category;
}

export function getTranslatedDifficulty(difficulty: string): string {
  const lang = i18n.language;
  if (lang === "pt-BR" || lang.startsWith("pt")) return difficulty;
  const langKey = lang.startsWith("es") ? "es" : "en";
  return difficultyMap[langKey]?.[difficulty] || difficulty;
}
