
export type TeamMember = {
  id: string;
  name: string;
  role: string;
  photo?: string;
  linkedin?: string;
  email?: string;
};

function Avatar({ src, alt, fallback }: { src?: string; alt: string; fallback: string }) {
  return src ? (
    <img
      src={src}
      alt={alt}
      className="h-32 w-32 rounded-full object-cover bg-gray-400 ring-4 ring-white shadow"
    />
  ) : (
    <div className="h-32 w-32 rounded-full bg-gray-200 grid place-items-center ring-4 ring-white shadow">
      <span className="text-2xl font-semibold text-gray-600">{fallback}</span>
    </div>
  );
}


export default function TeamCard({ m }: { m: TeamMember }) {
  const initials = m.name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article className="group rounded-2xl border border-gray-200 bg-white p-6 text-center hover:shadow-sm transition">
      <div className="flex flex-col items-center">
        <Avatar src={m.photo} alt={m.name} fallback={initials} />
        <h3 className="mt-4 font-semibold text-gray-900">{m.name}</h3>
        <p className="mt-1 text-sm text-gray-600">{m.role}</p>
        <div className="mt-3 flex items-center gap-2">
          {m.linkedin && (
            <a
              href={m.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs rounded-full border border-gray-200 px-2 py-1 text-gray-700 hover:bg-gray-50"
            >
              LinkedIn
            </a>
          )}
          {m.email && (
            <a
              href={`mailto:${m.email}`}
              className="text-xs rounded-full border border-gray-200 px-2 py-1 text-gray-700 hover:bg-gray-50"
            >
              Email
            </a>
          )}
        </div>
      </div>
    </article>
  );
}