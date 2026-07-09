import Link from "next/link";
import ColdOpen from "@/components/ColdOpen";
import ThreadRail from "@/components/ThreadRail";
import Reveal from "@/components/Reveal";
import FilmFrame from "@/components/FilmFrame";

const STAGES = [
  ["01", "Consultation", "Project brief"],
  ["02", "Product review", "Feasibility notes"],
  ["03", "Quotation", "Quote sheet"],
  ["04", "Sampling", "Physical sample"],
  ["05", "Production", "Schedule + updates"],
  ["06", "Inspection", "QC photo report"],
  ["07", "Packaging", "Packing list"],
  ["08", "Shipping", "Bill of lading"],
];

const FLAGSHIP = [
  ["Sports Goods", "sports-goods", "SIALKOT"],
  ["Gloves", "gloves", "SIALKOT"],
  ["Leather", "leather", "SIALKOT · LAHORE"],
];

const INDEX = [
  ["Sportswear & Activewear", "sportswear"],
  ["Apparel & Textiles", "apparel-textiles"],
  ["Hotel & Home Textiles", "hotel-home-textiles"],
  ["Bags & Totes", "bags-totes"],
  ["Uniforms, Workwear & Safety", "uniforms-workwear"],
  ["Promotional Products", "promotional-products"],
  ["Beauty & Grooming Tools", "beauty-grooming-tools"],
];

export default function Home() {
  return (
    <>
      <ThreadRail />

      {/* SCENE 00 · Cold open */}
      <ColdOpen />

      {/* SCENE 01 · The hands */}
      <section className="bg-deepwater text-paper">
        <div className="mx-auto max-w-site px-5 md:px-8 py-24 md:py-36">
          <Reveal>
            <p className="eyebrow-light mb-8">Scene 01 — The hands</p>
            <FilmFrame
              frame="FR-01"
              title="Hands stitching a match ball, macro. Thread pulled taut."
              note="Hand-stitching — Sialkot · ~700 stitches per match ball"
            />
          </Reveal>
          <Reveal className="rv-d1">
            <p className="mt-14 font-display font-bold tracking-tight leading-[1.05] text-[clamp(1.9rem,4.8vw,3.8rem)] max-w-4xl">
              Craftsmanship is Pakistan&rsquo;s advantage.
              <span className="text-signal"> Knowing whose hands to trust is ours.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* SCENE 02 · The model */}
      <section className="bg-paper text-deepwater">
        <div className="mx-auto max-w-site px-5 md:px-8 py-24 md:py-36">
          <Reveal>
            <p className="eyebrow mb-8">Scene 02 — The model</p>
            <h2 className="font-display font-bold tracking-tight leading-[1.0] text-[clamp(2.4rem,7vw,6rem)]">
              You work with
              <br />
              one company.
            </h2>
          </Reveal>
          <Reveal className="rv-d1">
            <div className="mt-16 flex items-center gap-4 md:gap-8 font-mono text-[10px] md:text-[12px] tracking-[0.2em] text-deepwater/70">
              <span className="whitespace-nowrap">YOUR BRAND</span>
              <span aria-hidden="true" className="flex-1 border-t border-deepwater/30 relative">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-signal" />
              </span>
              <span className="whitespace-nowrap text-deepwater">2 OCEANS GLOBAL</span>
              <span aria-hidden="true" className="flex-1 border-t border-dashed border-deepwater/25" />
              <span className="whitespace-nowrap text-deepwater/40">EVERYTHING ELSE</span>
            </div>
            <p className="mt-8 text-deepwater/70 max-w-lg leading-relaxed">
              Production lines, materials, quality control, customs, freight —
              managed on our side of the line. One contract. One point of
              accountability.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SCENE 03 · The journey (filmstrip) */}
      <section className="bg-deepwater text-paper overflow-hidden">
        <div className="mx-auto max-w-site px-5 md:px-8 pt-24 md:pt-36 pb-10 flex items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow-light mb-4">Scene 03 — The journey</p>
            <h2 className="font-display font-bold tracking-tight text-[clamp(1.8rem,4vw,3rem)]">
              Eight stages. A document at every one.
            </h2>
          </Reveal>
          <p aria-hidden="true" className="hidden md:block font-mono text-[11px] tracking-[0.25em] text-paper/40 pb-2">
            DRAG &rarr;
          </p>
        </div>
        <div className="strip gap-px bg-paper/10 border-y border-paper/10 pl-5 md:pl-[max(2rem,calc((100vw-1280px)/2+2rem))]">
          {STAGES.map(([n, name, artifact]) => (
            <div
              key={n}
              className="bg-deepwater w-[72vw] sm:w-[340px] md:w-[380px] px-7 py-12 md:py-16 flex flex-col justify-between min-h-[300px] md:min-h-[360px]"
            >
              <p className="font-mono text-signal text-sm">{n}</p>
              <div>
                <p className="font-display font-bold text-2xl md:text-3xl">{name}</p>
                <p className="mt-3 font-mono text-[10px] tracking-[0.2em] uppercase text-meridian">
                  You receive: {artifact}
                </p>
              </div>
            </div>
          ))}
          <div className="bg-deepwater w-[72vw] sm:w-[340px] px-7 py-12 md:py-16 flex flex-col justify-center min-h-[300px] md:min-h-[360px]">
            <Link href="/how-it-works" className="font-display font-bold text-2xl text-signal hover:text-paper transition-colors">
              The full process &rarr;
            </Link>
          </div>
        </div>
        <div className="pb-24 md:pb-36" />
      </section>

      {/* SCENE 04 · The index */}
      <section className="bg-paper text-deepwater">
        <div className="mx-auto max-w-site px-5 md:px-8 py-24 md:py-36">
          <Reveal>
            <p className="eyebrow mb-10">Scene 04 — What we make</p>
          </Reveal>
          <div className="border-t border-deepwater/20">
            {FLAGSHIP.map(([name, slug, city]) => (
              <Link
                key={slug}
                href={`/industries/${slug}`}
                className="index-row group flex items-baseline justify-between gap-6 border-b border-deepwater/20 py-7 md:py-9"
              >
                <span className="font-display font-bold tracking-tight leading-none text-[clamp(2rem,6vw,5rem)]">
                  {name}
                </span>
                <span className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] whitespace-nowrap opacity-60 group-hover:opacity-100">
                  {city} &rarr;
                </span>
              </Link>
            ))}
            {INDEX.map(([name, slug]) => (
              <Link
                key={slug}
                href={`/industries/${slug}`}
                className="index-row group flex items-baseline justify-between gap-6 border-b border-deepwater/20 py-4 md:py-5"
              >
                <span className="font-display font-bold text-lg md:text-2xl">{name}</span>
                <span aria-hidden="true" className="font-mono text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8 font-mono text-[10px] tracking-[0.2em] uppercase text-mist">
            Every industry. One contract. One standard.
          </p>
        </div>
      </section>

      {/* SCENE 05 · The evidence */}
      <section className="bg-deepwater text-paper">
        <div className="mx-auto max-w-site px-5 md:px-8 py-24 md:py-36">
          <Reveal>
            <p className="eyebrow-light mb-8">Scene 05 — The evidence</p>
            <h2 className="font-display font-bold tracking-tight leading-[1.05] text-[clamp(1.9rem,4.5vw,3.6rem)] max-w-3xl">
              Accountability, on paper.
            </h2>
          </Reveal>
          <Reveal className="rv-d1">
            <div className="mt-14 grid gap-8 md:grid-cols-12 items-end">
              <div className="md:col-span-8">
                <FilmFrame
                  frame="DOC-01"
                  title="A real QC inspection report — annotated, page by page."
                  note="Pre-shipment inspection · photographed · defect liability in writing"
                  ratio="aspect-[4/3] md:aspect-[16/9]"
                />
              </div>
              <div className="md:col-span-4 pb-2">
                <p className="text-paper/70 leading-relaxed">
                  Every order ships with a documented inspection. Third-party
                  verification available: SGS · QIMA · Intertek.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SCENE 06 · The founder */}
      <section className="bg-paper text-deepwater">
        <div className="mx-auto max-w-site px-5 md:px-8 py-24 md:py-36">
          <Reveal>
            <p className="eyebrow mb-10">Scene 06 — The person behind it</p>
            <blockquote className="font-serif italic leading-[1.15] text-[clamp(1.8rem,5vw,4rem)] max-w-4xl">
              &ldquo;I&rsquo;ve sat on your side of the table. I built the
              partner I wished existed.&rdquo;
            </blockquote>
            <p className="mt-8 font-mono text-[11px] tracking-[0.22em] uppercase text-mist">
              Habib ur Rehman Ali · Founder, 2 Oceans Global
            </p>
            <Link href="/about" className="mt-6 inline-block text-sm font-medium hover:text-signal transition-colors">
              Read the letter &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SCENE 07 · The first article */}
      <section className="bg-deepwater text-paper border-y border-signal/40">
        <div className="mx-auto max-w-site px-5 md:px-8 py-24 md:py-36 grid gap-10 md:grid-cols-12 items-center">
          <Reveal className="md:col-span-8">
            <p className="font-mono text-[11px] tracking-[0.3em] text-signal">FA-001</p>
            <h2 className="mt-5 font-display font-bold tracking-tight leading-[1.0] text-[clamp(2.2rem,6vw,5rem)]">
              Don&rsquo;t trust us.
              <br />
              Test us.
            </h2>
            <p className="mt-6 text-paper/70 max-w-md leading-relaxed">
              One flat fee. One physical sample in your hands. One honest,
              annotated report.
            </p>
          </Reveal>
          <Reveal className="md:col-span-4 rv-d1">
            <Link href="/first-article" className="btn-primary w-full md:w-auto">
              Start with a First Article
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SCENE 08 · Arrival */}
      <section className="bg-deepwater text-paper">
        <div className="mx-auto max-w-site px-5 md:px-8 py-28 md:py-44 text-center">
          <Reveal>
            <p className="font-mono text-[10px] tracking-[0.3em] text-signal">
              FINAL WAYPOINT — YOUR DOOR
            </p>
            <h2 className="mt-6 font-display font-bold tracking-tight leading-[1.0] text-[clamp(2.4rem,7vw,6rem)]">
              One partner in Pakistan.
              <br />
              <span className="text-signal">Zero guesswork.</span>
            </h2>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">Book a consultation</Link>
              <Link href="/contact#quote" className="btn-ghost">Request a quote</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
