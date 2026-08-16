import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-deepwater text-paper">
      <div className="mx-auto max-w-site px-5 md:px-8 py-32 md:py-44 text-center">
        <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-signal">
          Container not found — 404
        </p>
        <h1 className="mt-5 font-display font-bold tracking-tight text-[clamp(2rem,5vw,3.6rem)]">
          This route isn&rsquo;t on the manifest.
        </h1>
        <p className="mt-4 text-paper/70 max-w-md mx-auto">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <Link href="/" className="btn-primary mt-9 inline-flex">
          Return to port
        </Link>
      </div>
    </section>
  );
}
