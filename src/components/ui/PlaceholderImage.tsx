import { Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PlaceholderImage({
  caption = "Platform screenshot coming soon",
  className,
  aspectRatio = "video",
}: {
  caption?: string;
  className?: string;
  aspectRatio?: "video" | "square" | "wide";
}) {
  const ratios = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-white/10 bg-surface",
        ratios[aspectRatio],
        className
      )}
    >
      <Monitor className="mb-3 h-12 w-12 text-white/20" />
      <p className="text-sm text-white/30">{caption}</p>
    </div>
  );
}
