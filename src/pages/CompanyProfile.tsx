import { useState, useMemo, useEffect } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";
import { useParams, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Star, MapPin, MessageCircle, Share2, Key, Home, Building2, Landmark, Store, Warehouse, Car, Bike, Truck, Cog, MoreHorizontal, Image, Eye, Instagram, Phone, ExternalLink, Clock, Shield, Zap, ChevronLeft, ChevronRight, Heart, BadgeCheck } from "lucide-react";
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
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("todos");
  const [dbProfile, setDbProfile] = useState<any>(null);
  const [dbItems, setDbItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDbProfile, setIsDbProfile] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);

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

  // Determine segment from URL path first, then fallback to seller_type
  const vehicleCategories = ["carro", "moto", "caminhao", "van", "utilitario"];
  const urlIsProperty = location.pathname.startsWith("/imoveis");
  const urlIsVehicle = location.pathname.startsWith("/veiculos");
  const isProperty = urlIsProperty ? true : urlIsVehicle ? false : company?.segment === "imoveis";
  const subcategories = isProperty ? propertySubcategories : vehicleSubcategories;

  const dbDisplayItems = dbItems.map((item) => ({
    id: item.id,
    title: item.title,
    image: item.photos?.[0] || "",
    images: item.photos || [],
    price: item.price || 0,
    tag: item.tags?.[0] || null,
    category: item.category,
    city: item.city,
    description: item.description,
    specs: {} as Record<string, string>,
    type: vehicleCategories.includes(item.category) ? "veiculo" : "imovel",
  }));

  const products = isDbProfile ? dbDisplayItems : staticProducts;

  const filteredProducts = useMemo(() => {
    if (activeCategory === "todos") return products;
    return products.filter((p: any) => {
      if (isDbProfile) return p.category === activeCategory;
      return true;
    });
  }, [products, activeCategory, isDbProfile]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { todos: products.length };
    products.forEach((p: any) => {
      const cat = isDbProfile ? p.category : "todos";
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, [products, isDbProfile]);

  // Hero images from top products
  const heroImages = useMemo(() => {
    return products.filter((p: any) => p.image).slice(0, 5).map((p: any) => ({ image: p.image, title: p.title, price: p.price, id: p.id }));
  }, [products]);

  // Auto-slide hero
  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => setHeroSlide((p) => (p + 1) % heroImages.length), 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
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

  const isPaid = sellerTier !== "basico";

  return (
    <div className="min-h-screen bg-background">
      {/* ═══════════ HERO BANNER ═══════════ */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        {/* Sliding background images */}
        <AnimatePresence mode="wait">
          {heroImages.length > 0 && (
            <motion.img
              key={heroSlide}
              src={heroImages[heroSlide].image}
              alt={heroImages[heroSlide].title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </AnimatePresence>
        {heroImages.length === 0 && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

        {/* Back button */}
        <div className="absolute top-4 left-4 z-20">
          <Link to={isProperty ? "/imoveis" : "/veiculos"} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white text-sm font-medium hover:bg-white/20 transition-colors">
            <ArrowLeft size={16} /> Voltar
          </Link>
        </div>

        {/* Tier Badge */}
        {isPaid && (
          <div className="absolute top-4 right-4 z-20">
            <PackageBadge tier={sellerTier} size="lg" />
          </div>
        )}

        {/* Hero slide arrows */}
        {heroImages.length > 1 && (
          <>
            <button onClick={() => setHeroSlide((p) => (p - 1 + heroImages.length) % heroImages.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => setHeroSlide((p) => (p + 1) % heroImages.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors">
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Hero slide dots */}
        {heroImages.length > 1 && (
          <div className="absolute bottom-28 md:bottom-36 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {heroImages.map((_, i) => (
              <button key={i} onClick={() => setHeroSlide(i)} className={`w-2 h-2 rounded-full transition-all ${i === heroSlide ? "bg-white w-6" : "bg-white/40"}`} />
            ))}
          </div>
        )}

        {/* Company info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
          <div className="container max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <div className="flex items-center gap-4 mb-3">
                {company.logo ? (
                  <img src={company.logo} alt={company.name} className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover border-2 border-white/30 shadow-2xl" />
                ) : (
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/30">
                    <span className="text-white font-bold text-2xl">{company.name?.charAt(0)}</span>
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="font-display font-bold text-2xl md:text-4xl text-white leading-tight">{company.name}</h1>
                    {isPaid && <BadgeCheck size={22} className="text-primary" />}
                  </div>
                  <div className="flex items-center gap-3 mt-1 flex-wrap">
                    {dbProfile?.seller_category && (
                      <span className="flex items-center gap-1 text-white/80 text-xs font-medium bg-white/10 px-2 py-0.5 rounded-full">
                        {({ imobiliaria: "🏢 Imobiliária", corretor: "📋 Corretor(a)", proprietario: "🏠 Proprietário", loja_veiculos: "🏪 Loja de Veículos", autonomo: "👤 Autônomo", concessionaria: "🚗 Concessionária" } as Record<string, string>)[dbProfile.seller_category]}
                        {dbProfile.seller_category === "corretor" && dbProfile.creci && ` • ${dbProfile.creci}`}
                      </span>
                    )}
                    {company.address && (
                      <span className="flex items-center gap-1 text-white/70 text-xs">
                        <MapPin size={12} /> {company.address}
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-white/60 text-xs">
                      <Store size={12} /> {products.length} anúncios
                    </span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2 mt-4">
                {company.whatsapp && (
                  <button onClick={() => handleWhatsApp(heroProduct?.title || company.name)} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25d366] text-white font-bold text-sm hover:bg-[#22c55e] transition-colors shadow-lg">
                    <MessageCircle size={16} /> WhatsApp
                  </button>
                )}
                {(company as any).instagram && ["vip", "essencial_empresa", "premium_empresa"].includes(sellerTier || "") && (
                  <a href={`https://instagram.com/${(company as any).instagram.replace(/^@/, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-lg">
                    <Instagram size={16} /> Instagram
                  </a>
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md text-white text-sm font-medium hover:bg-white/20 transition-colors">
                      <Share2 size={14} />
                      <span className="hidden sm:inline">Compartilhar</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => {
                      const text = `Confira ${company.name} no MelhorBusca: ${window.location.href}`;
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

      {/* ═══════════ STATS BAR ═══════════ */}
      <section className="border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-6 py-3 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2 text-sm flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Store size={16} className="text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">{products.length}</p>
                <p className="text-[10px] text-muted-foreground">Anúncios</p>
              </div>
            </div>
            <div className="w-px h-8 bg-border flex-shrink-0" />
            <div className="flex items-center gap-2 text-sm flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-[#25d366]/10 flex items-center justify-center">
                <MessageCircle size={16} className="text-[#25d366]" />
              </div>
              <div>
                <p className="font-bold text-foreground">Direto</p>
                <p className="text-[10px] text-muted-foreground">WhatsApp</p>
              </div>
            </div>
            <div className="w-px h-8 bg-border flex-shrink-0" />
            <div className="flex items-center gap-2 text-sm flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <Shield size={16} className="text-accent-foreground" />
              </div>
              <div>
                <p className="font-bold text-foreground">{isPaid ? "Verificado" : "Ativo"}</p>
                <p className="text-[10px] text-muted-foreground">Vendedor</p>
              </div>
            </div>
            {isPaid && (
              <>
                <div className="w-px h-8 bg-border flex-shrink-0" />
                <div className="flex items-center gap-2 text-sm flex-shrink-0">
                  <PackageBadge tier={sellerTier} size="sm" />
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════ MAIN LAYOUT ═══════════ */}
      <div className="container max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* ═══════════ DESKTOP SIDEBAR ═══════════ */}
          <aside className="hidden lg:block w-[280px] flex-shrink-0">
            <div className="sticky top-20 space-y-4">
              {/* Company Card */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                {/* Mini banner */}
                <div className="h-20 bg-gradient-to-r from-primary to-primary/60 relative">
                  {company.logo && (
                    <img src={company.logo} alt="" className="absolute -bottom-6 left-4 w-14 h-14 rounded-xl object-cover border-3 border-card shadow-lg" />
                  )}
                </div>
                <div className="p-4 pt-8">
                  <h3 className="font-display font-bold text-foreground text-sm">{company.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {dbProfile?.seller_category
                      ? ({ imobiliaria: "Imobiliária", corretor: "Corretor(a) de Imóveis", proprietario: "Proprietário", loja_veiculos: "Loja de Veículos", autonomo: "Autônomo", concessionaria: "Concessionária" } as Record<string, string>)[dbProfile.seller_category] || (isProperty ? "Imobiliária" : "Loja de Veículos")
                      : isProperty ? "Imobiliária" : "Loja de Veículos"}
                  </p>
                  {dbProfile?.seller_category === "corretor" && dbProfile?.creci && (
                    <p className="text-xs text-primary font-semibold mt-1 flex items-center gap-1">
                      <Shield size={12} /> {dbProfile.creci}
                    </p>
                  )}
                  
                  {company.address && (
                    <div className="flex items-start gap-2 text-xs text-muted-foreground mt-3">
                      <MapPin size={12} className="mt-0.5 flex-shrink-0 text-primary" />
                      <span>{company.address}</span>
                    </div>
                  )}

                  <div className="mt-4 space-y-2">
                    {company.whatsapp && (
                      <button
                        onClick={() => handleWhatsApp(company.name)}
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25d366] text-white font-bold text-xs hover:bg-[#22c55e] transition-colors"
                      >
                        <MessageCircle size={14} /> Falar no WhatsApp
                      </button>
                    )}
                    {(company as any).instagram && ["vip", "essencial_empresa", "premium_empresa"].includes(sellerTier || "") && (
                      <a
                        href={`https://instagram.com/${(company as any).instagram.replace(/^@/, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white font-bold text-xs hover:opacity-90 transition-opacity"
                      >
                        <Instagram size={14} /> Instagram
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="bg-card border border-border rounded-2xl p-4">
                <h3 className="font-display font-bold text-sm text-foreground mb-3 flex items-center gap-2">
                  <BadgeCheck size={14} className="text-primary" /> Sobre a empresa
                </h3>
                {dbProfile?.bio && (
                  <p className="text-sm text-foreground mb-3 whitespace-pre-line">{dbProfile.bio}</p>
                )}
                <div className="space-y-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Store size={13} className="flex-shrink-0" />
                    <span>
                      {dbProfile?.seller_category
                        ? ({ imobiliaria: "Imobiliária", corretor: "Corretor(a) de Imóveis", proprietario: "Proprietário", loja_veiculos: "Loja de Veículos", autonomo: "Vendedor Autônomo", concessionaria: "Concessionária" } as Record<string, string>)[dbProfile.seller_category] || (isProperty ? "Especialista em imóveis" : "Especialista em veículos")
                        : isProperty ? "Especialista em imóveis" : "Especialista em veículos"}
                    </span>
                  </div>
                  {dbProfile?.seller_category === "corretor" && dbProfile?.creci && (
                    <div className="flex items-center gap-2">
                      <Shield size={13} className="flex-shrink-0 text-primary" />
                      <span className="font-semibold text-primary">CRECI - {dbProfile.creci}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Zap size={13} className="flex-shrink-0" />
                    <span>Contato direto via WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={13} className="flex-shrink-0" />
                    <span>{isPaid ? "Vendedor verificado e premium" : "Vendedor ativo na plataforma"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={13} className="flex-shrink-0" />
                    <span>Atendimento em horário comercial</span>
                  </div>
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
            </div>
          </aside>

          {/* ═══════════ MAIN CONTENT ═══════════ */}
          <div className="flex-1 min-w-0">
            {/* Mobile Category Carousel */}
            <div className="lg:hidden mb-6">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory">
                {subcategories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.slug;
                  const count = cat.slug === "todos" ? products.length : (categoryCounts[cat.slug] || 0);
                  return (
                    <button
                      key={cat.slug}
                      onClick={() => setActiveCategory(cat.slug)}
                      className={`flex-shrink-0 snap-start flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold transition-all border ${
                        isActive
                          ? "bg-primary text-primary-foreground border-primary shadow-md"
                          : "bg-card text-muted-foreground border-border hover:border-primary/30"
                      }`}
                    >
                      <Icon size={14} />
                      {cat.name}
                      {count > 0 && <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20" : "bg-muted"}`}>{count}</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Gallery Row — top products photos */}
            {products.length >= 3 && (
              <div className="mb-6">
                <h3 className="font-display font-semibold text-sm text-muted-foreground mb-3">Galeria</h3>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                  {products.filter((p: any) => p.image).slice(0, 6).map((p: any, i: number) => (
                    <Link key={p.id} to={`/${p.type === "veiculo" ? "veiculos" : "imoveis"}/produto/${p.id}`}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                      >
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                          <Eye size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Products Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-bold text-lg md:text-xl text-foreground">
                {activeCategory === "todos"
                  ? `Todos os Anúncios`
                  : subcategories.find(c => c.slug === activeCategory)?.name}
                <span className="text-muted-foreground font-normal text-sm ml-2">({filteredProducts.length})</span>
              </h2>
            </div>

            {/* Products Grid — Premium cards */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {filteredProducts.map((product: any, i: number) => {
                  const productLink = `/${product.type === "veiculo" ? "veiculos" : "imoveis"}/produto/${product.id}`;
                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.03 + i * 0.03 }}
                    >
                      <Link to={productLink} className="group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                          {product.image ? (
                            <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Image size={32} className="text-muted-foreground" />
                            </div>
                          )}
                          {/* Gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          {/* Tag */}
                          {product.tag && (
                            <span className={`absolute top-2 left-2 px-2.5 py-1 rounded-lg text-[10px] font-bold shadow-md ${getTagStyle(product.tag)}`}>
                              {getTagLabel(product.tag)}
                            </span>
                          )}
                          {/* Quick WhatsApp on hover */}
                          {company.whatsapp && (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                if (isDbProfile && id) trackSellerEvent(id, "whatsapp_click");
                                const url = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Olá ${company.name}! Tenho interesse: ${product.title}\n\n🔗 ${window.location.origin}/${segment}/produto/${product.id}`)}`;
                                window.location.href = url;
                              }}
                              className="absolute bottom-2 right-2 w-9 h-9 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                            >
                              <MessageCircle size={16} />
                            </button>
                          )}
                        </div>
                        <div className="p-3 md:p-4">
                          <h3 className="font-display font-semibold text-foreground text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                            {product.title}
                          </h3>
                          {product.price > 0 && (
                            <p className="font-display font-bold text-primary text-base md:text-lg mt-1.5">
                              {isDbProfile
                                ? `R$ ${product.price.toLocaleString("pt-BR")}`
                                : formatPrice(product.price)}
                            </p>
                          )}
                          {product.city && (
                            <p className="text-[11px] text-muted-foreground mt-1.5 flex items-center gap-1">
                              <MapPin size={10} /> {product.city}
                            </p>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-20 bg-card border border-border rounded-2xl">
                <Image size={48} className="text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground text-lg font-medium">Nenhum anúncio nesta categoria</p>
                <button onClick={() => setActiveCategory("todos")} className="text-primary text-sm mt-2 hover:underline">Ver todos</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ═══════════ MOBILE: SOBRE A EMPRESA ═══════════ */}
      <section className="lg:hidden px-4 mt-6 mb-6">
        <div className="container max-w-7xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-5">
            <h3 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
              <BadgeCheck size={16} className="text-primary" /> Sobre a empresa
            </h3>
            {dbProfile?.bio && (
              <p className="text-sm text-foreground mb-3 whitespace-pre-line">{dbProfile.bio}</p>
            )}
            <div className="space-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Store size={13} className="flex-shrink-0" />
                <span>
                  {dbProfile?.seller_category
                    ? ({ imobiliaria: "Imobiliária", corretor: "Corretor(a) de Imóveis", proprietario: "Proprietário", loja_veiculos: "Loja de Veículos", autonomo: "Vendedor Autônomo", concessionaria: "Concessionária" } as Record<string, string>)[dbProfile.seller_category] || (isProperty ? "Especialista em imóveis" : "Especialista em veículos")
                    : isProperty ? "Especialista em imóveis" : "Especialista em veículos"}
                </span>
              </div>
              {dbProfile?.seller_category === "corretor" && dbProfile?.creci && (
                <div className="flex items-center gap-2">
                  <Shield size={13} className="flex-shrink-0 text-primary" />
                  <span className="font-semibold text-primary">CRECI - {dbProfile.creci}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Zap size={13} className="flex-shrink-0" />
                <span>Contato direto via WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={13} className="flex-shrink-0" />
                <span>{isPaid ? "Vendedor verificado e premium" : "Vendedor ativo na plataforma"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={13} className="flex-shrink-0" />
                <span>Atendimento em horário comercial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ LOCATION ═══════════ */}
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
