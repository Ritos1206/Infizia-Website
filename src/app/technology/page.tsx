import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PlaceholderHero } from "@/components/sections/PlaceholderHero";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { TECHNOLOGY } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Technology",
  description:
    "The technology practice powering Infizia: LLM & generative AI, agentic architecture, RAG systems, voice & conversational AI, and modern application architecture.",
  path: "/technology",
});

export default function TechnologyIndexPage() {
  return (
    <>
      <PlaceholderHero
        kicker="Technology Practice"
        title="The architecture beneath the intelligence."
        lede="Five technology pillars define how we design, build, and operate AI-native systems for the enterprise."
      />

      <Container className="pb-24">
        <RevealGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {TECHNOLOGY.map((t) => (
            <Reveal key={t.slug}>
              <Link
                href={`/technology/${t.slug}`}
                className="group block h-full rounded-2xl border border-white/10 bg-bg-surface p-7 transition-all hover:border-brand-blue/40 hover:bg-bg-elevated"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-white group-hover:text-brand-blue transition-colors">
                    {t.name}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-text-faint transition-all group-hover:text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {t.blurb}
                </p>
              </Link>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </>
  );
}
