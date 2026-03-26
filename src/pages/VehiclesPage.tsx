import { useState, useMemo, useRef, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Car, Bike, Truck, Cog, ArrowLeft, ArrowRight, Search } from "lucide-react";
import { vehicleCompanies, vehicleCategories, type Company } from "@/data/companies";
import { allProducts, formatPrice, getTagStyle, getTagLabel, type Product } from "@/data/products";
import { useRealListings } from "@/hooks/useRealListings";
import PackageBadge from "@/components/PackageBadge";
import HeroBannerCarousel from "@/components/HeroBannerCarousel";

const iconMap: Record<string, React.ElementType> = { Car, Bike, Truck, Cog };

export default function VehiclesPage() {
  const { cidade } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filterCity, setFilterCity] = useState(cidade ? cidade.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : "");
  const [filterBrand, setFilterBrand] = useState("");
  const [filterModel, setFilterModel] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsSectionRef = useRef<HTMLDivElement>(null);

  const { sellers: realSellers, items: realItems } = useRealListings("automoveis");

  useEffect(() => {
    const nextCity = cidade ? cidade.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : "";
    if (nextCity !== filterCity) setFilterCity(nextCity);
  }, [cidade]);

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
    const realProds: (Product & { sellerTier?: string; realCategory?: string })[] = realItems.map((item) => ({
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
      sellerTier: item.sellerTier || "basico",
      realCategory: item.category,
    }));
    return [...realProds, ...staticProds];
  }, [realItems]);

  // Hero carousel sellers map
  const heroSellersMap = useMemo(() => {
    const map: Record<string, { id: string; name: string; logo: string }> = {};
    Object.entries(allSellers).forEach(([id, s]) => { map[id] = { id: s.id, name: s.name, logo: s.logo }; });
    return map;
  }, [allSellers]);

  // Filter sellers by city
  const filteredSellers = useMemo(() => {
    if (!filterCity) return realSellers;
    return realSellers.filter((s) => s.address.toLowerCase().includes(filterCity.toLowerCase()));
  }, [realSellers, filterCity]);

  const featuredProducts = useMemo(() => {
    const base = filterCity
      ? vehicleProducts.filter((p) => (p as any).location?.toLowerCase().includes(filterCity.toLowerCase()))
      : vehicleProducts;
    const shuffled = [...base].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 7);
  }, [vehicleProducts, filterCity]);
  // Extract unique brands from specs
  const availableBrands = useMemo(() => {
    const brands = new Set<string>();
    vehicleProducts.forEach((p) => { if (p.specs["Marca"]) brands.add(p.specs["Marca"]); });
    return Array.from(brands).sort();
  }, [vehicleProducts]);

  const availableCities = useMemo(() => {
    const cities = new Set<string>();
    realItems.forEach((item) => {
      if (item.city) cities.add(item.city.trim());
    });
    vehicleCompanies.forEach((c) => {
      const city = c.address.split(" - ").pop()?.trim();
      if (city) cities.add(city);
    });
    return Array.from(cities).sort();
  }, [realItems]);

  const filteredProducts = useMemo(() => {
    // Map category slugs to real DB categories
    const categoryMap: Record<string, string[]> = {
      carros: ["carro"],
      motos: ["moto"],
      caminhoes: ["caminhao"],
      utilitarios: ["van", "utilitario"],
    };
    let list = !activeCategory
      ? [...vehicleProducts]
      : vehicleProducts.filter((p) => {
          // Match real items by their actual category
          const realCat = (p as any).realCategory;
          if (realCat) {
            const matchCats = categoryMap[activeCategory] || [];
            return matchCats.includes(realCat);
          }
          // Match static items by company category
          const companyIds = vehicleCompanies
            .filter((c) => c.category === activeCategory)
            .map((c) => c.id);
          return companyIds.includes(p.companyId);
        });

    // Apply filters
    if (filterCity) {
      const cityLower = filterCity.toLowerCase();
      const cityCompanyIds = vehicleCompanies
        .filter((c) => c.address.toLowerCase().includes(cityLower))
        .map((c) => c.id);
      list = list.filter((p) => cityCompanyIds.includes(p.companyId) || (p as any).location?.toLowerCase().includes(cityLower));
    }
    if (filterBrand) {
      list = list.filter((p) => p.specs["Marca"] === filterBrand);
    }
    if (filterModel) {
      const q = filterModel.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q) || (p.specs["Modelo"] || "").toLowerCase().includes(q));
    }

    // Stable shuffle using item id as seed (no random re-renders)
    list.sort((a, b) => a.id.localeCompare(b.id));
    return list;
  }, [activeCategory, vehicleProducts, filterCity, filterBrand, filterModel]);

  return (
    <div className="min-h-screen bg-background">
      <HeroBannerCarousel
        items={vehicleProducts as any}
        sellers={heroSellersMap}
        type="veiculos"
        filterCity={filterCity}
        fallbackImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&h=500&fit=crop"
        accentColor="text-[#FFD100]"
      />

      {/* City filter + Company Logos */}
      <section className="pt-6 pb-2 px-4 md:px-8 lg:px-12">
        <h3 className="font-display font-semibold text-base text-muted-foreground mb-4 text-center">Lojas e Vendedores em destaque</h3>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 justify-center">
          {filteredSellers.filter((s) => s.logo).map((seller, i) => (
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
        </div>
      </section>

      {/* Categories - Carousel */}
      <section className="px-4 md:px-8 lg:px-12 mt-6 relative z-10">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-3 pl-1 pr-8 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible md:pl-0 md:pr-0">
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
                  onClick={() => { setActiveCategory(isActive ? null : cat.slug); setCurrentPage(1); if (!isActive) scrollToItems(); }}
                  className={`w-full group rounded-2xl transition-all ${isActive ? "scale-95 brightness-110" : ""}`}
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

      {/* Featured Products - 7 items, scroll mobile only */}
      <section className="pt-8 pb-2">
        <h3 className="font-display font-semibold text-base text-foreground mb-4 px-4 md:px-8 lg:px-12">Destaques</h3>
        <div className="flex gap-3 overflow-x-auto md:overflow-visible scrollbar-hide pb-2 snap-x snap-mandatory md:snap-none px-4 md:px-8 lg:px-12 md:grid md:grid-cols-7">
          {featuredProducts.map((product, i) => {
            const company = allSellers[product.companyId];
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex-shrink-0 w-[200px] md:w-auto snap-start"
              >
                <Link to={`/veiculos/produto/${product.id}`} className="group block">
                  <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-md">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      {company && (
                        <div className="flex items-center gap-1.5">
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
          <div className="flex-shrink-0 w-4 md:hidden" aria-hidden="true" />
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
              onChange={(e) => { const v = e.target.value; setFilterCity(v); setCurrentPage(1); }}
              className="w-full px-4 py-2.5 rounded-xl bg-secondary text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">Todas as cidades</option>
              {availableCities.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <select
              value={filterBrand}
              onChange={(e) => { setFilterBrand(e.target.value); setCurrentPage(1); }}
              className="w-full px-4 py-2.5 rounded-xl bg-secondary text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">Todas as marcas</option>
              {availableBrands.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
            <input
              type="text"
              value={filterModel}
              onChange={(e) => { setFilterModel(e.target.value); setCurrentPage(1); }}
              placeholder="Buscar modelo..."
              className="w-full px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              onClick={() => { setFilterCity(""); setFilterBrand(""); setFilterModel(""); setActiveCategory(null); setCurrentPage(1); }}
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
          {filteredProducts.slice((currentPage - 1) * 50, currentPage * 50).map((product, i) => {
            const company = allSellers[product.companyId];
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link to={`/veiculos/produto/${product.id}`}>
                  <div className={`group bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                    (product as any).sellerTier === "vip" ? "border-purple-500/50 ring-1 ring-purple-500/20" :
                    (product as any).sellerTier === "premium" ? "border-amber-400/50 ring-1 ring-amber-400/20" : "border-border"
                  }`}>
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
                      {(product as any).sellerTier && (product as any).sellerTier !== "basico" && (
                        <div className="absolute top-3 right-3">
                          <PackageBadge tier={(product as any).sellerTier} />
                        </div>
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

        {/* Pagination */}
        {filteredProducts.length > 50 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => { setCurrentPage((p) => Math.max(1, p - 1)); itemsSectionRef.current?.scrollIntoView({ behavior: "smooth" }); }}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-xl bg-secondary text-foreground text-sm font-medium disabled:opacity-40 hover:bg-secondary/80 transition-colors"
            >
              Anterior
            </button>
            <span className="text-sm text-muted-foreground">
              Página {currentPage} de {Math.ceil(filteredProducts.length / 50)}
            </span>
            <button
              onClick={() => { setCurrentPage((p) => Math.min(Math.ceil(filteredProducts.length / 50), p + 1)); itemsSectionRef.current?.scrollIntoView({ behavior: "smooth" }); }}
              disabled={currentPage >= Math.ceil(filteredProducts.length / 50)}
              className="px-4 py-2 rounded-xl bg-secondary text-foreground text-sm font-medium disabled:opacity-40 hover:bg-secondary/80 transition-colors"
            >
              Próxima
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
