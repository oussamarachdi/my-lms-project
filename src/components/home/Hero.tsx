import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Hero() {
  const driveId = "1fKZWOPjnIt00g8LHmp_PxBLv25K3T9sm";
  // preview iframe URL used as a fallback if direct <video> can't load
  const previewUrl = `https://drive.google.com/file/d/${driveId}/preview`;
  // Drive direct-download URL (may require public sharing) to be used in the <video> src
  const videoSrc = `https://drive.google.com/uc?export=download&id=${driveId}`;
  
  // Modal / player state
  const [playerOpen, setPlayerOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closePlayer();
    }
    if (playerOpen) document.addEventListener("keydown", onKey);
    else document.removeEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [playerOpen]);

  async function openPlayer() {
    setVideoFailed(false);
    setPlayerOpen(true);
    // allow modal to mount before trying to play
    setTimeout(() => {
      try {
        videoRef.current?.play().catch(() => {});
      } catch (e) {
        // ignore
      }
    }, 120);
  }

  function closePlayer() {
    try {
      videoRef.current?.pause();
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    } catch (e) {
      // ignore
    }
    setPlayerOpen(false);
  }

  function toggleFullscreen() {
    const el = modalRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }

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
              {/* Clickable thumbnail that opens the inline modal player */}
              <button onClick={openPlayer} aria-label="Open video" className="absolute inset-0 block">
                <img
                  src="https://plus.unsplash.com/premium_photo-1668130718429-7abf7b186f2f?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Event preview thumbnail"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white/90 text-gray-900 rounded-full p-3 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              </button>
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

          {/* Inline player modal */}
          {playerOpen && (
            <div
              ref={modalRef}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              role="dialog"
              aria-modal="true"
            >
              <div className="relative w-full max-w-4xl bg-transparent">
                <div className="flex items-center justify-end gap-2 mb-2">
                  <button
                    onClick={toggleFullscreen}
                    className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1 text-sm text-white"
                    aria-label="Toggle fullscreen"
                  >
                    ⛶
                  </button>
                  <button
                    onClick={closePlayer}
                    className="inline-flex items-center gap-2 rounded-md bg-red-600 px-3 py-1 text-sm text-white"
                    aria-label="Close video"
                  >
                    Close
                  </button>
                </div>

                <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                  {!videoFailed ? (
                    <video
                      ref={videoRef}
                      src={videoSrc}
                      controls
                      className="w-full h-full bg-black object-cover"
                      preload="metadata"
                      onError={() => setVideoFailed(true)}
                    />
                  ) : (
                    <iframe
                      className="w-full h-full rounded-lg"
                      src={previewUrl}
                      title="Event Preview"
                      allowFullScreen
                      allow="autoplay; encrypted-media; picture-in-picture"
                    />
                  )}
                </div>
              </div>
            </div>
          )}

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
              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm md:text-base font-semibold text-gray-900 hover:bg-gray-100"
              >
                Get Your Pass <ArrowRight className="h-5 w-5" />
              </Link>
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
