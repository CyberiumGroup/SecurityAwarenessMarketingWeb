import type { Metadata } from "next";
import { Gamepad2, BarChart3, Building2, User } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import CTABanner from "@/components/sections/CTABanner";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${SITE_NAME} — our mission to transform cybersecurity awareness training through gamification and measurable outcomes.`,
};

const pillars = [
  {
    icon: Gamepad2,
    title: "Engagement First",
    description:
      "We believe security training should compete with the best games for attention — not the worst compliance checkboxes. Escape-room mechanics create genuine engagement that drives voluntary participation.",
  },
  {
    icon: BarChart3,
    title: "Measurable Outcomes",
    description:
      "Every interaction generates data. Our 6-domain resilience scoring gives security leaders the metrics they need to prove ROI, identify risks, and drive continuous improvement.",
  },
  {
    icon: Building2,
    title: "Enterprise Ready",
    description:
      "Built from day one for regulated industries. Multi-tenant isolation, RBAC, audit logs, and GDPR compliance aren't afterthoughts — they're foundational architecture decisions.",
  },
];

const teamPlaceholders = [
  { name: "Team Member", role: "Co-Founder & CEO" },
  { name: "Team Member", role: "Co-Founder & CTO" },
  { name: "Team Member", role: "Head of Product" },
  { name: "Team Member", role: "Head of Security" },
];

export default function AboutPage() {
  return (
    <>
      {/* Mission */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            badge="Our Mission"
            title="Building the Future of Security Awareness"
          />
          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center text-foreground">
            <p>
              Traditional security awareness training is broken. Employees dread
              it, click through as fast as possible, and forget everything within
              days. Meanwhile, threat actors get more sophisticated every year.
            </p>
            <p>
              {SITE_NAME} was founded on a simple insight: people learn better
              when they&apos;re engaged. By replacing passive slideshows with
              collaborative escape-room challenges, we&apos;ve created training
              that employees actually want to complete — and that produces
              measurable security outcomes.
            </p>
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <SectionHeading title="Our Approach" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="bg-surface-light text-center">
                <div className="mx-auto mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                  <pillar.icon className="h-6 w-6 text-accent-light" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm text-foreground">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            title="Meet the Team"
            subtitle="The people behind CyberEscape."
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamPlaceholders.map((member, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-white/10 bg-surface">
                  <User className="h-10 w-10 text-white/20" />
                </div>
                <p className="mt-4 font-medium text-white">{member.name}</p>
                <p className="text-sm text-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
