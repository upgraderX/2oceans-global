import Link from "next/link";
import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "The First Article — Test Us With One Sample",
  description:
    "The First Article: a flat-fee engagement — product assessment, manufacturer selection, a physical sample in your hands, and an annotated QC report. The low-risk way to start manufacturing in Pakistan.",
};

const INCLUDED = [
  { name: "Product assessment", copy: "We review your product — spec, sample, or idea — and define materials, construction, and target quality." },
  { name: "Manufacturer selection", copy: "We identify the right production setup within our vetted network for your specific product." },
  { name: "A physical sample", copy: "Made to your specification and shipped to your door, anywhere in the world." },
  { name: "An annotated QC report", copy: "What we checked, what we found, what we'd change for production — photographed and documented." },
  { name: "A production quotation", copy: "If the sample earns it: unit pricing by quantity, lead times, and terms — so the next step is already mapped." },
];

const FAQ = [
  { q: "How long does it take?", a: "Typically 2–4 weeks from brief to sample in your hands, depending on product complexity." },
  { q: "What does it cost?", a: "A flat fee, confirmed before we begin — it depends on the product category and sample complexity. Ask us on the intro call." },
  { q: "Am I committed to production afterward?", a: "No. The First Article is complete in itself. If you proceed to production, great — if not, you keep the sample, the report, and everything you learned." },
  { q: "What if the sample isn't right?", a: "That's partly the point — better to find out at sample stage than in a container. We revise per your feedback; revision terms are agreed upfront." },
];

export default function FirstArticlePage() {
  return (
    <>
      <PageIntro
        eyebrow="FA-001 · The First Article"
        title="Don't trust us. Test us."
        lede='In manufacturing, the "first article" is the first approved piece off the line — the one everything after is measured against. Ours works the same way: one flat-fee engagement that ends with a physical sample in your hands and a documented verdict on your product.'
        dark
      />

      <section className="mx-auto max-w-site px-5 md:px-8 py-16 md:py-24">
        <p className="eyebrow mb-8">What's included</p>
        <ol className="space-y-px bg-mist/30 border border-mist/30 rounded overflow-hidden">
          {INCLUDED.map((item, i) => (
            <li key={item.name} className="bg-paper p-7 md:p-8 grid gap-3 md:grid-cols-12">
              <p className="font-mono text-sm text-signal md:col-span-1">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="font-display font-bold text-lg md:col-span-4">{item.name}</h2>
              <p className="text-deepwater/75 leading-relaxed text-[15px] md:col-span-7">{item.copy}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-x-14 gap-y-8 md:grid-cols-2 max-w-4xl">
          {FAQ.map((f) => (
            <div key={f.q}>
              <h3 className="font-display font-bold text-lg">{f.q}</h3>
              <p className="mt-2 text-sm text-deepwater/75 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-signal rounded p-8 md:p-10 bg-deepwater text-paper max-w-3xl">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-signal mb-3">
            Start here
          </p>
          <p className="font-display font-bold text-2xl">
            One flat fee. One sample. One honest report.
          </p>
          <p className="mt-3 text-paper/70 text-sm leading-relaxed">
            Tell us about your product and we'll confirm the fee and timeline
            on a short intro call — usually the same week.
          </p>
          <Link href="/contact" className="btn-primary mt-7 inline-flex">
            Start with a First Article
          </Link>
        </div>
      </section>
    </>
  );
}
