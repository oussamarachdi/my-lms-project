import React, { useState } from "react";
import Section from "../components/layout/Section";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import InputField from "../components/forms/InputField";
import SelectField from "../components/forms/SelectField";
import TextAreaField from "../components/forms/TextAreaField";
import Checkbox from "../components/forms/Checkbox";

const TICKET_TYPES = [
  { value: "standard", label: "Standard" },
  { value: "student", label: "Student" },
  { value: "vip", label: "VIP" },
];

const TSHIRT_SIZES = [
  { value: "", label: "No T‑shirt" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

export default function Registration() {
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOk(null);
    setErrors({});

    const data = new FormData(e.currentTarget);

    // Tiny validation placeholder
    const nextErrors: Record<string, string> = {};
    if (!String(data.get("fullName")).trim()) nextErrors.fullName = "Required";
    const email = String(data.get("email") ?? "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email";
    if (!String(data.get("ticketType"))) nextErrors.ticketType = "Select a ticket";
    if (!data.get("agree")) nextErrors.agree = "You must accept the terms";

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setSubmitting(true);
    // Simulate submit
    setTimeout(() => {
      setSubmitting(false);
      setOk("Registration saved (demo). We'll wire this to your backend later.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Section className="py-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Register for the Event</h1>
            <p className="mt-2 text-gray-600">Custom fields for now — we can change them anytime.</p>

            {/* Card */}
            <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 space-y-6">
              {/* Personal */}
              <div>
                <h2 className="text-sm font-semibold text-gray-700">Personal information</h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField name="fullName" label="Full name" required error={errors.fullName} placeholder="Jane Doe" />
                  <InputField name="email" type="email" label="Email" required error={errors.email} placeholder="jane@example.com" />
                  <InputField name="phone" label="Phone" placeholder="+216 12 345 678" />
                  <InputField name="organization" label="Organization" placeholder="AIESEC Sousse" />
                  <InputField name="role" label="Role / Title" placeholder="OC VP Marketing" />
                  <InputField name="country" label="Country" placeholder="Tunisia" />
                  <InputField name="city" label="City" placeholder="Sousse" />
                </div>
              </div>

              {/* Attendance */}
              <div>
                <h2 className="text-sm font-semibold text-gray-700">Attendance</h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SelectField name="ticketType" label="Ticket type" required error={errors.ticketType} options={TICKET_TYPES} />
                  <SelectField name="tshirtSize" label="T‑shirt size" options={TSHIRT_SIZES} />
                </div>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Checkbox name="day1" label="Day 1" />
                  <Checkbox name="day2" label="Day 2" />
                  <Checkbox name="day3" label="Day 3" />
                </div>
              </div>

              {/* Preferences */}
              <div>
                <h2 className="text-sm font-semibold text-gray-700">Preferences</h2>
                <div className="mt-4 grid grid-cols-1 gap-4">
                  <TextAreaField name="diet" label="Dietary requirements" placeholder="Vegetarian, halal, nut allergy…" />
                  <TextAreaField name="notes" label="Notes" placeholder="Anything else we should know?" />
                </div>
              </div>

              {/* Consents */}
              <div className="space-y-3">
                <Checkbox name="newsletter" label="Send me updates and speaker announcements" />
                <Checkbox name="agree" required error={errors.agree} label={
                  <span>
                    I agree to the <a href="#" className="underline">terms</a> and <a href="#" className="underline">privacy</a>.
                  </span>
                } />
              </div>

              {/* Submit */}
              <div className="pt-2 flex items-center gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-black disabled:opacity-60"
                >
                  {submitting ? "Submitting…" : "Register Now"}
                </button>
                {ok && <p className="text-sm text-emerald-700">{ok}</p>}
              </div>
            </form>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}