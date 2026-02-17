export function WebsiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Drinks & Company",
    url: "https://drinkseco.lovable.app",
    description: "Receitas de drinks e coquetéis profissionais, dicas de bartenders e guias completos sobre coquetelaria.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://drinkseco.lovable.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Drinks & Company",
    url: "https://drinkseco.lovable.app",
    logo: "https://drinkseco.lovable.app/pwa-512x512.png",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contato@drinkscompany.com.br",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
    sameAs: [],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
