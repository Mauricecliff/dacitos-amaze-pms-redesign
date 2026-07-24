"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CLIENTS_LIST } from "@/data";

const allClients = [
  ...CLIENTS_LIST.commercial.slice(0, 8),
  ...CLIENTS_LIST.residential.slice(0, 8),
  ...CLIENTS_LIST.malls.slice(0, 6),
  ...CLIENTS_LIST.healthcare,
  ...CLIENTS_LIST.education.slice(0, 5),
  ...CLIENTS_LIST.pharma.slice(0, 4),
];

const row1 = allClients.slice(0, Math.ceil(allClients.length / 2));
const row2 = allClients.slice(Math.ceil(allClients.length / 2));

function MarqueeRow({ clients, reverse = false }: { clients: string[]; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden py-2">
      <motion.div
        className="flex gap-4 shrink-0"
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{
          duration: reverse ? 40 : 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
          <div
            key={`${client}-${i}`}
            className="glass border border-white/6 rounded-xl px-5 py-3 whitespace-nowrap text-slate-300 text-sm hover:text-white hover:border-blue-500/20 transition-all duration-200 cursor-default"
          >
            {client}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function ClientsSection() {
  const { ref, inView } = useScrollAnimation();

  const categories = [
    { label: "Commercial & IT", count: `${CLIENTS_LIST.commercial.length}+`, color: "text-blue-400" },
    { label: "Residential", count: `${CLIENTS_LIST.residential.length}+`, color: "text-emerald-400" },
    { label: "Malls & Retail", count: `${CLIENTS_LIST.malls.length}+`, color: "text-pink-400" },
    { label: "Healthcare", count: `${CLIENTS_LIST.healthcare.length}`, color: "text-red-400" },
    { label: "Education", count: `${CLIENTS_LIST.education.length}+`, color: "text-amber-400" },
    { label: "Manufacturing", count: `${CLIENTS_LIST.pharma.length}+`, color: "text-purple-400" },
  ];

  return (
    <section id="clients" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04101f] to-[#030712]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_30%_at_50%_50%,rgba(59,130,246,0.05),transparent)]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>Our Clients</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-5">
            Trusted by{" "}
            <span className="gradient-text">100+ Partners</span>
            <br />Across India
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            From prestigious IT parks to landmark malls — our clients span
            every sector and represent the best names in Indian business.
          </p>
        </motion.div>

        {/* Category Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="glass-card rounded-xl p-4 border border-white/5 text-center hover:border-white/10 transition-all duration-300"
            >
              <div className={`text-2xl font-black ${cat.color} mb-1`}>{cat.count}</div>
              <div className="text-slate-500 text-xs">{cat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Marquee Rows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4 mb-12 relative"
        >
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

          <MarqueeRow clients={row1} />
          <MarqueeRow clients={row2} reverse />
        </motion.div>

        {/* Notable Clients Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 border border-white/5"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Notable Partners & References
            </h3>
            <p className="text-slate-500 text-sm">Industry-leading companies that trust Amaze PMS</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              "Tech Mahindra", "T Hub", "Nexus Mall", "Phoenix Market City",
              "Lulu Mall", "Rainbow Hospitals", "Mahindra Ashvitha", "L&T Metro",
              "Golf Edge Residences", "Sattva Knowledge Park", "KL University", "Delhi Public School"
            ].map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass rounded-xl p-3 border border-white/5 text-center hover:border-blue-500/20 hover:bg-blue-500/5 transition-all duration-300 cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-700/10 flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-400 font-bold text-sm">
                    {client.charAt(0)}
                  </span>
                </div>
                <div className="text-slate-300 text-xs font-medium leading-tight">{client}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
