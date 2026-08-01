import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Cloud, Boxes, GitBranch, Rocket, Award, ChevronRight, X, Camera } from "lucide-react";
import footballWinnerPhoto from "@/assets/football-tournament-winner.png.asset.json";

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
  {
    id: "football-2024",
    rank: "WINNER",
    event: "Football Tournament",
    venue: "2024",
    project: "Team Championship",
    subtitle: "Tactical Squad Victory",
    description:
      "Led the squad to a championship victory in the 2024 football tournament — a disciplined, high-pressure operation executed as a unit.",
    bullets: [
      "Coordinated team strategy across multiple match phases under time-constrained conditions",
      "Maintained defensive discipline while executing fast offensive transitions",
      "Secured the tournament trophy through consistent execution and squad coordination",
    ],
    stack: ["Leadership", "Team Coordination", "Strategic Execution", "Discipline"],
    photo: footballWinnerPhoto.url,
  },
];

export function Achievements() {
  const [photoOpen, setPhotoOpen] = useState(false);

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
          Recognitions from the field — competitive milestones, hackathon deployments, championship victories, and high-impact engineering outcomes.
        </p>

        <div className="mt-14 grid gap-8">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: i * 0.1 }}
              className="clip-notch-tr group relative border border-[#DC2626]/30 bg-[#0a0a0a] p-8"
            >
              <div className="scan-line" />

              <div className="relative grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
                <div className="relative">
                  <div className="clip-hex relative mx-auto flex h-52 w-52 items-center justify-center border border-[#DC2626]/40 bg-gradient-to-b from-[#DC2626]/20 to-[#0a0a0a] red-glow-soft">
                    <div className="absolute inset-0 animate-[spin_12s_linear_infinite] opacity-20">
                      <div className="h-full w-full border-[1px] border-dashed border-[#DC2626]" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
                    </div>
                    {a.photo ? (
                      <Camera className="relative z-10 h-20 w-20 text-[#DC2626] drop-shadow-[0_0_18px_rgba(220,38,38,0.6)]" strokeWidth={1.2} />
                    ) : (
                      <Trophy className="relative z-10 h-20 w-20 text-[#DC2626] drop-shadow-[0_0_18px_rgba(220,38,38,0.6)]" strokeWidth={1.2} />
                    )}
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

                    {a.photo && (
                      <motion.button
                        onClick={() => setPhotoOpen(true)}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 18px rgba(220,38,38,0.45)" }}
                        whileTap={{ scale: 0.98 }}
                        className="ui-label ml-auto inline-flex items-center gap-2 border border-[#DC2626]/60 bg-[#DC2626]/10 px-4 py-2 text-[11px] text-[#DC2626] transition-colors hover:bg-[#DC2626]/20"
                      >
                        <Camera className="h-3.5 w-3.5" />
                        VIEW PHOTO
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {photoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setPhotoOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotateX: 8 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.85, rotateX: -8 }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              className="clip-notch-tr relative w-full max-w-4xl border border-[#DC2626]/50 bg-[#0a0a0a] p-3 red-glow-box"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="scan-line" />
              <button
                onClick={() => setPhotoOpen(false)}
                className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center border border-white/20 bg-black/80 text-white/70 hover:border-[#DC2626]/60 hover:text-[#DC2626]"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative overflow-hidden border border-white/10 bg-black/60">
                <img
                  src={footballWinnerPhoto.url}
                  alt="Football Tournament 2024 — Championship squad photo"
                  className="w-full object-contain"
                />
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-white/10 px-2 py-2">
                <div className="ui-label text-[#DC2626]">PHOTO DOSSIER // 2024-07-27</div>
                <div className="mono-data text-white/50">Football Tournament Championship Squad</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function iconFor(s: string) {
  const cls = "h-3.5 w-3.5 text-[#DC2626]";
  if (s.includes("Docker")) return <Boxes className={cls} />;
  if (s.includes("Kubernetes")) return <Cloud className={cls} />;
  if (s.includes("API")) return <GitBranch className={cls} />;
  if (s.includes("CI/CD") || s.includes("Pipeline")) return <Rocket className={cls} />;
  if (s.includes("Camera") || s.includes("Photo")) return <Camera className={cls} />;
  return <ChevronRight className={cls} />;
}
