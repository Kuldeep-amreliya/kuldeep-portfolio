import { motion } from "framer-motion";
import { MANIFESTO, PROFILE } from "@/lib/data";

const easeExpo = [0.76, 0, 0.24, 1];

export default function Manifesto() {
  return (
    <section
      id="about"
      data-testid="manifesto-section"
      className="relative py-32 md:py-48"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: easeExpo }}
          className="flex items-center gap-4 font-mono uppercase text-xs tracking-[0.25em] text-[#A1A1AA] mb-16 md:mb-24"
        >
          <span className="text-[#D4FF00]">●</span>
          <span>Chapter · About</span>
          <div
            className="flex-1 h-px"
            style={{ background: "var(--border)" }}
          />
          <span>Manifesto / 3</span>
        </motion.div>

        <div className="space-y-24 md:space-y-40">
          {MANIFESTO.map((m, i) => (
            <motion.div
              key={m.n}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.05, ease: easeExpo }}
              className="grid md:grid-cols-12 gap-8 items-start"
            >
              <div className="md:col-span-3">
                <span className="font-mono text-[#D4FF00] text-lg tracking-widest">
                  {m.n}
                </span>
                <div
                  className="mt-4 h-px w-16"
                  style={{ background: "#D4FF00" }}
                />
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-[#F2F2F2]">
                  {i === 1 ? (
                    <>
                      AI as a{" "}
                      <span className="font-editorial text-[#D4FF00]">
                        craft
                      </span>
                      .
                    </>
                  ) : (
                    m.title
                  )}
                </h3>
                <p className="mt-6 md:mt-8 text-lg md:text-xl text-[#A1A1AA] max-w-2xl leading-relaxed">
                  {m.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easeExpo }}
          className="mt-32 md:mt-48 grid md:grid-cols-12 gap-6 items-end"
        >
          <div className="md:col-span-6">
            <span className="font-mono uppercase text-xs tracking-[0.25em] text-[#A1A1AA]">
              04 — Currently
            </span>
            <p className="mt-4 font-display text-2xl md:text-4xl leading-tight text-[#F2F2F2]">
              Shipping enterprise GenAI at{" "}
              <span className="font-editorial">Tender Tiger</span>. Studying at{" "}
              <span className="font-editorial">SAL College · GTU</span>.
              Available for opportunities in 2026.
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-8 font-mono uppercase text-xs tracking-[0.25em] text-[#A1A1AA] space-y-4">
            <div className="flex justify-between border-b pb-3" style={{ borderColor: "var(--border)" }}>
              <span>Location</span>
              <span className="text-[#F2F2F2]">{PROFILE.location}</span>
            </div>
            <div className="flex justify-between border-b pb-3" style={{ borderColor: "var(--border)" }}>
              <span>Email</span>
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-[#D4FF00] link-underline normal-case tracking-normal font-body text-sm"
                data-testid="about-email-link"
              >
                {PROFILE.email}
              </a>
            </div>
            <div className="flex justify-between">
              <span>Phone</span>
              <span className="text-[#F2F2F2]">{PROFILE.phone}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
