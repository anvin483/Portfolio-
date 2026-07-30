import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProtocolsSection } from "@/components/Protocols";
import { ArchiveList } from "@/components/ArchiveList";
import { Experience } from "@/components/Experience";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { Credentials } from "@/components/Credentials";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anvin Jose — Cyber Operator · Ethical Hacker · AppSec Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Anvin Jose — penetration testing, threat intelligence and DevSecOps engagements. Deployed protocols, hardened tooling matrix and verified credentials.",
      },
      { property: "og:title", content: "Anvin Jose — Cyber Operator" },
      {
        property: "og:description",
        content:
          "Tactical cybersecurity portfolio: pentesting, threat intel, ML-based defense and portal hardening.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#e5e5e5]">
      <Nav />
      <main>
        <Hero />
        <ProtocolsSection />
        <ArchiveList />
        <SkillsMatrix />
        <Credentials />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-[#050505]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 md:flex-row">
          <div className="ui-label text-white/50">
            &lt;<span className="text-[#DC2626]">WARRIOR</span>.SEC /&gt; // ANVIN JOSE · 2026
          </div>
          <div className="mono-data text-white/40">
            uptime 99.98% · aes-256-gcm · node-07 secure
          </div>
        </div>
      </footer>
    </div>
  );
}
