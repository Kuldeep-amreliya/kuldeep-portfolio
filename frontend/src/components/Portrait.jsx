import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PHOTOS, PROFILE } from "@/lib/data";

const easeExpo = [0.76, 0, 0.24, 1];

export default function Portrait() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const yA = useTransform(scrollYProgress, [0, 1], [40, -80]);
  const yB = useTransform(scrollYProgress, [0, 1], [80, -40]);

  return (
    <section
      ref={ref}
      id="portrait"
      data-testid="portrait-section"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: easeExpo }}
          className="flex items-center gap-4 font-mono uppercase text-xs tracking-[0.25em] text-[#A1A1AA] mb-12 md:mb-16"
        >
          <span className="text-[#D4FF00]">●</span>
          <span>Portrait · 2025</span>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
          <span>Ahmedabad — IN</span>
        </motion.div>

        <div className="grid grid-cols-12 gap-4 md:gap-6 items-end">
          {/* Small portrait A */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, delay: 0.05, ease: easeExpo }}
            className="col-span-6 md:col-span-3 duotone-container"
          >
            <div
              className="relative overflow-hidden aspect-[3/4]"
              style={{ background: "#0f0f11" }}
            >
              <motion.img
                src={PHOTOS.portraitA}
                alt="Kuldeep — portrait 01"
                style={{ y: yA }}
                className="duotone absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center font-mono text-[9px] uppercase tracking-[0.25em] text-[#F2F2F2]/80 z-10">
                <span>k.01</span>
                <span className="text-[#D4FF00]">✦</span>
              </div>
            </div>
          </motion.div>

          {/* Main wide portrait */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: easeExpo }}
            className="col-span-12 md:col-span-6 duotone-container spotlight"
            onMouseMove={(e) => {
              const el = e.currentTarget;
              const r = el.getBoundingClientRect();
              el.style.setProperty("--mx", `${e.clientX - r.left}px`);
              el.style.setProperty("--my", `${e.clientY - r.top}px`);
            }}
          >
            <div
              className="relative overflow-hidden aspect-[5/6]"
              style={{ background: "#0f0f11" }}
            >
              <motion.img
                src={PHOTOS.portraitWide}
                alt={`${PROFILE.name} — studio portrait`}
                style={{ y: yImg }}
                className="duotone absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 55%, rgba(10,10,12,0.7) 100%)",
                }}
              />
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end font-mono text-[10px] uppercase tracking-[0.25em] text-[#F2F2F2] z-10">
                <div>
                  <div className="text-[#D4FF00] mb-1">◆ Studio · No.001</div>
                  <div className="text-[#F2F2F2]/70">Kuldeep Amreliya</div>
                </div>
                <span className="text-[#F2F2F2]/70">Ahmedabad · 2025</span>
              </div>
            </div>
          </motion.div>

          {/* Small portrait B */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, delay: 0.1, ease: easeExpo }}
            className="col-span-6 md:col-span-3 duotone-container md:mt-24"
          >
            <div
              className="relative overflow-hidden aspect-[3/4]"
              style={{ background: "#0f0f11" }}
            >
              <motion.img
                src={PHOTOS.portraitB}
                alt="Kuldeep — portrait 02"
                style={{ y: yB }}
                className="duotone absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center font-mono text-[9px] uppercase tracking-[0.25em] text-[#F2F2F2]/80 z-10">
                <span>k.02</span>
                <span className="text-[#D4FF00]">✦</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: easeExpo }}
          className="mt-16 md:mt-20 grid md:grid-cols-12 gap-6"
        >
          <div className="md:col-span-1 font-mono uppercase text-xs tracking-[0.25em] text-[#D4FF00]">
            ◆ 02
          </div>
          <p className="md:col-span-7 font-editorial text-2xl md:text-4xl leading-[1.15] text-[#F2F2F2]">
            The person behind the code — engineer, tinkerer, and student of
            language models. Currently building{" "}
            <span className="text-[#D4FF00]">quiet, precise software</span> from
            Ahmedabad.
          </p>
          <div className="md:col-span-3 md:col-start-10 font-mono uppercase text-[10px] tracking-[0.25em] text-[#A1A1AA] flex md:justify-end items-end">
            <span>Shot on iPhone · Available light</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
