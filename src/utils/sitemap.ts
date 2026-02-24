import { drinks } from "../data/drinks";
import { articles } from "../data/articles";
import { supportedLanguages, getLangPrefix, type SupportedLanguage } from "@/i18n/config";

const BASE = "https://receitasmexicanas.lovable.app";

const staticPages = [
  { loc: "/", priority: "1.0", changefreq: "daily" },
  { loc: "/tips", priority: "0.8", changefreq: "weekly" },
  { loc: "/dicas", priority: "0.8", changefreq: "weekly" },
  { loc: "/favorites", priority: "0.5", changefreq: "monthly" },
  { loc: "/sobre", priority: "0.6", changefreq: "monthly" },
  { loc: "/contato", priority: "0.6", changefreq: "monthly" },
  { loc: "/privacidade", priority: "0.3", changefreq: "yearly" },
  { loc: "/termos", priority: "0.3", changefreq: "yearly" },
  { loc: "/cookies", priority: "0.3", changefreq: "yearly" },
  { loc: "/aviso-legal", priority: "0.3", changefreq: "yearly" },
  { loc: "/sitemap", priority: "0.3", changefreq: "monthly" },
];

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

  const allPaths = [
    ...staticPages.map((p) => ({ path: p.loc, priority: p.priority, changefreq: p.changefreq })),
    ...drinks.map((d) => ({ path: `/recipe/${d.id}`, priority: "0.7", changefreq: "monthly" })),
    ...articles.map((a) => ({ path: `/artigo/${a.id}`, priority: "0.7", changefreq: "monthly" })),
  ];

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
