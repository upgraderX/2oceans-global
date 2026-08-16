"use client";

import { useState } from "react";

/*
 * Image slot.
 * Tries /images/{img}.png, then .jpg, then .jpeg, then .webp.
 * If none exist, falls back to the styled placeholder.
 * No build-time filesystem checks — works on any host.
 */
const EXTS = ["jpg", "png", "jpeg", "webp"];

export default function Slot({ id, label, note, img, ratio = "aspect-[4/5]", className = "" }) {
  const [attempt, setAttempt] = useState(0);
  const failed = !img || attempt >= EXTS.length;

  return (
    <figure
      className={`cat-img relative ${ratio} w-full bg-slotbg overflow-hidden transition-colors duration-300 ${className}`}
    >
      {!failed && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/${img}.${EXTS[attempt]}`}
            alt={label}
            loading="lazy"
            onError={() => setAttempt((a) => a + 1)}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute top-3 left-3 font-mono text-[9px] tracking-[0.2em] bg-paper/90 text-deepwater px-2 py-1">
            {id}
          </span>
        </>
      )}

      {failed && (
        <>
          <span className="absolute top-3.5 left-4 font-mono text-[10px] tracking-[0.22em] text-signal">
            {id}
          </span>
          <span className="absolute top-3.5 right-4 font-mono text-[9px] tracking-[0.22em] text-deepwater/25 uppercase">
            Image
          </span>
          <div className="absolute inset-0 flex items-center justify-center px-5">
            <p className="font-display font-semibold uppercase text-deepwater/15 text-center leading-tight text-[clamp(1rem,2.2vw,1.6rem)]">
              {label}
            </p>
          </div>
          {note && (
            <figcaption className="absolute bottom-3.5 left-4 right-4 font-mono text-[9px] tracking-[0.18em] text-deepwater/35 uppercase">
              {note}
            </figcaption>
          )}
        </>
      )}
    </figure>
  );
}
