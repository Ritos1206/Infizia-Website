import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PlaceholderHero } from "@/components/sections/PlaceholderHero";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SERVICES } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "End-to-end enterprise services: web & application development, AI agentic systems, ERP & automation, blockchain, and multi-cloud infrastructure.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <>
      <PlaceholderHero
        kicker="Services"
        title="Engineering capability, on demand."
        lede="From bespoke web platforms to autonomous agentic systems — Infizia delivers enterprise-grade engagements across the full stack."
      />

      <Container className="pb-24">
        <RevealGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Reveal key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group block h-full rounded-2xl border border-white/10 bg-bg-surface p-7 transition-all hover:border-brand-green/40 hover:bg-bg-elevated"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-white group-hover:text-brand-green transition-colors">
                    {s.name}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-text-faint transition-all group-hover:text-brand-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {s.blurb}
                </p>
              </Link>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </>
  );
}
