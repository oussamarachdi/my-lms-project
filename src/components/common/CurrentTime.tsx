import { useEffect, useState } from "react";

export default function CurrentTime() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  return (
    <div className="inline-flex items-center gap-5 rounded-2xl bg-white/10 backdrop-blur px-6 py-4
                    text-2xl sm:text-3xl font-semibold tracking-widest text-white shadow-lg">
      <TimeBox v={h} label="Hours" />
      <Colon />
      <TimeBox v={m} label="Minutes" />
      <Colon />
      <TimeBox v={s} label="Seconds" />
    </div>
  );
}

function TimeBox({ v, label }: { v: number; label: string }) {
  return (
    <div className="grid place-items-center">
      <div className="tabular-nums leading-none drop-shadow">
        {String(v).padStart(2, "0")}
      </div>
      <div className="text-[11px] uppercase tracking-wider opacity-80">{label}</div>
    </div>
  );
}

function Colon() {
  return <span className="opacity-60 select-none">:</span>;
}
