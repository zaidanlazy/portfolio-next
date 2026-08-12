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
    <section id="keahlian" className="max-w-[880px] mx-auto px-6 py-20">
      <div className="flex items-baseline gap-3 mb-9">
        <h2 className="font-display text-[26px]">Keahlian</h2>
      </div>
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-[13px] font-medium text-accent uppercase tracking-wide mb-3.5">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-[13px] px-3 py-1.5 rounded-md bg-bgAlt border border-border text-inkSoft"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      <p className="text-[12.5px] text-inkFaint italic mt-5">
        * Sesuaikan daftar bahasa/framework/tools di atas dengan yang
        benar-benar kamu kuasai.
      </p>
    </section>
  );
}
