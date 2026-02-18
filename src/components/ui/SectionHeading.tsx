import Badge from "./Badge";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  badge,
  title,
  subtitle,
  className,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {badge && <Badge>{badge}</Badge>}
      <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-foreground">{subtitle}</p>
      )}
    </div>
  );
}
