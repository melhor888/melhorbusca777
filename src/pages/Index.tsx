import { Link } from "react-router-dom";
import { ArrowRight, Car, Home, TrendingUp, Shield } from "lucide-react";
import ListingCard from "@/components/ListingCard";
import { sampleCars, sampleProperties, type Listing } from "@/data/listings";

export default function Index() {
  const featuredListings: Listing[] = [...sampleCars, ...sampleProperties]
    .filter((l) => l.featured)
    .slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="container max-w-7xl mx-auto px-4 relative">
          <div className="max-w-2xl">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground leading-tight">
              Encontre seu próximo{" "}
              <span className="text-primary">carro</span> ou{" "}
              <span className="text-primary">imóvel</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg">
              Marketplace moderno com os melhores anúncios de carros e imóveis. Contato direto via WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                to="/carros"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <Car size={18} />
                Ver Carros
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/imoveis"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm hover:bg-secondary/80 transition-colors"
              >
                <Home size={18} />
                Ver Imóveis
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container max-w-7xl mx-auto px-4 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Car, label: "Carros disponíveis", value: "150+" },
            { icon: Home, label: "Imóveis à venda", value: "200+" },
            { icon: TrendingUp, label: "Negócios fechados", value: "500+" },
            { icon: Shield, label: "Anúncios verificados", value: "100%" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-4 text-center">
              <stat.icon size={24} className="mx-auto text-primary mb-2" />
              <p className="font-display font-bold text-2xl text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display font-bold text-2xl text-foreground">Destaques</h2>
            <p className="text-sm text-muted-foreground mt-1">Os melhores anúncios selecionados</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground">
            Quer vender seu carro ou imóvel?
          </h2>
          <p className="text-primary-foreground/80 mt-2 max-w-md mx-auto">
            Cadastre seu anúncio gratuitamente e alcance milhares de compradores.
          </p>
          <Link
            to="/anunciar"
            className="inline-flex items-center gap-2 mt-6 px-8 py-3 rounded-lg bg-card text-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Anunciar Agora
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
