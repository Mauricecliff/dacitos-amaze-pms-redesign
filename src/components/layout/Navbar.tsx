"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/data";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveDropdown(null);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass border-b border-white/5 shadow-2xl shadow-black/20"
            : "bg-transparent"
        )}
        style={{ height: "80px" }}
      >
        <div className="container-custom h-full flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 22V12H15V22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-none tracking-tight">
                Amaze <span className="text-blue-400">PMS</span>
              </div>
              <div className="text-slate-500 text-[10px] font-medium tracking-widest uppercase">
                Property Management
              </div>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full",
                    "text-slate-300 hover:text-white transition-all duration-200",
                    "hover:bg-white/5"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        activeDropdown === item.label && "rotate-180"
                      )}
                    />
                  )}
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-52 glass-card rounded-xl border border-white/8 shadow-2xl py-1.5 overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => handleNavClick(child.href)}
                          className="w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-150"
                        >
                          {child.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919100694137"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>+91 9100694137</span>
            </a>
            <Button
              href="#contact"
              size="sm"
              onClick={() => handleNavClick("#contact")}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-80 glass-strong z-50 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/8">
                <span className="text-white font-bold text-lg">
                  Amaze <span className="text-blue-400">PMS</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-6 space-y-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
              <div className="p-6 border-t border-white/8 space-y-3">
                <a
                  href="tel:+919100694137"
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <Phone className="w-4 h-4 text-blue-400" />
                  +91 9100694137
                </a>
                <Button
                  href="#contact"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => handleNavClick("#contact")}
                >
                  Get a Quote
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
