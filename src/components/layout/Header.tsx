import { ArrowRight } from "lucide-react";
import Section from "./Section";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 sticky top-0 z-40">
      <Section className="h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <div className="h-8 w-8 rounded-lg bg-gray-900" />
          <span>LMS Hadrumet 2k25</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link className="hover:text-gray-700" to="/">Home</Link>
          <Link className="hover:text-gray-700" to="/shop">Aiesec Shop</Link>
          <Link className="hover:text-gray-700" to="/team">Our Team</Link>
          <Link className="hover:text-gray-700" to="/coming-soon">Coming Soon...</Link>
          <Link className="hover:text-gray-700" to="/dare-gossip">Dare & Gossip Box</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/register" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black">
            Register Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </header>
  );
}