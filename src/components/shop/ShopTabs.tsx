import { CalendarClock, Store } from "lucide-react";

export default function ShopTabs({ tab, onChange }: { tab: "pre" | "onsite"; onChange: (t: "pre" | "onsite") => void; }) {
  return (
    <div className="mt-6 inline-flex rounded-xl border border-gray-200 p-1 bg-gray-50">
      <button
        className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${tab === "pre" ? "bg-white border border-gray-200 shadow-sm" : "text-gray-600"}`}
        onClick={() => onChange("pre")}
      >
        <CalendarClock className="h-4 w-4" /> Pre‑Conference
      </button>
      <button
        className={`ml-1 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${tab === "onsite" ? "bg-white border border-gray-200 shadow-sm" : "text-gray-600"}`}
        onClick={() => onChange("onsite")}
      >
        <Store className="h-4 w-4" /> At the Conference
      </button>
    </div>
  );
}