import ProductCard from "./ProductCard";
import type { Product } from "../../data/shop";

export default function ProductsGrid({
  products,
  mode,
  onAction,
}: {
  products: Product[];
  mode: "pre" | "onsite";
  onAction?: (p: Product) => void;
}) {
  return (
    <div className="mt-6 space-y-4">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          p={p}
          ctaLabel={
            mode === "pre"
              ? p.price === 0
                ? "Reserve"
                : "Pre-Order"
              : ""
          }
          onClick={onAction}
        />
      ))}
    </div>
  );
}
