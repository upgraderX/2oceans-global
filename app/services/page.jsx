import PageIntro from "@/components/PageIntro";
import CloseCTA from "@/components/CloseCTA";

export const metadata = {
  title: "Services — 2 Oceans Global",
  description:
    "Product development, production management, quality assurance, private label and OEM, and logistics — manufacturing in Pakistan managed end to end.",
};

const SERVICES = [
  {
    name: "Product Development & Sourcing",
    outcome: "From idea to production-ready.",
    copy: "Whether you arrive with a finished tech pack or a photo of something you want to improve, we turn it into a production-ready specification: materials, construction, costing, and the right manufacturing setup within our network for the job.",
    artifact: "Quote sheet + specification",
  },
  {
    name: "Production Management",
    outcome: "You never chase a factory.",
    copy: "We plan the run, book capacity, manage materials, and supervise production day to day. You get a schedule and progress updates on a set rhythm — problems are raised by us, early, with solutions attached.",
    artifact: "Production schedule + progress updates",
  },
  {
    name: "Quality Assurance",
    outcome: "Evidence, not promises.",
    copy: "Documented checkpoints during production and a pre-shipment inspection with a photo report on every order. Third-party inspection through SGS, QIMA, or Intertek available on request. Defect liability is defined in writing before production begins.",
    artifact: "QC photo report",
  },
  {
    name: "Private Label & OEM",
    outcome: "Your brand, manufactured to standard.",
    copy: "Your labels, your tags, your packaging, your quality standard — executed consistently, order after order. We manage branding, labeling, and retail-ready packing as part of the same contract.",
    artifact: "Spec pack + branded goods",
  },
  {
    name: "Logistics, Export & Delivery",
    outcome: "Finished goods, at your door.",
    copy: "Export documentation, customs clearance, and freight coordinated by us — sea or air, EXW, FOB, CIF, or DDP. One more thing you don't have to manage.",
    artifact: "Bill of lading + export documents",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Everything between your idea and your inventory."
        lede="Five services, one contract. Each stage produces a document you can hold us to — that's how accountability works here."
      />

      <section className="mx-auto max-w-site px-5 md:px-8 pb-16 md:pb-24 space-y-6">
        {SERVICES.map((s) => (
          <div key={s.name} className="border border-mist/40 rounded p-8 md:p-10 grid gap-6 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="font-display font-bold text-2xl leading-snug">{s.name}</h2>
              <p className="mt-2 font-serif italic text-deepwater/60">{s.outcome}</p>
            </div>
            <div className="md:col-span-8">
              <p className="text-deepwater/80 leading-relaxed">{s.copy}</p>
              <p className="mt-5 font-mono text-[10px] tracking-[0.18em] uppercase text-meridian">
                You receive: {s.artifact}
              </p>
            </div>
          </div>
        ))}
      </section>

      <CloseCTA title="One contract covers all five." accent="Start with a conversation." />
    </>
  );
}
