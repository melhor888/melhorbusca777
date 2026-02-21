import { useRef, useState } from "react";
import { Drink } from "@/data/drinks";
import { getDrinkImage } from "@/data/drinkImages";
import { Share2, Download, MessageCircle } from "lucide-react";

interface ShareCardProps {
  drink: Drink;
  onClose: () => void;
}

export default function ShareCard({ drink, onClose }: ShareCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copying, setCopying] = useState(false);

  const shareText = `🍣 ${drink.name}\n\n📋 Ingredientes:\n${drink.ingredients.map((i) => `• ${i}`).join("\n")}\n\n📝 Preparo:\n${drink.steps.map((s, i) => `${i + 1}. ${s}`).join("\n")}\n\n🔗 Veja mais no Nihon Food!\nhttps://japanfood.lovable.app/recipe/${drink.id}`;

  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank");
  };

  const shareNative = async () => {
    if (navigator.share) {
      await navigator.share({ title: drink.name, text: shareText });
    } else {
      await navigator.clipboard.writeText(shareText);
      setCopying(true);
      setTimeout(() => setCopying(false), 2000);
    }
  };

  const downloadCard = async () => {
    if (!cardRef.current) return;
    try {
      const { default: html2canvas } = await import("html2canvas");
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#0f1318",
        scale: 2,
        useCORS: true,
      });
      const link = document.createElement("a");
      link.download = `${drink.id}-nihon-food.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch {
      // Fallback: just share text
      shareNative();
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-sm animate-scale-in" onClick={(e) => e.stopPropagation()}>
        {/* Visual Card */}
        <div
          ref={cardRef}
          className="rounded-2xl overflow-hidden bg-card border border-border/50"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <div className="relative h-48">
            <img src={getDrinkImage(drink.image)} alt={drink.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          </div>
          <div className="p-5 -mt-8 relative">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "hsl(200, 80%, 55%)" }}>
              {drink.category}
            </span>
            <h3 className="text-2xl font-bold text-foreground mt-1">{drink.name}</h3>
            <div className="mt-3 space-y-1">
              {drink.ingredients.slice(0, 5).map((ing, i) => (
                <p key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0" style={{ background: "hsl(200, 80%, 55%)" }} />
                  {ing}
                </p>
              ))}
              {drink.ingredients.length > 5 && (
                <p className="text-xs text-muted-foreground">+{drink.ingredients.length - 5} mais...</p>
              )}
            </div>
            <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground">🍣 Nihon Food</span>
              <span className="text-[10px] text-muted-foreground">{drink.difficulty} · {drink.time}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={shareWhatsApp}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-green-600 text-foreground font-semibold text-sm"
          >
            <MessageCircle size={18} />
            WhatsApp
          </button>
          <button
            onClick={downloadCard}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary text-foreground font-semibold text-sm"
          >
            <Download size={18} />
            Salvar
          </button>
          <button
            onClick={shareNative}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary text-foreground font-semibold text-sm"
          >
            <Share2 size={18} />
            {copying ? "Copiado!" : "Mais"}
          </button>
        </div>
      </div>
    </div>
  );
}
