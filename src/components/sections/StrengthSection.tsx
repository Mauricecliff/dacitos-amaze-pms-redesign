"use client";

import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  CheckCircle,
  Zap,
  ClipboardCheck,
  Landmark,
  TrendingDown,
  Heart,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { STRENGTH_POINTS } from "@/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  ShieldCheck,
  CheckCircle,
  Zap,
  ClipboardCheck,
  Landmark,
  TrendingDown,
  Heart,
};

const processStages = [
  {
    stage: "01",
    title: "Initial Consultation",
    description: "Site survey, understanding requirements, studying existing processes, service & commercial proposal submission.",
    color: "from-blue-500 to-blue-700",
  },
  {
    stage: "02",
    title: "Contract & Planning",
    description: "Contract confirmation, resource planning, recruitment & training, site-specific SOP preparation, service agreement.",
    color: "from-purple-500 to-purple-700",
  },
  {
    stage: "03",
    title: "Deployment & Transition",
    description: "Parallel deployment, induction, handover from existing provider, supervision by operations team.",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    stage: "04",
    title: "Ongoing Excellence",
    description: "Close monitoring, regular audits, site-specific training, client feedback loops and continuous improvement.",
    color: "from-amber-500 to-amber-700",
  },
];

export function StrengthSection() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="strength" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#04101f] to-[#030712]" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>Our Strength</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-5">
            Why Amaze PMS Stands{" "}
            <span className="gradient-text">Apart</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            23 years of operational excellence, backed by rigorous training,
            internal audits, and a welfare-driven culture.
          </p>
        </motion.div>

        {/* Strength Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {STRENGTH_POINTS.map((point, i) => {
            const IconComponent = iconMap[point.icon];
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl p-6 border border-white/5 hover:border-white/12 transition-all duration-400 hover:shadow-xl group"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 inline-flex mb-4 group-hover:bg-blue-500/15 transition-all duration-300">
                  {IconComponent && (
                    <IconComponent className="w-5 h-5 text-blue-400" />
                  )}
                </div>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-blue-200 transition-colors">
                  {point.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Process Flow */}
        <div className="text-center mb-12">
          <SectionLabel>Our Process</SectionLabel>
          <h3 className="text-3xl md:text-4xl font-black text-white mt-6 mb-4">
            4-Stage Onboarding Process
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            A structured, transparent approach that ensures seamless transitions
            and consistent service delivery from day one.
          </p>
        </div>

        {/* Process Stages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connector line */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />

          {processStages.map((stage, i) => (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* Stage number bubble */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center mx-auto mb-5 shadow-lg z-10 relative`}>
                <span className="text-white font-black text-xl">{stage.stage}</span>
              </div>

              <div className="glass-card rounded-2xl p-5 border border-white/5 text-center hover:border-white/10 transition-all duration-300">
                <h4 className="text-white font-bold text-base mb-2">{stage.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{stage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Audit Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass-card rounded-3xl p-8 border border-white/5"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Comprehensive Audit Framework</h3>
            <p className="text-slate-400 text-sm">MMR · QBR · Bi-Annual · Annual audits across all categories</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Security Audit", "Engineering Audit", "Soft Services Audit",
              "EHS Audit", "Safety Audit", "Risk Audit", "Inventory Audit",
              "Process Audit", "AMC Tracking", "Energy & Sustainability Audit",
              "Compliance Audit", "Revenue Generation Review"
            ].map((audit, i) => (
              <motion.span
                key={audit}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="px-4 py-2 rounded-full glass border border-white/8 text-slate-300 text-sm hover:text-white hover:border-blue-500/30 transition-all duration-200 flex items-center gap-2"
              >
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                {audit}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
