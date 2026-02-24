import { getAllDishes } from "@/data/dishes";
import { blogPosts } from "@/data/blogPosts";
import { articles } from "@/data/articles";
import { drinks } from "@/data/drinks";

const BASE = "https://receitasmexicanas.lovable.app";
const LANGS = ["", "/en", "/es"];

function url(path: string, priority = "0.7", changefreq = "weekly") {
  const loc = `${BASE}${path}`;
  const alternates = LANGS.map(
    (l) =>
      `    <xhtml:link rel="alternate" hreflang="${l === "" ? "pt-BR" : l.slice(1)}" href="${BASE}${l}${path}" />`
  ).join("\n");
  return `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />
  </url>`;
}

export function generateSitemapXml(): string {
  const staticPages = [
    { path: "/", priority: "1.0", freq: "daily" },
    { path: "/tips", priority: "0.8", freq: "weekly" },
    { path: "/dicas", priority: "0.8", freq: "weekly" },
    { path: "/blog", priority: "0.9", freq: "daily" },
    { path: "/quiz", priority: "0.6", freq: "monthly" },
    { path: "/colecoes", priority: "0.7", freq: "weekly" },
    { path: "/ingredientes", priority: "0.7", freq: "monthly" },
    { path: "/vip", priority: "0.7", freq: "weekly" },
    { path: "/queroservip", priority: "0.6", freq: "monthly" },
    { path: "/sobre", priority: "0.4", freq: "monthly" },
    { path: "/contato", priority: "0.4", freq: "monthly" },
    { path: "/sitemap", priority: "0.3", freq: "monthly" },
  ];

  const urls: string[] = [];

  // Static pages
  staticPages.forEach((p) => urls.push(url(p.path, p.priority, p.freq)));

  // Blog posts
  blogPosts.forEach((post) => urls.push(url(`/blog/${post.slug}`, "0.8", "monthly")));

  // Recipes (dishes)
  getAllDishes().forEach((dish) => urls.push(url(`/recipe/${dish.id}`, "0.7", "monthly")));

  // Articles
  articles.forEach((a) => urls.push(url(`/artigo/${a.id}`, "0.6", "monthly")));

  // Drinks
  drinks.forEach((d) => urls.push(url(`/recipe/${d.id}`, "0.5", "monthly")));

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`;
}
