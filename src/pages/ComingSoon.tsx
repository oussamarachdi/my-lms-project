// (Optional) icons: npm i lucide-react
import { Instagram, Facebook, Twitter } from "lucide-react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function ComingSoon() {

  return (
    <div>
      <Header />
      <section
        className="relative min-h-[100vh] grid place-items-center text-white overflow-hidden"
        style={{
          backgroundImage: 'url("/coming-bg.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        <div className="relative z-10 w-full max-w-2xl px-4 sm:px-6 text-center">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide">
            Coming Soon
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Something exciting is on the way
          </h1>
          <p className="mt-3 text-gray-200">
            We’re putting the final touches on an experience you’ll love. Stay tuned.
          </p>

        
          {/* Socials */}
          <div className="mt-10 flex items-center justify-center gap-4 text-white/80">
            <a href="#" aria-label="Instagram" className="p-2 hover:text-white"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="p-2 hover:text-white"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="p-2 hover:text-white"><Twitter className="h-5 w-5" /></a>
          </div>

          <p className="mt-6 text-xs text-white/60">
            © {new Date().getFullYear()} LMS. All rights reserved.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
