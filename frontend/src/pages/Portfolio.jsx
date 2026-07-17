import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import EditorialMarquee from "@/components/Marquee";
import Portrait from "@/components/Portrait";
import Manifesto from "@/components/Manifesto";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function Preloader({ onDone }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let raf;
    let start;
    const step = (t) => {
      if (!start) start = t;
      const elapsed = t - start;
      const pct = Math.min(100, Math.round((elapsed / 1600) * 100));
      setCount(pct);
      if (pct < 100) raf = requestAnimationFrame(step);
      else setTimeout(onDone, 250);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <motion.div
      exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[300] flex flex-col justify-between p-6 md:p-10"
      style={{ background: "#0a0a0c" }}
      data-testid="preloader"
    >
      <div className="flex justify-between font-mono uppercase text-[10px] md:text-xs tracking-[0.3em] text-[#A1A1AA]">
        <span>Kuldeep Amreliya — Portfolio</span>
        <span>2025 / Vol.01</span>
      </div>
      <div className="flex items-end justify-between">
        <span className="font-display text-[15vw] md:text-[10vw] leading-none text-[#F2F2F2]">
          {String(count).padStart(3, "0")}
        </span>
        <span className="font-mono uppercase text-[10px] md:text-xs tracking-[0.3em] text-[#D4FF00]">
          Loading assets · IN
        </span>
      </div>
      <div className="h-px w-full" style={{ background: "var(--border)" }}>
        <div
          className="h-full"
          style={{
            width: `${count}%`,
            background: "#D4FF00",
            transition: "width 0.1s linear",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [loading]);

  return (
    <div className="App grain" data-testid="portfolio-root">
      <AnimatePresence>
        {loading && <Preloader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <CustomCursor />
      <SmoothScroll>
        <Nav />
        <main>
          <Hero />
          <EditorialMarquee />
          <Portrait />
          <Manifesto />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
}
