"use client";

import { useState } from "react";
import { motion } from "motion/react";

const nodes = Array.from({ length: 18 }, (_, i) => ({ id: i }));

export function SignatureInteraction() {
  const [structured, setStructured] = useState(false);
  return (
    <section id="wow" className="mx-auto max-w-7xl px-6 py-28">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Signature Interaction</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white">Reorganize the raw signal cluster into an insight graph.</h2>
          </div>
          <button onClick={() => setStructured((v) => !v)} className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950">
            {structured ? "Return to Raw Data" : "Structure Intelligence"}
          </button>
        </div>
        <div className="relative mt-10 h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-slate-950">
          {nodes.map((node, i) => {
            const row = Math.floor(i / 6);
            const col = i % 6;
            return (
              <motion.div
                key={node.id}
                className="absolute h-4 w-4 rounded-full bg-cyan-300 shadow-lg shadow-cyan-400/40"
                animate={{
                  left: structured ? `${15 + col * 13}%` : `${10 + Math.sin(i * 2.3) * 35 + 40}%`,
                  top: structured ? `${22 + row * 24}%` : `${20 + Math.cos(i * 1.7) * 30 + 30}%`,
                  scale: structured ? 1 : 0.75 + (i % 4) * 0.18,
                }}
                transition={{ type: "spring", stiffness: 70, damping: 18, delay: i * 0.012 }}
              />
            );
          })}
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-300 backdrop-blur">
            {structured ? "Structured state: clustered signals are grouped into decision pathways." : "Raw state: scattered signals are noisy and difficult to act on."}
          </div>
        </div>
      </div>
    </section>
  );
}
