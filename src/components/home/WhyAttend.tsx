import Section from "../layout/Section";
import Card from "../ui/Card";
import { CheckCircle2 } from "lucide-react";
import { features } from "../../data/content";

export default function WhyAttend() {
  return (
    <section id="why" className="bg-white">
      <Section className="py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Why Attend TechConf 2025?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Card key={i} className="p-6">
              <CheckCircle2 className="h-6 w-6" />
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.body}</p>
            </Card>
          ))}
        </div>
      </Section>
    </section>
  );
}