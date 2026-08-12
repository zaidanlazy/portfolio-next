export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-6 md:px-16 bg-transparent">
      <div className="font-mono text-[15px] font-medium">
        zaidan<span className="text-accent">.dev</span>
      </div>
      <ul className="hidden md:flex gap-7 text-sm text-inkSoft">
        <li>
          <a href="#tentang" className="nav-link hover:text-ink transition-colors">
            Tentang
          </a>
        </li>
        <li>
          <a href="#keahlian" className="nav-link hover:text-ink transition-colors">
            Keahlian
          </a>
        </li>
        <li>
          <a href="#proyek" className="nav-link hover:text-ink transition-colors">
            Proyek
          </a>
        </li>
        <li>
          <a href="#perjalanan" className="nav-link hover:text-ink transition-colors">
            Perjalanan
          </a>
        </li>
      </ul>
      <a
        href="#kontak"
        className="btn-contact text-[13px] px-4 py-2 rounded-full bg-ink text-bg whitespace-nowrap shadow-sm hover:shadow-md transform transition"
      >
        Hubungi Saya
      </a>
    </nav>
  );
}
