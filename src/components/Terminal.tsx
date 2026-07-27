import { useEffect, useRef, useState } from "react";

const OUTPUT: Record<string, string[]> = {
  help: [
    "AVAILABLE PROTOCOLS:",
    "  help      → list available commands",
    "  whoami    → operator identity",
    "  stats     → mission telemetry",
    "  skills    → weaponized tooling",
    "  contact   → open secure channel",
    "  clear     → wipe terminal buffer",
  ],
  whoami: [
    "operator: anvin.jose",
    "role    : ethical hacker / appsec engineer",
    "clearance: gamma-3  |  location: mumbai, in",
    "status  : ONLINE — accepting engagements",
  ],
  stats: [
    "== TELEMETRY ==",
    "engagements ....... 12",
    "vulns disclosed ... 27",
    "portals hardened .. 1 (fcrit college portal)",
    "ml threat models .. 3 deployed",
  ],
  skills: [
    "OFFENSIVE : nmap · burp suite · wireshark · kali",
    "DEFENSIVE : mitre att&ck · incident response · log analysis",
    "AUTOMATION: python · flask · laravel · mysql · docker",
    "ML/AI     : phishing detection · IDS · threat intel",
  ],
  contact: [
    "channel : anvinjose222@gmail.com",
    "linkedin: /in/anvin-jose-a62156330",
    "PGP     : available in transmission hub ↓",
  ],
};

type Line = { prompt?: boolean; text: string; kind?: "cmd" | "out" | "err" | "sys" };

const BOOT: Line[] = [
  { text: "warrior.sec // secure shell v3.2.1", kind: "sys" },
  { text: "handshake ................ OK", kind: "sys" },
  { text: "tls 1.3 · aes-256-gcm .... OK", kind: "sys" },
  { text: 'type "help" to list available protocols.', kind: "sys" },
];

export function Terminal() {
  const [lines, setLines] = useState<Line[]>(BOOT);
  const [value, setValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") {
      setLines(BOOT);
      return;
    }
    const next: Line[] = [{ prompt: true, text: raw, kind: "cmd" }];
    const out = OUTPUT[cmd];
    if (out) {
      out.forEach((t) => next.push({ text: t, kind: "out" }));
    } else {
      next.push({ text: `command not found: ${raw}  — try "help"`, kind: "err" });
    }
    setLines((prev) => [...prev, ...next]);
  };

  const quick = ["help", "whoami", "stats", "skills", "clear"];

  return (
    <div className="relative overflow-hidden border border-white/10 bg-[#0a0a0a]">
      <div className="scan-line" />
      {/* header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#050505] px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 bg-[#DC2626] pulse-red" />
          <span className="ui-label text-white/70">TERMINAL // NODE-07</span>
        </div>
        <span className="mono-data text-white/40">SECURE · ENCRYPTED · 256b</span>
      </div>

      <div
        ref={scrollRef}
        className="h-72 overflow-y-auto bg-[#121212] px-4 py-3 font-mono text-[13px] leading-relaxed"
      >
        {lines.map((l, i) => (
          <div
            key={i}
            className={
              l.kind === "cmd"
                ? "text-[#e5e5e5]"
                : l.kind === "err"
                  ? "text-[#DC2626]"
                  : l.kind === "sys"
                    ? "text-white/40"
                    : "text-emerald-400/90"
            }
          >
            {l.prompt && <span className="text-[#DC2626]">operator@warrior-node:~$ </span>}
            <span className="whitespace-pre-wrap">{l.text}</span>
          </div>
        ))}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            run(value);
            setValue("");
          }}
          className="mt-1 flex items-center"
        >
          <span className="text-[#DC2626] font-mono text-[13px]">operator@warrior-node:~$&nbsp;</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="flex-1 bg-transparent font-mono text-[13px] text-[#e5e5e5] outline-none"
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
          />
          <span className="caret ml-0.5 inline-block h-4 w-2 bg-[#DC2626]" />
        </form>
      </div>

      <div className="flex flex-wrap gap-2 border-t border-white/10 bg-[#0a0a0a] px-4 py-3">
        {quick.map((c) => (
          <button
            key={c}
            onClick={() => {
              run(c);
              inputRef.current?.focus();
            }}
            className="skew-tactical t-tactical border border-white/15 bg-[#121212] px-3 py-1.5 hover:border-[#DC2626] hover:bg-[#DC2626]/10 hover:red-glow-soft"
          >
            <span className="skew-tactical-inner ui-label text-white/70">{c}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
