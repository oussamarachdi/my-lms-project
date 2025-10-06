import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import { clearToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

type Item = { id: string; type: "Dare" | "Gossip"; text: string; author?: string };

export default function SpinnerPage() {
  const nav = useNavigate();
  const [items, setItems] = useState<Item[]>([]);
  const [tab, setTab] = useState<"All"|"Dare"|"Gossip">("All");
  const [spinning, setSpinning] = useState(false);
  const [picked, setPicked] = useState<Item|null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    (async () => {
  const base = import.meta.env.VITE_API_URL || "https://lms-backend-ihyi.onrender.com";
      const res = await fetch(base + "/api/dare-gossip");
      const json = await res.json();
      const raw: any[] = json.items || [];
      // normalize different header names to { id, type, text, author }
      const normalized: Item[] = raw.map(row => {
        const keys = Object.keys(row || {});
        const get = (names: string[]) => {
          for (const n of names) {
            if (n in row) return row[n];
            const alt = keys.find(k => k.toLowerCase() === n.toLowerCase());
            if (alt) return row[alt];
          }
          return undefined;
        };
        const id = get(["id", "ID", "Id", "dare id", "identifier"] ) || "";
        const type = get(["type", "Type", "Category"]) || "Dare";
        const text = get(["text", "Text", "content", "Content", "message"]) || "";
        const author = get(["author", "Author", "name"]) || undefined;
        return { id, type, text, author } as Item;
      });
      setItems(normalized);
    })();
  }, []);

  const pool = useMemo(
    () => items.filter(i => (tab === "All" ? true : i.type === tab)),
    [items, tab]
  );

  function spin() {
    if (!pool.length || spinning) return;
    setPicked(null);
    setSpinning(true);
    setTimeout(() => {
      const idx = Math.floor(Math.random() * pool.length);
      const item = pool[idx];
      setPicked(item);
      setSpinning(false);
      // show confirmation popup and delete on OK
      handlePicked(item);
    }, 1600);
  }

  async function handlePicked(item: Item) {
  const base = import.meta.env.VITE_API_URL || "https://lms-backend-ihyi.onrender.com";
    console.log(item.id);
    const result = await Swal.fire({
      title: `${item.type}`,
      html: `<div style="text-align:left">${item.text.replace(/\n/g, "<br/>")}</div>`,
      showCancelButton: true,
      confirmButtonText: "OK",
      focusCancel: true,
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        try {
          setDeleting(true);
          const resp = await fetch(base + `/api/dare-gossip/${item.id}`, { method: "DELETE" });
          const json = await resp.json().catch(() => ({ ok: false }));
          if (!resp.ok || !json.ok) throw new Error(json?.error || `Request failed (${resp.status})`);
          return json;
        } catch (err) {
          Swal.showValidationMessage(`Request failed: ${err && (err as any).message ? (err as any).message : String(err)}`);
          throw err;
        } finally {
          setDeleting(false);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });

    if (result.isConfirmed) {
      // remove from items so it won't be picked again
      setItems(prev => prev.filter(i => i.id !== item.id));
      setPicked(null);
      Swal.fire({ icon: "success", title: "Deleted", text: "Entry removed." });
    }
  }

  return (
    <section className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold">Dare & Gossip Spinner</h1>
          <button
            className="text-sm opacity-80 hover:opacity-100 underline"
            onClick={() => { clearToken(); nav("/spinner-login"); }}
          >Log out</button>
        </div>

        <div className="inline-flex rounded-xl bg-white/10 p-1 mb-6">
          {(["All","Dare","Gossip"] as const).map(t => (
            <button key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold ${tab===t?'bg-white text-slate-900':'hover:bg-white/10'}`}>
              {t}
            </button>
          ))}
        </div>

        <div className="relative mx-auto w-72 h-72 sm:w-96 sm:h-96 rounded-full border-4 border-white/30 grid place-items-center overflow-hidden">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-[16px] border-transparent border-b-white" />
          <div className={`absolute inset-0 transition-transform duration-[1600ms] ease-out ${spinning ? 'rotate-[1080deg]' : ''}`}>
            {[...Array(24)].map((_,i)=>(
              <div key={i}
                className="absolute left-1/2 top-1/2 h-1/2 w-[2px] bg-white/20 origin-bottom"
                style={{ transform: `rotate(${(360/24)*i}deg)` }}
              />
            ))}
          </div>
          <button
            onClick={spin}
            className="z-10 rounded-full bg-white text-slate-900 font-bold px-6 py-3 hover:bg-gray-100"
            disabled={spinning || !pool.length || deleting}
          >{spinning ? "Spinning..." : "Spin"}</button>
        </div>

        {deleting && <div className="mt-4 text-sm text-yellow-300">Deleting entry...</div>}

        <div className="mt-8">
          {picked ? (
            <div className="rounded-2xl bg-white/10 p-5">
              <div className="text-sm uppercase opacity-80">{picked.type}</div>
              <div className="mt-1 text-xl font-semibold">{picked.text}</div>
            </div>
          ) : (
            <p className="opacity-70">Pick a category and press Spin to choose a random entry.</p>
          )}
        </div>
      </div>
    </section>
  );
}
