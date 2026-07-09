import Link from "next/link";

export default function CloseCTA({ title = "One partner in Pakistan.", accent = "Zero guesswork." }) {
  return (
    <section className="bg-deepwater text-paper">
      <div className="mx-auto max-w-site px-5 md:px-8 py-20 md:py-28 text-center">
        <h2 className="font-display font-bold tracking-tight text-[clamp(1.9rem,4.5vw,3.2rem)]">
          {title}
          <span className="text-signal"> {accent}</span>
        </h2>
        <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary">Book a consultation</Link>
          <Link href="/contact#quote" className="btn-ghost">Request a quote</Link>
        </div>
      </div>
    </section>
  );
}
