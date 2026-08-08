import { motion, useScroll, useSpring, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

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

/**
 * Section-aware reveal presets — each section gets its own entrance signature
 * so scrolling never feels like the same fade repeated eight times.
 */
export type RevealVariant =
  | "lift"        // blur + rise
  | "breach-left" // slides in from the left with a skew snap
  | "breach-right"
  | "wipe-down"   // clip-path curtain wipe
  | "wipe-up"
  | "lock-on"     // scale down into place, like a targeting reticle
  | "unfold"      // 3D rotateX hinge
  | "stagger";    // rise + subtle horizontal drift

const VARIANTS: Record<RevealVariant, Variants> = {
  lift: {
    hidden: { opacity: 0, y: 48, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.75, ease: EASE },
    },
  },
  "breach-left": {
    hidden: { opacity: 0, x: -80, skewX: 8 },
    show: {
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: { duration: 0.8, ease: EASE },
    },
  },
  "breach-right": {
    hidden: { opacity: 0, x: 80, skewX: -8 },
    show: {
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: { duration: 0.8, ease: EASE },
    },
  },
  "wipe-down": {
    hidden: { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
    show: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 0.9, ease: EASE },
    },
  },
  "wipe-up": {
    hidden: { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
    show: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 0.9, ease: EASE },
    },
  },
  "lock-on": {
    hidden: { opacity: 0, scale: 1.06, filter: "blur(10px)" },
    show: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.85, ease: EASE },
    },
  },
  unfold: {
    hidden: { opacity: 0, rotateX: -14, y: 40, transformPerspective: 1200 },
    show: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: { duration: 0.9, ease: EASE },
    },
  },
  stagger: {
    hidden: { opacity: 0, y: 56, x: -24 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.8, ease: EASE },
    },
  },
};

export function Reveal({
  children,
  variant = "lift",
  delay = 0,
  amount = 0.05,
}: {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });
  const [forced, setForced] = useState(false);

  // Safety net: tall sections can miss the intersection threshold on short
  // viewports — never leave content stuck in its hidden state.
  useEffect(() => {
    const t = setTimeout(() => setForced(true), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={VARIANTS[variant]}
      initial="hidden"
      animate={inView || forced ? "show" : "hidden"}
      transition={{ delay }}
      style={{ transformStyle: "preserve-3d" }}

    >
      {children}
    </motion.div>
  );
}

/** Horizontal sweep line that draws itself in as the section arrives. */
export function SectionSweep({ mirror = false }: { mirror?: boolean }) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, ease: EASE }}
      className={`mx-auto h-px max-w-7xl bg-gradient-to-r from-[#DC2626]/70 via-white/10 to-transparent ${
        mirror ? "origin-right rotate-180" : "origin-left"
      }`}
      aria-hidden
    />
  );
}
