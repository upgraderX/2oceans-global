"use client";

import { useState } from "react";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/industries";

const NAV = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Why Pakistan", href: "/why-pakistan" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobInd, setMobInd] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-deepwater/15">
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
            <div
              className="relative"
              onMouseEnter={() => setMega(true)}
              onMouseLeave={() => setMega(false)}
            >
              <Link
                href="/industries"
                className="flex items-center gap-1.5 text-sm font-medium text-deepwater/70 hover:text-deepwater transition-colors py-5"
                aria-expanded={mega}
              >
                Industries
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className={`transition-transform ${mega ? "rotate-180" : ""}`}>
                  <path d="M1.5 3.5L5 7l3.5-3.5" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </Link>

              {mega && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[640px] bg-paper border border-deepwater/15 rounded-xl shadow-xl p-8">
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-signal mb-5">
                    Manufacturing industries
                  </p>
                  <div className="grid grid-cols-2 gap-x-10 gap-y-1">
                    {INDUSTRIES.map((ind) => (
                      <Link
                        key={ind.slug}
                        href={`/industries/${ind.slug}`}
                        onClick={() => setMega(false)}
                        className="group flex items-baseline justify-between gap-4 py-2.5 border-b border-deepwater/10"
                      >
                        <span className={`text-sm font-medium transition-colors ${ind.beachhead ? "text-deepwater" : "text-deepwater/60"} group-hover:text-signal`}>
                          {ind.name}
                        </span>
                        <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-mist whitespace-nowrap">
                          {ind.city}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/industries"
                    onClick={() => setMega(false)}
                    className="mt-6 inline-block font-mono text-[11px] tracking-[0.2em] uppercase text-deepwater/60 hover:text-signal transition-colors"
                  >
                    View all industries &rarr;
                  </Link>
                </div>
              )}
            </div>

            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-deepwater/70 hover:text-deepwater transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="/contact"
              className="text-sm font-medium text-deepwater/60 hover:text-deepwater transition-colors"
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
        <div className="lg:hidden border-t border-deepwater/10 bg-paper max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="mx-auto max-w-site px-5 py-6 flex flex-col gap-1" aria-label="Mobile">
            <button
              onClick={() => setMobInd(!mobInd)}
              className="flex items-center justify-between py-3 text-base font-medium text-deepwater border-b border-deepwater/10 text-left"
              aria-expanded={mobInd}
            >
              Industries
              <svg width="12" height="12" viewBox="0 0 10 10" fill="none" aria-hidden="true" className={`transition-transform ${mobInd ? "rotate-180" : ""}`}>
                <path d="M1.5 3.5L5 7l3.5-3.5" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </button>
            {mobInd && (
              <div className="pl-4 py-2 flex flex-col border-b border-deepwater/10">
                {INDUSTRIES.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    onClick={() => setOpen(false)}
                    className="py-2.5 text-sm text-deepwater/70"
                  >
                    {ind.name}
                  </Link>
                ))}
                <Link
                  href="/industries"
                  onClick={() => setOpen(false)}
                  className="py-2.5 font-mono text-[10px] tracking-[0.2em] uppercase text-signal"
                >
                  View all &rarr;
                </Link>
              </div>
            )}
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-deepwater border-b border-deepwater/10"
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
