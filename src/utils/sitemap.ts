import { drinks } from "../data/drinks";
import { dishes, categories as dishCategories } from "../data/dishes";
import { articles } from "../data/articles";
import { blogPosts } from "../data/blogPosts";
import { supportedLanguages, getLangPrefix, type SupportedLanguage } from "@/i18n/config";

const BASE = "https://receitasmexicanas.lovable.app";

const staticPages = [
  { loc: "/", priority: "1.0", changefreq: "daily" },
  { loc: "/tips", priority: "0.8", changefreq: "weekly" },
  { loc: "/dicas", priority: "0.8", changefreq: "weekly" },
  { loc: "/blog", priority: "0.8", changefreq: "weekly" },
  { loc: "/favorites", priority: "0.5", changefreq: "monthly" },
  { loc: "/quiz", priority: "0.6", changefreq: "monthly" },
  { loc: "/dashboard", priority: "0.5", changefreq: "monthly" },
  { loc: "/conquistas", priority: "0.5", changefreq: "monthly" },
  { loc: "/ingredientes", priority: "0.6", changefreq: "monthly" },
  { loc: "/colecoes", priority: "0.7", changefreq: "monthly" },
  { loc: "/lista-compras", priority: "0.5", changefreq: "monthly" },
  { loc: "/search", priority: "0.5", changefreq: "monthly" },
  { loc: "/vip", priority: "0.7", changefreq: "monthly" },
  { loc: "/queroservip", priority: "0.6", changefreq: "monthly" },
  { loc: "/sobre", priority: "0.6", changefreq: "monthly" },
  { loc: "/contato", priority: "0.6", changefreq: "monthly" },
  { loc: "/privacidade", priority: "0.3", changefreq: "yearly" },
  { loc: "/termos", priority: "0.3", changefreq: "yearly" },
  { loc: "/cookies", priority: "0.3", changefreq: "yearly" },
  { loc: "/aviso-legal", priority: "0.3", changefreq: "yearly" },
  { loc: "/sitemap", priority: "0.3", changefreq: "monthly" },
];

// Category slugs for routing
const categorySlugMap: Record<string, string> = {
  "Tacos": "tacos",
  "Tortillas & Bases": "tortillas-bases",
  "Pratos Tradicionais": "pratos-tradicionais",
  "Antojitos": "antojitos",
  "Queijos & Recheios": "queijos-recheios",
  "Molhos & Salsas": "molhos-salsas",
  "Sopas & Caldos": "sopas-caldos",
  "Carnes Mexicanas": "carnes-mexicanas",
  "Mariscos": "mariscos",
  "Sobremesas": "sobremesas",
  "Bebidas": "bebidas",
  "Arroz & Feijão": "arroz-feijao",
  "Café da Manhã": "cafe-da-manha",
  "Tamales & Massas": "tamales-massas",
  "Cultura Mexicana": "cultura-mexicana",
  "Escola Mexicana": "escola-mexicana",
};

function generateHreflangXml(path: string): string {
  const links = supportedLanguages.map((lang) => {
    const prefix = lang === "pt-BR" ? "" : getLangPrefix(lang as SupportedLanguage);
    const href = `${BASE}${prefix}${path === "/" ? "" : path}`;
    const hreflang = lang === "pt-BR" ? "pt-BR" : lang;
    return `      <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}" />`;
  });
  links.push(`      <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}${path}" />`);
  return links.join("\n");
}

export function generateSitemapXml(): string {
  const today = new Date().toISOString().split("T")[0];

  const allPaths: { path: string; priority: string; changefreq: string }[] = [];

  // Static pages
  allPaths.push(...staticPages.map((p) => ({ path: p.loc, priority: p.priority, changefreq: p.changefreq })));

  // Category pages
  for (const cat of dishCategories) {
    const slug = categorySlugMap[cat] || cat.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    allPaths.push({ path: `/categoria/${slug}`, priority: "0.7", changefreq: "weekly" });
  }

  // All dish recipe pages
  for (const dish of dishes) {
    allPaths.push({ path: `/recipe/${dish.id}`, priority: "0.7", changefreq: "monthly" });
  }

  // All drink recipe pages (legacy)
  for (const drink of drinks) {
    // Avoid duplicates if drink.id already exists as dish
    if (!dishes.find(d => d.id === drink.id)) {
      allPaths.push({ path: `/recipe/${drink.id}`, priority: "0.6", changefreq: "monthly" });
    }
  }

  // Articles (dicas)
  for (const article of articles) {
    allPaths.push({ path: `/artigo/${article.id}`, priority: "0.7", changefreq: "monthly" });
  }

  // Blog posts
  for (const post of blogPosts) {
    allPaths.push({ path: `/blog/${post.slug}`, priority: "0.8", changefreq: "monthly" });
  }

  // VIP category pages
  const vipCategories = [
    "receitas-secretas",
    "masterclass-tecnicas",
    "harmonizacao-sake",
    "cardapios-completos",
    "receitas-exclusivas",
  ];
  for (const slug of vipCategories) {
    allPaths.push({ path: `/vip/categoria/${slug}`, priority: "0.6", changefreq: "monthly" });
  }

  // Generate URLs for all languages
  const urls: string[] = [];

  for (const page of allPaths) {
    for (const lang of supportedLanguages) {
      const prefix = lang === "pt-BR" ? "" : getLangPrefix(lang as SupportedLanguage);
      const loc = `${BASE}${prefix}${page.path === "/" ? "" : page.path}`;
      urls.push(
        `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n${generateHreflangXml(page.path)}\n  </url>`
      );
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>`;
}
