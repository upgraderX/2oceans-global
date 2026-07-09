import PageIntro from "@/components/PageIntro";
import CloseCTA from "@/components/CloseCTA";

export const metadata = {
  title: "About — 2 Oceans Global",
  description:
    "2 Oceans Global is a founder-led manufacturing partner based in Lahore, Pakistan — running production for global brands with one contract and one point of accountability.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Built by someone who has sat on your side of the table."
        lede="2 Oceans Global exists because managing overseas manufacturing shouldn't require becoming an expert in it."
      />

      <section className="mx-auto max-w-site px-5 md:px-8 pb-16 md:pb-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="font-serif text-lg leading-relaxed text-deepwater/85 space-y-5 max-w-xl">
              <p>
                I've built brands. I've placed orders with suppliers I'd never
                met, wired deposits, and waited. I know what it feels like when
                the updates stop coming, when the sample doesn't match the
                shipment, and when nobody is accountable for the result.
              </p>
              <p>
                2 Oceans Global is the partner I wished existed then: one
                company that takes responsibility for the entire process —
                development, production, quality, shipping — with everything
                documented and one person who always answers.
              </p>
              <p>
                We're based in Lahore, working across Pakistan's manufacturing
                heartland — Sialkot, Faisalabad, Karachi. The craft here is
                real. Our job is connecting it to your standards, and standing
                behind the result.
              </p>
              <p className="font-sans text-sm text-deepwater/60">
                — Habib ur Rehman Ali, Founder
              </p>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="flex items-center justify-center border border-dashed border-mist/50 rounded bg-deepwater/[0.03] py-24">
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-mist">
                Awaiting asset — founder photograph
              </p>
            </div>
            <div className="mt-8 border border-mist/40 rounded p-7">
              <p className="eyebrow mb-4">How we operate</p>
              <ul className="space-y-3 text-sm text-deepwater/80 leading-relaxed">
                <li>Everything in writing — quotes, timelines, liability.</li>
                <li>Updates before you ask, on an agreed rhythm.</li>
                <li>Problems raised early, with solutions attached.</li>
                <li>We reply within one business day. Always.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CloseCTA title="Talk to the person behind it." accent="Book a call." />
    </>
  );
}
