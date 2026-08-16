import PageIntro from "@/components/PageIntro";
import CloseCTA from "@/components/CloseCTA";

export const metadata = {
  title: "How It Works — Working With 2 Oceans Global",
  description:
    "How a manufacturing project runs with 2 Oceans Global: consultation, product review, quotation, sampling, production, quality assurance, packaging, shipping — and communication throughout.",
};

const STAGES = [
  { n: "01", name: "It starts with a conversation", artifact: "Project brief", copy: "Tell us what you want to make — a finished spec, a competitor sample, or just an idea. A consultation call maps your product, target market, quantities, and timeline. No commitment, no fee." },
  { n: "02", name: "Product review", artifact: "Feasibility notes", copy: "We assess materials, construction, and the right manufacturing setup within our network for your specific product — and tell you honestly what will work, what won't, and what it should cost to make." },
  { n: "03", name: "Quotation", artifact: "Quote sheet", copy: "A clear, itemized quotation: unit pricing by quantity, sampling cost, tooling if any, lead times, and shipping terms. Everything in writing before anything begins." },
  { n: "04", name: "Sampling", artifact: "Physical sample + sample report", copy: "We produce a physical sample and put it in your hands. You review, we revise — production doesn't start until you've approved exactly what will be made." },
  { n: "05", name: "Production", artifact: "Production schedule + updates", copy: "We plan and supervise the run. You get a schedule and progress updates on a set rhythm — you never chase anyone for information." },
  { n: "06", name: "Quality assurance", artifact: "QC photo report", copy: "Documented checkpoints during production and a pre-shipment inspection with photos on every order. Third-party inspection (SGS, QIMA, Intertek) available on request. Defect liability is defined in writing in your contract." },
  { n: "07", name: "Packaging & branding", artifact: "Packing list", copy: "Your labels, your tags, your packaging — retail-ready or bulk, packed to your specification and documented." },
  { n: "08", name: "Shipping & delivery", artifact: "Bill of lading + export documents", copy: "Export documentation, customs, and freight coordinated by us — EXW, FOB, CIF, or DDP depending on your project. You receive finished goods, ready for your business." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro
        eyebrow="How it works"
        title="One process. Eight stages. A document at every step."
        lede="This is what working with us looks like from first call to delivered goods — and how communication runs throughout: one point of contact, a set update rhythm, and everything in writing."
      />

      <section className="mx-auto max-w-site px-5 md:px-8 pb-16 md:pb-24">
        <ol className="space-y-px bg-mist/30 border border-mist/30 rounded overflow-hidden">
          {STAGES.map((s) => (
            <li key={s.n} className="bg-paper p-7 md:p-9 grid gap-4 md:grid-cols-12 md:items-start">
              <p className="font-mono text-sm text-signal md:col-span-1">{s.n}</p>
              <div className="md:col-span-7">
                <h2 className="font-display font-bold text-xl">{s.name}</h2>
                <p className="mt-2 text-deepwater/75 leading-relaxed text-[15px]">{s.copy}</p>
              </div>
              <p className="md:col-span-4 md:text-right font-mono text-[10px] tracking-[0.18em] uppercase text-meridian md:pt-1.5">
                You receive: {s.artifact}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 border border-mist/40 rounded p-8 md:p-10 max-w-3xl">
          <p className="eyebrow mb-4">Communication, throughout</p>
          <p className="text-deepwater/80 leading-relaxed">
            You have one point of contact at 2 Oceans Global for the life of your
            project. Updates come on an agreed rhythm — not when you ask, but
            before you have to. Questions get answered within one business day.
            Problems are raised by us, early, with a proposed solution — that's
            what accountability means.
          </p>
        </div>
      </section>

      <CloseCTA title="Ready to see it in practice?" accent="Start with a conversation." />
    </>
  );
}
