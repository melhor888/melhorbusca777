import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Home, Landmark, Store, Key, ArrowLeft } from "lucide-react";
import { propertyCompanies, propertyCategories, type Company } from "@/data/companies";
import CompanyCard from "@/components/CompanyCard";

const iconMap: Record<string, React.ElementType> = { Key, Home, Building2, Landmark, Store };

export default function PropertiesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCompanies: Company[] = activeCategory
    ? propertyCompanies.filter((c) => c.category === activeCategory)
    : propertyCompanies;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#22CBFF] to-[#0ea5e9] py-10 md:py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft size={16} /> Voltar
          </Link>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white">
            <Building2 className="inline mr-3 mb-1" size={36} />
            Imóveis
          </h1>
          <p className="text-white/80 mt-2">Encontre as melhores empresas do setor imobiliário</p>
        </div>
      </div>

      {/* Categories - iFood style */}
      <section className="container max-w-6xl mx-auto px-4 -mt-6 relative z-10">
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
              ? `Empresas: ${propertyCategories.find((c) => c.slug === activeCategory)?.name}`
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
