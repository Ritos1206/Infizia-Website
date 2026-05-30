import Link from "next/link";
import { ArrowUpRight, BookOpen, FolderKanban, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { GridBackground } from "@/components/motion/GridBackground";
import { POSTS } from "@/content/blog/posts";
import { CUSTOMERS } from "@/lib/customers";
import { ACCENTS } from "@/lib/product-accents";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Resources",
  description:
    "Field notes, deployment stories, and case studies from inside Infizia — engineering decisions and use cases from production AI work.",
  path: "/resources",
});

/**
 * /resources — hub page with two cards (Blog · Case Studies) and a
 * preview of the latest blog post + the Contezza track-record summary.
 */
export default function ResourcesIndexPage() {
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
              <Kicker>Resources</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Stories from{" "}
                <span className="text-gradient-brand">the build.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
                Use cases, deployment write-ups, and engineering notes
                from the team behind Infizia and Contezza Techno Solution
                Pvt. Ltd. — written by the people who shipped the work.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-surface px-3 py-1.5 font-mono uppercase tracking-[0.2em] text-text-secondary">
                  <Sparkles className="h-3 w-3 text-brand-teal" />
                  {POSTS.length} {POSTS.length === 1 ? "post" : "posts"} ·{" "}
                  {CUSTOMERS.length}+ deployments
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Two-card hub */}
      <Container className="pb-12 md:pb-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <HubCard
            href="/resources/blog"
            icon={BookOpen}
            kicker="Resources · Blog"
            title="Field notes from production AI"
            body="Use cases, architecture decisions, and what we learned from real deployments. New posts drop as we ship."
            accent="teal"
            stat={`${POSTS.length} ${POSTS.length === 1 ? "post" : "posts"} live`}
          />
          <HubCard
            href="/resources/case-studies"
            icon={FolderKanban}
            kicker="Resources · Case Studies"
            title="Detailed deployment write-ups"
            body="Long-form case studies with measured outcomes from clients who agreed to be named. Coming as customer permissions land."
            accent="blue"
            stat="Coming soon"
          />
        </div>
      </Container>

      {/* Latest post preview */}
      {latestPost && latestAccent && (
        <Container className="pb-24 md:pb-32">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-faint">
              Latest from the blog
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {latestPost.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
              {latestPost.excerpt}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href={`/resources/blog/${latestPost.slug}`}
                className={cn(
                  "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium text-bg-base transition-all hover:-translate-y-0.5",
                  latestAccent.bg,
                )}
              >
                Read the post
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/resources/blog"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/15 px-5 text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/[0.04]"
              >
                Browse all posts
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      )}
    </>
  );
}

/* ──────────────────────────── HubCard ──────────────────────────── */

function HubCard({
  href,
  icon: Icon,
  kicker,
  title,
  body,
  accent,
  stat,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  kicker: string;
  title: string;
  body: string;
  accent: "teal" | "blue";
  stat: string;
}) {
  const a = ACCENTS[accent];
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-bg-surface p-7 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-bg-elevated hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.7)] active:translate-y-0 active:scale-[0.997] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base md:p-9",
        a.hoverBorder,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-60 transition-opacity duration-300 group-hover:opacity-100",
          a.topLine,
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl opacity-50 transition-opacity duration-300 group-hover:opacity-90",
          a.glow,
        )}
      />

      <div className="relative flex items-start justify-between gap-3">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl border",
            a.border,
            a.bgSoft,
            a.text,
          )}
        >
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </div>
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em]",
            a.border,
            a.bgSoft,
            a.text,
          )}
        >
          {stat}
        </span>
      </div>

      <p className="relative mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint">
        {kicker}
      </p>
      <h3 className="relative mt-2 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {title}
      </h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-text-muted">
        {body}
      </p>
      <span
        className={cn(
          "relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium",
          a.text,
        )}
      >
        Open
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
