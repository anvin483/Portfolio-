import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ShieldCheck, Network, Code2, Crosshair } from "lucide-react";

const BADGES = [
  { label: "SOC Analyst", icon: ShieldCheck, className: "left-0 top-[12%]" },
  { label: "VAPT", icon: Crosshair, className: "right-0 top-[35%]" },
  { label: "Python", icon: Code2, className: "left-[-4%] bottom-[16%]" },
  { label: "MITRE ATT&CK", icon: Network, className: "right-[2%] bottom-[8%]" },
];

/** Animated operator profile HUD inspired by a circular SOC analyst identity frame. */
export function ProfileFrame({ src = "/images/anvin-profile-new.png" }: { src?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hot, setHot] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    setPos({ x: ((e.clientX - bounds.left) / bounds.width) * 100, y: ((e.clientY - bounds.top) / bounds.height) * 100 });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMove}
      onMouseEnter={() => setHot(true)}
      onMouseLeave={() => setHot(false)}
      className="relative mx-auto aspect-square w-full max-w-[390px]"
    >
      <motion.div
        className="pointer-events-none absolute inset-[12%] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(220,38,38,0.38), transparent 68%)" }}
        animate={{ opacity: hot ? 0.95 : [0.48, 0.7, 0.48], scale: hot ? 1.08 : 1 }}
        transition={{ duration: hot ? 0.35 : 3.8, repeat: hot ? 0 : Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-[4%] rounded-full border border-[#DC2626]/30" aria-hidden />
      <motion.div
        className="pointer-events-none absolute inset-[9%] rounded-full border border-dashed border-[#DC2626]/45"
        animate={{ rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-[16%] rounded-full border border-[#DC2626]/25"
        animate={{ rotate: -360, scale: hot ? 1.03 : 1 }}
        transition={{ rotate: { duration: 18, repeat: Infinity, ease: "linear" }, scale: { duration: 0.4 } }}
        aria-hidden
      />

      {["inset-[9%]", "inset-[16%]", "inset-[23%]"].map((orbit, index) => (
        <motion.div
          key={orbit}
          className={`pointer-events-none absolute rounded-full ${orbit}`}
          animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
          transition={{
            duration: 12 + index * 5,
            repeat: Infinity,
            ease: "linear",
            delay: index * -2,
          }}
          aria-hidden
        >
          <motion.span
            className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#DC2626] shadow-[0_0_18px_rgba(220,38,38,0.9)]"
            animate={{ scale: [0.75, 1.2, 0.75], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 2.3 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      ))}

      <motion.div
        className="absolute inset-[20%] overflow-hidden rounded-full border-2 border-[#DC2626]/80 bg-[#071225] p-2 shadow-[0_0_0_12px_rgba(220,38,38,0.08),0_0_45px_rgba(220,38,38,0.38)]"
        animate={{ y: hot ? -5 : [0, -3, 0], rotate: hot ? 0 : [0, 0.4, 0] }}
        transition={hot ? { duration: 0.35 } : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
          <div className="relative h-full w-full overflow-hidden rounded-full border border-[#F87171]/60 bg-[#0B1220]">
          <div className="absolute inset-0 tactical-grid-red opacity-20" aria-hidden />
          <motion.img
            src={src}
            alt="Anvin Jose — operator ID photo"
            className="h-full w-full object-cover object-top"
            animate={{ scale: hot ? 1.06 : 1, filter: hot ? "contrast(1.08) saturate(1.05)" : "contrast(1.03) saturate(0.9)" }}
            transition={{ duration: 0.55 }}
            loading="lazy"
          />
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{ background: `radial-gradient(circle 120px at ${pos.x}% ${pos.y}%, rgba(220,38,38,0.3), transparent 70%)` }}
            animate={{ opacity: hot ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/45 via-transparent to-[#DC2626]/10" aria-hidden />
          <div className="scan-line" aria-hidden />
        </div>
      </motion.div>

      {BADGES.map(({ label, icon: Icon, className }, index) => (
        <motion.div
          key={label}
          className={`absolute z-30 flex items-center gap-2 rounded-full border border-[#DC2626]/55 bg-[#071225]/95 px-4 py-2 text-white/80 shadow-[0_8px_24px_rgba(2,6,23,0.45)] backdrop-blur-sm ${className}`}
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1, y: [0, index % 2 ? -3 : 3, 0] }}
          transition={{ opacity: { delay: 0.35 + index * 0.1 }, scale: { delay: 0.35 + index * 0.1 }, y: { duration: 3 + index * 0.35, repeat: Infinity, ease: "easeInOut" } }}
        >
          <Icon className="h-4 w-4 text-[#DC2626]" strokeWidth={2.2} />
          <span className="mono-data whitespace-nowrap text-[11px] font-bold tracking-wide sm:text-xs">{label}</span>
        </motion.div>
      ))}

      <motion.div
        className="absolute bottom-[-2%] left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#DC2626]/40 bg-[#071225]/90 px-4 py-1.5"
        animate={{ boxShadow: hot ? "0 0 26px rgba(220,38,38,0.35)" : "0 0 0 rgba(220,38,38,0)" }}
        transition={{ duration: 0.4 }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
        <span className="mono-data text-[10px] tracking-[0.18em] text-white/70">OPERATOR // ONLINE</span>
      </motion.div>
    </motion.div>
  );
}
