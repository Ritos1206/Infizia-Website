"use client";

/**
 * /contact — Phase 7 Contact · 1 of 3 (general inquiry)
 *
 * Brand accent: brand-teal (matches the global brand primary). The form
 * posts to /api/contact with formType: "contact". Sidebar carries
 * 3 "other ways to reach us" tiles linking to /contact/demo and
 * /contact/sales for buyers who already know what they need.
 */

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Calendar,
  Briefcase,
  ArrowUpRight,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { GridBackground } from "@/components/motion/GridBackground";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";

const ALTERNATIVES = [
  {
    icon: Calendar,
    title: "Book a demo",
    body: "See a specific Infizia product in action — pick the one you're evaluating.",
    href: "/contact/demo",
    cta: "Book a demo",
  },
  {
    icon: Briefcase,
    title: "Talk to sales",
    body: "Discuss multi-product rollouts, services engagements, or Red Hat / Google Cloud work.",
    href: "/contact/sales",
    cta: "Talk to sales",
  },
  {
    icon: Mail,
    title: "Email us",
    body: "Prefer plain email? Drop us a line — we read everything.",
    href: "mailto:sales@infizia.in",
    cta: "sales@infizia.in",
    external: true,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16">
        <GridBackground />
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand-teal/[0.10] blur-[120px]" />
        </div>

        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Kicker className="justify-center">Contact Infizia</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[0.98] tracking-tight text-white md:text-5xl lg:text-[4.25rem]">
                Tell us what you&rsquo;re{" "}
                <span className="text-gradient-brand">building.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
                One inbox, one team. Whether you&rsquo;re evaluating a product,
                planning a services engagement, or exploring a partnership —
                we&rsquo;d like to hear about it.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── Form + Alternatives ────────────────────────────── */}
      <section className="relative pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Form column */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-bg-surface/80 p-6 backdrop-blur md:p-8 lg:p-10">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-teal/0 via-brand-teal/60 to-brand-teal/0" />

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-teal/30 bg-brand-teal/10 text-brand-teal">
                    <MessageSquare className="h-4 w-4" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-teal">
                      General inquiry
                    </p>
                    <h2 className="font-display text-xl font-semibold tracking-tight text-white">
                      Send us a message
                    </h2>
                  </div>
                </div>

                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </motion.div>

            {/* Alternatives sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="lg:col-span-5"
            >
              <div className="space-y-3">
                <div className="rounded-2xl border border-brand-teal/20 bg-bg-surface/40 px-5 py-5 backdrop-blur">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inset-0 animate-ping rounded-full bg-brand-teal/60" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-brand-teal" />
                    </span>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-teal">
                      Other ways to reach us
                    </p>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-tight tracking-tight text-white md:text-2xl">
                    Pick the path that fits.
                  </h3>
                </div>

                {ALTERNATIVES.map((alt) => {
                  const Icon = alt.icon;
                  const isExternal = "external" in alt && alt.external;
                  const LinkComponent = isExternal ? "a" : Link;
                  const linkProps = isExternal
                    ? { href: alt.href }
                    : { href: alt.href };

                  return (
                    <LinkComponent
                      key={alt.title}
                      {...linkProps}
                      className="group relative flex items-start gap-4 overflow-hidden rounded-xl border border-white/10 bg-bg-surface/60 p-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand-teal/30 hover:bg-bg-elevated active:translate-y-0 active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
                    >
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-teal/0 via-brand-teal/60 to-brand-teal/0 opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-teal/30 bg-brand-teal/10 text-brand-teal">
                        <Icon className="h-4 w-4" strokeWidth={1.6} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-display text-base font-semibold tracking-tight text-white">
                          {alt.title}
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                          {alt.body}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-brand-teal">
                          {alt.cta}
                          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </LinkComponent>
                  );
                })}

                <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-bg-base/40 p-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-teal/30 bg-brand-teal/10 text-brand-teal">
                    <Sparkles className="h-4 w-4" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                      Response time
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      We respond to every message within{" "}
                      <span className="text-white">one business day</span> —
                      Monday to Friday, IST hours.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
