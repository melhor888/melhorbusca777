import { useTranslation } from "react-i18next";
import { supportedLanguages, getLangPrefix, type SupportedLanguage } from "@/i18n/config";

export function WebsiteSchema() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mexi Food XP",
    url: "https://receitasmexicanas.lovable.app",
    inLanguage: lang,
    description: "Receitas autênticas de comida mexicana, técnicas culinárias, cultura e gastronomia do México.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://receitasmexicanas.lovable.app/busca?q={search_term_string}",
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
    url: "https://receitasmexicanas.lovable.app",
    logo: "https://receitasmexicanas.lovable.app/pwa-512x512.png",
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
    author: {
      "@type": "Organization",
      name: "Mexi Food XP",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BlogPostSchema({ post }: { post: { title: string; excerpt: string; slug: string; image: string; author: string; publishedAt: string; readTime: string } }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image.startsWith("http") ? post.image : `https://receitasmexicanas.lovable.app${post.image}`,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Mexi Food XP",
      logo: {
        "@type": "ImageObject",
        url: "https://receitasmexicanas.lovable.app/pwa-512x512.png",
      },
    },
    datePublished: post.publishedAt,
    mainEntityOfPage: `https://receitasmexicanas.lovable.app/blog/${post.slug}`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://receitasmexicanas.lovable.app${item.url}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
