import { motion } from "framer-motion";
import { Trophy, Cloud, Boxes, GitBranch, Rocket, Award, ChevronRight } from "lucide-react";

const ACHIEVEMENTS = [
  {
    id: "knowcode-3",
    rank: "FINALIST",
    event: "KnowCode 3.0",
    venue: "K. J. Somaiya Institute of Technology",
    project: "APIBazaar",
    subtitle: "Cloud-Native API Deployment Platform",
    description:
      "Built a platform that transforms API documentation into live, deployable services instantly using Kubernetes and Docker.",
    bullets: [
      "Designed an automated pipeline to parse API specifications and provision containerised endpoints on demand",
      "Leveraged Kubernetes orchestration and Docker containers for scalable, portable microservice deployments",
      "Bridged documentation-to-runtime gap, enabling rapid API prototyping and continuous delivery",
    ],
    stack: ["Kubernetes", "Docker", "API Specs", "Microservices", "CI/CD Pipeline"],
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative border-t border-white/10 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3">
          <span className="mono-data text-[#DC2626]">// 07</span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="ui-label text-white/40">Achievements</span>
        </div>
        <h2 className="mt-2 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
          Commendations
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/50">
          Recognitions from the field — competitive milestones, hackathon deployments, and high-impact engineering outcomes.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-[360px_1fr]">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="clip-notch-tr group relative border border-[#DC2626]/30 bg-[#0a0a0a] p-8 lg:col-span-2"
            >
              <div className="scan-line" />

              <div className="relative grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
                <div className="relative">
                  <div className="clip-hex relative mx-auto flex h-52 w-52 items-center justify-center border border-[#DC2626]/40 bg-gradient-to-b from-[#DC2626]/20 to-[#0a0a0a] red-glow-soft">
                    <div className="absolute inset-0 animate-[spin_12s_linear_infinite] opacity-20">
                      <div className="h-full w-full border-[1px] border-dashed border-[#DC2626]" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
                    </div>
                    <Trophy className="relative z-10 h-20 w-20 text-[#DC2626] drop-shadow-[0_0_18px_rgba(220,38,38,0.6)]" strokeWidth={1.2} />
                  </div>

                  <div className="mt-6 text-center">
                    <div className="mono-data inline-block bg-[#DC2626] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-black">
                      {a.rank}
                    </div>
                    <div className="mt-2 text-lg font-bold uppercase tracking-tight text-white">{a.event}</div>
                    <div className="mono-data text-sm text-white/40">{a.venue}</div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-[#DC2626]" />
                    <span className="ui-label text-[#DC2626]">COMMENDATION DOSSIER</span>
                  </div>

                  <h3 className="mt-3 text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
                    {a.project}
                  </h3>
                  <div className="mono-data mt-1 text-[#DC2626]/80">{a.subtitle}</div>

                  <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-white/70">
                    {a.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {a.bullets.map((b, bi) => (
                      <motion.li
                        key={b}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + bi * 0.1, duration: 0.4 }}
                        className="flex items-start gap-3 border-l-2 border-[#DC2626]/40 bg-white/[0.02] pl-4 py-3 text-[14px] text-white/75"
                      >
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#DC2626]" />
                        <span>{b}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    {a.stack.map((s) => (
                      <span
                        key={s}
                        className="mono-data inline-flex items-center gap-1.5 border border-white/10 bg-black/40 px-3 py-1.5 text-[11px] text-white/70"
                      >
                        {iconFor(s)}
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function iconFor(s: string) {
  const cls = "h-3.5 w-3.5 text-[#DC2626]";
  if (s.includes("Docker")) return <Boxes className={cls} />;
  if (s.includes("Kubernetes")) return <Cloud className={cls} />;
  if (s.includes("API")) return <GitBranch className={cls} />;
  if (s.includes("CI/CD") || s.includes("Pipeline")) return <Rocket className={cls} />;
  return <ChevronRight className={cls} />;
}
