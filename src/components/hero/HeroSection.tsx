"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";

const DataClusterCanvas = dynamic(() => import("./DataClusterCanvas").then(m => m.DataClusterCanvas), {
  ssr: false,
  loading: () => <div className="h-[420px] rounded-3xl border border-white/10 bg-white/[0.03]" />,
});

export function HeroSection() {
  return (
    <section id="hero" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pt-24 md:grid-cols-[0.95fr_1.05fr]">
      <div>
        <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300">
          Intelligence Workspace
        </motion.p>
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.1}} className="max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl">
          Turn raw data into decision-ready intelligence.
        </motion.h1>
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.2}} className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          Xai ingests scattered signals, structures them into intelligence, and activates AI automation for faster executive decisions.
        </motion.p>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.3}} className="mt-8 flex gap-3">
          <a className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950" href="#flow">Explore Flow</a>
          <a className="rounded-full border border-white/15 px-5 py-3 text-sm text-white" href="#dashboard">See Dashboard</a>
        </motion.div>
      </div>
      <DataClusterCanvas />
    </section>
  );
}
