import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Background effects */}
      <div className="hero-glow absolute inset-0" />
      <div className="dot-grid absolute inset-0" />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <Badge>Cybersecurity Training, Reimagined</Badge>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
            Turn Security Awareness Into a Game Your Team{" "}
            <span className="gradient-text">Actually Wants to Play</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground md:text-xl">
            CyberEscape replaces forgettable compliance slideshows with
            escape-room-style challenges that build real, measurable security
            skills.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/pricing" size="lg">
              Start Free Trial
            </Button>
            <Button href="/pricing" variant="secondary" size="lg">
              See Pricing
            </Button>
          </div>

          <p className="mt-4 text-sm text-foreground/60">
            14-day free trial. No credit card required.
          </p>
        </div>

        {/* Platform preview */}
        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-accent/5">
          <Image
            src="/images/seca-gamemode-details-example.png"
            alt="CyberEscape platform showing game mode details and learning objectives"
            width={1200}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
