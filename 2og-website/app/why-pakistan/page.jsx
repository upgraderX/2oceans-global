import PageIntro from "@/components/PageIntro";
import CloseCTA from "@/components/CloseCTA";

export const metadata = {
  title: "Why Pakistan — Manufacturing in Pakistan Explained",
  description:
    "Why global brands manufacture in Pakistan: world-class industry clusters, generations of craftsmanship, GSP+ duty-free access to the EU, and competitive costs — the credible China+1.",
};

const CITIES = [
  { name: "Sialkot", coords: "32.49\u00B0N 74.53\u00B0E", known: "Sports goods, gloves, leather — one of the world's great export clusters, supplying international brands for over a century." },
  { name: "Faisalabad", coords: "31.42\u00B0N 73.08\u00B0E", known: "Pakistan's textile capital — fabrics, towels, hotel and home textiles, knitwear at scale." },
  { name: "Lahore", coords: "31.55\u00B0N 74.35\u00B0E", known: "Diversified manufacturing — apparel, leather, uniforms — and our home base." },
  { name: "Karachi", coords: "24.86\u00B0N 67.00\u00B0E", known: "Pakistan's largest city and port — apparel, textiles, and the gateway for the country's exports." },
  { name: "Gujranwala", coords: "32.19\u00B0N 74.20\u00B0E", known: "Metalwork, hardware, and industrial products cluster." },
  { name: "Wazirabad", coords: "32.44\u00B0N 74.12\u00B0E", known: "Precision metal tools and cutlery — generations of blade-making craft." },
];

export default function WhyPakistanPage() {
  return (
    <>
      <PageIntro
        eyebrow="Why Pakistan"
        title="The credible China+1."
        lede="Brands diversifying beyond China need more than a cheaper invoice — they need real manufacturing depth. Pakistan has it, in specific industries, in specific cities. Knowing exactly where is our job."
        dark
      />

      <section className="mx-auto max-w-site px-5 md:px-8 py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border border-mist/40 rounded p-8">
            <p className="font-mono text-3xl text-signal">GSP+</p>
            <p className="mt-3 text-sm text-deepwater/75 leading-relaxed">
              Preferential EU trade status — most Pakistani goods enter the
              European Union duty-free, a direct cost advantage for EU-market brands.
            </p>
          </div>
          <div className="border border-mist/40 rounded p-8">
            <p className="font-mono text-3xl text-signal">Generations</p>
            <p className="mt-3 text-sm text-deepwater/75 leading-relaxed">
              Sialkot has exported sports goods for over a century. Craft here
              is inherited, not trained last quarter — hand-stitching, leather
              work, precision sewing.
            </p>
          </div>
          <div className="border border-mist/40 rounded p-8">
            <p className="font-mono text-3xl text-signal">Cost + capacity</p>
            <p className="mt-3 text-sm text-deepwater/75 leading-relaxed">
              Competitive labor costs with real export infrastructure — a
              genuine alternative as brands spread manufacturing risk beyond a
              single country.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <p className="eyebrow mb-8">The manufacturing map</p>
          <div className="grid gap-px bg-mist/30 border border-mist/30 rounded overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {CITIES.map((c) => (
              <div key={c.name} className="bg-paper p-7">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-display font-bold text-xl">{c.name}</h2>
                  <p className="font-mono text-[10px] tracking-wide text-mist">{c.coords}</p>
                </div>
                <p className="mt-3 text-sm text-deepwater/75 leading-relaxed">{c.known}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-3xl">
          <p className="eyebrow mb-4">The honest caveat</p>
          <p className="text-deepwater/80 leading-relaxed">
            Pakistan is not the answer for every product — no country is. Part
            of our job is telling you, in the first conversation, whether your
            product belongs here. When it does, the combination of craft,
            cluster depth, and trade access is hard to beat. When it doesn't,
            you'll hear that from us before you spend anything.
          </p>
        </div>
      </section>

      <CloseCTA title="Is Pakistan right for your product?" accent="Ask us — we'll tell you straight." />
    </>
  );
}
