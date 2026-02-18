import {
  Gamepad2,
  BarChart3,
  Users,
  Shield,
  Target,
  Route,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { VALUE_PROPS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Gamepad2,
  BarChart3,
  Users,
  Shield,
  Target,
  Route,
};

export default function ValueProps() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          badge="Why CyberEscape"
          title="Security Training That Actually Works"
          subtitle="Built from the ground up to drive engagement, measure outcomes, and scale across your organization."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_PROPS.map((prop) => {
            const Icon = iconMap[prop.icon];
            return (
              <Card key={prop.title}>
                {Icon && (
                  <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                    <Icon className="h-6 w-6 text-accent-light" />
                  </div>
                )}
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {prop.title}
                </h3>
                <p className="text-sm text-foreground">{prop.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
