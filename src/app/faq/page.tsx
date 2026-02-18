import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import CTABanner from "@/components/sections/CTABanner";
import { FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about CyberEscape — pricing, security, compliance, and technical requirements.",
};

const categories = [
  { key: "general" as const, label: "General" },
  { key: "pricing" as const, label: "Pricing" },
  { key: "security" as const, label: "Security & Compliance" },
  { key: "technical" as const, label: "Technical" },
];

export default function FAQPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about CyberEscape."
          />

          <div className="mx-auto mt-12 max-w-3xl">
            {categories.map((category) => {
              const items = FAQ_ITEMS.filter(
                (item) => item.category === category.key
              );
              if (items.length === 0) return null;
              return (
                <div key={category.key} className="mb-10">
                  <h3 className="mb-4 text-lg font-semibold text-accent-light">
                    {category.label}
                  </h3>
                  {items.map((item) => (
                    <Accordion
                      key={item.question}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
