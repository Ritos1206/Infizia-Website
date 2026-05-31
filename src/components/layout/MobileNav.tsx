"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
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
      // Honour the redirectsTo field — the Red Hat Stack card in services
      // links to /red-hat instead of a non-existent /services/redhat-stack.
      href: s.redirectsTo ?? `/services/${s.slug}`,
    })),
  },
  {
    key: "red-hat",
    label: "Red Hat",
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
  { key: "resources", label: "Resources", href: "/resources" },
  { key: "company", label: "About", href: "/company/about" },
  { key: "contact", label: "Contact", href: "/contact" },
];

/** Maps a URL pathname to the top-level section key the user is currently inside. */
function getActiveKey(pathname: string): string | null {
  if (pathname.startsWith("/products")) return "products";
  if (pathname.startsWith("/solutions")) return "solutions";
  if (pathname.startsWith("/services")) return "services";
  if (pathname.startsWith("/red-hat")) return "red-hat";
  if (pathname.startsWith("/technology")) return "technology";
  if (pathname.startsWith("/resources")) return "resources";
  if (pathname.startsWith("/company")) return "company";
  if (pathname.startsWith("/contact")) return "contact";
  return null;
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname() ?? "";
  const activeKey = getActiveKey(pathname);

  // Open the drawer and auto-expand whichever section the user is currently in.
  function handleOpen() {
    setOpen(true);
    if (activeKey) {
      const expandableKeys = SECTIONS.map((s) => s.key);
      if (expandableKeys.includes(activeKey)) {
        setExpanded(activeKey);
      }
    }
  }

  // Body scroll-lock + Lenis stop while the drawer is open.
  //
  // Without this, two things go wrong on mobile:
  //   1. The page underneath continues to scroll when the user swipes
  //      anywhere on the drawer (because Lenis listens at the document
  //      level and hijacks the wheel/touch event).
  //   2. The drawer's own `overflow-y-auto` never wins because Lenis
  //      preventDefault's the event before the browser routes it to
  //      the drawer's scroll container.
  //
  // Fix:
  //   - Stop Lenis (`window.__lenis?.stop()`) so it releases its
  //     wheel/touch listeners.
  //   - Lock <html> + <body> overflow to `hidden` so native scroll on
  //     the page underneath is paused. We preserve the current scroll
  //     position via a fixed-positioning + top-offset trick so closing
  //     the drawer returns the user to where they were.
  //   - The drawer panel and backdrop carry `data-lenis-prevent` for
  //     redundancy in case Lenis is re-started by another effect.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const html = document.documentElement;
    const body = document.body;

    if (open) {
      const scrollY = window.scrollY;
      // Stop Lenis. It will be restarted in the cleanup branch.
      window.__lenis?.stop();
      // Pin the body in place so iOS Safari doesn't bounce-scroll.
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      html.style.overflow = "hidden";
      body.dataset.scrollY = String(scrollY);
      return () => {
        const restoreY = Number(body.dataset.scrollY || 0);
        body.style.position = "";
        body.style.top = "";
        body.style.left = "";
        body.style.right = "";
        body.style.width = "";
        html.style.overflow = "";
        delete body.dataset.scrollY;
        window.scrollTo(0, restoreY);
        window.__lenis?.start();
      };
    }
    return undefined;
  }, [open]);

  return (
    <>
      <button
        onClick={handleOpen}
        aria-label="Open menu"
        className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/5 transition-colors"
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
              data-lenis-prevent
              className="xl:hidden fixed inset-0 z-50 bg-bg-base/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              data-lenis-prevent
              className="xl:hidden fixed right-0 top-0 z-50 h-[100dvh] w-full max-w-sm overflow-y-auto overscroll-contain bg-bg-surface border-l border-white/10"
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
                {SECTIONS.map((section) => {
                  const sectionActive = activeKey === section.key;
                  return (
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
                          sectionActive ? "text-white" : "text-text-secondary"
                        )}
                      >
                        <span className="inline-flex items-center gap-2">
                          {sectionActive && (
                            <span
                              aria-hidden
                              className="inline-block h-1.5 w-1.5 rounded-full bg-brand-teal shadow-[0_0_8px_rgba(94,234,212,0.7)]"
                            />
                          )}
                          {section.label}
                        </span>
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
                                const itemActive = pathname === item.href;
                                return (
                                  <li key={item.href}>
                                    <Link
                                      href={item.href}
                                      onClick={() => setOpen(false)}
                                      className={cn(
                                        "flex items-center justify-between py-2 px-2 text-sm transition-colors",
                                        itemActive
                                          ? "text-white"
                                          : "text-text-secondary hover:text-white"
                                      )}
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
                  );
                })}

                <div className="border-t border-white/5 mt-2 pt-4">
                  {FLAT_LINKS.map((link) => {
                    const linkActive = activeKey === link.key;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block px-2 py-3 text-base font-medium transition-colors",
                          linkActive
                            ? "text-white"
                            : "text-text-secondary hover:text-white"
                        )}
                      >
                        <span className="inline-flex items-center gap-2">
                          {linkActive && (
                            <span
                              aria-hidden
                              className="inline-block h-1.5 w-1.5 rounded-full bg-brand-teal shadow-[0_0_8px_rgba(94,234,212,0.7)]"
                            />
                          )}
                          {link.label}
                        </span>
                      </Link>
                    );
                  })}
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
