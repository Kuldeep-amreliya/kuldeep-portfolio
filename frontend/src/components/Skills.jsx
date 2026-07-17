import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";

const easeExpo = [0.76, 0, 0.24, 1];

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative py-32 md:py-48 border-t"
      style={{ background: "var(--bg)", borderColor: "var(--border)" }}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easeExpo }}
          className="grid md:grid-cols-12 gap-8 items-end mb-16"
        >
          <div className="md:col-span-6">
            <span className="font-mono uppercase text-xs tracking-[0.25em] text-[#D4FF00]">
              ● 05 · Toolkit
            </span>
            <h2 className="font-display font-medium text-5xl md:text-7xl tracking-tighter leading-[0.95] mt-6 text-[#F2F2F2]">
              A sharpened{" "}
              <span className="font-editorial">stack.</span>
            </h2>
          </div>
          <p className="md:col-span-5 md:col-start-8 text-[#A1A1AA] text-base md:text-lg leading-relaxed">
            The instruments I reach for — chosen because they get out of the
            way. Ordered by frequency of use, not by hype.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-px border" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
          {SKILLS.map((g, i) => (
            <motion.div
              key={g.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: easeExpo }}
              className="col-span-12 md:col-span-6 lg:col-span-4 p-6 md:p-8"
              style={{ background: "var(--bg)" }}
              data-testid={`skill-group-${g.group.toLowerCase().replace(/\s|·/g, "-")}`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono uppercase text-[10px] tracking-[0.3em] text-[#A1A1AA]">
                  0{i + 1} / {g.group}
                </span>
                <span className="font-mono text-[10px] text-[#F2F2F2]/40">
                  {g.items.length}
                </span>
              </div>
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="font-display text-2xl md:text-3xl leading-tight text-[#F2F2F2] hover:text-[#D4FF00] transition-colors duration-500"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
