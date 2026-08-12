import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="tentang" className="max-w-[880px] mx-auto px-6 py-20">
      <div className="flex items-baseline gap-3 mb-9">
        <span className="font-mono text-[13px] text-inkFaint">01</span>
        <h2 className="font-display text-[26px]">Tentang Saya</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 items-start">
        <div className="text-inkSoft space-y-4">
          <p>
            Saya baru saja menyelesaikan pendidikan di SMKN 1 Bontang dengan
            jurusan Rekayasa Perangkat Lunak (RPL). Selama sekolah, saya
            belajar membangun aplikasi dan situs web dari perencanaan sampai
            eksekusi, dan paling menikmati proses menyelesaikan masalah
            teknis secara mandiri.
          </p>
          <p>
            Saya seorang yang pragmatis — lebih suka fokus pada hal yang
            benar-benar berdampak daripada sekadar mengikuti tren. Saat ini
            saya sedang mencari kesempatan magang atau posisi entry-level di
            bidang pengembangan perangkat lunak, sambil tetap menjajaki opsi
            melanjutkan pendidikan di bidang teknologi.
          </p>
        </div>
        <ul className="flex flex-col gap-4">
          {[
            { label: "Lokasi", value: "Bontang, Kalimantan Timur" },
            { label: "Pendidikan", value: "SMKN 1 Bontang — RPL" },
            { label: "Fokus", value: "Pengembangan Web & Software" },
            {
              label: "Gaya Kerja",
              value: "Mandiri, teliti, berorientasi solusi",
            },
          ].map((item) => (
            <li key={item.label} className="border-l-2 border-border pl-3.5">
              <span className="block font-mono text-[11.5px] uppercase tracking-wide text-inkFaint mb-0.5">
                {item.label}
              </span>
              <span className="text-[14.5px]">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
