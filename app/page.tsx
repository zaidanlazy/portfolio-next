import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <footer className="border-t border-white/[0.06] px-6 py-8 pb-12 text-center font-mono text-[11px] text-inkFaint">
        © 2026 Zaidan Maulana Alghifari — Dibuat dengan Next.js
      </footer>
    </main>
  );
}
