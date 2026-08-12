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
      <footer className="text-center py-8 pb-12 text-[12.5px] text-inkFaint font-mono">
        © 2026 Zaidan — Dibuat dengan Next.js &amp; Tailwind CSS
      </footer>
    </main>
  );
}
