"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { STATS } from "@/data";

export function StatsSection() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.2 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-blue-800/5 to-purple-900/10" />
      <div className="absolute inset-0 border-y border-white/5" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <motion.div
        ref={ref}
        style={{ opacity }}
        className="container-custom relative z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="text-center group"
            >
              <div className="relative">
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-blue-500/5 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500" />

                <div className="relative p-4 rounded-2xl glass border border-white/5 group-hover:border-blue-500/20 transition-all duration-500">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1 tabular-nums">
                    {inView ? (
                      <>
                        <CountUp
                          start={0}
                          end={stat.value}
                          duration={2.5}
                          delay={i * 0.1}
                          separator=","
                          useEasing
                        />
                        <span className="gradient-text">{stat.suffix}</span>
                      </>
                    ) : (
                      <span>0{stat.suffix}</span>
                    )}
                  </div>
                  <div className="text-white font-semibold text-sm mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-slate-500 text-xs">{stat.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
