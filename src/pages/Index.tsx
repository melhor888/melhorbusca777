import { Link } from "react-router-dom";
import { Building2, Car, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15),transparent_60%)]" />

        <div className="relative container max-w-6xl mx-auto px-4 py-16 md:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium text-white mb-6">
              <Sparkles size={16} />
              Marketplace #1 do Brasil
            </div>

            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight drop-shadow-lg">
              Encontre o que<br />
              <span className="text-yellow-200">você precisa</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/85 max-w-lg mx-auto">
              Imóveis e veículos com os melhores preços. Contato direto via WhatsApp.
            </p>
          </motion.div>

          {/* Category Cards - horizontal on mobile, vertical stacking on desktop within grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-1 md:max-w-md md:mx-auto gap-4 md:gap-6"
          >
            {/* Imóveis Card */}
            <Link to="/imoveis" className="group">
              <div className="card-epic relative bg-white/95 backdrop-blur-xl p-6 md:p-10 card-glow-blue">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#22CBFF]/20 to-transparent rounded-bl-full" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#22CBFF] to-[#0ea5e9] flex items-center justify-center mb-4 group-hover:animate-float shadow-lg">
                    <Building2 size={32} className="text-white md:w-10 md:h-10" />
                  </div>
                  <h2 className="font-display font-bold text-xl md:text-3xl text-foreground">
                    Imóveis
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base mt-1">
                    Casas, apartamentos e mais
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#22CBFF] font-semibold text-sm group-hover:gap-3 transition-all">
                    Explorar <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>

            {/* Veículos Card */}
            <Link to="/veiculos" className="group">
              <div className="card-epic relative bg-white/95 backdrop-blur-xl p-6 md:p-10 card-glow-yellow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FFDE00]/20 to-transparent rounded-bl-full" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#FFDE00] to-[#f59e0b] flex items-center justify-center mb-4 group-hover:animate-float shadow-lg">
                    <Car size={32} className="text-white md:w-10 md:h-10" />
                  </div>
                  <h2 className="font-display font-bold text-xl md:text-3xl text-foreground">
                    Veículos
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base mt-1">
                    Carros, motos e utilitários
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#f59e0b] font-semibold text-sm group-hover:gap-3 transition-all">
                    Explorar <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container max-w-6xl mx-auto px-4 -mt-6 relative z-10">
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {[
            { value: "500+", label: "Anúncios" },
            { value: "2.5K", label: "Usuários" },
            { value: "98%", label: "Satisfação" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-4 text-center shadow-sm"
            >
              <p className="font-display font-bold text-2xl md:text-3xl text-foreground">{stat.value}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="container max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground text-center mb-3">
          Categorias Populares
        </h2>
        <p className="text-center text-muted-foreground mb-10">Navegue pelas categorias mais procuradas</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {[
            { name: "Aluguel", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=300&fit=crop", link: "/imoveis", color: "from-[#22CBFF]/80 to-[#0ea5e9]" },
            { name: "Casas", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=300&fit=crop", link: "/imoveis", color: "from-[#22CBFF]/80 to-[#0ea5e9]" },
            { name: "Carros", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=300&h=300&fit=crop", link: "/veiculos", color: "from-[#FFDE00]/80 to-[#f59e0b]" },
            { name: "Motos", img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=300&h=300&fit=crop", link: "/veiculos", color: "from-[#FFDE00]/80 to-[#f59e0b]" },
            { name: "Terrenos", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300&h=300&fit=crop", link: "/imoveis", color: "from-[#22CBFF]/80 to-[#0ea5e9]" },
          ].map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.08 }}
            >
              <Link to={cat.link} className="group block">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-60 group-hover:opacity-75 transition-opacity`} />
                  <div className="absolute inset-0 flex items-end p-3">
                    <span className="font-display font-bold text-white text-sm md:text-base drop-shadow-lg">{cat.name}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container max-w-6xl mx-auto px-4 pb-16">
        <div className="gradient-hero rounded-3xl p-8 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="relative z-10">
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white">
              Quer anunciar?
            </h2>
            <p className="text-white/80 mt-2 max-w-md mx-auto text-sm md:text-base">
              Publique seu imóvel ou veículo gratuitamente e receba contatos via WhatsApp.
            </p>
            <Link
              to="/anunciar"
              className="inline-flex items-center gap-2 mt-6 px-8 py-3.5 rounded-xl bg-white text-foreground font-bold text-sm hover:scale-105 transition-transform shadow-lg"
            >
              Anunciar Grátis
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
