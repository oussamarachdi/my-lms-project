import React from "react";

export default function Checkbox({ name, label, required, error }: { name: string; label: React.ReactNode; required?: boolean; error?: string; }) {
  return (
    <div className="text-sm">
      <label className="inline-flex items-start gap-3">
        <input type="checkbox" name={name} required={required} className="mt-0.5 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-800" />
        <span className="text-gray-700">{label}{required && <span className="text-red-600"> *</span>}</span>
      </label>
      {error && <span className="block text-xs text-red-600 mt-1">{error}</span>}
    </div>
  );
}
