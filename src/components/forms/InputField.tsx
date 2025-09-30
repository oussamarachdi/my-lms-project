
export default function InputField({ label, name, type = "text", required, placeholder, error }: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string; error?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="font-medium text-gray-700">{label}{required && <span className="text-red-600"> *</span>}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={`mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900/10 ${error ? "border-red-300" : "border-gray-300"}`}
      />
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}