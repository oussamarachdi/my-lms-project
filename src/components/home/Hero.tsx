import { ArrowRight, CalendarDays, MapPin, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
className="relative bg-black text-white min-h-[85vh]"
  style={{
    backgroundImage: 'url("/hero-bg.jpg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain", // still fills but only 600px tall
  }}
>


      {/* Overlay (slight blur for readability) */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* Content container – no Section component */}
      <div className="relative max-w-6xl px-4 sm:px-6">
        {/* Top-aligned, not vertically centered */}
        <div className="pt-28 pb-16 sm:pt-32 sm:pb-24">
          <span className="inline-block rounded-full bg-white/80 px-4 py-2 text-sm md:text-lg font-semibold tracking-wide text-gray-900">
            October 17–18–19, 2025
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight md:leading-snug tracking-tight">
            Local Motivational Seminar
          </h1>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-gray-200 leading-relaxed md:leading-loose">
            <span className="block italic text-white">
              The cycle never ends… unless you choose to end it.
            </span>
            <span className="block mt-2">
              This isn’t just another conference.
              <br />
              <span className="font-bold text-white">This is the way out.</span>
            </span>
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#register"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm md:text-base font-semibold text-gray-900 hover:bg-gray-100"
            >
              Get Your Pass <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#video"
              className="inline-flex items-center gap-2 rounded-xl border border-white/50 px-6 py-4 text-sm md:text-base font-semibold hover:bg-white/10"
            >
              <PlayCircle className="h-5 w-5" /> Watch Preview
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm md:text-base text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" /> Sousse, Tunisia
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5" /> Oct 17–18–19
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
