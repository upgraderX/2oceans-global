import fs from "fs";
import path from "path";
import Image from "next/image";

// Finds /public/images/{base}.{jpg|jpeg|png|webp} at build time.
// Upload an image with the right name and it appears automatically.
function findImage(base) {
  if (!base) return null;
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    const rel = `/images/${base}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", rel))) return rel;
  }
  return null;
}

export default function Slot({ id, label, note, img, ratio = "aspect-[4/5]", className = "" }) {
  const src = findImage(img);

  return (
    <figure
      className={`cat-img relative ${ratio} w-full bg-slotbg overflow-hidden transition-colors duration-300 ${className}`}
    >
      {src ? (
        <>
          <Image
            src={src}
            alt={label}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
          />
          <span className="absolute top-3 left-3 font-mono text-[9px] tracking-[0.2em] bg-paper/90 text-deepwater px-2 py-1">
            {id}
          </span>
        </>
      ) : (
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
