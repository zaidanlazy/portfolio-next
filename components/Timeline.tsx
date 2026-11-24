import Image from "next/image";
import Reveal from "./Reveal";

const education = [
  {
    period: "Saat ini",
    institution: "Universitas Islam Malang",
    program: "S1 Informatika",
    logo: "/images/universitas-islam-malang.png",
    alt: "Logo Universitas Islam Malang",
  },
  {
    period: "2023 – 2026",
    institution: "SMK Negeri 1 Bontang",
    program: "Rekayasa Perangkat Lunak",
    logo: null,
    alt: "",
  },
];

const experience = [
  { company: "PT Badak NGL", duration: "3 bulan" },
  { company: "PT Pupuk Kaltim", duration: "4 bulan" },
];

export default function Timeline() {
  return (
    <>
      <section
        id="pendidikan"
        className="mx-auto max-w-[980px] scroll-mt-24 px-6 py-20 md:px-10 md:py-24"
      >
        <div className="mb-9">
          <span className="section-kicker">04 / Pendidikan</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Riwayat pendidikan
          </h2>
        </div>
        <Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {education.map((item) => (
              <article
                key={item.institution}
                className="glass-panel flex min-h-36 items-center gap-5 rounded-[26px] p-5 md:p-6"
              >
                {item.logo ? (
                  <div className="flex h-[76px] w-[96px] shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-2">
                    <Image
                      src={item.logo}
                      alt={item.alt}
                      width={160}
                      height={40}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                ) : (
                  <div
                    className="flex h-[76px] w-[76px] shrink-0 flex-col items-center justify-center rounded-2xl border border-blue-200/20 bg-gradient-to-br from-blue-400/20 to-indigo-500/10 text-blue-100"
                    aria-label="SMK Negeri 1 Bontang"
                  >
                    <span className="font-mono text-[9px] tracking-[0.16em]">SMK</span>
                    <span className="font-display text-3xl font-bold leading-none">1</span>
                    <span className="font-mono text-[7px] tracking-[0.12em]">BONTANG</span>
                  </div>
                )}
                <div className="min-w-0">
                  <span className="mb-2 inline-flex rounded-full border border-blue-200/15 bg-blue-400/[0.08] px-2.5 py-1 font-mono text-[10px] text-blue-200">
                    {item.period}
                  </span>
                  <h3 className="font-display text-[16px] font-semibold leading-snug text-white md:text-[17px]">
                    {item.institution}
                  </h3>
                  <p className="mt-1 text-[13px] leading-5 text-inkSoft">{item.program}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section
        id="pengalaman"
        className="mx-auto max-w-[980px] scroll-mt-24 px-6 py-16 md:px-10 md:py-20"
      >
        <div className="mb-9">
          <span className="section-kicker">05 / Pengalaman IT</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Pengalaman kerja
          </h2>
        </div>
        <Reveal>
          <div className="glass-panel relative rounded-[26px] p-6 md:p-8">
            <div className="absolute bottom-8 left-[38px] top-8 w-px bg-gradient-to-b from-blue-400/70 via-blue-300/20 to-transparent md:left-[46px]" />
            {experience.map((item, index) => (
              <article
                key={item.company}
                className={`relative pl-8 md:pl-10 ${index !== experience.length - 1 ? "pb-9" : ""}`}
              >
                <span className="absolute -left-[1px] top-1 h-3 w-3 rounded-full border-2 border-blue-300 bg-[#0b1427] shadow-[0_0_16px_#60a5fa]" />
                <span className="mb-2 inline-flex rounded-full border border-blue-200/15 bg-blue-400/[0.08] px-2.5 py-1 font-mono text-[10px] text-blue-200">
                  Magang · {item.duration}
                </span>
                <h3 className="mt-2 font-display text-[17px] text-white">{item.company}</h3>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
