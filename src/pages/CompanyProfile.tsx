import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, MapPin, MessageCircle, Share2, Key, Home, Building2, Landmark, Store, Warehouse, Car, Bike, Truck, Cog } from "lucide-react";
import { allCompanies } from "@/data/companies";
import { getProductsByCompany, formatPrice, getTagStyle } from "@/data/products";
import MapEmbed from "@/components/MapEmbed";

const propertySubcategories = [
  { slug: "todos", name: "Todos", icon: Store },
  { slug: "aluguel", name: "Aluguéis", icon: Key },
  { slug: "casas", name: "Casas", icon: Home },
  { slug: "apartamentos", name: "Apartamentos", icon: Building2 },
  { slug: "terrenos", name: "Terrenos", icon: Landmark },
  { slug: "comerciais", name: "Comerciais", icon: Store },
  { slug: "flats", name: "Flats", icon: Building2 },
  { slug: "galpoes", name: "Galpões", icon: Warehouse },
];

const vehicleSubcategories = [
  { slug: "todos", name: "Todos", icon: Car },
  { slug: "carros", name: "Carros", icon: Car },
  { slug: "motos", name: "Motos", icon: Bike },
  { slug: "caminhoes", name: "Caminhões", icon: Truck },
  { slug: "utilitarios", name: "Utilitários", icon: Cog },
];

function classifyProduct(title: string, specs: Record<string, string>, type: string): string {
  const t = title.toLowerCase();
  const specType = (specs["Tipo"] || "").toLowerCase();
  if (type === "imovel") {
    if (t.includes("flat") || specType.includes("flat")) return "flats";
    if (t.includes("galpão") || t.includes("galpao") || specType.includes("galpão")) return "galpoes";
    if (t.includes("sala comercial") || t.includes("loja") || t.includes("andar corporativo") || specType.includes("comercial") || specType.includes("loja")) return "comerciais";
    if (t.includes("terreno") || t.includes("lote") || t.includes("chácara")) return "terrenos";
    if (t.includes("apartamento") || t.includes("apto") || t.includes("studio") || t.includes("penthouse") || t.includes("duplex") || t.includes("cobertura")) return "apartamentos";
    if (t.includes("casa") || t.includes("sobrado") || t.includes("mansão")) return "casas";
    if (t.includes("aluguel") || (specs["Condomínio"] && Number(specs["Condomínio"]?.replace(/\D/g, "")) > 0)) return "aluguel";
    return "casas";
  } else {
    if (specType.includes("naked") || specType.includes("moto") || t.includes("moto")) return "motos";
    if (specType.includes("cavalo") || specType.includes("caminhão") || t.includes("caminhão") || t.includes("volvo fh") || t.includes("scania") || t.includes("actros")) return "caminhoes";
    if (specType.includes("utilitário") || t.includes("fiorino") || t.includes("kangoo") || t.includes("saveiro") || (specs["Carga útil"])) return "utilitarios";
    if (t.includes("cb ") || t.includes("mt-") || t.includes("z400") || t.includes("g310")) return "motos";
    return "carros";
  }
}

export default function CompanyProfile() {
  const { id } = useParams();
  const company = allCompanies.find((c) => c.id === id);
  const products = company ? getProductsByCompany(company.id) : [];
  const [activeCategory, setActiveCategory] = useState("todos");

  const isProperty = company?.segment === "imoveis";
  const subcategories = isProperty ? propertySubcategories : vehicleSubcategories;

  const filteredProducts = useMemo(() => {
    if (activeCategory === "todos") return products;
    return products.filter((p) => classifyProduct(p.title, p.specs, p.type) === activeCategory);
  }, [products, activeCategory]);

  if (!company) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="font-display font-bold text-2xl text-foreground">Empresa não encontrada</h1>
        <Link to="/" className="text-primary text-sm mt-4 inline-block hover:underline">Voltar ao início</Link>
      </div>
    );
  }

  const heroProduct = products[0];
  const whatsappUrl = (title: string) =>
    `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Olá ${company.name}! Tenho interesse: ${title}`)}`;

  const gradientClass = isProperty
    ? "from-[#00AEEF] via-[#002F6C] to-[#001a3d]"
    : "from-[#FFD100] via-[#e5bc00] to-[#002F6C]";

  return (
    <div className="min-h-screen bg-background">
      {/* Netflix Hero Banner */}
      <section className="relative h-[50vh] md:h-[65vh] overflow-hidden">
        {heroProduct ? (
          <img src={heroProduct.image} alt={heroProduct.title} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        <div className="absolute top-4 left-4 z-20">
          <Link to={isProperty ? "/imoveis" : "/veiculos"} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white text-sm font-medium hover:bg-white/20 transition-colors">
            <ArrowLeft size={16} /> Voltar
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-10">
          <div className="container max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <img src={company.logo} alt={company.name} className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover border-2 border-white/30 shadow-xl" />
                <div>
                  <h1 className="font-display font-bold text-2xl md:text-4xl text-white leading-tight">{company.name}</h1>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-[#FFD100] fill-[#FFD100]" />
                      <span className="text-sm font-semibold text-white">{company.rating}</span>
                      <span className="text-xs text-white/60">({company.reviewCount})</span>
                    </div>
                    <span className="text-white/40">·</span>
                    <div className="flex items-center gap-1 text-white/70 text-xs">
                      <MapPin size={12} />
                      <span>{company.address}</span>
                    </div>
                  </div>
                </div>
              </div>

              {heroProduct && (
                <div className="mt-2">
                  <p className="text-sm text-white/60">Em destaque</p>
                  <p className="font-display font-semibold text-lg text-white">{heroProduct.title}</p>
                  <p className="font-display font-bold text-2xl text-[#25d366] mt-1">{formatPrice(heroProduct.price)}</p>
                </div>
              )}

              <div className="flex gap-3 mt-5">
                <a href={whatsappUrl(heroProduct?.title || company.name)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-lg">
                  <MessageCircle size={18} /> WhatsApp
                </a>
                <button onClick={() => navigator.share?.({ title: company.name, url: window.location.href })} className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 backdrop-blur-md text-white font-medium text-sm hover:bg-white/20 transition-colors">
                  <Share2 size={16} /> Compartilhar
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="container max-w-6xl mx-auto px-4 py-6">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          {subcategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                <Icon size={16} />
                {cat.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* Products Grid */}
      <section className="container max-w-6xl mx-auto px-4 pb-8">
        <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-6">
          {activeCategory === "todos" ? `Todos os Anúncios (${filteredProducts.length})` : `${subcategories.find(c => c.slug === activeCategory)?.name} (${filteredProducts.length})`}
        </h2>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product, i) => (
              <Link key={product.id} to={`/${isProperty ? "imoveis" : "veiculos"}/produto/${product.id}`}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + i * 0.04 }} className="card-epic bg-card border border-border group rounded-2xl overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    {product.tag && (
                      <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-bold shadow ${getTagStyle(product.tag)}`}>{product.tag}</span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <span className="text-xs font-medium text-white flex items-center gap-1">
                        <MessageCircle size={12} /> Falar no WhatsApp
                      </span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-display font-semibold text-foreground text-sm leading-tight line-clamp-2">{product.title}</h3>
                    <p className="font-display font-bold text-primary text-base mt-1.5">{formatPrice(product.price)}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">Nenhum produto nesta categoria</p>
            <button onClick={() => setActiveCategory("todos")} className="text-primary text-sm mt-2 hover:underline">Ver todos</button>
          </div>
        )}
      </section>

      {/* Company Location - Bottom */}
      <section className="container max-w-6xl mx-auto px-4 pb-10">
        <div className="rounded-2xl overflow-hidden border border-border bg-card">
          <div className="px-5 py-4 border-b border-border flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground">Localização</h2>
              <p className="text-xs text-muted-foreground">{company.address}</p>
            </div>
          </div>
          <MapEmbed address={company.address} className="border-0 rounded-none" />
        </div>
      </section>
    </div>
  );
}
