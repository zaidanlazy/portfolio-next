import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="max-w-[880px] mx-auto px-6 pt-28 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 font-mono text-[13px] text-accent mb-5">
            <span className="w-[7px] h-[7px] rounded-full bg-[#2F9E5B] shadow-[0_0_0_3px_#2F9E5B22]" />
            <span>Terbuka untuk magang dan siap bekerja sama </span>
          </div>
          <h1 className="font-display font-extrabold text-[48px] md:text-[96px] leading-[0.95] mb-3">
            Zaidan Maulana Alghifari
          </h1>
          <p className="max-w-[560px] text-inkSoft text-[16px] mb-9">
            Lulusan SMKN 1 Bontang jurusan RPL yang senang membangun sesuatu
            dari nol — dari struktur data sampai antarmuka yang enak dipakai.
            Terbiasa kerja mandiri, teliti, dan berpikir realistis soal apa
            yang benar-benar perlu dibangun.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#proyek"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium bg-ink text-bg hover:-translate-y-0.5 hover:shadow-[0_6px_18px_-6px_#1B243055] transition"
            >
              Lihat Proyek →
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium border border-border text-ink hover:border-accent hover:text-accent hover:-translate-y-0.5 transition"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        <Reveal>
          <div className="bg-ink rounded-xl overflow-hidden max-w-[480px] shadow-[0_20px_40px_-20px_#1B243040]">
            <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-[#232E3D]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3A4759]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3A4759]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3A4759]" />
            </div>
            <div className="px-5.5 py-6 font-mono text-[13.5px] leading-[1.8] text-[#C7D0DB]">
              <p className="text-[#6B7A8F]">// profil.js</p>
              <p>
                <span className="text-highlight">const</span> zaidan = {"{"}
              </p>
              <p className="pl-4">
                asal: <span className="text-[#8FCB9B]">&quot;Bontang, Kaltim&quot;</span>,
              </p>
              <p className="pl-4">
                lulusan:{" "}
                <span className="text-[#8FCB9B]">
                  &quot;SMKN 1 Bontang — RPL&quot;
                </span>
                ,
              </p>
              <p className="pl-4">
                fokus: [<span className="text-[#8FCB9B]">&quot;web dev&quot;</span>,{" "}
                <span className="text-[#8FCB9B]">&quot;problem solving&quot;</span>],
              </p>
              <p className="pl-4">
                status: <span className="text-[#7FB3E0]">&quot;open_to_work&quot;</span>
              </p>
              <p>{"}"};</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
