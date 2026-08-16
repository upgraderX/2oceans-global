import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import CloseCTA from "@/components/CloseCTA";
import { INDUSTRIES } from "@/lib/industries";

export const metadata = {
  title: "Industries — 2 Oceans Global",
  description:
    "Manufacturing industries we run in Pakistan: sports goods, gloves, leather, apparel and textiles, hotel textiles, bags, uniforms, promotional products, and beauty tools.",
};

export default function IndustriesPage() {
  const beachhead = INDUSTRIES.filter((i) => i.beachhead);
  const rest = INDUSTRIES.filter((i) => !i.beachhead);

  return (
    <>
      <PageIntro
        eyebrow="Industries"
        title="Where Pakistan is world-class — and where we run production."
        lede="Three industries are our spearpoint. Every industry below is fully serviceable under the same model: one contract, one point of accountability."
      />

      <section className="mx-auto max-w-site px-5 md:px-8 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {beachhead.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group border border-mist/40 rounded p-8 hover:border-deepwater transition-colors"
            >
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-signal mb-4">
                {ind.city}
              </p>
              <h2 className="font-display font-bold text-2xl leading-snug">{ind.name}</h2>
              <p className="mt-3 text-sm text-deepwater/70 leading-relaxed">{ind.intro}</p>
              <p className="mt-6 text-sm font-medium text-deepwater group-hover:text-signal transition-colors">
                Explore →
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-14 rule pt-10">
          <p className="eyebrow mb-6">Also under one contract</p>
          <div className="grid gap-px bg-mist/30 border border-mist/30 rounded overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="bg-paper p-6 hover:bg-deepwater hover:text-paper transition-colors group"
              >
                <p className="font-display font-bold text-base leading-snug">{ind.name}</p>
                <p className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-mist group-hover:text-paper/60">
                  {ind.city}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CloseCTA />
    </>
  );
}
