import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, MessageCircle, Share2, Star, MapPin, Tag, Store, Image } from "lucide-react";
import { getProductById, formatPrice, getProductsByCompany, getTagStyle, getTagLabel } from "@/data/products";
import { allCompanies } from "@/data/companies";
import { supabase } from "@/integrations/supabase/client";
import { trackSellerEvent } from "@/hooks/useSellerAnalytics";
import MapEmbed from "@/components/MapEmbed";

function isUUID(str: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str);
}

export default function ProductDetail() {
  const { productId } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dbItem, setDbItem] = useState<any>(null);
  const [dbSeller, setDbSeller] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isDb, setIsDb] = useState(false);

  // Static data
  const staticProduct = productId ? getProductById(productId) : undefined;
  const staticCompany = staticProduct ? allCompanies.find((c) => c.id === staticProduct.companyId) : undefined;

  useEffect(() => {
    if (productId && isUUID(productId)) {
      setIsDb(true);
      fetchDbItem(productId);
    } else {
      setIsDb(false);
      setLoading(false);
    }
  }, [productId]);

  const fetchDbItem = async (id: string) => {
    const { data: item } = await supabase
      .from("seller_items")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (item) {
      setDbItem(item);
      const { data: seller } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", item.seller_id)
        .maybeSingle();
      setDbSeller(seller);
      // Track view
      trackSellerEvent(item.seller_id, "view", item.id);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  // Determine which data to use
  const product = isDb ? dbItem : staticProduct;
  const company = isDb
    ? dbSeller
      ? {
          id: dbSeller.id,
          name: dbSeller.company_name || dbSeller.full_name,
          logo: dbSeller.logo_url || "",
          address: [dbSeller.address, dbSeller.city, dbSeller.state].filter(Boolean).join(", "),
          whatsapp: dbSeller.phone || "",
          rating: "5.0",
          reviewCount: 0,
          segment: dbSeller.seller_type,
        }
      : null
    : staticCompany;

  if (!product || !company) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="font-display font-bold text-2xl text-foreground">Anúncio não encontrado</h1>
        <Link to="/" className="text-primary text-sm mt-4 inline-block hover:underline">Voltar ao início</Link>
      </div>
    );
  }

  // Normalize data
  const isProperty = isDb
    ? ["casa", "apartamento", "terreno", "comercial", "galpao", "flat", "aluguel"].includes(product.category)
    : product.type === "imovel";

  const images = isDb ? (product.photos?.length > 0 ? product.photos : []) : product.images;
  const title = product.title;
  const price = isDb ? product.price : product.price;
  const description = isDb ? product.description : product.description;
  const tag = isDb ? product.tags?.[0] : product.tag;

  const companyUrl = `/${isProperty ? "imoveis" : "veiculos"}/empresa/${company.id}`;

  const formattedPrice = isDb
    ? price ? `R$ ${Number(price).toLocaleString("pt-BR")}` : ""
    : formatPrice(price);

  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Olá ${company.name}! Tenho interesse: ${title} - ${formattedPrice}`)}`;
  const handleWhatsAppClick = () => {
    if (isDb && dbItem) trackSellerEvent(dbItem.seller_id, "whatsapp_click", dbItem.id);
  };

  const mapAddress = isDb
    ? [product.address, product.neighborhood, product.city, product.state].filter(Boolean).join(", ") || company.address
    : (isProperty && product.location ? product.location : company.address);

  // Specs for db items
  const specs: Record<string, string> = {};
  if (isDb) {
    if (product.brand) specs["Marca"] = product.brand;
    if (product.model) specs["Modelo"] = product.model;
    if (product.year) specs["Ano"] = String(product.year);
    if (product.mileage) specs["Quilometragem"] = `${Number(product.mileage).toLocaleString("pt-BR")} km`;
    if (product.fuel) specs["Combustível"] = product.fuel;
    if (product.transmission) specs["Câmbio"] = product.transmission;
    if (product.color) specs["Cor"] = product.color;
    if (product.bedrooms) specs["Quartos"] = String(product.bedrooms);
    if (product.bathrooms) specs["Banheiros"] = String(product.bathrooms);
    if (product.area) specs["Área"] = `${product.area} m²`;
    if (product.parking_spots) specs["Vagas"] = String(product.parking_spots);
    if (product.city) specs["Cidade"] = product.city;
    if (product.neighborhood) specs["Bairro"] = product.neighborhood;
  }

  const displaySpecs = isDb ? specs : product.specs;

  // Related products (only for static)
  const relatedProducts = isDb ? [] : getProductsByCompany(company.id).filter((p: any) => p.id !== product.id).slice(0, 4);

  const scrollCarousel = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.8;
    carouselRef.current.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <section className="relative">
        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-muted">
          {images.length > 0 ? (
            <motion.img key={activeImage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} src={images[activeImage]} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <Image size={64} className="text-muted-foreground" />
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent pointer-events-none" />
        <div className="absolute top-4 left-4 z-20">
          <Link to={companyUrl} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card/70 backdrop-blur-md text-foreground text-sm font-medium hover:bg-card/90 transition-colors">
            <ArrowLeft size={16} /> Voltar
          </Link>
        </div>
        {tag && (
          <div className="absolute top-4 right-4 z-20">
            <span className={`px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg ${getTagStyle(tag)}`}>
              <Tag size={12} className="inline mr-1 mb-0.5" />{getTagLabel(tag)}
            </span>
          </div>
        )}
      </section>

      {/* Thumbnail Carousel */}
      {images.length > 1 && (
        <div className="relative container max-w-6xl mx-auto px-4 -mt-10 z-10">
          <div className="relative">
            <button onClick={() => scrollCarousel("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-card transition-colors shadow">
              <ChevronLeft size={18} />
            </button>
            <div ref={carouselRef} className="flex gap-2 overflow-x-auto scrollbar-hide px-10 py-2">
              {images.map((img: string, i: number) => (
                <button key={i} onClick={() => setActiveImage(i)} className={`flex-shrink-0 w-20 h-14 md:w-28 md:h-20 rounded-xl overflow-hidden border-2 transition-all ${activeImage === i ? "border-primary shadow-lg scale-105" : "border-transparent opacity-70 hover:opacity-100"}`}>
                  <img src={img} alt={`Foto ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <button onClick={() => scrollCarousel("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-card transition-colors shadow">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className={`text-xs font-bold uppercase tracking-wider ${isProperty ? "text-primary" : "text-accent"}`}>
                {isProperty ? "Imóvel" : "Veículo"} {isDb ? `• ${product.category}` : ""}
              </p>
              <h1 className="font-display font-bold text-2xl md:text-4xl text-foreground mt-1 leading-tight">{title}</h1>
              {formattedPrice && (
                <p className="font-display font-bold text-3xl md:text-4xl text-primary mt-3">
                  {formattedPrice}
                </p>
              )}
            </motion.div>

            {/* Description */}
            {description && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <h2 className="font-display font-semibold text-lg text-foreground mb-2">Descrição</h2>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              </motion.div>
            )}

            {/* Specs */}
            {Object.keys(displaySpecs).length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="font-display font-semibold text-lg text-foreground mb-3">Especificações</h2>
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  {Object.entries(displaySpecs).map(([key, value], i) => (
                    <div key={key} className={`flex items-center justify-between px-5 py-3.5 ${i % 2 === 0 ? "bg-card" : "bg-muted/50"} ${i < Object.entries(displaySpecs).length - 1 ? "border-b border-border" : ""}`}>
                      <span className="text-sm text-muted-foreground font-medium">{key}</span>
                      <span className="text-sm text-foreground font-semibold">{String(value)}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Map */}
            {mapAddress && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <h2 className="font-display font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
                  <MapPin size={18} className="text-primary" />
                  {isProperty ? "Localização do Imóvel" : "Localização da Loja"}
                </h2>
                <MapEmbed address={mapAddress} />
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-card border border-border rounded-2xl p-6 sticky top-20">
              <Link to={companyUrl} className="flex items-center gap-3 mb-5 group">
                {company.logo ? (
                  <img src={company.logo} alt={company.name} className="w-12 h-12 rounded-xl object-cover border border-border" />
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-border">
                    <span className="font-bold text-primary">{company.name?.charAt(0)}</span>
                  </div>
                )}
                <div>
                  <p className="font-display font-bold text-foreground text-sm group-hover:text-primary transition-colors">{company.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{isProperty ? "Imobiliária" : "Revenda"}</p>
                </div>
              </Link>

              {mapAddress && (
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-5">
                  <MapPin size={13} />
                  <span>{mapAddress}</span>
                </div>
              )}

              {company.whatsapp && (
                <a href={whatsappUrl} onClick={handleWhatsAppClick} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-lg">
                   <MessageCircle size={18} /> Chamar no WhatsApp
                </a>
              )}

              <button onClick={() => navigator.share?.({ title, url: window.location.href })} className="mt-3 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary text-secondary-foreground font-medium text-sm hover:bg-secondary/80 transition-colors">
                <Share2 size={16} /> Compartilhar
              </button>

              <Link to={companyUrl} className="mt-3 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#002F6C] to-[#00AEEF] text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-md">
                <Store size={16} /> Ver Loja Completa
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Related Products (static only) */}
        {relatedProducts.length > 0 && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-16">
            <h2 className="font-display font-bold text-xl text-foreground mb-6">Mais de {company.name}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedProducts.map((rp: any) => (
                <Link key={rp.id} to={`/${isProperty ? "imoveis" : "veiculos"}/produto/${rp.id}`} className="card-epic bg-card border border-border group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                    <img src={rp.image} alt={rp.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="p-3">
                    <h3 className="font-display font-semibold text-foreground text-sm leading-tight line-clamp-2">{rp.title}</h3>
                    <p className="font-display font-bold text-primary text-base mt-1">{formatPrice(rp.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
