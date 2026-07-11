"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { insightStages } from "@/data/productData";

export function InsightFlow() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineScale = useTransform(scrollYProgress, [0.15, 0.75], [0, 1]);

  return (
    <section id="flow" ref={ref} className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Insight Flow</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">From ingestion to action in three clear steps.</h2>
      </div>
      <motion.div style={{ scaleX: lineScale }} className="mb-8 h-px origin-left bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400" />
      <div className="grid gap-4 md:grid-cols-3">
        {insightStages.map((stage, index) => (
          <motion.article
            key={stage.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.12, duration: 0.55 }}
            className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{stage.label}</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">{stage.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{stage.description}</p>
            <div className="mt-6 grid gap-2">
              {stage.metrics.map((metric) => <span key={metric} className="rounded-full border border-white/10 px-3 py-2 text-sm text-cyan-100">{metric}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
