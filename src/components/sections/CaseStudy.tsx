import Container from "@/components/ui/Container";
import { CASE_STUDY } from "@/lib/constants";

export default function CaseStudy() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-surface to-surface-light p-8 md:p-12 lg:p-16">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-wider text-accent-light">
              Case Study
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              {CASE_STUDY.company} — Turning Compliance into Culture
            </h2>
            <p className="mt-2 text-foreground">{CASE_STUDY.description}</p>

            <p className="mt-6 text-foreground">{CASE_STUDY.problem}</p>

            {/* Stats */}
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {CASE_STUDY.stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-white md:text-4xl">
                    {"before" in stat ? (
                      <>
                        <span className="text-foreground/50 line-through">
                          {stat.before}
                        </span>
                        {" → "}
                        <span className="gradient-text">{stat.after}</span>
                      </>
                    ) : (
                      <span className="gradient-text">{stat.value}</span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-foreground">
                    {stat.label} {stat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-10 border-l-2 border-accent/50 pl-6 italic text-foreground">
              &ldquo;{CASE_STUDY.quote}&rdquo;
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
