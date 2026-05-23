import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PlaceholderHero } from "@/components/sections/PlaceholderHero";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SOLUTIONS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Solutions",
  description:
    "Industry solutions across healthcare, HR, customer support, education, e-commerce, finance, intelligence, industrial IoT, and media.",
  path: "/solutions",
});

export default function SolutionsIndexPage() {
  return (
    <>
      <PlaceholderHero
        kicker="Industry Solutions"
        title="Built for the industries that move the world."
        lede="Each Infizia solution maps a vertical's hardest problems to the right combination of products, services, and AI capabilities — with measurable outcomes."
      />

      <Container className="pb-24">
        <RevealGroup className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s) => (
            <Reveal key={s.slug}>
              <Link
                href={`/solutions/${s.slug}`}
                className="group block h-full rounded-2xl border border-white/10 bg-bg-surface p-6 transition-all hover:border-brand-teal/40 hover:bg-bg-elevated"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-3xl">{s.emoji}</span>
                  <ArrowUpRight className="h-5 w-5 text-text-faint transition-all group-hover:text-brand-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
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
