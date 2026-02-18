import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="hero-glow absolute inset-0 rotate-180" />
      <div className="dot-grid absolute inset-0" />

      <Container className="relative text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Ready to Transform Your Security Training?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground">
          Join organizations that have turned compliance into culture with
          gamified security awareness training.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/pricing" size="lg">
            Start Free Trial
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Sales
          </Button>
        </div>
      </Container>
    </section>
  );
}
