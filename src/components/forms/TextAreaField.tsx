
export default function TextAreaField({ label, name, placeholder }: { label: string; name: string; placeholder?: string; }) {
  return (
    <label className="block text-sm">
      <span className="font-medium text-gray-700">{label}</span>
      <textarea
        name={name}
        placeholder={placeholder}
        rows={4}
        className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900/10"
      />
    </label>
  );
}