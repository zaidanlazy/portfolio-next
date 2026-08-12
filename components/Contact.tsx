import Reveal from "./Reveal";
import { MessageCircle, Mail, Download } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="kontak" className="max-w-[880px] mx-auto px-6 py-20">
      <Reveal>
        <div className="bg-ink text-bg rounded-2xl px-6 md:px-16 py-14 text-center shadow-xl shadow-black/10">
          <h2 className="font-display text-bg text-[30px] mb-3">
            Mari Bekerja Sama
          </h2>
          <p className="text-[#C7D0DB] max-w-[460px] mx-auto mb-8 text-[15px] leading-relaxed">
            Sedang mencari kandidat magang atau entry-level di bidang
            software/web development? Saya siap berdiskusi lebih lanjut.
          </p>

          <div className="flex justify-center gap-3.5 flex-wrap mb-8">
            <a
            href="mailto:emailkamu@contoh.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium bg-highlight text-ink hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
            <Mail size={16} />
            Kirim Email
            </a>

            <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium border border-[#3A4759] text-bg hover:-translate-y-0.5 hover:bg-white/5 transition-all"
            >
            <Download size={16} />
            Unduh CV
            </a>
          </div>

          <div className="flex justify-center gap-6 text-[13px] font-mono text-inkFaint flex-wrap">
            <a
            href="https://www.linkedin.com/in/zaidan-maulana-alghifari-839270370/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-bg transition-colors"
            >
            <FaLinkedin size={15} />
            LinkedIn
            </a>

            <a
            href="https://github.com/zaidanlazy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-bg transition-colors"
            >
            <FaGithub size={15} />
            GitHub
            </a>

            <a
            href="https://wa.me/6281352271226?text=Halo%20Zaidan%2C%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20posisi%20magang%2Fentry-level"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-bg transition-colors"
            >
            <MessageCircle size={15} />
            WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}