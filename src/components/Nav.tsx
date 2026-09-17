"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "#services", label: "Services" },
  { href: "#systems", label: "Systems" },
  { href: "#proof", label: "Proof" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-md backdrop-saturate-150"
      style={{ background: "var(--glass-bg)", borderColor: "var(--glass-border)" }}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight text-ink">
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-secondary transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={siteConfig.bookCallUrl}
            className="inline-flex items-center rounded-button bg-ink px-4 py-2 text-sm font-medium text-canvas transition-colors hover:bg-accent"
          >
            {siteConfig.ctaLabel}
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex items-center justify-center text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} weight="regular" /> : <List size={22} weight="regular" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-canvas px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-ink-secondary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.bookCallUrl}
              className="mt-2 inline-flex w-fit items-center rounded-button bg-ink px-4 py-2 text-sm font-medium text-canvas"
            >
              {siteConfig.ctaLabel}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}