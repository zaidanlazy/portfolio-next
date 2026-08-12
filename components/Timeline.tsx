import Reveal from "./Reveal";

const items = [
  {
    date: "2026",
    title: "Narasumber Mini Talkshow — SPNF SKB Bontang",
    desc: "Diundang sebagai pembicara alumni untuk berbagi pengalaman dan perjalanan pendidikan.",
  },
  {
    date: "2023 – 2026",
    title: "SMKN 1 Bontang — Rekayasa Perangkat Lunak",
    desc: "Menyelesaikan pendidikan vokasi dengan fokus pada pengembangan perangkat lunak dan web.",
  },
];

export default function Timeline() {
  return (
    <section id="perjalanan" className="max-w-[880px] mx-auto px-6 py-20">
      <div className="flex items-baseline gap-3 mb-9">
        <span className="font-mono text-[13px] text-inkFaint">04</span>
        <h2 className="font-display text-[26px]">Perjalanan</h2>
      </div>
      <Reveal>
        <div className="relative pl-7">
          <div className="absolute left-[6px] top-1.5 bottom-1.5 w-px bg-border" />
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`relative ${i !== items.length - 1 ? "pb-8" : ""}`}
            >
              <div className="absolute -left-7 top-1 w-[11px] h-[11px] rounded-full bg-bg border-2 border-accent" />
              <span className="font-mono text-[12px] text-inkFaint mb-1 block">
                {item.date}
              </span>
              <h3 className="text-[16px] font-display mb-1">{item.title}</h3>
              <p className="text-[14px] text-inkSoft">{item.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
