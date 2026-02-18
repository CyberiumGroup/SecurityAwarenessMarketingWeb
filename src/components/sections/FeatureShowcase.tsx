import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { FEATURES } from "@/lib/constants";

const featureImages = [
  {
    src: "/images/seca-resilience_score.png",
    alt: "CyberEscape resilience score dashboard showing domain breakdown and score history",
  },
  {
    src: "/images/seca-user-management.png",
    alt: "CyberEscape user management interface with roles and status tracking",
  },
  {
    src: "/images/seca-gamemodes.png",
    alt: "CyberEscape game modes browser showing available escape room scenarios",
  },
];

export default function FeatureShowcase() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          badge="Features"
          title="Built for Every Role"
          subtitle="From the CISO to the newest employee, CyberEscape gives everyone the tools they need."
        />

        <div className="mt-16 space-y-24">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center gap-12 lg:flex-row ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-3 text-foreground">{feature.description}</p>
                <ul className="mt-6 space-y-3">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Screenshot */}
              <div className="w-full flex-1">
                <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                  <Image
                    src={featureImages[i].src}
                    alt={featureImages[i].alt}
                    width={800}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
