import Reveal from "./Reveal";

const groups = [
  {
    title: "Bahasa & Framework",
    items: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "Tools",
    items: ["Git", "VS Code", "Figma", "Postman"],
  },
  {
    title: "Soft Skills",
    items: [
      "Problem Solving",
      "Kerja Mandiri",
      "Public Speaking",
      "Manajemen Waktu",
    ],
  },
];

export default function Skills() {
  return (
    <section id="keahlian" className="mx-auto max-w-[980px] px-6 py-20 md:px-10 md:py-24">
      <div className="mb-9">
        <span className="section-kicker">02 / Keahlian</span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Hal yang saya gunakan
        </h2>
      </div>
      <Reveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title} className="glass-panel rounded-[24px] p-5 md:p-6">
              <h3 className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-blue-300">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] text-inkSoft"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      <p className="mt-5 text-[12px] italic text-inkFaint">
        * Sesuaikan daftar bahasa/framework/tools di atas dengan yang
        benar-benar kamu kuasai.
      </p>
    </section>
  );
}
