"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { PRICING, PRICING_FEATURES, PRICING_SECTION, APP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function PricingCards() {
  const [annual, setAnnual] = useState(false);

  const proMonthly = PRICING.pro.monthly;
  const proAnnual = +(proMonthly * (1 - PRICING.annualDiscount)).toFixed(2);
  const displayPrice = annual ? proAnnual : proMonthly;

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title={PRICING_SECTION.title}
          subtitle={PRICING_SECTION.subtitle}
        />

        {/* Toggle */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              !annual ? "text-white" : "text-foreground/50"
            )}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={cn(
              "relative inline-flex h-7 w-12 items-center rounded-full transition-colors cursor-pointer",
              annual
                ? "bg-gradient-to-r from-accent to-accent-secondary"
                : "bg-white/5"
            )}
            aria-label="Toggle annual pricing"
          >
            <span
              className={cn(
                "inline-block h-5 w-5 rounded-full bg-white transition-transform shadow-sm",
                annual ? "translate-x-6" : "translate-x-1"
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              annual ? "text-white" : "text-foreground/50"
            )}
          >
            Annual{" "}
            <span className="rounded-full bg-accent-secondary/15 px-2 py-0.5 text-xs text-accent-secondary-light">
              Save 20%
            </span>
          </span>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">

          {/* Free */}
          <div className="animate-fade-in-up flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 h-full">
            <h3 className="text-lg font-semibold text-white">Free</h3>
            <div className="mt-5">
              <span className="text-5xl font-bold text-white">{PRICING.currency}0</span>
              <span className="ml-2 text-foreground/60">/ {PRICING.free.trialDays} days</span>
            </div>
            <p className="mt-2 text-sm text-foreground/60">
              Up to {PRICING.free.maxUsers} users · No credit card required
            </p>
            <ul className="mt-8 flex-1 space-y-3.5">
              {PRICING_FEATURES.free.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <Check className="h-3 w-3 text-accent-light" />
                  </div>
                  <span className="text-sm text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
            <Button href={APP_URL} variant="secondary" className="mt-8 w-full">
              Start Free Trial
            </Button>
          </div>

          {/* Pro — highlighted */}
          <div className="animate-fade-in-up animation-delay-150 relative flex flex-col rounded-2xl border border-accent/30 bg-gradient-to-b from-accent/10 to-accent-secondary/5 p-8 shadow-[0_0_50px_rgba(124,58,237,0.2)] h-full">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent to-accent-secondary px-3 py-1 text-xs font-semibold text-white shadow-lg">
                <Sparkles className="h-3 w-3" /> Most Popular
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white">Pro</h3>
            <div className="mt-5">
              <span className="text-5xl font-bold text-white">
                {PRICING.currency}{displayPrice}
              </span>
              <span className="ml-2 text-foreground/60">/ user / month</span>
            </div>
            {annual ? (
              <p className="mt-2 text-sm text-foreground/60">
                <span className="line-through opacity-50">
                  {PRICING.currency}{proMonthly}
                </span>{" "}
                — Billed annually
              </p>
            ) : (
              <p className="mt-2 text-sm text-foreground/60">
                Unlimited users · Full platform
              </p>
            )}
            <ul className="mt-8 flex-1 space-y-3.5">
              {PRICING_FEATURES.pro.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-secondary/20">
                    <Check className="h-3 w-3 text-accent-secondary-light" />
                  </div>
                  <span className="text-sm text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
            <Button href={APP_URL} className="mt-8 w-full">
              Get Started
            </Button>
          </div>

          {/* Enterprise */}
          <div className="animate-fade-in-up animation-delay-300 flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 h-full">
            <h3 className="text-lg font-semibold text-white">Enterprise</h3>
            <div className="mt-5">
              <span className="text-5xl font-bold text-white">Custom</span>
            </div>
            <p className="mt-2 text-sm text-foreground/60">
              Tailored for large organisations & regulated industries
            </p>
            <ul className="mt-8 flex-1 space-y-3.5">
              {PRICING_FEATURES.enterprise.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <Check className="h-3 w-3 text-accent-light" />
                  </div>
                  <span className="text-sm text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="secondary" className="mt-8 w-full">
              Contact Sales
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}
