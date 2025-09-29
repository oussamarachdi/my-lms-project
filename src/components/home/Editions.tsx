import Section from "../layout/Section";
import Card from "../ui/Card";
import { ArrowRight } from "lucide-react";
import { editions } from "../../data/content";

export default function Editions() {
  return (
    <section id="editions" className="bg-gray-50 border-y border-gray-200">
      <Section className="py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Previous Conference Editions</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {editions.map((e, idx) => (
            <Card key={idx} className="p-4 hover:shadow-sm transition">
              <div className="aspect-video w-full rounded-xl bg-gray-100 border border-dashed border-gray-300" />
              <h3 className="mt-4 font-semibold">{e.title}</h3>
              <p className="text-sm text-gray-600">{e.meta}</p>
              <button className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:underline">
                View recap <ArrowRight className="h-4 w-4" />
              </button>
            </Card>
          ))}
        </div>
      </Section>
    </section>
  );
}