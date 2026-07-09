"use client";

import { useEffect, useState } from "react";

const WAYPOINTS = [
  { at: 0, label: "SIALKOT" },
  { at: 0.3, label: "PRODUCTION" },
  { at: 0.55, label: "INSPECTION" },
  { at: 0.78, label: "KARACHI PORT" },
  { at: 1, label: "YOUR DOOR" },
];

export default function ThreadRail() {
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setP(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="hidden xl:block fixed left-8 top-28 bottom-28 w-px z-40 pointer-events-none"
    >
      <div className="absolute inset-0 bg-mist/25" />
      <div
        className="absolute left-0 top-0 w-px bg-signal"
        style={{ height: `${p * 100}%` }}
      />
      {WAYPOINTS.map((w) => (
        <div key={w.label} className="absolute -left-[3.5px]" style={{ top: `${w.at * 100}%` }}>
          <span
            className={`block h-2 w-2 rounded-full transition-colors duration-500 ${
              p >= w.at - 0.01 ? "bg-signal" : "bg-mist/40"
            }`}
          />
          <span
            className={`absolute left-5 top-1/2 -translate-y-1/2 font-mono text-[9px] tracking-[0.25em] whitespace-nowrap transition-colors duration-500 ${
              p >= w.at - 0.01 ? "text-signal" : "text-mist/60"
            }`}
          >
            {w.label}
          </span>
        </div>
      ))}
    </div>
  );
}
