import Link from "next/link";
import RouteHero from "@/components/RouteHero";

/*
 * Homepage — Nine Acts (per FINAL blueprint v2.1)
 * A1 fully built. A2, A4, A9 built with final copy (no photography required).
 * A3, A5, A6, A7, A8 are structured scaffolds awaiting assets
 * (craft photography, QC report scans, founder photo) — marked with
 * mono "AWAITING ASSET" frames, visible in dev, removed before launch.
 */

const SERVICES = [
  { name: "Product Development & Sourcing", artifact: "Quote sheet", copy: "From idea or existing product to a production-ready specification." },
  { name: "Production Management", artifact: "Production schedule", copy: "We plan, run, and supervise manufacturing so you never chase a factory." },
  { name: "Quality Assurance", artifact: "QC photo report", copy: "In-line and pre-shipment inspection, documented on every order." },
  { name: "Private Label & OEM", artifact: "Spec pack", copy: "Your brand, your packaging, your labeling — manufactured to standard." },
  { name: "Logistics & Export", artifact: "Bill of lading", copy: "Documentation, freight, and delivery to your door, coordinated by us." },
];

const FAQ = [
  { q: "Do you own the factories?", a: "We manage a vetted manufacturing network across Pakistan's industrial hubs. That means every project gets the production line best suited to it — with no conflict of interest, and one company accountable to you for the result: us." },
  { q: "What are typical MOQs?", a: "It varies by product and industry. Many programs start in the low hundreds of units; we confirm exact minimums in your quotation." },
  { q: "How is quality controlled?", a: "Documented checkpoints during production and a pre-shipment inspection with a photo report on every order. Third-party inspection (SGS, QIMA, Intertek) is available on request." },
  { q: "What are the payment terms?", a: "Agreed per project and stated clearly in your contract before production begins." },
  { q: "How long does production take?", a: "Sampling typically takes 2–4 weeks; production lead times depend on product and quantity and are committed in writing with your order." },
  { q: "Which shipping terms do you support?", a: "EXW, FOB, CIF, and DDP depending on the project — we handle export documentation and freight coordination either way." },
];

function AwaitingAsset({ label }) {
  return (
    <div className="flex items-center justify-center border border-dashed border-mist/50 rounded bg-deepwater/[0.03] py-20">
      <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-mist">
        Awaiting asset — {label}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* A1 · Two Oceans */}
      <RouteHero />

      {/* A2 · One line of tension, then the model */}
      <section className="mx-auto max-w-site px-5 md:px-8 py-20 md:py-32">
        <p className="font-serif italic text-xl md:text-2xl text-deepwater/70 max-w-2xl">
          Most overseas manufacturing relationships end where the problems begin.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3 items-stretch">
          <div className="border border-mist/40 rounded p-8 flex flex-col justify-center">
            <p className="eyebrow mb-3">Your side</p>
            <p className="font-display font-bold text-2xl">Your brand</p>
            <p className="mt-2 text-sm text-deepwater/70">One contact. One contract. Full visibility.</p>
          </div>
          <div className="border border-signal rounded p-8 flex flex-col justify-center bg-deepwater text-paper">
            <p className="eyebrow-light mb-3">One partner</p>
            <p className="font-display font-bold text-2xl">2 Oceans Global</p>
            <p className="mt-2 text-sm text-paper/70">We own the process and the outcome.</p>
          </div>
          <div className="border border-mist/40 rounded p-8 flex flex-col justify-center">
            <p className="eyebrow mb-3">Managed by us</p>
            <p className="font-display font-bold text-2xl">Our manufacturing network</p>
            <p className="mt-2 text-sm text-deepwater/70">Production lines, materials, QC, customs, freight — contained on our side.</p>
          </div>
        </div>

        <p className="mt-8 font-mono text-[11px] tracking-[0.18em] uppercase text-mist">
          You work with one company. We manage everything behind it.
        </p>
      </section>

      {/* A3 · Made by Hand — awaiting craft photography */}
      <section className="bg-deepwater text-paper">
        <div className="mx-auto max-w-site px-5 md:px-8 py-20 md:py-32">
          <p className="eyebrow-light mb-6">Made by hand</p>
          <h2 className="font-display font-bold leading-[1.08] tracking-tight text-[clamp(1.9rem,4.5vw,3.4rem)] max-w-3xl">
            Craftsmanship is Pakistan&rsquo;s manufacturing advantage.
            <span className="text-signal"> Knowing whose hands to trust is ours.</span>
          </h2>
          <div className="mt-12">
            <AwaitingAsset label="A3 multi-industry craft photography sequence" />
          </div>
        </div>
      </section>

      {/* A4 · What we run */}
      <section className="mx-auto max-w-site px-5 md:px-8 py-20 md:py-32">
        <p className="eyebrow mb-6">What we run</p>
        <h2 className="font-display font-bold tracking-tight text-3xl md:text-4xl max-w-2xl">
          Every stage of production, with a document to prove it.
        </h2>
        <div className="mt-12 grid gap-px bg-mist/30 border border-mist/30 rounded overflow-hidden md:grid-cols-5">
          {SERVICES.map((s) => (
            <div key={s.name} className="bg-paper p-6 flex flex-col">
              <p className="font-display font-bold text-base leading-snug">{s.name}</p>
              <p className="mt-3 text-sm text-deepwater/70 leading-relaxed flex-1">{s.copy}</p>
              <p className="mt-5 font-mono text-[10px] tracking-[0.18em] uppercase text-meridian">
                Artifact: {s.artifact}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* A5 · Where we're strongest — awaiting industry photography */}
      <section className="mx-auto max-w-site px-5 md:px-8 pb-20 md:pb-32">
        <p className="eyebrow mb-6">Where we&rsquo;re strongest</p>
        <div className="grid gap-6 md:grid-cols-3">
          {["Sports Goods — Sialkot", "Gloves — Sialkot", "Leather — Sialkot"].map((label) => (
            <AwaitingAsset key={label} label={label} />
          ))}
        </div>
        <p className="mt-8 font-mono text-[12px] tracking-wide text-mist leading-loose">
          ALSO: SPORTSWEAR &amp; ACTIVEWEAR · APPAREL &amp; TEXTILES · HOTEL &amp; HOME TEXTILES ·
          BAGS &amp; TOTES · UNIFORMS &amp; WORKWEAR · PROMOTIONAL PRODUCTS · BEAUTY &amp; GROOMING TOOLS
        </p>
      </section>

      {/* A6 · Show the Work — awaiting real QC report */}
      <section className="bg-deepwater text-paper">
        <div className="mx-auto max-w-site px-5 md:px-8 py-20 md:py-32">
          <p className="eyebrow-light mb-6">Show the work</p>
          <h2 className="font-display font-bold tracking-tight text-3xl md:text-4xl max-w-2xl">
            This is what working with us looks like.
          </h2>
          <div className="mt-12">
            <AwaitingAsset label="Anonymized QC inspection report — explorable" />
          </div>
          <p className="mt-8 text-sm text-paper/60 max-w-2xl leading-relaxed">
            Third-party inspection available on request: SGS · QIMA · Intertek.
            Defect liability defined in writing, in every contract.
          </p>
        </div>
      </section>

      {/* A7 · Why Pakistan — copy scaffold */}
      <section className="mx-auto max-w-site px-5 md:px-8 py-20 md:py-32">
        <p className="eyebrow mb-6">Why Pakistan</p>
        <h2 className="font-display font-bold tracking-tight text-3xl md:text-4xl max-w-2xl">
          The credible China+1.
        </h2>
        <p className="mt-6 text-lg text-deepwater/75 leading-relaxed max-w-2xl">
          World-class manufacturing clusters, generations of craft, GSP+ duty-free
          access to the European Union — and a partner on the ground who knows
          exactly where your product should be made.
        </p>
        <Link href="/why-pakistan" className="mt-8 inline-block btn-ghost-dark">
          Explore manufacturing in Pakistan
        </Link>
      </section>

      {/* A8 · Founder + The First Article — awaiting founder photo */}
      <section className="mx-auto max-w-site px-5 md:px-8 pb-20 md:pb-32">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <p className="eyebrow mb-6">A note from the founder</p>
            <AwaitingAsset label="Founder letter + photograph — serif voice" />
          </div>
          <div className="border border-mist/40 rounded p-8 md:p-10">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-signal mb-4">
              FA-001
            </p>
            <h3 className="font-display font-bold text-2xl md:text-3xl">The First Article</h3>
            <p className="mt-4 text-deepwater/75 leading-relaxed">
              The low-risk way to test us. A flat-fee engagement: product
              assessment, manufacturer selection, a physical sample in your
              hands, and an annotated QC report.
            </p>
            <Link href="/first-article" className="mt-8 inline-block btn-primary">
              Start with a First Article
            </Link>
          </div>
        </div>
      </section>

      {/* A9 · FAQ + close */}
      <section className="bg-deepwater text-paper">
        <div className="mx-auto max-w-site px-5 md:px-8 py-20 md:py-32">
          <p className="eyebrow-light mb-6">Questions, answered plainly</p>
          <div className="grid gap-x-14 gap-y-10 md:grid-cols-2 max-w-5xl">
            {FAQ.map((item) => (
              <div key={item.q}>
                <h3 className="font-display font-bold text-lg">{item.q}</h3>
                <p className="mt-2.5 text-sm text-paper/70 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-16 border-t border-paper/15 text-center">
            <h2 className="font-display font-bold tracking-tight text-[clamp(2rem,5vw,3.6rem)]">
              One partner in Pakistan.
              <span className="text-signal"> Zero guesswork.</span>
            </h2>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">Book a consultation</Link>
              <Link href="/contact#quote" className="btn-ghost">Request a quote</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
