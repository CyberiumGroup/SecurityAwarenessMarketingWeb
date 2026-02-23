import { Shield, ClipboardCheck, Users, Gamepad2, Check, ChevronDown } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import { ROLE_BENEFITS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  ClipboardCheck,
  Users,
  Gamepad2,
};

export default function RoleCards() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ROLE_BENEFITS.map((role, i) => {
            const Icon = iconMap[role.icon];
            return (
              <FadeInSection key={role.id} delay={i * 100}>
              <a
                href={`#${role.id}`}
                className="group flex flex-col rounded-2xl border border-white/10 bg-surface-light p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-surface hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
              >
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-accent/20 to-accent-secondary/10 p-3 w-fit">
                  {Icon && <Icon className="h-6 w-6 text-accent-light" />}
                </div>

                <h3 className="text-lg font-semibold text-white">{role.title}</h3>

                <ul className="mt-4 flex-1 space-y-2">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-secondary" />
                      <span className="text-sm text-foreground/70">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-1 text-sm font-medium text-accent-light">
                  Learn more
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                </div>
              </a>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
