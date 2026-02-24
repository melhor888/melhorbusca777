export function WebsiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Receitas MexicanasXP",
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
    name: "Receitas MexicanasXP",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contato@receitasmexicanasxp.com.br",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
    sameAs: [],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
