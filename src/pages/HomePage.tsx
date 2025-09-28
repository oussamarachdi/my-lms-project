import React, { useState } from "react";
import { CheckCircle2, ChevronDown, ArrowRight, PlayCircle, CalendarDays, MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

// Tailwind-friendly, responsive home page matching the provided design
// Drop this component into your React app (e.g., src/pages/Home.tsx) and ensure Tailwind is configured.

const faqs = [
  {
    q: "What is TechConf?",
    a: "TechConf is a two-day conference bringing together developers, researchers, and founders to explore the future of technology across AI, Cloud, Web, and more.",
  },
  {
    q: "Where is the event hosted?",
    a: "The 2025 edition will be hosted in Paris with select talks live-streamed globally.",
  },
  {
    q: "Do you offer student discounts?",
    a: "Yes, we offer limited student and group discounts. Contact us with a valid ID for details.",
  },
  {
    q: "Can I get a refund if I can’t attend?",
    a: "Refunds are available up to 30 days before the event. Tickets are transferable.",
  },
];

const features = [
  {
    title: "Expert Speakers",
    body: "Hear from leaders shipping real products in AI, Web, Cloud, and Security.",
  },
  {
    title: "Hands‑on Workshops",
    body: "Level up with practical sessions taught by industry engineers.",
  },
  {
    title: "Career Networking",
    body: "Meet hiring managers and founders during curated sessions.",
  },
  {
    title: "Showcase & Demos",
    body: "Discover cutting‑edge tools from startups and open‑source teams.",
  },
];

const editions = [
  { title: "TechConf 2024", meta: "Paris • 2 days • 2k+ attendees" },
  { title: "TechConf 2023", meta: "Berlin • 2 days • 1.6k attendees" },
  { title: "TechConf 2022", meta: "Madrid • 2 days • 1.2k attendees" },
];

export default function ConferenceHome() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Top bar */}
      <header className="w-full border-b border-gray-200 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
              <div className="h-8 w-8 rounded-lg bg-gray-900" />
              <span>TechConf 2025</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a className="hover:text-gray-700" href="#editions">Editions</a>
              <a className="hover:text-gray-700" href="#why">Why Attend</a>
              <a className="hover:text-gray-700" href="#faq">FAQ</a>
              <a className="hover:text-gray-700" href="#contact">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="#register" className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50">
                <CalendarDays className="h-4 w-4" />
                Get Tickets
              </a>
              <a href="#register" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black">
                Register <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 sm:py-16">
            <div>
              <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700">November 14–15, 2025 • Paris, FR</span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                The Future of Technology Conference
              </h1>
              <p className="mt-4 text-gray-600 max-w-prose">
                Two days of keynotes, hands‑on workshops, and real‑world case studies.
                Join engineers, researchers, and founders building what comes next.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#register" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-black">
                  Get Your Pass <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#video" className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold hover:bg-gray-50">
                  <PlayCircle className="h-4 w-4" /> Watch Preview
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Paris, France</div>
                <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4" /> Nov 14–15</div>
              </div>
            </div>
            {/* Hero image placeholder */}
            <div className="relative aspect-[4/3] w-full rounded-2xl border border-dashed border-gray-300 bg-gray-100">
              <div className="absolute inset-0 m-4 rounded-xl bg-gray-200" />
              <div className="absolute inset-0 grid place-items-center text-gray-500 text-sm">Hero Image / Video</div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Editions */}
      <section id="editions" className="bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Previous Conference Editions</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {editions.map((e, idx) => (
              <article key={idx} className="rounded-2xl border border-gray-200 bg-white p-4 hover:shadow-sm transition">
                <div className="aspect-video w-full rounded-xl bg-gray-100 border border-dashed border-gray-300" />
                <h3 className="mt-4 font-semibold">{e.title}</h3>
                <p className="text-sm text-gray-600">{e.meta}</p>
                <button className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:underline">
                  View recap <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section id="why" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Why Attend TechConf 2025?</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 p-6">
                <CheckCircle2 className="h-6 w-6" />
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="rounded-2xl border border-gray-200 bg-white">
                  <button
                    className="w-full flex items-center justify-between px-4 sm:px-6 py-4 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium">{f.q}</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-5 -mt-1 text-sm text-gray-600">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold">Ready to join TechConf 2025?</h3>
              <p className="mt-1 text-gray-300 max-w-prose">Secure your seat today and receive agenda updates, speaker reveals, and workshop access.</p>
            </div>
            <div className="flex gap-3">
              <a href="#register" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-gray-900 font-semibold hover:bg-gray-100">
                Register Now <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-semibold hover:bg-white/10">
                Become a Sponsor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 font-semibold"><div className="h-7 w-7 rounded-lg bg-gray-900" /> TechConf</div>
              <p className="mt-3 text-gray-600">Building the future together since 2019.</p>
              <div className="mt-4 flex items-center gap-3 text-gray-600">
                <Mail className="h-4 w-4" /> contact@techconf.io
              </div>
              <div className="mt-2 flex items-center gap-3 text-gray-600">
                <Phone className="h-4 w-4" /> +33 1 23 45 67 89
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Event</h4>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li><a className="hover:text-gray-900" href="#editions">Past Editions</a></li>
                <li><a className="hover:text-gray-900" href="#why">Why Attend</a></li>
                <li><a className="hover:text-gray-900" href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Resources</h4>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li><a className="hover:text-gray-900" href="#">Code of Conduct</a></li>
                <li><a className="hover:text-gray-900" href="#">Accessibility</a></li>
                <li><a className="hover:text-gray-900" href="#">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Follow us</h4>
              <div className="mt-3 flex gap-3 text-gray-600">
                <a aria-label="Facebook" href="#" className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><Facebook className="h-4 w-4" /></a>
                <a aria-label="Twitter" href="#" className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><Twitter className="h-4 w-4" /></a>
                <a aria-label="LinkedIn" href="#" className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><Linkedin className="h-4 w-4" /></a>
                <a aria-label="YouTube" href="#" className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><Youtube className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600">
            <p>© {new Date().getFullYear()} TechConf. All rights reserved.</p>
            <p className="text-xs">Made with ❤ for developers & creators.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
