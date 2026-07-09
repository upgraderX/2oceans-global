export default function FilmFrame({ frame, title, note, ratio = "aspect-[21/10] md:aspect-[21/9]" }) {
  return (
    <figure className={`relative ${ratio} w-full bg-deepwater border border-paper/10 overflow-hidden`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#F7F5F0 1px, transparent 1px), linear-gradient(90deg, #F7F5F0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <span className="absolute top-4 left-5 font-mono text-[10px] tracking-[0.25em] text-signal">
        {frame}
      </span>
      <span className="absolute top-4 right-5 font-mono text-[10px] tracking-[0.25em] text-paper/30">
        AWAITING FILM
      </span>
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <p className="font-display font-bold text-paper/25 text-center leading-tight text-[clamp(1.2rem,3vw,2.2rem)]">
          {title}
        </p>
      </div>
      <figcaption className="absolute bottom-4 left-5 right-5 font-mono text-[10px] md:text-[11px] tracking-[0.18em] text-paper/50 uppercase">
        {note}
      </figcaption>
    </figure>
  );
}
