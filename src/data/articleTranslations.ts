import { Article, articleCategories } from "./articles";
import { articleTranslationsEN, ArticleTranslation } from "./articleTranslations-en";
import { autoTranslatePtToEs } from "./translations/index";
import i18n from "@/i18n/config";

/** Translated article category labels */
const articleCategoryTranslations: Record<string, Record<string, string>> = {
  en: {
    fundamentos: "Fundamentals",
    destilados: "Ingredients",
    tecnicas: "Techniques",
    cultura: "Culture",
    negocios: "Business",
    avancado: "Advanced",
  },
  es: {
    fundamentos: "Fundamentos",
    destilados: "Ingredientes",
    tecnicas: "Técnicas",
    cultura: "Cultura",
    negocios: "Negocios",
    avancado: "Avanzado",
  },
};

export function getTranslatedArticleCategoryLabel(categoryKey: string): string {
  const lang = i18n.language;
  if (lang === "pt-BR" || lang.startsWith("pt")) {
    return articleCategories[categoryKey as keyof typeof articleCategories]?.label || categoryKey;
  }
  const langKey = lang.startsWith("es") ? "es" : "en";
  return articleCategoryTranslations[langKey]?.[categoryKey] 
    || articleCategories[categoryKey as keyof typeof articleCategories]?.label 
    || categoryKey;
}

/**
 * Returns a translated version of an article.
 * - For EN: uses manual translations from articleTranslations-en.ts
 * - For ES: auto-translates from Portuguese using regex term mapping
 * - For pt-BR: returns original
 */
export function getTranslatedArticle(article: Article): Article {
  const lang = i18n.language;

  if (lang === "pt-BR" || lang.startsWith("pt")) return article;

  const langKey = lang.startsWith("es") ? "es" : "en";

  if (langKey === "en") {
    const t = articleTranslationsEN[article.id];
    if (t) {
      return {
        ...article,
        title: t.title,
        subtitle: t.subtitle,
        modules: t.modules.map((m, i) => ({
          ...article.modules[i],
          title: m.title,
          content: m.content,
        })),
      };
    }
    // Fallback: return original if no EN translation
    return article;
  }

  // ES: auto-translate from Portuguese
  return {
    ...article,
    title: autoTranslatePtToEs(article.title),
    subtitle: autoTranslatePtToEs(article.subtitle),
    modules: article.modules.map((m) => ({
      ...m,
      title: autoTranslatePtToEs(m.title),
      content: autoTranslatePtToEs(m.content),
    })),
  };
}
