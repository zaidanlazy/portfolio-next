import Reveal from "./Reveal";
import { MessageCircle, Mail, Eye } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="kontak" className="mx-auto max-w-[980px] px-6 py-20 md:px-10 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[30px] border border-blue-200/20 bg-gradient-to-br from-[#11254a] via-[#0b1730] to-[#09101f] px-6 py-14 text-center shadow-[0_30px_90px_-40px_#3478f6] md:px-16">
          <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-16 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative">
            <span className="section-kicker">06 / Kontak</span>
            <h2 className="mb-3 mt-3 font-display text-[30px] text-white md:text-4xl">
              Mari mulai percakapan
            </h2>
            <p className="mx-auto mb-8 max-w-[460px] text-[14px] leading-relaxed text-blue-100/70 md:text-[15px]">
              Sedang mencari kandidat magang atau entry-level di bidang
              software/web development? Saya siap berdiskusi lebih lanjut.
            </p>

            <div className="mb-8 flex flex-wrap justify-center gap-3.5">
              <a
                href="mailto:email@yza4058.com"
                className="inline-flex items-center gap-2 rounded-full bg-blue-400 px-5 py-3 text-sm font-semibold text-[#07101f] transition-all hover:-translate-y-0.5 hover:bg-sky-300 hover:shadow-lg"
              >
                <Mail size={16} />
                Kirim Email
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                <Eye size={16} />
                Lihat CV
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 font-mono text-[12px] text-blue-100/60">
              <a
                href="https://www.linkedin.com/in/zaidan-maulana-alghifari-839270370/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <FaLinkedin size={15} />
                LinkedIn
              </a>

              <a
                href="https://github.com/zaidanlazy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <FaGithub size={15} />
                GitHub
              </a>

              <a
                href="https://wa.me/6281352271226?text=Halo%20Zaidan%2C%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20posisi%20magang%2Fentry-level"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}