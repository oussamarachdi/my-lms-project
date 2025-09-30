import React from "react";
import { PARTNERS } from "../../data/partners";
import PartnersCarousel from "../home/PartnersCarousel";

export default function TrustedBy() {
  return (
    <section className="bg-white py-12 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-700 mb-8">
          Trusted by our partners
        </h2>
        <PartnersCarousel partners={PARTNERS} />
      </div>
    </section>
  );
}
