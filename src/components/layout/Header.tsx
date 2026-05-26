"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { InfiziaLogo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 print:hidden",
        scrolled
          ? "bg-bg-base/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="container-page">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link
            href="/"
            className="header-logo-shift inline-flex items-center"
            aria-label="Infizia home"
          >
            <InfiziaLogo priority />
          </Link>

          <MegaMenu />

          <div className="flex items-center gap-2">
            <ButtonLink
              href="/contact/demo"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Book a Demo
            </ButtonLink>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
