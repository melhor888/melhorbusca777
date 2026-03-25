import { Link } from "react-router-dom";
import { MapPin, Calendar, Fuel, BedDouble, Bath, Maximize, MessageCircle } from "lucide-react";
import { type Listing, type CarListing, type PropertyListing, formatPrice, formatMileage } from "@/data/listings";

function openWhatsApp(whatsapp: string, title: string) {
  const message = encodeURIComponent(`Olá! Tenho interesse no anúncio: ${title}`);
  window.open(`https://wa.me/${whatsapp}?text=${message}`, "_blank");
}

export default function ListingCard({ listing }: { listing: Listing }) {
  const detailUrl = listing.type === "car" ? `/carros/${listing.id}` : `/imoveis/${listing.id}`;

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden group hover:shadow-lg transition-all duration-300">
      <Link to={detailUrl} className="block relative aspect-[16/10] overflow-hidden">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {listing.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-highlight text-xs font-semibold text-foreground">
            Destaque
          </span>
        )}
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-card/90 backdrop-blur text-xs font-medium text-foreground">
          {listing.type === "car" ? "Carro" : "Imóvel"}
        </span>
      </Link>

      <div className="p-4">
        <Link to={detailUrl}>
          <h3 className="font-display font-semibold text-foreground text-base leading-tight line-clamp-2 hover:text-primary transition-colors">
            {listing.title}
          </h3>
        </Link>

        <p className="text-primary font-display font-bold text-xl mt-2">
          {formatPrice(listing.price)}
        </p>

        <div className="flex items-center gap-1.5 text-muted-foreground text-xs mt-2">
          <MapPin size={13} />
          <span>{listing.location}</span>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {listing.type === "car" && (
            <>
              <Tag icon={<Calendar size={12} />} label={`${(listing as CarListing).year}`} />
              <Tag icon={<Fuel size={12} />} label={(listing as CarListing).fuel} />
              <Tag label={formatMileage((listing as CarListing).mileage)} />
              <Tag label={(listing as CarListing).transmission} />
            </>
          )}
          {listing.type === "property" && (
            <>
              {(listing as PropertyListing).bedrooms > 0 && (
                <Tag icon={<BedDouble size={12} />} label={`${(listing as PropertyListing).bedrooms} quartos`} />
              )}
              {(listing as PropertyListing).bathrooms > 0 && (
                <Tag icon={<Bath size={12} />} label={`${(listing as PropertyListing).bathrooms} ban.`} />
              )}
              <Tag icon={<Maximize size={12} />} label={`${(listing as PropertyListing).area}m²`} />
            </>
          )}
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            openWhatsApp(listing.whatsapp, listing.title);
          }}
          className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <MessageCircle size={16} />
          Chamar no WhatsApp
        </button>
      </div>
    </div>
  );
}

function Tag({ icon, label }: { icon?: React.ReactNode; label: string }) {
  return (
    <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs">
      {icon}
      {label}
    </span>
  );
}
