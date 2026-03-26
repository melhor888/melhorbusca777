import { Link, useNavigate } from "react-router-dom";
import { Building2, Car, ArrowRight, Search, Home, Key, Bike, Truck, MapPin, Shield, Zap, Star, ChevronRight, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import heroImoveis from "@/assets/hero-imoveis.jpg";
import heroVeiculos from "@/assets/hero-veiculos.jpg";

const heroBanners = [
  {
    image: heroImoveis,
    title: "Imóveis em Colatina",
    subtitle: "Encontre casas, apartamentos e terrenos com os melhores preços",
    link: "/imoveis",
    accent: "from-primary to-[hsl(212,100%,21%)]",
  },
  {
    image: heroVeiculos,
    title: "Veículos em Colatina",
    subtitle: "Carros, motos e utilitários com contato direto via WhatsApp",
    link: "/veiculos",
    accent: "from-accent to-[hsl(49,100%,42%)]",
  },
];

const quickActions = [
  { icon: Home, label: "Casas", desc: "Encontre a casa ideal", link: "/imoveis", color: "text-primary" },
  { icon: Building2, label: "Apartamentos", desc: "Aptos disponíveis", link: "/imoveis", color: "text-primary" },
  { icon: Car, label: "Carros", desc: "Seminovos e novos", link: "/veiculos", color: "text-accent-foreground" },
  { icon: Bike, label: "Motos", desc: "Diversas marcas", link: "/veiculos", color: "text-accent-foreground" },
  { icon: Key, label: "Aluguel", desc: "Imóveis para alugar", link: "/imoveis", color: "text-primary" },
  { icon: Truck, label: "Caminhões", desc: "Leves e pesados", link: "/veiculos", color: "text-accent-foreground" },
];

const categories = [
  { name: "Casas", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop", link: "/imoveis" },
  { name: "Apartamentos", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop", link: "/imoveis" },
  { name: "Terrenos", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop", link: "/imoveis" },
  { name: "Carros", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=400&fit=crop", link: "/veiculos" },
  { name: "Motos", img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&h=400&fit=crop", link: "/veiculos" },
  { name: "Aluguel", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=400&fit=crop", link: "/imoveis" },
  { name: "Comercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop", link: "/imoveis" },
  { name: "Utilitários", img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&h=400&fit=crop", link: "/veiculos" },
];

export default function Index() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
    }, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) navigate(`/buscar?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <div className="min-h-screen bg-secondary/50">
      {/* Hero Banner Carousel — full width like ML */}
      <section className="relative w-full h-[280px] md:h-[400px] overflow-hidden">
        {heroBanners.map((banner, i) => (
          <Link
            key={i}
            to={banner.link}
            className={`absolute inset-0 transition-opacity duration-700 ${i === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" width={1400} height={512} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-2xl">
              <h2 className="font-display font-bold text-2xl md:text-5xl text-white drop-shadow-lg leading-tight">
                {banner.title}
              </h2>
              <p className="text-white/80 text-sm md:text-lg mt-2 md:mt-3 drop-shadow">{banner.subtitle}</p>
              <div className="mt-4 md:mt-6">
                <span className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${banner.accent} text-white font-bold text-sm shadow-lg`}>
                  Ver ofertas <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </Link>
        ))}
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroBanners.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentSlide ? "bg-white w-6" : "bg-white/50"}`} />
          ))}
        </div>
      </section>

      {/* Search Bar — prominent like ML */}
      <section className="relative z-20 -mt-7 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSearch} className="flex bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
            <div className="flex-1 flex items-center px-4 gap-3">
              <Search size={20} className="text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar imóveis, veículos e muito mais..."
                className="w-full py-4 text-sm md:text-base bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <button type="submit" className="px-6 md:px-8 bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity">
              Buscar
            </button>
          </form>
        </div>
      </section>

      {/* Quick Actions Row — like ML benefits cards */}
      <section className="px-4 md:px-8 mt-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1 snap-x snap-mandatory md:grid md:grid-cols-6">
            {quickActions.map((action, i) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="snap-start flex-shrink-0 w-[130px] md:w-auto"
              >
                <Link to={action.link} className="group flex flex-col items-center text-center bg-card border border-border rounded-2xl p-4 hover:shadow-md hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-2 group-hover:bg-primary/10 transition-colors">
                    <action.icon size={22} className={`${action.color} transition-colors`} />
                  </div>
                  <span className="font-display font-semibold text-sm text-foreground">{action.label}</span>
                  <span className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">{action.desc}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Promo Banners Side by Side — like ML */}
      <section className="px-4 md:px-8 mt-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Imóveis Banner */}
          <Link to="/imoveis" className="group relative overflow-hidden rounded-2xl h-[180px] md:h-[200px]">
            <img src={heroImoveis} alt="Imóveis" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={700} height={200} />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary)/0.9)] to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-8">
              <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">Marketplace</span>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mt-1">Imóveis</h3>
              <p className="text-white/80 text-sm mt-1">Casas, aptos e terrenos</p>
              <span className="mt-3 inline-flex items-center gap-1 text-white text-sm font-semibold group-hover:gap-2 transition-all">
                Explorar <ChevronRight size={16} />
              </span>
            </div>
          </Link>

          {/* Veículos Banner */}
          <Link to="/veiculos" className="group relative overflow-hidden rounded-2xl h-[180px] md:h-[200px]">
            <img src={heroVeiculos} alt="Veículos" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={700} height={200} />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--foreground)/0.85)] to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-8">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Marketplace</span>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mt-1">Veículos</h3>
              <p className="text-white/80 text-sm mt-1">Carros, motos e mais</p>
              <span className="mt-3 inline-flex items-center gap-1 text-accent text-sm font-semibold group-hover:gap-2 transition-all">
                Explorar <ChevronRight size={16} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Categories Grid — like ML */}
      <section className="px-4 md:px-8 mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-foreground">Categorias</h2>
          </div>
          <div className="bg-card border border-border rounded-2xl p-4 md:p-6">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + i * 0.04 }}
                >
                  <Link to={cat.link} className="group flex flex-col items-center text-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-border group-hover:border-primary group-hover:shadow-lg transition-all">
                      <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-foreground mt-2 group-hover:text-primary transition-colors">{cat.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="px-4 md:px-8 mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: Shield, title: "Contato Direto", desc: "Fale via WhatsApp" },
            { icon: MapPin, title: "Colatina e Região", desc: "Foco na sua cidade" },
            { icon: Star, title: "Vendedores Verificados", desc: "Lojas confiáveis" },
            { icon: Zap, title: "Anuncie Grátis", desc: "Cadastre seus itens" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-4 flex items-start gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-display font-semibold text-sm text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA — Anunciar */}
      <section className="px-4 md:px-8 mt-8 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="gradient-hero rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12),transparent_50%)]" />
            <div className="relative z-10 text-center md:text-left">
              <h2 className="font-display font-bold text-xl md:text-3xl text-white">Quer anunciar?</h2>
              <p className="text-white/80 text-sm md:text-base mt-1">Publique seu imóvel ou veículo e receba contatos via WhatsApp</p>
            </div>
            <Link
              to="/anunciar"
              className="relative z-10 inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-foreground font-bold text-sm hover:scale-105 transition-transform shadow-lg"
            >
              <Plus size={18} />
              Anunciar Grátis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
