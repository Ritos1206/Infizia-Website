"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  PRODUCTS,
  SOLUTIONS,
  SERVICES,
  REDHAT_SERVICES,
  TECHNOLOGY,
} from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";

const SECTIONS = [
  {
    key: "products",
    label: "Products",
    items: PRODUCTS.map((p) => ({
      label: p.shortName ?? p.name,
      href: `/products/${p.slug}`,
      meta: p.vertical,
    })),
  },
  {
    key: "solutions",
    label: "Solutions",
    items: SOLUTIONS.map((s) => ({
      label: `${s.emoji}  ${s.name}`,
      href: `/solutions/${s.slug}`,
    })),
  },
  {
    key: "services",
    label: "Services",
    items: SERVICES.map((s) => ({
      label: s.name,
      href: `/services/${s.slug}`,
    })),
  },
  {
    key: "red-hat",
    label: "Red Hat",
    accent: true,
    items: [
      { label: "Overview", href: "/red-hat" },
      ...REDHAT_SERVICES.map((r) => ({
        label: r.shortName ?? r.name,
        href: `/red-hat/${r.slug}`,
      })),
    ],
  },
  {
    key: "technology",
    label: "Technology",
    items: TECHNOLOGY.map((t) => ({
      label: t.name,
      href: `/technology/${t.slug}`,
    })),
  },
];

const FLAT_LINKS = [
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/company/about" },
  { label: "Contact", href: "/contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/5 transition-colors"
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="lg:hidden fixed inset-0 z-50 bg-bg-base/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden fixed right-0 top-0 z-50 h-full w-full max-w-sm overflow-y-auto bg-bg-surface border-l border-white/10"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 sticky top-0 bg-bg-surface z-10">
                <span className="font-display text-sm font-semibold text-white">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white hover:bg-white/5"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="px-4 py-4">
                {SECTIONS.map((section) => (
                  <div
                    key={section.key}
                    className="border-b border-white/5 last:border-b-0"
                  >
                    <button
                      onClick={() =>
                        setExpanded(expanded === section.key ? null : section.key)
                      }
                      className={cn(
                        "flex w-full items-center justify-between px-2 py-4 text-base font-medium transition-colors",
                        section.accent
                          ? "text-brand-teal"
                          : "text-white"
                      )}
                    >
                      {section.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          expanded === section.key && "rotate-180"
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {expanded === section.key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.24 }}
                          className="overflow-hidden"
                        >
                          <ul className="pb-3 pl-3">
                            {section.items.map((item) => {
                              const meta =
                                "meta" in item
                                  ? (item.meta as string | undefined)
                                  : undefined;
                              return (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-between py-2 px-2 text-sm text-text-secondary hover:text-white transition-colors"
                                  >
                                    <span>{item.label}</span>
                                    {meta && (
                                      <span className="text-[11px] text-text-faint">
                                        {meta}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <div className="border-t border-white/5 mt-2 pt-4">
                  {FLAT_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-2 py-3 text-base font-medium text-white hover:text-brand-teal transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-6 px-2">
                  <ButtonLink
                    href="/contact/demo"
                    variant="primary"
                    size="md"
                    className="w-full"
                    onClick={() => setOpen(false)}
                  >
                    Book a Demo
                  </ButtonLink>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
