import type { Metadata } from "next";
import PricingCards from "@/components/sections/PricingCards";
import CTABanner from "@/components/sections/CTABanner";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple per-seat pricing starting at $2/user/month. 14-day free trial included.",
};

const pricingFAQ = [
  {
    question: "Can I change plans later?",
    answer:
      "Yes, you can upgrade or switch between monthly and annual billing at any time. Annual discounts apply immediately when you switch.",
  },
  {
    question: "What happens when my trial ends?",
    answer:
      "Your trial data is preserved for 30 days. You can upgrade to a paid plan anytime to continue where you left off.",
  },
  {
    question: "Do you offer volume discounts?",
    answer:
      "Yes — for enterprise deployments with large user counts, contact our sales team to discuss custom pricing.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PricingCards />

      {/* Mini FAQ */}
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-center text-2xl font-bold text-white">
            Pricing Questions
          </h2>
          <div className="mx-auto max-w-2xl">
            {pricingFAQ.map((item) => (
              <Accordion
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
