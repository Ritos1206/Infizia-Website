import Link from "next/link";
import {
  ArrowUpRight,
  FolderKanban,
  Sparkles,
  Compass,
  Layers,
  TrendingUp,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { GridBackground } from "@/components/motion/GridBackground";
import { SOLUTIONS } from "@/lib/constants";
import { POSTS } from "@/content/blog/posts";
import { ACCENTS } from "@/lib/product-accents";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Detailed case studies of Infizia and Contezza Techno Solution Pvt. Ltd. deployments — coming as customer permissions land.",
  path: "/resources/case-studies",
});

/**
 * /resources/case-studies — interim coming-soon view (rev 2).
 *
 * Earlier rev showed the 11 customer logos with "Coming soon" pills,
 * which was visually heavy and inadvertently exposed customer
 * identities for projects we don't yet have permission to write up.
 *
 * This rev replaces the logo grid with two structured sections:
 *
 *   1. "What case studies will cover" — three frame cards setting
 *      reader expectations (Problem & context · Architecture · Outcomes).
 *   2. "Industries we ship to" — the 10 verticals we work across as
 *      accent-coloured tiles. Each tile shows the vertical name + an
 *      emoji + a category label, with no customer-specific identifiers.
 *
 * Plus a featured-blog tile pointing to the live use-case post and a
 * "Want to be featured?" CTA. Honest, identity-safe, content-forward.
 */

type FrameCard = {
  icon: LucideIcon;
  kicker: string;
  title: string;
  body: string;
};

const FRAMES: FrameCard[] = [
  {
    icon: Compass,
    kicker: "01 · Context",
    title: "The problem in plain English",
    body: "What the team was actually trying to do, where the existing setup was breaking down, and why the status quo had to change.",
  },
  {
    icon: Layers,
    kicker: "02 · Architecture",
    title: "How we built it",
    body: "The Infizia products in play, the integrations that mattered, the design choices we made, and the trade-offs we accepted along the way.",
  },
  {
    icon: TrendingUp,
    kicker: "03 · Outcomes",
    title: "What changed, in numbers",
    body: "Measured before and after — utilisation, cost, time-to-decision, customer experience — with the operational discipline that produced the change.",
  },
];

export default function CaseStudiesIndexPage() {
  const latestPost = [...POSTS].sort((a, b) =>
    a.date < b.date ? 1 : -1,
  )[0];
  const latestAccent = latestPost ? ACCENTS[latestPost.accent] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-20 pb-12 md:pt-28 md:pb-16">
        <GridBackground />
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <Kicker>Resources · Case Studies</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Detailed deployment{" "}
                <span className="text-gradient-brand">write-ups, on the way.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
                We&rsquo;re drafting long-form case studies for the clients
                who&rsquo;ve agreed to be named — covering the problem, the
                architecture, and the outcomes. Until those land, here&rsquo;s
                the shape of what they&rsquo;ll contain and the industries we
                build for.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-surface px-3 py-1.5 font-mono uppercase tracking-[0.2em] text-text-secondary">
                  <Sparkles className="h-3 w-3 text-brand-teal" />
                  Long-form write-ups · coming soon
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-surface px-3 py-1.5 font-mono uppercase tracking-[0.2em] text-text-secondary">
                  {SOLUTIONS.length} industries served
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Section 1 — What case studies will cover */}
      <Container className="pb-12 md:pb-16">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-faint">
            What every case study covers
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Three sections,{" "}
            <span className="text-gradient-brand">honest end-to-end.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted md:text-base">
            The shape stays consistent across studies — you can read any one
            and know exactly where the parts you care about live.
          </p>
        </Reveal>

        <RevealGroup
          stagger={0.06}
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5"
        >
          {FRAMES.map(({ icon: Icon, kicker, title, body }) => (
            <Reveal key={kicker}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-bg-elevated hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] md:p-7">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-teal/50 via-brand-teal/0 to-brand-teal/0 opacity-60"
                />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-teal/30 bg-brand-teal/10 text-brand-teal">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-teal">
                  {kicker}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-white">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>

      {/* Section 2 — Industries we ship to (no customer names) */}
      <Container className="pb-12 md:pb-16">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-faint">
            Industries served
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
            We&rsquo;ve shipped across{" "}
            <span className="text-gradient-brand">{SOLUTIONS.length} verticals.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted md:text-base">
            Each industry below has at least one production deployment behind
            it. Detailed studies will land here as clients are named.
          </p>
        </Reveal>

        <RevealGroup
          stagger={0.04}
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 md:grid-cols-4 lg:grid-cols-5"
        >
          {SOLUTIONS.map((s, i) => {
            const accent = s.accent ?? "teal";
            const a = ACCENTS[accent];
            return (
              <Reveal key={s.slug}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-4 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-bg-elevated hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] active:translate-y-0 active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base md:p-5",
                    a.hoverBorder,
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-50 transition-opacity duration-300 group-hover:opacity-100",
                      a.topLine,
                    )}
                  />
                  <div
                    className={cn(
                      "pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full blur-3xl opacity-30 transition-opacity duration-300 group-hover:opacity-80",
                      a.glow,
                    )}
                  />

                  <div className="relative flex items-start justify-between gap-2">
                    <div
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-xl border text-xl",
                        a.border,
                        a.bgSoft,
                      )}
                    >
                      {s.emoji}
                    </div>
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.16em]",
                        a.border,
                        a.bgSoft,
                        a.text,
                      )}
                    >
                      Soon
                    </span>
                  </div>
                  <p
                    className={cn(
                      "relative mt-4 font-mono text-[9px] uppercase tracking-[0.18em]",
                      a.text,
                    )}
                  >
                    {String(i + 1).padStart(2, "0")} / {SOLUTIONS.length}
                  </p>
                  <h3 className="relative mt-1 font-display text-base font-semibold tracking-tight text-white md:text-lg">
                    {s.name}
                  </h3>
                </Link>
              </Reveal>
            );
          })}
        </RevealGroup>
      </Container>

      {/* Section 3 — In the meantime, read the blog */}
      {latestPost && latestAccent && (
        <Container className="pb-12 md:pb-16">
          <Reveal>
            <div
              className={cn(
                "relative overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 shadow-card md:p-8",
                latestAccent.hoverBorder,
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-60",
                  latestAccent.topLine,
                )}
              />
              <div
                className={cn(
                  "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-50",
                  latestAccent.glow,
                )}
              />

              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border",
                      latestAccent.border,
                      latestAccent.bgSoft,
                      latestAccent.text,
                    )}
                  >
                    <Lightbulb className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint">
                      In the meantime · from the blog
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-white md:text-xl">
                      {latestPost.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-muted">
                      {latestPost.excerpt}
                    </p>
                  </div>
                </div>
                <Link
                  href={`/resources/blog/${latestPost.slug}`}
                  className={cn(
                    "inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium text-bg-base transition-all hover:-translate-y-0.5 active:translate-y-0",
                    latestAccent.bg,
                  )}
                >
                  Read the post
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      )}

      {/* Section 4 — Want to be featured? */}
      <Container className="pb-24 md:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-bg-elevated to-bg-surface p-8 md:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-teal/[0.12] blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-brand-blue/[0.12] blur-3xl" />

            <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-teal/30 bg-brand-teal/10 text-brand-teal">
                  <FolderKanban className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-text-faint">
                  Working with us already?
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Want to be featured?
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted">
                  If we&rsquo;re shipping for you and the outcomes are landing,
                  let&rsquo;s write the story together. We do the heavy lifting
                  on the draft, you keep editorial control.
                </p>
              </div>
              <div className="md:col-span-5 md:flex md:justify-end">
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-teal px-7 text-sm font-medium text-bg-base shadow-glow-teal transition-all hover:bg-brand-teal-soft hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
                  >
                    Get in touch
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/resources/blog"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-7 text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
                  >
                    Read the blog
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
