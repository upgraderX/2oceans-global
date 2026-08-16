export default function PageIntro({ eyebrow, title, lede, dark = false }) {
  return (
    <section className={dark ? "bg-deepwater text-paper" : ""}>
      <div className="mx-auto max-w-site px-5 md:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
        <p className={dark ? "eyebrow-light mb-5" : "eyebrow mb-5"}>{eyebrow}</p>
        <h1 className="font-display font-bold leading-[1.08] tracking-tight text-[clamp(2rem,5vw,3.8rem)] max-w-3xl">
          {title}
        </h1>
        {lede && (
          <p className={`mt-6 text-lg leading-relaxed max-w-2xl ${dark ? "text-paper/75" : "text-deepwater/75"}`}>
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
