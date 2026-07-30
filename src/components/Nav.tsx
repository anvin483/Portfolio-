import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const LINKS = [
  { label: "SYSTEMS", href: "#systems" },
  { label: "PROTOCOLS", href: "#protocols" },
  { label: "ARCHIVE", href: "#archive" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CREDENTIALS", href: "#credentials" },
  { label: "TERMINAL", href: "#terminal" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="ui-label text-white">
            &lt;<span className="text-[#DC2626]">WARRIOR</span>.SEC /&gt;
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="ui-label px-3 py-2 text-white/60 t-tactical hover:text-[#DC2626]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={resumeAsset.url}
          target="_blank"
          rel="noreferrer"
          className="skew-tactical border border-[#DC2626] bg-[#DC2626] px-5 py-2 red-glow-soft t-tactical hover:brightness-110"
        >
          <span className="skew-tactical-inner ui-label text-white">DEPLOY RESUME</span>
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="ml-2 border border-white/15 p-2 md:hidden"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#050505] px-6 pb-4 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="ui-label block py-3 text-white/70 hover:text-[#DC2626]"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
