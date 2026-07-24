"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Home,
  ShoppingBag,
  Heart,
  GraduationCap,
  Factory,
  ArrowRight,
  Building2,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { INDUSTRIES, CLIENTS_LIST } from "@/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Industry } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MonitorSmartphone,
  Home,
  ShoppingBag,
  Heart,
  GraduationCap,
  Factory,
};

const clientsMap: Record<string, string[]> = {
  it: CLIENTS_LIST.commercial,
  residential: CLIENTS_LIST.residential,
  malls: CLIENTS_LIST.malls,
  healthcare: CLIENTS_LIST.healthcare,
  education: CLIENTS_LIST.education,
  manufacturing: CLIENTS_LIST.pharma,
};

const industryColors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  it: { bg: "from-blue-500/20 to-blue-700/5", text: "text-blue-400", border: "border-blue-500/20", glow: "hover:shadow-blue-500/10" },
  residential: { bg: "from-emerald-500/20 to-emerald-700/5", text: "text-emerald-400", border: "border-emerald-500/20", glow: "hover:shadow-emerald-500/10" },
  malls: { bg: "from-pink-500/20 to-pink-700/5", text: "text-pink-400", border: "border-pink-500/20", glow: "hover:shadow-pink-500/10" },
  healthcare: { bg: "from-red-500/20 to-red-700/5", text: "text-red-400", border: "border-red-500/20", glow: "hover:shadow-red-500/10" },
  education: { bg: "from-amber-500/20 to-amber-700/5", text: "text-amber-400", border: "border-amber-500/20", glow: "hover:shadow-amber-500/10" },
  manufacturing: { bg: "from-purple-500/20 to-purple-700/5", text: "text-purple-400", border: "border-purple-500/20", glow: "hover:shadow-purple-500/10" },
};

export function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState<Industry>(INDUSTRIES[0]);
  const { ref, inView } = useScrollAnimation();

  const activeClients = clientsMap[activeIndustry.id] ?? [];
  const activeColor = industryColors[activeIndustry.id];
  const ActiveIcon = iconMap[activeIndustry.icon];

  return (
    <section id="industries" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040d1e] to-[#030712]" />
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>Industries We Serve</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-5">
            Property Management{" "}
            <span className="gradient-text">Across Sectors</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From premium IT parks to healthcare facilities — our expertise
            spans every major sector with tailored, compliant solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Industry Tabs */}
          <div className="lg:col-span-4 space-y-2">
            {INDUSTRIES.map((industry, i) => {
              const IconComponent = iconMap[industry.icon];
              const color = industryColors[industry.id];
              const isActive = activeIndustry.id === industry.id;

              return (
                <motion.button
                  key={industry.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  onClick={() => setActiveIndustry(industry)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 border ${
                    isActive
                      ? `bg-gradient-to-r ${color.bg} ${color.border} shadow-lg`
                      : "glass border-white/5 hover:border-white/10 hover:bg-white/3"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl ${
                      isActive ? `bg-gradient-to-br ${color.bg}` : "bg-white/5"
                    } transition-all duration-300`}
                  >
                    {IconComponent && (
                      <IconComponent
                        className={`w-5 h-5 ${isActive ? color.text : "text-slate-400"}`}
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className={`font-semibold text-sm ${
                        isActive ? "text-white" : "text-slate-300"
                      } truncate`}
                    >
                      {industry.title}
                    </div>
                    <div className="text-slate-500 text-xs">
                      {industry.clients}+ properties
                    </div>
                  </div>
                  {isActive && (
                    <ArrowRight className={`w-4 h-4 ${color.text} shrink-0`} />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`glass-card rounded-3xl p-8 border ${activeColor?.border ?? "border-white/8"} h-full`}
            >
              {/* Header */}
              <div className="flex items-start gap-5 mb-6">
                <div
                  className={`p-4 rounded-2xl bg-gradient-to-br ${activeColor?.bg ?? "from-blue-500/20 to-blue-700/5"}`}
                >
                  {ActiveIcon && (
                    <ActiveIcon className={`w-8 h-8 ${activeColor?.text ?? "text-blue-400"}`} />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {activeIndustry.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {activeIndustry.description}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-4 mb-6">
                <div className="glass rounded-xl p-3 border border-white/5 text-center flex-1">
                  <div className={`text-2xl font-black ${activeColor?.text ?? "text-blue-400"}`}>
                    {activeIndustry.clients}+
                  </div>
                  <div className="text-slate-500 text-xs">Properties Managed</div>
                </div>
                <div className="glass rounded-xl p-3 border border-white/5 text-center flex-1">
                  <div className="text-2xl font-black text-white">100%</div>
                  <div className="text-slate-500 text-xs">In-house Services</div>
                </div>
                <div className="glass rounded-xl p-3 border border-white/5 text-center flex-1">
                  <div className="text-2xl font-black text-white">24/7</div>
                  <div className="text-slate-500 text-xs">Support Available</div>
                </div>
              </div>

              {/* Client List */}
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5" />
                  Notable Clients
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeClients.map((client, i) => (
                    <motion.span
                      key={client}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.03 }}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium glass border border-white/6 text-slate-300 hover:text-white hover:border-white/15 transition-all duration-200`}
                    >
                      {client}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-5 border-t border-white/8">
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${activeColor?.text ?? "text-blue-400"} hover:opacity-80 transition-opacity group`}
                >
                  Get a quote for this sector
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
