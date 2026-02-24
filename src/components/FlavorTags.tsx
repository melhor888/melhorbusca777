import type { FlavorTag } from "@/data/dishes";

interface FlavorTagsProps {
  tags: FlavorTag[];
}

const tagStyles: Record<FlavorTag, { bg: string; text: string }> = {
  "picante": { bg: "bg-red-500/15", text: "text-red-400" },
  "não picante": { bg: "bg-green-500/15", text: "text-green-400" },
  "defumado": { bg: "bg-amber-500/15", text: "text-amber-400" },
  "suave": { bg: "bg-emerald-500/15", text: "text-emerald-400" },
  "intenso": { bg: "bg-orange-500/15", text: "text-orange-400" },
};

const tagIcons: Record<FlavorTag, string> = {
  "picante": "🌶️",
  "não picante": "🌱",
  "defumado": "🔥",
  "suave": "🍃",
  "intenso": "💥",
};

export default function FlavorTags({ tags }: FlavorTagsProps) {
  if (!tags.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => {
        const style = tagStyles[tag];
        return (
          <span
            key={tag}
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${style.bg} ${style.text}`}
          >
            {tagIcons[tag]} {tag}
          </span>
        );
      })}
    </div>
  );
}
