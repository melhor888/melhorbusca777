import { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Car, Bike, Truck, Cog, ArrowLeft, ArrowRight, Search } from "lucide-react";
import { vehicleCompanies, vehicleCategories, type Company } from "@/data/companies";
import { allProducts, formatPrice, getTagStyle, getTagLabel, type Product } from "@/data/products";
import { useRealListings } from "@/hooks/useRealListings";

const iconMap: Record<string, React.ElementType> = { Car, Bike, Truck, Cog };

export default function VehiclesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filterCity, setFilterCity] = useState("");
  const [filterBrand, setFilterBrand] = useState("");
  const [filterModel, setFilterModel] = useState("");
  const itemsSectionRef = useRef<HTMLDivElement>(null);

  const { sellers: realSellers, items: realItems } = useRealListings("automoveis");

  const scrollToItems = () => {
    setTimeout(() => {
      itemsSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  // Build unified seller map
  const allSellers = useMemo(() => {
    const map: Record<string, { id: string; name: string; logo: string; address: string; isReal: boolean }> = {};
    vehicleCompanies.forEach((c) => { map[c.id] = { id: c.id, name: c.name, logo: c.logo, address: c.address, isReal: false }; });
    realSellers.forEach((s) => { map[s.id] = { id: s.id, name: s.name, logo: s.logo, address: s.address, isReal: true }; });
    return map;
  }, [realSellers]);

  const vehicleProducts = useMemo(() => {
    const staticProds = allProducts.filter((p) => p.type === "veiculo");
    const realProds: Product[] = realItems.map((item) => ({
      id: item.id,
      companyId: item.sellerId,
      title: item.title,
      price: item.price,
      image: item.image,
      images: item.images,
      tag: item.tags?.[0] ? getTagLabel(item.tags[0]) : undefined,
      description: item.description || "",
      type: "veiculo" as const,
      specs: {
        ...(item.brand ? { Marca: item.brand } : {}),
        ...(item.model ? { Modelo: item.model } : {}),
      },
      location: item.city || "",
    }));
    return [...realProds, ...staticProds];
  }, [realItems]);

  // Random hero product
  const heroProduct = useMemo(() => {
    const prods = vehicleProducts.length ? vehicleProducts : allProducts.filter((p) => p.type === "veiculo");
    return prods[Math.floor(Math.random() * prods.length)];
  }, [vehicleProducts]);

  const heroCompany = heroProduct ? allSellers[heroProduct.companyId] : undefined;

  // Extract unique brands from specs
  const availableBrands = useMemo(() => {
    const brands = new Set<string>();
    vehicleProducts.forEach((p) => { if (p.specs["Marca"]) brands.add(p.specs["Marca"]); });
    return Array.from(brands).sort();
  }, [vehicleProducts]);

  const availableCities = useMemo(() => {
    const cities = new Set<string>();
    vehicleCompanies.forEach((c) => {
      const city = c.address.split(" - ").pop()?.trim();
      if (city) cities.add(city);
    });
    realSellers.forEach((s) => {
      if (s.address) {
        const parts = s.address.split(",").map((p) => p.trim());
        parts.forEach((p) => { if (p && p.length > 1) cities.add(p); });
      }
    });
    return Array.from(cities).sort();
  }, [realSellers]);

  const filteredProducts = useMemo(() => {
    let list = !activeCategory
      ? [...vehicleProducts]
      : vehicleProducts.filter((p) => {
          const companyIds = vehicleCompanies
            .filter((c) => c.category === activeCategory)
            .map((c) => c.id);
          return companyIds.includes(p.companyId);
        });

    // Apply filters
    if (filterCity) {
      const cityCompanyIds = vehicleCompanies
        .filter((c) => c.address.includes(filterCity))
        .map((c) => c.id);
      list = list.filter((p) => cityCompanyIds.includes(p.companyId));
    }
    if (filterBrand) {
      list = list.filter((p) => p.specs["Marca"] === filterBrand);
    }
    if (filterModel) {
      const q = filterModel.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q) || (p.specs["Modelo"] || "").toLowerCase().includes(q));
    }

    // Shuffle
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }, [activeCategory, vehicleProducts, filterCity, filterBrand, filterModel]);

  return (
    <div className="min-h-screen bg-background">
      {/* Netflix Hero Banner */}
      <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <img
          src={heroProduct?.images[0] || "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&h=500&fit=crop"}
          alt={heroProduct?.title || "Veículos"}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        <div className="absolute top-4 left-4 z-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card/60 backdrop-blur-md text-foreground text-sm font-medium hover:bg-card/80 transition-colors"
          >
            <ArrowLeft size={16} /> Voltar
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-10">
          <div className="container max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              {heroCompany && (
                <div className="flex items-center gap-3 mb-3">
                  <img src={heroCompany.logo} alt={heroCompany.name} className="w-10 h-10 rounded-full object-cover border-2 border-white/30" />
                  <span className="text-sm font-semibold text-white/90">{heroCompany.name}</span>
                </div>
              )}
              <h1 className="font-display font-bold text-3xl md:text-5xl text-white drop-shadow-lg leading-tight">
                {heroProduct?.title || "Veículos"}
              </h1>
              <p className="text-white/75 mt-2 text-sm md:text-base line-clamp-2 max-w-lg">
                {heroProduct?.description || "Encontre os melhores veículos"}
              </p>
              {heroProduct && (
                <p className="font-display font-bold text-2xl md:text-3xl text-[#FFD100] mt-3 drop-shadow">
                  {formatPrice(heroProduct.price)}
                </p>
              )}
              {heroProduct && (
                <Link
                  to={`/veiculos/produto/${heroProduct.id}`}
                  className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity shadow-lg"
                >
                  Ver Anúncio <ArrowRight size={16} />
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Categories - Carousel */}
      <section className="px-4 md:px-8 lg:px-12 mt-6 relative z-10">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 pl-1 pr-8 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible md:pl-0 md:pr-0">
          {vehicleCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Car;
            const isActive = activeCategory === cat.slug;
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="flex-shrink-0 w-[140px] md:w-auto snap-start"
              >
                <button
                  onClick={() => { setActiveCategory(isActive ? null : cat.slug); if (!isActive) scrollToItems(); }}
                  className={`w-full group ${isActive ? "ring-4 ring-white/60 rounded-2xl" : ""}`}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${cat.color} ${
                        isActive ? "opacity-90" : "opacity-65 group-hover:opacity-80"
                      } transition-opacity`}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                      <Icon size={26} className="text-white drop-shadow-md" />
                      <span className="font-display font-bold text-white text-sm md:text-base drop-shadow-lg">
                        {cat.name}
                      </span>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="pt-8 pb-2">
        <h3 className="font-display font-semibold text-base text-foreground mb-4 px-4 md:px-8 lg:px-12">Destaques</h3>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory px-4 md:px-8 lg:px-12">
          {vehicleProducts.slice(0, 12).map((product, i) => {
            const company = allSellers[product.companyId];
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex-shrink-0 w-[200px] md:w-[240px] snap-start"
              >
                <Link to={`/veiculos/produto/${product.id}`} className="group block">
                  <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-md">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    {product.tag && (
                      <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-bold shadow ${getTagStyle(product.tag)}`}>{product.tag}</span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-white font-semibold text-sm line-clamp-1 drop-shadow">{product.title}</p>
                      <p className="text-[#FFD100] font-bold text-sm mt-0.5">{formatPrice(product.price)}</p>
                      {company && (
                        <div className="flex items-center gap-1.5 mt-1">
                          <img src={company.logo} alt={company.name} className="w-5 h-5 rounded-full object-cover border border-white/30" />
                          <span className="text-white/80 text-[10px] truncate">{company.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
          <div className="flex-shrink-0 w-4" aria-hidden="true" />
        </div>
      </section>

      {/* Company Logos */}
      <section className="pt-8 pb-2">
        <h3 className="font-display font-semibold text-base text-muted-foreground mb-4 px-4 md:px-8 lg:px-12">Lojas em destaque</h3>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 px-4 md:px-8 lg:px-12">
          {/* Real sellers first */}
          {realSellers.filter((s) => s.logo).map((seller, i) => (
            <motion.div
              key={`real-${seller.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                to={`/veiculos/empresa/${seller.id}`}
                className="flex flex-col items-center gap-2 group flex-shrink-0 w-20"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent group-hover:border-primary group-hover:shadow-lg transition-all duration-300">
                  <img src={seller.logo} alt={seller.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                </div>
                <span className="text-[11px] text-center text-muted-foreground group-hover:text-foreground font-medium leading-tight line-clamp-2 transition-colors">
                  {seller.name}
                </span>
              </Link>
            </motion.div>
          ))}
          {/* Static companies */}
          {vehicleCompanies.map((company, i) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (realSellers.length + i) * 0.04 }}
            >
              <Link
                to={`/veiculos/empresa/${company.id}`}
                className="flex flex-col items-center gap-2 group flex-shrink-0 w-20"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border group-hover:border-primary group-hover:shadow-lg transition-all duration-300">
                  <img src={company.logo} alt={company.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                </div>
                <span className="text-[11px] text-center text-muted-foreground group-hover:text-foreground font-medium leading-tight line-clamp-2 transition-colors">
                  {company.name}
                </span>
              </Link>
            </motion.div>
          ))}
          <div className="flex-shrink-0 w-4" aria-hidden="true" />
        </div>
      </section>

      {/* Search Filters */}
      <section className="px-4 md:px-8 lg:px-12 pt-8 pb-2">
        <div className="bg-card border border-border rounded-2xl p-4 md:p-6 shadow-sm">
          <h3 className="font-display font-semibold text-sm text-muted-foreground mb-3 flex items-center gap-2">
            <Search size={16} /> Filtrar veículos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <select
              value={filterCity}
              onChange={(e) => setFilterCity(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">Todas as cidades</option>
              {availableCities.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <select
              value={filterBrand}
              onChange={(e) => setFilterBrand(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">Todas as marcas</option>
              {availableBrands.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
            <input
              type="text"
              value={filterModel}
              onChange={(e) => setFilterModel(e.target.value)}
              placeholder="Buscar modelo..."
              className="w-full px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              onClick={() => { setFilterCity(""); setFilterBrand(""); setFilterModel(""); setActiveCategory(null); }}
              className="w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#002F6C] to-[#00AEEF] text-white font-bold text-sm hover:opacity-90 transition-opacity shadow"
            >
              Limpar Filtros
            </button>
          </div>
        </div>
      </section>

      {/* Products listing */}
      <section ref={itemsSectionRef} className="px-4 md:px-8 lg:px-12 py-8 scroll-mt-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-bold text-xl md:text-2xl text-foreground">
            {activeCategory
              ? vehicleCategories.find((c) => c.slug === activeCategory)?.name
              : "Todos os Veículos"}
          </h2>
          <span className="text-sm text-muted-foreground">
            {filteredProducts.length} veículo(s)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProducts.map((product, i) => {
            const company = allSellers[product.companyId];
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link to={`/veiculos/produto/${product.id}`}>
                  <div className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      {product.tag && (
                        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow ${getTagStyle(product.tag)}`}>
                          {product.tag}
                        </span>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <h3 className="font-display font-bold text-base md:text-lg text-foreground line-clamp-1">
                        {product.title}
                      </h3>
                      <p className="text-xl font-bold text-primary mt-1">
                        {formatPrice(product.price)}
                      </p>

                      {/* Company info */}
                      {company && (
                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                          <img
                            src={company.logo}
                            alt={company.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">
                              {company.name}
                            </p>
                            <p className="text-xs text-muted-foreground truncate">
                              {company.address}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-muted-foreground py-16">
            Nenhum veículo encontrado nesta categoria
          </p>
        )}
      </section>
    </div>
  );
}
