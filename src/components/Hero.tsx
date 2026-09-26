import { motion } from "framer-motion";
import { ChevronDown, Crosshair } from "lucide-react";
import { CyberGridCanvas } from "./CyberGridCanvas";
import { Typewriter } from "./Typewriter";
import { Terminal } from "./Terminal";
import { ProfileFrame } from "./ProfileFrame";

import resumeAsset from "@/assets/resume.pdf.asset.json";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24">
      {/* background layers */}
      <div className="absolute inset-0 z-0 tactical-grid" aria-hidden />
      <div className="absolute inset-0 z-0" aria-hidden>
        <CyberGridCanvas />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(220,38,38,0.18), transparent 60%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(220,38,38,0.12), transparent 60%)",
        }}
        aria-hidden
      />

      {/* HUD corners */}
      <HudCorner className="left-6 top-24" label="NODE-07" />
      <HudCorner className="right-6 top-24" label="LAT 19.07° · LON 72.87°" mirror />

      {/* Stroke display text */}
      <div className="pointer-events-none absolute inset-x-0 top-40 z-[10] select-none px-6 text-center">
        <div className="text-stroke whitespace-nowrap font-display text-[14vw] font-black leading-none tracking-tighter">
          TACTICAL OPS
        </div>
      </div>

      <div className="relative z-20 mx-auto grid max-w-7xl gap-12 px-6 py-24 md:py-32 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="mb-6 flex items-center gap-3">
            <StatusPod />
            <span className="mono-data text-white/50">
              &gt; init aj.cybersecurity · handshake OK · clearance γ-3
            </span>
          </div>

          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-7xl">
            <span className="whitespace-nowrap">Anvin <span className="text-[#DC2626] red-glow-text">Jose</span></span>
            <br />
            <span className="text-white/90">Cyber Operator</span>
          </h1>

          <div className="mt-6 font-display text-xl uppercase tracking-wide text-white/70 md:text-2xl">
            <Typewriter />
          </div>

          <p className="mt-6 max-w-xl text-[17px] leading-snug text-white/60">
            Fourth-year IT engineer weaponizing Python, ML and MITRE ATT&amp;CK across
            <span className="text-white"> penetration testing</span>,
            <span className="text-white"> threat intelligence</span> and
            <span className="text-white"> DevSecOps</span> — with production-hardened portals
            and SOC-style intel platforms already in the field.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#protocols"
              className="skew-tactical border border-[#DC2626] bg-[#DC2626] px-7 py-3 red-glow-soft t-tactical hover:brightness-110"
            >
              <span className="skew-tactical-inner ui-label text-white">
                → INITIATE ENGAGEMENT
              </span>
            </a>
            <a
              href={resumeAsset.url}
              target="_blank"
              rel="noreferrer"
              className="skew-tactical border border-white/25 bg-transparent px-7 py-3 t-tactical hover:border-[#DC2626] hover:text-[#DC2626]"
            >
              <span className="skew-tactical-inner ui-label text-white/90">
                DOWNLOAD DOSSIER
              </span>
            </a>
          </div>

          <StatBar />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8"
        >
          <ProfileFrame />
          <Terminal />
        </motion.div>

      </div>

      <a
        href="#protocols"
        className="relative z-20 mx-auto mb-10 flex w-fit flex-col items-center gap-2 text-white/50 t-tactical hover:text-[#DC2626]"
      >
        <span className="ui-label">SCROLL // DESCEND</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}

function StatusPod() {
  return (
    <div className="relative h-16 w-16">
      <div className="absolute inset-0 rounded-full border border-dashed border-[#DC2626]/60 hud-spin" />
      <div className="absolute inset-1 rounded-full border border-white/10 hud-spin-rev" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="h-2.5 w-2.5 rounded-full bg-[#DC2626] pulse-red" />
      </div>
    </div>
  );
}

function StatBar() {
  const items = [
    { k: "engagements", v: "12" },
    { k: "vulns disclosed", v: "27" },
    { k: "portals hardened", v: "01" },
    { k: "ml models live", v: "03" },
  ];
  return (
    <div className="mt-12 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4">
      {items.map((s) => (
        <div key={s.k} className="bg-[#0a0a0a] p-4">
          <div className="mono-data text-[#DC2626]">// {s.k}</div>
          <div className="mt-1 font-display text-2xl font-bold text-white">{s.v}</div>
        </div>
      ))}
    </div>
  );
}

function HudCorner({
  className = "",
  label,
  mirror,
}: {
  className?: string;
  label: string;
  mirror?: boolean;
}) {
  return (
    <div className={`absolute z-10 hidden md:flex items-center gap-2 ${className}`}>
      {!mirror && <Crosshair strokeWidth={1} className="h-4 w-4 text-[#DC2626]" />}
      <span className="mono-data text-white/40">{label}</span>
      {mirror && <Crosshair strokeWidth={1} className="h-4 w-4 text-[#DC2626]" />}
    </div>
  );
}
