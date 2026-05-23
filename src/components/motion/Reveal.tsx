"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span" | "p" | "h1" | "h2" | "h3";
  once?: boolean;
} & Omit<HTMLMotionProps<"div">, "children">;

/**
 * Generic on-scroll reveal wrapper. Animates `y` and opacity.
 */
export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 24,
  className,
  once = true,
  as = "div",
  ...rest
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Pick motion component based on `as`. Default to div.
  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
      className={className}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * Stagger children — wrap items inside a parent that maps over a list.
 */
export function RevealGroup({
  children,
  stagger = 0.08,
  delay = 0,
  className,
  once = true,
}: {
  children: ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
