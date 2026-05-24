"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { FLAGSHIP_PRODUCTS } from "@/lib/constants";

const flagshipDetails: Record<
  string,
  {
    bullets: string[];
    accent: string;
    accentBg: string;
    accentText: string;
  }
> = {
  eyecon: {
    accent: "from-brand-teal/40 via-brand-teal/0 to-brand-teal/0",
    accentBg: "bg-brand-teal/10",
    accentText: "text-brand-teal",
    bullets: [
      "AI company research → ready-to-call leads",
      "Native dialer with full call history & notes",
      "Mobile meeting capture · transcripts · action items",
      "One Lead record. One activity timeline.",
    ],
  },
  vitacare: {
    accent: "from-brand-green/40 via-brand-green/0 to-brand-green/0",
    accentBg: "bg-brand-green/10",
    accentText: "text-brand-green",
    bullets: [
      "Telehealth & smart appointment scheduling",
      "Electronic health records & digital prescriptions",
      "Patient engagement with automated reminders & follow-ups",
      "AI call receptionist & WhatsApp chatbot for bookings",
    ],
  },
  eyepos: {
    accent: "from-brand-blue/40 via-brand-blue/0 to-brand-blue/0",
    accentBg: "bg-brand-blue/10",
    accentText: "text-brand-blue",
    bullets: [
      "Point-of-sale billing with GST & e-invoicing built in",
      "Inventory & accounting auto-reconciled with every sale",
      "WhatsApp-native receipts & customer reorder nudges",
      "Multi-location dashboards · branch-wise P&L in real time",
    ],
  },
};

export function FlagshipsSpotlight() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <SectionHeader
          kicker="Flagship Products"
          title="Three products, one cognitive system."
          lede="EyeCON, VitaCare, and EyePOS are the proving ground for the Infizia platform — built mobile-first, AI-native, and engineered for the workflows that drive revenue, care, and the counter."
          gradient
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FLAGSHIP_PRODUCTS.map((p, i) => {
            const detail = flagshipDetails[p.slug];
            return (
              <Reveal key={p.slug} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 200, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-bg-surface p-8 md:p-10"
                >
                  {/* Top gradient line */}
                  <div
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${detail.accent}`}
                  />

                  {/* Glow blob */}
                  <div
                    className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full ${detail.accentBg} blur-3xl opacity-60 transition-opacity group-hover:opacity-100`}
                  />

                  <div className="relative">
                    <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-text-faint">
                      {p.vertical}
                    </p>

                    <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
                      {p.name}
                    </h3>

                    <p className="mt-4 max-w-md text-base leading-relaxed text-text-muted">
                      {p.blurb}
                    </p>

                    <ul className="mt-7 flex flex-col gap-3">
                      {detail.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-sm text-text-secondary"
                        >
                          <span
                            className={`mt-2 h-1 w-1 shrink-0 rounded-full ${detail.accentText.replace("text-", "bg-")}`}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/products/${p.slug}`}
                      className={`mt-9 inline-flex items-center gap-2 text-sm font-medium ${detail.accentText} hover:opacity-80 transition-opacity`}
                    >
                      Explore {p.name}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
