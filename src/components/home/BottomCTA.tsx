import { Link } from "react-router-dom";
import Section from "../layout/Section";
import { ArrowRight } from "lucide-react";

export default function BottomCTA() {
  return (
    <section className="bg-gray-900 text-white">
      <Section className="py-12 sm:py-16">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-bold">Ready to join LMS 2025?</h3>
            <p className="mt-1 text-gray-300 max-w-prose">
              Reserve your spot today and be part of an unforgettable
              experience filled with growth, connection, and inspiration.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-gray-900 font-semibold hover:bg-gray-100"
            >
              Get Your Pass <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </section>
  );
}
