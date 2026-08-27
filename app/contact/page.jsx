"use client";

import { useState } from "react";
import { INDUSTRIES } from "@/lib/industries";

// Get this free at web3forms.com — enter the inbox you want quote requests
// delivered to (no signup required) and copy the key it gives you.
const WEB3FORMS_KEY = "906e0080-45c1-4097-b712-f480f24ede5e";

const CONTACT_EMAIL = "info@2oceansglobal.com";
// WhatsApp click-to-chat — digits only, country code, no + or spaces.
// e.g. Pakistan number 0300 1234567 -> "923001234567"
const WHATSAPP_NUMBER = "923107085787";

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
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Quote request — ${form.product || "New project"}`,
          from_name: "2 Oceans Global — Website",
          name: form.name,
          email: form.email,
          company: form.company,
          industry: form.industry,
          product: form.product,
          quantity: form.quantity,
          timeline: form.timeline,
          message: `Industry: ${form.industry}\nProduct: ${form.product}\nQuantity: ${form.quantity}\nTimeline: ${form.timeline}\nCompany: ${form.company}`,
        }),
      });

      const data = await res.json();
      setStatus(data.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
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

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary mt-9 w-full sm:w-auto disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send quote request"}
            </button>

            {status === "sent" && (
              <p className="mt-5 font-mono text-[11px] tracking-[0.18em] uppercase text-meridian">
                Request sent — we'll reply within one business day.
              </p>
            )}
            {status === "error" && (
              <p className="mt-5 font-mono text-[11px] tracking-[0.18em] uppercase text-signal">
                Something went wrong — email us directly at {CONTACT_EMAIL}
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

            <div className="border border-mist/40 rounded p-7">
              <p className="eyebrow mb-3">WhatsApp</p>
              <p className="text-sm text-deepwater/75 leading-relaxed">
                Fastest for quick questions and photos of your product.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi — I'd like to ask about manufacturing with 2 Oceans Global.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-dark mt-5 inline-flex"
              >
                Message us on WhatsApp
              </a>
            </div>

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
