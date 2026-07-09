"use client";

import { useState } from "react";
import { INDUSTRIES } from "@/lib/industries";

const CONTACT_EMAIL = "info@2oceansglobal.com";
const WHATSAPP_NUMBER = "";

export default function ContactPage() {
  const [form, setForm] = useState({
    industry: "",
    product: "",
    quantity: "",
    timeline: "",
    name: "",
    company: "",
    email: "",
  });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Quote request — ${form.product || "New project"}`
    );
    const body = encodeURIComponent(
      [
        `INDUSTRY: ${form.industry}`,
        `PRODUCT: ${form.product}`,
        `QUANTITY: ${form.quantity}`,
        `TIMELINE: ${form.timeline}`,
        `NAME: ${form.name}`,
        `COMPANY: ${form.company}`,
        `EMAIL: ${form.email}`,
      ].join("\n")
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full rounded border border-mist/50 bg-paper px-4 py-3 text-sm text-deepwater placeholder:text-mist focus:border-deepwater focus:outline-none";
  const label = "block font-mono text-[10px] tracking-[0.22em] uppercase text-mist mb-2";

  return (
    <>
      <section className="mx-auto max-w-site px-5 md:px-8 pt-16 pb-12 md:pt-24">
        <p className="eyebrow mb-5">Contact</p>
        <h1 className="font-display font-bold leading-[1.08] tracking-tight text-[clamp(2rem,5vw,3.6rem)] max-w-3xl">
          Tell us what you want to make.
        </h1>
        <p className="mt-6 text-lg text-deepwater/75 leading-relaxed max-w-2xl">
          A spec, a sample, or just an idea — all three are fine starting
          points. We reply within one business day.
        </p>
      </section>

      <section className="mx-auto max-w-site px-5 md:px-8 pb-20 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <form id="quote" onSubmit={submit} className="lg:col-span-7 border border-mist/40 rounded p-7 md:p-10">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-signal mb-8">
              Quote request
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="industry" className={label}>Industry</label>
                <select id="industry" required value={form.industry} onChange={set("industry")} className={field}>
                  <option value="" disabled>Select an industry</option>
                  {INDUSTRIES.map((i) => (
                    <option key={i.slug} value={i.name}>{i.name}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="quantity" className={label}>Quantity (approx.)</label>
                <input id="quantity" required value={form.quantity} onChange={set("quantity")} className={field} placeholder="e.g. 1,000 units" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="product" className={label}>Product</label>
                <input id="product" required value={form.product} onChange={set("product")} className={field} placeholder="e.g. Custom goalkeeper gloves, private label" />
              </div>
              <div>
                <label htmlFor="timeline" className={label}>Timeline</label>
                <input id="timeline" value={form.timeline} onChange={set("timeline")} className={field} placeholder="e.g. Samples by September" />
              </div>
              <div>
                <label htmlFor="name" className={label}>Your name</label>
                <input id="name" required value={form.name} onChange={set("name")} className={field} placeholder="Full name" />
              </div>
              <div>
                <label htmlFor="company" className={label}>Company</label>
                <input id="company" value={form.company} onChange={set("company")} className={field} placeholder="Brand or company" />
              </div>
              <div>
                <label htmlFor="email" className={label}>Email</label>
                <input id="email" type="email" required value={form.email} onChange={set("email")} className={field} placeholder="name@company.com" />
              </div>
            </div>

            <button type="submit" className="btn-primary mt-9 w-full sm:w-auto">
              Send quote request
            </button>

            {sent && (
              <p className="mt-5 font-mono text-[11px] tracking-[0.18em] uppercase text-meridian">
                Opening your email app — press send and we&rsquo;ll reply within one business day.
              </p>
            )}
          </form>

          <div className="lg:col-span-5 space-y-6">
            <div className="border border-mist/40 rounded p-7">
              <p className="eyebrow mb-3">Prefer to talk?</p>
              <p className="text-sm text-deepwater/75 leading-relaxed">
                Book a free consultation call — 30 minutes, no commitment. We&rsquo;ll
                tell you honestly whether Pakistan is right for your product.
              </p>
              <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Consultation call request")}`} className="btn-ghost-dark mt-5 inline-flex">
                Request a call
              </a>
            </div>

            {WHATSAPP_NUMBER && (
              <div className="border border-mist/40 rounded p-7">
                <p className="eyebrow mb-3">WhatsApp</p>
                <p className="text-sm text-deepwater/75 leading-relaxed">
                  Fastest for quick questions and photos of your product.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-dark mt-5 inline-flex"
                >
                  Message us on WhatsApp
                </a>
              </div>
            )}

            <div className="bg-deepwater text-paper rounded p-7">
              <p className="eyebrow-light mb-3">Direct</p>
              <p className="font-mono text-sm">{CONTACT_EMAIL}</p>
              <p className="mt-4 font-mono text-[10px] tracking-[0.18em] uppercase text-paper/40">
                Lahore, Pakistan · We reply within one business day
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
