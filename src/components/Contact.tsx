import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";

const PGP = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: WARRIOR.SEC v1

mQENBGZ0aX0BCADQx7Rw5w6q9v2sT4b0m3n7cP2X8LhK1uY4iZ0oN6vRj5f8QwA9
xJq3B8pW3sK6R2vE4mLdG9tH2s7bV3zXcJ0f8oN4YkP9pR3wLpH0M2X5aC6iJqT7
mZ0oQwZ8vT4gK2H7rN3cP6vQnE8pR9tY0uH3wD1jJ4qL5aS2Pk8oXcV0f7bB2sN9
wR3zK1uY6oM5aC0iJpT8mZ7oQvZ8vT4gK2H7rN3cP6vQnE8pR9tY0uH3wD1jJ4qL
=k3yZ
-----END PGP PUBLIC KEY BLOCK-----`;

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState<"idle" | "tx" | "done">("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PGP);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* noop */
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending("tx");
    setTimeout(() => setSending("done"), 1800);
    setTimeout(() => setSending("idle"), 4000);
  };

  return (
    <section id="terminal" className="relative border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3">
          <span className="mono-data text-[#DC2626]">// 08</span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="ui-label text-white/40">Transmission</span>
        </div>
        <h2 className="mt-2 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
          Open Secure Channel
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <form onSubmit={submit} className="relative border border-white/10 bg-[#0a0a0a] p-6">
            <div className="scan-line" />
            <div className="ui-label mb-6 text-[#DC2626]">TRANSMISSION FORM</div>
            <div className="space-y-6">
              <Field label="Handle" name="name" />
              <Field label="Return Channel" name="email" type="email" />
              <Field label="Payload" name="message" textarea />
            </div>
            <button
              type="submit"
              disabled={sending !== "idle"}
              className="skew-tactical mt-8 border border-[#DC2626] bg-[#DC2626] px-8 py-3 red-glow-soft t-tactical hover:brightness-110 disabled:opacity-70"
            >
              <span className="skew-tactical-inner ui-label text-white">
                {sending === "idle" ? "TRANSMIT" : sending === "tx" ? "ENCRYPTING…" : "DELIVERED ✓"}
              </span>
            </button>
          </form>

          <div className="space-y-6">
            <div className="clip-notch-tr border border-white/10 bg-[#0a0a0a] p-6">
              <div className="ui-label mb-4 text-[#DC2626]">DIRECT CHANNELS</div>
              <ul className="space-y-3 text-[15px]">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="mono-data text-white/40">email</span>
                  <a
                    className="text-white/90 hover:text-[#DC2626] t-tactical"
                    href="mailto:anvinjose222@gmail.com"
                  >
                    anvinjose222@gmail.com
                  </a>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="mono-data text-white/40">linkedin</span>
                  <a
                    className="text-white/90 hover:text-[#DC2626] t-tactical"
                    href="https://www.linkedin.com/in/anvin-jose-a62156330"
                    target="_blank"
                    rel="noreferrer"
                  >
                    /in/anvin-jose
                  </a>
                </li>
                <li className="flex justify-between">
                  <span className="mono-data text-white/40">phone</span>
                  <a className="text-white/90 hover:text-[#DC2626] t-tactical" href="tel:+919619608652">
                    +91 96196 08652
                  </a>
                </li>
              </ul>
            </div>

            <div className="border border-white/10 bg-[#0a0a0a] p-6">
              <div className="mb-3 flex items-center justify-between">
                <div className="ui-label text-[#DC2626]">PGP PUBLIC KEY</div>
                <button
                  onClick={copy}
                  className="skew-tactical border border-white/15 bg-[#121212] px-3 py-1.5 t-tactical hover:border-[#DC2626]"
                >
                  <span className="skew-tactical-inner ui-label flex items-center gap-1.5 text-white/80">
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {copied ? "COPIED" : "COPY KEY"}
                  </span>
                </button>
              </div>
              <pre className="max-h-56 overflow-auto border border-white/5 bg-black/60 p-3 font-mono text-[10px] leading-snug text-emerald-400/80">
                {PGP}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {sending !== "idle" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 backdrop-blur-sm"
          >
            <div className="relative w-[min(92vw,520px)] border border-[#DC2626]/70 bg-[#0a0a0a] p-8 red-glow-box">
              <div className="scan-line" />
              <div className="mono-data text-[#DC2626]">warrior.sec // uplink</div>
              <div className="mt-3 text-xl font-bold uppercase tracking-tight text-white red-glow-text">
                {sending === "tx" ? "TRANSMITTING ENCRYPTED DATA…" : "TRANSMISSION COMPLETE"}
              </div>
              <div className="mt-6 h-1 w-full overflow-hidden bg-white/10">
                <motion.div
                  className="h-full bg-[#DC2626]"
                  initial={{ width: "0%" }}
                  animate={{ width: sending === "tx" ? "80%" : "100%" }}
                  transition={{ duration: sending === "tx" ? 1.6 : 0.3, ease: "easeOut" }}
                />
              </div>
              <div className="mono-data mt-4 flex justify-between text-white/50">
                <span>aes-256-gcm</span>
                <span>node-07 → operator</span>
                <span>{sending === "tx" ? "…" : "OK"}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="ui-label mb-2 block text-white/50">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          required
          rows={4}
          className="peer w-full resize-none border-0 border-b border-white/15 bg-transparent px-0 py-2 text-[15px] text-white outline-none t-tactical focus:border-[#DC2626]"
        />
      ) : (
        <input
          name={name}
          type={type}
          required
          className="peer w-full border-0 border-b border-white/15 bg-transparent px-0 py-2 text-[15px] text-white outline-none t-tactical focus:border-[#DC2626]"
        />
      )}
    </label>
  );
}
