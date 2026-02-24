import type { Metadata } from "next";
import Image from "next/image";
import { Shield, Brain, Lock, Wifi, Search, AlertCircle, ShieldCheck, ClipboardList, Target, Zap } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInSection from "@/components/ui/FadeInSection";
import RoleCards from "@/components/sections/RoleCards";
import ResilienceScoreGauge from "@/components/sections/ResilienceScoreGauge";
import CTABanner from "@/components/sections/CTABanner";
import { BENEFITS_PAGE, RESILIENCE_DOMAINS, ROLE_BENEFITS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Benefits",
  description:
    "See how CyberEscape delivers measurable value for CISOs, GRC managers, training teams, and employees.",
};

const domainIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Brain,
  Lock,
  Wifi,
  Search,
  AlertCircle,
};

const roleItemIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield: ShieldCheck,
  ClipboardCheck: ClipboardList,
  Users: Target,
  Gamepad2: Zap,
};

export default function BenefitsPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-violet-600/25 blur-[80px]" />
          <div className="absolute -right-10 bottom-0 h-[300px] w-[300px] rounded-full bg-pink-500/15 blur-[80px]" />
        </div>
        <div className="dot-grid absolute inset-0" />
        <Container className="relative">
          <SectionHeading
            badge={BENEFITS_PAGE.header.badge}
            title={BENEFITS_PAGE.header.title}
            subtitle={BENEFITS_PAGE.header.subtitle}
          />
        </Container>
      </section>

      {/* Role cards */}
      <RoleCards />

      {/* Detailed role sections */}
      <div className="py-8">
        {ROLE_BENEFITS.map((role, i) => (
          <section
            key={role.id}
            id={role.id}
            className="scroll-mt-20 py-16 md:py-24"
          >
            <Container>
              <FadeInSection threshold={0.1}>
              <div
                className={`flex flex-col items-center gap-12 lg:flex-row ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent-light">
                    {role.title}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                    {role.headline}
                  </h2>
                  <p className="mt-4 text-foreground/70">{role.description}</p>
                  <ul className="mt-6 space-y-3">
                    {role.items.map((item) => {
                      const ItemIcon = roleItemIconMap[role.icon];
                      return (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-accent/20 to-accent-secondary/10">
                            {ItemIcon && <ItemIcon className="h-3 w-3 text-accent-light" />}
                          </span>
                          <span className="text-sm text-foreground/80">{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Screenshot */}
                <div className="w-full flex-1">
                  <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-violet-900/20">
                    <Image
                      src={role.image.src}
                      alt={role.image.alt}
                      width={800}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              </FadeInSection>
            </Container>
          </section>
        ))}
      </div>

      {/* What is Resilience Score? */}
      <section
        id="resilience-score"
        className="scroll-mt-20 relative overflow-hidden bg-surface/40 py-16 md:py-24"
      >
        <div className="dot-grid absolute inset-0" />
        <Container className="relative">
          <SectionHeading
            badge={BENEFITS_PAGE.resilienceScore.badge}
            title={BENEFITS_PAGE.resilienceScore.title}
            subtitle={BENEFITS_PAGE.resilienceScore.subtitle}
          />

          <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center gap-12 lg:flex-row">
            <p className="flex-1 text-center text-foreground/80 lg:text-left">
              {BENEFITS_PAGE.resilienceScore.explanation}
            </p>
            <div className="shrink-0">
              <ResilienceScoreGauge />
            </div>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RESILIENCE_DOMAINS.map((domain, i) => {
              const Icon = domainIconMap[domain.icon];
              return (
                <FadeInSection key={domain.name} delay={(i % 3) * 100}>
                <div
                  className="rounded-2xl border border-white/10 bg-surface-light p-6"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-accent/20 to-accent-secondary/10 p-3">
                    {Icon && <Icon className="h-5 w-5 text-accent-light" />}
                  </div>
                  <h3 className="font-semibold text-white">{domain.name}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{domain.description}</p>
                </div>
                </FadeInSection>
              );
            })}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
