import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { REDHAT_SERVICES } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Red Hat",
  description:
    "Premier Red Hat Partner — full-stack RHEL, OpenShift, Ansible, and OpenShift AI delivery, managed services, and training.",
  path: "/red-hat",
});

export default function RedHatIndexPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-20 pb-24 md:pt-28 md:pb-28">
        <div className="absolute inset-0 -z-10 bg-grid opacity-50" />
        <div className="absolute -top-40 left-1/2 -z-10 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-redhat/10 blur-[120px]" />

        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-redhat" />
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white">
                  Red Hat Stack Implementation
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                The full Red Hat stack.
                <br />
                <span className="text-gradient-brand">Implemented end to end.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
                RHEL standardization, OpenShift container platforms, Ansible
                automation, and OpenShift AI — designed, deployed, and operated
                by an accountable engineering team. Assessment, implementation,
                managed services, and training, all under one roof.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <Container className="pb-24">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.25em] text-text-faint uppercase mb-6">
            What we deliver
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REDHAT_SERVICES.map((r) => (
            <Reveal key={r.slug}>
              <Link
                href={`/red-hat/${r.slug}`}
                className="group block h-full rounded-2xl border border-white/10 bg-bg-surface p-6 transition-all hover:border-redhat/40 hover:bg-bg-elevated"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {r.shortName ?? r.name}
                    </h3>
                    {r.shortName && (
                      <p className="mt-1 text-xs text-text-faint">{r.name}</p>
                    )}
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-text-faint transition-all group-hover:text-brand-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  {r.blurb}
                </p>
              </Link>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </>
  );
}
