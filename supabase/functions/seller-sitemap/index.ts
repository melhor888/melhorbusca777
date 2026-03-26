import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const url = new URL(req.url);
  const sellerId = url.searchParams.get("seller_id");
  const format = url.searchParams.get("format") || "google"; // "google" or "facebook"

  if (!sellerId) {
    return new Response("Missing seller_id", { status: 400, headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Get seller profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", sellerId)
    .single();

  if (!profile) {
    return new Response("Seller not found", { status: 404, headers: corsHeaders });
  }

  // Get seller items
  const { data: items } = await supabase
    .from("seller_items")
    .select("*")
    .eq("seller_id", sellerId)
    .eq("status", "ativo");

  // Check for custom domain
  const { data: domainData } = await supabase
    .from("store_domains")
    .select("domain")
    .eq("seller_id", sellerId)
    .eq("is_active", true)
    .limit(1);

  const customDomain = domainData?.[0]?.domain;
  const baseUrl = customDomain
    ? `https://${customDomain}`
    : `https://redeimoveisgb.lovable.app`;

  const storeUrl = `${baseUrl}/loja/${sellerId}`;

  if (format === "facebook") {
    return generateFacebookFeed(profile, items || [], baseUrl, sellerId);
  }

  return generateGoogleSitemap(profile, items || [], baseUrl, sellerId, storeUrl);
});

function generateGoogleSitemap(
  profile: any,
  items: any[],
  baseUrl: string,
  sellerId: string,
  storeUrl: string
) {
  const now = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${storeUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`;

  for (const item of items) {
    xml += `
  <url>
    <loc>${baseUrl}/anuncio/${item.id}</loc>
    <lastmod>${item.updated_at?.split("T")[0] || now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }

  xml += `
</urlset>`;

  return new Response(xml, {
    headers: {
      ...corsHeaders,
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

function generateFacebookFeed(
  profile: any,
  items: any[],
  baseUrl: string,
  sellerId: string
) {
  const storeName = profile.company_name || profile.full_name || "Loja";

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
<channel>
  <title>${escapeXml(storeName)}</title>
  <link>${baseUrl}/loja/${sellerId}</link>
  <description>Catálogo de produtos - ${escapeXml(storeName)}</description>`;

  for (const item of items) {
    const photo = item.photos?.[0] || "";
    const price = item.price ? `${Number(item.price).toFixed(2)} BRL` : "0.00 BRL";
    const category = getCategoryLabel(item.category, item.seller_type);
    const condition = item.seller_type === "automoveis" ? "used" : "new";
    const availability = "in stock";

    xml += `
  <item>
    <g:id>${item.id}</g:id>
    <g:title>${escapeXml(item.title)}</g:title>
    <g:description>${escapeXml(item.description || item.title)}</g:description>
    <g:link>${baseUrl}/anuncio/${item.id}</g:link>
    <g:image_link>${escapeXml(photo)}</g:image_link>
    <g:price>${price}</g:price>
    <g:condition>${condition}</g:condition>
    <g:availability>${availability}</g:availability>
    <g:brand>${escapeXml(item.brand || storeName)}</g:brand>
    <g:google_product_category>${escapeXml(category)}</g:google_product_category>`;

    if (item.photos && item.photos.length > 1) {
      for (let i = 1; i < Math.min(item.photos.length, 10); i++) {
        xml += `
    <g:additional_image_link>${escapeXml(item.photos[i])}</g:additional_image_link>`;
      }
    }

    if (item.city) {
      xml += `
    <g:custom_label_0>${escapeXml(item.city)}</g:custom_label_0>`;
    }

    xml += `
  </item>`;
  }

  xml += `
</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      ...corsHeaders,
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

function escapeXml(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function getCategoryLabel(category: string, sellerType: string): string {
  if (sellerType === "automoveis") {
    const map: Record<string, string> = {
      carro: "Vehicles & Parts > Motor Vehicles > Cars",
      moto: "Vehicles & Parts > Motor Vehicles > Motorcycles",
      caminhao: "Vehicles & Parts > Motor Vehicles > Trucks",
      van: "Vehicles & Parts > Motor Vehicles > Vans",
      utilitario: "Vehicles & Parts > Motor Vehicles",
    };
    return map[category] || "Vehicles & Parts > Motor Vehicles";
  }
  const map: Record<string, string> = {
    casa: "Real Estate > Residential",
    apartamento: "Real Estate > Residential > Apartments",
    terreno: "Real Estate > Land",
    comercial: "Real Estate > Commercial",
    galpao: "Real Estate > Commercial > Warehouses",
    flat: "Real Estate > Residential > Apartments",
    aluguel: "Real Estate > Rental",
  };
  return map[category] || "Real Estate";
}
