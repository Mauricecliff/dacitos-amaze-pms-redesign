"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Award, Heart, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Heart,
    title: "Staff Welfare Program",
    items: [
      "₹2 Lakh Group Insurance",
      "₹10,000 Funeral Expenses",
      "₹1 Lakh Compensation",
      "Diwali Sweets & Festival Gifts",
      "RD/ID Rewards & Recognition",
      "Academic Scholarships for Children",
    ],
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    icon: BookOpen,
    title: "Training & Development",
    items: [
      "NSDC Affiliated Certification",
      "Yearly Training Calendar",
      "Expert Trainers on-site",
      "Safety & EHS Training",
      "Communication Skills",
      "Leadership Development",
    ],
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Award,
    title: "Career Growth",
    items: [
      "Internal Promotions",
      "Cross-functional Exposure",
      "Performance Rewards",
      "Long-service Recognition",
      "Skill Certifications",
      "Pan-India Opportunities",
    ],
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
];

const openPositions = [
  { title: "Security Supervisor", location: "Hyderabad", type: "Full-time" },
  { title: "Housekeeping Executive", location: "Bangalore", type: "Full-time" },
  { title: "MEP Technician", location: "Hyderabad", type: "Full-time" },
  { title: "Facility Manager", location: "Chennai", type: "Full-time" },
  { title: "Help Desk Operator", location: "Hyderabad", type: "Full-time" },
  { title: "Horticulture Expert", location: "Hyderabad", type: "Full-time" },
];

export function CareersSection() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="careers" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] to-[#04101f]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>Careers</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-5">
            Build Your Career{" "}
            <span className="gradient-text">With Amaze</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Join India&apos;s premier facility management company and be part
            of a 15,000+ strong team that values growth, welfare, and excellence.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-xl group"
            >
              <div className={`p-3 rounded-xl ${benefit.bg} inline-flex mb-4 group-hover:scale-110 transition-transform`}>
                <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
              </div>
              <h3 className="text-white font-bold text-lg mb-4">{benefit.title}</h3>
              <ul className="space-y-2">
                {benefit.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full ${benefit.color.replace('text-', 'bg-')} shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 border border-white/5"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Open Positions</h3>
              <p className="text-slate-400 text-sm">Join our growing team across India</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-semibold">Hiring Now</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {openPositions.map((pos, i) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass rounded-xl p-4 border border-white/6 hover:border-blue-500/20 hover:bg-blue-500/5 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-white font-semibold text-sm mb-1 group-hover:text-blue-300 transition-colors">
                      {pos.title}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-xs">
                      <span>📍 {pos.location}</span>
                      <span>·</span>
                      <span>{pos.type}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200 shrink-0 mt-0.5" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-white/8 text-center">
            <p className="text-slate-500 text-sm mb-4">
              Don&apos;t see your role? Send us your CV and we&apos;ll get in touch.
            </p>
            <a
              href="mailto:Info@amazepms.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Users className="w-4 h-4" />
              Apply Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
