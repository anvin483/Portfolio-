import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const channels = [
  {
    label: "EMAIL",
    value: "anvinjose444@gmail.com",
    href: "mailto:anvinjose444@gmail.com",
    icon: Mail,
  },
  {
    label: "GITHUB",
    value: "github.com/anvin483",
    href: "https://github.com/anvin483",
    icon: Github,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/anvin-jose-a62156330",
    href: "https://www.linkedin.com/in/anvin-jose-a62156330/",
    icon: Linkedin,
  },
];

export function Contact() {
  const [sending, setSending] = useState<"idle" | "tx" | "done" | "error">("idle");
  const [sendError, setSendError] = useState("");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    setSending("tx");
    setSendError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const result = (await response.json()) as { error?: string; sent?: boolean };
      if (!response.ok || !result.sent) {
        throw new Error(result.error || "Message delivery failed. Please try again.");
      }
      setSending("done");
      form.reset();
      window.setTimeout(() => setSending("idle"), 3000);
    } catch (error) {
      setSendError(error instanceof Error ? error.message : "Message delivery failed. Please try again.");
      setSending("error");
      window.setTimeout(() => setSending("idle"), 5000);
    }
  };

  return (
    <section id="terminal" className="contact-tactical relative overflow-hidden border-t border-white/10 py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 tactical-grid-red opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(220,38,38,0.14),transparent_58%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="contact-panel relative rounded-[2rem] border border-red-500/25 bg-[#0a0a0a]/95 px-6 py-12 shadow-[0_24px_100px_rgba(0,0,0,0.45)] md:px-12 md:py-16">
          <div className="scan-line" />
          <div className="mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mono-data text-xs tracking-[0.24em] text-[#DC2626]">// 08 · SECURE UPLINK</motion.div>
            <motion.h2 initial={{ opacity: 0, letterSpacing: "0.18em" }} whileInView={{ opacity: 1, letterSpacing: "-0.02em" }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mt-4 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              Let&apos;s <span className="red-glow-text text-[#DC2626]">connect</span>
            </motion.h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
              Open to SOC and VAPT internships and cybersecurity opportunities. Happy to talk about detection engineering, network forensics, or security tooling.
            </p>
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25, duration: 0.5 }} className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:anvinjose444@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-[#DC2626] px-6 py-3.5 font-semibold text-white red-glow-soft transition hover:-translate-y-0.5 hover:brightness-110"
              >
                <Mail className="h-4 w-4" /> Send an Email
              </a>
              <a
                href="https://www.linkedin.com/in/anvin-jose-a62156330/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.02] px-6 py-3.5 font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-[#DC2626] hover:text-[#DC2626]"
              >
                <Linkedin className="h-4 w-4" /> Connect on LinkedIn
              </a>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {channels.map(({ label, value, href, icon: Icon }, index) => (
              <motion.a
                key={label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: 0.15 + index * 0.12, duration: 0.45 }}
                href={href}
                target={label === "EMAIL" ? undefined : "_blank"}
                rel={label === "EMAIL" ? undefined : "noreferrer"}
                className="contact-channel group flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-[#0d0d0d] p-5 transition hover:border-[#DC2626]/70 hover:bg-[#160b0b]"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] text-[#DC2626] transition group-hover:border-[#DC2626]/60 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 text-left">
                  <span className="mono-data block text-xs tracking-[0.16em] text-slate-500">{label}</span>
                  <span className="mt-1 block break-all text-sm font-medium text-slate-200 transition group-hover:text-white md:text-base">{value}</span>
                </span>
              </motion.a>
            ))}
          </div>

          <details className="group mt-6 rounded-2xl border border-white/10 bg-[#0d0d0d]/80">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-slate-200 marker:hidden hover:text-cyan-200">
              <span className="flex items-center gap-2"><Send className="h-4 w-4 text-[#DC2626]" /> Send a message through the portfolio</span>
              <span className="mono-data text-xs text-slate-500 transition group-open:rotate-45">+</span>
            </summary>
            <form onSubmit={submit} className="grid gap-5 border-t border-white/10 p-5 md:grid-cols-2">
              <ContactField label="YOUR NAME" name="name" />
              <ContactField label="YOUR EMAIL" name="email" type="email" />
              <div className="md:col-span-2">
                <ContactField label="MESSAGE" name="message" textarea />
              </div>
              <button
                type="submit"
                disabled={sending !== "idle"}
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#DC2626] px-5 py-3 font-semibold text-white transition hover:brightness-110 disabled:opacity-60"
              >
                <Send className="h-4 w-4" /> {sending === "tx" ? "Sending…" : "Transmit message"}
              </button>
            </form>
          </details>
        </div>
      </div>

      {sending !== "idle" && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/85 px-4 backdrop-blur-sm" role="status" aria-live="polite">
          <div className="w-full max-w-lg rounded-2xl border border-cyan-300/30 bg-[#0b1020] p-7 shadow-2xl shadow-blue-950/50">
            <div className="mono-data text-cyan-300">anvin.jose // secure uplink</div>
            <div className="mt-3 text-xl font-bold text-white">
              {sending === "tx" ? "Sending your message…" : sending === "done" ? "Email accepted for delivery" : "Message not sent"}
            </div>
            {sending === "error" && <p className="mt-3 text-sm text-slate-300">{sendError}</p>}
            <div className="mt-6 h-1 overflow-hidden rounded bg-white/10">
              <motion.div className="h-full bg-gradient-to-r from-cyan-400 to-violet-400" initial={{ width: "0%" }} animate={{ width: sending === "tx" ? "80%" : "100%" }} transition={{ duration: sending === "tx" ? 1.6 : 0.3 }} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ContactField({
  label,
  name,
  type = "text",
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  const className = "mt-2 w-full rounded-lg border border-blue-200/15 bg-[#080d1a] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/10";
  return (
    <label className="block">
      <span className="mono-data text-xs tracking-[0.14em] text-slate-500">{label}</span>
      {textarea ? (
        <textarea name={name} required rows={4} className={`${className} resize-y`} />
      ) : (
        <input name={name} type={type} required className={className} />
      )}
    </label>
  );
}
