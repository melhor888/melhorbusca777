import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Home, Landmark, Store, Key, ArrowLeft, ArrowRight, Search } from "lucide-react";
import { propertyCompanies, propertyCategories, type Company } from "@/data/companies";
import { allProducts, formatPrice, getTagStyle, type Product } from "@/data/products";

const iconMap: Record<string, React.ElementType> = { Key, Home, Building2, Landmark, Store };

export default function PropertiesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filterCity, setFilterCity] = useState("");
  const [filterType, setFilterType] = useState("");

  const companyById = useMemo(() => {
    const map: Record<string, Company> = {};
    propertyCompanies.forEach((c) => (map[c.id] = c));
    return map;
  }, []);

  const propertyProducts = useMemo(() => {
    return allProducts.filter((p) => p.type === "imovel");
  }, []);

  // Random hero product
  const heroProduct = useMemo(() => {
    const prods = allProducts.filter((p) => p.type === "imovel");
    return prods[Math.floor(Math.random() * prods.length)];
  }, []);

  const heroCompany = heroProduct ? companyById[heroProduct.companyId] : undefined;

  const availableCities = useMemo(() => {
    const cities = new Set<string>();
    propertyCompanies.forEach((c) => {
      const city = c.address.split(" - ").pop()?.trim();
      if (city) cities.add(city);
    });
    return Array.from(cities).sort();
  }, []);

  const propertyTypes = [
    { value: "aluguel", label: "Aluguel" },
    { value: "casas", label: "Casas" },
    { value: "apartamentos", label: "Apartamentos" },
    { value: "terrenos", label: "Terrenos" },
    { value: "comerciais", label: "Comerciais" },
  ];

  const filteredProducts = useMemo(() => {
    const effectiveCategory = filterType || activeCategory;
    let list = !effectiveCategory
      ? [...propertyProducts]
      : propertyProducts.filter((p) => {
          const companyIds = propertyCompanies
            .filter((c) => c.category === effectiveCategory)
            .map((c) => c.id);
          return companyIds.includes(p.companyId);
        });

    if (filterCity) {
      const cityCompanyIds = propertyCompanies
        .filter((c) => c.address.includes(filterCity))
        .map((c) => c.id);
      list = list.filter((p) => cityCompanyIds.includes(p.companyId));
    }

    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }, [activeCategory, propertyProducts, filterCity, filterType]);

  return (
    <div className="min-h-screen bg-background">
      {/* Netflix Hero Banner */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={heroProduct?.images[0] || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&h=500&fit=crop"}
          alt={heroProduct?.title || "Imóveis"}
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
                {heroProduct?.title || "Imóveis"}
              </h1>
              <p className="text-white/75 mt-2 text-sm md:text-base line-clamp-2 max-w-lg">
                {heroProduct?.description || "Encontre os melhores imóveis"}
              </p>
              {heroProduct && (
                <p className="font-display font-bold text-2xl md:text-3xl text-[#FFD100] mt-3 drop-shadow">
                  {formatPrice(heroProduct.price)}
                  {heroProduct.price < 20000 && <span className="text-base text-white/60 font-normal">/mês</span>}
                </p>
              )}
              {heroProduct && (
                <Link
                  to={`/imoveis/produto/${heroProduct.id}`}
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
      <section className="container max-w-6xl mx-auto px-4 mt-6 relative z-10">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 pl-1 pr-8 snap-x snap-mandatory md:grid md:grid-cols-5 md:overflow-visible md:pl-0 md:pr-0">
          {propertyCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Building2;
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
                  onClick={() => setActiveCategory(isActive ? null : cat.slug)}
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
      <section className="container max-w-6xl mx-auto px-4 pt-6 pb-2">
        <h3 className="font-display font-semibold text-base text-foreground mb-4">Destaques</h3>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 pl-1 pr-8 snap-x snap-mandatory md:pr-0">
          {propertyProducts.slice(0, 12).map((product, i) => {
            const company = companyById[product.companyId];
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex-shrink-0 w-[200px] md:w-[240px] snap-start"
              >
                <Link to={`/imoveis/produto/${product.id}`} className="group block">
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
        </div>
      </section>

      {/* Company Logos */}
      <section className="container max-w-6xl mx-auto px-4 pt-6 pb-2">
        <h3 className="font-display font-semibold text-base text-muted-foreground mb-4">Imobiliárias em destaque</h3>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {propertyCompanies.map((company, i) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                to={`/imoveis/empresa/${company.id}`}
                className="flex flex-col items-center gap-2 group flex-shrink-0 w-20"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border group-hover:border-primary group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
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
      <section className="container max-w-6xl mx-auto px-4 pt-6 pb-2">
        <div className="bg-card border border-border rounded-2xl p-4 md:p-6 shadow-sm">
          <h3 className="font-display font-semibold text-sm text-muted-foreground mb-3 flex items-center gap-2">
            <Search size={16} /> Filtrar imóveis
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <select
              value={filterCity}
              onChange={(e) => setFilterCity(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">Todas as cidades</option>
              {availableCities.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <select
              value={filterType}
              onChange={(e) => { setFilterType(e.target.value); setActiveCategory(null); }}
              className="w-full px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">Todos os tipos</option>
              {propertyTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
            <button
              onClick={() => { setFilterCity(""); setFilterType(""); setActiveCategory(null); }}
              className="w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#002F6C] to-[#00AEEF] text-white font-bold text-sm hover:opacity-90 transition-opacity shadow"
            >
              Limpar Filtros
            </button>
          </div>
        </div>
      </section>

      {/* Products listing */}
      <section className="container max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-bold text-xl md:text-2xl text-foreground">
            {activeCategory
              ? propertyCategories.find((c) => c.slug === activeCategory)?.name
              : filterType
              ? propertyTypes.find((t) => t.value === filterType)?.label
              : "Todos os Imóveis"}
          </h2>
          <span className="text-sm text-muted-foreground">
            {filteredProducts.length} imóvel(is)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product, i) => {
            const company = companyById[product.companyId];
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link to={`/imoveis/produto/${product.id}`}>
                  <div className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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

                    <div className="p-4">
                      <h3 className="font-display font-bold text-base md:text-lg text-foreground line-clamp-1">
                        {product.title}
                      </h3>
                      <p className="text-xl font-bold text-primary mt-1">
                        {formatPrice(product.price)}
                      </p>

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
            Nenhum imóvel encontrado nesta categoria
          </p>
        )}
      </section>
    </div>
  );
}
