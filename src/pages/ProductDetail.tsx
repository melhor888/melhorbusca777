import { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, MessageCircle, Share2, Star, MapPin, Tag } from "lucide-react";
import { getProductById, formatPrice, getProductsByCompany, getTagStyle } from "@/data/products";
import { allCompanies } from "@/data/companies";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = productId ? getProductById(productId) : undefined;
  const company = product ? allCompanies.find((c) => c.id === product.companyId) : undefined;
  const [activeImage, setActiveImage] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  if (!product || !company) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="font-display font-bold text-2xl text-foreground">Anúncio não encontrado</h1>
        <Link to="/" className="text-primary text-sm mt-4 inline-block hover:underline">Voltar ao início</Link>
      </div>
    );
  }

  const isProperty = product.type === "imovel";
  const companyUrl = isProperty ? `/imoveis/empresa/${company.id}` : `/veiculos/empresa/${company.id}`;
  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Olá ${company.name}! Tenho interesse: ${product.title} - ${formatPrice(product.price)}`)}`;

  const relatedProducts = getProductsByCompany(company.id).filter((p) => p.id !== product.id).slice(0, 4);

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
          <motion.img
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            src={product.images[activeImage]}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent pointer-events-none" />

        {/* Back button */}
        <div className="absolute top-4 left-4 z-20">
          <Link
            to={companyUrl}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card/70 backdrop-blur-md text-foreground text-sm font-medium hover:bg-card/90 transition-colors"
          >
            <ArrowLeft size={16} /> Voltar
          </Link>
        </div>

        {/* Tag */}
        {product.tag && (
          <div className="absolute top-4 right-4 z-20">
            <span className={`px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg ${getTagStyle(product.tag)}`}>
              <Tag size={12} className="inline mr-1 mb-0.5" />
              {product.tag}
            </span>
          </div>
        )}
      </section>

      {/* Thumbnail Carousel */}
      {product.images.length > 1 && (
        <div className="relative container max-w-6xl mx-auto px-4 -mt-10 z-10">
          <div className="relative">
            <button
              onClick={() => scrollCarousel("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-card transition-colors shadow"
            >
              <ChevronLeft size={18} />
            </button>

            <div ref={carouselRef} className="flex gap-2 overflow-x-auto scrollbar-hide px-10 py-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`flex-shrink-0 w-20 h-14 md:w-28 md:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === i ? "border-primary shadow-lg scale-105" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`Foto ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollCarousel("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-card transition-colors shadow"
            >
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
                {isProperty ? "Imóvel" : "Veículo"}
              </p>
              <h1 className="font-display font-bold text-2xl md:text-4xl text-foreground mt-1 leading-tight">
                {product.title}
              </h1>
              <p className="font-display font-bold text-3xl md:text-4xl text-primary mt-3">
                {formatPrice(product.price)}
                {isProperty && product.price < 20000 && <span className="text-base text-muted-foreground font-normal">/mês</span>}
              </p>
            </motion.div>

            {/* Description */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h2 className="font-display font-semibold text-lg text-foreground mb-2">Descrição</h2>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </motion.div>

            {/* Specs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="font-display font-semibold text-lg text-foreground mb-3">Especificações</h2>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                {Object.entries(product.specs).map(([key, value], i) => (
                  <div
                    key={key}
                    className={`flex items-center justify-between px-5 py-3.5 ${
                      i % 2 === 0 ? "bg-card" : "bg-muted/50"
                    } ${i < Object.entries(product.specs).length - 1 ? "border-b border-border" : ""}`}
                  >
                    <span className="text-sm text-muted-foreground font-medium">{key}</span>
                    <span className="text-sm text-foreground font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar - CTA + Company */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-card border border-border rounded-2xl p-6 sticky top-20"
            >
              {/* Company info */}
              <Link to={companyUrl} className="flex items-center gap-3 mb-5 group">
                <img src={company.logo} alt={company.name} className="w-12 h-12 rounded-xl object-cover border border-border" />
                <div>
                  <p className="font-display font-bold text-foreground text-sm group-hover:text-primary transition-colors">{company.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Star size={12} className="text-accent fill-accent" />
                    <span className="text-xs text-foreground font-medium">{company.rating}</span>
                    <span className="text-xs text-muted-foreground">({company.reviewCount})</span>
                  </div>
                </div>
              </Link>

              <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-5">
                <MapPin size={13} />
                <span>{company.address}</span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-lg"
              >
                <MessageCircle size={18} />
                Chamar no WhatsApp
              </a>

              <button
                onClick={() => navigator.share?.({ title: product.title, url: window.location.href })}
                className="mt-3 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary text-secondary-foreground font-medium text-sm hover:bg-secondary/80 transition-colors"
              >
                <Share2 size={16} />
                Compartilhar
              </button>
            </motion.div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-16"
          >
            <h2 className="font-display font-bold text-xl text-foreground mb-6">
              Mais de {company.name}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedProducts.map((rp, i) => (
                <Link
                  key={rp.id}
                  to={`/${isProperty ? "imoveis" : "veiculos"}/produto/${rp.id}`}
                  className="card-epic bg-card border border-border group"
                >
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
