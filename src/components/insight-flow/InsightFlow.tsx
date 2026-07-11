"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { insightStages } from "@/data/productData";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function InsightFlow() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineScale = useTransform(scrollYProgress, [0.15, 0.75], [0, 1]);

  useGSAP(
    () => {
      gsap.from(".stage", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          end: "bottom 50%",
          scrub: 0.7,
        },
      });
    },
    { scope: ref }
  );

  return (
    <section
      id="flow"
      ref={ref}
      className="relative mx-auto max-w-7xl px-6 py-28"
    >
      <div className="mb-12 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          Insight Flow
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
          From ingestion to action in three clear steps.
        </h2>
      </div>

      <motion.div
        style={{ scaleX: lineScale }}
        className="mb-8 h-px origin-left bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400"
      />

      <div className="grid gap-4 md:grid-cols-3">
        {insightStages.map((stage) => (
          <article
            key={stage.id}
            className="stage group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              {stage.label}
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-white">
              {stage.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {stage.description}
            </p>

            <div className="mt-6 grid gap-2">
              {stage.metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full border border-white/10 px-3 py-2 text-sm text-cyan-100"
                >
                  {metric}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}