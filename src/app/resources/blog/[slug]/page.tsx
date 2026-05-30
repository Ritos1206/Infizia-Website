import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { GridBackground } from "@/components/motion/GridBackground";
import { POSTS, getPost } from "@/content/blog/posts";
import { ACCENTS } from "@/lib/product-accents";
import { PRODUCTS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return buildMetadata({ title: "Post not found", noIndex: true });
  }
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/resources/blog/${post.slug}`,
  });
}

/**
 * Single blog post page.
 *
 * Layout:
 *   • Back-to-blog crumb at the top
 *   • Hero: kicker (tags + reading time) + accent gradient title + meta
 *     line (date · author · related product) + excerpt
 *   • Body — rendered inside a `prose-blog` container that styles
 *     paragraphs, lists, headings, links, and HRs in our brand voice
 *     (defined in globals.css)
 *   • Footer: post meta + related-product CTA + share row
 */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const a = ACCENTS[post.accent];
  const relatedProduct = post.productSlug
    ? PRODUCTS.find((p) => p.slug === post.productSlug)
    : null;

  // Title gradient — split the last word out so we can highlight it
  const titleWords = post.title.split(" ");
  const titleHead = titleWords.slice(0, -1).join(" ");
  const titleTail = titleWords[titleWords.length - 1];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16">
        <GridBackground />

        <Container>
          {/* Back link */}
          <Link
            href="/resources/blog"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3 w-3" />
            All posts
          </Link>

          <div className="mt-8 max-w-3xl">
            <Reveal>
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
                  <Clock className="h-2.5 w-2.5" /> {post.readTime} min read
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                {titleHead}{" "}
                <span className={cn("bg-clip-text text-transparent bg-gradient-to-br", a.progressFrom, a.progressTo)}>
                  {titleTail}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
                {post.excerpt}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
                <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.2em] text-text-faint">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.2em] text-text-faint">
                  <User className="h-3 w-3" />
                  {post.author}
                </span>
                {relatedProduct && (
                  <Link
                    href={`/products/${relatedProduct.slug}`}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 font-mono uppercase tracking-[0.18em] transition-colors hover:text-white",
                      a.border,
                      a.bgSoft,
                      a.text,
                    )}
                  >
                    Featured · {relatedProduct.name}
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Body */}
      <Container className="pb-24 md:pb-32">
        <Reveal>
          <article className="prose-blog mx-auto max-w-3xl">
            {post.body}
          </article>
        </Reveal>

        {/* Post-footer CTA */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 md:p-8">
            <div
              className={cn(
                "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl opacity-50",
                a.glow,
              )}
            />
            <div className="relative flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint">
                  Want to talk through your set-up?
                </p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-text-muted">
                  Book a 30-minute call and we&rsquo;ll walk through what
                  a deployment looks like for your team.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact/demo"
                  className={cn(
                    "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium text-bg-base transition-all hover:-translate-y-0.5 active:translate-y-0",
                    a.bg,
                  )}
                >
                  Book a demo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                {relatedProduct && (
                  <Link
                    href={`/products/${relatedProduct.slug}`}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/15 px-5 text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/[0.04]"
                  >
                    Explore {relatedProduct.name}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
