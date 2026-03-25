import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Home, Landmark, Store, Key, ArrowLeft } from "lucide-react";
import { propertyCompanies, propertyCategories, type Company } from "@/data/companies";
import { allProducts, formatPrice, type Product } from "@/data/products";

const iconMap: Record<string, React.ElementType> = { Key, Home, Building2, Landmark, Store };

export default function PropertiesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const companyById = useMemo(() => {
    const map: Record<string, Company> = {};
    propertyCompanies.forEach((c) => (map[c.id] = c));
    return map;
  }, []);

  const propertyProducts = useMemo(() => {
    return allProducts.filter((p) => p.type === "imovel");
  }, []);

  const filteredProducts = useMemo(() => {
    const list = !activeCategory
      ? [...propertyProducts]
      : propertyProducts.filter((p) => {
          const companyIds = propertyCompanies
            .filter((c) => c.category === activeCategory)
            .map((c) => c.id);
          return companyIds.includes(p.companyId);
        });
    // Shuffle
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }, [activeCategory, propertyProducts]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="relative h-[340px] md:h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&h=500&fit=crop"
          alt="Imóveis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end container max-w-6xl mx-auto px-4 pb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors w-fit"
          >
            <ArrowLeft size={16} /> Voltar
          </Link>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white drop-shadow-lg">
            <Building2 className="inline mr-3 mb-1" size={40} />
            Imóveis
          </h1>
          <p className="text-white/80 mt-2 text-lg">
            Casas, apartamentos, terrenos e comerciais das melhores imobiliárias
          </p>
        </div>
      </div>

      {/* Categories */}
      <section className="container max-w-6xl mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {propertyCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Building2;
            const isActive = activeCategory === cat.slug;
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
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

      {/* Company Logos */}
      <section className="container max-w-6xl mx-auto px-4 pt-8 pb-2">
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
        </div>
      </section>

      {/* Products listing */}
      <section className="container max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-bold text-xl md:text-2xl text-foreground">
            {activeCategory
              ? propertyCategories.find((c) => c.slug === activeCategory)?.name
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
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-[#00AEEF] to-[#002F6C] text-xs font-bold text-white shadow">
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
