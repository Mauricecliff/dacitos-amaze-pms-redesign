"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Users, Globe, CheckCircle, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";

const highlights = [
  {
    icon: Award,
    title: "Founded 2001",
    description: "23+ years of trusted service excellence under the Action Group of Companies",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: ShieldCheck,
    title: "NSDC Affiliated",
    description: "Workforce training certified by National Skill Development Corporation of India",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Users,
    title: "15,000+ Professionals",
    description: "Rigorously screened, trained, and welfare-supported team members",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Globe,
    title: "PAN India Operations",
    description: "Presence across Telangana, AP, Karnataka, Tamil Nadu and Odisha",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

const values = [
  "Professionalism", "Integrity", "Accountability", "Quality Service",
  "Innovation", "Sustainability", "Client Focus", "Staff Welfare"
];

export function AboutSection() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] to-[#040d1e]" />
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image & Stats */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] glass border border-white/8">
              <Image
                src="/images/about-team.png"
                alt="Amaze PMS Professional Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/70 via-transparent to-transparent" />

              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-2 border-[#030712] flex items-center justify-center text-white text-xs font-bold"
                        >
                          {i}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">15,000+ Team Members</div>
                      <div className="text-slate-400 text-xs">Trained · Verified · Deployed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -top-6 -right-6 glass rounded-2xl p-4 border border-white/10 shadow-2xl hidden md:block"
            >
              <div className="text-center">
                <div className="text-3xl font-black text-white">20<span className="text-blue-400">M+</span></div>
                <div className="text-slate-400 text-xs mt-0.5">Sq.Ft Managed</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 border border-white/10 shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="text-white font-bold text-sm">100+ Clients</div>
                  <div className="text-slate-500 text-xs">Trusted PAN India</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <SectionLabel>About Us</SectionLabel>

            <h2 className="text-4xl md:text-5xl font-black text-white mt-6 mb-5 leading-tight">
              India&apos;s Trusted{" "}
              <span className="gradient-text">Property Management</span>{" "}
              Partner
            </h2>

            <p className="text-slate-400 leading-relaxed mb-6">
              <strong className="text-white">Amaze PMS Pvt Ltd</strong> is a
              Property Management division of{" "}
              <strong className="text-blue-400">ACTION GROUP of Companies</strong>,
              founded in 2001 by Mr. Subhani Abdul — a veteran from the Indian
              Navy, Certified Security Practitioner, and a renowned name in the
              Service Industry.
            </p>

            <p className="text-slate-400 leading-relaxed mb-8">
              With headquarters in Cyberabad, Hyderabad, we provide comprehensive
              integrated facility management across PAN India — specializing in
              Housekeeping, MEP, Security, Pest Control, Gardening, STP & WTP,
              Parking, Swimming Pool Maintenance, and much more — all delivered
              entirely in-house.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 p-4 rounded-xl glass border border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <div className={`p-2 rounded-lg ${item.bg} shrink-0`}>
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-0.5">{item.title}</div>
                    <div className="text-slate-500 text-xs leading-relaxed">{item.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Values */}
            <div className="mb-8">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                Our Core Values
              </div>
              <div className="flex flex-wrap gap-2">
                {values.map((value) => (
                  <span
                    key={value}
                    className="px-3 py-1 rounded-full bg-white/4 border border-white/8 text-slate-300 text-xs hover:text-white hover:border-blue-500/30 transition-all duration-200"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200 group"
            >
              Work with us today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
