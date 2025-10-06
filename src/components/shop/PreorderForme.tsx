import React, { useState } from "react";
import type { Product } from "../../data/shop";

export default function PreorderForm({
  product,
  onSubmit,
}: {
  product: Product;
  onSubmit: (payload: { productId: string; name: string; phone: string; nb: number }) => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nb, setNb] = useState<number>(1);
  const [err, setErr] = useState<{ name?: string; phone?: string; nb?: string }>({});

  function handle(e: React.FormEvent) {
    e.preventDefault();
    const next: typeof err = {};
    if (!name.trim()) next.name = "Required";
    if (!/^[\d+()\-\s]{6,}$/.test(phone)) next.phone = "Enter a valid phone";
    if (!Number.isInteger(nb) || nb < 1) next.nb = "Enter a valid quantity (>=1)";
    setErr(next);
    if (Object.keys(next).length) return;
    onSubmit({ productId: product.id, name: name.trim(), phone: phone.trim(), nb });
  }

  return (
    <form onSubmit={handle} className="space-y-4">
      <div className="text-sm text-gray-600">
        Pre-ordering: <span className="font-medium text-gray-900">{product.title}</span>
      </div>

      <label className="block text-sm">
        <span className="font-medium text-gray-700">Full name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          className={`mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900/10 ${
            err.name ? "border-red-300" : "border-gray-300"
          }`}
        />
        {err.name && <span className="mt-1 block text-xs text-red-600">{err.name}</span>}
      </label>

      <label className="block text-sm">
        <span className="font-medium text-gray-700">Phone number</span>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+216 12 345 678"
          className={`mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900/10 ${
            err.phone ? "border-red-300" : "border-gray-300"
          }`}
        />
        {err.phone && <span className="mt-1 block text-xs text-red-600">{err.phone}</span>}
      </label>

      <label className="block text-sm">
        <span className="font-medium text-gray-700">Quantity</span>
        <input
          type="number"
          value={nb}
          onChange={(e) => setNb(Number(e.target.value))}
          min={1}
          className={`mt-1 w-32 rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900/10 ${
            err.nb ? "border-red-300" : "border-gray-300"
          }`}
        />
        {err.nb && <span className="mt-1 block text-xs text-red-600">{err.nb}</span>}
      </label>

      <button
        type="submit"
        className="w-full rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-black"
      >
        Confirm Pre-Order
      </button>
    </form>
  );
}
