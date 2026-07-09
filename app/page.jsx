import Link from "next/link";
import Reveal from "@/components/Reveal";
import Slot from "@/components/Slot";
import { INDUSTRIES } from "@/lib/industries";

const MARQUEE = "SPORTS GOODS — GLOVES — LEATHER — SPORTSWEAR — TEXTILES — HOTEL LINEN — TOWELS — BAGS — UNIFORMS — PROMO — ";

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

export default function Home() {
  const flagship = INDUSTRIES.filter((i) => i.beachhead);
  const rest = INDUSTRIES.filter((i) => !i.beachhead);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-site px-5 md:px-8 pt-14 md:pt-24 pb-16 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Private label &amp; OEM manufacturing — Pakistan</p>
            <h1 className="font-display font-bold uppercase tracking-tight leading-[0.95] text-[clamp(2.8rem,7.5vw,6.5rem)]">
              We make
              <br />
              the gear.
              <br />
              <span className="text-signal">You build the brand.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-deepwater/70 leading-relaxed max-w-xl">
              Sports goods, gloves, leather, and textiles — manufactured in
              Pakistan, managed end to end, accountable to you from sample to
              shipment.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">Book a consultation</Link>
              <Link href="/first-article" className="btn-ghost-dark">Start with a sample</Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Slot id="HERO-01" img="hero-01" label="Hero product shot" note="Match ball / gloves / leather — studio" ratio="aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee bg-deepwater text-paper border-y border-deepwater" aria-hidden="true">
        <div className="marquee-track py-3.5">
          <span className="font-display font-semibold uppercase tracking-[0.12em] text-sm md:text-base pr-4">{MARQUEE}</span>
          <span className="font-display font-semibold uppercase tracking-[0.12em] text-sm md:text-base pr-4">{MARQUEE}</span>
        </div>
      </div>

      {/* Category grid */}
      <section className="mx-auto max-w-site px-5 md:px-8 py-16 md:py-28" id="categories">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
            <h2 className="font-display font-bold uppercase tracking-tight leading-[0.95] text-[clamp(2rem,5vw,4rem)]">
              What we
              <br />
              manufacture
            </h2>
            <Link href="/industries" className="hidden md:inline-block font-mono text-[11px] tracking-[0.2em] uppercase text-deepwater/60 hover:text-signal transition-colors pb-2">
              All categories &rarr;
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {flagship.map((ind, i) => (
            <Link key={ind.slug} href={`/industries/${ind.slug}`} className="cat-tile group">
              <Slot
                id={`CAT-0${i + 1}`}
                img={`cat-${ind.slug}`}
                label={ind.name}
                ratio="aspect-[4/5]"
              />
              <div className="flex items-baseline justify-between pt-4">
                <p className="font-display font-semibold uppercase text-lg md:text-xl group-hover:text-signal transition-colors">
                  {ind.name}
                </p>
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-mist">{ind.city}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-5 grid gap-5 grid-cols-2 lg:grid-cols-4">
          {rest.map((ind, i) => (
            <Link key={ind.slug} href={`/industries/${ind.slug}`} className="cat-tile group">
              <Slot
                id={`CAT-${String(i + 4).padStart(2, "0")}`}
                img={`cat-${ind.slug}`}
                label={ind.name}
                ratio="aspect-square"
              />
              <div className="flex items-baseline justify-between pt-3">
                <p className="font-display font-semibold uppercase text-sm md:text-base group-hover:text-signal transition-colors">
                  {ind.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Craft band */}
      <section className="bg-deepwater text-paper">
        <div className="mx-auto max-w-site px-5 md:px-8 py-16 md:py-28">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <p className="eyebrow-light mb-6">Made by hand</p>
                <h2 className="font-display font-bold uppercase tracking-tight leading-[0.98] text-[clamp(1.9rem,4.5vw,3.4rem)]">
                  Craftsmanship is Pakistan&rsquo;s advantage.
                  <span className="text-signal"> Knowing whose hands to trust is ours.</span>
                </h2>
                <p className="mt-6 text-paper/65 leading-relaxed max-w-md">
                  Hand-stitched match balls. Cut and skived leather. Embroidery,
                  looms, inspection benches. Three generations of craft — and we
                  know exactly which workshop fits your product.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                <Slot id="CR-01" img="cr-01" label="Hand-stitching" note="Sialkot" ratio="aspect-[4/5]" className="!bg-harbor" />
                <Slot id="CR-02" img="cr-02" label="Leather cutting" note="Sialkot" ratio="aspect-[4/5]" className="!bg-harbor mt-8" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-site px-5 md:px-8 py-16 md:py-28">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
            <h2 className="font-display font-bold uppercase tracking-tight leading-[0.95] text-[clamp(2rem,5vw,4rem)]">
              Brief &rarr; shipped
            </h2>
            <Link href="/how-it-works" className="hidden md:inline-block font-mono text-[11px] tracking-[0.2em] uppercase text-deepwater/60 hover:text-signal transition-colors pb-2">
              The full process &rarr;
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-deepwater/15">
          {STAGES.map(([n, name, artifact]) => (
            <div key={n} className="border-r border-b border-deepwater/15 p-6 md:p-8">
              <p className="font-display font-bold text-signal text-3xl md:text-4xl">{n}</p>
              <p className="mt-4 font-display font-semibold uppercase text-base md:text-lg">{name}</p>
              <p className="mt-2 font-mono text-[9px] md:text-[10px] tracking-[0.16em] uppercase text-meridian">
                You receive: {artifact}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* First Article */}
      <section className="bg-signal text-paper">
        <div className="mx-auto max-w-site px-5 md:px-8 py-16 md:py-24 grid gap-10 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-8">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-paper/80">FA-001 · The First Article</p>
            <h2 className="mt-4 font-display font-bold uppercase tracking-tight leading-[0.95] text-[clamp(2.2rem,6vw,4.6rem)]">
              Don&rsquo;t trust us.
              <br />
              Test us.
            </h2>
            <p className="mt-5 text-paper/85 max-w-md leading-relaxed">
              One flat fee. One physical sample in your hands. One honest,
              annotated report.
            </p>
          </Reveal>
          <Reveal className="md:col-span-4 rv-d1">
            <Link href="/first-article" className="inline-flex items-center justify-center rounded-full uppercase tracking-[0.08em] text-xs md:text-sm font-semibold px-7 py-3.5 bg-deepwater text-paper hover:bg-black transition-colors w-full md:w-auto">
              Start with a sample
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Founder */}
      <section className="mx-auto max-w-site px-5 md:px-8 py-16 md:py-28">
        <Reveal>
          <p className="eyebrow mb-8">The person behind it</p>
          <blockquote className="font-serif italic leading-[1.15] text-[clamp(1.7rem,4.5vw,3.4rem)] max-w-4xl">
            &ldquo;I&rsquo;ve sat on your side of the table. I built the
            manufacturing partner I wished existed.&rdquo;
          </blockquote>
          <p className="mt-7 font-mono text-[11px] tracking-[0.22em] uppercase text-mist">
            Habib ur Rehman Ali · Founder
          </p>
          <Link href="/about" className="mt-5 inline-block text-sm font-semibold uppercase tracking-[0.08em] hover:text-signal transition-colors">
            Read the letter &rarr;
          </Link>
        </Reveal>
      </section>

      {/* Close */}
      <section className="bg-deepwater text-paper">
        <div className="mx-auto max-w-site px-5 md:px-8 py-20 md:py-32 text-center">
          <Reveal>
            <h2 className="font-display font-bold uppercase tracking-tight leading-[0.95] text-[clamp(2.2rem,6vw,5rem)]">
              One partner in Pakistan.
              <br />
              <span className="text-signal">Zero guesswork.</span>
            </h2>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">Book a consultation</Link>
              <Link href="/contact#quote" className="btn-ghost">Request a quote</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
