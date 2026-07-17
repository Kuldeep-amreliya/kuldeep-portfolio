import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const sx = useSpring(mx, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 500, damping: 40, mass: 0.4 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    const over = (e) => {
      const el = e.target;
      if (el.closest && el.closest("a, button, [data-cursor='hover']")) {
        setHover(true);
      } else {
        setHover(false);
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [mx, my]);

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[200] hidden md:block"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{ scale: hover ? 2.4 : 1, opacity: hover ? 0.9 : 1 }}
          transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
          className="w-3 h-3 rounded-full"
          style={{ background: hover ? "#D4FF00" : "#F2F2F2" }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[199] hidden md:block"
        style={{
          x: mx,
          y: my,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className="w-10 h-10 rounded-full border"
          style={{ borderColor: "rgba(242,242,242,0.35)" }}
        />
      </motion.div>
    </>
  );
}
