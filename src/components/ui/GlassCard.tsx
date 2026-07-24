"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "blue" | "purple" | "green" | "none";
  onClick?: () => void;
}

export function GlassCard({
  children,
  className,
  hover = false,
  glow = "none",
  onClick,
}: GlassCardProps) {
  const glowStyles = {
    blue: "hover:shadow-blue-500/10",
    purple: "hover:shadow-purple-500/10",
    green: "hover:shadow-emerald-500/10",
    none: "",
  };

  return (
    <motion.div
      onClick={onClick}
      className={cn(
        "glass-card rounded-2xl p-6",
        hover && [
          "cursor-pointer",
          "transition-all duration-500",
          "hover:bg-white/5 hover:border-white/12",
          "hover:shadow-2xl",
          glowStyles[glow],
        ],
        className
      )}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
