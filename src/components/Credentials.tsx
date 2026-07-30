import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Award, GraduationCap, X, ExternalLink } from "lucide-react";
import certAsset from "@/assets/career-essentials-cert.png.asset.json";
import genCertAsset from "@/assets/generative-ai-cert.png.asset.json";
import deloitteCertAsset from "@/assets/deloitte-cyber-job-simulation-cert.jpeg.asset.json";
import pwcCertAsset from "@/assets/pwc-cyber-job-simulation-cert.png.asset.json";
import ibmCertAsset from "@/assets/cybersecurity-fundamentals.png.asset.json";

type Cred = {
  code: string;
  name: string;
  org: string;
  status: string;
  icon: typeof ShieldCheck;
  certificate?: string;
};

const CREDS: Cred[] = [
  {
    code: "CRT_01",
    name: "CompTIA Security+",
    org: "CompTIA",
    status: "IN PROGRESS",
    icon: ShieldCheck,
  },
  {
    code: "CRT_02",
    name: "Career Essentials in Cybersecurity",
    org: "Microsoft & LinkedIn",
    status: "VERIFIED",
    icon: Award,
    certificate: certAsset.url,
  },
  {
    code: "CRT_03",
    name: "Cybersecurity Fundamentals",
    org: "IBM SkillsBuild",
    status: "VERIFIED",
    icon: ShieldCheck,
    certificate: ibmCertAsset.url,
  },
  {
    code: "CRT_04",
    name: "Cyber Job Simulation",
    org: "Deloitte AU",
    status: "VERIFIED",
    icon: Award,
    certificate: deloitteCertAsset.url,
  },
  {
    code: "CRT_05",
    name: "Cyber Job Simulation",
    org: "PwC US",
    status: "VERIFIED",
    icon: Award,
    certificate: pwcCertAsset.url,
  },
  {
    code: "CRT_06",
    name: "Generative AI",
    org: "NxtWave",
    status: "VERIFIED",
    icon: GraduationCap,
    certificate: genCertAsset.url,
  },
];

export function Credentials() {
  const [openCred, setOpenCred] = useState<Cred | null>(null);

  return (
    <section id="credentials" className="relative border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center gap-3"
        >
          <span className="mono-data text-[#DC2626]">// 05</span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="ui-label text-white/40">Credentials</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="mt-2 text-4xl font-black uppercase tracking-tight text-white md:text-5xl"
        >
          Verified Badges
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CREDS.map((c, i) => (
            <motion.article
              key={c.code}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              className="clip-notch-bl group relative flex flex-col overflow-hidden border border-white/10 bg-[#0a0a0a] p-6 t-tactical hover:border-[#DC2626]"
            >
              <motion.div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#DC2626]/0 via-[#DC2626]/0 to-[#DC2626]/0"
                whileHover={{ background: "linear-gradient(to bottom right, rgba(220,38,38,0.08), rgba(220,38,38,0), rgba(220,38,38,0.04))" }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex items-start justify-between">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 + 0.15 }}
                  className="border border-white/10 bg-[#121212] p-3 t-tactical group-hover:border-[#DC2626] group-hover:red-glow-soft"
                >
                  <c.icon strokeWidth={1.25} className="h-6 w-6 text-[#DC2626]" />
                </motion.div>
                <div className="text-right">
                  <div className="mono-data text-[#DC2626]">{c.code}</div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 + 0.2 }}
                    className={`mono-data mt-1 ${
                      c.status === "VERIFIED" ? "text-emerald-400/80" : "text-amber-400/80"
                    }`}
                  >
                    <span className="inline-block animate-pulse">●</span> {c.status}
                  </motion.div>
                </div>
              </div>
              <h3 className="mt-5 text-lg font-bold uppercase tracking-tight text-white">
                {c.name}
              </h3>
              <div className="mono-data mt-1 text-white/50">issuer: {c.org}</div>

              {c.certificate && (
                <motion.button
                  onClick={() => setOpenCred(c)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative mt-4 inline-flex items-center justify-center gap-2 overflow-hidden border border-[#DC2626]/50 bg-[#DC2626]/10 px-3 py-2 ui-label text-[#DC2626] t-tactical hover:bg-[#DC2626] hover:text-white hover:red-glow-soft"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
                  View Certificate
                </motion.button>
              )}

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="ui-label text-white/40">CHAIN-OF-TRUST</span>
                <span className="mono-data text-white/60">sha256:{c.code.toLowerCase()}…</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openCred && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenCred(null)}
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
                  <span className="mono-data text-[#DC2626]">{openCred.code} // CERTIFICATE</span>
                  <span className="mono-data text-emerald-400/80">
                    <span className="inline-block animate-pulse">●</span> {openCred.status}
                  </span>
                </div>
                <motion.button
                  onClick={() => setOpenCred(null)}
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
                <img src={openCred.certificate} alt={`${openCred.name} certificate`} className="block h-auto w-full" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="mt-3 flex items-center justify-between"
              >
                <span className="ui-label text-white/40">CHAIN-OF-TRUST // sha256:{openCred.code.toLowerCase()}…</span>
                <span className="mono-data text-white/60">issuer: {openCred.org}</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

