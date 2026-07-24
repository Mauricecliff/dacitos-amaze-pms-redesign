"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Shield,
  ExternalLink,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const footerLinks = {
  services: [
    "Security Services",
    "Housekeeping",
    "Technical / MEP",
    "Pest Control",
    "Gardening",
    "Swimming Pool",
    "Help Desk Management",
    "Parking Management",
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Strength", href: "#strength" },
    { label: "Industries", href: "#industries" },
    { label: "Clients", href: "#clients" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
  presence: ["Telangana", "Andhra Pradesh", "Karnataka", "Tamil Nadu", "Odisha"],
};

export function Footer() {
  const { ref, inView } = useScrollAnimation();

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#020817] border-t border-white/5">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="container-custom pt-16 pb-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
        >
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Amaze <span className="text-blue-400">PMS</span></div>
                <div className="text-slate-600 text-[10px] uppercase tracking-widest">Property Management</div>
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              India&apos;s trusted integrated facility management company. Founded 2001.
              Under the Action Group of Companies.
            </p>

            <div className="space-y-3">
              <a href="tel:+919100694137" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors group">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                +91 9100694137
              </a>
              <a href="mailto:Info@amazepms.com" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                Info@amazepms.com
              </a>
              <div className="flex items-start gap-2 text-slate-500 text-xs leading-relaxed">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>4th Floor, High Mark Chambers, Khajaguda X Road, Cyberabad, Hyderabad-500008</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("#services")}
                    className="flex items-center gap-1.5 text-slate-500 hover:text-slate-200 text-sm transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center gap-1.5 text-slate-500 hover:text-slate-200 text-sm transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Presence & CTA */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Our Presence</h4>
            <ul className="space-y-2.5 mb-6">
              {footerLinks.presence.map((state) => (
                <li key={state} className="flex items-center gap-2 text-slate-500 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {state}
                </li>
              ))}
            </ul>

            <div className="glass rounded-xl p-4 border border-white/8">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-white font-semibold text-sm">Get Protected</span>
              </div>
              <p className="text-slate-500 text-xs mb-3">
                Free property assessment & service quote
              </p>
              <button
                onClick={() => scrollToSection("#contact")}
                className="w-full py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                Get Free Quote
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-600 text-xs text-center sm:text-left">
            © 2024 Amaze Property Management Solutions Pvt Ltd. All rights reserved.
            <br />
            <span className="text-slate-700">A division of Action Group of Companies</span>
          </div>
          <div className="flex items-center gap-4 text-slate-700 text-xs">
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Service</span>
            <span>·</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
