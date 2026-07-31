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

const TOOL_BRIEFS: Record<string, { tagline: string; details: string[] }> = {
  Nmap: {
    tagline: "Network reconnaissance engine — map hosts, services, and OS fingerprints.",
    details: [
      "Host discovery via ARP, ICMP, TCP SYN, and UDP probes.",
      "Service/version detection with aggressive (-A) and scripting (-sC) modes.",
      "NSE scripting for vulnerability scanning and custom enumeration.",
      "Stealth timing templates (-T0 to -T5) and OS fingerprinting (-O).",
    ],
  },
  "Burp Suite": {
    tagline: "Web application security testing platform for manual and automated workflows.",
    details: [
      "Proxy-based request interception and modification.",
      "Automated scanner for XSS, SQLi, and injection vulnerabilities.",
      "Intruder for fuzzing and custom payload attacks.",
      "Repeater for manual request refinement and exploit validation.",
    ],
  },
  Wireshark: {
    tagline: "Deep packet inspection for network troubleshooting and threat hunting.",
    details: [
      "Live capture and offline analysis of pcap data.",
      "Rich protocol decodes and expert info diagnostics.",
      "Display filters and coloring rules for fast triage.",
      "TLS/SSL inspection and malicious traffic pattern detection.",
    ],
  },
  "Kali Linux": {
    tagline: "Offensive security distribution preloaded with penetration testing tools.",
    details: [
      "Hundreds of pre-installed security tools aligned to MITRE tactics.",
      "Custom ARM and cloud images for red-team engagements.",
      "Live boot, forensics, and headless deployment modes.",
      "Regular rolling updates to track the latest exploit tooling.",
    ],
  },
  Metasploit: {
    tagline: "Exploitation framework for validating vulnerabilities and post-exploitation.",
    details: [
      "Extensive exploit database sorted by CVE and target platform.",
      "Payload generation and staged/stageless meterpreter sessions.",
      "Auxiliary scanners, DOS modules, and credential capture.",
      "Post-exploitation pivoting, persistence, and loot collection.",
    ],
  },
  "OWASP ZAP": {
    tagline: "Open-source web app scanner for automated and manual security testing.",
    details: [
      "Active and passive scanning with automated vulnerability detection.",
      "Spider for crawling and mapping web application attack surface.",
      "API support for CI/CD integration and regression testing.",
      "Fuzzer and scripting engine for custom attack scenarios.",
    ],
  },
  "MITRE ATT&CK": {
    tagline: "Globally accessible knowledge base of adversary tactics and techniques.",
    details: [
      "Tactic/technique matrix mapping attacker behavior.",
      "Data sources, mitigations, and real-world group examples.",
      "Detection analytics aligned to specific techniques.",
      "Used to prioritize defenses and threat hunt hypotheses.",
    ],
  },
  Splunk: {
    tagline: "Data-to-everything platform for SIEM, log analysis, and SOC workflows.",
    details: [
      "SPL query language for searching, aggregating, and correlating events.",
      "Dashboards, alerts, and incident review workflows.",
      "Add-ons for common security data sources and threat intel.",
      "Enterprise Security (ES) for risk-based alerting and triage.",
    ],
  },
  "Incident Response": {
    tagline: "Structured approach to detecting, containing, and recovering from breaches.",
    details: [
      "Preparation, identification, containment, eradication, recovery, lessons learned.",
      "Evidence preservation and chain-of-custody procedures.",
      "Forensic timeline reconstruction and root cause analysis.",
      "Communication playbooks and stakeholder coordination.",
    ],
  },
  "Log Analysis": {
    tagline: "Transform raw machine logs into actionable security intelligence.",
    details: [
      "Normalization and parsing of diverse log formats.",
      "Pattern recognition, anomaly detection, and baseline behavior.",
      "Correlation rules across endpoints, network, and identity.",
      "Investigation support for insider threats and malware ops.",
    ],
  },
  "Threat Intel": {
    tagline: "Evidence-based knowledge about existing or emerging threats.",
    details: [
      "IOC, TTP, and actor profile collection and management.",
      "STIX/TAXII feeds and indicator sharing with partners.",
      "Threat intelligence platforms (TIP) for enrichment and correlation.",
      "Operational intel that drives detection and hunting priorities.",
    ],
  },
  Docker: {
    tagline: "Containerization platform for consistent, portable application delivery.",
    details: [
      "Container build, ship, and run lifecycle management.",
      "Image scanning and minimal base-image hardening.",
      "Network segmentation and runtime security policies.",
      "Compose and orchestration for scalable deployments.",
    ],
  },
  Laravel: {
    tagline: "PHP web framework with modern MVC patterns and security primitives.",
    details: [
      "Eloquent ORM, migrations, and query builder for safe database access.",
      "Built-in CSRF protection, encryption, and authentication scaffolding.",
      "Middleware, gates, and policies for authorization.",
      "Blade templating with auto-escaping for XSS prevention.",
    ],
  },
  MySQL: {
    tagline: "Relational database engine backing production web and analytics systems.",
    details: [
      "Schema design, indexing, and query optimization.",
      "User privilege management and prepared statements.",
      "Backup, replication, and high-availability configuration.",
      "Query auditing for security and performance tuning.",
    ],
  },
  Flask: {
    tagline: "Lightweight Python web framework for APIs and microservices.",
    details: [
      "Minimal core with extensible blueprints and middleware.",
      "Secure session handling, JWT patterns, and CORS controls.",
      "Jinja2 templating with autoescaping and CSRF guards.",
      "Common pairing with SQLAlchemy and WSGI servers.",
    ],
  },
  Git: {
    tagline: "Distributed version control for source code and infrastructure-as-code.",
    details: [
      "Branching, merging, rebasing, and commit hygiene.",
      "Git hooks for pre-commit security scanning and linting.",
      "Signed commits and verification of code provenance.",
      "CI/CD integration for automated build and deployment pipelines.",
    ],
  },
  Linux: {
    tagline: "Primary operating environment for security tooling and servers.",
    details: [
      "System administration, hardening, and service management.",
      "Shell scripting, cron, and log analysis on the command line.",
      "Kernel tuning, iptables/nftables, and SELinux/AppArmor basics.",
      "File system permissions, auditing, and privilege escalation review.",
    ],
  },
  Python: {
    tagline: "General-purpose language central to automation, ML, and security tooling.",
    details: [
      "Scripting for reconnaissance, parsing, and orchestration.",
      "Web frameworks (Flask/FastAPI) and API development.",
      "Data processing with pandas, numpy, and scikit-learn.",
      "Extensive security library ecosystem (requests, scapy, cryptography).",
    ],
  },
  JavaScript: {
    tagline: "Web language for frontends, browser security research, and Node.js tooling.",
    details: [
      "DOM manipulation and event-driven UI development.",
      "Modern ES6+ patterns, async/await, and module systems.",
      "Node.js backend services, Express APIs, and npm packaging.",
      "Client-side security: CSP, CORS, and XSS mitigation.",
    ],
  },
  C: {
    tagline: "Systems programming language for low-level security and performance.",
    details: [
      "Memory management, pointers, and buffer handling discipline.",
      "Reverse engineering and exploit development foundations.",
      "Embedded/IoT firmware analysis and binary internals.",
      "Understanding of stack/heap layouts and safe coding practices.",
    ],
  },
  "scikit-learn": {
    tagline: "Python ML library for classification, clustering, and anomaly detection.",
    details: [
      "Feature engineering, model selection, and cross-validation.",
      "Classification and clustering algorithms for security use cases.",
      "Pipeline construction and model persistence with joblib.",
      "Evaluation metrics: precision, recall, F1, ROC-AUC.",
    ],
  },
  SQLite: {
    tagline: "Lightweight embedded SQL database for applications and prototypes.",
    details: [
      "Serverless, zero-configuration relational storage.",
      "Parameterized queries and ACID transaction support.",
      "Useful for local data, IoT, and small-to-medium apps.",
      "Audit logging and structured data storage without heavy infra.",
    ],
  },
  SSE: {
    tagline: "Server-Sent Events for pushing live updates to browser dashboards.",
    details: [
      "Unidirectional real-time stream over HTTP.",
      "Automatic reconnection and event ID tracking.",
      "Simpler alternative to WebSockets for dashboard feeds.",
      "Used in Cyberwatch AI for live threat-intel delivery.",
    ],
  },
};

export function SkillsMatrix() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="systems" className="relative border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3">
          <span className="mono-data text-[#DC2626]">// 05</span>
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
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: gi * 0.08, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="clip-notch-tr group relative border border-white/10 bg-[#0a0a0a] p-6 hover:border-[#DC2626]/50"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="scan-line" />
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <g.icon strokeWidth={1.25} className="h-5 w-5 text-[#DC2626]" />
                  <span className="ui-label text-white">{g.label}</span>
                </div>
                <span className="mono-data text-white/40">MOD-{String(gi + 1).padStart(2, "0")}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.tools.map((t, ti) => (
                  <motion.button
                    key={t}
                    onClick={() => setActive(t)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: gi * 0.08 + ti * 0.04 + 0.15 }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(220,38,38,0.7)",
                      boxShadow: "0 0 16px rgba(220,38,38,0.25)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="skew-tactical t-tactical border border-white/15 bg-[#121212] px-3 py-1.5 text-left outline-none focus-visible:border-[#DC2626]"
                  >
                    <span className="skew-tactical-inner flex items-center gap-2 ui-label text-white/80">
                      <Zap className="h-3 w-3 text-[#DC2626] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                      {t}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ToolModal tool={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ToolModal({ tool, onClose }: { tool: string; onClose: () => void }) {
  const brief = TOOL_BRIEFS[tool] ?? {
    tagline: "Tactical capability deployed in the field.",
    details: ["No additional intel available on this asset."],
  };

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
        initial={{ opacity: 0, scale: 0.9, y: 40, rotateX: -8 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20, rotateX: 8 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 w-full max-w-xl overflow-hidden border border-[#DC2626]/60 bg-[#0a0a0a] red-glow-box"
      >
        <div className="scan-line" />
        <div className="flex items-center justify-between border-b border-white/10 bg-[#050505] px-5 py-3">
          <div className="flex items-center gap-3">
            <span className="mono-data text-[#DC2626]">// BRIEF</span>
            <span className="ui-label text-white/50">/</span>
            <span className="ui-label text-white/80">TARGET DOSSIER</span>
          </div>
          <button
            onClick={onClose}
            className="border border-white/10 p-1.5 text-white/60 t-tactical hover:border-[#DC2626] hover:text-[#DC2626]"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-3xl font-black uppercase tracking-tight text-white red-glow-text">
            {tool}
          </h3>
          <p className="mt-2 text-[17px] leading-snug text-white/70">{brief.tagline}</p>
          <div className="mt-6 border border-white/10 bg-[#121212] p-4">
            <div className="ui-label mb-3 text-[#DC2626]">CAPABILITIES</div>
            <ul className="space-y-2">
              {brief.details.map((d, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.25 }}
                  className="flex items-start gap-3 text-[15px] leading-snug text-white/75"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 bg-[#DC2626]" />
                  {d}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="mt-5 flex justify-end">
            <button
              onClick={onClose}
              className="skew-tactical t-tactical border border-white/15 bg-[#121212] px-4 py-2 hover:border-[#DC2626] hover:bg-[#DC2626]/10"
            >
              <span className="skew-tactical-inner ui-label text-white/80">DISMISS →</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
