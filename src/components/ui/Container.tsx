import { type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

/** Centered content container with consistent horizontal padding. */
export function Container({
  children,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return <As className={cn("container-page", className)}>{children}</As>;
}
