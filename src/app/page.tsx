import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import AnalyticsPreview from "@/components/sections/AnalyticsPreview";
import CaseStudy from "@/components/sections/CaseStudy";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <FeatureShowcase />
      <AnalyticsPreview />
      <CaseStudy />
      <CTABanner />
    </>
  );
}
