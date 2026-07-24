"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Play,
  Shield,
  Sparkles,
  Wrench,
  Users,
  CheckCircle,
  Star,
  TrendingUp,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useMouseParallax } from "@/hooks/useMouseParallax";

const floatingCards = [
  {
    icon: Shield,
    label: "Security Active",
    value: "24/7",
    color: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
    delay: 0,
    position: "top-[18%] left-[3%]",
  },
  {
    icon: CheckCircle,
    label: "Audits Passed",
    value: "100%",
    color: "from-emerald-500/20 to-emerald-600/10",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-400",
    delay: 0.2,
    position: "top-[55%] left-[1%]",
  },
  {
    icon: TrendingUp,
    label: "Sq.Ft Managed",
    value: "20M+",
    color: "from-purple-500/20 to-purple-600/10",
    border: "border-purple-500/20",
    iconColor: "text-purple-400",
    delay: 0.4,
    position: "top-[20%] right-[3%]",
  },
  {
    icon: Users,
    label: "Professionals",
    value: "15,000+",
    color: "from-amber-500/20 to-amber-600/10",
    border: "border-amber-500/20",
    iconColor: "text-amber-400",
    delay: 0.6,
    position: "top-[58%] right-[1%]",
  },
];

const serviceChips = [
  { label: "Security", icon: Shield },
  { label: "Housekeeping", icon: Sparkles },
  { label: "MEP Services", icon: Wrench },
  { label: "Pest Control", icon: CheckCircle },
  { label: "Gardening", icon: CheckCircle },
  { label: "Pool Maintenance", icon: CheckCircle },
];

const statBadges = [
  { value: "23+", label: "Years" },
  { value: "100+", label: "Clients" },
  { value: "5+", label: "States" },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useMouseParallax(0.015);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Layered Background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#030d1f] to-[#030712]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Radial glow center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]" />

        {/* Blue orb left */}
        <motion.div
          className="absolute -left-32 top-1/3 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[100px] animate-pulse-glow"
          style={{ x: mouse.x * -1, y: mouse.y * -1 }}
        />

        {/* Purple orb right */}
        <motion.div
          className="absolute -right-32 bottom-1/3 w-[400px] h-[400px] rounded-full bg-purple-600/8 blur-[80px] animate-pulse-glow"
          style={{
            x: mouse.x,
            y: mouse.y,
            animationDelay: "1.5s",
          }}
        />

        {/* Subtle noise */}
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      </motion.div>

      {/* Floating Cards - Desktop Only */}
      {floatingCards.map((card) => (
        <motion.div
          key={card.label}
          className={`absolute hidden xl:flex ${card.position} items-center gap-3 px-4 py-3 rounded-2xl glass border ${card.border} min-w-[160px] z-20`}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: card.delay + 1.2,
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            x: mouse.x * (card.delay + 0.5) * 0.8,
            y: mouse.y * (card.delay + 0.5) * 0.8,
          }}
        >
          <div
            className={`p-2 rounded-xl bg-gradient-to-br ${card.color}`}
          >
            <card.icon className={`w-4 h-4 ${card.iconColor}`} />
          </div>
          <div>
            <div className="text-white font-bold text-sm">{card.value}</div>
            <div className="text-slate-400 text-xs">{card.label}</div>
          </div>
          <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        className="container-custom relative z-10 text-center"
        style={{ y: contentY, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-sm">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-slate-300">
              India&apos;s Premier Facility Management Company
            </span>
            <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold">
              Since 2001
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-6"
        >
          <span className="text-white block">One Partner.</span>
          <span className="gradient-text-hero block">Every Property</span>
          <span className="text-white block">Need.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-4 leading-relaxed text-balance"
        >
          Amaze PMS delivers end-to-end integrated facility management across{" "}
          <span className="text-slate-200 font-medium">20M+ sq ft</span> of
          premium properties — with{" "}
          <span className="text-slate-200 font-medium">15,000+ professionals</span>{" "}
          and <span className="text-slate-200 font-medium">23 years</span> of
          proven excellence.
        </motion.p>

        {/* Location badge */}
        <motion.p
          variants={itemVariants}
          className="text-sm text-slate-500 mb-10"
        >
          🏢 Hyderabad, Bangalore · PAN India Operations · Telangana · AP · Karnataka · Tamil Nadu · Odisha
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Button
            size="lg"
            href="#contact"
            icon={<ArrowRight className="w-5 h-5" />}
            className="bg-blue-600 hover:bg-blue-500 text-white shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 px-8 py-4 text-base font-semibold"
          >
            Get a Free Quote
          </Button>
          <Button
            size="lg"
            variant="secondary"
            href="#services"
            icon={<Play className="w-4 h-4" />}
            iconPosition="left"
            className="px-8 py-4 text-base"
          >
            Explore Services
          </Button>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {statBadges.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/8"
            >
              <span className="text-white font-bold text-lg">{stat.value}</span>
              <span className="text-slate-500 text-sm">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Service Chips */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-2 mb-16"
        >
          <span className="text-slate-600 text-xs uppercase tracking-widest mr-2">
            Services:
          </span>
          {serviceChips.map((chip) => (
            <div
              key={chip.label}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/4 border border-white/6 text-slate-400 text-xs hover:text-white hover:bg-white/8 transition-all duration-200 cursor-default"
            >
              <chip.icon className="w-3 h-3 text-blue-400" />
              {chip.label}
            </div>
          ))}
          <span className="text-slate-600 text-xs">+9 more</span>
        </motion.div>

        {/* Hero Dashboard Preview */}
        <motion.div
          variants={itemVariants}
          className="relative max-w-4xl mx-auto"
        >
          {/* Glow behind dashboard */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-3xl scale-110" />

          {/* Dashboard Frame */}
          <div className="relative rounded-2xl glass border border-white/8 overflow-hidden shadow-2xl">
            {/* Browser Bar */}
            <div className="bg-[#0d1424] px-4 py-3 border-b border-white/5 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
              </div>
              <div className="flex-1 bg-white/5 rounded-md px-3 py-1 text-slate-500 text-xs text-center">
                amazepms.com — Property Management Dashboard
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-500 text-xs">Live</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 bg-gradient-to-b from-[#0a1628] to-[#050d1a]">
              {/* Top Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {[
                  { label: "Properties", value: "250+", change: "+12%", color: "text-blue-400" },
                  { label: "Staff Active", value: "15,000", change: "+5%", color: "text-emerald-400" },
                  { label: "Sq.Ft Covered", value: "20M+", change: "+8%", color: "text-purple-400" },
                  { label: "Audits Done", value: "1,240", change: "+18%", color: "text-amber-400" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass rounded-xl p-3 border border-white/5"
                  >
                    <div className="text-slate-500 text-xs mb-1">{stat.label}</div>
                    <div className={`font-bold text-lg ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-emerald-400 text-xs">{stat.change} ↑</div>
                  </div>
                ))}
              </div>

              {/* Middle Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                {/* Service Activity */}
                <div className="sm:col-span-2 glass rounded-xl p-4 border border-white/5">
                  <div className="text-slate-400 text-xs font-medium mb-3 uppercase tracking-wider">
                    Service Distribution
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: "Security", pct: 28, color: "bg-blue-500" },
                      { label: "Housekeeping", pct: 35, color: "bg-emerald-500" },
                      { label: "MEP Services", pct: 22, color: "bg-purple-500" },
                      { label: "Other Services", pct: 15, color: "bg-amber-500" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <span className="text-slate-500 text-xs w-24 shrink-0">
                          {item.label}
                        </span>
                        <div className="flex-1 bg-white/5 rounded-full h-1.5 overflow-hidden">
                          <motion.div
                            className={`h-full ${item.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: `${item.pct}%` }}
                            transition={{
                              delay: 1.5,
                              duration: 1.2,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                        <span className="text-slate-500 text-xs w-8 text-right">
                          {item.pct}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Status */}
                <div className="glass rounded-xl p-4 border border-white/5">
                  <div className="text-slate-400 text-xs font-medium mb-3 uppercase tracking-wider">
                    Live Status
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { label: "Security Posts", status: "Active", color: "bg-emerald-400" },
                      { label: "Housekeeping", status: "On Duty", color: "bg-blue-400" },
                      { label: "MEP Team", status: "On-site", color: "bg-emerald-400" },
                      { label: "Help Desk", status: "Open", color: "bg-emerald-400" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between"
                      >
                        <span className="text-slate-500 text-xs">{item.label}</span>
                        <div className="flex items-center gap-1.5">
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${item.color} animate-pulse`}
                          />
                          <span className="text-slate-300 text-xs">
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Tags */}
              <div className="flex flex-wrap gap-2">
                {[
                  "🏢 IT Parks",
                  "🏠 Residential",
                  "🏥 Hospitals",
                  "🎓 Colleges",
                  "🏭 Manufacturing",
                  "🛒 Malls",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/4 border border-white/6 text-slate-400 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none rounded-b-2xl" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-2 mt-12 text-slate-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <motion.div
            className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-blue-400"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none z-10" />
    </section>
  );
}
