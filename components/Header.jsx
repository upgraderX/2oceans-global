"use client";

import { useState } from "react";
import Link from "next/link";

const NAV = [
  { label: "Industries", href: "/industries" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Why Pakistan", href: "/why-pakistan" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-mist/25">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-baseline gap-2" aria-label="2 Oceans Global — home">
            <span className="font-display font-bold text-lg tracking-tight text-deepwater">
              2 OCEANS
            </span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-mist uppercase">
              Global
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-deepwater/80 hover:text-deepwater transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="/contact"
              className="text-sm font-medium text-deepwater/70 hover:text-deepwater transition-colors"
            >
              Book a call
            </Link>
            <Link href="/contact#quote" className="btn-primary !px-5 !py-2.5">
              Request a Quote
            </Link>
          </div>

          <button
            className="lg:hidden p-2 -mr-2 text-deepwater"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              {open ? (
                <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.6" />
              ) : (
                <path d="M2 6h18M2 11h18M2 16h18" stroke="currentColor" strokeWidth="1.6" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-mist/25 bg-paper">
          <nav className="mx-auto max-w-site px-5 py-6 flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-deepwater border-b border-mist/15"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-5 flex flex-col gap-3">
              <Link href="/contact#quote" onClick={() => setOpen(false)} className="btn-primary w-full">
                Request a Quote
              </Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-ghost-dark w-full">
                Book a call
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
