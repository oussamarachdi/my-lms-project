import { ArrowRight, CalendarDays } from "lucide-react";
import Section from "./Section";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 sticky top-0 z-40">
      <Section className="h-16 flex items-center justify-between">
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
      </Section>
    </header>
  );
}