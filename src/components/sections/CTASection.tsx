"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function CTASection() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04101f] to-[#030712]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(59,130,246,0.08),transparent)]" />

      {/* Animated orbs */}
      <motion.div
        className="absolute left-1/4 top-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.8, 0.5, 0.8] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        {/* Main CTA Card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-10 md:p-16 border border-white/8 text-center relative overflow-hidden max-w-4xl mx-auto mb-16"
        >
          {/* Gradient top border */}
          <div className="absolute top-0 left-0 right-0 h-px gradient-border opacity-60" />

          <SectionLabel className="mx-auto mb-6">Get Started</SectionLabel>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Transform{" "}
            <span className="gradient-text">Your Property</span>{" "}
            Management?
          </h2>

          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Join 100+ leading organizations across India who trust Amaze PMS
            for world-class facility management. Get a customized quote today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <motion.a
              href="tel:+919100694137"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all duration-300 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40"
            >
              <Phone className="w-5 h-5" />
              Call +91 9100694137
            </motion.a>
            <motion.a
              href="mailto:Info@amazepms.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full glass border border-white/12 text-white font-bold text-base transition-all duration-300 hover:bg-white/8 hover:border-white/20"
            >
              <Mail className="w-5 h-5 text-blue-400" />
              Email Us
            </motion.a>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              No lock-in contracts
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              Free site survey
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Custom solutions
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              PAN India coverage
            </span>
          </div>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: MapPin,
              title: "Headquarters",
              content: "4th Floor, High Mark Chambers,\nKhajaguda X Road, Cyberabad,\nHyderabad – 500008",
              color: "text-blue-400",
              bg: "bg-blue-500/10",
            },
            {
              icon: Phone,
              title: "Phone",
              content: "+91 9100694137\n+91 8788591533",
              color: "text-emerald-400",
              bg: "bg-emerald-500/10",
              href: "tel:+919100694137",
            },
            {
              icon: Mail,
              title: "Email",
              content: "Info@amazepms.com",
              color: "text-purple-400",
              bg: "bg-purple-500/10",
              href: "mailto:Info@amazepms.com",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <div className={`p-3 rounded-xl ${item.bg} inline-flex mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div className="text-white font-bold mb-2">{item.title}</div>
              {item.href ? (
                <a
                  href={item.href}
                  className={`text-slate-400 text-sm leading-relaxed hover:${item.color} transition-colors duration-200 whitespace-pre-line`}
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                  {item.content}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Presence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-slate-500 text-sm mb-3">Operating across</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Telangana", "Andhra Pradesh", "Karnataka", "Tamil Nadu", "Odisha"].map(
              (state) => (
                <span
                  key={state}
                  className="px-4 py-1.5 rounded-full glass border border-white/8 text-slate-300 text-sm hover:border-blue-500/20 transition-all duration-200"
                >
                  📍 {state}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
