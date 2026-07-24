"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FAQ_ITEMS } from "@/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] to-[#04101f]" />
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <SectionLabel>FAQs</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-6 mb-5 leading-tight">
              Common <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Everything you need to know about Amaze PMS services, operations,
              and how we can serve your property.
            </p>
            <div className="glass-card rounded-2xl p-6 border border-white/5">
              <div className="text-white font-bold mb-2">Still have questions?</div>
              <p className="text-slate-400 text-sm mb-4">
                Our team is ready to answer any specific queries about your
                property requirements.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* Right - Accordion */}
          <div className="lg:col-span-8 space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`glass-card rounded-2xl border transition-all duration-300 ${
                  openIndex === i
                    ? "border-blue-500/25 bg-blue-500/5"
                    : "border-white/5 hover:border-white/12"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span
                    className={`font-semibold text-base transition-colors duration-200 ${
                      openIndex === i ? "text-white" : "text-slate-200"
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`shrink-0 p-1.5 rounded-full transition-all duration-300 ${
                      openIndex === i
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-white/5 text-slate-400"
                    }`}
                  >
                    {openIndex === i ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
