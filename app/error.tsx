"use client";

import React from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  return (
    <html>
      <body className="min-h-screen flex items-center justify-center bg-bg text-ink">
        <div className="max-w-xl p-8 bg-white rounded-2xl shadow-md text-center">
          <h1 className="text-2xl font-display mb-2">Terjadi Kesalahan</h1>
          <p className="text-inkSoft mb-6">Maaf, ada masalah saat memuat halaman.</p>
          <pre className="text-xs text-left text-inkFaint mb-6 overflow-auto">{String(error?.message)}</pre>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => reset()}
              className="px-4 py-2 bg-ink text-bg rounded-md"
            >
              Coba lagi
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
