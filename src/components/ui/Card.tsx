import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-surface p-6",
        hover && "transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]",
        className
      )}
    >
      {children}
    </div>
  );
}
