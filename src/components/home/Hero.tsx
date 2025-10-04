import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

export default function Hero() {
  const driveId = "1fKZWOPjnIt00g8LHmp_PxBLv25K3T9sm";
  const previewUrl = `https://drive.google.com/file/d/${driveId}/preview`;

  return (
    <section
      className="relative bg-black text-white min-h-[85vh]"
      style={{
        backgroundImage: 'url("/hero-bg.jpg")',
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      <div className="relative mx-auto max-w-[85vw] px-4 sm:px-6">
        {/* Note: desktop stays the same (md:grid-cols-2), changes are only below md */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center pt-24 pb-12 sm:pt-28 sm:pb-20">

          {/* VIDEO — first on mobile, second on desktop */}
          <div className="order-1 md:order-2">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
              <iframe
                src={previewUrl}
                className="absolute inset-0 h-full w-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                loading="lazy"
                title="Event Preview"
              />
            </div>
            <div className="mt-3 text-right text-xs sm:text-sm text-white/70">
              Can’t play?{" "}
              <a
                href={`https://drive.google.com/file/d/${driveId}/view`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Open in Google Drive
              </a>
            </div>
          </div>

          {/* TEXT — second on mobile, first on desktop */}
          <div className="order-2 md:order-1">
            <span className="inline-block rounded-full bg-white/80 px-3 py-1 text-xs sm:text-sm md:text-base font-semibold tracking-wide text-gray-900">
              October 17–18–19, 2025
            </span>

            <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-snug tracking-tight">
              Local Motivational Seminar
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl font-medium text-gray-200 leading-relaxed md:leading-loose">
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
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm md:text-base font-semibold text-gray-900 hover:bg-gray-100"
              >
                Get Your Pass <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-4 text-sm md:text-base text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" /> Sousse, Tunisia
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5" /> Oct 17–18–19
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
