interface AdPlaceholderProps {
  position: "header" | "in-content" | "sidebar" | "sticky-bottom" | "footer" | "native";
}

const labels: Record<string, string> = {
  header: "Espaço Publicitário – Banner Superior",
  "in-content": "Espaço Publicitário – In-Feed",
  sidebar: "Espaço Publicitário – Sidebar",
  "sticky-bottom": "Espaço Publicitário – Mobile Bottom",
  footer: "Espaço Publicitário – Rodapé",
  native: "Espaço Publicitário – Nativo",
};

export default function AdPlaceholder({ position }: AdPlaceholderProps) {
  return (
    <div
      className="my-4 flex items-center justify-center border border-dashed border-border/60 rounded-lg bg-muted/30 text-muted-foreground text-[10px] select-none"
      style={{ minHeight: position === "sticky-bottom" ? 50 : position === "header" ? 90 : 100 }}
      aria-hidden="true"
      data-ad-slot={position}
    >
      {labels[position]}
    </div>
  );
}
