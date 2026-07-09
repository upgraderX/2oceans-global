import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-deepwater text-paper">
      <div className="mx-auto max-w-site px-5 md:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-display font-bold text-xl tracking-tight">2 OCEANS</span>
              <span className="font-mono text-[10px] tracking-[0.3em] text-paper/50 uppercase">
                Global
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-paper/70 max-w-sm">
              A premium manufacturing partner. We manage the complete production
              process in Pakistan on your behalf — one contract, one point of
              accountability, from sample to shipment.
            </p>
            <p className="mt-6 font-mono text-[11px] tracking-[0.18em] uppercase text-paper/40">
              Lahore, Pakistan · 31.55°N 74.35°E
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow-light mb-4">Company</p>
            <ul className="space-y-2.5 text-sm text-paper/75">
              <li><Link href="/about" className="hover:text-paper transition-colors">About</Link></li>
              <li><Link href="/how-it-works" className="hover:text-paper transition-colors">How It Works</Link></li>
              <li><Link href="/why-pakistan" className="hover:text-paper transition-colors">Why Pakistan</Link></li>
              <li><Link href="/first-article" className="hover:text-paper transition-colors">The First Article</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow-light mb-4">Industries</p>
            <ul className="space-y-2.5 text-sm text-paper/75">
              <li><Link href="/industries/sports-goods" className="hover:text-paper transition-colors">Sports Goods</Link></li>
              <li><Link href="/industries/gloves" className="hover:text-paper transition-colors">Gloves</Link></li>
              <li><Link href="/industries/leather" className="hover:text-paper transition-colors">Leather</Link></li>
              <li><Link href="/industries" className="hover:text-paper transition-colors">All industries →</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow-light mb-4">Start a project</p>
            <ul className="space-y-2.5 text-sm text-paper/75">
              <li><Link href="/contact#quote" className="hover:text-paper transition-colors">Request a quote</Link></li>
              <li><Link href="/contact" className="hover:text-paper transition-colors">Book a consultation</Link></li>
            </ul>
            <p className="mt-6 font-mono text-[11px] leading-relaxed tracking-wide text-paper/40 uppercase">
              We reply within one business day.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-paper/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-paper/45">
            © {new Date().getFullYear()} 2 Oceans Global LLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-paper/45">
            <Link href="/privacy" className="hover:text-paper/80 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-paper/80 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
