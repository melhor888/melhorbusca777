import { MapPin } from "lucide-react";

interface MapEmbedProps {
  address: string;
  className?: string;
}

export default function MapEmbed({ address, className = "" }: MapEmbedProps) {
  const encodedAddress = encodeURIComponent(address);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <div className={`rounded-2xl overflow-hidden border border-border ${className}`}>
      <div className="relative aspect-[16/9] bg-muted">
        <iframe
          src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa - ${address}`}
        />
      </div>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 bg-card text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <MapPin size={14} className="text-primary flex-shrink-0" />
        <span className="line-clamp-1">{address}</span>
      </a>
    </div>
  );
}
