import Link from "next/link";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { GridBackground } from "@/components/motion/GridBackground";
import { POSTS } from "@/content/blog/posts";
import { ACCENTS } from "@/lib/product-accents";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Field notes from inside Infizia — engineering decisions, deployment stories, and use cases from production AI work.",
  path: "/resources/blog",
});

/**
 * Blog index — lists all posts from `content/blog/posts.tsx`.
 *
 * One use-case post lives there today; the index is built so adding
 * more posts (or migrating to MDX later) is a content-only change.
 *
 * Layout:
 *   • Hero with kicker + gradient title + lede + post count
 *   • Featured post card (the most recent one) — large, with hero
 *     image area replaced by an accent gradient + tags + excerpt
 *   • Grid of remaining posts (when there are more than one)
 *   • "More coming soon" placeholder card on the right when only one
 *     post is published, so the row doesn't look thin
 */
export default function BlogIndexPage() {
  // Sort by date desc — newest first
  const sortedPosts = [...POSTS].sort((a, b) =>
    a.date < b.date ? 1 : -1,
  );
  const [featured, ...rest] = sortedPosts;

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-20 pb-12 md:pt-28 md:pb-16">
        <GridBackground />
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <Kicker>Resources · Blog</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Field notes from{" "}
                <span className="text-gradient-brand">the build.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
                Use cases, deployment stories, and engineering decisions
                from inside Infizia. Written by the people who actually
                shipped the work.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-surface px-3 py-1.5 font-mono uppercase tracking-[0.2em] text-text-secondary">
                  <Sparkles className="h-3 w-3 text-brand-teal" />
                  {POSTS.length} {POSTS.length === 1 ? "post" : "posts"}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-surface px-3 py-1.5 font-mono uppercase tracking-[0.2em] text-text-secondary">
                  More coming soon
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Posts */}
      <Container className="pb-24 md:pb-32">
        {/* Featured post — full-width card */}
        {featured && (
          <Reveal>
            <FeaturedPostCard post={featured} />
          </Reveal>
        )}

        {/* Rest of posts grid (or coming-soon strip when there's only one) */}
        {rest.length > 0 ? (
          <RevealGroup
            stagger={0.05}
            className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {rest.map((p) => (
              <Reveal key={p.slug}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </RevealGroup>
        ) : (
          <Reveal>
            <ComingSoonStrip />
          </Reveal>
        )}
      </Container>
    </>
  );
}

/* ──────────────────────────── Cards ──────────────────────────── */

function FeaturedPostCard({ post }: { post: (typeof POSTS)[number] }) {
  const a = ACCENTS[post.accent];
  return (
    <Link
      href={`/resources/blog/${post.slug}`}
      className={cn(
        "group relative grid grid-cols-1 gap-6 overflow-hidden rounded-3xl border border-white/10 bg-bg-surface p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-bg-elevated hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.7)] active:translate-y-0 active:scale-[0.997] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base md:p-10 lg:grid-cols-12",
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
          "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl opacity-50 transition-opacity duration-300 group-hover:opacity-90",
          a.glow,
        )}
      />

      {/* Visual block */}
      <div className="relative lg:col-span-5">
        <div
          className={cn(
            "relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border bg-gradient-to-br p-6",
            a.border,
            a.progressFrom,
            a.progressTo,
          )}
        >
          {/* Faint grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.18] bg-grid-fine"
            style={{
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
            }}
          />
          {/* Title preview inside the block */}
          <div className="relative">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bg-base/80">
              Featured post · use case
            </p>
            <p className="mt-2 font-display text-xl font-semibold leading-tight tracking-tight text-bg-base md:text-2xl">
              {post.title.length > 70
                ? post.title.slice(0, 70) + "…"
                : post.title}
            </p>
          </div>
        </div>
      </div>

      {/* Text block */}
      <div className="relative flex flex-col lg:col-span-7">
        <div className="flex flex-wrap items-center gap-2">
          {post.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em]",
                a.border,
                a.bgSoft,
                a.text,
              )}
            >
              {t}
            </span>
          ))}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-text-secondary">
            <Clock className="h-2.5 w-2.5" /> {post.readTime} min
          </span>
        </div>
        <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
          {post.title}
        </h2>
        <p className="mt-4 max-w-2xl flex-1 text-sm leading-relaxed text-text-muted md:text-base">
          {post.excerpt}
        </p>
        <div className="mt-6 flex items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint">
            {new Date(post.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint">
            {post.author}
          </span>
        </div>
        <span
          className={cn(
            "mt-6 inline-flex items-center gap-1.5 text-sm font-medium",
            a.text,
          )}
        >
          Read the post
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}

function PostCard({ post }: { post: (typeof POSTS)[number] }) {
  const a = ACCENTS[post.accent];
  return (
    <Link
      href={`/resources/blog/${post.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-bg-elevated hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] active:translate-y-0 active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base",
        a.hoverBorder,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-60",
          a.topLine,
        )}
      />
      <div className="flex flex-wrap items-center gap-1.5">
        {post.tags.slice(0, 2).map((t) => (
          <span
            key={t}
            className={cn(
              "rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em]",
              a.border,
              a.bgSoft,
              a.text,
            )}
          >
            {t}
          </span>
        ))}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-white">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-text-muted">
        {post.excerpt}
      </p>
      <div className="mt-5 flex items-center justify-between text-[10px]">
        <span className="font-mono uppercase tracking-[0.2em] text-text-faint">
          {new Date(post.date).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
        <span
          className={cn(
            "inline-flex items-center gap-1 font-mono uppercase tracking-[0.18em]",
            a.text,
          )}
        >
          {post.readTime} min · Read
          <ArrowUpRight className="h-3 w-3" />
        </span>
      </div>
    </Link>
  );
}

function ComingSoonStrip() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      {["Engineering", "Use Cases", "Architecture"].map((label) => (
        <div
          key={label}
          className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-dashed border-white/15 bg-bg-surface/40 p-6"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint">
            Coming soon
          </p>
          <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-text-secondary">
            {label}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
            More posts on the way as we ship deployments and write up
            what worked.
          </p>
        </div>
      ))}
    </div>
  );
}
