import { useState, useMemo, useEffect } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, MapPin, MessageCircle, Share2, Key, Home, Building2, Landmark, Store, Warehouse, Car, Bike, Truck, Cog, MoreHorizontal, Image, Eye, Instagram, Phone, ExternalLink } from "lucide-react";
import { allCompanies } from "@/data/companies";
import { getProductsByCompany, formatPrice, getTagStyle, getTagLabel } from "@/data/products";
import { supabase } from "@/integrations/supabase/client";
import { trackSellerEvent } from "@/hooks/useSellerAnalytics";
import { useSellerSubscription } from "@/hooks/useSubscription";
import MapEmbed from "@/components/MapEmbed";
import PackageBadge from "@/components/PackageBadge";

const propertySubcategories = [
  { slug: "todos", name: "Todos", icon: Store, img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=200&fit=crop" },
  { slug: "aluguel", name: "Aluguéis", icon: Key, img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop" },
  { slug: "casa", name: "Casas", icon: Home, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop" },
  { slug: "apartamento", name: "Apartamentos", icon: Building2, img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=200&fit=crop" },
  { slug: "terreno", name: "Terrenos", icon: Landmark, img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300&h=200&fit=crop" },
  { slug: "comercial", name: "Comerciais", icon: Store, img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop" },
  { slug: "flat", name: "Flats", icon: Building2, img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&h=200&fit=crop" },
  { slug: "galpao", name: "Galpões", icon: Warehouse, img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&h=200&fit=crop" },
];

const vehicleSubcategories = [
  { slug: "todos", name: "Todos", icon: Car, img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=200&fit=crop" },
  { slug: "carro", name: "Carros", icon: Car, img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=300&h=200&fit=crop" },
  { slug: "moto", name: "Motos", icon: Bike, img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=300&h=200&fit=crop" },
  { slug: "caminhao", name: "Caminhões", icon: Truck, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=300&h=200&fit=crop" },
  { slug: "utilitario", name: "Utilitários", icon: Cog, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=300&h=200&fit=crop" },
  { slug: "outros", name: "Outros", icon: MoreHorizontal, img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=300&h=200&fit=crop" },
];

function isUUID(str: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str);
}

export default function CompanyProfile() {
  const { id } = useParams();
  const [activeCategory, setActiveCategory] = useState("todos");
  const [dbProfile, setDbProfile] = useState<any>(null);
  const [dbItems, setDbItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDbProfile, setIsDbProfile] = useState(false);

  const staticCompany = allCompanies.find((c) => c.id === id);
  const staticProducts = staticCompany ? getProductsByCompany(staticCompany.id) : [];

  const sellerTier = useSellerSubscription(isDbProfile ? id : undefined);

  useEffect(() => {
    if (id && isUUID(id)) {
      setIsDbProfile(true);
      fetchProfile(id);
    } else {
      setIsDbProfile(false);
      setLoading(false);
    }
  }, [id]);

  const fetchProfile = async (profileId: string) => {
    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", profileId)
      .single();

    if (profile) {
      setDbProfile(profile);
      const { data: items } = await supabase
        .from("seller_items")
        .select("*")
        .eq("seller_id", profileId)
        .eq("status", "ativo")
        .order("created_at", { ascending: false });
      setDbItems(items || []);
    }
    setLoading(false);

    if (profile) {
      trackSellerEvent(profileId, "view");
    }
  };

  const company = isDbProfile
    ? dbProfile
      ? {
          id: dbProfile.id,
          name: dbProfile.company_name || dbProfile.full_name,
          logo: dbProfile.logo_url || "",
          address: [dbProfile.address, dbProfile.city, dbProfile.state].filter(Boolean).join(", "),
          rating: "5.0",
          reviewCount: 0,
          whatsapp: dbProfile.phone || "",
          instagram: dbProfile.instagram || "",
          segment: dbProfile.seller_type,
          show_location: dbProfile.show_location ?? true,
        }
      : null
    : staticCompany;

  const isProperty = company?.segment === "imoveis";
  const subcategories = isProperty ? propertySubcategories : vehicleSubcategories;

  const dbDisplayItems = dbItems.map((item) => ({
    id: item.id,
    title: item.title,
    image: item.photos?.[0] || "",
    price: item.price || 0,
    tag: item.tags?.[0] || null,
    category: item.category,
    city: item.city,
    description: item.description,
    specs: {} as Record<string, string>,
    type: isProperty ? "imovel" : "veiculo",
  }));

  const products = isDbProfile ? dbDisplayItems : staticProducts;

  const filteredProducts = useMemo(() => {
    if (activeCategory === "todos") return products;
    return products.filter((p: any) => {
      if (isDbProfile) return p.category === activeCategory;
      return true;
    });
  }, [products, activeCategory, isDbProfile]);

  // Count items per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { todos: products.length };
    products.forEach((p: any) => {
      const cat = isDbProfile ? p.category : "todos";
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, [products, isDbProfile]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!company) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="font-display font-bold text-2xl text-foreground">Empresa não encontrada</h1>
        <Link to="/" className="text-primary text-sm mt-4 inline-block hover:underline">Voltar ao início</Link>
      </div>
    );
  }

  const featuredItemId = isDbProfile ? dbProfile?.featured_item_id : null;
  const heroProduct = featuredItemId
    ? products.find((p: any) => p.id === featuredItemId) || products[0]
    : products[0];

  const handleWhatsApp = (title: string) => {
    if (isDbProfile && id) trackSellerEvent(id, "whatsapp_click");
    window.open(
      `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Olá ${company.name}! Tenho interesse: ${title}`)}`,
      "_blank"
    );
  };

  const gradientClass = isProperty
    ? "from-[#00AEEF] via-[#002F6C] to-[#001a3d]"
    : "from-[#FFD100] via-[#e5bc00] to-[#002F6C]";

  return (
    <div className="min-h-screen bg-muted">
      {/* Netflix Hero Banner */}
      <section className="relative h-[45vh] md:h-[55vh] overflow-hidden">
        {heroProduct && heroProduct.image ? (
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

        {/* Tier Badge on hero */}
        {sellerTier !== "basico" && (
          <div className="absolute top-4 right-4 z-20">
            <PackageBadge tier={sellerTier} size="lg" />
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-10">
          <div className="container max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                {company.logo ? (
                  <img src={company.logo} alt={company.name} className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover border-2 border-white/30 shadow-xl" />
                ) : (
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/20 flex items-center justify-center border-2 border-white/30">
                    <span className="text-white font-bold text-2xl">{company.name?.charAt(0)}</span>
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="font-display font-bold text-2xl md:text-4xl text-white leading-tight">{company.name}</h1>
                    {sellerTier !== "basico" && <PackageBadge tier={sellerTier} size="md" />}
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    {company.address && (
                      <div className="flex items-center gap-1 text-white/70 text-xs">
                        <MapPin size={12} />
                        <span>{company.address}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {heroProduct && (
                <div className="mt-2">
                  <p className="text-sm text-white/60">Em destaque</p>
                  <p className="font-display font-semibold text-lg text-white">{heroProduct.title}</p>
                  {heroProduct.price > 0 && (
                    <p className="font-display font-bold text-2xl text-[#25d366] mt-1">
                      {isDbProfile
                        ? `R$ ${heroProduct.price.toLocaleString("pt-BR")}`
                        : formatPrice(heroProduct.price)}
                    </p>
                  )}
                </div>
              )}

              <div className="flex gap-3 mt-5">
                {heroProduct && (
                  <Link to={`/${isProperty ? "imoveis" : "veiculos"}/produto/${heroProduct.id}`} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-white/90 transition-opacity shadow-lg">
                    <Eye size={18} /> Ver Mais
                  </Link>
                )}
                {company.whatsapp && (
                  <button onClick={() => handleWhatsApp(heroProduct?.title || company.name)} className="flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-xl bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white font-bold text-xs md:text-sm hover:opacity-90 transition-opacity shadow-lg">
                    <MessageCircle size={16} /> WhatsApp
                  </button>
                )}
                {(company as any).instagram && (
                  <a
                    href={`https://instagram.com/${(company as any).instagram.replace(/^@/, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white font-bold text-xs md:text-sm hover:opacity-90 transition-opacity shadow-lg"
                  >
                    <Instagram size={16} /> Instagram
                  </a>
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center justify-center w-10 h-10 md:w-auto md:h-auto md:px-5 md:py-3 rounded-xl bg-white/10 backdrop-blur-md text-white font-medium text-sm hover:bg-white/20 transition-colors">
                      <Share2 size={16} /> <span className="hidden md:inline ml-2">Compartilhar</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => {
                      const url = window.location.href;
                      const text = `Confira ${company.name} no AutoImóvel: ${url}`;
                      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
                    }}>
                      <MessageCircle size={16} className="mr-2 text-[#25d366]" /> Enviar via WhatsApp
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      toast({ title: "Link copiado!", description: "O link da loja foi copiado." });
                    }}>
                      <ExternalLink size={16} className="mr-2" /> Copiar link
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Desktop: Sidebar + Content | Mobile: Normal flow */}
      <div className="container max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-[260px] flex-shrink-0">
            <div className="sticky top-20 space-y-4">
              {/* Company Card */}
              <div className="bg-card border border-border rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  {company.logo ? (
                    <img src={company.logo} alt={company.name} className="w-12 h-12 rounded-xl object-cover border border-border" />
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-border">
                      <span className="font-bold text-primary text-lg">{company.name?.charAt(0)}</span>
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="font-display font-bold text-foreground text-sm truncate">{company.name}</p>
                    <p className="text-xs text-muted-foreground">{isProperty ? "Imobiliária" : "Revenda"}</p>
                  </div>
                </div>

                {sellerTier !== "basico" && (
                  <div className="mb-4">
                    <PackageBadge tier={sellerTier} size="md" />
                  </div>
                )}

                {company.address && (
                  <div className="flex items-start gap-2 text-xs text-muted-foreground mb-3">
                    <MapPin size={13} className="mt-0.5 flex-shrink-0" />
                    <span>{company.address}</span>
                  </div>
                )}

                <div className="space-y-2">
                  {company.whatsapp && (
                    <button
                      onClick={() => handleWhatsApp(company.name)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white font-bold text-xs hover:opacity-90 transition-opacity shadow-md"
                    >
                      <MessageCircle size={14} /> WhatsApp
                    </button>
                  )}
                  {(company as any).instagram && (
                    <a
                      href={`https://instagram.com/${(company as any).instagram.replace(/^@/, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white font-bold text-xs hover:opacity-90 transition-opacity shadow-md"
                    >
                      <Instagram size={14} /> Instagram
                    </a>
                  )}
                </div>
              </div>

              {/* Category Navigation */}
              <div className="bg-card border border-border rounded-2xl p-4">
                <h3 className="font-display font-bold text-sm text-foreground mb-3">Categorias</h3>
                <nav className="space-y-1">
                  {subcategories.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = activeCategory === cat.slug;
                    const count = categoryCounts[cat.slug] || 0;
                    return (
                      <button
                        key={cat.slug}
                        onClick={() => setActiveCategory(cat.slug)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        }`}
                      >
                        <Icon size={14} />
                        <span className="flex-1 text-left">{cat.name}</span>
                        {cat.slug === "todos" ? (
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20" : "bg-muted"}`}>{products.length}</span>
                        ) : count > 0 ? (
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20" : "bg-muted"}`}>{count}</span>
                        ) : null}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Stats */}
              <div className="bg-card border border-border rounded-2xl p-4">
                <h3 className="font-display font-bold text-sm text-foreground mb-2">Sobre</h3>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Anúncios ativos</span>
                    <span className="font-bold text-foreground">{products.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Segmento</span>
                    <span className="font-bold text-foreground">{isProperty ? "Imóveis" : "Veículos"}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Mobile Category Carousel */}
            <div className="lg:hidden mb-6">
              <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory">
                {subcategories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.slug;
                  return (
                    <button
                      key={cat.slug}
                      onClick={() => setActiveCategory(cat.slug)}
                      className="flex-shrink-0 w-[120px] snap-start group"
                    >
                      <div className={`relative aspect-[3/2] rounded-2xl overflow-hidden transition-all duration-300 ${
                        isActive
                          ? "ring-2 ring-primary ring-offset-2 ring-offset-background shadow-xl"
                          : "shadow-md hover:shadow-lg"
                      }`}>
                        <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                        <div className={`absolute inset-0 transition-colors duration-300 ${
                          isActive
                            ? "bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"
                            : "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                        }`} />
                        <div className="absolute bottom-0 left-0 right-0 p-2.5 flex items-center gap-1.5">
                          <Icon size={14} className="text-white" />
                          <span className="text-white text-xs font-bold truncate">{cat.name}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Products Header */}
            <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-6">
              {activeCategory === "todos" ? `Todos os Anúncios (${filteredProducts.length})` : `${subcategories.find(c => c.slug === activeCategory)?.name} (${filteredProducts.length})`}
            </h2>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((product: any, i: number) => {
                  const productLink = `/${isProperty ? "imoveis" : "veiculos"}/produto/${product.id}`;
                  return (
                    <Link key={product.id} to={productLink}>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + i * 0.04 }} className="card-epic bg-card border border-border group rounded-2xl overflow-hidden">
                        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                          {product.image ? (
                            <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Image size={32} className="text-muted-foreground" />
                            </div>
                          )}
                          {product.tag && (
                            <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-bold shadow ${getTagStyle(product.tag)}`}>{getTagLabel(product.tag)}</span>
                          )}
                        </div>
                        <div className="p-3">
                          <h3 className="font-display font-semibold text-foreground text-sm leading-tight line-clamp-2">{product.title}</h3>
                          {product.price > 0 && (
                            <p className="font-display font-bold text-primary text-base mt-1.5">
                              {isDbProfile
                                ? `R$ ${product.price.toLocaleString("pt-BR")}`
                                : formatPrice(product.price)}
                            </p>
                          )}
                          {product.city && (
                            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                              <MapPin size={10} /> {product.city}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">Nenhum anúncio nesta categoria</p>
                <button onClick={() => setActiveCategory("todos")} className="text-primary text-sm mt-2 hover:underline">Ver todos</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Company Location */}
      {company.address && (!isDbProfile || (company as any).show_location) && (
        <section className="container max-w-7xl mx-auto px-4 pb-10">
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
      )}
    </div>
  );
}
