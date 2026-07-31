import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Terminal as TerminalIcon, X } from "lucide-react";
import { PROTOCOLS } from "./Protocols";
import fcritPortalDossier from "@/assets/fcrit-portal-dossier.png.asset.json";
import utkarshQuizPlatform from "@/assets/utkarsh-quiz-platform.png.asset.json";
import utkarshCertAsset from "@/assets/utkarsh-minds-cert.jpeg.asset.json";

const portal = PROTOCOLS.find((p) => p.id === "portal")!;

const ENTRIES = [
  {
    id: "utkarsh-minds",
    role: "Client Project – Utkarsh Minds",
    org: "Utkarsh Minds",
    period: "2024 — 2025",
    href: null,
    image: utkarshQuizPlatform.url,
    certificate: utkarshCertAsset.url,
    certificateTitle: "Mini Project – Data Processing for Business Intelligence",
    summary:
      "Business Intelligence and data-engineering engagement focused on cleaning, transforming, and validating large datasets to power reliable analytics and decision-making.",
    stack: ["Python", "Pandas", "SQL", "ETL Pipelines", "Data Validation", "Jupyter"],
    bullets: [
      "Delivered a Business Intelligence data-processing project, improving data quality for better analysis and decision-making",
      "Engineered automated data pipelines to clean, transform, and validate large datasets",
    ],
  },
  {
    id: portal.id,
    role: portal.name,
    org: "FCRIT · ims.fcrit.ac.in",
    period: "PRODUCTION ENGAGEMENT",
    href: "https://ims.fcrit.ac.in",
    image: fcritPortalDossier.url,
    certificate: null,
    certificateTitle: null,
    summary: portal.summary,
    stack: portal.stack,
    bullets: [portal.scope, portal.threat, portal.mitigation, portal.architecture],
  },
];


function DataVizPlaceholder() {
  return (
    <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden border border-[#DC2626]/30 bg-[#0a0a0a]">
      <div className="scan-line" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="flex items-end gap-1">
          {[40, 64, 32, 56, 80, 48, 72].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: h }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: "easeOut" }}
              className="w-3 bg-[#DC2626]/60"
              style={{ height: h }}
            />
          ))}
        </div>
        <div className="mono-data text-[10px] font-bold uppercase tracking-widest text-[#DC2626]">
          DATA PIPELINE // ACTIVE
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent" />
    </div>
  );
}

export function Experience() {
  const [openCert, setOpenCert] = useState<{
    title: string;
    org: string;
    image: string;
  } | null>(null);

  return (
    <section id="experience" className="relative border-t border-white/10 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(220,38,38,0.04)_1px,transparent_1px)] bg-[size:64px_100%]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3">
          <span className="mono-data text-[#DC2626]">// 04</span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="ui-label text-white/40">Experience</span>
        </div>
        <h2 className="mt-2 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
          Field Deployments
        </h2>

        <div className="mt-12 space-y-10">
          {ENTRIES.map((e, i) => (
            <motion.article
              key={e.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="relative grid gap-8 border-l-2 border-[#DC2626]/40 pl-6 md:grid-cols-[1.2fr_1fr] md:pl-10"
            >
              <span className="absolute -left-[7px] top-2 h-3 w-3 bg-[#DC2626] pulse-red" />

              <div>
                <div className="mono-data text-[#DC2626]">{e.period}</div>
                <h3 className="mt-2 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
                  {e.role}
                </h3>
                {e.href ? (
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono-data mt-1 inline-flex items-center gap-1.5 text-white/50 t-tactical hover:text-[#DC2626]"
                  >
                    {e.org} <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <div className="mono-data mt-1 inline-flex items-center gap-1.5 text-white/50">
                    {e.org}
                  </div>
                )}

                <p className="mt-4 max-w-xl text-[15px] leading-snug text-white/70">
                  {e.summary}
                </p>

                <ul className="mt-5 space-y-2">
                  {e.bullets.map((b, bi) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + bi * 0.08, duration: 0.35 }}
                      className="flex gap-3 border-t border-white/5 pt-2 text-[14px] text-white/65"
                    >
                      <TerminalIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#DC2626]" />
                      <span>{b}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {e.stack.map((s) => (
                    <span
                      key={s}
                      className="mono-data border border-white/10 bg-black/40 px-2 py-1 text-white/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {e.certificate && (
                  <motion.button
                    onClick={() =>
                      setOpenCert({
                        title: e.certificateTitle || e.role,
                        org: e.org,
                        image: e.certificate!,
                      })
                    }
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative mt-5 inline-flex items-center justify-center gap-2 overflow-hidden border border-[#DC2626]/50 bg-[#DC2626]/10 px-3 py-2 ui-label text-[#DC2626] t-tactical hover:bg-[#DC2626] hover:text-white hover:red-glow-soft"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
                    View Certificate
                  </motion.button>
                )}
              </div>

              {e.image && e.href ? (
                <motion.a
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="clip-notch-tr group relative block self-start overflow-hidden border border-[#DC2626]/30 bg-[#0a0a0a] t-tactical hover:border-[#DC2626]"
                  aria-label="Open ims.fcrit.ac.in in a new tab"
                >
                  <div className="scan-line" />
                  <img
                    src={e.image}
                    alt={`${e.role} production portal`}
                    className="block w-full t-tactical group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent" />
                  <div className="mono-data absolute bottom-2 right-2 bg-[#DC2626] px-2 py-1 text-[10px] font-bold uppercase text-black">
                    ims.fcrit.ac.in ↗
                  </div>
                </motion.a>
              ) : e.image ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="clip-notch-tr group relative self-start overflow-hidden border border-[#DC2626]/30 bg-[#0a0a0a]"
                >
                  <div className="scan-line" />
                  <img
                    src={e.image}
                    alt={`${e.role} project screenshot`}
                    className="block w-full t-tactical group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent" />
                  <div className="mono-data absolute bottom-2 right-2 bg-[#DC2626] px-2 py-1 text-[10px] font-bold uppercase text-black">
                    {e.org}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="self-start"
                >
                  <DataVizPlaceholder />
                </motion.div>
              )}

            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotateX: -12, y: 40 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, rotateX: 8 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="clip-notch-bl relative w-full max-w-4xl overflow-hidden border border-[#DC2626]/60 bg-[#0a0a0a] p-4 red-glow-soft"
            >
              <div className="scan-line pointer-events-none absolute inset-0 z-10 opacity-20" />
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <span className="mono-data text-[#DC2626]">FIELD DEPLOYMENT // CERTIFICATE</span>
                  <span className="mono-data text-emerald-400/80">
                    <span className="inline-block animate-pulse">●</span> VERIFIED
                  </span>
                </div>
                <motion.button
                  onClick={() => setOpenCert(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/10 p-1.5 text-white/70 hover:border-[#DC2626] hover:text-[#DC2626]"
                  aria-label="Close certificate"
                >
                  <X className="h-4 w-4" strokeWidth={1.5} />
                </motion.button>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="mt-4 border border-white/10 bg-white"
              >
                <img src={openCert.image} alt={`${openCert.title} certificate`} className="block h-auto w-full" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="mt-3 flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-center"
              >
                <span className="ui-label text-white/40">CHAIN-OF-TRUST // sha256:field-cert…</span>
                <span className="mono-data text-white/60">issuer: {openCert.org}</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
