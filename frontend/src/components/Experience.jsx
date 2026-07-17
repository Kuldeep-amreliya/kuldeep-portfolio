import { motion } from "framer-motion";
import { EXPERIENCE, EDUCATION, ACHIEVEMENTS } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const easeExpo = [0.76, 0, 0.24, 1];

export default function Experience() {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative py-32 md:py-48"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easeExpo }}
          className="grid md:grid-cols-12 gap-8 items-end mb-20"
        >
          <div className="md:col-span-8">
            <span className="font-mono uppercase text-xs tracking-[0.25em] text-[#D4FF00]">
              ● 06 · Trajectory
            </span>
            <h2 className="font-display font-medium text-5xl md:text-7xl tracking-tighter leading-[0.95] mt-6 text-[#F2F2F2]">
              Where I've{" "}
              <span className="font-editorial">shipped.</span>
            </h2>
          </div>
        </motion.div>

        {/* Experience */}
        <div className="divide-y" style={{ borderColor: "var(--border)" }}>
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.05, ease: easeExpo }}
              className="group grid md:grid-cols-12 gap-6 py-10 md:py-14 border-t"
              style={{ borderColor: "var(--border)" }}
              data-testid={`experience-item-${i}`}
            >
              <span className="md:col-span-2 font-mono uppercase text-xs tracking-[0.25em] text-[#A1A1AA]">
                {e.period}
              </span>
              <div className="md:col-span-6">
                <h3 className="font-display text-3xl md:text-5xl leading-tight text-[#F2F2F2] group-hover:text-[#D4FF00] transition-colors duration-500">
                  {e.role}
                </h3>
                <p className="mt-2 font-editorial text-lg md:text-xl text-[#A1A1AA]">
                  {e.company}
                </p>
              </div>
              <ul className="md:col-span-3 md:col-start-9 space-y-3 text-[#A1A1AA] text-sm md:text-base leading-relaxed">
                {e.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[#D4FF00]">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <ArrowUpRight
                size={20}
                className="hidden md:block md:col-span-1 text-[#F2F2F2]/30 group-hover:text-[#D4FF00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Education + Achievements */}
        <div className="mt-24 md:mt-32 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <span className="font-mono uppercase text-xs tracking-[0.25em] text-[#A1A1AA] mb-6 block">
              07 · Education
            </span>
            <div className="space-y-6">
              {EDUCATION.map((ed) => (
                <div
                  key={`${ed.school}-${ed.period}`}
                  className="border-t pt-6"
                  style={{ borderColor: "var(--border)" }}
                >
                  <h4 className="font-display text-2xl md:text-3xl text-[#F2F2F2]">
                    {ed.school}
                  </h4>
                  <p className="mt-2 font-editorial text-[#A1A1AA]">
                    {ed.degree} · {ed.period}{" "}
                    {ed.detail && (
                      <span className="text-[#D4FF00] font-mono text-xs uppercase tracking-widest ml-2">
                        {ed.detail}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <span className="font-mono uppercase text-xs tracking-[0.25em] text-[#A1A1AA] mb-6 block">
              08 · Signals
            </span>
            <div className="space-y-6">
              {ACHIEVEMENTS.map((a) => (
                <div
                  key={a}
                  className="border-t pt-6 flex gap-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="font-mono text-[#D4FF00] text-xs mt-2">✦</span>
                  <span className="font-display text-xl md:text-2xl text-[#F2F2F2] leading-tight">
                    {a}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
