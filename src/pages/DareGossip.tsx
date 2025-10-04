import React, { useState } from "react";
import Header from "../components/layout/Header";

type ItemType = "Dare" | "Gossip";

export default function DareGossipBox() {
  const [type, setType] = useState<ItemType>("Dare");
  const [text, setText] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) {
      setMessage("Please write something first!");
      return;
    }

    // For now just log it – later wire to Google Sheets API
    console.log("Submitted:", { type, text });

    setMessage(`Your ${type.toLowerCase()} has been submitted ✔`);
    setText("");
  }

  return (
    <div>
        <Header />

    <section
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)',
        
      }}
    >
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Dare & Gossip Box
        </h1>
        <p className="text-center text-gray-500 text-sm">
          Share a fun dare or a spicy gossip for the conference 🎉
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Type selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as ItemType)}
              className="w-full rounded-lg border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="Dare">Dare</option>
              <option value="Gossip">Gossip</option>
            </select>
          </div>

          {/* Text input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your {type}
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
              placeholder={type === "Dare" ? "Dare someone to…" : "Spill the tea… (keep it kind!)"}
              className="w-full rounded-lg border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 text-white font-semibold px-4 py-2 hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>

        {message && (
          <p className="text-center text-sm text-green-600">{message}</p>
        )}
      </div>
    </section>

    </div>
  );
}
