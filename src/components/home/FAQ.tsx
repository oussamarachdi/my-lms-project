import { useState } from "react";
import Section from "../layout/Section";
import Card from "../ui/Card";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../data/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-gray-50 border-y border-gray-200">
      <Section className="py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Card key={i}>
                <button
                  className="w-full flex items-center justify-between px-4 sm:px-6 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 -mt-1 text-sm text-gray-600">
                    {f.a}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </Section>
    </section>
  );
}