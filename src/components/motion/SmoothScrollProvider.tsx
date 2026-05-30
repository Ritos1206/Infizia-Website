"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/**
 * Smooth-scroll provider using Lenis.
 *
 * - Disables itself on prefers-reduced-motion.
 * - Resets scroll to top on every route change (handles a UX bug where
 *   clicking a Related Products card or any in-app link kept the new
 *   page at the previous page's scroll position. Lenis hijacks the
 *   document scroll, so Next.js's default scroll-to-top behavior on
 *   route change doesn't fire — we handle it explicitly here.)
 * - Scrolls to top on same-page link clicks too. Next.js Link does
 *   nothing when href === current pathname (no route change fires),
 *   which means clicking a footer link or logo while you're already on
 *   that page leaves you wherever you scrolled to. We intercept those
 *   clicks and trigger the same scroll reset, so the behaviour matches
 *   what users expect from clicking a navigation link.
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  // Initialise Lenis once on mount.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Reset scroll to top on every route change.
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Use Lenis when available — `immediate: true` jumps without animation,
    // which is the right behavior for a route transition (smooth scroll
    // across a route change feels broken). Fall back to native window
    // scroll when Lenis is disabled (reduced motion / SSR hydration).
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname]);

  // Scroll to top when a same-page link is clicked. Next.js Link does
  // nothing when href === current pathname, so the route-change effect
  // above never fires. This handler catches that gap.
  useEffect(() => {
    if (typeof window === "undefined") return;

    function handleAnchorClick(e: MouseEvent) {
      // Only respond to plain left-button clicks. Modifier-clicks open
      // new tabs / windows / downloads — let the browser handle those.
      if (
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const anchor = (e.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Skip target=_blank and download links — those open elsewhere.
      if (anchor.target === "_blank") return;
      if (anchor.hasAttribute("download")) return;

      // Skip external protocols.
      if (
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:")
      ) {
        return;
      }

      // Resolve the href against the current origin to get a clean URL.
      let url: URL;
      try {
        url = new URL(href, window.location.origin);
      } catch {
        return;
      }

      // External host — let the browser handle the navigation.
      if (url.origin !== window.location.origin) return;

      // Hash link on the same page (e.g. "#pricing") — let the browser
      // do its native anchor scrolling. Don't override.
      if (url.pathname === window.location.pathname && url.hash) {
        return;
      }

      // Same pathname, no hash → user clicked a link to the page they're
      // already on. Next.js does nothing in this case, so we explicitly
      // reset scroll to the top.
      if (url.pathname === window.location.pathname) {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
      }
      // Different pathname → the route-change effect above will reset
      // scroll once the navigation completes. Nothing to do here.
    }

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return <>{children}</>;
}
