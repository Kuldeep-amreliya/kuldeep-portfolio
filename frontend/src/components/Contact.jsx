import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROFILE } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const easeExpo = [0.76, 0, 0.24, 1];

function MagneticLink({ href, children, testid, external = false }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.2}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };
  return (
    <a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      onMouseMove={onMove}
      onMouseLeave={reset}
      data-testid={testid}
      data-cursor="hover"
      className="inline-block transition-transform duration-300 ease-out"
    >
      {children}
    </a>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={ref}
      id="contact"
      data-testid="contact-section"
      className="relative py-32 md:py-56 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <motion.div
        aria-hidden
        style={{ y: yBg }}
        className="absolute inset-0 pointer-events-none opacity-40"
      >
        <div
          className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(212,255,0,0.18), transparent 60%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-mono uppercase text-xs tracking-[0.25em] text-[#D4FF00]"
        >
          ● 09 — Let's build
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: easeExpo }}
          className="mt-8 font-display font-medium text-6xl md:text-8xl lg:text-[10vw] leading-[0.9] tracking-tighter text-[#F2F2F2]"
        >
          Have an idea?
          <br />
          <span className="font-editorial text-[#A1A1AA]">Let's talk.</span>
        </motion.h2>

        <div className="mt-16 md:mt-24">
          <MagneticLink
            href={`mailto:${PROFILE.email}`}
            testid="contact-email-cta"
          >
            <div className="group inline-flex items-center gap-4 border-b pb-4" style={{ borderColor: "rgba(242,242,242,0.2)" }}>
              <span className="font-display text-3xl md:text-6xl lg:text-7xl leading-none tracking-tight text-[#F2F2F2] group-hover:text-[#D4FF00] transition-colors duration-500 break-all">
                {PROFILE.email}
              </span>
              <ArrowUpRight
                className="text-[#D4FF00] shrink-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
                size={40}
              />
            </div>
          </MagneticLink>
        </div>

        <div className="mt-20 md:mt-28 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="font-mono uppercase text-xs tracking-[0.25em] text-[#A1A1AA] block mb-4">
              Elsewhere
            </span>
            <ul className="space-y-3 font-display text-2xl md:text-3xl">
              <li>
                <MagneticLink
                  href={PROFILE.linkedin}
                  testid="contact-linkedin"
                  external
                >
                  <span className="link-underline text-[#F2F2F2]">LinkedIn</span>
                </MagneticLink>
              </li>
              <li>
                <MagneticLink
                  href={PROFILE.github}
                  testid="contact-github"
                  external
                >
                  <span className="link-underline text-[#F2F2F2]">GitHub</span>
                </MagneticLink>
              </li>
              <li>
                <MagneticLink
                  href={PROFILE.resumeUrl}
                  testid="contact-resume"
                  external
                >
                  <span className="link-underline text-[#F2F2F2]">Resume ↗</span>
                </MagneticLink>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 md:col-start-6">
            <span className="font-mono uppercase text-xs tracking-[0.25em] text-[#A1A1AA] block mb-4">
              Direct
            </span>
            <ul className="space-y-3 text-lg text-[#F2F2F2]">
              <li>
                <a
                  href={`tel:${PROFILE.phone}`}
                  className="link-underline"
                  data-testid="contact-phone"
                >
                  {PROFILE.phone}
                </a>
              </li>
              <li className="text-[#A1A1AA]">{PROFILE.location}</li>
            </ul>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <span className="font-mono uppercase text-xs tracking-[0.25em] text-[#A1A1AA] block mb-4">
              Availability
            </span>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse" />
              <span className="text-[#F2F2F2]">Open for 2026</span>
            </div>
            <p className="mt-2 text-sm text-[#A1A1AA]">
              Full-time · Remote · Hybrid
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
