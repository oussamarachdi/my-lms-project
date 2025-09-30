
export default function SelectField({ label, name, options, required, error }: {
  label: string; name: string; options: { value: string; label: string }[]; required?: boolean; error?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="font-medium text-gray-700">{label}{required && <span className="text-red-600"> *</span>}</span>
      <select
        name={name}
        required={required}
        className={`mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900/10 ${error ? "border-red-300" : "border-gray-300"}`}
        defaultValue=""
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}