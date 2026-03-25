import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Car, Bike, Truck, Cog, ArrowLeft, MessageCircle, MapPin, Calendar, Fuel } from "lucide-react";
import { sampleCars, formatPrice, formatMileage, type CarListing } from "@/data/listings";

const categories = [
  { slug: "carros", name: "Carros", icon: Car, color: "from-[#FFDE00] to-[#f59e0b]", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=250&fit=crop" },
  { slug: "motos", name: "Motos", icon: Bike, color: "from-[#f97316] to-[#ea580c]", img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&h=250&fit=crop" },
  { slug: "caminhoes", name: "Caminhões", icon: Truck, color: "from-[#ef4444] to-[#dc2626]", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=250&fit=crop" },
  { slug: "utilitarios", name: "Utilitários", icon: Cog, color: "from-[#a855f7] to-[#9333ea]", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=250&fit=crop" },
];

function openWhatsApp(whatsapp: string, title: string) {
  window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(`Olá! Tenho interesse: ${title}`)}`, "_blank");
}

export default function VehiclesPage() {
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
          <p className="text-foreground/70 mt-2">Os melhores veículos com os melhores preços</p>
        </div>
      </div>

      {/* Categories Grid - iFood style */}
      <section className="container max-w-6xl mx-auto px-4 -mt-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <button className="w-full group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-70 group-hover:opacity-85 transition-opacity`} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <cat.icon size={28} className="text-white drop-shadow-md" />
                    <span className="font-display font-bold text-white text-sm md:text-base drop-shadow-lg">{cat.name}</span>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Listings */}
      <section className="container max-w-6xl mx-auto px-4 py-10">
        <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-6">Anúncios Recentes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sampleCars.map((car, i) => (
            <VehicleCard key={car.id} car={car} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}

function VehicleCard({ car, index }: { car: CarListing; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.06 }}
      className="card-epic bg-card border border-border"
    >
      <Link to={`/veiculos/${car.id}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img src={car.image} alt={car.title} className="w-full h-full object-cover" loading="lazy" />
          {car.featured && (
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-accent text-accent-foreground text-xs font-bold shadow">
              ⭐ Destaque
            </span>
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/veiculos/${car.id}`}>
          <h3 className="font-display font-semibold text-foreground text-base leading-tight line-clamp-2 hover:text-primary transition-colors">{car.title}</h3>
        </Link>
        <p className="font-display font-bold text-xl text-primary mt-2">{formatPrice(car.price)}</p>
        <div className="flex items-center gap-1.5 text-muted-foreground text-xs mt-1.5">
          <MapPin size={12} /> {car.location}
        </div>
        <div className="flex gap-2 mt-3 text-xs text-secondary-foreground flex-wrap">
          <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-secondary"><Calendar size={11} /> {car.year}</span>
          <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-secondary"><Fuel size={11} /> {car.fuel}</span>
          <span className="px-2 py-1 rounded-md bg-secondary">{formatMileage(car.mileage)}</span>
        </div>
        <button
          onClick={() => openWhatsApp(car.whatsapp, car.title)}
          className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white text-sm font-bold hover:opacity-90 transition-opacity"
        >
          <MessageCircle size={16} /> WhatsApp
        </button>
      </div>
    </motion.div>
  );
}
