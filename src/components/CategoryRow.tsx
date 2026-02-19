import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Drink } from "@/data/drinks";
import DrinkCard from "./DrinkCard";

interface CategoryRowProps {
  title: string;
  drinks: Drink[];
  categorySlug?: string;
}

export default function CategoryRow({ title, drinks, categorySlug }: CategoryRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  if (drinks.length === 0) return null;

  return (
    <section className="mb-8 relative group">
      <div className="flex items-center justify-between px-4 mb-3">
        <h2 className="text-lg font-display font-bold text-foreground">
          {title}
        </h2>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">{drinks.length} drinks</span>
          {categorySlug && (
            <Link
              to={`/categoria/${categorySlug}`}
              className="text-xs text-primary font-semibold hover:underline"
            >
              Ver todos →
            </Link>
          )}
        </div>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-0 bottom-0 z-10 w-10 flex items-center justify-center bg-gradient-to-r from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity md:flex hidden"
            aria-label="Rolar para esquerda"
          >
            <ChevronLeft size={24} className="text-foreground" />
          </button>
        )}

        {/* Scrollable area */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide px-4 snap-x snap-mandatory"
        >
          {drinks.map((drink) => (
            <div key={drink.id} className="snap-start">
              <DrinkCard drink={drink} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-0 bottom-0 z-10 w-10 flex items-center justify-center bg-gradient-to-l from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity md:flex hidden"
            aria-label="Rolar para direita"
          >
            <ChevronRight size={24} className="text-foreground" />
          </button>
        )}
      </div>

      {/* Mobile scroll indicator dots */}
      <div className="flex justify-center gap-1 mt-2 md:hidden">
        <div className={`w-6 h-1 rounded-full transition-colors ${canScrollLeft ? 'bg-muted-foreground/30' : 'bg-primary/60'}`} />
        <div className={`w-6 h-1 rounded-full transition-colors ${!canScrollLeft && !canScrollRight ? 'bg-primary/60' : 'bg-muted-foreground/30'}`} />
        <div className={`w-6 h-1 rounded-full transition-colors ${canScrollRight ? 'bg-muted-foreground/30' : 'bg-primary/60'}`} />
      </div>
    </section>
  );
}
