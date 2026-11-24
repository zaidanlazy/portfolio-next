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
    <section id="proyek" className="mx-auto max-w-[980px] px-6 py-20 md:px-10 md:py-24">
      <div className="mb-9">
        <span className="section-kicker">03 / Portofolio</span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Beberapa yang pernah saya buat
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <Reveal key={project.title}>
            <a
              href={project.linkHref}
              className="group glass-panel block overflow-hidden rounded-[26px] transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:shadow-[0_22px_60px_-34px_#3478f6]"
            >
              <div className="h-48 overflow-hidden bg-gradient-to-br from-[#101d37] to-[#080d19]">
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.image} alt={project.title} className="project-img h-full w-full object-cover opacity-85" />
                ) : (
                  <div className="flex h-full items-center justify-center font-mono text-sm text-inkFaint">Thumbnail</div>
                )}
              </div>
              <div className="p-5 md:p-6">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="font-display text-[18px] text-white transition group-hover:text-blue-200">
                    {project.title}
                  </h3>
                  <span className="whitespace-nowrap rounded-full border border-blue-200/15 bg-blue-400/[0.08] px-2.5 py-1 font-mono text-[10px] text-blue-200">
                    {project.tag}
                  </span>
                </div>
                <p className="mb-5 text-[13px] leading-6 text-inkSoft">{project.description}</p>
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-4">
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {project.tech.map((t) => (
                      <span key={t} className="font-mono text-[10px] text-inkFaint">
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.isPlaceholder ? (
                    <span className="text-[11px] italic text-inkFaint">{project.linkLabel}</span>
                  ) : (
                    <span className="text-[12px] font-medium text-blue-300 group-hover:underline">{project.linkLabel}</span>
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
