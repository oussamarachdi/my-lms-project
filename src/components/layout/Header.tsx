import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 sticky top-0 z-40">
      <section className="px-6 sm:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <div className="h-14 w-14 rounded-lg bg-gray-900">
            <img
              src="/logo-lms.png"
              alt="LMS Logo"
              className="h-full w-full object-contain p-1"
            />
          </div>
          <span>LMS Hadrumet 2k25</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link className="hover:text-gray-700" to="/">Home</Link>
          <Link className="hover:text-gray-700" to="/shop">Aiesec Shop</Link>
          <Link className="hover:text-gray-700" to="/team">Our Team</Link>
          <Link className="hover:text-gray-700" to="/coming-soon">Coming Soon...</Link>
          <Link className="hover:text-gray-700" to="/dare-gossip">Dare & Gossip Box</Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/register"
            className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black"
          >
            Register Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </section>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-3">
          <Link
            className="block hover:text-gray-700"
            to="/"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            className="block hover:text-gray-700"
            to="/shop"
            onClick={() => setOpen(false)}
          >
            Aiesec Shop
          </Link>
          <Link
            className="block hover:text-gray-700"
            to="/team"
            onClick={() => setOpen(false)}
          >
            Our Team
          </Link>
          <Link
            className="block hover:text-gray-700"
            to="/coming-soon"
            onClick={() => setOpen(false)}
          >
            Coming Soon...
          </Link>
          <Link
            className="block hover:text-gray-700"
            to="/dare-gossip"
            onClick={() => setOpen(false)}
          >
            Dare & Gossip Box
          </Link>

          <Link
            to="/register"
            onClick={() => setOpen(false)}
            className="mt-4 block w-full text-center rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black"
          >
            Register Now
          </Link>
        </div>
      )}
    </header>
  );
}
