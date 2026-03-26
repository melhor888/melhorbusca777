import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Search, MapPin, Home, Building2, Landmark, Store, Key, Warehouse, Image } from "lucide-react";
import { useCityData } from "@/hooks/useCityData";
import { getTagStyle, getTagLabel } from "@/data/products";
import CitySEO from "@/components/CitySEO";

function capitalize(str: string) {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

const propertyTypes = [
  { value: "", label: "Todos", icon: Store },
  { value: "aluguel", label: "Aluguéis", icon: Key },
  { value: "casa", label: "Casas", icon: Home },
  { value: "apartamento", label: "Apartamentos", icon: Building2 },
  { value: "terreno", label: "Terrenos", icon: Landmark },
  { value: "comercial", label: "Comerciais", icon: Store },
  { value: "flat", label: "Flats", icon: Building2 },
  { value: "galpao", label: "Galpões", icon: Warehouse },
];

export default function CityPropertiesPage() {
  const { cidade } = useParams();
  const citySlug = cidade || "";
  const cityName = capitalize(citySlug.replace(/-/g, " "));
  const { items, loading } = useCityData(citySlug, "imoveis");
  const [filterType, setFilterType] = useState("");
  const [filterNeighborhood, setFilterNeighborhood] = useState("");

  const neighborhoods = useMemo(() => {
    const set = new Set<string>();
    items.forEach((i) => { if (i.neighborhood) set.add(i.neighborhood); });
    return Array.from(set).sort();
  }, [items]);

  const filtered = useMemo(() => {
    let list = [...items];
    if (filterType) list = list.filter((i) => i.category === filterType);
    if (filterNeighborhood) list = list.filter((i) => i.neighborhood === filterNeighborhood);
    return list.sort(() => Math.random() - 0.5);
  }, [items, filterType, filterNeighborhood]);

  const heroItem = items[0];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <CitySEO city={cityName} segment="imoveis" itemCount={items.length} items={items} />

      {/* Hero */}
      <section className="relative h-[40vh] md:h-[55vh] overflow-hidden">
        {heroItem?.image ? (
          <img src={heroItem.image} alt={`Imóveis em ${cityName}`} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF] via-[#002F6C] to-[#001a3d]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        <div className="absolute top-4 left-4 z-20">
          <Link to="/imoveis" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white text-sm font-medium hover:bg-white/20 transition-colors">
            <ArrowLeft size={16} /> Todos os imóveis
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-10">
          <div className="container max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                <MapPin size={14} /> {cityName}, ES
              </div>
              <h1 className="font-display font-extrabold text-3xl md:text-5xl text-white leading-tight">
                Imóveis em {cityName}
              </h1>
              <p className="text-white/70 text-sm md:text-base mt-2 max-w-xl">
                Encontre casas, apartamentos, terrenos e imóveis comerciais em {cityName}. {items.length} anúncios disponíveis.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container max-w-6xl mx-auto px-4 py-6">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          {propertyTypes.map((t) => {
            const Icon = t.icon;
            const isActive = filterType === t.value;
            return (
              <button
                key={t.value}
                onClick={() => setFilterType(t.value)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <Icon size={14} /> {t.label}
              </button>
            );
          })}
        </div>

        {neighborhoods.length > 0 && (
          <div className="mt-3">
            <select
              value={filterNeighborhood}
              onChange={(e) => setFilterNeighborhood(e.target.value)}
              className="px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">Todos os bairros</option>
              {neighborhoods.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
        )}
      </section>

      {/* Items */}
      <section className="container max-w-6xl mx-auto px-4 pb-10">
        <h2 className="font-display font-bold text-lg text-foreground mb-4">
          {filterType
            ? `${propertyTypes.find((t) => t.value === filterType)?.label} em ${cityName} (${filtered.length})`
            : `Todos os imóveis em ${cityName} (${filtered.length})`}
        </h2>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <Link key={item.id} to={`/imoveis/produto/${item.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.03 + i * 0.03 }}
                  className="bg-card border border-border group rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Image size={32} className="text-muted-foreground" />
                      </div>
                    )}
                    {item.tags?.[0] && (
                      <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-bold shadow ${getTagStyle(item.tags[0])}`}>
                        {getTagLabel(item.tags[0])}
                      </span>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="font-display font-semibold text-foreground text-sm leading-tight line-clamp-2">{item.title}</h3>
                    {item.price > 0 && (
                      <p className="font-display font-bold text-emerald-500 text-base mt-1.5">
                        R$ {item.price.toLocaleString("pt-BR")}
                      </p>
                    )}
                    {item.neighborhood && (
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <MapPin size={10} /> {item.neighborhood}
                      </p>
                    )}
                    {item.sellerName && (
                      <div className="flex items-center gap-1.5 mt-1.5">
                        {item.sellerLogo && (
                          <img src={item.sellerLogo} alt="" className="w-4 h-4 rounded-full object-cover" />
                        )}
                        <span className="text-[10px] text-muted-foreground truncate">{item.sellerName}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="font-display font-bold text-lg text-foreground mb-2">Nenhum imóvel encontrado</h3>
            <p className="text-muted-foreground text-sm">Ainda não há imóveis cadastrados em {cityName}.</p>
            <Link to="/imoveis" className="text-primary text-sm mt-3 inline-block hover:underline">Ver todos os imóveis</Link>
          </div>
        )}
      </section>

      {/* SEO Content */}
      <section className="container max-w-6xl mx-auto px-4 pb-10">
        <div className="bg-card border border-border rounded-2xl p-6">
          <h2 className="font-display font-bold text-lg text-foreground mb-3">Imóveis em {cityName}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Encontre os melhores imóveis em {cityName}, Espírito Santo. Nossa plataforma reúne casas, apartamentos, terrenos,
            imóveis comerciais e galpões disponíveis para compra e aluguel em {cityName}. Compare preços, veja fotos e entre em
            contato direto com os corretores e imobiliárias de {cityName} pelo WhatsApp. Atualizado diariamente com novas oportunidades.
          </p>
          {neighborhoods.length > 0 && (
            <>
              <h3 className="font-display font-semibold text-foreground mt-4 mb-2">Bairros de {cityName}</h3>
              <div className="flex flex-wrap gap-2">
                {neighborhoods.map((n) => (
                  <button key={n} onClick={() => setFilterNeighborhood(n)} className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium hover:bg-secondary/80 transition-colors">
                    {n}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
