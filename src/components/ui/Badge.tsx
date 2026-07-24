import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "blue" | "green" | "purple" | "gold" | "default";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-white/5 text-slate-400 border-white/10",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    gold: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
