"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { PRICING, PRICING_FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function PricingCards() {
  const [annual, setAnnual] = useState(false);

  const monthlyPrice = PRICING.monthly;
  const annualPrice = +(monthlyPrice * (1 - PRICING.annualDiscount)).toFixed(2);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="Start with a free trial, scale as you grow."
        />

        {/* Toggle */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span
            className={cn(
              "text-sm font-medium",
              !annual ? "text-white" : "text-foreground"
            )}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={cn(
              "relative inline-flex h-7 w-12 items-center rounded-full transition-colors cursor-pointer",
              annual ? "bg-accent" : "bg-surface-light"
            )}
            aria-label="Toggle annual pricing"
          >
            <span
              className={cn(
                "inline-block h-5 w-5 rounded-full bg-white transition-transform",
                annual ? "translate-x-6" : "translate-x-1"
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm font-medium",
              annual ? "text-white" : "text-foreground"
            )}
          >
            Annual{" "}
            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent-light">
              Save 20%
            </span>
          </span>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-2">
          {/* Free Trial */}
          <Card hover={false} className="flex flex-col">
            <h3 className="text-lg font-semibold text-white">Free Trial</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold text-white">
                {PRICING.currency}0
              </span>
              <span className="ml-2 text-foreground">
                / {PRICING.trialDays} days
              </span>
            </div>
            <p className="mt-2 text-sm text-foreground">
              Up to {PRICING.trialUsers} users. No credit card required.
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {PRICING_FEATURES.trial.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              href="/contact"
              variant="secondary"
              className="mt-8 w-full"
            >
              Start Free Trial
            </Button>
          </Card>

          {/* Pro */}
          <Card
            hover={false}
            className="relative flex flex-col border-accent/30 shadow-[0_0_40px_rgba(6,182,212,0.1)]"
          >
            <div className="absolute -top-3 right-6">
              <span className="rounded-full bg-gradient-to-r from-accent-light to-accent-secondary px-3 py-1 text-xs font-medium text-white">
                Most Popular
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white">Pro</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold text-white">
                {PRICING.currency}
                {annual ? annualPrice : monthlyPrice}
              </span>
              <span className="ml-2 text-foreground">/ user / month</span>
            </div>
            {annual && (
              <p className="mt-1 text-sm text-foreground">
                <span className="line-through">
                  {PRICING.currency}
                  {monthlyPrice}
                </span>{" "}
                — billed annually
              </p>
            )}
            <p className="mt-2 text-sm text-foreground">
              Unlimited users. Full platform.
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {PRICING_FEATURES.pro.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full">Get Started</Button>
          </Card>
        </div>
      </Container>
    </section>
  );
}
