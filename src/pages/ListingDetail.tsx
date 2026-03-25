import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Fuel, BedDouble, Bath, Maximize, MessageCircle, Share2 } from "lucide-react";
import { allListings, formatPrice, formatMileage, type CarListing, type PropertyListing } from "@/data/listings";

export default function ListingDetail() {
  const { id } = useParams();
  const listing = allListings.find((l) => l.id === id);

  if (!listing) {
    return (
      <div className="container max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="font-display font-bold text-2xl text-foreground">Anúncio não encontrado</h1>
        <Link to="/" className="text-primary text-sm mt-4 inline-block hover:underline">Voltar ao início</Link>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/${listing.whatsapp}?text=${encodeURIComponent(`Olá! Tenho interesse: ${listing.title}`)}`;

  return (
    <div className="container max-w-5xl mx-auto px-4 py-8">
      <Link to={listing.type === "car" ? "/carros" : "/imoveis"} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
        <ArrowLeft size={16} />
        Voltar
      </Link>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 rounded-2xl overflow-hidden">
        {listing.images.map((img, i) => (
          <div key={i} className={`${i === 0 ? "md:row-span-2" : ""} aspect-[16/10] overflow-hidden`}>
            <img src={img} alt={`${listing.title} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              {listing.type === "car" ? "Carro" : "Imóvel"}
            </span>
            <h1 className="font-display font-bold text-2xl md:text-3xl text-foreground mt-1">{listing.title}</h1>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm mt-2">
              <MapPin size={14} />
              <span>{listing.location}</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <h2 className="font-display font-semibold text-foreground mb-3">Detalhes</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {listing.type === "car" && (
                <>
                  <Detail icon={<Calendar size={16} />} label="Ano" value={`${(listing as CarListing).year}`} />
                  <Detail icon={<Fuel size={16} />} label="Combustível" value={(listing as CarListing).fuel} />
                  <Detail label="Câmbio" value={(listing as CarListing).transmission} />
                  <Detail label="Km" value={formatMileage((listing as CarListing).mileage)} />
                  <Detail label="Marca" value={(listing as CarListing).brand} />
                </>
              )}
              {listing.type === "property" && (
                <>
                  {(listing as PropertyListing).bedrooms > 0 && (
                    <Detail icon={<BedDouble size={16} />} label="Quartos" value={`${(listing as PropertyListing).bedrooms}`} />
                  )}
                  {(listing as PropertyListing).bathrooms > 0 && (
                    <Detail icon={<Bath size={16} />} label="Banheiros" value={`${(listing as PropertyListing).bathrooms}`} />
                  )}
                  <Detail icon={<Maximize size={16} />} label="Área" value={`${(listing as PropertyListing).area}m²`} />
                  <Detail label="Bairro" value={(listing as PropertyListing).neighborhood} />
                </>
              )}
            </div>
          </div>

          <div>
            <h2 className="font-display font-semibold text-foreground mb-2">Descrição</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{listing.description}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
            <p className="font-display font-bold text-3xl text-primary">{formatPrice(listing.price)}</p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} />
              Chamar no WhatsApp
            </a>

            <button
              onClick={() => navigator.share?.({ title: listing.title, url: window.location.href })}
              className="mt-3 w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium text-sm hover:bg-secondary/80 transition-colors"
            >
              <Share2 size={16} />
              Compartilhar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Detail({ icon, label, value }: { icon?: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2">
      {icon && <span className="text-primary mt-0.5">{icon}</span>}
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
}
