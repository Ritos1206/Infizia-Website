"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

/**
 * Infinite, pause-on-hover marquee using pure CSS animation.
 * Renders the children twice for seamless looping.
 */
export function Marquee({
  children,
  reverse = false,
  speed = 40,
  pauseOnHover = false,
  fadeEdges = true,
  className,
}: {
  children: ReactNode;
  reverse?: boolean;
  speed?: number;
  pauseOnHover?: boolean;
  fadeEdges?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden",
        fadeEdges &&
          "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-12 pr-12",
          reverse ? "animate-[marquee-reverse_40s_linear_infinite]" : "animate-[marquee_40s_linear_infinite]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={cn(
          "flex shrink-0 items-center gap-12 pr-12",
          reverse ? "animate-[marquee-reverse_40s_linear_infinite]" : "animate-[marquee_40s_linear_infinite]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  );
}
