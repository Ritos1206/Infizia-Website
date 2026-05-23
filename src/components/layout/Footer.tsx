import Link from "next/link";
import { InfiziaLogo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { FOOTER_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5 bg-bg-base print:hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-teal/40 to-transparent" />

      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <InfiziaLogo variant="stacked" className="h-28 w-28" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-text-muted">
              Engineering the agentic layer of modern enterprises.
              <br />
              <span className="text-text-faint">
                A sub-brand of {SITE.parent}.
              </span>
            </p>

            <div className="mt-8">
              <p className="font-mono text-[10px] tracking-[0.2em] text-text-faint uppercase mb-2">
                Red Hat Stack
              </p>
              <p className="text-xs text-text-muted">
                RHEL · OpenShift · Ansible · OpenShift AI
              </p>
            </div>
          </div>

          {/* Link columns */}
          {(Object.keys(FOOTER_LINKS) as (keyof typeof FOOTER_LINKS)[]).map(
            (group) => (
              <div key={group} className="col-span-1 md:col-span-2">
                <p className="font-mono text-[10px] tracking-[0.2em] text-text-faint uppercase mb-4">
                  {group}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {FOOTER_LINKS[group].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-text-secondary hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-text-faint">
            © {new Date().getFullYear()} {SITE.parent}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-xs text-text-faint">
            <Link href="/legal/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/legal/security" className="hover:text-white transition-colors">
              Security
            </Link>
            <a
              href={`mailto:${SITE.email}`}
              className="hover:text-white transition-colors"
            >
              {SITE.email}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
