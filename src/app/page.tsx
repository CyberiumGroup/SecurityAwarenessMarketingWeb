import { PlayCircle } from "lucide-react";
import Hero from "@/components/sections/Hero";
import LeaderboardHighlight from "@/components/sections/LeaderboardHighlight";
import ValueProps from "@/components/sections/ValueProps";
import CaseStudy from "@/components/sections/CaseStudy";
import CTABanner from "@/components/sections/CTABanner";
import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <>
      <Hero />
      <LeaderboardHighlight />

      {/* Platform screen recording — replace with <video> or embed when ready */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface-light aspect-video flex flex-col items-center justify-center gap-4 shadow-2xl shadow-violet-900/20">
            <div className="rounded-full border border-white/10 bg-white/5 p-5">
              <PlayCircle className="h-10 w-10 text-white/30" />
            </div>
            <p className="text-sm text-foreground/30">Platform walkthrough coming soon</p>
          </div>
        </Container>
      </section>

      <ValueProps />
      <CaseStudy />
      <CTABanner />
    </>
  );
}
