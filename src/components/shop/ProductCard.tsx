import React from "react";
import { CalendarClock } from "lucide-react";
import type { Product } from "../../data/shop";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
      {children}
    </span>
  );
}

const formatPrice = (x: number) => `${x.toFixed(0)} TND`;

export default function ProductCard({
  p,
  ctaLabel,
  onClick,
}: {
  p: Product;
  ctaLabel: string;
  onClick?: (p: Product) => void;
}) {
  return (
    <article className="flex items-stretch gap-4 rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-sm transition">
      <div className="w-32 h-32 flex-shrink-0 bg-gray-100">
        {p.image ? (
          <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full grid place-items-center text-gray-400">
            No image
          </div>
        )}
      </div>

      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold leading-tight">{p.title}</h3>
            <span className="text-sm font-semibold text-gray-900">
              {p.price && (p.price === 0 ? "Free" : formatPrice(p.price ?? 0))}
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2 flex-wrap">
            {p.preorder && (
              <Badge>
                <CalendarClock className="h-3.5 w-3.5" /> Pre-order
              </Badge>
            )}
          </div>
          {p.description && (
            <p className="mt-2 text-sm text-gray-600">{p.description}</p>
          )}
        </div>
        {p.preorder && (
          <button
            onClick={() => onClick?.(p)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black"
          >
            {ctaLabel}
            <CalendarClock className="h-4 w-4" />
          </button>
        )}
        <div className="mt-4">
        </div>
      </div>
    </article>
  );
}
