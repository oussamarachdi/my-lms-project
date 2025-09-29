import Section from "../layout/Section";
import { ArrowRight } from "lucide-react";

export default function BottomCTA() {
  return (
    <section className="bg-gray-900 text-white">
      <Section className="py-12 sm:py-16">
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
      </Section>
    </section>
  );
}