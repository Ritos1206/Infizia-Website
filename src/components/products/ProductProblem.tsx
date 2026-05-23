import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/motion/Reveal";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";

/**
 * Problem-statement section.
 * Sets up the wedge — sells the pain before iCON sells the cure.
 */
export function ProductProblem({
  kicker,
  title,
  body,
  accent,
}: {
  kicker: string;
  title: string;
  body: string;
  accent: ProductAccent;
}) {
  const a = ACCENTS[accent];

  return (
    <section className="relative py-20 md:py-28">
      {/* Subtle accent line at top */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r",
          a.topLine,
        )}
      />

      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <Kicker>{kicker}</Kicker>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
                {body}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
