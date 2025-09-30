import React from "react";

export default function ShopSection({
  id,
  title,
  description,
  children,
}: {
  id?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
        <div>
          <h2 className="text-lg sm:text-xl font-bold tracking-tight">{title}</h2>
          {description && (
            <p className="mt-1 text-sm text-gray-600 max-w-prose">{description}</p>
          )}
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
