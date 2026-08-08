import { motion, useScroll, useSpring } from "framer-motion";
import type { ReactNode } from "react";

/** Thin tactical progress rail pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-[#DC2626] red-glow-soft"
      aria-hidden
    />
  );
}

/** Fades + lifts a block into view as it enters the viewport while scrolling. */
export function Reveal({
  children,
  delay = 0,
  y = 40,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Horizontal sweep line that draws itself in as the section arrives. */
export function SectionSweep() {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto h-px max-w-7xl origin-left bg-gradient-to-r from-[#DC2626]/70 via-white/10 to-transparent"
      aria-hidden
    />
  );
}
