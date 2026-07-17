import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROFILE } from "@/lib/data";

const easeExpo = [0.76, 0, 0.24, 1];

function MaskedLine({ children, delay = 0 }) {
  return (
    <span className="mask-reveal block">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.2, delay, ease: easeExpo }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const orbRot = useTransform(scrollYProgress, [0, 1], [0, 60]);

  useEffect(() => {
    const onMove = (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const py = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      el.style.setProperty("--px", px.toFixed(3));
      el.style.setProperty("--py", py.toFixed(3));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={ref}
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100vh] w-full overflow-hidden pt-32 md:pt-40"
      style={{ background: "var(--bg)" }}
    >
      {/* 3D-ish orb parallax */}
      <motion.div
        aria-hidden
        style={{ y: orbY, rotate: orbRot }}
        className="pointer-events-none absolute -right-40 -top-40 md:right-[-10rem] md:top-[-6rem] w-[36rem] h-[36rem] md:w-[52rem] md:h-[52rem]"
      >
        <div
          className="floaty w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #1c1f14, #0a0a0c 55%, transparent 70%)",
            boxShadow:
              "inset -80px -80px 200px rgba(212,255,0,0.25), inset 80px 80px 200px rgba(0,0,0,0.9)",
            filter: "blur(2px)",
            transform:
              "translate3d(calc(var(--px, 0) * 12px), calc(var(--py, 0) * 12px), 0)",
          }}
        />
      </motion.div>

      {/* Grid lines */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
        {/* meta row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: easeExpo }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono uppercase text-[10px] md:text-xs tracking-[0.25em] text-[#A1A1AA] mb-10 md:mb-16"
        >
          <div>
            <span className="block text-[#F2F2F2]/40 mb-2">◆ Portfolio</span>
            <span>Kuldeep Amreliya</span>
          </div>
          <div>
            <span className="block text-[#F2F2F2]/40 mb-2">◆ Based in</span>
            <span>Ahmedabad — IN</span>
          </div>
          <div>
            <span className="block text-[#F2F2F2]/40 mb-2">◆ Focus</span>
            <span>AI · Full-stack</span>
          </div>
          <div>
            <span className="block text-[#F2F2F2]/40 mb-2">◆ Status</span>
            <span className="text-[#D4FF00]">● Open to work</span>
          </div>
        </motion.div>

        {/* kinetic headline */}
        <motion.h1
          style={{ y, scale }}
          className="font-display font-medium text-[#F2F2F2] leading-[0.85] text-[13vw] md:text-[10.5vw] tracking-[-0.04em]"
        >
          <MaskedLine delay={0.35}>{PROFILE.tagline[0]}</MaskedLine>
          <MaskedLine delay={0.5}>
            <span className="font-editorial text-[#D4FF00]">
              {PROFILE.tagline[1]}
            </span>
          </MaskedLine>
          <MaskedLine delay={0.65}>{PROFILE.tagline[2]}</MaskedLine>
        </motion.h1>

        {/* Bottom row */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-8 md:gap-6 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: easeExpo }}
            className="md:col-span-5 text-[#A1A1AA] text-base md:text-lg leading-relaxed max-w-md"
            data-testid="hero-intro"
          >
            {PROFILE.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="md:col-span-4 md:col-start-8 flex flex-col gap-3 font-mono uppercase text-[10px] md:text-xs tracking-[0.25em]"
          >
            {PROFILE.roles.map((r, i) => (
              <div
                key={r}
                className="flex justify-between items-center border-b py-3"
                style={{ borderColor: "var(--border)" }}
              >
                <span className="text-[#A1A1AA]">
                  0{i + 1} — {r}
                </span>
                <span className="text-[#F2F2F2]/40">↳</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-16 md:mt-24 mb-10 flex items-center justify-between font-mono uppercase text-[10px] tracking-[0.3em] text-[#A1A1AA]"
        >
          <span>scroll — begin the manifesto</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
