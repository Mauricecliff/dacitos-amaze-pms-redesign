"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TESTIMONIALS } from "@/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const { ref, inView } = useScrollAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const testimonial = TESTIMONIALS[current];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] to-[#04101f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(59,130,246,0.06),transparent)]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-5">
            What Our{" "}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Trusted by 100+ clients across India — hear from the partners who
            experience the Amaze difference every day.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative glass-card rounded-3xl p-8 md:p-12 border border-white/8 overflow-hidden">
            {/* Background quote icon */}
            <Quote className="absolute -top-4 -left-4 w-32 h-32 text-blue-500/5" />

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={testimonial.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-bold">{testimonial.name}</div>
                    <div className="text-slate-400 text-sm">
                      {testimonial.role} · {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="p-3 rounded-full glass border border-white/8 text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-6 h-2 bg-blue-500"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="p-3 rounded-full glass border border-white/8 text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 border border-white/5 max-w-4xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <div className="text-2xl font-black text-white mb-1">
                100+ <span className="text-blue-400">Happy Clients</span>
              </div>
              <div className="text-slate-400 text-sm">Trusted across 6 industry verticals</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-white font-bold">5.0</span>
              <span className="text-slate-500 text-sm">Average Rating</span>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Join Our Clients
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
