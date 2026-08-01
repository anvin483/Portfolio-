import { motion } from "framer-motion";
import { User } from "lucide-react";

/**
 * Tactical operator ID frame — hexagonal clip, rotating HUD rings,
 * scan-line sweep and corner brackets. Pass `src` once the photo is supplied.
 */
export function ProfileFrame({ src }: { src?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="relative mx-auto w-full max-w-[300px]"
    >
      {/* rotating HUD rings */}
      <div className="pointer-events-none absolute -inset-6 rounded-full border border-dashed border-[#DC2626]/30 hud-spin" aria-hidden />
      <div className="pointer-events-none absolute -inset-3 rounded-full border border-white/10 hud-spin-rev" aria-hidden />

      {/* hex photo plate */}
      <div className="relative">
        <div className="clip-hex bg-[#DC2626] p-[2px] red-glow-soft">
          <div className="clip-hex relative aspect-[1/1.1] overflow-hidden bg-[#0a0a0a]">
            <div className="absolute inset-0 tactical-grid-red opacity-40" aria-hidden />
            {src ? (
              <img
                src={src}
                alt="Anvin Jose — operator ID photo"
                className="h-full w-full object-cover contrast-110 saturate-[0.85]"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-white/30">
                <User strokeWidth={1} className="h-12 w-12" />
                <span className="mono-data">AWAITING BIOMETRIC UPLOAD</span>
              </div>
            )}
            {/* red tint + scan sweep */}
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
        <span className="pointer-events-none absolute -left-2 top-6 h-8 w-8 border-l border-t border-[#DC2626]/70" aria-hidden />
        <span className="pointer-events-none absolute -right-2 bottom-6 h-8 w-8 border-b border-r border-[#DC2626]/70" aria-hidden />
      </div>

      {/* ID strip */}
      <div className="mt-5 flex items-center justify-between border border-white/10 bg-[#0a0a0a] px-3 py-2">
        <span className="ui-label text-white/70">ID // ANVIN-JOSE</span>
        <span className="mono-data flex items-center gap-1.5 text-[#DC2626]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#DC2626] pulse-red" />
          ACTIVE
        </span>
      </div>
    </motion.div>
  );
}
