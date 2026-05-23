import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { GridBackground } from "@/components/motion/GridBackground";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32">
      <GridBackground variant="fine" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-teal/[0.06] blur-[120px]" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-white">Ready to engineer</span>
              <br />
              <span className="text-gradient-brand">the cognitive layer?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 text-base text-text-muted md:text-lg">
              Join the organizations leveraging Infizia&apos;s product ecosystem
              and Red Hat practice to build the next decade of intelligent
              software.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href="/contact/demo" variant="primary" size="lg">
                Book a Demo
              </ButtonLink>
              <ButtonLink href="/contact/sales" variant="outline" size="lg">
                Talk to Sales
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
