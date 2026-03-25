import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Car, Bike, Truck, Cog, ArrowLeft } from "lucide-react";
import { vehicleCompanies, vehicleCategories, type Company } from "@/data/companies";
import { allProducts, formatPrice, type Product } from "@/data/products";

const iconMap: Record<string, React.ElementType> = { Car, Bike, Truck, Cog };

export default function VehiclesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Map company category to its products
  const companyById = useMemo(() => {
    const map: Record<string, Company> = {};
    vehicleCompanies.forEach((c) => (map[c.id] = c));
    return map;
  }, []);

  const vehicleProducts = useMemo(() => {
    return allProducts.filter((p) => p.type === "veiculo");
  }, []);

  const filteredProducts = useMemo(() => {
    if (!activeCategory) return vehicleProducts;
    // Get company IDs that belong to the active category
    const companyIds = vehicleCompanies
      .filter((c) => c.category === activeCategory)
      .map((c) => c.id);
    return vehicleProducts.filter((p) => companyIds.includes(p.companyId));
  }, [activeCategory, vehicleProducts]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="relative h-[340px] md:h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&h=500&fit=crop"
          alt="Veículos"
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
            <Car className="inline mr-3 mb-1" size={40} />
            Veículos
          </h1>
          <p className="text-white/80 mt-2 text-lg">
            Encontre carros, motos, caminhões e utilitários das melhores lojas
          </p>
        </div>
      </div>

      {/* Categories */}
      <section className="container max-w-6xl mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {vehicleCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Car;
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

      {/* Products listing */}
      <section className="container max-w-6xl mx-auto px-4 py-10">
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
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-[#FFDE00] to-[#f59e0b] text-xs font-bold text-foreground shadow">
                          {product.tag}
                        </span>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <h3 className="font-display font-bold text-base md:text-lg text-foreground line-clamp-1">
                        {product.title}
                      </h3>
                      <p className="text-xl font-bold text-[#22CBFF] mt-1">
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
