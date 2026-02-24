import { useTranslation } from "react-i18next";
import { supportedLanguages, getLangPrefix, type SupportedLanguage } from "@/i18n/config";

export function WebsiteSchema() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mexi Food XP",
    inLanguage: lang,
    description: "Receitas autênticas de comida mexicana, técnicas culinárias, cultura e gastronomia do México.",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mexi Food XP",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contato@receitasmexicanasxp.com.br",
      contactType: "customer service",
      availableLanguage: ["Portuguese", "English", "Spanish"],
    },
    sameAs: [],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function RecipeSchema({ recipe }: { recipe: { name: string; description?: string; ingredients: string[]; steps: string[]; time: string; image: string; category: string } }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.name,
    description: recipe.description || recipe.name,
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: step,
    })),
    totalTime: recipe.time,
    recipeCategory: recipe.category,
    image: recipe.image,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
