import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Car, Bike, Truck, Cog, MoreHorizontal, Image } from "lucide-react";
import { useCityData } from "@/hooks/useCityData";
import { getTagStyle, getTagLabel } from "@/data/products";
import CitySEO from "@/components/CitySEO";

function capitalize(str: string) {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

const vehicleTypes = [
  { value: "", label: "Todos", icon: Car },
  { value: "carro", label: "Carros", icon: Car },
  { value: "moto", label: "Motos", icon: Bike },
  { value: "caminhao", label: "Caminhões", icon: Truck },
  { value: "utilitario", label: "Utilitários", icon: Cog },
  { value: "outros", label: "Outros", icon: MoreHorizontal },
];

export default function CityVehiclesPage() {
  const { cidade } = useParams();
  const citySlug = cidade || "";
  const cityName = capitalize(citySlug.replace(/-/g, " "));
  const { items, loading } = useCityData(citySlug, "automoveis");
  const [filterType, setFilterType] = useState("");
  const [filterBrand, setFilterBrand] = useState("");

  const brands = useMemo(() => {
    const set = new Set<string>();
    items.forEach((i) => { if (i.brand) set.add(i.brand); });
    return Array.from(set).sort();
  }, [items]);

  const filtered = useMemo(() => {
    let list = [...items];
    if (filterType) list = list.filter((i) => i.category === filterType);
    if (filterBrand) list = list.filter((i) => i.brand === filterBrand);
    return list.sort(() => Math.random() - 0.5);
  }, [items, filterType, filterBrand]);

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
      <CitySEO city={cityName} segment="veiculos" itemCount={items.length} items={items} />

      {/* Hero */}
      <section className="relative h-[40vh] md:h-[55vh] overflow-hidden">
        {heroItem?.image ? (
          <img src={heroItem.image} alt={`Veículos em ${cityName}`} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFD100] via-[#e5bc00] to-[#002F6C]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        <div className="absolute top-4 left-4 z-20">
          <Link to="/veiculos" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white text-sm font-medium hover:bg-white/20 transition-colors">
            <ArrowLeft size={16} /> Todos os veículos
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-10">
          <div className="container max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                <MapPin size={14} /> {cityName}, ES
              </div>
              <h1 className="font-display font-extrabold text-3xl md:text-5xl text-white leading-tight">
                Veículos em {cityName}
              </h1>
              <p className="text-white/70 text-sm md:text-base mt-2 max-w-xl">
                Encontre carros, motos, caminhões e utilitários em {cityName}. {items.length} anúncios disponíveis.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container max-w-6xl mx-auto px-4 py-6">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          {vehicleTypes.map((t) => {
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

        {brands.length > 0 && (
          <div className="mt-3">
            <select
              value={filterBrand}
              onChange={(e) => setFilterBrand(e.target.value)}
              className="px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">Todas as marcas</option>
              {brands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        )}
      </section>

      {/* Items */}
      <section className="container max-w-6xl mx-auto px-4 pb-10">
        <h2 className="font-display font-bold text-lg text-foreground mb-4">
          {filterType
            ? `${vehicleTypes.find((t) => t.value === filterType)?.label} em ${cityName} (${filtered.length})`
            : `Todos os veículos em ${cityName} (${filtered.length})`}
        </h2>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <Link key={item.id} to={`/veiculos/produto/${item.id}`}>
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
            <h3 className="font-display font-bold text-lg text-foreground mb-2">Nenhum veículo encontrado</h3>
            <p className="text-muted-foreground text-sm">Ainda não há veículos cadastrados em {cityName}.</p>
            <Link to="/veiculos" className="text-primary text-sm mt-3 inline-block hover:underline">Ver todos os veículos</Link>
          </div>
        )}
      </section>

      {/* SEO Content */}
      <section className="container max-w-6xl mx-auto px-4 pb-10">
        <div className="bg-card border border-border rounded-2xl p-6">
          <h2 className="font-display font-bold text-lg text-foreground mb-3">Veículos em {cityName}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Encontre os melhores veículos em {cityName}, Espírito Santo. Nossa plataforma reúne carros, motos, caminhões
            e utilitários disponíveis para compra em {cityName}. Compare preços, veja fotos e entre em contato direto com
            os vendedores e lojas de {cityName} pelo WhatsApp. Atualizado diariamente com novas oportunidades.
          </p>
          {brands.length > 0 && (
            <>
              <h3 className="font-display font-semibold text-foreground mt-4 mb-2">Marcas disponíveis em {cityName}</h3>
              <div className="flex flex-wrap gap-2">
                {brands.map((b) => (
                  <button key={b} onClick={() => setFilterBrand(b)} className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium hover:bg-secondary/80 transition-colors">
                    {b}
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
