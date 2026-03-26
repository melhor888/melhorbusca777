import { Helmet } from "react-helmet-async";

interface CitySEOProps {
  city: string;
  segment: "imoveis" | "veiculos";
  itemCount: number;
  items?: Array<{ id: string; title: string; price: number; image: string }>;
}

function capitalize(str: string) {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function CitySEO({ city, segment, itemCount, items = [] }: CitySEOProps) {
  const cityName = capitalize(city);
  const isProperty = segment === "imoveis";
  const baseUrl = "https://redeimoveisgb.lovable.app";

  const title = isProperty
    ? `Imóveis em ${cityName} - Casas e Apartamentos à Venda | Melhor Busca`
    : `Carros e Veículos em ${cityName} - Compra e Venda | Melhor Busca`;

  const description = isProperty
    ? `Encontre ${itemCount}+ imóveis em ${cityName}. Casas, apartamentos, terrenos e comerciais à venda e para alugar. Os melhores preços de ${cityName}.`
    : `Encontre ${itemCount}+ veículos em ${cityName}. Carros, motos, caminhões e utilitários à venda com os melhores preços de ${cityName}.`;

  const slug = city.toLowerCase().replace(/\s+/g, "-");
  const canonicalUrl = `${baseUrl}/${slug}/${segment === "imoveis" ? "imoveis" : "veiculos"}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    description,
    url: canonicalUrl,
    numberOfItems: itemCount,
    itemListElement: items.slice(0, 20).map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${baseUrl}/${isProperty ? "imoveis" : "veiculos"}/produto/${item.id}`,
      name: item.title,
      image: item.image,
    })),
  };

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: canonicalUrl,
    about: {
      "@type": "Place",
      name: cityName,
      address: {
        "@type": "PostalAddress",
        addressLocality: cityName,
        addressRegion: "ES",
        addressCountry: "BR",
      },
    },
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={
        isProperty
          ? `imóveis ${cityName}, casas ${cityName}, apartamentos ${cityName}, terrenos ${cityName}, aluguel ${cityName}, comprar imóvel ${cityName}`
          : `carros ${cityName}, veículos ${cityName}, motos ${cityName}, comprar carro ${cityName}, venda veículos ${cityName}`
      } />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessLd)}</script>
    </Helmet>
  );
}
