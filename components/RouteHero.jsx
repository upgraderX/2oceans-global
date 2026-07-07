"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Fixed, universal storytelling — no visitor detection of any kind.
const DESTINATIONS = [
  { city: "LONDON", coords: "51.50\u00B0N 0.12\u00B0W" },
  { city: "NEW YORK", coords: "40.71\u00B0N 74.00\u00B0W" },
  { city: "DUBAI", coords: "25.20\u00B0N 55.27\u00B0E" },
  { city: "SYDNEY", coords: "33.86\u00B0S 151.20\u00B0E" },
  { city: "TORONTO", coords: "43.65\u00B0N 79.38\u00B0W" },
];

export default function RouteHero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % DESTINATIONS.length);
        setVisible(true);
      }, 450);
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  const dest = DESTINATIONS[index];

  return (
    <section className="relative bg-deepwater text-paper overflow-hidden">
      {/* Chart-grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#F7F5F0 1px, transparent 1px), linear-gradient(90deg, #F7F5F0 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-site px-5 md:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
        {/* The route */}
        <div className="mb-12 md:mb-16">
          <svg
            viewBox="0 0 1200 240"
            className="w-full h-auto"
            fill="none"
            role="img"
            aria-label="A route line drawn from Sialkot, Pakistan across two oceans toward world destinations"
          >
            {/* Route arc */}
            <path
              className="route-path"
              d="M 90 170 C 340 40, 760 40, 1110 150"
              stroke="#E85D26"
              strokeWidth="1.5"
            />
            {/* Faint companion lanes */}
            <path
              d="M 90 170 C 380 90, 720 210, 1110 150"
              stroke="#1E6E6E"
              strokeWidth="0.75"
              opacity="0.35"
            />

            {/* Origin node — Sialkot */}
            <g className="route-node">
              <circle cx="90" cy="170" r="5" fill="#E85D26" />
              <circle cx="90" cy="170" r="11" stroke="#E85D26" strokeWidth="0.75" opacity="0.5" />
              <text
                x="90"
                y="205"
                fill="#F7F5F0"
                fontFamily="'IBM Plex Mono', monospace"
                fontSize="13"
                letterSpacing="2"
              >
                SIALKOT
              </text>
              <text
                x="90"
                y="224"
                fill="#8A93A0"
                fontFamily="'IBM Plex Mono', monospace"
                fontSize="11"
                letterSpacing="1.5"
              >
                32.49&#176;N 74.53&#176;E
              </text>
            </g>

            {/* Destination node — cycling label */}
            <g className="route-dest">
              <circle cx="1110" cy="150" r="5" fill="#F7F5F0" />
              <text
                x="1110"
                y="185"
                textAnchor="end"
                fill="#F7F5F0"
                fontFamily="'IBM Plex Mono', monospace"
                fontSize="13"
                letterSpacing="2"
                className="dest-label"
                opacity={visible ? 1 : 0}
              >
                {dest.city}
              </text>
              <text
                x="1110"
                y="204"
                textAnchor="end"
                fill="#8A93A0"
                fontFamily="'IBM Plex Mono', monospace"
                fontSize="11"
                letterSpacing="1.5"
                className="dest-label"
                opacity={visible ? 1 : 0}
              >
                {dest.coords}
              </text>
            </g>
          </svg>
        </div>

        {/* Headline block */}
        <div className="max-w-3xl">
          <h1 className="hero-rise hero-rise-1 font-display font-bold leading-[1.05] tracking-tight text-[clamp(2.4rem,6vw,4.6rem)]">
            Two oceans between your customers and our manufacturing network.
            <span className="text-signal"> One contract closes the distance.</span>
          </h1>
          <p className="hero-rise hero-rise-2 mt-6 text-lg md:text-xl text-paper/75 leading-relaxed max-w-2xl">
            Product development, production, and quality control in Pakistan —
            managed end to end, accountable to you.
          </p>
          <div className="hero-rise hero-rise-3 mt-9 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">
              Book a consultation
            </Link>
            <Link href="/first-article" className="btn-ghost">
              Start with a First Article
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
