export function WebsiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Receitas Japonesas XP",
    url: "https://japanfood.lovable.app",
    description: "Receitas autênticas de comida japonesa, técnicas culinárias, cultura e gastronomia do Japão.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://japanfood.lovable.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Receitas Japonesas XP",
    url: "https://japanfood.lovable.app",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contato@receitasjaponesasxp.com.br",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
    sameAs: [],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
