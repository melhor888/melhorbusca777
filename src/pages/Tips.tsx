import { tips } from "@/data/drinks";
import { Lightbulb } from "lucide-react";

export default function Tips() {
  return (
    <div className="min-h-screen pb-20 pt-4 px-4">
      <h1 className="text-2xl font-display font-bold text-foreground mb-6">
        Dicas de Bartender
      </h1>

      <div className="space-y-4">
        {tips.map((tip, i) => (
          <div
            key={tip.id}
            className="glass-card rounded-xl p-4 animate-fade-in"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Lightbulb size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground text-sm">
                  {tip.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                  {tip.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
