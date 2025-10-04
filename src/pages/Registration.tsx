import  { useEffect } from "react";
import Section from "../components/layout/Section";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Registration() {
  useEffect(() => {
    // Load Tally script once
    const w = "https://tally.so/widgets/embed.js";
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${w}"]`);

    const run = () => {
      // @ts-ignore - Tally injected by script
      if (typeof Tally !== "undefined") {
        // @ts-ignore
        Tally.loadEmbeds();
      } else {
        document
          .querySelectorAll<HTMLIFrameElement>('iframe[data-tally-src]:not([src])')
          .forEach((el) => (el.src = el.dataset.tallySrc || ""));
      }
    };

    if (existing) {
      // script already present
      if (existing.getAttribute("data-loaded")) run();
      existing.addEventListener("load", run, { once: true });
      return () => existing.removeEventListener("load", run);
    }

    const s = document.createElement("script");
    s.src = w;
    s.async = true;
    s.onload = () => {
      s.setAttribute("data-loaded", "true");
      run();
    };
    s.onerror = run; // fallback: set iframe src from data attribute
    document.body.appendChild(s);

    return () => {
      s.onload = null;
      s.onerror = null;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Section className="py-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Register for LMS 2k25
            </h1>
            <p className="mt-2 text-gray-600">
              Fill the form below to secure your spot.
            </p>

            {/* Tally Embed */}
            <div className="mt-8 rounded-2xl border border-gray-200 overflow-hidden">
              <iframe
                data-tally-src="https://tally.so/embed/3lJe2N?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                title="LMS 2K25"
                loading="lazy"
                width="100%"
                // Initial height; Tally will auto-resize with dynamicHeight
                height={1200}
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                // Make it responsive & remove any inner scrollbars
                className="block w-full"
              />
            </div>

            {/* Optional fallback link for no-script environments */}
            <p className="mt-4 text-sm text-gray-500">
              Trouble loading the form?{" "}
              <a
                href="https://tally.so/r/3lJe2N"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-700"
              >
                Open it in a new tab
              </a>
              .
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
