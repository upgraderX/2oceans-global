import Link from "next/link";
import { notFound } from "next/navigation";
import PageIntro from "@/components/PageIntro";
import CloseCTA from "@/components/CloseCTA";
import Slot from "@/components/Slot";
import { INDUSTRIES, getIndustry } from "@/lib/industries";
import { getSubcategories } from "@/lib/subcategories";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }) {
  const ind = getIndustry(params.slug);
  if (!ind) return {};
  return {
    title: `${ind.name} Manufacturing in Pakistan — 2 Oceans Global`,
    description: ind.intro,
  };
}

export default function IndustryPage({ params }) {
  const ind = getIndustry(params.slug);
  if (!ind) notFound();
  const subs = getSubcategories(ind.slug);

  return (
    <>
      <PageIntro eyebrow={`Industries · ${ind.city}`} title={ind.name} lede={ind.intro} dark />

      {subs.length > 0 && (
        <section className="mx-auto max-w-site px-5 md:px-8 py-16 md:py-24">
          <p className="eyebrow mb-8">Categories</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subs.map((s, i) => (
              <Link key={s.slug} href={`/industries/${ind.slug}/${s.slug}`} className="cat-tile group">
                <Slot
                  id={`SUB-${String(i + 1).padStart(2, "0")}`}
                  img={`sub-${s.slug}`}
                  label={s.name}
                  ratio="aspect-[4/3]"
                />
                <p className="pt-4 font-display font-semibold uppercase text-lg group-hover:text-signal transition-colors">
                  {s.name}
                </p>
                <p className="mt-1.5 text-sm text-deepwater/60 leading-relaxed">{s.blurb}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-site px-5 md:px-8 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-5">What we manufacture</p>
            <ul className="space-y-4">
              {ind.categories.map((c) => (
                <li key={c} className="flex gap-3 text-deepwater/85 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-signal shrink-0" aria-hidden="true" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5">Capabilities</p>
            <p className="text-deepwater/80 leading-relaxed">{ind.capabilities}</p>
            <div className="mt-10 border border-mist/40 rounded p-6">
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-meridian mb-3">
                How every project runs
              </p>
              <p className="text-sm text-deepwater/75 leading-relaxed">
                Consultation → quotation → sampling → production → quality
                inspection → packaging → shipping. Documented at every stage,
                with one company accountable to you throughout.
              </p>
              <Link href="/how-it-works" className="mt-4 inline-block text-sm font-medium text-deepwater hover:text-signal transition-colors">
                See the full process →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CloseCTA title={`Manufacturing ${ind.name.toLowerCase()} in Pakistan?`} accent="Start with one conversation." />
    </>
  );
}
