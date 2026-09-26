import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Github } from "lucide-react";
import { PROTOCOLS } from "./Protocols";

const DOSSIER_IMAGES: Record<string, string> = {
  cyberwatch: "/images/cyberwatch-ai-dashboard.png",
  ids: "/images/advanced-ml-intrusion-detection.png",
  autovuln: "/images/autovuln-scanner-dashboard.png",
  phish: "/images/phishing-detection-system.png",
  portal: "/images/fcrit-portal-hardening.png",
};

export function ArchiveList() {
  const [active, setActive] = useState(0);
  const archiveProtocols = PROTOCOLS.filter(
    (protocol) => protocol.id !== "portal" && protocol.id !== "quiz",
  );
  const p = archiveProtocols[active];
  return (
    <section id="archive" className="relative border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3">
          <span className="mono-data text-[#DC2626]">// 03</span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="ui-label text-white/40">Archive</span>
        </div>
        <h2 className="mt-2 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
          Operations Archive
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-5">
          <ul className="md:col-span-3">
            {archiveProtocols.map((op, i) => (
              <li key={op.id}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`group grid w-full grid-cols-[80px_1fr_auto] items-center gap-4 border-b border-white/10 border-l-2 py-5 text-left t-tactical ${
                    active === i
                      ? "border-l-[#DC2626] bg-[#DC2626]/5"
                      : "border-l-transparent hover:border-l-white/40 hover:bg-white/[0.02]"
                  }`}
                >
                  <span className="mono-data text-[#DC2626]">{op.code}</span>
                  <div>
                    <div className="text-lg font-semibold uppercase tracking-tight text-white">
                      {op.name}
                    </div>
                    <div className="mono-data mt-1 text-white/40">{op.category}</div>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 t-tactical ${
                      active === i
                        ? "translate-x-1 text-[#DC2626]"
                        : "text-white/30 group-hover:translate-x-1 group-hover:text-white/70"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <motion.aside
            key={p.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="clip-notch-tr relative border border-white/10 bg-[#0a0a0a] p-6 md:col-span-2"
          >
            <div className="scan-line" />
            <div className="ui-label text-[#DC2626]">TARGET DOSSIER</div>
            <div className="mt-4 text-2xl font-bold uppercase tracking-tight text-white">
              {p.name}
            </div>
            <div className="mono-data mt-1 text-white/50">{p.code} · {p.category}</div>
            {DOSSIER_IMAGES[p.id] && (
              p.id === "portal" ? (
                <a
                  href="https://ims.fcrit.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clip-notch-tr t-tactical group relative mt-4 block overflow-hidden border border-[#DC2626]/30 hover:border-[#DC2626]"
                  aria-label="Open ims.fcrit.ac.in in a new tab"
                >
                  <img
                    src={DOSSIER_IMAGES[p.id]}
                    alt={`${p.name} operational dashboard`}
                    className="block w-full t-tactical group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
                  <div className="mono-data absolute bottom-2 right-2 bg-[#DC2626] px-2 py-1 text-[10px] font-bold uppercase text-black">
                    ims.fcrit.ac.in ↗
                  </div>
                </a>
              ) : (
                <div className="clip-notch-tr relative mt-4 overflow-hidden border border-[#DC2626]/30">
                  <img
                    src={DOSSIER_IMAGES[p.id]}
                    alt={`${p.name} operational dashboard`}
                    className="block w-full"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
                  {p.id === "cyberwatch" && (
                    <a
                      href="https://github.com/anvin483/CYBERWATCH-AI"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open CyberWatch AI GitHub repository"
                      className="mono-data absolute bottom-2 left-2 inline-flex items-center gap-1.5 border border-white/20 bg-black/80 px-2 py-1 text-[10px] font-bold uppercase text-white transition-colors hover:border-[#DC2626] hover:text-[#DC2626]"
                    >
                      <Github className="h-3 w-3" /> GITHUB ↗
                    </a>
                  )}
                  {p.id === "phish" && (
                    <a
                      href="https://github.com/anvin483/PHISHING-DETECTION-"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Phishing Detection System GitHub repository"
                      className="mono-data absolute bottom-2 left-2 inline-flex items-center gap-1.5 border border-white/20 bg-black/80 px-2 py-1 text-[10px] font-bold uppercase text-white transition-colors hover:border-[#DC2626] hover:text-[#DC2626]"
                    >
                      <Github className="h-3 w-3" /> GITHUB ↗
                    </a>
                  )}
                  {p.id === "autovuln" && (
                    <a
                      href="https://github.com/anvin483/AutoVulnerable"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open AutoVuln Scanner GitHub repository"
                      className="mono-data absolute bottom-2 left-2 inline-flex items-center gap-1.5 border border-white/20 bg-black/80 px-2 py-1 text-[10px] font-bold uppercase text-white transition-colors hover:border-[#DC2626] hover:text-[#DC2626]"
                    >
                      <Github className="h-3 w-3" /> GITHUB ↗
                    </a>
                  )}
                  {p.id === "ids" && (
                    <a
                      href="https://github.com/anvin483/Advance-IDS"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Advanced ML Intrusion Detection GitHub repository"
                      className="mono-data absolute bottom-2 left-2 inline-flex items-center gap-1.5 border border-white/20 bg-black/80 px-2 py-1 text-[10px] font-bold uppercase text-white transition-colors hover:border-[#DC2626] hover:text-[#DC2626]"
                    >
                      <Github className="h-3 w-3" /> GITHUB ↗
                    </a>
                  )}
                </div>
              )
            )}
            <p className="mt-5 text-[15px] leading-snug text-white/70">{p.summary}</p>
            <div className="mt-5 space-y-2 text-[13px]">
              <Row k="scope" v={p.scope} />
              <Row k="threat" v={p.threat} />
              <Row k="mitigation" v={p.mitigation} />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[90px_1fr] gap-3 border-t border-white/5 pt-2">
      <span className="mono-data pt-0.5 text-[#DC2626]">{k}</span>
      <span className="text-white/70">{v}</span>
    </div>
  );
}
