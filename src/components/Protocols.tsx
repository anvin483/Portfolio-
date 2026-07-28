import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ShieldCheck } from "lucide-react";

export type Protocol = {
  id: string;
  code: string;
  name: string;
  category: "OFFENSIVE" | "DEFENSIVE" | "AUTOMATION";
  summary: string;
  stack: string[];
  scope: string;
  threat: string;
  mitigation: string;
  architecture: string;
};

export const PROTOCOLS: Protocol[] = [
  {
    id: "cyberwatch",
    code: "SYS_01",
    name: "Cyberwatch AI",
    category: "DEFENSIVE",
    summary:
      "SOC-style threat intelligence platform ingesting CISA KEV, NVD CVE and URLhaus feeds with live geo-mapped alerting.",
    stack: ["Python", "Flask", "SQLite", "SSE", "JavaScript"],
    scope:
      "Live monitoring dashboard for a SOC operator: feed health, geolocated events, severity-based alerting, incident workflows.",
    threat:
      "Zero-day disclosures, actively exploited CVEs, malware URLs and phishing infrastructure emerging in the wild.",
    mitigation:
      "Multi-source correlation with severity scoring, secure auth on the dashboard, incident lifecycle tracking and AI-style posture summaries.",
    architecture:
      "Feeds → normalizer → SQLite store → Flask API → Server-Sent Events → live JS dashboard with map overlay.",
  },
  {
    id: "ids",
    code: "SYS_02",
    name: "Advanced ML Intrusion Detection",
    category: "DEFENSIVE",
    summary:
      "Supervised ML pipeline classifying network flows and surfacing anomalous or malicious traffic patterns in real time.",
    stack: ["Python", "Flask", "SQLite", "scikit-learn"],
    scope:
      "Detect intrusions across network telemetry, prioritize alerts and expose them via a lightweight ops UI.",
    threat: "Reconnaissance, DoS, brute-force and lateral-movement traffic patterns.",
    mitigation:
      "Feature engineering on flow metadata, model tuning per attack class, thresholded alerting with human-in-the-loop review.",
    architecture:
      "PCAP/flow ingest → feature extractor → trained classifier → Flask verdict API → SQLite audit log.",
  },
  {
    id: "phish",
    code: "SYS_03",
    name: "Phishing Detection System",
    category: "OFFENSIVE",
    summary:
      "URL + email metadata classifier flagging phishing lures before they reach the inbox.",
    stack: ["Python", "ML", "Feature Engineering"],
    scope: "Score inbound URLs and email metadata, gate delivery on high-risk verdicts.",
    threat: "Credential-harvesting phishing, homoglyph domains, suspicious redirect chains.",
    mitigation:
      "Lexical + host-based feature extraction, model evaluation across precision/recall, tunable thresholds per tenant.",
    architecture: "URL/email → feature extractor → trained model → verdict + confidence.",
  },
  {
    id: "portal",
    code: "SYS_04",
    name: "FCRIT Portal Hardening",
    category: "AUTOMATION",
    summary:
      "Migrated a live college portal from raw PHP to Laravel MVC and patched real vulnerabilities under production load.",
    stack: ["PHP", "Laravel", "MySQL", "Eloquent"],
    scope:
      "Production college portal serving students, faculty and administration at ims.fcrit.ac.in.",
    threat:
      "Unrestricted file upload, malicious redirects, slow queries degrading availability for concurrent users.",
    mitigation:
      "Enforced upload validation, redirect allow-listing, server-level defense-in-depth, MySQL schema + query optimization.",
    architecture: "Legacy PHP → Laravel MVC with Eloquent ORM → hardened MySQL schema.",
  },
  {
    id: "quiz",
    code: "SYS_05",
    name: "Automated Quiz Platform",
    category: "AUTOMATION",
    summary:
      "Timed, auto-scoring assessment engine with anti-cheating controls, role-based access and live result dashboards.",
    stack: ["Python", "Flask", "SQLite", "JavaScript", "Bootstrap"],
    scope:
      "End-to-end quiz platform for students and faculty: question banks, timed sessions, instant scoring, and result analytics.",
    threat:
      "Unauthorized access to questions, answer tampering, impersonation, and result manipulation.",
    mitigation:
      "Role-based login, server-side answer validation, session timeout, randomized question ordering, and audit logging.",
    architecture:
      "Flask routes + SQLite store → Jinja2/JS frontend → auto-graded submissions → admin analytics dashboard.",
  },
];



const FILTERS = ["ALL", "OFFENSIVE", "DEFENSIVE", "AUTOMATION"] as const;

export function ProtocolsSection() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("ALL");
  const [open, setOpen] = useState<Protocol | null>(null);

  const filtered =
    filter === "ALL" ? PROTOCOLS : PROTOCOLS.filter((p) => p.category === filter);

  return (
    <section id="protocols" className="relative border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader index="02" label="Protocols" title="Deployed Systems" />

        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`skew-tactical t-tactical border px-4 py-2 ${
                filter === f
                  ? "border-[#DC2626] bg-[#DC2626]/10 red-glow-soft"
                  : "border-white/15 bg-[#0a0a0a] hover:border-white/40"
              }`}
            >
              <span
                className={`skew-tactical-inner ui-label ${
                  filter === f ? "text-[#DC2626]" : "text-white/70"
                }`}
              >
                {f}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, idx) => (
              <motion.button
                layout
                key={p.id}
                onClick={() => setOpen(p)}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.06,
                  ease: [0.4, 0, 0.2, 1],
                  layout: { duration: 0.35 },
                }}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.99 }}
                className="clip-protocol group relative overflow-hidden border border-white/10 bg-[#121212] p-6 text-left t-tactical hover:border-[#DC2626]"
                style={{ transitionProperty: "border-color, box-shadow, transform" }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#DC2626]/5 to-transparent" />
                </div>
                <div className="mb-6 flex items-start justify-between">
                  <span className="ui-label text-[#DC2626]">{p.category}</span>
                  <div className="flex items-center gap-2">
                    <span className="mono-data text-[#DC2626]">{p.code}</span>
                    <span className="flex items-center gap-1 border border-[#DC2626]/30 bg-[#DC2626]/10 px-1.5 py-0.5">
                      <span className="h-1.5 w-1.5 bg-[#DC2626] pulse-red" />
                      <ShieldCheck className="h-3 w-3 text-[#DC2626]" />
                      <span className="mono-data text-[9px] text-[#DC2626]">VERIFIED</span>
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:red-glow-text">
                  {p.name}
                </h3>
                <p className="mt-3 text-[15px] leading-snug text-white/60">{p.summary}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s, si) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.06 + si * 0.03, duration: 0.25 }}
                      className="mono-data border border-white/10 bg-black/40 px-2 py-1 text-white/60 group-hover:border-white/20 group-hover:text-white/80"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="ui-label text-white/40 group-hover:text-[#DC2626]">
                    OPEN DOSSIER →
                  </span>
                  <span className="flex items-center gap-1.5 mono-data text-white/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    LIVE
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

      </div>

      <AnimatePresence>
        {open && <ProtocolModal p={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProtocolModal({ p, onClose }: { p: Protocol; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 10 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 max-h-[85vh] w-full max-w-3xl overflow-hidden border border-[#DC2626]/60 bg-[#0a0a0a] red-glow-box"
      >
        <div className="scan-line" />
        <div className="flex items-center justify-between border-b border-white/10 bg-[#050505] px-5 py-3">
          <div className="flex items-center gap-3">
            <span className="mono-data text-[#DC2626]">{p.code}</span>
            <span className="ui-label text-white/50">/</span>
            <span className="ui-label text-white/80">{p.category}</span>
          </div>
          <button
            onClick={onClose}
            className="border border-white/10 p-1.5 text-white/60 t-tactical hover:border-[#DC2626] hover:text-[#DC2626]"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="max-h-[calc(85vh-52px)] overflow-y-auto p-6 md:p-8">
          <h3 className="text-3xl font-bold uppercase tracking-tight text-white red-glow-text">
            {p.name}
          </h3>
          <p className="mt-3 text-[17px] text-white/70">{p.summary}</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Field label="Scope" body={p.scope} />
            <Field label="Threat Vector" body={p.threat} />
            <Field label="Mitigation" body={p.mitigation} />
            <Field label="Architecture" body={p.architecture} />
          </div>
          <div className="mt-6">
            <div className="ui-label mb-2 text-white/40">STACK</div>
            <div className="flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="mono-data border border-white/10 bg-black/40 px-2 py-1 text-white/70"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Field({ label, body }: { label: string; body: string }) {
  return (
    <div className="border border-white/10 bg-[#121212] p-4">
      <div className="ui-label mb-2 text-[#DC2626]">{label}</div>
      <p className="text-[15px] leading-snug text-white/75">{body}</p>
    </div>
  );
}

export function SectionHeader({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <span className="mono-data text-[#DC2626]">// {index}</span>
        <span className="h-px flex-1 bg-white/10" />
        <span className="ui-label text-white/40">{label}</span>
      </div>
      <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
