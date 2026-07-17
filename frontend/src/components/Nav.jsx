import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PROFILE } from "@/lib/data";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const opts = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      setTime(d.toLocaleTimeString("en-GB", opts) + " IST");
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-0 left-0 right-0 z-[90]"
      data-testid="site-nav"
    >
      <div
        className="backdrop-blur-xl border-b"
        style={{
          background: "rgba(10,10,12,0.55)",
          borderColor: "var(--border)",
        }}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em]">
          <a
            href="#top"
            data-testid="nav-logo"
            className="link-underline text-[#F2F2F2]"
          >
            KULDEEP AMRELIYA
          </a>
          <nav className="hidden md:flex items-center gap-10">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className="link-underline text-[#A1A1AA] hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <span
              className="hidden sm:inline text-[#A1A1AA]"
              data-testid="local-time"
            >
              {time}
            </span>
            <a
              href={`mailto:${PROFILE.email}`}
              data-testid="nav-email"
              className="link-underline text-[#D4FF00]"
            >
              Say hello ↗
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
