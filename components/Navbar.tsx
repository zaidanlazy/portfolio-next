"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#proyek", label: "Proyek" },
  { href: "#pendidikan", label: "Pendidikan" },
  { href: "#pengalaman", label: "Pengalaman IT" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="glass-panel relative mx-auto flex max-w-[1080px] items-center justify-between rounded-full px-5 py-3 md:px-7">
        <a
          href="#home"
          className="absolute left-1/2 -translate-x-1/2 font-display text-[17px] font-bold tracking-tight text-white"
          onClick={() => setMenuOpen(false)}
        >
          Zaidan<span className="text-blue-300">.Dev</span>
        </a>
        <span aria-hidden="true" className="h-7 w-8" />
        <span aria-hidden="true" className="ml-auto mr-3 h-7 border-l border-white/15" />
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white"
          aria-label={menuOpen ? "Tutup navigasi" : "Buka navigasi"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
        {menuOpen && (
          <ul className="glass-panel absolute left-0 right-0 top-[calc(100%+10px)] flex flex-col gap-1 rounded-3xl p-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-2xl px-4 py-3 text-sm text-inkSoft transition hover:bg-white/[0.06] hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
