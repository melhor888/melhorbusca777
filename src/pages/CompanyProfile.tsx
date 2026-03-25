import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, MapPin, MessageCircle, Share2 } from "lucide-react";
import { allCompanies } from "@/data/companies";
import { getProductsByCompany, formatPrice, getTagStyle } from "@/data/products";
import MapEmbed from "@/components/MapEmbed";

export default function CompanyProfile() {
  const { id } = useParams();
  const company = allCompanies.find((c) => c.id === id);
  const products = company ? getProductsByCompany(company.id) : [];

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

  const isProperty = company.segment === "imoveis";
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
          <Link to={isProperty ? "/imoveis" : "/veiculos"} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card/60 backdrop-blur-md text-foreground text-sm font-medium hover:bg-card/80 transition-colors">
            <ArrowLeft size={16} /> Voltar
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-10">
          <div className="container max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <img src={company.logo} alt={company.name} className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover border-2 border-card shadow-xl" />
                <div>
                  <h1 className="font-display font-bold text-2xl md:text-4xl text-foreground leading-tight">{company.name}</h1>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-accent fill-accent" />
                      <span className="text-sm font-semibold text-foreground">{company.rating}</span>
                      <span className="text-xs text-muted-foreground">({company.reviewCount})</span>
                    </div>
                    <span className="text-muted-foreground">·</span>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <MapPin size={12} />
                      <span>{company.address}</span>
                    </div>
                  </div>
                </div>
              </div>

              {heroProduct && (
                <div className="mt-2">
                  <p className="text-sm text-muted-foreground">Em destaque</p>
                  <p className="font-display font-semibold text-lg text-foreground">{heroProduct.title}</p>
                  <p className="font-display font-bold text-2xl text-primary mt-1">{formatPrice(heroProduct.price)}</p>
                </div>
              )}

              <div className="flex gap-3 mt-5">
                <a href={whatsappUrl(heroProduct?.title || company.name)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-lg">
                  <MessageCircle size={18} /> WhatsApp
                </a>
                <button onClick={() => navigator.share?.({ title: company.name, url: window.location.href })} className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card/60 backdrop-blur-md text-foreground font-medium text-sm hover:bg-card/80 transition-colors">
                  <Share2 size={16} /> Compartilhar
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Map */}
      <section className="container max-w-6xl mx-auto px-4 py-8">
        <h2 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
          <MapPin size={20} className="text-primary" />
          Localização da Empresa
        </h2>
        <MapEmbed address={company.address} />
      </section>

      {/* Products Grid */}
      <section className="container max-w-6xl mx-auto px-4 pb-8">
        <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-6">
          Todos os Anúncios ({products.length})
        </h2>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, i) => (
              <Link key={product.id} to={`/${isProperty ? "imoveis" : "veiculos"}/produto/${product.id}`}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + i * 0.04 }} className="card-epic bg-card border border-border group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    {product.tag && (
                      <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-bold shadow ${getTagStyle(product.tag)}`}>{product.tag}</span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <span className="text-xs font-medium text-primary flex items-center gap-1">
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
            <p className="text-muted-foreground text-lg">Nenhum produto cadastrado ainda</p>
          </div>
        )}
      </section>
    </div>
  );
}
