import React from "react";

export default function TeamSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-4">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{title}</h1>
          {subtitle && (
            <p className="mt-1 text-gray-600 max-w-prose">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}