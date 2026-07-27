import { useEffect, useState } from "react";

const PHRASES = [
  "ETHICAL HACKER",
  "APPSEC ENGINEER",
  "SOC ANALYST",
  "THREAT HUNTER",
];

export function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "hold" | "deleting">("typing");

  useEffect(() => {
    const current = PHRASES[i];
    let t: number;
    if (phase === "typing") {
      if (text.length < current.length) {
        t = window.setTimeout(() => setText(current.slice(0, text.length + 1)), 65);
      } else {
        t = window.setTimeout(() => setPhase("hold"), 1200);
      }
    } else if (phase === "hold") {
      t = window.setTimeout(() => setPhase("deleting"), 400);
    } else {
      if (text.length > 0) {
        t = window.setTimeout(() => setText(current.slice(0, text.length - 1)), 30);
      } else {
        setI((i + 1) % PHRASES.length);
        setPhase("typing");
        t = window.setTimeout(() => {}, 0);
      }
    }
    return () => window.clearTimeout(t);
  }, [text, phase, i]);

  return (
    <span className="text-[#DC2626]">
      {text}
      <span className="caret ml-1 inline-block h-[0.9em] w-[10px] translate-y-[2px] bg-[#DC2626]" />
    </span>
  );
}
