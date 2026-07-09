"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const DESTINATIONS = [
  ["LONDON", "51.50\u00B0N 0.12\u00B0W"],
  ["NEW YORK", "40.71\u00B0N 74.00\u00B0W"],
  ["DUBAI", "25.20\u00B0N 55.27\u00B0E"],
  ["SYDNEY", "33.86\u00B0S 151.20\u00B0E"],
  ["TORONTO", "43.65\u00B0N 79.38\u00B0W"],
];

export default function ColdOpen() {
  const [i, setI] = useState(0);
  const [on, setOn] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      setOn(false);
      setTimeout(() => {
        setI((x) => (x + 1) % DESTINATIONS.length);
        setOn(true);
      }, 400);
    }, 3400);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative bg-deepwater text-paper min-h-[92vh] flex flex-col overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#F7F5F0 1px, transparent 1px), linear-gradient(90deg, #F7F5F0 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <path
          className="route-path"
          d="M -40 560 C 360 120, 980 120, 1480 420"
          stroke="#E85D26"
          strokeWidth="1.25"
          opacity="0.85"
        />
        <path
          d="M -40 560 C 420 260, 900 520, 1480 420"
          stroke="#1E6E6E"
          strokeWidth="0.75"
          opacity="0.3"
        />
      </svg>

      <div className="relative mx-auto max-w-site w-full px-5 md:px-8 flex-1 flex flex-col justify-center py-24">
        <h1 className="font-display font-bold tracking-tight leading-[0.98] text-[clamp(3rem,9vw,8.5rem)]">
          <span className="mask-line"><span>Two oceans.</span></span>
          <span className="mask-line l2"><span className="text-signal">One contract.</span></span>
        </h1>
        <p className="mask-line l3 mt-8 max-w-xl text-lg md:text-xl text-paper/70 leading-relaxed">
          <span>
            We run manufacturing in Pakistan for global brands — accountable to
            you, from sample to shipment.
          </span>
        </p>
        <div className="hero-rise hero-rise-3 mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="btn-primary">Book a consultation</Link>
          <Link href="/first-article" className="btn-ghost">Start with a First Article</Link>
        </div>
      </div>

      <div className="relative border-t border-paper/10">
        <div className="mx-auto max-w-site px-5 md:px-8 py-5 flex items-center justify-between font-mono text-[10px] md:text-[11px] tracking-[0.22em] text-paper/45">
          <span>SIALKOT 32.49&#176;N 74.53&#176;E</span>
          <span aria-hidden="true" className="hidden sm:block flex-1 mx-6 border-t border-dashed border-paper/15" />
          <span className="dest-label text-paper/70" style={{ opacity: on ? 1 : 0 }}>
            {DESTINATIONS[i][0]} {DESTINATIONS[i][1]}
          </span>
        </div>
      </div>
    </section>
  );
}
