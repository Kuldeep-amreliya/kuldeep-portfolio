import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const easeExpo = [0.76, 0, 0.24, 1];

function ProjectCard({ project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: easeExpo }}
      className="spotlight duotone-container relative border-t pt-8 md:pt-12"
      style={{ borderColor: "var(--border)" }}
      data-testid={`project-card-${project.id}`}
    >
      <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
        {/* Meta */}
        <div className="md:col-span-3 flex md:flex-col justify-between md:justify-start gap-4 md:gap-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#A1A1AA]">
            {project.index}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#F2F2F2]/50">
            {project.year}
          </span>
        </div>

        {/* Text */}
        <div className="md:col-span-5">
          <h3 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight text-[#F2F2F2]">
            {project.name.split("—")[0]}
            <span className="block font-editorial text-[#A1A1AA] text-2xl md:text-3xl mt-1">
              — {project.name.split("—")[1]?.trim()}
            </span>
          </h3>
          <p className="mt-6 text-[#A1A1AA] text-base md:text-lg leading-relaxed max-w-xl">
            {project.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 border text-[#A1A1AA]"
                style={{ borderColor: "var(--border)" }}
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-[#F2F2F2]/40">
            {project.role}
          </div>
        </div>

        {/* Image */}
        <div className="md:col-span-4 relative">
          <div
            className="relative overflow-hidden aspect-[4/5] w-full"
            style={{ background: "#0f0f11" }}
          >
            <motion.img
              src={project.image}
              alt={project.name}
              style={{ y: imgY }}
              className="duotone absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, transparent 50%, rgba(10,10,12,0.6) 100%)",
              }}
            />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.25em] text-[#F2F2F2]/80 z-10">
              <span>{project.id}.png</span>
              <ArrowUpRight size={14} className="text-[#D4FF00]" />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      data-testid="projects-section"
      className="relative py-32 md:py-48"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-mono uppercase text-xs tracking-[0.25em] text-[#D4FF00]"
            >
              ● Selected Work — 2024/25
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeExpo }}
              className="font-display font-medium text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] mt-6 text-[#F2F2F2]"
            >
              Work,
              <br />
              <span className="font-editorial text-[#A1A1AA]">
                in three acts.
              </span>
            </motion.h2>
          </div>
          <a
            href="https://github.com/kuldeep-amreliya"
            target="_blank"
            rel="noreferrer"
            data-testid="all-projects-link"
            className="hidden md:inline-flex font-mono uppercase text-xs tracking-[0.25em] text-[#F2F2F2] link-underline"
          >
            All repositories ↗
          </a>
        </div>

        <div className="space-y-24 md:space-y-40">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
