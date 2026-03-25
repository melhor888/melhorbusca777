import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Car, Bike, Truck, Cog, ArrowLeft } from "lucide-react";
import { vehicleCompanies, vehicleCategories, type Company } from "@/data/companies";
import CompanyCard from "@/components/CompanyCard";

const iconMap: Record<string, React.ElementType> = { Car, Bike, Truck, Cog };

export default function VehiclesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCompanies: Company[] = activeCategory
    ? vehicleCompanies.filter((c) => c.category === activeCategory)
    : vehicleCompanies;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FFDE00] to-[#f59e0b] py-10 md:py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground text-sm mb-4 transition-colors">
            <ArrowLeft size={16} /> Voltar
          </Link>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground">
            <Car className="inline mr-3 mb-1" size={36} />
            Veículos
          </h1>
          <p className="text-foreground/70 mt-2">As melhores lojas e concessionárias</p>
        </div>
      </div>

      {/* Categories - iFood style */}
      <section className="container max-w-6xl mx-auto px-4 -mt-6 relative z-10">
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
                    <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} ${isActive ? "opacity-90" : "opacity-65 group-hover:opacity-80"} transition-opacity`} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                      <Icon size={26} className="text-white drop-shadow-md" />
                      <span className="font-display font-bold text-white text-sm md:text-base drop-shadow-lg">{cat.name}</span>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Companies listing */}
      <section className="container max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-bold text-xl md:text-2xl text-foreground">
            {activeCategory
              ? `Empresas: ${vehicleCategories.find((c) => c.slug === activeCategory)?.name}`
              : "Todas as Empresas"}
          </h2>
          <span className="text-sm text-muted-foreground">{filteredCompanies.length} encontrada(s)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCompanies.map((company, i) => (
            <CompanyCard key={company.id} company={company} index={i} />
          ))}
        </div>
        {filteredCompanies.length === 0 && (
          <p className="text-center text-muted-foreground py-16">Nenhuma empresa encontrada nesta categoria</p>
        )}
      </section>
    </div>
  );
}
