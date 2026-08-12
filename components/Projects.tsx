import Reveal from "./Reveal";

type Project = {
  title: string;
  tag: string;
  description: string;
  tech: string[];
  linkLabel: string;
  linkHref: string;
  isPlaceholder?: boolean;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Portofolio Website Personal",
    tag: "Web Dev",
    description:
      "Website portofolio pribadi dengan desain playful dan warna-warna cerah, terinspirasi dari referensi desain modern. Dibangun dengan elemen interaktif seperti side navigation, grid portofolio yang bisa di-expand, marquee berjalan, dan popup detail proyek.",
    tech: ["HTML", "CSS", "JavaScript"],
    linkLabel: "[Tambahkan link demo/repo di sini]",
    linkHref: "#",
    isPlaceholder: true,
    image: "/images/proj1.jpg",
  },
  {
    title: "[Nama Proyek Kedua]",
    tag: "[Kategori]",
    description:
      'Ceritakan singkat masalah yang diselesaikan proyek ini, peranmu, dan hasilnya. Contoh: "Aplikasi pencatat jadwal shift yang mengotomatisasi progres tanggal, mengurangi kerja manual tim."',
    tech: ["[Tech 1]", "[Tech 2]"],
    linkLabel: "Lihat Proyek →",
    linkHref: "#",
    image: "/images/proj2.jpg",
  },
  {
    title: "[Nama Proyek Ketiga]",
    tag: "[Kategori]",
    description:
      "Slot ini bisa diisi proyek sekolah, tugas akhir/PKL, atau proyek pribadi lain yang menunjukkan kemampuanmu membangun sesuatu dari awal sampai selesai.",
    tech: ["[Tech 1]", "[Tech 2]"],
    linkLabel: "Lihat Proyek →",
    linkHref: "#",
    image: "/images/proj3.jpg",
  },
];

export default function Projects() {
  return (
    <section id="proyek" className="max-w-[880px] mx-auto px-6 py-20">
      <div className="flex items-baseline gap-3 mb-9">
        <h2 className="font-display text-[26px]">Proyek</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Reveal key={project.title}>
            <a
              href={project.linkHref}
              className="group block rounded-[12px] overflow-hidden bg-white border border-border hover:border-accent transform transition-transform duration-300 hover:-translate-y-3 shadow-sm hover:shadow-lg"
            >
              <div className="h-40 overflow-hidden bg-gradient-to-br from-[#F5F7FA] to-[#EEF2F6] flex items-center justify-center">
                {/* Image area */}
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.image} alt={project.title} className="w-full h-40 object-cover project-img" />
                ) : (
                  <div className="text-inkFaint font-mono text-sm">Thumbnail</div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-[18px] font-display group-hover:text-ink">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[11px] text-highlight bg-[#FFF6E8] px-2.5 py-1 rounded-full whitespace-nowrap">
                    {project.tag}
                  </span>
                </div>
                <p className="text-inkSoft text-[14px] mb-4">{project.description}</p>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[12px] font-mono text-inkFaint">
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.isPlaceholder ? (
                    <span className="text-[12.5px] text-inkFaint italic">{project.linkLabel}</span>
                  ) : (
                    <span className="text-[13px] font-medium text-accent group-hover:underline">{project.linkLabel}</span>
                  )}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
