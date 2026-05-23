import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { ButtonLink } from "@/components/ui/Button";
import { GridBackground } from "@/components/motion/GridBackground";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Generic placeholder hero used for stubbed pages during Phase 1.
 * Will be replaced with bespoke heroes as content is produced per page.
 */
export function PlaceholderHero({
  kicker,
  title,
  lede,
  primaryCTA = { label: "Book a Demo", href: "/contact/demo" },
  secondaryCTA,
  children,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      <GridBackground />

      <Container>
        <div className="max-w-3xl">
          {kicker && (
            <Reveal>
              <Kicker>{kicker}</Kicker>
            </Reveal>
          )}

          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              {title}
            </h1>
          </Reveal>

          {lede && (
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
                {lede}
              </p>
            </Reveal>
          )}

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink href={primaryCTA.href} variant="primary" size="lg">
                {primaryCTA.label}
              </ButtonLink>
              {secondaryCTA && (
                <ButtonLink
                  href={secondaryCTA.href}
                  variant="outline"
                  size="lg"
                >
                  {secondaryCTA.label}
                </ButtonLink>
              )}
            </div>
          </Reveal>
        </div>

        {children}

        <Reveal delay={0.2}>
          <div className="mt-16 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-text-faint">
            <span className="h-px w-12 bg-white/10" />
            <span>Page in production · content coming soon</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
