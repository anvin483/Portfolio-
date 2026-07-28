import { motion, AnimatePresence } from "framer-motion";
import { Sword, Shield, Terminal, Code2, X, Zap } from "lucide-react";
import { useState } from "react";

const GROUPS = [
  {
    label: "Red Team",
    icon: Sword,
    tools: ["Nmap", "Burp Suite", "Wireshark", "Kali Linux", "Metasploit", "OWASP ZAP"],
  },
  {
    label: "Blue Team",
    icon: Shield,
    tools: ["MITRE ATT&CK", "Splunk", "Incident Response", "Log Analysis", "Threat Intel"],
  },
  {
    label: "DevSecOps",
    icon: Terminal,
    tools: ["Docker", "Laravel", "MySQL", "Flask", "Git", "Linux"],
  },
  {
    label: "Scripting & ML",
    icon: Code2,
    tools: ["Python", "JavaScript", "C", "scikit-learn", "SQLite", "SSE"],
  },
];

export function SkillsMatrix() {
  return (
    <section id="systems" className="relative border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3">
          <span className="mono-data text-[#DC2626]">// 04</span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="ui-label text-white/40">Systems</span>
        </div>
        <h2 className="mt-2 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
          Hardened Tooling Matrix
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {GROUPS.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: gi * 0.05, ease: [0.4, 0, 0.2, 1] }}
              className="clip-notch-tr relative border border-white/10 bg-[#0a0a0a] p-6"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <g.icon strokeWidth={1.25} className="h-5 w-5 text-[#DC2626]" />
                  <span className="ui-label text-white">{g.label}</span>
                </div>
                <span className="mono-data text-white/40">MOD-{String(gi + 1).padStart(2, "0")}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.tools.map((t) => (
                  <span
                    key={t}
                    className="skew-tactical t-tactical border border-white/15 bg-[#121212] px-3 py-1.5 hover:border-[#DC2626] hover:red-glow-soft"
                  >
                    <span className="skew-tactical-inner ui-label text-white/80">{t}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
