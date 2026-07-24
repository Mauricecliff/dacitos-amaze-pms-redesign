"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  disabled = false,
  type = "button",
  icon,
  iconPosition = "right",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 relative overflow-hidden group cursor-pointer select-none";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-500 shadow-lg hover:shadow-blue-500/25 hover:shadow-xl",
    secondary:
      "glass text-white border border-white/10 hover:bg-white/10 hover:border-white/20",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5",
    outline:
      "border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
      {variant === "primary" && (
        <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12 pointer-events-none" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.02 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(classes, disabled && "opacity-50 cursor-not-allowed")}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
    >
      {content}
    </motion.button>
  );
}
