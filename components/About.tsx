export default function About() {
  return (
    <section id="tentang" className="mx-auto max-w-[980px] px-6 py-20 md:px-10 md:py-28">
      <div className="mb-9">
        <span className="section-kicker">01 / Tentang saya</span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Sedikit tentang perjalanan saya
        </h2>
      </div>
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
        <div className="glass-panel space-y-4 rounded-[26px] p-6 text-[15px] leading-7 text-inkSoft md:p-8">
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
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1">
          {[
            { label: "Lokasi", value: "Bontang, Kalimantan Timur" },
            { label: "Pendidikan", value: "SMKN 1 Bontang — RPL" },
            { label: "Fokus", value: "Pengembangan Web & Software" },
            {
              label: "Gaya Kerja",
              value: "Mandiri, teliti, berorientasi solusi",
            },
          ].map((item) => (
            <li key={item.label} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5">
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.14em] text-inkFaint">
                {item.label}
              </span>
              <span className="text-[14px] text-blue-50">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
