import Link from "next/link";
import { notFound } from "next/navigation";
import CloseCTA from "@/components/CloseCTA";
import Slot from "@/components/Slot";
import { INDUSTRIES, getIndustry } from "@/lib/industries";
import { SUBCATEGORIES, getSubcategory, getSubcategories } from "@/lib/subcategories";

export function generateStaticParams() {
  const params = [];
  for (const [slug, subs] of Object.entries(SUBCATEGORIES)) {
    for (const sub of subs) params.push({ slug, sub: sub.slug });
  }
  return params;
}

export function generateMetadata({ params }) {
  const ind = getIndustry(params.slug);
  const sub = getSubcategory(params.slug, params.sub);
  if (!ind || !sub) return {};
  return {
    title: `${sub.name} Manufacturer in Pakistan — 2 Oceans Global`,
    description: `${sub.blurb} Private label and OEM ${sub.name.toLowerCase()} manufacturing in Pakistan, managed end to end by 2 Oceans Global.`,
  };
}

export default function SubcategoryPage({ params }) {
  const ind = getIndustry(params.slug);
  const sub = getSubcategory(params.slug, params.sub);
  if (!ind || !sub) notFound();

  const siblings = getSubcategories(params.slug).filter((s) => s.slug !== sub.slug);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-site px-5 md:px-8 pt-10 md:pt-16 pb-14 md:pb-20">
        <nav className="font-mono text-[10px] tracking-[0.2em] uppercase text-mist mb-8" aria-label="Breadcrumb">
          <Link href="/industries" className="hover:text-signal transition-colors">Industries</Link>
          <span className="mx-2">/</span>
          <Link href={`/industries/${ind.slug}`} className="hover:text-signal transition-colors">{ind.name}</Link>
          <span className="mx-2">/</span>
          <span className="text-deepwater">{sub.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h1 className="font-display font-bold uppercase tracking-tight leading-[0.95] text-[clamp(2.2rem,6vw,4.8rem)]">
              {sub.name}
            </h1>
            <p className="mt-6 text-lg text-deepwater/70 leading-relaxed max-w-xl">{sub.blurb}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact#quote" className="btn-primary">Request a quote</Link>
              <Link href="/first-article" className="btn-ghost-dark">Start with a sample</Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Slot id={sub.slug.slice(0, 8).toUpperCase()} img={`sub-${sub.slug}`} label={sub.name} ratio="aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* Products + spec */}
      <section className="bg-deepwater text-paper">
        <div className="mx-auto max-w-site px-5 md:px-8 py-16 md:py-24 grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow-light mb-6">Products</p>
            <ul className="space-y-3">
              {sub.items.map((it) => (
                <li key={it} className="flex gap-3 text-paper/85 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-signal shrink-0" aria-hidden="true" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow-light mb-6">Specification &amp; options</p>
            <p className="text-paper/75 leading-relaxed">{sub.spec}</p>
            <p className="mt-8 font-mono text-[10px] tracking-[0.18em] uppercase text-meridian leading-relaxed">
              Custom specifications welcome · private label &amp; OEM · MOQs confirmed in your quotation
            </p>
          </div>
        </div>
      </section>

      {/* Siblings */}
      {siblings.length > 0 && (
        <section className="mx-auto max-w-site px-5 md:px-8 py-16 md:py-24">
          <p className="eyebrow mb-8">More in {ind.name}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siblings.map((s) => (
              <Link
                key={s.slug}
                href={`/industries/${ind.slug}/${s.slug}`}
                className="group border border-deepwater/15 rounded p-6 hover:border-signal transition-colors"
              >
                <p className="font-display font-semibold uppercase text-lg group-hover:text-signal transition-colors">
                  {s.name}
                </p>
                <p className="mt-2 text-sm text-deepwater/60 leading-relaxed">{s.blurb}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CloseCTA title={`Manufacturing ${sub.name.toLowerCase()}?`} accent="Let's talk specs." />
    </>
  );
}
