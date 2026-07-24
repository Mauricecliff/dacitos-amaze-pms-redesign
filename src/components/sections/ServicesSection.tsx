"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Sparkles,
  Wrench,
  Bug,
  Leaf,
  Waves,
  Headphones,
  Building2,
  Building,
  Users,
  CreditCard,
  Car,
  ArrowRight,
  X,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SERVICES } from "@/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Service } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Sparkles,
  Wrench,
  Bug,
  Leaf,
  Waves,
  Headphones,
  Building2,
  Building,
  Users,
  CreditCard,
  Car,
};

const serviceDetails: Record<string, string[]> = {
  security: [
    "24/7 Armed & Unarmed Security",
    "CCTV Surveillance & Access Control",
    "Fire & Safety Management",
    "Visitor & Vendor Management",
    "Event & Escort Security",
    "Traffic & Parking Control",
    "Perimeter Protection",
    "Command Control Centre",
  ],
  housekeeping: [
    "Daily Office & Common Area Cleaning",
    "Washroom Hygiene Management",
    "Floor Care & Carpet Cleaning",
    "Cafeteria & Pantry Management",
    "Deep Cleaning Services",
    "Janitorial Services",
    "Waste Management",
    "Hospitality Management",
  ],
  mep: [
    "HVAC System Maintenance",
    "Electrical Systems Management",
    "Plumbing & Drainage Services",
    "STP & WTP Operations",
    "Generator & UPS Maintenance",
    "Fire Suppression Systems",
    "Planned Preventive Maintenance",
    "Energy & Sustainability Audits",
  ],
  pest: [
    "General Pest Control",
    "Rodent Management",
    "Termite Treatment",
    "Fumigation Services",
    "Herbal & Eco-friendly Options",
    "Periodic Preventive Programs",
    "Post-treatment Monitoring",
    "Compliance Documentation",
  ],
  gardening: [
    "Landscape Design & Maintenance",
    "Horticulture Services",
    "Irrigation System Management",
    "Seasonal Planting",
    "Tree Trimming & Pruning",
    "Lawn Care",
    "Indoor Plant Management",
    "Green Space Consultation",
  ],
  pool: [
    "Water Quality Testing",
    "Chemical Dosing Management",
    "Filtration System Service",
    "Pool & Deck Cleaning",
    "Equipment Maintenance",
    "Safety Compliance",
    "Health & Safety Checks",
    "Seasonal Shutdown/Startup",
  ],
  helpdesk: [
    "24/7 Help Desk Operations",
    "Complaint Management System",
    "Visitor Management",
    "Material Movement Tracking",
    "Intercom & Communication",
    "Key Management",
    "Command Control Operations",
    "Incident Reporting",
  ],
  clubhouse: [
    "Facility Scheduling & Management",
    "Event Coordination",
    "Amenity Upkeep",
    "Member Services",
    "Recreation Space Management",
    "Housekeeping of Club Area",
    "Equipment Maintenance",
    "Staff Management",
  ],
  facade: [
    "High-Rise Facade Cleaning",
    "Rope Access Services",
    "Glass & Window Cleaning",
    "Surface Treatment",
    "Exterior Restoration",
    "Pressure Washing",
    "Safety Compliance",
    "Periodic Maintenance Plans",
  ],
  tenant: [
    "Tenant Onboarding",
    "Lease Tracking",
    "Move-in/Move-out Coordination",
    "Tenant Communication",
    "Grievance Redressal",
    "Maintenance Request Management",
    "Community Events",
    "NOC & Documentation",
  ],
  payroll: [
    "End-to-End Payroll Processing",
    "Statutory Compliance",
    "PF & ESI Management",
    "Salary Disbursement",
    "Audit Support",
    "Leave Management",
    "Attendance Tracking",
    "MIS Reports",
  ],
  parking: [
    "Smart Parking Management",
    "Traffic Flow Optimization",
    "Valet Services",
    "EV Charging Coordination",
    "Revenue Optimization",
    "ANPR Integration",
    "Parking Guidance Systems",
    "Monthly Reporting",
  ],
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [selected, setSelected] = useState(false);
  const IconComponent = iconMap[service.icon];

  const gradientColors: Record<string, { bg: string; text: string; glow: string }> = {
    "from-blue-500 to-blue-700": { bg: "from-blue-500/15 to-blue-700/5", text: "text-blue-400", glow: "shadow-blue-500/10" },
    "from-emerald-500 to-emerald-700": { bg: "from-emerald-500/15 to-emerald-700/5", text: "text-emerald-400", glow: "shadow-emerald-500/10" },
    "from-orange-500 to-orange-700": { bg: "from-orange-500/15 to-orange-700/5", text: "text-orange-400", glow: "shadow-orange-500/10" },
    "from-red-500 to-red-700": { bg: "from-red-500/15 to-red-700/5", text: "text-red-400", glow: "shadow-red-500/10" },
    "from-green-500 to-green-700": { bg: "from-green-500/15 to-green-700/5", text: "text-green-400", glow: "shadow-green-500/10" },
    "from-cyan-500 to-cyan-700": { bg: "from-cyan-500/15 to-cyan-700/5", text: "text-cyan-400", glow: "shadow-cyan-500/10" },
    "from-purple-500 to-purple-700": { bg: "from-purple-500/15 to-purple-700/5", text: "text-purple-400", glow: "shadow-purple-500/10" },
    "from-pink-500 to-pink-700": { bg: "from-pink-500/15 to-pink-700/5", text: "text-pink-400", glow: "shadow-pink-500/10" },
    "from-slate-500 to-slate-700": { bg: "from-slate-500/15 to-slate-700/5", text: "text-slate-300", glow: "shadow-slate-500/10" },
    "from-indigo-500 to-indigo-700": { bg: "from-indigo-500/15 to-indigo-700/5", text: "text-indigo-400", glow: "shadow-indigo-500/10" },
    "from-teal-500 to-teal-700": { bg: "from-teal-500/15 to-teal-700/5", text: "text-teal-400", glow: "shadow-teal-500/10" },
    "from-amber-500 to-amber-700": { bg: "from-amber-500/15 to-amber-700/5", text: "text-amber-400", glow: "shadow-amber-500/10" },
  };

  const colors = gradientColors[service.color] ?? { bg: "from-blue-500/15 to-blue-700/5", text: "text-blue-400", glow: "shadow-blue-500/10" };
  const details = serviceDetails[service.id] ?? [];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
        whileHover={{ y: -6, transition: { duration: 0.3 } }}
        onClick={() => setSelected(true)}
        className={`relative glass-card rounded-2xl p-6 cursor-pointer group border border-white/5 hover:border-white/12 transition-all duration-400 hover:shadow-2xl hover:${colors.glow}`}
      >
        {/* Icon */}
        <div
          className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${colors.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          {IconComponent && (
            <IconComponent className={`w-6 h-6 ${colors.text}`} />
          )}
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-base mb-2 group-hover:text-blue-200 transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {service.description}
        </p>

        {/* Learn more */}
        <div className={`flex items-center gap-1.5 ${colors.text} text-xs font-semibold group-hover:gap-2.5 transition-all duration-300`}>
          <span>View details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>

        {/* Corner decoration */}
        <div className={`absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setSelected(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md glass-strong rounded-3xl p-8 shadow-2xl"
            >
              <button
                onClick={() => setSelected(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${colors.bg} mb-5`}>
                {IconComponent && (
                  <IconComponent className={`w-8 h-8 ${colors.text}`} />
                )}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{service.description}</p>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                  What&apos;s included
                </div>
                {details.map((detail, i) => (
                  <motion.div
                    key={detail}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center gap-3 py-1.5"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')}`} />
                    <span className="text-slate-300 text-sm">{detail}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/8">
                <a
                  href="#contact"
                  onClick={() => setSelected(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300"
                >
                  Request This Service
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export function ServicesSection() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#040d1e] to-[#030712]" />
      <div className="absolute inset-0 bg-dot-pattern opacity-15" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-5 leading-tight">
            Integrated{" "}
            <span className="gradient-text">Property Management</span>
            <br />Solutions
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From security to sustainability — we deliver every service in-house
            through our 15,000+ trained professionals, ensuring accountability
            at every touchpoint.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-slate-500 text-sm mb-4">
            All services delivered in-house · No subcontracting · Full accountability
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Get Custom Service Package
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
