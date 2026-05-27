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

  return <>{children}</>;
}
