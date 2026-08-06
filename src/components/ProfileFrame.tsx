import { motion } from "framer-motion";
import { useRef, useState } from "react";
import profileAsset from "@/assets/anvin-profile.jpeg.asset.json";

/**
 * Tactical operator ID frame — hexagonal clip, rotating HUD rings,
 * scan-line sweep, cursor-tracking glow that ramps up on hover and fades out.
 */
export function ProfileFrame({ src = profileAsset.url }: { src?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hot, setHot] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="relative mx-auto w-full max-w-[270px] sm:max-w-[300px]"
      onMouseMove={onMove}
      onMouseEnter={() => setHot(true)}
      onMouseLeave={() => setHot(false)}
      ref={ref}
    >
      {/* ambient glow — breathes idle, ramps up on hover, fades down on exit */}
      <motion.div
        className="pointer-events-none absolute -inset-10 -z-10 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(220,38,38,0.55), transparent 70%)" }}
        animate={hot ? { opacity: 0.9, scale: 1.12 } : { opacity: [0.25, 0.45, 0.25], scale: 1 }}
        transition={
          hot
            ? { duration: 0.45, ease: "easeOut" }
            : { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
        }
        aria-hidden
      />

      {/* rotating HUD rings */}
      <motion.div
        className="pointer-events-none absolute -inset-6 rounded-full border border-dashed border-[#DC2626]/30 hud-spin"
        animate={{ opacity: hot ? 0.95 : 0.45, scale: hot ? 1.04 : 1 }}
        transition={{ duration: 0.5 }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -inset-3 rounded-full border border-white/10 hud-spin-rev"
        animate={{ opacity: hot ? 0.8 : 0.35 }}
        transition={{ duration: 0.5 }}
        aria-hidden
      />

      {/* hex photo plate */}
      <motion.div
        className="relative"
        animate={{ y: hot ? -6 : 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
      >
        <div className="clip-hex bg-[#DC2626] p-[2px] red-glow-soft">
          <div className="clip-hex relative aspect-[3/4] overflow-hidden bg-[#0a0a0a]">
            <div className="absolute inset-0 tactical-grid-red opacity-40" aria-hidden />
            <motion.img
              src={src}
              alt="Anvin Jose — operator ID photo"
              className="h-full w-full object-cover object-top"
              animate={{
                scale: hot ? 1.08 : 1,
                filter: hot
                  ? "grayscale(0) contrast(1.15) saturate(1)"
                  : "grayscale(0.55) contrast(1.1) saturate(0.7)",
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              loading="lazy"
            />
            {/* cursor-tracking highlight */}
            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(circle 120px at ${pos.x}% ${pos.y}%, rgba(220,38,38,0.35), transparent 70%)`,
              }}
              animate={{ opacity: hot ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              aria-hidden
            />
            {/* red tint */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(220,38,38,0.18), transparent 40%, rgba(5,5,5,0.65))",
              }}
              aria-hidden
            />
            <div className="scan-line" aria-hidden />
          </div>
        </div>

        {/* corner brackets */}
        <motion.span
          className="pointer-events-none absolute -left-2 top-6 h-8 w-8 border-l border-t border-[#DC2626]/70"
          animate={{ x: hot ? -4 : 0, y: hot ? -4 : 0, opacity: hot ? 1 : 0.7 }}
          transition={{ duration: 0.35 }}
          aria-hidden
        />
        <motion.span
          className="pointer-events-none absolute -right-2 bottom-6 h-8 w-8 border-b border-r border-[#DC2626]/70"
          animate={{ x: hot ? 4 : 0, y: hot ? 4 : 0, opacity: hot ? 1 : 0.7 }}
          transition={{ duration: 0.35 }}
          aria-hidden
        />
      </motion.div>

      {/* ID strip */}
      <motion.div
        className="mt-5 flex items-center justify-between border border-white/10 bg-[#0a0a0a] px-3 py-2"
        animate={{
          borderColor: hot ? "rgba(220,38,38,0.6)" : "rgba(255,255,255,0.1)",
          boxShadow: hot ? "0 0 22px rgba(220,38,38,0.35)" : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.4 }}
      >
        <span className="ui-label text-white/70">ID // ANVIN-JOSE</span>
        <span className="mono-data flex items-center gap-1.5 text-[#DC2626]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#DC2626] pulse-red" />
          ACTIVE
        </span>
      </motion.div>
    </motion.div>
  );
}
