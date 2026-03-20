"use client";

import { FormEvent, useState } from "react";

type FormState = {
  fullName: string;
  company: string;
  phone: string;
  city: string;
  inquiryType: string;
  requirement: string;
};

const initialState: FormState = {
  fullName: "",
  company: "",
  phone: "",
  city: "",
  inquiryType: "Product Inquiry",
  requirement: "",
};

export function ContactInquiryForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message || "Unable to submit your inquiry right now.");
      }

      setFormState(initialState);
      setStatus({
        type: "success",
        message: payload.message || "Inquiry submitted successfully.",
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to submit your inquiry right now.";
      setStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="mt-8 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-brand-charcoal">Full Name</span>
        <input
          type="text"
          value={formState.fullName}
          onChange={(event) => setFormState((current) => ({ ...current, fullName: event.target.value }))}
          placeholder="Your name"
          required
          className="rounded-2xl border border-black/8 bg-brand-sand px-4 py-3 text-sm text-brand-charcoal outline-none transition focus:border-brand-red"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-brand-charcoal">Company / Business</span>
        <input
          type="text"
          value={formState.company}
          onChange={(event) => setFormState((current) => ({ ...current, company: event.target.value }))}
          placeholder="Company name"
          className="rounded-2xl border border-black/8 bg-brand-sand px-4 py-3 text-sm text-brand-charcoal outline-none transition focus:border-brand-red"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-brand-charcoal">Phone Number</span>
        <input
          type="tel"
          value={formState.phone}
          onChange={(event) => setFormState((current) => ({ ...current, phone: event.target.value }))}
          placeholder="Your contact number"
          required
          className="rounded-2xl border border-black/8 bg-brand-sand px-4 py-3 text-sm text-brand-charcoal outline-none transition focus:border-brand-red"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-brand-charcoal">City</span>
        <input
          type="text"
          value={formState.city}
          onChange={(event) => setFormState((current) => ({ ...current, city: event.target.value }))}
          placeholder="Your city"
          required
          className="rounded-2xl border border-black/8 bg-brand-sand px-4 py-3 text-sm text-brand-charcoal outline-none transition focus:border-brand-red"
        />
      </label>

      <label className="flex flex-col gap-2 md:col-span-2">
        <span className="text-sm font-semibold text-brand-charcoal">Inquiry Type</span>
        <select
          value={formState.inquiryType}
          onChange={(event) =>
            setFormState((current) => ({ ...current, inquiryType: event.target.value }))
          }
          className="rounded-2xl border border-black/8 bg-brand-sand px-4 py-3 text-sm text-brand-charcoal outline-none transition focus:border-brand-red"
        >
          <option>Product Inquiry</option>
          <option>Bulk Order</option>
          <option>Dealer Inquiry</option>
          <option>Project Quotation</option>
        </select>
      </label>

      <label className="flex flex-col gap-2 md:col-span-2">
        <span className="text-sm font-semibold text-brand-charcoal">Requirement</span>
        <textarea
          rows={5}
          value={formState.requirement}
          onChange={(event) =>
            setFormState((current) => ({ ...current, requirement: event.target.value }))
          }
          placeholder="Tell us about your product requirement, quantity, and timeline."
          required
          className="rounded-[1.5rem] border border-black/8 bg-brand-sand px-4 py-3 text-sm text-brand-charcoal outline-none transition focus:border-brand-red"
        />
      </label>

      <div className="md:col-span-2 flex flex-col gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-3 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-brand-red-dark disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>

        {status.type ? (
          <p
            className={`text-sm font-semibold ${
              status.type === "success" ? "text-brand-mint" : "text-brand-red"
            }`}
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
