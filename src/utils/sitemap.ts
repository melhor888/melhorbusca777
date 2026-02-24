import { drinks } from "../data/drinks";
import { articles } from "../data/articles";

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

export function generateSitemapXml(): string {
  const today = new Date().toISOString().split("T")[0];

  const urls = [
    ...staticPages.map(
      (p) =>
        `  <url>\n    <loc>${BASE}${p.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`
    ),
    ...drinks.map(
      (d) =>
        `  <url>\n    <loc>${BASE}/recipe/${d.id}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`
    ),
    ...articles.map(
      (a) =>
        `  <url>\n    <loc>${BASE}/artigo/${a.id}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`
    ),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
}
