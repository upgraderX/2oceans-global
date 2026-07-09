export default function Slot({ id, label, note, ratio = "aspect-[4/5]", className = "" }) {
  return (
    <figure className={`cat-img relative ${ratio} w-full bg-slotbg overflow-hidden transition-colors duration-300 ${className}`}>
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
    </figure>
  );
}
