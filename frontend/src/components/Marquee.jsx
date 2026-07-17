import Marquee from "react-fast-marquee";

const WORDS = [
  "Kuldeep Amreliya",
  "Full-Stack",
  "AI Engineer",
  "RAG · LangGraph",
  "FastAPI · React",
  "Available 2026",
];

export default function EditorialMarquee() {
  return (
    <section
      className="py-16 md:py-24 border-y"
      style={{ borderColor: "var(--border)", background: "var(--bg)" }}
      data-testid="marquee-section"
    >
      <Marquee speed={35} gradient={false} pauseOnHover>
        {WORDS.map((w, i) => (
          <span
            key={i}
            className="font-display font-medium text-[10vw] md:text-[9vw] leading-none stroke-text mx-8 md:mx-14"
          >
            {w} <span className="text-[#D4FF00]">✦</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
