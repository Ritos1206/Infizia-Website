"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

/**
 * Animated counter that counts up when scrolled into view.
 * Supports decimals (preserves precision) and a suffix.
 */
export function AnimatedCounter({
  value,
  duration = 1.6,
  suffix = "",
  prefix = "",
  decimals,
  className,
}: {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  // Auto-detect decimals from input if not specified.
  const decimalPlaces =
    decimals ?? (Number.isInteger(value) ? 0 : (value.toString().split(".")[1]?.length ?? 0));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(latest.toFixed(decimalPlaces));
      },
    });
    return () => controls.stop();
  }, [inView, value, duration, motionValue, decimalPlaces]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
