import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Award, GraduationCap, X, ExternalLink } from "lucide-react";
import certAsset from "@/assets/career-essentials-cert.png.asset.json";

const CREDS = [
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
  },
  {
    code: "CRT_04",
    name: "Cyber Job Simulation",
    org: "Deloitte AU",
    status: "VERIFIED",
    icon: Award,
  },
  {
    code: "CRT_05",
    name: "Cyber Job Simulation",
    org: "PwC US",
    status: "VERIFIED",
    icon: Award,
  },
  {
    code: "CRT_06",
    name: "Generative AI",
    org: "NxtWave",
    status: "VERIFIED",
    icon: GraduationCap,
  },
];

export function Credentials() {
  const [openCert, setOpenCert] = useState<string | null>(null);

  return (
    <section id="credentials" className="relative border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3">
          <span className="mono-data text-[#DC2626]">// 05</span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="ui-label text-white/40">Credentials</span>
        </div>
        <h2 className="mt-2 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
          Verified Badges
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CREDS.map((c, i) => (
            <motion.article
              key={c.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: i * 0.04, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -4 }}
              className="clip-notch-bl group relative flex flex-col border border-white/10 bg-[#0a0a0a] p-6 t-tactical hover:border-[#DC2626]"
            >
              <div className="flex items-start justify-between">
                <div className="border border-white/10 bg-[#121212] p-3 t-tactical group-hover:border-[#DC2626] group-hover:red-glow-soft">
                  <c.icon strokeWidth={1.25} className="h-6 w-6 text-[#DC2626]" />
                </div>
                <div className="text-right">
                  <div className="mono-data text-[#DC2626]">{c.code}</div>
                  <div
                    className={`mono-data mt-1 ${
                      c.status === "VERIFIED" ? "text-emerald-400/80" : "text-amber-400/80"
                    }`}
                  >
                    ● {c.status}
                  </div>
                </div>
              </div>
              <h3 className="mt-5 text-lg font-bold uppercase tracking-tight text-white">
                {c.name}
              </h3>
              <div className="mono-data mt-1 text-white/50">issuer: {c.org}</div>

              {c.certificate && (
                <button
                  onClick={() => setOpenCert(c.certificate!)}
                  className="mt-4 inline-flex items-center justify-center gap-2 border border-[#DC2626]/50 bg-[#DC2626]/10 px-3 py-2 ui-label text-[#DC2626] t-tactical hover:bg-[#DC2626] hover:text-white hover:red-glow-soft"
                >
                  <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
                  View Certificate
                </button>
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
        {openCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: -8 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="clip-notch-bl relative w-full max-w-4xl border border-[#DC2626]/60 bg-[#0a0a0a] p-4 red-glow-soft"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <span className="mono-data text-[#DC2626]">CRT_02 // CERTIFICATE</span>
                  <span className="mono-data text-emerald-400/80">● VERIFIED</span>
                </div>
                <button
                  onClick={() => setOpenCert(null)}
                  className="border border-white/10 p-1.5 text-white/70 hover:border-[#DC2626] hover:text-[#DC2626]"
                  aria-label="Close certificate"
                >
                  <X className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
              <div className="mt-4 border border-white/10 bg-white">
                <img src={openCert} alt="Career Essentials in Cybersecurity certificate" className="block h-auto w-full" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="ui-label text-white/40">CHAIN-OF-TRUST // sha256:crt_02…</span>
                <span className="mono-data text-white/60">issuer: Microsoft &amp; LinkedIn</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
