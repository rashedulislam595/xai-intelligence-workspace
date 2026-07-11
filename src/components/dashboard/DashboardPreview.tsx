"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { dashboardMetrics } from "@/data/productData";

const tabs = ["Signals", "Risks", "Automations"] as const;
type Tab = typeof tabs[number];

export function DashboardPreview() {
  const [active, setActive] = useState<Tab>("Signals");
  return (
    <section id="dashboard" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Product Preview</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">An intelligence dashboard, not a static website.</h2>
        </div>
        <div className="flex rounded-full border border-white/10 bg-white/[0.04] p-1">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActive(tab)} className={`rounded-full px-4 py-2 text-sm transition ${active === tab ? "bg-white text-slate-950" : "text-slate-300 hover:text-white"}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl md:grid-cols-[220px_1fr]">
        <aside className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
          <div className="mb-6 text-sm font-semibold text-white">Xai Workspace</div>
          {["Overview", "Sources", "Insights", "Automations"].map((item, i) => (
            <div key={item} className={`mb-2 rounded-xl px-3 py-2 text-sm ${i === 0 ? "bg-white/10 text-white" : "text-slate-400"}`}>{item}</div>
          ))}
        </aside>
        <main className="p-5 md:p-8">
          <div className="grid gap-4 md:grid-cols-4">
            {dashboardMetrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs text-slate-400">{m.label}</p>
                <div className="mt-3 flex items-end justify-between"><span className="text-2xl font-semibold text-white">{m.value}</span><span className="text-sm text-cyan-300">{m.trend}</span></div>
              </div>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{active} View</p>
              <div className="mt-5 h-48 rounded-xl bg-linear-to-br from-blue-500/20 via-cyan-500/10 to-violet-500/20" />
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="rounded-xl bg-white/[0.04] p-3">Priority insight detected from revenue operations data.</div>
                <div className="rounded-xl bg-white/[0.04] p-3">Recommended automation: notify account owner and create follow-up task.</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </section>
  );
}
